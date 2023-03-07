const PatientIn = require('../Schema/patientSchema');
const data = new PatientIn()
function PatientAdmit() {
    PatientAdmit.prototype.admitfunc = function (req, cbk) {
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


PatientAdmit.prototype.create = function (req, cbk) {
    PatientIn.create(req.body, function (err, result) {
        if (err) {
            cbk({ status: false, result: err })
        } else {
            cbk({ status: true, result: result })
            console.log('data created', result)
        }
    })
}
PatientAdmit.prototype.view = function (req, cbk) {
    PatientIn.aggregate([{ $match: {} }], function (err, result) {
        if (err) {
            cbk({ status: false, result: err })
        } else {
            cbk({ status: true, result: result })
            console.log('data viewed', result)
        }
    })
}
PatientAdmit.prototype.viewbyid = function (req, cbk) {
    PatientIn.findById(req.body._id).exec(function (err, result) {
        if (err) {
            cbk({ status: false, result: err })
        } else {
            cbk({ status: true, result: result })
            console.log('data viewedbyID', result)
        }
    })
}
PatientAdmit.prototype.update = function (req, cbk) {
    PatientIn.findByIdAndUpdate(req.body._id, req.body).exec(function (err, result) {
        if (err) {
            cbk({ status: false, result: err })
        } else {
            cbk({ status: true, result: result })
            console.log('data updatedbyID', result)
        }
    })
}
PatientAdmit.prototype.delete = function (req, cbk) {
    PatientIn.findByIdAndDelete(req.body._id, req.body).exec(function (err, result) {
        if (err) {
            cbk({ status: false, result: err })
        } else {
            cbk({ status: true, result: result })
            console.log('data deleted', result)
        }
    })
}

module.exports = PatientAdmit;