// src/index.ts
import express from 'express';
import dotenv from 'dotenv';
import { AppDataSource } from './data-source.js';
import commonService from './modules/common/index.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

commonService.forEach(service => {
  app.use('/api', service);
});

AppDataSource.initialize()
  .then(() => {
    console.log('✅ Database connected');
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err:any) => {
    console.error('❌ Failed to connect to database:', err);
  });
