import http from 'http';
import dotenv from 'dotenv';
dotenv.config();

import app from './app';
import { dataSource } from './config/database';

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(PORT, async () => {
  try {
    await dataSource.initialize();
    console.log(`Server running at http://localhost:${PORT}/`);
  } catch (error) {
    console.error(`Error occurred: ${error}`);
  }
});

process.on('SIGINT', () => {
  process.exit(0);
});

process.on('exit', () => {
  console.log('\nGoodbye! 🤖');
  server.close();
});
