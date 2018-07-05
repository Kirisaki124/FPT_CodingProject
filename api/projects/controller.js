const projectModel = require('./model');

const createProject = obj =>
  new Promise((resolve, reject) => {
    projectModel
      .create(obj)
      .then(project => resolve(project))
      .catch(err => reject(err));
  });

const getAllProjects = page =>
  new Promise((resolve, reject) => {
    projectModel
      .find({ active: true })
      .sort({
        createdAt: -1
      })
      .skip((page - 1) * 10)
      .limit(10)
      .select('_id title team introUrl')
      .exec()
      .then(projects => resolve(projects))
      .catch(err => reject(err));
  });

const getOneProject = id =>
  new Promise((resolve, reject) => {
    projectModel
      .find({ _id: id, active: true })
      .select('_id title team introUrl')
      .exec()
      .then(project => resolve(project))
      .catch(err => reject(err));
  });

const updateOneProject = (id, obj) =>
  new Promise((resolve, reject) => {
    projectModel
      .findOneAndUpdate({ _id: id, active: true }, { $set: obj }, { new: true })
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

const deleteOneProject = id =>
  new Promise((resolve, reject) => {
    projectModel
      .findOneAndUpdate({ _id: id, active: true }, { $set: { active: false } }, { new: true })
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

module.exports = {
  createProject,
  getAllProjects,
  getOneProject,
  updateOneProject,
  deleteOneProject
};
