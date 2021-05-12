const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/events', async (req, res) => {
  const event = req.body;

  await axios.post('https://myday-posts.vercel.app/posts/events', event);
  await axios.post('https://myday-query.vercel.app/query/events', event);

  res.send(event);
});

module.exports = router;
