

function User(fName, lName, email, password, gender, age, address, phone, color) {
	this.firstName = fName;
	this.lastName = lName;
	this.email = email;
	this.password = password;
	this.gender = gender;
	this.age = age;
	this.address = address;
	this.phone = phone;
	this.color = color;
	// this.id = c++;
}

function register() {

	let inputFName = $("#txtFname").val();
	let inputLName = $("#txtLname").val();
	let inputEmail = $("#txtEmail").val();
	let inputPassword = $("#txtPassword").val();
	let inputGender = $("#txtGender").val();
	let inputAge = $("#txtAge").val();
	let inputAddress = $("#txtAddress").val();
	let inputPhone = $("#txtPhone").val();
	let inputColor = $("#txtColor").val();

	let newUser = new User(inputFName, inputLName, inputEmail, inputPassword, inputGender, inputAge, inputAddress, inputPhone, inputColor);

	saveUser(newUser);

	// console.log(newUser);
}


function init() {
	$("#regbtn").click(register);

}

window.onload = init;