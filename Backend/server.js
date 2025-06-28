require('dotenv').config()
const app=require('./src/app');
const port=process.env.PORT||3000;
app.listen(3000,()=>{
    console.log("the server is listing:")
})