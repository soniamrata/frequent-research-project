const mongoose=require("mongoose")

const registrationSchema = new mongoose.Schema({
  firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      required: true
    },
    dateOfBirth: {
      type: Date,
      required: true
    },
    age:{
        type:Number,
        required:true
    }
}, { timestamps: true })
  
  module.exports = mongoose.model('Registration', registrationSchema);