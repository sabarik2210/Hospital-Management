const mongoose = require('mongoose');

const schema = mongoose.Schema;


const outpatient = new schema({
    patientId: Number,
    patientName: String,
    Age: Number,
    Gender: String,
    DoctorName: String,
    Contact: Number,
    Address: String,

},
    { collection: 'outpatient' }

)
let OP_Patient = mongoose.model('outpatient', outpatient)

module.exports = OP_Patient;