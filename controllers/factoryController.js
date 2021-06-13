const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Factory.find({})
      .then((dbFactory) => res.json(dbFactory))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Factory.findById(req.params.id)
      .then((dbFactory) => res.json(dbFactory))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Factory.create(req.body)
      .then((dbFactory) => {
        res.json(dbFactory);
      })
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Factory.findById({ _id: req.params.id })
      .then((modelToBeRemoved) => modelToBeRemoved.remove())
      .then((dbRemaining) => res.json(dbRemaining))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Factory.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    })
      .then((dbFactory) => res.json(dbFactory))
      .catch((err) => res.status(422).json(err));
  },
};
