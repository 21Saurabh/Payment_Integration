const express= require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
// const cors = require('cors');
const router=express.Router();
require('../db/conn')
const User = require('../model/userSchema')
const authenticate = require('../middleware/Authenticate')
const {checkout , paymentVerification } =require('../db/controller')

const middleware = (req,res,next)=>{
    console.log('Hello middleware')
    next();
}


router.get('/',(req,res) => {
    res.send(`hello this from server router.js`)
})

router.post('/api/register', async (req,res)=>{
    const {name , email , password , cpassword}= req.body
    if(!name || !email || !password || !cpassword){
        return res.status(422).json({error: "plz filled the data in field"})
    }

    try{
       const userExist= await User.findOne({email:email})

       if(userExist){
        return res.status(422).json({error: "email already Exist"})
        }else if(password != cpassword){
            return res.status(422).json({error: "password not match"})
        }else{

            const user = new User({name , email , password , cpassword})
        
        await user.save()
        
        res.status(201).json({message : " regisered successfully"})
        }

         
    }
    catch(err){
        console.log(err)
    } 
    
})

router.post('/api/login', async (req,res)=>{
    try{
        let token;
        const {email , password }= req.body
        if(!email || !password ){
            return res.status(400).json({error: "plz filled the data in field"})
        }
        const userLogin = await User.findOne({email:email})
         
        token = await userLogin.generateAuthToken()
        console.log(token);
        res.cookie("jwtToken",token,{
            expires:new Date(Date.now()+ 25892000000),
            httpOnly:true
        })
        
        // console.log(userLogin)
         
        if(userLogin){
            const isMatch= await bcrypt.compare(password,userLogin.password)
            if(!isMatch){
                return res.status(400).json({error:"error."})
            }else{
                return res.json({message:"login successfully."})
            }
        }else{
            return res.status(400).json({error:"error."})
        }
       
    }
    catch(err){
        console.log(err)
    } 
    
})


router.get('/api/pay', authenticate ,(req,res)=>{
    res.send(req.rootuser)
})

router.get('/api/logout' ,(req,res)=>{
    console.log("at 106 at auth .js")
    res.clearCookie("jwtToken",{path:'/'});
    console.log("at 108 at auth .js")
    res.status(200).send('User Logout')
})
router.get('/api/getkey', (req,res)=>{
res.status(200).json({key:process.env.RAZORPAY_API_KEY})

}
)

router.route('/checkout').post(checkout);
router.route('/paymentverification').post(paymentVerification);
module.exports = { router, middleware };