var attempt=3;
function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="formget"&&password=="formget#123")
    {
        alert("login .....");
        window.location="success.html";

    }
    else
    attempt--;
    alert("you have left"+attempt+"attempt;");
    if(attempt==0)
    {
        document.getElementById("username").disabled=true;
        document.getElementById("password").disabled=true;
       document.getElementById("submit").disabled=true;
       return false;
    }
}