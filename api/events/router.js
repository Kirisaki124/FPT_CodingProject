const express = require('express');
const router = express.Router();

const eventController = require('./controller');

router.post('/', (req, res) => {
  eventController
    .createEvent(req.body)
    .then(id => res.send(id))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

router.get('/', (req, res) => {
  eventController
    .getAllEvents(req.query.page > 0 ? req.query.page : 1)
    .then(data => res.send(data))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

router.get('/:id', (req, res) => {
  eventController
    .getOneEvent(req.params.id)
    .then(data => res.send(data))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

router.delete('/:id', (req, res) => {
  eventController
    .deleteOneEvent(req.params.id)
    .then(data => res.send(data))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

router.patch('/:id', (req, res) => {
  eventController
    .updateOneEvent(req.params.id, req.body)
    .then(data => res.send(data))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

module.exports = router;
