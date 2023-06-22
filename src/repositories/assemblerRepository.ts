import { connectionSource } from "../data-source";
import { Assembler } from "../entities/Assembler";

export const assemblerRepository = connectionSource.getRepository(Assembler);