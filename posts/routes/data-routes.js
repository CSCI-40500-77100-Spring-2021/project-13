const express = require('express');
const router = express.Router();
const axios = require('axios');
const postData = require('../models/Post-Data');

router.post('/posts', async (req, res) => {
  const data = req.body;
  const post = new postData(data);
  await post.save();
  await axios.post('https://myday-events.vercel.app/events', {
    type: 'PostCreated',
    data: data,
  });
  res.send(post);
});

router.put('/posts/:uid/:pId', async (req, res) => {
  const userId = req.params.uid;
  const postId = req.params.pId;
  let post;
  try {
    post = await postData.findOneAndUpdate({ uid: userId, postId }, req.body);
    const data = await postData.findOne({ uid: userId, postId });
    await axios.post('https://myday-events.vercel.app/events', {
      type: 'PostEdited',
      data: {
        uid: data.uid,
        postId: data.postId,
        userName: data.userName,
        userEmail: data.userEmail,
        title: data.title,
        body: data.body,
        createdAt: data.createdAt,
        modifiedAt: data.modifiedAt,
      },
    });
    res.send(post);
  } catch (err) {
    res.json({ msg: err });
  }
});

router.delete('/posts/:uid', async (req, res) => {
  const userId = req.params.uid;
  try {
    const post = await postData.findOne({ uid: userId });
    const deleted = await postData.deleteMany({ uid: userId });
    await axios.post('https://myday-events.vercel.app/events', {
      type: 'PostsDeleted',
      data: post,
    });
    res.send(deleted);
  } catch (err) {
    res.json({ msg: err });
  }
});

router.delete('/posts/:uid/:pId', async (req, res) => {
  const userId = req.params.uid;
  const postId = req.params.pId;
  try {
    const post = await postData.findOneAndDelete({ uid: userId, postId });
    await axios.post('https://myday-events.vercel.app/events', {
      type: 'PostDeleted',
      data: post,
    });
    res.send(post);
  } catch (err) {
    res.json({ msg: err });
  }
});

router.post('/posts/events', (req, res) => {
  res.send(req.body);
});

module.exports = router;
