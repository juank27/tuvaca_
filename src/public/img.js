// addDoc({ collection: 'files', data: { fileName: '' } })
const addDoc = async ({ collection, data }) => {
	let document = {
		...data,
		createdAt: firebase.firestore.FieldValue.serverTimestamp(),
		updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
	}

	// 1. Una colección
	let collectionRef = firebase.firestore().collection(collection);
	// 2. Guardar el documento
	return collectionRef.add(document);
}

// upload({ file:})
const upload = async ({ file }) => {
	// 1. Referencia al espacio en el bucket donde estará el archivo
	let storageRef = firebase.storage().ref().child(`images/${file.name}`);
	// 2 Subir el archivo
	await storageRef.put(file);
	// 3. Retornar la referencia
	return storageRef;
}


const publish = async ({ file }) => {
	let storageRef = await upload({ file });
	console.log('lo que contiene storage')
	//recupera los meta datos
	storageRef.getMetadata().then((data) => {
		console.log(data.contentType);
	});

	return addDoc({ collection: 'files', data: { path: storageRef.fullPath } })
}

const queryImages = async () => {
	// 1. Colección
	let collection = firebase.firestore().collection('files')
		.orderBy('createdAt', 'desc');
	// 2. onSnapshot a cambios en los documentos
	collection.onSnapshot((snapshot) => {
		snapshot.docChanges().forEach((change) => {
			if (change.type === "added") {
				showImage(change.doc.data());
			}
		});
	});
}

const showImage = async (docData) => {
	let node = document.createElement("div");
	node.classList.add("item");
	let url = await firebase.storage().ref(docData.path).getDownloadURL();
	//console.log(url);
	node.innerHTML = `
   <img class='image' src='${url}' />`;

	let container = document.querySelector("#images");
	container.append(node);

	//Descargar archivo

}


async function main() {
	var firebaseConfig = {
		// YOUR FIREBASE CREDENTIALS HERE
		apiKey: "AIzaSyDlasdrgnXPMmIqioRVObso5lwBp1e5UCs",
		authDomain: "tuvaca-ce478.firebaseapp.com",
		projectId: "tuvaca-ce478",
		storageBucket: "tuvaca-ce478.appspot.com",
		messagingSenderId: "487906553455",
		appId: "1:487906553455:web:35cd78dd5c339b1d3ba79a",
		measurementId: "G-3LYFGJK1ET"
	};
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);

	let form = document.querySelector("#uploader");

	form.addEventListener("submit", (ev) => {
		ev.preventDefault();

		let fileInput = form.querySelector("#file");
		console.log(fileInput.files);
		for(let i = 0; i < fileInput.files.length; i++){
			let file = fileInput.files[i];
			publish({ file });
		}

	});

	queryImages();



}

main();