 
/*
INITIALLY, when i was researching how to do javascript validation on w3schools, the example used "alert("blahblah"); as the display for the error message. When i was testing my form, it became very annoying since as soon as a user enters 1 character, the alert pops up. this is why on some areas i use alert();, while on others i use "error.innerHTML" to make it less annoying. the error message displays as a <p> on the html form. I hope to add CSS styling on "styles3.css"
*/

/*
THE ABOVE COMMENT IS WHAT I WAS DOING UNTIL I FIGURED THAT WHEN THE PROGRAM READ:
	error.innerHTML = "";
        return true;
THE ALERT();S WILL NOT BE COUNTED, SO I CHANGED ALL "ALERT():"S BACK TO "error.innerHTML"
*/

//CLIENT ID
function validateClientId() {

let clientid = document.getElementById("clientid").value;
let error = document.getElementById("errorId");
let format = /^[A-Za-z][A-Za-z0-9]*$/;

error.className="error";

if (clientid == "") {
	error.innerHTML = "Client ID is required";
	return false;
}
if (clientid.length < 5 || clientid.length > 20) {
        error.innerHTML = "Client ID must be 5-20 characters";
        return false;
}
if (!format.test(clientid)) {
        alert("Must begin with a letter and contain only letters and numbers");
        return false;
    }

    error.innerHTML = "";
    return true;
}

//PASSWORD
function validatePassword(){

let password = document.getElementById("password").value;
let clientid = document.getElementById("clientid").value;
let error = document.getElementById("errorPassword");
let format = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

error.className="error";

if (password == "") {
        error.innerHTML = "Please enter password";
        return false;
 }

    if (!format.test(password)) {
        error.innerHTML = "Password must:<br>"+
        "-be at least 8 characters<br>"+
        "-contain an uppercase letter<br>"+
        "-contain a lowercase letter<br>"+
        "-contain a number<br>";
        return false;
}

    if (password == clientid) {
    error.innerHTML = "Password cannot be the same as your Client-ID";
        
    return false;
}

    error.innerHTML = "";
    return true;
}

//REENTER PASSWRD
function validateReenter(){

let reenter = document.getElementById("reenter").value;
let password = document.getElementById("password").value;
let error=document.getElementById("errorReenter");

error.className="error";

if (reenter == "") {
        error.innerHTML = "Please re-enter your password";
        return false;
}

    if (password != reenter) {
        error.innerHTML = "Passwords do not match";
        return false;
}

    error.innerHTML = "";
    return true;
}

