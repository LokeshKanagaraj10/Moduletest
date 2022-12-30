function submitfunction(){
    let firstname=document.getElementById('firstname').value;
    let lastname=document.getElementById('lastname').value;
    let email=document.getElementById('email').value;
    let reason=document.getElementById('describe').value;

    console.log(FirstName,LastName,Email,describe);

     if(firstname != null && lastname != null && email != null && describe != null)
    {
        alert("Form Submitted Successfully");
    }else
    {
        alert("All fields are required");
    }
}