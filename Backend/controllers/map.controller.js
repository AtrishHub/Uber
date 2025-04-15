 const {getAddressCoordinates,getDistanceTime,getAutoCompleteSuggestions}=require('../services/maps.service.js');
const {validationResult} =require('express-validator')


module.exports.getCoordinates=async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({message:'invalid address'});
    }

    const {address}=req.query;
    try {
        const coordinates=await getAddressCoordinates(address);
        res.status(200).json(coordinates);
    } catch (error) {
        console.log(error);
        res.status(404).json({message:'coordinates not found'});
    }
}


module.exports.getDistanceTime =async(req,res,next)=>{
  
    

    try{
     const errors=validationResult(req);



     if(!errors.isEmpty()){

        return res.status(400).json({errors:errors.array()});
     }

     const {origin,destination}=req.query||{};

     const distanceTime=await getDistanceTime(origin,destination);
     res.status(200).json(distanceTime);
    }catch(err){
console.error(err);
res.status(500).json({message:'Internal servere error'});
    }

}

module.exports.getAutoCompleteSuggestions=async(req,res,next)=>{

try{
    const errors= validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {input}=req.query;
    const suggestions=await getAutoCompleteSuggestions(input);
    res.status(200).json(suggestions);
}catch(err){
    console.error(err);
    res.status(500).json({message:'Internal server error'});
}
}