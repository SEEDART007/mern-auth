const express = require('express')
const router = express.Router()
const {verifyToken} = require('../utils/userVerify')
const {updateUser} = require('../controllers/userController')


router.post('/update/:id',verifyToken, updateUser)



module.exports=router