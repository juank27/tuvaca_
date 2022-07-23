const logingoogle = document.getElementById("logingoogle");

logingoogle.addEventListener('click', (e) => {
	// signInWithRedirect(auth, provider);


	// redirect the result
	//  getRedirectResult(auth)
	//    .then((result) => {
	//      // This gives you a Google Access Token. You can use it to access Google APIs.
	//      const credential = GoogleAuthProvider.credentialFromResult(result);
	//      const token = credential.accessToken;

	//      // The signed-in user info.
	//      const user = result.user;

	//    }).catch((error) => {
	//      // Handle Errors here.
	//      const errorCode = error.code;
	//      const errorMessage = error.message;
	//      // The email of the user's account used.
	//      const email = error.email;
	//      // The AuthCredential type that was used.
	//      const credential = GoogleAuthProvider.credentialFromError(error);
	//      // ...

	// });


	// sign in with popup tab
	// signInWithPopup(auth, provider)
	// 	.then((result) => {
	// 		// This gives you a Google Access Token. You can use it to access the Google API.
	// 		const credential = GoogleAuthProvider.credentialFromResult(result);
	// 		const token = credential.accessToken;
	// 		// The signed-in user info.
	// 		const user = result.user;

	// 		console.log(user);
	// 		window.location.href = "/holas";
	// 		// ...
	// 	}).catch((error) => {
	// 		// Handle Errors here.
	// 		const errorCode = error.code;
	// 		const errorMessage = error.message;
	// 		// The email of the user's account used.
	// 		const email = error.email;
	// 		// The AuthCredential type that was used.
	// 		const credential = GoogleAuthProvider.credentialFromError(error);
	// 		// ...
	// 		alert(errorMessage);

	// 	});

	const provider = new firebase.auth.GoogleAuthProvider();
	auth.signInWithPopup(provider)
		.then((result) => {
			//const credential = provider.credentialFromResult(result);
			//const token = credential.accessToken;
			// The signed-in user info.
			const user = result.user;

			console.log(user.displayName); //name
			console.log(user.email); //email
			console.log(user.photoURL); //photo
			console.log(user.uid); //uid
			//window.location.href = "/holas";
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
		})
});

