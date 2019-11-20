
function clearErrors() {
	for (var loopCounter; loopCounter < document.forms["contactUs"].elements.length; loopCounter++) {
		if (document.forms["contactUs"].elements[loopCounter].parentElement.className.indexOf("has-") != -1) {
			document.forms["contactUs"].elements[loopCounter].parentElement.className = "form-group";
		}
	}
}


function validateItems() {
	clearErrors();
	var customer = document.forms["contactUs"]["customer"].value;
	var email = document.forms["contactUs"]["email"].value;
	var phone = document.forms["contactUs"]["phone"].value;
	
	
	if (customer == "" || !isNaN(customer)) {
		alert("Name cannot be left blank and must use letters.");
		document.forms["contactUs"]["customer"].parentElement.className = "form-group has-error";
		document.forms["contactUs"]["customer"].focus();
		return false;
	}
	if (email == "") {
		alert("Email cannot be left blank.");
		document.forms["contactUs"]["email"].parentElement.className = "form-group has-error"
		document.forms["contactUs"]["email"].focus();
		return false;
	}
	if (phone == "") {
		alert("Phone cannot be left blank.");
		document.forms["contactUs"]["phone"].parentElement.className = "form-group has-error"
		document.forms["contactUs"]["phone"].focus();
		return false;
	}
	
	document.getElementById("formVerification").style.display = "block";

	return false;
}