function registerStudent(){

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let course = document.getElementById("course").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    let resume = document.getElementById("resume").files[0];
    let tenth = document.getElementById("tenth").files[0];
    let inter = document.getElementById("inter").files[0];

    if(name==="" || roll==="" || course==="" || email==="" || phone===""){
        alert("Please fill all fields");
        return;
    }

    let maxSize = 20 * 1024;

    if(resume && resume.size > maxSize){
        alert("Resume size must be below 20KB");
        return;
    }

    if(tenth && tenth.size > maxSize){
        alert("10th PDF size must be below 20KB");
        return;
    }

    if(inter && inter.size > maxSize){
        alert("Inter PDF size must be below 20KB");
        return;
    }

    alert("Student Registration Submitted Successfully!");

    console.log({
        Name:name,
        Roll:roll,
        Course:course,
        Email:email,
        Phone:phone
    });
}