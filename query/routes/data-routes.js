const express = require('express');
const router = express.Router();
const queryData = require('../models/Query-Data');

router.get('/', (req, res) => {
  res.redirect('/posts');
});

router.get('/posts', async (req, res) => {
  try {
    const allPosts = await queryData.find();
    res.send(allPosts);
  } catch (err) {
    res.json({ msg: err });
  }
});

router.get('/posts/:uid', async (req, res) => {
  const userId = req.params.uid;
  try {
    const userPosts = await queryData.find({ uid: userId });
    res.send(userPosts);
  } catch (err) {
    res.json({ msg: err });
  }
});

router.post('/query/events', async (req, res) => {
  const { type, data } = req.body;

  if (type === 'PostCreated') {
    const post = new queryData(data);
    await post.save();
    res.send(post);
  }

  if (type === 'PostEdited') {
    const post = await queryData.findOneAndUpdate(
      {
        uid: data.uid,
        postId: data.postId,
      },
      data
    );
    res.send(post);
  }

  if (type === 'PostDeleted') {
    const post = await queryData.findOneAndDelete({
      uid: data.uid,
      postId: data.postId,
    });
    res.send(post);
  }

  if (type === 'PostsDeleted') {
    const post = await queryData.deleteMany({
      uid: data.uid,
    });
    res.send(post);
  }
});

module.exports = router;
