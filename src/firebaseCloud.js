const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore/lite');
const { getAuth, GoogleAuthProvider } = require("firebase/auth");

const firebaseConfig = {
	apiKey: "AIzaSyDlasdrgnXPMmIqioRVObso5lwBp1e5UCs",
	authDomain: "tuvaca-ce478.firebaseapp.com",
	projectId: "tuvaca-ce478",
	storageBucket: "tuvaca-ce478.appspot.com",
	messagingSenderId: "487906553455",
	appId: "1:487906553455:web:35cd78dd5c339b1d3ba79a",
	measurementId: "G-3LYFGJK1ET"
};

const app = initializeApp(firebaseConfig);
const dbFirebase = getFirestore(app);
const auth = getAuth();
const user = auth.currentUser;
const provider = new GoogleAuthProvider(app);


module.exports = {
	app,
	dbFirebase,
	auth,
	user,
	provider,
}