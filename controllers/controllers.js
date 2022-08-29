
const getPosts = (req, res, next) => {
  res.status(200).json({
      body: 'Posts!'
  });
};

// //Connect to DB
// async function loadKanjiCollection() {
//   const client = await mongodb.MongoClient.connect('mongodb+srv://satoruhanrahan:ygshP$_ubC&Ee3a@cluster0-l7ajy.gcp.mongodb.net/KanjiStories?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   });
//   return client.db('KanjiStories').collection('N5Kanji');
// }

module.exports.getPosts = getPosts;