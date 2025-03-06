const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    products: [String],
    totalAmount: Number,
    status: String
})

module.exports = mongoose.model('Order', orderSchema)