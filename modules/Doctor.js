const Doctorfield = require('../Schema/Doctor_Schema');

function Doctor() {

    Doctor.prototype.Doctor_func = function (req, cbk) {

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

Doctor.prototype.create = function (req, cbk) {
    Doctorfield.create(req.body, function (err, result) {
        if (err) {
            cbk({ status: false, result: err })
        } else {
            cbk({ status: true, result: result })
            console.log('data created', result)
        }
    })
}
Doctor.prototype.view = function (req, cbk) {
    Doctorfield.aggregate([{ $match: {} }], function (err, result) {
        if (err) {
            cbk({ status: false, result: err })
        } else {
            cbk({ status: true, result: result })
            console.log('data viewed', result)
        }
    })
}
Doctor.prototype.viewbyid = function (req, cbk) {
    Doctorfield.aggregate([{ $match: req.body._id }]).exec(function (err, result) {
        if (err) {
            cbk({ status: false, result: err })
        } else {
            cbk({ status: true, result: result })
            console.log('data viewedbyID', result)
        }
    })
}
Doctor.prototype.update = function (req, cbk) {
    Doctorfield.findByIdAndUpdate(req.body._id, req.body).exec(function (err, result) {
        if (err) {
            cbk({ status: false, result: err })
        } else {
            cbk({ status: true, result: result })
            console.log('data updatedbyID', result)
        }
    })
}
Doctor.prototype.delete = function (req, cbk) {
    Doctorfield.remove(req.body._id).exec(function (err, result) {
        if (err) {
            cbk({ status: false, result: err })
        } else {
            cbk({ status: true, result: result })
            console.log('data deleted', result)
        }
    })
}
module.exports = Doctor;