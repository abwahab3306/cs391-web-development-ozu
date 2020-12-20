
function saveCourse() {   
// const formEl = document.forms.addCourse;
// const formData = new FormData(formEl);
// const coursename = formData.get('coursename');
// const teacher = formData.get('teacher');
// const coursecode = formData.get('coursecode');
// const weekday = formData.get('weekday');
// const textbox = formData.get('textbox');

// cousrseOBJ = {coursename,teacher,coursecode,weekday,textbox}
// let courses = localStorage.getItem('courses')
// if(courses===null){
//     localStorage.setItem("courses",JSON.stringify(cousrseOBJ))
// }


let course = {
    courseName: document.getElementById("coursename").value,
    teacher: document.getElementById("teacher").value,
    courseCode: document.getElementById("coursecode").value,
    weekday: document.getElementById("weekday").value,
}
let courses = localStorage.getItem("courses") ? JSON.parse(localStorage.getItem("courses")) : [];
courses.push(course);
localStorage.setItem("courses", JSON.stringify(courses));


}