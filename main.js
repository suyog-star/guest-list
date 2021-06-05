var student=[];
function submit() {
    var name=document.getElementById("name1").value;
    student.push(name);
    console.log(student);
    document.getElementById("display_name").innerHTML=student;

}
function sorting() {
    student.sort();
    console.log(student);
    document.getElementById("sorted").innerHTML=student;
    
}