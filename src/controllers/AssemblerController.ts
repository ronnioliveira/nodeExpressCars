import { Request, Response } from "express";
import { assemblerRepository } from "../repositories/assemblerRepository";

export class AssemblerController{
    async create(req: Request, res: Response){
        const { name } = req.body

        if(!name){
            return res.status(400).json({message: 'Assembler name is required'})
        }

        try {
            const assembler = assemblerRepository.create({ name });

            await assemblerRepository.save(assembler);

            return res.status(201).json(assembler);
        } catch (error) {
            return res.status(500).json({message: error})
        }
    }
}