function read(){
    let diceSet = sessionStorage.qty1; 
    let diceMat = sessionStorage.qty2; 
    let essentialsKit = sessionStorage.qty3; 
    let diceBag = sessionStorage.qty4;
    
    //alert("Order details extracted from web storage and displayed in table");
    // get quantity for each Products

    document.getElementById("qty1").textContent = diceSet;
    document.getElementById("qty2").textContent = diceMat;
    document.getElementById("qty3").textContent = essentialsKit;
    document.getElementById("qty4").textContent = diceBag;
    
    // get cost of all Products
    document.getElementById("total1").textContent = diceSet * 8.99;
    document.getElementById("total2").textContent = diceMat * 11.99;
    document.getElementById("total3").textContent = essentialsKit * 19.99;
    document.getElementById("total4").textContent = diceBag * 11.99;

    /*diceSet = parseInt(diceSet);
    diceMat = parseInt(diceMat);
    essentialsKit = parseInt(essentialsKit);
    diceBag = parseInt(diceBag);*/

    // get total cost
    document.getElementById("total").textContent = ((diceSet * 8.99) + (diceMat * 11.99) + (essentialsKit * 19.99) + (diceBag * 11.99));
}	
read();