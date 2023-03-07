const mongoose = require('mongoose');

const schema = mongoose.Schema;

const Appoint = new schema({
    PatientId: String,
    PatientName: String,
    Age: Number,
    Gender: String,
    DoctorName: String,
    BloodGroup: String,
    Address: String,
    Location: String,
    Contact: String,
    AdmittedFor: String,
    RegisterDate: String,
    VisitDate: String,

},
    { collection: 'Appointment' }

)
let Appointment = mongoose.model('Appointment', Appoint);




module.exports = Appointment;