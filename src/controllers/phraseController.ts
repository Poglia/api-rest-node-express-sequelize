import { Request, Response } from "express";
import { Sequelize } from "sequelize";
import { Phrase } from "../models/phrase";

export const createPhrase =  async(req: Request, res: Response) => {
    let {author , text} = req.body;

    let newPhrase = await Phrase.create({
        author, text
    })
    res.status(201);

    res.json({id: newPhrase.id, author, text});
}

export const listPhrases =  async(req: Request, res: Response) => {
    let list  = await Phrase.findAll();
    res.json({list});
}

export const getPhrase =  async(req: Request, res: Response) => {
    let {id} = req.params;

    let phrase = await Phrase.findByPk(id);
    if(phrase)
        res.json({phrase});
    else
        res.json({error: "Frase não encontrada"});

}

export const updatePhrase =  async(req: Request, res: Response) => {
    let {id} = req.params;
    let {author , text} = req.body;

    let phrase = await Phrase.findByPk(id);
    if(phrase)
        {
            phrase.author = author;
            phrase.text = text;
            
            await phrase.save();
            res.json({phrase});

        }
    else
        res.json({error: "Frase não encontrada"});

}

export const deletePhrase =  async(req: Request, res: Response) => {
    let {id} = req.params;
    await Phrase.destroy({ where: { id }});
    res.json({});
}

export const randomPhrase =  async(req: Request, res: Response) => {
    let phrase = await Phrase.findOne({
        order: [
            Sequelize.fn('RANDOM')
        ]
    });

    if(phrase)
        res.json({phrase});
    else
        res.json({error: "Frase não encontrada"});
}