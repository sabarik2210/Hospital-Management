const PatientR_field = require('../Schema/PatientReport_Schema');

function patientReport() {

    patientReport.prototype.patientReport_func = function (req, cbk) {

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


patientReport.prototype.view = function (req, cbk) {
    PatientR_field.aggregate([{ $match: {} }], function (err, result) {
        if (err) {
            cbk({ status: false, result: err })
        } else {
            cbk({ status: true, result: result })
            console.log('data viewed', result)
        }
    })
}
patientReport.prototype.viewbyid = function (req, cbk) {
    PatientR_field.aggregate([{ $match: req.body._id }]).exec(function (err, result) {
        if (err) {
            cbk({ status: false, result: err })
        } else {
            cbk({ status: true, result: result })
            console.log('data viewedbyID', result)
        }
    })
}
patientReport.prototype.update = function (req, cbk) {
    PatientR_field.findByIdAndUpdate(req.body._id, req.body).exec(function (err, result) {
        if (err) {
            cbk({ status: false, result: err })
        } else {
            cbk({ status: true, result: result })
            console.log('data updatedbyID', result)
        }
    })
}
patientReport.prototype.delete = function (req, cbk) {
    PatientR_field.remove(req.body._id).exec(function (err, result) {
        if (err) {
            cbk({ status: false, result: err })
        } else {
            cbk({ status: true, result: result })
            console.log('data deleted', result)
        }
    })
}
module.exports = patientReport;