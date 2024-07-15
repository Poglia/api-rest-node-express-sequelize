import { Request, Response } from "express";
import { Book } from "../models/books";
import { Sequelize } from "sequelize";

export const createBook = async(req: Request, res: Response) => {
    let {author, title} = req.body;

    let newBook = await Book.create({
        author, title
    })
    res.status(201);

    res.json({id: newBook.id, author, title});
}

export const listBooks =  async(req: Request, res: Response) => {
    let list  = await Book.findAll();
    res.json({list});
}

export const getBook =  async(req: Request, res: Response) => {
    let {id} = req.params;

    let book = await Book.findByPk(id);
    if(book)
        res.json({book});
    else
        res.json({error: "Livro não encontrado"});
}

export const updateBook = async(req: Request, res: Response) => {
    let {id} = req.params;
    let {author , title} = req.body;

    let book = await Book.findByPk(id);
    if(book)
        {
            book.author = author;
            book.title = title;
            
            await book.save();
            res.json({book});

        }
    else
        res.json({error: "Livro não encontrado"});

}

export const deleteBook =  async(req: Request, res: Response) => {
    let {id} = req.params;
    await Book.destroy({ where: { id }});
    res.json({});
}