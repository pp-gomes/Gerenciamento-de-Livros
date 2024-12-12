import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const create = async (req: Request, res: Response) => {
    const { titulo, autor, anoPublicacao, genero } = req.body;
    try {
        const novoLivro = await prisma.livro.create({
            data: { titulo, autor, anoPublicacao, genero },
        });
        res.status(201).json(novoLivro);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar livro.' });
    }
};

export const researchId = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const livro = await prisma.livro.findUnique({ where: { id: parseInt(id) } });
        if (livro) res.status(200).json(livro);
        else res.status(404).json({ error: 'Livro não encontrado.' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar livro.' });
    }
};

export const researchAll = async (_req: Request, res: Response) => {
    try {
        const livros = await prisma.livro.findMany(); // Obtém todos os livros do banco
        res.status(200).json(livros); // Retorna os livros encontrados
    } catch (error) {
        console.error('Erro ao listar livros:', error); // Loga o erro no console
        res.status(500).json({ error: 'Erro ao listar livros.' }); // Retorna erro
    }
};

export const update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { titulo, autor, anoPublicacao, genero } = req.body;
    try {
        const livroAtualizado = await prisma.livro.update({
            where: { id: parseInt(id) },
            data: { titulo, autor, anoPublicacao, genero },
        });
        res.status(200).json(livroAtualizado);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar livro.' });
    }
};

export const deleted = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await prisma.livro.delete({ where: { id: parseInt(id) } });
        res.status(200).json({ message: 'Livro excluído com sucesso.' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir livro.' });
    }
};
