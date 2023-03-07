const Appoint = require('../Schema/AppointSchema')


function Appointment() {
    Appointment.prototype.Appoint_func = function (req, cbk) {
        let action = req.params.action;
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

Appointment.prototype.create = function (req, cbk) {
    Appoint.create(req.body, function (err, result) {
        if (err) {
            cbk({ status: false, result: err })
        }
        else {
            cbk({ status: true, result: result })
            console.log(result)
        }
    })
}
Appointment.prototype.view = function (req, cbk) {
    Appoint.aggregate([{ $match: {} }], function (err, result) {
        if (err) {
            cbk({ status: false, result: err })
        }
        else {
            cbk({ status: true, result: result })
        }
    })
}
Appointment.prototype.viewbyid = function (req, cbk) {
    Appoint.aggregate([{ $match: { PatientId: req.body.PatientId } }], function (err, result) {
        if (err) {
            cbk({ status: false, result: err })
        }
        else {
            cbk({ status: true, result: result })
        }
    })
}
Appointment.prototype.update = function (req, cbk) {
    Appoint.findByIdAndUpdate(req.body._id, req.body, function (err, result) {
        console.log(req.body)
        if (err) {
            cbk({ status: false, result: err })
        }
        else {
            cbk({ status: true, result: result })
        }
    })
}
Appointment.prototype.delete = function (req, cbk) {
    Appoint.findByIdAndDelete(req.body.PatientId, function (err, result) {

        if (err) {
            cbk({ status: false, result: err })
        }
        else {
            cbk({ status: true, result: result })
            console.log(result)
        }
    })
}

module.exports = Appointment;
