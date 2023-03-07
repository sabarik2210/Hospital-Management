const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose')
const bodyparser = require('body-parser');
const uri = require('./Database/db');


app.use(bodyparser.json())
app.use(cors())


const { AdmitRouter, OP_Router, AppointRouter, Inventory_Router, Doctor_Router, Calendar_Router } = require('./Routes/commonRoute')

app.use('/', AdmitRouter, OP_Router, AppointRouter, Inventory_Router, Doctor_Router, Calendar_Router)


mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Successfully connected to database!'))
    .catch((err) => console.error(err, 'DB not connected'));

app.listen(2001, console.log('welcome to the port:2001'))










// mongoose.connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }, (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log('Successfully connected to database!');
//     }
// });