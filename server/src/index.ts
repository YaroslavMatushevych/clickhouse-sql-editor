import express from 'express';
import cors from 'cors';
import { ENV } from './config/env';
import queryRoutes from './routes/query.routes';
import fileRoutes from './routes/file.routes';
import { errorHandler } from './middlewares/errorHandler.middleware';
import bodyParser from 'body-parser';

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express();

app.use(jsonParser);
app.use(urlencodedParser);

app.use(cors());
app.use(express.json());

app.use('/api', queryRoutes);
app.use('/api', fileRoutes);

app.use(errorHandler);

app.listen(ENV.PORT, () => {
  console.log(`Server running on http://localhost:${ENV.PORT}`);
});
