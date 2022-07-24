
const logingoogle = document.getElementById("logingoogle");
const formlogin = document.getElementById("login-form");
const email = document.getElementById("email");
const password = document.getElementById("password");


logingoogle.addEventListener('click', (e) => {
	const provider = new firebase.auth.GoogleAuthProvider();
	auth.signInWithPopup(provider)
		.then((result) => {
			const user = result.user;
			console.log('entre');
			password.removeAttribute("required");
			email.value = user.email;
			formlogin.setAttribute('action', 'login-google');
			formlogin.submit();
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			console.log(errorMessage);
		});
});
