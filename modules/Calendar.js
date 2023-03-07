const calendar_schema = require('../Schema/Calendar_schema');



function calendar() {
    calendar.prototype.date_func = function (req, cbk) {
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

calendar.prototype.create = function (req, cbk) {
    calendar_schema.create(req.body, function (err, result) {
        if (err) {
            cbk({ status: false, result: err })
        } else {
            cbk({ status: true, result: result })
        }
    })
}
calendar.prototype.view = function (req, cbk) {
    calendar_schema.aggregate([{ $match: {} }], function (err, result) {
        if (err) {
            cbk({ status: false, result: err })
        } else {
            cbk({ status: true, result: result })
        }
    })
}
calendar.prototype.viewbyid = function (req, cbk) {
    calendar_schema.aggregate([{ $match: (req.body.id, req.body) }], function (err, result) {
        if (err) {
            cbk({ status: false, result: err })
        } else {
            cbk({ status: true, result: result })
        }
    })
}
calendar.prototype.update = function (req, cbk) {
    calendar_schema.findByIdAndUpdate((req.body.id), function (err, result) {
        if (err) {
            cbk({ status: false, result: err })
        } else {
            cbk({ status: true, result: result })
        }
    })
}
calendar.prototype.delete = function (req, cbk) {
    calendar_schema.findByIdAndDelete((req.body.id), function (err, result) {
        if (err) {
            cbk({ status: false, result: err })
        } else {
            cbk({ status: true, result: result })
        }
    })
}
module.exports = calendar;