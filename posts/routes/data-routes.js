const express = require('express');
const router = express.Router();
const postData = require('../models/Post-Data');

router.post('/', async (req, res) => {
  const data = req.body;
  const posts = new postData(data);
  posts.save((err) => {
    if (err) {
      res.json({ msg: err });
      return;
    }
    return res.json({ msg: 'Post saved!' });
  });
});

router.put('/:uid/:id', async (req, res) => {
  const userId = req.params.uid;
  const id = req.params.id;
  try {
    const post = await postData.findOneAndUpdate(
      { uid: userId, _id: id },
      req.body
    );
    post
      ? res.json({ msg: `Post with id: ${id} is updated!` })
      : res.json({ msg: 'No post found!' });
  } catch (err) {
    res.json({ msg: err });
  }
});

router.delete('/:uid/:id', async (req, res) => {
  const userId = req.params.uid;
  const id = req.params.id;
  try {
    const post = await postData.findOneAndDelete({ uid: userId, _id: id });
    post
      ? res.json({ msg: `Post with id: ${id} is deletd!` })
      : res.json({ msg: 'No post found!' });
  } catch (err) {
    res.json({ msg: err });
  }
});

router.get('/', async (req, res) => {
  try {
    const allPosts = await postData.find();
    res.json(allPosts);
  } catch (err) {
    res.json({ msg: err });
  }
});

router.get('/:uid', async (req, res) => {
  const userId = req.params.uid;
  try {
    const userPosts = await postData.find({ uid: userId });
    res.json(userPosts);
  } catch (err) {
    res.json({ msg: err });
  }
});

router.get('/:uid/:id', async (req, res) => {
  const userId = req.params.uid;
  const id = req.params.id;
  try {
    const post = await postData.findOne({ uid: userId, _id: id });
    res.json(post);
  } catch (err) {
    res.json({ msg: err });
  }
});

module.exports = router;
