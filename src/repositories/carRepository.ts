import { connectionSource } from "../data-source";
import { Car } from "../entities/Car";

export const carRepository = connectionSource.getRepository(Car);