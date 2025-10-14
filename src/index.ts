import http from 'http';
import dotenv from 'dotenv';
dotenv.config();

import app from './app';

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

process.on('SIGINT', () => {
  process.exit(0);
});

process.on('exit', () => {
  console.log('\nGoodbye! 🤖');
  server.close();
});
