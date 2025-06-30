// src/data-source.ts
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import { dot } from 'node:test/reporters';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: process.env.DB_PASS || '', // Use environment variable for password
  database: 'docusign_db',
  synchronize: true,
  logging: false,
  entities: ['src/modules/**/entities/*.ts'],
  migrations: ['src/migrations/*.ts'],
  subscribers: [],
});
