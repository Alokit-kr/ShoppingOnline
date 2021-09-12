import asyncHandler from 'express-async-handler'
import Order from '../Models/orderModel.js'

// @desc create new order
// @router POST /api/orders
// @access Private
const addOrderItems=asyncHandler(async( req,res) => {
    const {orderItems,shippingAddress,paymentMethod,itemsPrice,taxPrice,
    shippingPrice,totalPrice,}=req.body

    if(orderItems && orderItems.length===0){
        req.status(400)
        throw new Error('No order items')
        return
    } else{
        const order=new Order({
            orderItems,
            user:req.user._id,
            shippingAddress,paymentMethod,itemsPrice,taxPrice,
    shippingPrice,totalPrice,
        })

        const createdOrder= await order.save()

        res.status(201).json(createdOrder)
    }
})

// @desc Get order by ID
// @router GET /api/orders/:id
// @access Private
const getOrderById=asyncHandler(async( req,res) => {
    const order= await Order.findById(req.params.id).populate('user','name email')
    if(order){
        res.json(order)
    }
    else{
        res.status(404) 
        throw new Error('Order not found')
    }
})

// @desc Update order to paid
// @router GET /api/orders/:id/pay
// @access Private
const updateOrderToPaid=asyncHandler(async( req,res) => {
    const order= await Order.findById(req.params.id)
    if(order){
        order.isPAid=true
        order.paidAt=Date.now()
        order.paymentResult={
            id:req.body.id,
            status:req.body.status,
            update_time:req.body.update_time,
            email_address:req.body.payer.email_address
        }
        const updatedOrder= await order.save()
        res.json(updatedOrder)
    }
    else{
        res.status(404) 
        throw new Error('Order not found')
    }
})

export { addOrderItems, getOrderById ,updateOrderToPaid}
