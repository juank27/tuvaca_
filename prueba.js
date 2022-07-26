let user = [
	{
		"id": "NtcgwC5CmZRXvj141jDwfSSm1LF3",
		"email": "natalia@gmail.com",
		"phone": "3112465403",
		"name": "Natalia Ruiz ",
		"ubication": "Carmen de Carupa",
		"photo": "https://www.w3schools.com/w3images/avatar6.png"
	},
	{
		"id": "OJFESSyhz7NqL4z2ShjeZYlKn1p2",
		"email": "juankruiz27@gmail.com",
		"ubication": "Carmen de Carupa",
		"photo": "https://static.vecteezy.com/system/resources/previews/007/319/933/non_2x/black-avatar-person-icons-user-profile-icon-vector.jpg",
		"name": "Juan Carlos Ruiz",
		"phone": "3155769091"
	}, {
		"id": "SWf7jxis7lSTY7sd87RpZ2eN8B63",
		"phone": "3112465403",
		"photo": "https://www.tsensor.online/wp-content/uploads/2020/04/avatar-icon-png-105-images-in-collection-page-3-avatarpng-512_512.png",
		"name": "Camilo Ruiz",
		"email": "camilo@gmail.com",
		"ubication": "Carmen de Carupa"
	},
	{
		"id": "sOdTBRKfL8PLZD2oNzvbkoukxyg2",
		"email": "nayibepelaez03@gmail.com",
		"photo": "https://lh3.googleusercontent.com/a-/AFdZucrji_gie0XEGByJmsVzfMY8_gBDxzhnzqPd7KicZOE=s96-c",
		"ubication": "Ubaté",
		"phone": "3168707559",
		"name": "nayibe casas"
	}
];

let publicaciones = [
	{
		"id": "bp2S03eefz1k2k8z48tq",
		"iduser": "OJFESSyhz7NqL4z2ShjeZYlKn1p2",
		"precio": "$2000",
		"raza": "Holstein"
	},
	{
		"id": "bp2S03eefz1k2k8z48tq",
		"iduser": "OJFESSyhz7NqL4z2ShjeZYlKn1p2",
		"precio": "$4000",
		"raza": "Jersey"
	},
	{
		"id": "bp2S03eefz1k2k8z48tq",
		"iduser": "sOdTBRKfL8PLZD2oNzvbkoukxyg2",
		"precio": "$8000",
		"raza": "Perrito"
	},
];
//funion para obtener las publicaciones
function unir(publicaciones, user) {
	let publicacionesUser = [];
	let union;
	publicaciones.forEach(element => {
		user.forEach(element2 => {
			if (element.iduser == element2.id) {
				let use = {
					name: element2.name,
					phone: element2.phone,
					ubication: element2.ubication,
					photo: element2.photo,
				};
				union = { ...use, ...element };
				publicacionesUser.push(union);
			}
		})
	});
	return publicacionesUser;
}


unir(publicaciones, user);