//FIRST NAME
function validateFname() {

 let fname = document.getElementById("fname").value;
 let error = document.getElementById("errorFname");
 let format = /^[A-Za-z'-]+$/;

error.className="error";

 if (fname == "") {
        error.innerHTML = "First name is required";
        return false;
 }

 if (fname.length < 1 || fname.length > 30) {
        error.innerHTML = "First name must be 1-30 characters";
        return false;
 }
if (!format.test(fname)) {
        alert("Letters apostrophes and dashes only");
        return false;
}
error.innerHTML = "";
    return true;
}

//MIDDLE NAME
function validateMname() {
 let middle = document.getElementById("mname").value;
 let error = document.getElementById("errorMname");
 let format = /^[A-Za-z]$/;

error.className="error";

 if (!format.test(middle)) {
        error.innerHTML = "Enter one letter only";
        return false;
 }
 error.innerHTML = "";
    return true;
}


//LAST NAME
function validateLname() {

 let lname = document.getElementById("lname").value;
  let error = document.getElementById("errorLname");
let format = /^[A-Za-z'-]+$/;

error.className="error";

 if (lname == "") {
        error.innerHTML = "Please enter Last Name";
        return false;
}

 if (lname.length < 1 || lname.length > 30) {
	error.innerHTML = "Last name must be 1-30 characters";
        return false;
}

    if (!format.test(lname)) {
        alert("Letters apostrophes and dashes only");
        return false;
    }
 error.innerHTML = "";
    return true;
}

//DOB
function validateDob() {

 let dob = document.getElementById("dob").value;
 let error = document.getElementById("errorDob");

error.className="error";

 if (dob == "") {
   error.innerHTML = "please enter DOB";
   return false;
}
 let userbday = new Date(dob);
 let today = new Date();

 if (userbday > today) {
	error.innerHTML = "Choose a valid date";
        return false;
}
error.innerHTML = "";
    return true;
}

//SSN
function validateSSN() {

let ssn = document.getElementById("ssn").value;
let error = document.getElementById("errorSSN");

error.className="error";

/*
Since i could not find all answers on W3Schools, I used google to help me set the required format/patterns like below to make javascript easier
*/

let format = /^\d{3}-\d{2}-\d{4}$/;
if (ssn == "") {
  error.innerHTML = "please eneter SSN";
  return false;
}
 if (!format.test(ssn)) {
  error.innerHTML = "Format must be 999-99-9999.";
  return false;
}
 error.innerHTML = "";
  return true;
}

//EMAIL
function validateEmail() {

 let email = document.getElementById("email").value;
 let error = document.getElementById("errorEmail");
 let format = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

error.className="error";

 if (email == "") {
   error.innerHTML = "please enter your email";
   return false;
 }
 if (email.length < 10 || email.length > 30) {
   error.innerHTML = "Email must be between 10-30 characters";
   return false;
}
if (!format.test(email)) {
        alert("Enter a valid email address");
        return false;
}
error.innerHTML = "";
return true;
}


//PHONE
function validatePhone() {

 let phone = document.getElementById("phone").value;
 let error = document.getElementById("errorPhone");
 let format = /^\d{3}-\d{3}-\d{4}$/;

error.className="error";

 if (phone == "") {
        error.innerHTML = "please enter a phone number";
        return false;
 }
 if (!format.test(phone)) {
        error.innerHTML = "Format must be 999-999-9999";
        return false;
}
 error.innerHTML = "";
	return true;
}

//ADDRESS LINE 1
function validateAddr1() {

 let addr1 = document.getElementById("addr1").value;
 let error = document.getElementById("errorAddr1");

error.className="error";

 if (addr1 == "") {
        error.innerHTML = "Please enter your address";
        return false;
}
if (addr1.length < 2 || addr1.length > 30) {
        error.innerHTML = "Address must be 2-30 characters";
        return false;
 }
	error.innerHTML = "";
	return true;
}


//ADDR 2
function validateAddr2() {

 let addr2 = document.getElementById("addr2").value.trim();
 let error = document.getElementById("errorAddr2");

error.className="error";

 if (addr2.length <2 || addr2.length >30) {
        error.innerHTML = "must be between 2-30 characters";
        return false;
 }
 error.innerHTML = "";
    return true;
}


//CITY
function validateCity() {

 let city = document.getElementById("city").value;
 let error = document.getElementById("errorCity");

error.className="error";
 
if (city == "") {
	error.innerHTML = "please enter your city";
        return false;
}
if (city.length < 2 || city.length > 30) {
        error.innerHTML = "city has to be 2-30 characters";
        return false;
    }
error.innerHTML = "";
return true;
}

//ZIP
function validateZipcode() {

 let zipcode = document.getElementById("zipcode").value;
 let error = document.getElementById("errorZipcode");

error.className="error";

 if (zipcode == "") {
        error.innerHTML = "please enter your zipcode";
        return false;
}
 if (zipcode.length != 5){
        error.innerHTML = "zipcode must be 5 digits only";
        return false;
}
 error.innerHTML = "";
 	return true;
}

//SKIN CONCERNS TEXTAREA
function validateSkinconcern() {

 let concern = document.getElementById("skinconcern").value;
 let error = document.getElementById("errorSkinconcern");
error.className="error";

 if (concern == "") {
        error.innerHTML = "please provide skin concerns";
        return false;
}

 if (concern.length > 200) {
        alert("please do not exceed 200 characters");
        return false;
}
 error.innerHTML = "";
 return true;
}

//FETCH TO DISPLAY DERM TERMS
fetch("terms.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("terms").innerHTML = data;
    })
    .catch(error => {
        console.log("Error loading terms:", error);
    });

//cookies attempt

function saveUser(){

    let remember = document.getElementById("rememberMe").checked;

    let fname = document.getElementById("fname").value;


    if (remember == true){

        // save for 48 hours
        setCookie("username", fname, 2);

    }

    else {

        // delete cookie
        setCookie("username", "", -1);

    }

}
function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {

    let user = getCookie("username");

    let welcome = document.getElementById("welcomeMessage");
    let newUser = document.getElementById("newUserOption");


    if (user != "") {

        welcome.innerHTML = "Welcome back " + user;


        newUser.innerHTML =
        `
        <input type="checkbox" id="newUser">
        <label for="newUser">
        Not ${user}? Click HERE to start as a NEW USER.
        </label>
        `;


        document.getElementById("newUser").onclick = function() {

            if(this.checked) {

                // expire cookie
                setCookie("username", "", -1);

                // clear form
                document.getElementById("regisform").reset();

                welcome.innerHTML = "Welcome New User";

                newUser.innerHTML = "";

            }

        };


    } else {

        welcome.innerHTML = "Welcome New User";

    }

}
