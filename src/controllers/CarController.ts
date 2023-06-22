import { Request, Response } from "express";
import { connectionSource } from "../data-source";
import { carRepository } from "../repositories/carRepository";
import { assemblerRepository } from "../repositories/assemblerRepository";

export class CarController{
    async create(req: Request, res: Response ){
        const {name, model} = req.body
        const {assemblerid} = req.params


        try {
            const assembler = await assemblerRepository.findOneBy({id: Number(assemblerid)})

            if(!assembler){
                return res.status(404).json({message: 'Não existe essa montadora.'})
            }
    
            const carCreated = carRepository.create({
                name, model, assembler
            })
    
            await carRepository.save(carCreated);
    
            return res.status(201).json(carCreated);    
        } catch (error) {
            return res.status(500).json(error);
        }

        
    }
}