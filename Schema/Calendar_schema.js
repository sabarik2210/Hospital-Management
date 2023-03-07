const mongoose = require('mongoose');

const schema = mongoose.Schema;

const calendar_schema = new schema({
    PatientName: String,
    Age: Number,
    Gender: String,
    Admitted_For: String,
    DoctorName: String,
    Speciality: String,
    RegisterDate: String,
    VisitDate: String,
},
    { collection: 'calendar' }
)

let calendar_model = mongoose.model('calendar', calendar_schema);


module.exports = calendar_model;