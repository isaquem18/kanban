import { Router } from 'express';
import { Ask } from '../../controllers/Ask';
import { validate } from 'uuid';

const askRoutes = Router();
const ask = new Ask();

askRoutes.get('/', async (req, res) => {

  let searchValue = String(req.query?.value);
   
  let askList;
  if (!searchValue) {
    askList = await ask.list();
  } else {
    searchValue = String(searchValue);
    askList = await ask.search(searchValue);
  }

  return res.status(200).json(askList)
});


askRoutes.post('/', async (req, res) => {
  
  const { title, text } = req.body;

  if (!title || !text) {
    return res.status(400).json({ message: 'Invalid title or/and text values.'})
  }

  const response  = await ask.create({ title, text });

  if (!response?.affectedRows || response?.affectedRows === 0) {
    return res.status(400).send();
  } 

  return res.status(201).send();

});


askRoutes.delete('/:id?', async (req, res) => {
  const id = req.params?.id || '';

  if (!id || !validate(id)) {
    return res.status(404).end();
  }

  const response = await ask.delete(id);

  if (response?.affectedRows === 0) {
    return res.status(404).end();
  }

  return res.status(200).json({ message: 'user successfully deleted.'});
});
 
export { askRoutes };
