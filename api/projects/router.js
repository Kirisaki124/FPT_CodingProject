const express = require('express');
const router = express.Router();

const projectController = require('./controller');

router.post('/', (req, res) => {
  projectController
    .createProject(req.body)
    .then(id => res.send(id))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

router.get('/', (req, res) => {
  projectController
    .getAllProjects(req.query.page > 0 ? req.query.page : 1)
    .then(data => res.send(data))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

router.get('/:id', (req, res) => {
  projectController
    .getOneProject(req.params.id)
    .then(data => res.send(data))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

router.delete('/:id', (req, res) => {
  projectController
    .deleteOneProject(req.params.id)
    .then(data => res.send(data))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

router.patch('/:id', (req, res) => {
  projectController
    .updateOneProject(req.params.id, req.body)
    .then(data => res.send(data))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

module.exports = router;
