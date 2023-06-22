import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn} from 'typeorm';
import { Assembler } from './Assembler';

@Entity('cars')
export class Car{

    @PrimaryGeneratedColumn()
    id:number

    @Column({type: 'text'})
    name:string

    @Column({type: 'text'})
    model:string

    @CreateDateColumn()
    created_at:Date

    @ManyToOne(() => Assembler, assembler => assembler.cars)
    @JoinColumn({name: 'assembler_id'})
    assembler: Assembler
}