function favoriteAnimal(animal){
    return animal + " is my favorite animal!";
}

function add7(num){
    return num + 7;
}

function multiply(num1, num2){
    return num1 * num2;
}

function capitalize(str){
    let lower = str.toLowerCase();
    let fChar = str.charAt(0).toUpperCase();
    let upper = fChar + lower.slice(1);

    return upper;
}

function lastLetter(str){
    return str.slice(str.length - 1);
}

console.log(favoriteAnimal('Goat'));
console.log(add7(2));
console.log(multiply(2, 2));
console.log(capitalize("HeLLo mY NAME is Tim"));
console.log(lastLetter("abcd"));