import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from "typeorm";

const port = process.env.DB_PORT as number | undefined;

export const connectionSource = new DataSource({
    migrationsTableName: 'migrations',
    type: 'postgres',
    host: process.env.DB_HOST,
    port: port,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    // logging: false,
    // synchronize: false,
    // name: 'default',
    //entities: ['src/**/**.entity{.ts,.js}'],
    entities: [`${__dirname}/**/entities/*.{ts,js}`],
    migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
    // migrations: ['src/database/migrations/**/*{.ts,.js}'],
    // subscribers: ['src/subscriber/**/*{.ts,.js}'],
});
