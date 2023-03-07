const product = require('../Schema/Inventory_Schema');

function Inventory() {

    Inventory.prototype.Inventory_func = function (req, cbk) {

        const action = req.params.action;
        const self = this;
        switch (action) {
            case 'view':
                self.view(req, cbk);
                break;
            case 'viewbyid':
                self.viewbyid(req, cbk);
                break;
            case 'create':
                self.create(req, cbk);
                break;
            case 'update':
                self.update(req, cbk);
                break;
            case 'delete':
                self.delete(req, cbk);
                break;
            default:
                cbk({ status: 'false', result: 'not uploaded' })
        }
    }
}


Inventory.prototype.create = function (req, cbk) {
    product.create(req.body, function (err, result) {
        if (err) {
            cbk({ status: false, result: err })
        } else {
            cbk({ status: true, result: result })
            console.log('data created', result)
        }
    })
}
Inventory.prototype.view = function (req, cbk) {
    product.aggregate([{ $match: {} }], function (err, result) {
        if (err) {
            cbk({ status: false, result: err })
        } else {
            cbk({ status: true, result: result })
            console.log('data viewed', result)
        }
    })
}
Inventory.prototype.viewbyid = function (req, cbk) {
    product.aggregate([{ $match: req.body._id }]).exec(function (err, result) {
        if (err) {
            cbk({ status: false, result: err })
        } else {
            cbk({ status: true, result: result })
            console.log('data viewedbyID', result)
        }
    })
}
Inventory.prototype.update = function (req, cbk) {
    product.findByIdAndUpdate(req.body._id, req.body).exec(function (err, result) {
        if (err) {
            cbk({ status: false, result: err })
        } else {
            cbk({ status: true, result: result })
            console.log('data updatedbyID', result)
        }
    })
}
Inventory.prototype.delete = function (req, cbk) {
    product.findByIdAndDelete(req.body._id).exec(function (err, result) {
        console.log(req.body.product_ID)
        if (err) {
            cbk({ status: false, result: err })
        } else {
            cbk({ status: true, result: result })
            console.log('data deleted', result)
        }
    })
}

module.exports = Inventory;