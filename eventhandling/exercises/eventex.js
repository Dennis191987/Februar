document.getElementById("buttonex").addEventListener("click",function(){
    console.log("button wurde gepusht");
});

document.getElementById("hoverBox").addEventListener("mouseover",function(){
    console.log("maus über dem div");
});

document.getElementById("myInput").addEventListener("input",function(event){
    console.log(event.target.value);
});

document.addEventListener("keyup", function(event){
    console.log(event.key);
});

window.addEventListener("scroll", function(){
    console.log(window.scrollY);
});

document.getElementById("meinbild").addEventListener("dblclick", function(){
    console.log("haste geklickt wa, doppelt?");
});

