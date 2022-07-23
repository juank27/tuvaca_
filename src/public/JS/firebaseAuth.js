import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDlasdrgnXPMmIqioRVObso5lwBp1e5UCs",
	authDomain: "tuvaca-ce478.firebaseapp.com",
	projectId: "tuvaca-ce478",
	storageBucket: "tuvaca-ce478.appspot.com",
	messagingSenderId: "487906553455",
	appId: "1:487906553455:web:35cd78dd5c339b1d3ba79a",
	measurementId: "G-3LYFGJK1ET"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);

loginGoogle.addEventListener('click', (e) => {
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
	signInWithPopup(auth, provider)
		.then((result) => {
			// This gives you a Google Access Token. You can use it to access the Google API.
			const credential = GoogleAuthProvider.credentialFromResult(result);
			const token = credential.accessToken;
			// The signed-in user info.
			const user = result.user;


			alert(user.displayName);
			// ...
		}).catch((error) => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			const email = error.email;
			// The AuthCredential type that was used.
			const credential = GoogleAuthProvider.credentialFromError(error);
			// ...

			alert(errorMessage);
		});
});

