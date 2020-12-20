
let loggedIN = sessionStorage.getItem("login");
// let users = []

///////// LOGIN PAGE ///////////

	if (loggedIN) {
		setInterval(() => {
			document.getElementById("loader").style.display = "none";
		}, 1000);
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
	<li><a href="home.html/#about">Contact Us</a></li>
  </ul>


<nav class="home_nav" style="background-color: rgb(32, 94, 94);height: 100px;
">
<p><b>-Web Sayfası İçeriği</b> 

<article class ="infhover">
			<section style="text-decoration: dotted;font-style: italic;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; ">
	   
				 <li class="list">   <b>Avaliable courses For Students</b>   </li>
			 
			</section>
	  </article>


</nav>`