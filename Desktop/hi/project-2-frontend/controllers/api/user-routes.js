const router = require('express').Router();
const db = require('../../models');

router.get('/', (req, res) => {
    const query = {};
    if (req.query.author_id) {
      query.AuthorId = req.query.author_id;
    }
    db.Post.findAll({
      where: query,
      // Here we add an "include" property to our options in our findAll query
      // We set the value to an array of the models we want to include in a left outer join
      // In this case, just `db.Author`
      include: [db.Author]
    }).then(dbPost => {
      res.json(dbPost);
      console.log(dbPost)
    });