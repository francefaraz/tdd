var express = require('express');
var router=express.Router();
// var createError=require('http-errors')
const Dict1=require('../models/dict1')
//get all data 

router.post('/add',async function(req, res) {
     console.log("added")
     console.log(req.body);
    try{
       const dict=await new Dict1(req.body).save()
       res.status(201).send(dict)
    }
    catch(error){
      res.send(error)
    }

})

router.get('/',async(req,res)=>{

    console.log("data comed")
    const dict=await Dict1.find();
      console.log("data is ",dict)
    try{
      const dict=await Dict1.find();
      console.log("data is ",dict)
      res.send(dict);
    }
    catch(error){
      res.send(error)
    }
})

router.put('/:id',async(req, res)=>{

    try {
        console.log("entered")
        console.log(req.params.id)
        console.log(req.body)
        const dict=await Dict1.findOneAndUpdate(
           {_id:req.params.id},
           req.body
        )
        console.log("data is dict ",dict)
        res.send(dict)
    } catch (error) {
        res.send(error)
    }
})
router.delete('/:id',async(req, res)=>{
try {
    const dict=await Dict1.findByIdAndDelete(req.params.id)
    console.log("data is dict ",dict)

    res.send(dict)
} catch (error) {
    res.send(error)
}

})
module.exports=router;