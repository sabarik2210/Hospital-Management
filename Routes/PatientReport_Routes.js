const express = require('express');
const PatientReport_Router = express.Router()

const patientR_Field = require('../modules/Patient_Report');
const Patient_Report = new patientR_Field();


PatientReport_Router.post('/PatientReport/:action', (req, res) => {
    Patient_Report.patientReport_func(req, (err, result) => {
        if (err) {
            res.json({ status: false, result: err })
        }
        else {
            res.json({ status: true, result: result })


        }
    });
});

module.exports = PatientReport_Router;
