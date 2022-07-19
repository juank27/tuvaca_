

const registerform = document.querySelector('#register-form');

registerform.addEventListener('submit', (e) => {
	e.preventDefault();
	//const email = document.querySelector('#mail').value;
	const email = document.getElementById('email-a').value;
	const password = document.querySelector('#password').value;
	const confirmPassword = document.querySelector('#confirm-password').value;
	const name = document.querySelector('#name').value;
	const phone = document.querySelector('#phone').value;
	const ubication = document.querySelector('#ubication').value;
	console.log(email, password, confirmPassword, name, phone, ubication);
	// if (password !== confirmPassword) {
	// 	//alert('Las contraseñas no coinciden');
	// 	document.getElementById("nn").textContent  = "La contraseña no coincide";
	// 	var passwordd = document.getElementById('password');
	// 	var confirmPasswordd = document.getElementById('confirm-password');
	// 	passwordd.style.boxShadow = "2px 2px 8px 0px red";
	// 	confirmPasswordd.style.boxShadow = "2px 2px 8px 0px red";
	// 	return
	// }
});