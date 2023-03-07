const mongoose = require('mongoose');
const schema = mongoose.Schema;

const patientAdmit = new schema({
    PatientId: String,
    patientName: String,
    Age: Number,
    Gender: String,
    BloodGroup: String,
    Address: String,
    Location: String,
    Contact: Number,
    AdmittedFor: String,
    Admission_Date: String,
    Discharging_Date: String,
    Admitted_By: String,

},
    { collection: 'Admit' }
)
let PatientIn = mongoose.model('Admit', patientAdmit);

// const newData = new PatientIn({
//     patientName: 'John Doe',
//     Age: 30,
// })

// PatientIn.create({
//     patientName: 'Karthik',
//     Age: 25,
// })

// PatientIn.save(function (err, result) {
//     if (err) throw err;
//     console.log(result, 'schema created')
// })

module.exports = PatientIn