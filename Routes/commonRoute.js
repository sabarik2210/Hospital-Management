const AdmitRouter = require('./Admit_Routes')
const OP_Router = require('./OutPatient_Routes')
const AppointRouter = require('../Routes/Appoint_Routes')
const Inventory_Router = require('../Routes/Inventory_Route')
const Doctor_Router = require('../Routes/Doctor_Routes')
const Calendar_Router = require('./Calendar_Routes');
module.exports = { AdmitRouter, OP_Router, AppointRouter, Inventory_Router, Doctor_Router, Calendar_Router }