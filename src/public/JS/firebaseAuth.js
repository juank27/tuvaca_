const registergoogle = document.getElementById("registergoogle");
const registerfacebook = document.getElementById("registerfacebook");
const google=document.getElementById("google");
const facebook=document.getElementById("facebook");
const contra = document.getElementById("passwordd");
const ccontraseña = document.getElementById("confirmPassword");
const cerrar=document.getElementById("cerrar");
const titulo = document.getElementById("titulo");
const boton = document.getElementById("boton");
const nombre = document.getElementById("name");
const correo = document.getElementById("email-a");
const formulario = document.getElementById("register-form");
const notification = document.getElementById("notification");
/**** */
let check = document.getElementById("cbox");
check.addEventListener("click", function () {
    if (check.checked) {
        boton.disabled = false;
        boton.style.background = "#4B8325"
        google.style.pointerEvents = "auto";
        facebook.style.pointerEvents = "auto";
    } else {
        boton.disabled = true;
        boton.style.background = "#A6A6A6"
        google.style.pointerEvents = "none";
        facebook.style.pointerEvents = "none";
    }

})

// register with google
registergoogle.addEventListener('click', (e) => {
	const provider = new firebase.auth.GoogleAuthProvider();
	auth.signInWithPopup(provider)
		.then((result) => {
			//const credential = provider.credentialFromResult(result);
			//const token = credential.accessToken;
			// The signed-in user info.
			const user = result.user;

			// console.log(user.displayName); //name
			// console.log(user.email); //email
			// console.log(user.photoURL); //photo
			// console.log(user.uid); //uid
			// contra.style.display="none";
			ccontraseña.style.display = "none";
			ccontraseña.removeAttribute("required");
			titulo.style.display = "block";
			contra.style.display = "none"
			contra.removeAttribute("required");
			cerrar.style.display = "none";
			facebook.style.display = "none";
			google.style.display = "none";
			nombre.disabled = true;
			correo.disabled = true;
			document.getElementById("id").value = user.uid;
			document.getElementById("photo").value = user.photoURL;
			document.getElementById("nameb").value = user.displayName;
			document.getElementById("emailb").value = user.email;
			nombre.value = user.displayName;
			correo.value = user.email;
			boton.innerText = "Finalizar";
			formulario.setAttribute('action', 'register-google')
			//window.location.href = "/registro";
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			const email = error.email;
			// The AuthCredential type that was used.
			//const credential = provider.credentialFromError(error);
			// ...
			console.log(errorMessage);
			//alert(errorMessage);
		});
});

//register facebook
registerfacebook.addEventListener('click', (e) => {
	const provider = new firebase.auth.FacebookAuthProvider();
	auth.signInWithPopup(provider)
		.then((result) => {
			//const credential = provider.credentialFromResult(result);
			//const token = credential.accessToken;
			// The signed-in user info.
			const user = result.user;

			// console.log(user.displayName); //name
			// console.log(user.email); //email
			// console.log(user.photoURL); //photo
			// console.log(user.uid); //uid
			// contra.style.display="none";
			console.log(user);
			ccontraseña.style.display = "none";
			ccontraseña.removeAttribute("required");
			titulo.style.display = "block";
			contra.style.display = "none"
			contra.removeAttribute("required");
			cerrar.style.display = "none";
			facebook.style.display = "none";
			google.style.display = "none";
			nombre.disabled = true;
			correo.disabled = true;
			document.getElementById("id").value = user.uid;
			document.getElementById("photo").value = user.photoURL;
			document.getElementById("nameb").value = user.displayName;
			document.getElementById("emailb").value = user.email;
			nombre.value = user.displayName;
			correo.value = user.email;
			boton.innerText = "Finalizar";
			formulario.setAttribute('action', 'register-facebook')
			//window.location.href = "/registro";
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			const email = error.email;
			// The AuthCredential type that was used.
			//const credential = provider.credentialFromError(error);
			// ...
			console.log(errorMessage);
			console.log('Codigo de error ');
			console.log(errorCode);
			//alert(errorMessage);
		})
});

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
			console.log('Codigo de error ', errorCode);
		});
});
