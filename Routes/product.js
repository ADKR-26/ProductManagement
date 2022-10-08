const { Router } = require("express");
const router = Router();
const Products = require('../model/product_model')
const mongoose = require('mongoose')

router.get('/', (req,res) => {
    Products.find()
    .then(result => {
        // res.status(200).json({
        //     productData: result
        // })
        res.send(result)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
})

router.post('/', (req,res) => {
    const products = new Products({
        code: req.body.code,
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        status: req.body.status,
        date: req.body.date
    })

    products.save()
    .then(result => {
        console.log("Success",result)
        res.status(200).json({
            newProducts:result
        })
    })
    .catch(err => {
        console.log("Error",err)
        res.status(500).json({
            error:err
        })
    })
})

module.exports = router