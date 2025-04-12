import express, { Request, Response } from 'express';
import helmet from 'helmet'; // Correct import for helmet
import morgan from 'morgan'; // Correct import for morgan
import { notFoundHandler } from './components/middleware/notFoundHandler';
import { errorHandler } from './components/middleware/errorHandlert';
import { connect } from './components/config/db';

const app = express();
const port = 3000;


app.use(helmet());
app.use(morgan('dev'));

app.get('/', (req: Request, res: Response) => {
  res.status(200).send({ message: 'Hello from Express + TypeScript' });
  
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
