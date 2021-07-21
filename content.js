function emailSending(){

    var c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11;

    c1=document.getElementById("d1").value
    c2=document.getElementById("d2").value;
    c3=document.getElementById("d3").value;
    c4=document.getElementById("d4").value;
    c5=document.getElementById("d5").value;
    c6=document.getElementById("d6").value;
    c7=document.getElementById("d7").value;
    c8=document.getElementById("d8").value;
    c9=document.getElementById("d9").value;
    c10=document.getElementById("d10").value;
    c11=document.getElementById("d11").value;
    

    Email.send(
{
Host : "smtp.gmail.com",
Username : "sameer@binmile.com",
Password : "sameer_982003#natcorp",
To : "rishabh@binmile.com",
From : "sameer@binmile.com",
Subject : "BIO-DATA of a Person",
Body : "First name :"+c1+ "\n Last Name :"+c2+ "\n Pan Card No :"+c3+ "\n Marital Status :"+c4+ "\n Flat No :"+c5+ "\n Street Name :"+c6+ "\n Pin Code :"+c7+ "\n Country :"+c8+ "\n Email Address :"+c9+ "\n Mobile Number :"+c10+ "\n Telephone :"+c11,
}
).then(
message => alert("Mail sent Successfully")
);  

}

