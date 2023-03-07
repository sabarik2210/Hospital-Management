const mongoose = require('mongoose');

const schema = mongoose.Schema;


const Patient_Report = new schema({
    PatientName: String,

},
    { collection: 'PatientReport' }

)
let PatientReport = mongoose.model('PatientReport', Patient_Report)

module.exports = PatientReport;