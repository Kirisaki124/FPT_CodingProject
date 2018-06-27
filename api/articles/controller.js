const articleModel = require("./model")

const createArticle = ({ title, description, content, createBy }) => 
    new Promise((resolve, reject) => {
        articleModel    
            .create({ title, description, content, createBy })
            .then(article => resolve(article._id))
            .catch(err => reject(err))
    })


const getAllArticle = () => 
    new Promise((resolve, reject) => {
        articleModel    
            .find({active: true})
            .then(article => {
                console.log(article)
                resolve(article)
            })
            .catch(err => reject(err))
})

const updateContent = (id, content) =>
    new Promise((resolve, reject) => {
        articleModel
            .update({_id: id}, {content})
            .exec()
            .then(data => resolve(data))
            .catch(err => reject(err))
    })

const updateTitle = (id, title) =>
    new Promise((resolve, reject) => {
        articleModel
            .update({_id: id}, {title})
            .exec()
            .then(data => resolve(data))
            .catch(err => reject(err))
    })

const updateDescription = (id, description) =>
    new Promise((resolve, reject) => {
        articleModel
            .update({_id: id}, {description})
            .exec()
            .then(data => resolve(data))
            .catch(err => reject(err))
    })

const deleteArticle = (id) =>
    new Promise((resolve, reject) =>
        articleModel
        .findById(id)
        .update({_id: id}, {active: false})
        .then(data => resolve(data))
        .catch(err => console.log(err))
)

module.exports = {
    createArticle,
    getAllArticle,
    updateContent,
    updateTitle,
    updateDescription,
    deleteArticle
}