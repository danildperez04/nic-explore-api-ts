import express, { Express } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from 'routes';

const app: Express = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.get('/', (req, res) => {
  res.send('<h1>Server is running! 😄</h1>');
});

app.use('/api', router);

// Use the notFoundHandler middleware

// Error handling

export default app;