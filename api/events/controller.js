const eventModel = require('./model');
const moment = require('moment');

const createEvent = obj =>
  new Promise((resolve, reject) => {
    obj.date = new Date(obj.date);
    eventModel
      .create(obj)
      .then(leader => resolve(leader))
      .catch(err => reject(err));
  });

const getAllEvents = page =>
  new Promise((resolve, reject) => {
    eventModel
      .find({ active: true })
      .skip((page - 1) * 10)
      .limit(10)
      .select('_id title description date aricleUrl')
      .exec()
      .then(leader => resolve(leader))
      .catch(err => reject(err));
  });

const getOneEvent = id =>
  new Promise((resolve, reject) => {
    eventModel
      .find({ _id: id, active: true })
      .select('_id title description date aricleUrl')
      .exec()
      .then(leader => resolve(leader))
      .catch(err => reject(err));
  });

const updateOneEvent = (id, obj) =>
  new Promise((resolve, reject) => {
    eventModel
      .findOneAndUpdate({ _id: id, active: true }, { $set: obj }, { new: true })
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

const deleteOneEvent = id =>
  new Promise((resolve, reject) =>
    eventModel
      .findOneAndUpdate({ _id: id, active: true }, { $set: { active: false } }, { new: true })
      .then(data => resolve(data))
      .catch(err => reject(err))
  );

module.exports = {
  createEvent,
  getAllEvents,
  getOneEvent,
  updateOneEvent,
  deleteOneEvent
};
