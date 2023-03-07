const express = require('express');
const Doctor_Router = express.Router()

const Doctorfield = require('../modules/Doctor')
const Doctor = new Doctorfield();


Doctor_Router.post('/Doctor/:action', (req, res) => {
    Doctor.Doctor_func(req, (err, result) => {
        if (err) {
            res.json({ status: false, result: err })
        }
        else {
            res.json({ status: true, result: result })


        }
    });
});


module.exports = Doctor_Router;