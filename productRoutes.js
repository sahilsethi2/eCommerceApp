const express = require('express')
const router = express.Router()
const Product = require('../models/Product')

router.post('/', async (req, res) => {
    const product = new Product(req.body)
    await product.save()
    res.send('Product Added')
})

router.get('/', async (req, res) => {
    const products = await Product.find()
    res.send(products)
})

router.post('/update', async (req, res) => {
    const { id, name, price, category } = req.body
    await Product.findByIdAndUpdate(id, { name, price, category })
    res.send('Product Updated')
})

router.post('/delete', async (req, res) => {
    const { id } = req.body
    await Product.findByIdAndDelete(id)
    res.send('Product Deleted')
})

module.exports = router