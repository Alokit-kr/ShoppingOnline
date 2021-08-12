import express from 'express'

const router=express.Router()
app.get('/',function(req,res){
    res.json(products);
});
app.get('/:id',function(req,res){
    const product=products.find((p)=>p._id===req.params.id)
    res.json(product);
});
express default router