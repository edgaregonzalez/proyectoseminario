const db = require('../models');
const sequelize = require('sequelize');
const eventos = db.eventos;

module.exports = {
    crear(req, res) {
        var parametros = {
            titulo: req.body.titulo,
            estado: req.body.estado,
            descripcion: req.body.descripcion,
            region: req.body.region,
            imagen: req.body.imagen
        }
        return eventos
            .create({
                titulo: parametros.titulo,
                estado: parametros.estado,
                descripcion: parametros.descripcion,
                region: parametros.region,
                imagen: parametros.imagen
            })
            .then(result => res.status(200).send({ message: "Evento creado.", result }))
            .catch(error => res.status(400).send({ message: "Ocurrio un error al intentar crear el evento.", error}))
    },
    modificar(req, res) {
        var parametros = {
            id: req.body.id,
            titulo: req.body.titulo,
            estado: req.body.estado,
            descripcion: req.body.descripcion,
            region: req.body.region,
            imagen: req.body.imagen
        }
        return eventos
            .findOne({ where: { id: parametros.id } })
            .then(result => {
                if (result === null) { res.status(400).send({ message: "Evento no encontrado" }) }
                else {
                    if (parametros.titulo == null) { parametros.titulo = result.titulo; }
                    if (parametros.estado == null) { parametros.estado = result.estado; }
                    if (parametros.descripcion == null) { parametros.descripcion = result.descripcion; }
                    if (parametros.region == null) { parametros.region = result.region; }
                    if (parametros.imagen == null) { parametros.imagen = result.imagen; }
                    result
                        .update({ titulo: parametros.titulo, estado: parametros.estado, 
                            descripcion: parametros.descripcion, region: parametros.region,
                            imagen: parametros.imagen })
                        .then(result => res.status(200).send({ message: "Evento modificado.", result }))
                        .catch(error => res.status(400).send({ message: "Ocurrio un error al intentar modificar el evento.", error }))
                }
            })
            .catch(error => res.status(400).send({ message: "Ocurrio un error al intentar buscar el evento.", error }))
    },
    cambiarEstado(req, res) {
        var parametros = {
            id: req.body.id,
            estado: req.body.estado
        }
        return eventos
            .findOne({ where: { id: parametros.id } })
            .then(result => {
                if (result === null) { res.status(400).send({ message: "Evento no encontrado" }) }
                else {
                    if (parametros.estado == null) { parametros.estado = !result.estado; }
                    result
                        .update({ estado: parametros.estado })
                        .then(result => res.status(200).send({ message: "Evento modificado.", result }))
                        .catch(error => res.status(400).send({ message: "Ocurrio un error al intentar modificar el evento.", error }))
                }
            })
            .catch(error => res.status(400).send({ message: "Ocurrio un error al intentar buscar el evento.", error }))
    },
    ver(req, res) {
        var parametros = {
            id: req.params.id,
        }
        return eventos
            .findOne({ where: { id: parametros.id } })
            .then(result => res.status(200).send({ message: "Encontrado", result }))
            .catch(error => res.status(400).send({ message: "Ocurrio un error al intentar conseguir el evento.", error }))
    },
    listar(req, res) {
        var parametros = {}
        return eventos
            .findAll({
                attributes: {
                    include: [
                        [
                            sequelize.literal(`(
                                SELECT COUNT(*)
                                FROM iniciativas AS iniciativas
                                WHERE
                                iniciativas.evento = eventos.id
                                )`),
                            'iniciativas'
                        ]
                    ]
                }
            })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send({ message: "Ocurrio un error al intentar buscar los eventos.", error }))
    },
    listarEventosValidos(req, res) {
        var parametros = { }
        return eventos
            .findAll({
                where: { estado: true },
                attributes: {
                    include: [
                        [
                            sequelize.literal(`(
                                SELECT COUNT(*)
                                FROM iniciativas AS iniciativas
                                WHERE
                                iniciativas.evento = eventos.id
                                )`),
                            'iniciativas'
                        ]
                    ]
                } })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send({ message: "Ocurrio un error al intentar buscar los eventos.", error }))
    },
    listarEventosPorEstado(req, res) {
        var parametros = {
            estado: req.params.estado,
        }
        return eventos
            .findAll({
                where: { estado: parametros.estado },
                attributes: {
                    include: [
                        [
                            sequelize.literal(`(
                                SELECT COUNT(*)
                                FROM iniciativas AS iniciativas
                                WHERE
                                iniciativas.evento = eventos.id
                                )`),
                            'iniciativas'
                        ]
                    ]
                } })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send({ message: "Ocurrio un error al intentar buscar los eventos.", error }))
    },
}