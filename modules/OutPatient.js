const patientout = require('../Schema/OutPatient_Schema');



function OP_Patient() {
    OP_Patient.prototype.op_func = function (req, cbk) {
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

OP_Patient.prototype.create = function (req, cbk) {
    patientout.create(req.body, (err, result) => {
        if (err) {
            cbk({ status: false, result: err })
        }
        else {
            cbk({ status: true, result: result })
        }
    })
}
OP_Patient.prototype.view = function (req, cbk) {
    patientout.aggregate([{ $match: {} }], function (err, result) {
        if (err) {
            cbk({ status: false, result: err })
        }
        else {
            cbk({ status: true, result: result })
        }
    })
}
OP_Patient.prototype.viewbyid = function (req, cbk) {
    patientout.findById(req.body._id).exec(function (err, result) {
        if (err) {
            cbk({ status: false, result: err })
        }
        else {
            cbk({ status: true, result: result })
        }
    })
}
OP_Patient.prototype.update = function (req, cbk) {
    patientout.findByIdAndUpdate(req.body._id, req.body).exec(function (err, result) {
        if (err) {
            cbk({ status: false, result: err })
        }
        else {
            cbk({ status: true, result: result })
            console.log('data updatedbyID', result)
        }
    })
}
OP_Patient.prototype.delete = function (req, cbk) {
    patientout.findByIdAndDelete(req.body._id, req.body).exec(function (err, result) {
        if (err) {
            cbk({ status: false, result: err })
        }
        else {
            cbk({ status: true, result: result })
            console.log('data updatedbyID', result)
        }
    })
}

module.exports = OP_Patient;