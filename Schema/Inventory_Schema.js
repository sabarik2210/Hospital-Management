const mongoose = require('mongoose');

const schema = mongoose.Schema;


const Equipment = new schema({
    product_ID: String,
    Equipment: String,
    Quantity: String,
    Unit_Cost: String,
    Total_cost: String,

},
    { collection: 'Inventory' }

)
let product = mongoose.model('Inventory', Equipment);




module.exports = product;