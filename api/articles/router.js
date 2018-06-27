const express = require('express')
const router = express.Router()

const articleController = require('./controller')

router.post('/', (req, res) => {
    articleController
        .createArticle(req.body)
        .then(id => res.send(id))
        .catch(err => console.log(err))
})

router.get('/', (req, res) => {
    articleController
        .getAllArticle(data => console.log('function ' + data))
        .then(data => res.send(data))
        .catch(err => console.log(err))
})

router.put('/:id/content', (req, res) => {
    articleController
        .updateContent(req.params.id, req.body.content)
        .then(id => res.send(id))
        .catch(err => console.log(err))
}) 

router.put('/:id/title', (req, res) => {
    articleController
        .updateTitle(req.params.id, req.body.content)
        .then(id => res.send(id))
        .catch(err => console.log(err))
}) 

router.put('/:id/description', (req, res) => {
    articleController
        .updateDescription(req.params.id, req.body.content)
        .then(id => res.send(id))
        .catch(err => console.log(err))
}) 

router.delete('/:id', (req, res) => {
    articleController
        .deleteArticle(req.params.id)
        .then(data => res.send(data))
        .catch(err => console.log(err))
})

module.exports = router