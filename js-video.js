function p1(){
    document.getElementById("p1").style.fontWeight = "600";
    document.getElementById("p2").style.fontWeight = "500";
    document.getElementById("ca").style.display = "block";
    document.getElementById("ca").style.opacity = 1;
    document.getElementById("jp").style.display = "none";
    document.getElementById("jp").style.opacity = 0;
}
function p2(){
    document.getElementById("p2").style.fontWeight = "600";
    document.getElementById("p1").style.fontWeight = "500";
    document.getElementById("jp").style.display = "block";
    document.getElementById("jp").style.opacity = 1;
    document.getElementById("ca").style.display = "none";
    document.getElementById("ca").style.opacity = 0;
}