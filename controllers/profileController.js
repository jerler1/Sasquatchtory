const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Profile.find({})
          .then((dbProfile) => res.json(dbProfile))
          .catch((err) => res.status(422).json(err));
      },
      findById: function (req, res) {
        db.Profile.findById(req.params.id)
          .then((dbProfile) => res.json(dbProfile))
          .catch((err) => res.status(422).json(err));
      },
      create: function (req, res) {
        db.Profile.create(req.body)
          .then((dbProfile) => {
            res.json(dbProfile);
          })
          .catch((err) => res.status(422).json(err));
      },
      remove: function (req, res) {
        db.Profile.findById({ _id: req.params.id })
          .then((modelToBeRemoved) => modelToBeRemoved.remove())
          .then((dbRemaining) => res.json(dbRemaining))
          .catch((err) => res.status(422).json(err));
      },
      update: function (req, res) {
        db.Profile.findOneAndUpdate({ _id: req.params.id }, req.body, {
          new: true,
        })
          .then((dbProfile) => res.json(dbProfile))
          .catch((err) => res.status(422).json(err));
      },
}