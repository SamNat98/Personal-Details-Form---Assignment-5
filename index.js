var a,b,c,d;
function page1(){

    a = document.getElementById("f1").value;
    b = document.getElementById("f2").value;
    c = document.getElementById("f3").value;
    d = document.getElementById("f4").value;

    localStorage.setItem("fn",a);
    localStorage.setItem("ln",b);
    localStorage.setItem("pn",c);
    localStorage.setItem("ms",d);

   

}

function final(){

    var f1 = localStorage.getItem("fn");
    var f2 = localStorage.getItem("ln");
    var f3 = localStorage.getItem("pn");
    var f4 = localStorage.getItem("ms");

    document.getElementById("d1").value = f1;
    document.getElementById("d2").value = f2;
    document.getElementById("d3").value = f3;
    document.getElementById("d4").value = f4;
}