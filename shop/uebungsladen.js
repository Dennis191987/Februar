

const button =document.getElementById("Button1"); //Button1 = ID, muss übereinstimmen mit HTML
const paragraph =document.getElementById("Uebungstext");


button.addEventListener("dblclick", function(){ //oneclick=mathematische-funktion; click= html-funktion
    //den inhalt eines DOM-Elements verändern
    paragraph.textContent = "Der Text wurde durch Javascript geändert"


    //paragraph.style.color = "blue"; 
});

button.addEventListener("click", function(){ 
    paragraph.style.color = "red";

    //ein neues Element erstellen
    const newElement = document.createElement("p");
    newElement.textContent = "Dieses Element wurde dynamisch hinzugefügt!";
    
    //Das neue element dem DOM hinzufügen
    document.getElementById("container").appendChild(newElement);

});