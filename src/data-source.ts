// src/data-source.ts
import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Sagar@321',
  database: 'docusign_db',
  synchronize: true,
  logging: false,
  entities: ['src/modules/**/entities/*.ts'],
  migrations: ['src/migrations/*.ts'],
  subscribers: [],
});
