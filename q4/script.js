let appleCost = 10;
let bananaCost = 15;
let mangoCost = 8;
let noOfApp;
let noOfban;
let noOfMang;
let totalCost;








function calCost() {
 noOfApp = parseInt(document.querySelector("#apl").value);
 noOfban = parseInt(document.querySelector("#ban").value);
 noOfMang = parseInt(document.querySelector("#mang").value);
 totalCost = noOfApp * appleCost + noOfban * appleCost + noOfMang * mangoCost;
 alert("The total cost of all fruits are " + totalCost);

}