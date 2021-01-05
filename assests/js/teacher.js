let loggedIN = sessionStorage.getItem("login");
// let users = []

///////// LOGIN PAGE ///////////
	if (loggedIN) {
		location.pathname = "cs391-web-development-ozu/teacher/home.html";
	} else {
		setInterval(() => {
			document.getElementById("loader").style.display = "none";
		}, 1000);
	}

