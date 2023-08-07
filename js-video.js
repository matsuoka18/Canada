function start(){
    size = screen.width;
    console.log("size:" + size);
    if (size < 760) {

        location.href = "video2.html";
        ani();
    } else {
      return;
    }
}

function start2(){
    document.getElementById("div11").style.display="none";
    document.getElementById("div11").style.opacity=0;
    document.getElementById("div1").style.display="flex";
    document.getElementById("div1").style.opacity=1;
}
function start3(){
    document.getElementById("p1").style.fontWeight = "600";
    document.getElementById("p2").style.fontWeight = "500";
    document.getElementById("div11").style.display="none";
    document.getElementById("div11").style.opacity=0;
    document.getElementById("div1").style.display="flex";
    document.getElementById("div1").style.opacity=1;
}
function start4(){
    document.getElementById("p2").style.fontWeight = "600";
    document.getElementById("p1").style.fontWeight = "500";
    document.getElementById("div11").style.display="none";
    document.getElementById("div11").style.opacity=0;
    document.getElementById("div1").style.display="flex";
    document.getElementById("div1").style.opacity=1;
}
function p1(){
    document.getElementById("p1").style.fontWeight = "600";
    document.getElementById("p2").style.fontWeight = "500";
    location.href="canada2.html";
}
function p2(){
    document.getElementById("p2").style.fontWeight = "600";
    document.getElementById("p1").style.fontWeight = "500";
    location.href="japan2.html";
}