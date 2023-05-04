const mongoose = require("mongoose");
const moment = require('moment');

const isvalidName = function (name) {
    const nameRegex = /^[a-zA-Z ][a-zA-Z ]*$/;
    return nameRegex.test(name);
  };

  const isvalidEmpty = function(value){
    const regex =/^\s+$/
    return regex.test(value)
  }

  const isvalidEmail = function (email) {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
};


function validateCandidateAge(dateOfBirth) {
  const age = moment().diff(dateOfBirth, 'years');
  if (age < 14) {
    throw new Error('Candidate must be at least 14 years old to register');
  }
  return true;
}



  module.exports = {isvalidName,isvalidEmpty,isvalidEmail,validateCandidateAge}