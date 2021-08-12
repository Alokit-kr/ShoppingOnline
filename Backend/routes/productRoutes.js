import express from 'express'
import asyncHandler from 'express-async-handler'
const router=express.Router()
import Product from '../Models/productModel.js'
// @desc fetch all products
// @router GET /api/products
// @access public

router.get('/',asyncHandler(async(req,res)=>{
    const products=await Product.find({})
    res.json(products);
}));

// @desc Fetch single product
// @router GET /api/products/:id
// @access Public
router.get('/:id',asyncHandler(async(req,res)=>{
    const product=await Product.findById(req.params.id)
    if(product){
       res.json(product)
    }
    else{
        res.status(404).json({message:'Product not found'})
    }
}));

export default router