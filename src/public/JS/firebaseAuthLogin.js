// login google
const logingoogle = document.getElementById("logingoogle");
const loginfacebook = document.getElementById("loginfacebook");
const formlogin = document.getElementById("login-form");
const email = document.getElementById("email");
const emailb = document.getElementById("emailb");
const password = document.getElementById("password");

//login google
logingoogle.addEventListener('click', (e) => {
	const provider = new firebase.auth.GoogleAuthProvider();
	auth.signInWithPopup(provider)
		.then((result) => {
			const user = result.user;
			console.log('entre');
			password.removeAttribute("required");
			email.removeAttribute("required");
			emailb.value = user.email;
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

//login facebook
loginfacebook.addEventListener('click', (e) => {
	const provider = new firebase.auth.FacebookAuthProvider();
	auth.signInWithPopup(provider)
		.then((result) => {
			const user = result.user;
			console.log('entre');
			password.removeAttribute("required");
			email.removeAttribute("required");
			emailb.value = user.email;
			formlogin.setAttribute('action', 'login-facebook');
			formlogin.submit();
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			console.log(errorMessage);
			window.location.assign("/errorRegisterFacebook");

		});
});
