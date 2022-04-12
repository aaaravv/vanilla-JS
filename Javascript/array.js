var cars = ["Buggati","koiensegg","JEEP","BMW","Lamborghini","Mercedez","W Motors"];
function loadcars(){
    document.getElementById("cars").innerHTML=cars;

}

function mycars(){
    var car  = prompt("Your Favorite Car Brand");
    cars[cars.length] = car;
    document.getElementById("cars").innerHTML=cars;
    

}


