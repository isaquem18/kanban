import app from './server';

const PORT = 3000;
const HOSTNAME = ' 127.0.0.1';

app.listen(PORT, () => {
  console.log(`SERVER STARTED ON ${HOSTNAME}:${PORT}`)
});
