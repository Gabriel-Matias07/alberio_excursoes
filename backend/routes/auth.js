const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require('../config/database'); // Conexão com o banco
require("dotenv").config();

const router = express.Router();

// Rota de Cadastro
router.post("/register", async (req, res) => {
    const { nome, sobrenome, email, senha } = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios!" });
    }

    try {
        // Verificar se o email já existe
        const [rows] = await db.execute("SELECT * FROM usuarios WHERE email = ?", [email]);

        if (rows.length > 0) {
            return res.status(400).json({ message: "Este email já está cadastrado." });
        }

        // Criptografar a senha
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(senha, salt);

        // Inserir no banco de dados
        await db.execute("INSERT INTO usuarios (nome, sobrenome, email, senha) VALUES (?, ?, ?, ?)", [nome, sobrenome, email, hashedPassword]);

        res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro no servidor!" });
    }
});

// Rota de Login
router.post("/login", async (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios!" });
    }

    try {
        // Buscar usuário pelo email
        const [rows] = await db.execute("SELECT * FROM usuarios WHERE email = ?", [email]);

        if (rows.length === 0) {
            return res.status(400).json({ message: "Email ou senha incorretos!" });
        }

        const usuario = rows[0];

        // Comparar senha criptografada
        const senhaValida = await bcrypt.compare(senha, usuario.senha);
        if (!senhaValida) {
            return res.status(400).json({ message: "Email ou senha incorretos!" });
        }

        // Gerar Token JWT
        const token = jwt.sign({ id: usuario.id, email: usuario.email }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.json({ message: "Login bem-sucedido!", token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro no servidor!" });
    }
});

module.exports = router;
