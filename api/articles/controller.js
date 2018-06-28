const articleModel = require('./model');

const createArticle = ({ title, description, content, createBy }) =>
  new Promise((resolve, reject) => {
    articleModel
      .create({ title, description, content, createBy })
      .then(article => resolve(article._id))
      .catch(err => reject(err));
  });

const getAllArticle = page =>
  new Promise((resolve, reject) => {
    articleModel
      .find({ active: true })
      .sort({
        createdAt: -1
      })
      .skip((page - 1) * 20)
      .limit(20)
      .select('_id title description content')
      .exec()
      .then(article => {
        console.log(article);
        resolve(article);
      })
      .catch(err => reject(err));
  });

const getOneArticle = id =>
  new Promise((resolve, reject) => {
    articleModel
      .find({ _id: id, active: true })
      .select('_id title description content')
      .exec()
      .then(article => {
        console.log(article);
        resolve(article);
      })
      .catch(err => reject(err));
  });

const updateOneArticle = (id, obj) =>
  new Promise((resolve, reject) => {
    console.log('obj', obj);
    articleModel
      .update({ _id: id, active: true }, { $set: obj })
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

const deleteArticle = id =>
  new Promise((resolve, reject) =>
    articleModel
      .update({ _id: id, active: true }, { $set: { active: false } })
      .then(data => resolve(data))
      .catch(err => reject(err))
  );

module.exports = {
  createArticle,
  getAllArticle,
  getOneArticle,
  updateOneArticle,
  deleteArticle
};
