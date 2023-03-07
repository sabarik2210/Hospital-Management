const express = require('express');
const OP_Router = express.Router();

const OP_Patient = require('../modules/OutPatient');
const OutPatient = new OP_Patient();


OP_Router.post('/outpatient/:action', (req, res) => {
    OutPatient.op_func(req, (err, result) => {
        if (err) {
            res.json({ status: false, result: err })
        } else {
            res.json({ status: true, result: result })

        }
    })
})

module.exports = OP_Router;