// const express = require('express');
// const router = express.Router();
// const controllers = require('./../controllers/controllers');

// router.get('/posts', controllers.getPosts);

// module.exports = router;


const router = require('express').Router();
const mongodb = require('mongodb');
// const verify = require('../verifyToken');

router.get('/posts', async (req, res) => {
  const posts = await loadPostCollection();
  res.send(await posts.find({}).toArray());
});

//Connect to DB
async function loadPostCollection() {
  const client = await mongodb.MongoClient.connect('mongodb+srv://alexSatoru:ygshP$_ubC&Ee3a@cluster0.snuz8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  return client.db('blog').collection('posts');
}

module.exports = router;