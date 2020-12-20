let user = {};
let loggedIN = localStorage.getItem('login')
// let users = []


if(window.location.pathname==="/"|| window.location.pathname==="/index.html")
{

let emailObject = document.getElementById("useremail");
let passwordObject = document.getElementById("userpassword");
let loginButton = document.getElementById("login");
if(loggedIN){
	location.pathname = '/home.html';
}else {
document.getElementById("loader").style.display = "none"
document.getElementById("login").addEventListener("click", () => {
    validateUser(emailObject.value, passwordObject.value)
});

emailObject.addEventListener("input", () => {
	if (emailObject.value === "") {
		loginButton.disabled = true;
	} else loginButton.disabled = false;
});

const getUsers = async () => {
	let users
	await fetch("./assests/db/users.json")
		.then((res) => res.json())
		.then((data) => {
			users = data})
		.catch((err) => console.error(err));
		return users
};

const validateUser = (email, password) => {
getUsers().then(users=>{
	let usercheck = users.filter(user =>{
		if(user.email === email ) return true
	})
	return usercheck
}).then((us)=>{
	user = us[0]
}).then(()=>{
	if(user.password===password){
		localStorage.setItem('login',true)
		location.pathname = '/home.html'
	}
})
};
}	
///////// LOGIN PAGE ///////////



}