let emailObject = document.getElementById("useremail");
let passwordObject = document.getElementById("userpassword");
let loginButton = document.getElementById("login");
let studentDB = `../assests/db/students.json`;
let teacherDB = `../assests/db/teachers.json`;
let dbPath = '';

const validateEmail = (email) => {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};

const getUsers = async (path) => {
	let users;
	await fetch(path)
		.then((res) => res.json())
		.then((data) => {
			users = data;
		})
		.catch((err) => console.error(err));
	return users;
};

const validateUser = (email, password) => {
	getUsers(dbPath)
		.then((users) => {
			if (users.length > 0) {
				let usercheck = users.filter((user) => {
					if (user.email === email) return true;
				});
				return usercheck;
			} else false;
		})
		.then((us) => {
			if (us.length > 0) {
				user = us[0];
			} else {
				document.getElementById(
					"errorMessage",
				).innerHTML = `<p>Wrong Email or Password</p>`;
			}
		})
		.then(() => {
			if (user) {
				console.log("knf");
				if (user.password === password) {
                    sessionStorage.setItem("login", true);
                    if(dbPath===studentDB)
                    location.pathname = "cs391-web-development-ozu/home.html";
                    else location.pathname = "cs391-web-development-ozu/teacher/home.html";
				}
			}
		});
};

if (
	window.location.pathname === "cs391-web-development-ozu/" ||
	window.location.pathname === "cs391-web-development-ozu/index.html" || 
	window.location.pathname === "/index.html" ||
	window.location.pathname === "cs391-web-development-ozu/"
){
    dbPath = studentDB
}else dbPath = teacherDB

window.addEventListener("load", () => {
	setInterval(() => {
		document.getElementById("loader").style.display = "none";
	}, 1000);
	loginButton.addEventListener("click", () => {
		validateUser(emailObject.value, passwordObject.value);
	});

	emailObject.addEventListener("input", () => {
        let valid=validateEmail(emailObject.value);
		if (emailObject.value === "" || passwordObject.value === "") {
			loginButton.disabled = true;
		} else if(valid){
			loginButton.disabled = false;
		}
	});
});
