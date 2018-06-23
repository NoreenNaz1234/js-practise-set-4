function calCube() {
        let userPut = parseInt(document.querySelector("input").value);
        let numOfCube = userPut * userPut * userPut;
        alert("The cube of " + userPut + " is " + numOfCube);
}