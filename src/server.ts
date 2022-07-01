import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { resolve } from 'path';
import { askRoutes}  from './routes/ask';
import { Ask } from './controllers/Ask';

const app = express();

app.use(cors());
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', resolve('src', 'views', 'screens'));
app.use(express.static(resolve('src', 'views', 'styles')));
app.use(express.static(resolve('src', 'views', 'assets')));
app.use(express.static(resolve('src', 'views', 'js')));
const ask = new Ask();

app.use('/ask', askRoutes);

app.get('/', async(req, res) => {
  
  const response = await ask.list();

  return res.status(200).render('index.ejs', {
    response
  });
});

app.get('/new-ask', (req, res) => {

  return res.status(200).render('newAsk');
});


export default app;
