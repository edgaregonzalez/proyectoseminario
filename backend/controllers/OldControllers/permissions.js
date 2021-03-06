/*
const Sequelize = require('sequelize');
const db = require('../models/OldModels');
const permissions = db.permissions;
const roles = require('../models/roles');
const features = db.features;

module.exports = {


    update (req, res) {
        return permissions
            .findOne({
                where: {
                    role_id: req.body.role_id,
                    feature_id: req.body.feature_id
                }
            })
            .then(permissions => {
                delete req.body.role_id;
                delete req.body.feature_id;

                return permissions
                    .update(req.body)
                    .then(permissions => res.status(200).send(permissions))
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => res.status(400).send(error))
          
    },

                 
    list (_, res) {
        return permissions
            .findAll({})
            .then(permissions => res.status(200).send(permissions))
            .catch(error => res.status(400).send(error))
    },


    find (req, res) {
        return permissions
            .findAll({
                where: {
                    role_id: req.params.role,
                },
                include: [{
                    model: features,
                    as: 'features'
                }]
            })
            .then(features => res.status(200).send(features))
            .catch(error => res.status(400).send(error))
    },
}
*/