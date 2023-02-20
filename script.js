function validate(){

    let Fname = document.getElementById("Fname").value;
    let Email = document.getElementById("Email").value;
    let Message = document.getElementById("Message").value;
    
    if(Fname.length > 0  && Email.length > 0 && Message.length > 0)
    {
        
        document.getElementById("mess").style.color = "green";
        document.getElementById("mess").innerHTML = "Form Submitted";
    }
    else{
        alert("Input Fields Required")
        document.getElementById("mess").style.color = "red";
        document.getElementById("mess").innerHTML = "Input Required";
    }
}