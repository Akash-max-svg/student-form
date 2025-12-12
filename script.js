document.getElementById("studentForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let student = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        course: document.getElementById("course").value
    };

    // Save data locally in browser
    let students = JSON.parse(localStorage.getItem("students")) || [];
    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));

    document.getElementById("msg").innerText = "Student Registered Successfully!";
    document.getElementById("studentForm").reset();
});
