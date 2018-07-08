const eventModel = require('./model');
const moment = require('moment');
const fs = require("fs")

const createEvent = ({title, description, date, articleUrl, imageFile}) =>
  new Promise((resolve, reject) => {
    eventModel
      .create({
          image: fs.readFileSync(imageFile.path),
          contentType: imageFile.mimetype,
          title,
          description,
          date,
          articleUrl
        })
      .then(event => resolve(event))
      .catch(err => reject(err));
  });

const getImageData = (id) => 
  new Promise((resolve, reject) => {
    eventModel
      .findOne({
        active: true,
        _id: id
      })
      .select("image contentType")
      .exec()
      .then(data => resolve(data))
      .catch(err => reject(err))
  })

const getAllEvents = page =>
  new Promise((resolve, reject) => {
    eventModel
      .find({ active: true })
      .skip((page - 1) * 10)
      .limit(10)
      .select('_id title description date aricleUrl')
      .exec()
      .then(event => resolve(event))
      .catch(err => reject(err));
  });

const getOneEvent = id =>
  new Promise((resolve, reject) => {
    eventModel
      .find({ _id: id, active: true })
      .select('_id title description date aricleUrl')
      .exec()
      .then(event => resolve(event))
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
  deleteOneEvent,
  getImageData
};
