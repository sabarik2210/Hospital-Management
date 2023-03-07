const express = require('express');
const Appoint_Router = express.Router();

const Appointment = require('../modules/Appointment');

const Appoint = new Appointment();


Appoint_Router.post('/Appointment/:action', (req, res) => {
    Appoint.Appoint_func(req, (err, result) => {
        if (err) {
            res.json({ status: false, result: err })
        }
        else {
            res.json({ status: true, result: result })
        }
    })
})

module.exports = Appoint_Router;