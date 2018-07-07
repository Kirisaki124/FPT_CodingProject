const leaderModel = require('./model');

const createLeader = obj =>
  new Promise((resolve, reject) => {
    leaderModel
      .create(obj)
      .then(leader => resolve(leader))
      .catch(err => reject(err));
  });

const getAllLeaders = page =>
  new Promise((resolve, reject) => {
    leaderModel
      .find({ active: true })
      .skip((page - 1) * 10)
      .limit(10)
      .select('_id name title description')
      .exec()
      .then(leader => resolve(leader))
      .catch(err => reject(err));
  });

const getOneLeader = id =>
  new Promise((resolve, reject) => {
    leaderModel
      .find({ _id: id, active: true })
      .select('_id name title description')
      .exec()
      .then(leader => resolve(leader))
      .catch(err => reject(err));
  });

const updateOneLeader = (id, obj) =>
  new Promise((resolve, reject) => {
    leaderModel
      .findOneAndUpdate({ _id: id, active: true }, { $set: obj }, { new: true })
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

const deleteOneLeader = id =>
  new Promise((resolve, reject) =>
    leaderModel
      .findOneAndUpdate({ _id: id, active: true }, { $set: { active: false } }, { new: true })
      .then(data => resolve(data))
      .catch(err => reject(err))
  );

module.exports = {
  createLeader,
  getAllLeaders,
  getOneLeader,
  updateOneLeader,
  deleteOneLeader
};
