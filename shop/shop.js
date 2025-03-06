let product = [{id: "1", name: "Black Molly", preis: 1.99},
                {id: "2", name: "L333 Königstiger Harnischwels", preis: 34.99},
                {id: "3", name: "Engelswels", preis: 5.99},
                {id: "4", name: "Schmetterlingsbuntbarsch", preis: 4.99},
                {id: "5", name: "Guppy", preis: 0.99}
                ];


document.getElementById("buttonWarenkorb").addEventListener("click", function(){
    if(document.getElementById("warenkorb").style.display === "none"){
        document.getElementById("warenkorb").style.display="block";
    }
    else{
        document.getElementById("warenkorb").style.display="none"; 
    }
    

});


for(let i=0; i<products.length; i++){
    let listenElement = document.createElement("li");
    let listenText = document.createTextNode(products[i].name);
    listenElement.appendChild(listenText);
    document.getElementById("warenkorb").appendChild(listenElement);
   
    console.log(products[i].name + " " + products[i].preis);

}

const products = [
    {
        name: "Black Molly",
        preis: 1.99

},
{
        name: "Buntbarsch",
        preis: 4.99
},
{
        name: "Harnischwels",
        preis: 35.00
},
{
        name: "Engelswels",
        preis: 5.99
},
{
        name: "Guppy",
        preis: 0.99
}

];

for(let product of products){
    console.log(product.name, product.preis)
};