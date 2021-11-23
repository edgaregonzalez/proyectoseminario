const db = require('../models');
const sequelize = require('sequelize');
const suscripcion = db.medicionesSuscripcionesMensuales;

module.exports = {
    crear(req, res) {
        var parametros = {
            email: req.body.email,
            createdAt: new Date(Date.now()).toISOString(),
        }
        return suscripcion
            .create({
                email: parametros.email,
                createdAt: parametros.createdAt,
            })
            .then(result => res.status(200).send({ message: "Medicion creada.", result }))
            .catch(error => res.status(400).send({ message: "Ocurrio un error al intentar crear la medicion.", error}))
    },
    listar(req, res) {
        var parametros = {}
        return suscripcion
            .findAll({})
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send({ message: "Ocurrio un error al intentar buscar las mediciones.", error }))
    },
    contar(req, res) {
        var parametros = {}
        return suscripcion
            .findAll({
                attributes: [
                    [sequelize.fn('COUNT', sequelize.col('id')), 'n_interesados']
                ]
            })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send({ message: "Ocurrio un error al intentar buscar las mediciones.", error }))
    },
}