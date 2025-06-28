// src/data-source.ts
import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'yourpass',
  database: 'yourdb',
  synchronize: true,
  logging: false,
  entities: ['src/modules/**/entities/*.ts'],
  migrations: ['src/migrations/*.ts'],
  subscribers: [],
});
