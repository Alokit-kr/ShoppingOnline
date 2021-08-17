import express from 'express'
// import asyncHandler from 'express-async-handler'
const router=express.Router()
import {authUser,getUserProfile} from '../controllers/userController.js'
import {getProducts,getProductById} from '../controllers/productController.js'

router.post('/login',authUser)
router.route('/profile').get(getUserProfile)


export default router