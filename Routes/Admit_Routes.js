const express = require('express');
const AdmitRouter = express.Router()

const patientAdmit = require('../modules/PatientAdmit')
const admit = new patientAdmit();


AdmitRouter.post('/patientAdmit/:action', (req, res) => {
    admit.admitfunc(req, (err, result) => {
        if (err) {
            res.json({ status: false, result: err })
        }
        else {
            res.json({ status: true, result: result })

        }
    });
});


module.exports = AdmitRouter


