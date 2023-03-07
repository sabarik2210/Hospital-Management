const express = require('express');
const Inventory_Router = express.Router();

const Inventory = require('../modules/Inventory');

const product = new Inventory();


Inventory_Router.post('/Inventory/:action', (req, res) => {
    product.Inventory_func(req, (err, result) => {
        if (err) {
            res.json({ status: false, result: err })
        }
        else {
            res.json({ status: true, result: result })
        }
    })
})

module.exports = Inventory_Router;