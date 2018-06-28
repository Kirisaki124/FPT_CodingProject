const express = require('express');
const router = express.Router();

const articleController = require('./controller');

router.post('/', (req, res) => {
  articleController
    .createArticle(req.body)
    .then(id => res.send(id))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

router.get('/', (req, res) => {
  articleController
    .getAllArticle(req.query.page > 0 ? req.query.page : 1)
    .then(data => res.send(data))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

router.get('/:id', (req, res) => {
  articleController
    .getOneArticle(req.params.id)
    .then(data => res.send(data))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

router.delete('/:id', (req, res) => {
  articleController
    .deleteArticle(req.params.id)
    .then(data => res.send(data))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

router.patch('/:id', (req, res) => {
  articleController
    .updateOneArticle(req.params.id, req.body)
    .then(data => res.send(data))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

module.exports = router;
