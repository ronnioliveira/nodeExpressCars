import {Router} from 'express'
import { CarController } from './controllers/CarController';
import { AssemblerController } from './controllers/AssemblerController';

const routes = Router();

//routes.post('/car', new CarController().create);
routes.post('/car/:assemblerid/create', new CarController().create);
routes.post('/assembler', new AssemblerController().create);

export default routes;