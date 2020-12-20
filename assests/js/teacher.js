let loggedIN = sessionStorage.getItem("login");
// let users = []

///////// LOGIN PAGE ///////////
if (
	window.location.pathname === "teacher/" ||
	window.location.pathname === "teacher/index.html"
) {
	if (loggedIN) {
		location.pathname = "teacher/home.html";
	} else {
		setInterval(() => {
			document.getElementById("loader").style.display = "none";
		}, 1000);
	}
}
