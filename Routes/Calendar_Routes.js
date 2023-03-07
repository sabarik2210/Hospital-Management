const express = require('express')
const Calendar_Router = express.Router();
const Calendarmodule = require('../modules/Calendar');
const calendar = new Calendarmodule();


Calendar_Router.post('/calendar/:action', (req, res) => {
    calendar.date_func(req, function (err, result) {
        if (err) {
            res.json({ status: false, result: result })
        } else {
            res.json({ status: true, result: result })

        }
    })
});

module.exports = Calendar_Router;
