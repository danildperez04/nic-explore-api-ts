import express, { Express } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from './routes';
import { notFoundHandler } from './middlewares/notfound';
import { errorHandler } from './middlewares/errorHandler';
import path from 'path';


const app: Express = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Servir archivos estáticos
app.use('/uploads', express.static(path.join(__dirname, '../public/uploads')));

// Routes
app.get('/', (req, res) => {
  res.send('<h1>Server is running! 😄</h1>');
});

app.use('/api', router);

// Use the notFoundHandler middleware
app.use(notFoundHandler);

// Error handling
app.use(errorHandler);

export default app;