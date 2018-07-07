const express = require('express');
const router = express.Router();

const leaderController = require('./controller');

router.post('/', (req, res) => {
  leaderController
    .createLeader(req.body)
    .then(id => res.send(id))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

router.get('/', (req, res) => {
  leaderController
    .getAllLeaders(req.query.page > 0 ? req.query.page : 1)
    .then(data => res.send(data))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

router.get('/:id', (req, res) => {
  leaderController
    .getOneLeader(req.params.id)
    .then(data => res.send(data))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

router.delete('/:id', (req, res) => {
  leaderController
    .deleteOneLeader(req.params.id)
    .then(data => res.send(data))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

router.patch('/:id', (req, res) => {
  leaderController
    .updateOneLeader(req.params.id, req.body)
    .then(data => res.send(data))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

module.exports = router;
