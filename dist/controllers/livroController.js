"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleted = exports.update = exports.researchAll = exports.researchId = exports.create = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { titulo, autor, anoPublicacao, genero } = req.body;
    try {
        const novoLivro = yield prisma.livro.create({
            data: { titulo, autor, anoPublicacao, genero },
        });
        res.status(201).json(novoLivro);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao criar livro.' });
    }
});
exports.create = create;
const researchId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const livro = yield prisma.livro.findUnique({ where: { id: parseInt(id) } });
        if (livro)
            res.status(200).json(livro);
        else
            res.status(404).json({ error: 'Livro não encontrado.' });
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar livro.' });
    }
});
exports.researchId = researchId;
const researchAll = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const livros = yield prisma.livro.findMany(); // Obtém todos os livros do banco
        res.status(200).json(livros); // Retorna os livros encontrados
    }
    catch (error) {
        console.error('Erro ao listar livros:', error); // Loga o erro no console
        res.status(500).json({ error: 'Erro ao listar livros.' }); // Retorna erro
    }
});
exports.researchAll = researchAll;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { titulo, autor, anoPublicacao, genero } = req.body;
    try {
        const livroAtualizado = yield prisma.livro.update({
            where: { id: parseInt(id) },
            data: { titulo, autor, anoPublicacao, genero },
        });
        res.status(200).json(livroAtualizado);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar livro.' });
    }
});
exports.update = update;
const deleted = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield prisma.livro.delete({ where: { id: parseInt(id) } });
        res.status(200).json({ message: 'Livro excluído com sucesso.' });
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao excluir livro.' });
    }
});
exports.deleted = deleted;
