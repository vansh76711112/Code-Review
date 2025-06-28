const express=require('express');
const app=express();
const aiRoutes=require('./routes/ai.routes')
const cors=require('cors')
app.use(cors())
app.get('/',(req,res)=>{
    res.send("hello world")
});
app.use(express.json());
app.use('/ai',aiRoutes);

module.exports=app;