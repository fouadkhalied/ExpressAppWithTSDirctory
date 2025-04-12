import express, { Request, Response } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { notFoundHandler } from './components/middleware/notFoundHandler';
import { errorHandler } from './components/middleware/errorHandlert';
import { connect, pool } from './components/config/db';

const app = express();
const port = 3000;


app.use(helmet());
app.use(morgan('dev'));

app.get('/', async (req: Request, res: Response) => {
  const obj = await pool.query("SELECT 1 as def")
  console.log(obj.rows[0].def);
  
  res.status(200).send({ message: `Hello from Express + TypeScript + ${obj.rows[0].def}` });
  
});


app.use(errorHandler)
app.use(notFoundHandler)

try {
  connect()
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
} catch (error) {
  console.log(error);
}



