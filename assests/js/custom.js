
let loggedIN = sessionStorage.getItem("login");
// let users = []

///////// LOGIN PAGE ///////////
if (
	window.location.pathname === "/" ||
	window.location.pathname === "/index.html"
) {
	if (loggedIN) {
		location.pathname = "/home.html";
	} else {
		setInterval(() => {
			document.getElementById("loader").style.display = "none";
		}, 1000);
	}
}
