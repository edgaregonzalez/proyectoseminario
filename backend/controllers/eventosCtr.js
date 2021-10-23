const db = require('../models');
const eventos = db.eventos;

module.exports = {

    /**
     * Crea un evento
     */
    create (req, res) {
        return eventos
            .create({
                event_id: req.body.eventId,
                titulo: req.body.titulo,
                estado: req.body.estado,
                descripcion: req.body.descripcion,
            })
            .then(evento => res.status(200).send(evento))
            .catch(error => res.status(400).send(error))
    },

    /**
     * Actualiza un evento
     */
    update (req, res) {
        return eventos
            .findOne({
                where: {
                    id: req.body.eventId
                }
            })
            .then(evento => { 
                delete req.body.eventId;
                return evento
                    .update(req.body)
                    .then(evento => res.status(200).send(evento))
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => res.status(400).send(error))
    },

    /**
     * Lista eventos
     */
    list (_, res) {
        return eventos
            .findAll({
                include: [{
                    model: eventos,
                    as: "eventos"
                }]
            })
            .then(evento => res.status(200).send(evento))
            .catch(error => res.status(400).send(error))
    },

    /**
     * Busca un evento
     */
    find (req, res) {
        return eventos
            .findOne({
                where: {
                    event_id: req.params.eventId,
                },
                include: [{
                    model: eventos,
                    as: "eventos"
                }]
            })
            .then(evento => res.status(200).send(evento))
            .catch(error => res.status(400).send(error))
    },
}