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
let valor
check.addEventListener("click", function () {
    if (check.checked) {
		valor=1;
        boton.disabled = false;
        boton.style.background = "#4B8325"
        google.style.pointerEvents = "auto";
        facebook.style.pointerEvents = "auto";
    } else {
		valor=0
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
			contra.style.display="none";
			console.log('holaaaaaaaaaaaaaaaaaaaaaa');
			ccontraseña.style.display = "none";
			ccontraseña.removeAttribute("required");
			titulo.style.display = "block";
			contra.style.display = "none"
			contra.removeAttribute("required");
			// cerrar.style.display = "none";
			facebook.style.display = "none";
			google.style.display = "none";
			nombre.disabled = true;
			correo.disabled = true;
			document.getElementById("id").value = user.uid;
			document.getElementById("photo").value = user.photoURL;
			console.log(user.displayName);
			document.getElementById("nameb").value = user.displayName;
			document.getElementById("emailbb").value = user.email;
			nombre.value = user.displayName;
			correo.value = user.email;
			console.log(user.email);
			boton.innerText = "Finalizar";
			formulario.setAttribute('action', 'register-google')
			// window.location.href = "/registro";
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
