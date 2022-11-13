// app.js

// DataTypes
/*
always-const, selectively-let, never_use-var
 */
const myName = "Hooyonng";
var a = 10;
var a = 5;
let b = 2; // error let b = 3; work b = 3;
let bool = true;
const nullValue = null;
let something; // undefined

console.log("Hello "+ myName + "!");
console.log(a+b, a*b, a/b);
console.log(bool, nullValue, something);

// List, Array
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const listTest = [1,2,"hello",false,null,true,,"nico"];
console.log(daysOfWeek[4]);
listTest.push("test");
console.log(listTest);

// Objects
const player = {
    name: "nico",
    point: 10,
    fat: true,
    sayHello: function(newname){
        console.log("hello "+ newname);
    }
};
player.fat = false; // const 이지만 object 내부 핸들링은 okay 
player["foo"] = "potato";
player.bar = "tomato"
console.log(player);
console.log(player.name, player["fat"]);

// Function
function func(a,b) {
    console.log(a+b);
}
func(1,2);
player.sayHello()