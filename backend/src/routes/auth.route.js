import express from "express"
const router=express.Router();
router.post('/signup',(req,res)=>{
    res.send("SignUp route")
})
router.post('/signin',(req,res)=>{
    res.send("Signin route")
})
router.post('/logout',(req,res)=>{
    res.send("logout route")
})
export default router;