
let loggedIN = sessionStorage.getItem("login");
	if (loggedIN) {
		setInterval(() => {
			document.getElementById("loader").style.display = "none";
		}, 1000);
	}else{
		window.location.pathname = "cs391-web-development-ozu/"
	}

	const logout =()=>{
		sessionStorage.removeItem("login")
		location.reload()
	}
	document.getElementById('footer').innerHTML =`	<footer class="containf">
	<br /><br />
	<b> © 2021 Özyeğin Üniversitesi</b>
	<br /><br />
</footer>`

	document.getElementById('header').innerHTML = `    <ul class="ana">
	<li><a href="home.html">Home</a></li>
	<li><a href="course.html">Register courses</a></li>
	<li><a href="student.html">Courses</a></li>
	<li><a href="home.html#about">Contact Us</a></li>
	<button onclick="logout()">Logout</button>
  </ul>`


