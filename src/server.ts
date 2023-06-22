import 'reflect-metadata';
import express from 'express';
import { connectionSource } from './data-source';
import routes from './routes';


connectionSource.initialize().then(() => {
    const app = express();

    app.use(express.json());
    app.use(routes);
   
    return app.listen(2112, () => console.log('Server is running.'));
});
