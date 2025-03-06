let cart = [];

function addToCart(productName, price) {
//neues Produkt erstellen
let product = {
    name: productName,
    price: price

}
//produkte zum Warenkorb hinzufügen
cart.push(product)
}



function displayCart(){
    //HTML element für den Warenkorb
    let cartElement = document.getElementById("cart-items");

    cartElement.innerHTML = "";

    cart.forEach(function(product, index){
        let item = document.createElement("div")

        //if (cartElement <= ""){
        //  
        //else (cartElement = cart-items)
        //
        //}
        

        
        let itemHTML = `
            <div>
            <span>${product.name} </span>
            </div>
            <div>
            <span>${(product.price)} </span>
            </div>
        `;
        item.innerHTML = itemHTML;

        cartElement.appendChild(item);
    });
}

//click-variante
// const juiceButton = document.getElementById("add-juice");

// juiceButton.addEventListener("click", function(){
//     addToCart("Traubensaft", 1.50);
// });

//onClick-variante
//Event-listener für die Buttons
document.getElementById("add-juice").onclick = function() {
    addToCart("Traubensaft", 1.50);

};






