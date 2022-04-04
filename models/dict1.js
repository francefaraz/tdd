const mongoose=require('mongoose');
console.log("commed")
const Schema=mongoose.Schema;

const dictSchema=Schema({
    word1:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('Dict1',dictSchema,"dictonary_app");