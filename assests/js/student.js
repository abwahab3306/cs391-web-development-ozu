let loggedIN = sessionStorage.getItem("login");

///////// LOGIN PAGE ///////////
	if (loggedIN) {
		location.pathname = "/home.html";
	} else {
		setInterval(() => {
			document.getElementById("loader").style.display = "none";
		}, 1000);
	}
