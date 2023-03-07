const mongoose = require('mongoose');
const schema = mongoose.Schema;


const Doctor_schema = new schema({
    Doctor_Id: String,
    Doctor_Name: String,
    Speciality: String,
    Available_Day: String,
    Available_Time: String,
},
    { collection: 'Doctor' }
)
let Doctor = mongoose.model('Doctor', Doctor_schema);


module.exports = Doctor;