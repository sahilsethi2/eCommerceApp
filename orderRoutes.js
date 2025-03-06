const express = require('express')
const router = express.Router()
const Order = require('../models/Order')

router.post('/', async (req, res) => {
    const order = new Order({ ...req.body, status: 'Pending' })
    await order.save()
    res.send('Order Placed')
})

router.get('/', async (req, res) => {
    const orders = await Order.find()
    res.send(orders)
})

router.post('/update', async (req, res) => {
    const { id, status } = req.body
    await Order.findByIdAndUpdate(id, { status })
    res.send('Order Status Updated')
})

router.post('/cancel', async (req, res) => {
    const { id } = req.body
    await Order.findByIdAndDelete(id)
    res.send('Order Cancelled')
})

module.exports = router