let studentName;
let age;
let mark;
function getGrade(mark) {
    if(mark >= 80){return "A";}
    else if(mark >= 70){return"B";}
    else{return "E";}
}
function displayStudent(){
    studentName = document.getElementById("name").value;
    age = document.getElementById("age").value;
    mark = document.getElementById("mark").value;
    let student = {
        name: studentName,
        age : age,
        mark : mark
    };
    let grade = getGrade(student.mark);
    document.getElementById("result").innerHTML = 
    "<h3> Student  Information</h3>" + " <P>Name:"
     + studentName + "</p>" + "<p>Age: " + student.age +
     "</p>" + "<p>Mark: " + student.mark + "</p>" + 
     "<p>Grade: " + grade + "</p>";
    

}