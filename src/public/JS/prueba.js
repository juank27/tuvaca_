const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore/lite');
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
const db = getFirestore(app);
const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");
const auth = getAuth();
const email = 'andres@gmail.com';
const password = '123456';
createUserWithEmailAndPassword(auth, email, password)
	.then((userCredential) => {
		// Signed in
		const user = userCredential.user;
		// ...
	})
	.catch((error) => {
		const errorCode = error.code;
		const errorMessage = error.message;
		// ..
	});

// Get a list of cities from your database
/*
async function hello () {
	console.log('hola');
	const citiesCol = await db.collection('users');
	const citySnapshot = getDocs(citiesCol);
	const cityList = citySnapshot.docs.map(doc => doc.data());
	//res.send('hello');
	console.log(cityList);
}
hello();
*/
// hacer una consulta a la base de datos
async function getCities(db) {
	const citiesCol = collection(db, 'users');
	const citySnapshot = await getDocs(citiesCol);
	const cityList = citySnapshot.docs.map(doc => doc.data());
	console.log(cityList);
	return cityList;
}
getCities(db);