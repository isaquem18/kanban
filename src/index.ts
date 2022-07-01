import app from './server';

const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || 'http://127.0.0.1';

app.listen(PORT, () => {
  console.log(`SERVER STARTED`)
});
