// There are two type of notation
// Dot Notation
// Bracket NOtation
// Property are the features of object
var food = {
    foodName: "pounded yam",
    ancestor: "yam",
    color: "yellow",
    price: 1000,
    isExpensive: true,
    isDelicious: true,
    eat(){
        console.log("Have done eaten");
    },
    notEat(){
        console.log("i want to eat");
    }
}
console.log(food); 

// console.log(food["foodName"]); 
// if (food.foodName === "pounded yam") {
//     food.eat()
// }else{
//     food.notEat()   
// }
