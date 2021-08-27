const { addintoQueue } = require('./myworker')


const app=require('express')()

app.get('/profile' , (req,res)=>{
    return res.json({error:false})
})

app.get('/contact' , (req,res)=>{
    return res.json({error:false})
})
app.get('/home' , (req,res)=>{
    addintoQueue({data:"khalid_test"})
    return res.json({error:false ,msg:"Added into queus"})
})




app.listen(2222 , ()=>{
    console.log("Started");
})