const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const prices = [
  {
    id: 1,
    instrument: 'EUR/USD',
    bid: 1.1000,
    ask: 1.2000,
    timestamp: '01-06-2020 12:01:01:001'
  },
  {
    id: 2,
    instrument: 'EUR/JPY',
    bid: 119.60,
    ask: 119.90,
    timestamp: '01-06-2020 12:01:02:001'
  },
  {
    id: 3,
    instrument: 'GBP/USD',
    bid: 1.2500,
    ask: 1.2560,
    timestamp: '01-06-2020 12:01:02:001'
  },
  {
    id: 4,
    instrument: 'GBP/USD',
    bid: 1.2500,
    ask: 1.2560,
    timestamp: '01-06-2020 12:01:02:100'
  }
];

app.get('/api/prices', (req, res) => {
  res.json(prices);
});

app.get('/api/prices/:instrument', (req, res) => {
  const instrument = req.params.instrument;
  const latestPrice = prices.find(price => price.instrument === instrument);
  res.json(latestPrice);
});

const port = process.env.PORT || 4400;

app.listen(port, () => console.log(`Server started on port ${port}`));
