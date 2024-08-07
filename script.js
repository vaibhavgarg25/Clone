function validateform()
{
let x=document.getElementById("email").value;
let y=document.getElementById("pass").value;
if(x=="" && y=="")
{
    alert("email and password must be entered")
    return false;
}
else if(y=="")
{
    alert("password must be entered")
    return false;
}
else if(x=="")
{
    alert("email must be entered")
    return false;
}
else
{
    alert("sign in successfull")
    alert("server is down")
    return true;
}
}