import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import { Car } from './Car';

@Entity('assemblers')
export class Assembler{

    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text'})
    name: string

    @OneToMany(() => Car, car => car.assembler)
    cars: Car[]
}