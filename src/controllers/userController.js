const userModel = require("../models/userModel.js")
const {isvalidEmail,isvalidName,isvalidEmpty,validateCandidateAge} = require("../validators/validators")

const createUser = async function (req, res) {
    try {
     
      const data = req.body
      if (Object.keys(data) == 0) {
        return res.status(400).send({ status: false, message: "No input provided" });
      }
      const {firstName,lastName, email,country,state, city, gender,dateOfBirth,age  } = req.body
     
      if (!firstName) { return res.status(400).send({ status: false, message: "please provide the firstName" }) }
      if (isvalidEmpty(firstName)) {return res.status(400).send({status:false,message:"empty name string"})}
      if (!isvalidName(firstName)) { return res.status(400).send({ status: false, message: "Invalid name" })}

      if(!lastName) { return res.status(400).send({ status: false, message: "please provide the lastName" }) }
      if(isvalidEmpty(lastName)) {return res.status(400).send({status:false,message:"empty name string"})}
      if (!isvalidName(lastName)) { return res.status(400).send({ status: false, message: "Invalid name" })}

      if (!email) {return res.status(400).send({ status: false, message: "Please provide email" }) }
      if (!isvalidEmail(email)) {return res.status(400).send({ status: false, message: "Invalid email" }) }
      const uniqueEmail = await userModel.findOne({ email: email })
      if (uniqueEmail) {return res.status(400).send({ status: false, message: " this email is already exists" }) }
  
     if(!country) {return res.status(400).send({status:false, message: "country is missing"})}
  
     if(!state) {return res.status(400).send({status:false, message: "state is missing"})}
  
     if(!city) {return res.status(400).send({status:false, message: "city is missing"})}
    
     if (!gender) {return res.status(400).send({ status: false, message: "gender is missing" }) }
      if(!["Male","Female","Others"].includes(gender)){ return res.status(400).send({ status: false, message: "invalid gender" })}

     if(!dateOfBirth) {return res.status(400).send({status:false, message: "dateOfBirth is missing"})}
     if(validateCandidateAge(dateOfBirth)) 
    
      {return res.status(400).send({status:false, message:"Candidate must be at least 14 years old to register"})}
  
     if(!age) {return res.status(400).send({status:false, message:"age is missing"})}

      const createuser = await userModel.create(data);
      return res.status(201).send({ status: true, data: createuser })
    }
    catch (err) {
      return res.status(500).send({ status: false, message: err.message })
    }
  }

// 
  const getUser = async function(req,res){
    try{
    const user = await userModel.find()
    return res.status(400).send({status:false, message:"successful", data: user})
    }
    catch(err){
      return res.status(500).send({status : false, message:err.message})
    }
}

  module.exports={createUser,getUser}