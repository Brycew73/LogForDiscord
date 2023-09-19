import 'dotenv/config'; 
import express from 'express';

const app = express();

app.use(express.json());

const url = process.env.DISCORD_WEBHOOK;

app.post('/', async(req, res) => {
  const {
    logs
  } = req.body;

  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      "content": logs
    })
  };

  console.log(options);

  const response = await fetch(url, options);

  res.end();
});

app.listen(3000);