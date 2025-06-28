const aiService=require("../services/ai.services")


module.exports.getReview=async(req,res)=>{
    const code=req.body.code;
    if(!code){
        return res.status(400).send("Promt is required");
    }
    const response =await aiService(code);
    console.log("controller")
    res.send(response);
}


