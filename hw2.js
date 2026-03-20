/*
   Name:Jurgen Mondragon
   Date created:
   Date modified:
   Purpose: Homework 1 JS
*/

//dynamic date js code
const d= new Date();
let text=d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//range slider js code
let slider = document.getElementById("range");
    let output = document.getElementById("range-slider");
    output.innerHTML = slider.value;

    slider.oninput = function () {output.innerHTML = this.value;};

// first name validation
function validateFname() {
   fname = document.getElementById("fname").value.trim();
   var namePattern =/^[a-zA-Z'-]+$/;
   //checking firstname field 
   if (fname == "") {
      document.getElementById("fname-error").innerHTML = "First name field cant be empty";
      return false;
   } else if (fname !="") {
       if (!fname.match(namePattern)) { //checks if the firstname matches the pattern
          document.getElementById("fname error").innerHTML = "letters, apostrophes, and dashes only";
          return false;
   } else if (fname.length < 2) { // checks if the first name has at least 2 characters
         document.getElementById("fname error").innerHTML = "first name cannot be less than 2 characters.";  
          return false;
   } else if (fname.length > 30) { // checks if the first name is  more than 30 characters
         document.getElementById("fname error").innerHTML = "first name cannot be more than 30 characters.";  
          return false;
   } else { 
         document.getElementById("fname error").innerHTML = "";  
          return true;
       }

   }

   //middle initial validation
   function validateMname() {
      let mname = document.getElementById("mname").value;
      const namePattern= /^[A-Z]$/;
      //turns middle initial uppercase
      mname = mname.toUpperCase();
      document.getElementById("mname").value =mname;
      if (!mname.match(namePattern)) { //checks if middle initial matches pattern
         document.getElementById("mname-error).innerHTML = "middle initial has to be a single uppercase letter.";
         return false;
      } else{
         document.getElementById("mname-error").innerHTML= "";
         return true;
      }
   }   
          

    //last name validation
    function validateLname() {
       lname = document.getElementById("lname").value.trim();
       var namePattern = /^[a-zA-Z']+$/;
       //checking if the field is empty
       if (lname == "") { 
          document.getElementById("lname").innerHTML = "last name field cannot be empty";
          return false;
       }  else if(lname != "") { //check if last name matches the pattern
          if (!lname.match(namePattern)) {
          document.getElementById("lname-error").innerHTML = "letters, apostrophes, and dashes only.";
          return false;
       }  else if(lname.length < 2) { //check if the last name has 2 characters
          document.getElementById("lname-error").innerHTML = "Last name cannot be less than 2 characters.";
          return false;
       }   else if(lname.length > 30) { //check if the last name deosnt have more than 30 characters
          document.getElementById("lname-error").innerHTML = "Last name cannot be more than 30 characters.";
          return false;
       }  else {
          document.getElementById("lname-error").innerHTML= "";
          return true;
       }
       }   
          
    }
    
    // validating date of birth 
    function validationDob() {
    dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date(dob.value);

    if (date > new Date()) {
       document.getElementById("dob-error).innerHTML =
       "Date cannot be in there.";
       return false;
    } else if( date < new Date(maxDate)) {
       document.getElementById("dob-error).innerHTML =
       "date cannot be more than 120 years ago.";
       dob.value="";
       return false;
    }  else {
       document.getElementById("dob-error").innerHTML = "";
       return true;
    }
 }
       
 //Validating ssn
   function validateSsn() {
      const ssn = document.getElementById("ssn").value;

      // ssn patttern
      const ssnR =/^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

      if (!ssnR.test(ssn)) {
         document.getElementById("ssn-Error").innerHMTL =
         "please enter a valid social security number.";
         return false;

      } else {
          document.getElementById("ssn-error").innerHTML = 
           "please enter a valid social security number.";
            return false; 
      } else {
         document.getElementById("ssn-error").innerHTML = "";
         return true; 
      } 
         
      
       
       
    
    
   

