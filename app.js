// console.log(15);
// console.log(10);

// let newNumber=10;
// let oldNumber=20;
// totalNumber = newNumber + oldNumber;
// console.log(totalNumber);

// const newNumber=100;
// const oldNumber=212;

// let isNewNumber=true;
// console.log(isNewNumber); 

// let score = 5;
// score + 4;
// console.log(score);

// let myName ="Farabi";
// let wish ="Good Luck";
// console.log(myName);
// console.log(wish);
// console.log(`${myName} ${wish.length}`);
// console.log(`${myName} ${myName.length}`);

// let myName = "   HelloW Farabi!  ";
// let method = myName.trim() .toUpperCase();
// console.log(method);


// Math.random()
// not working
// let die1 = Math.floor(Math.random() * 6) +11;
// let roll= `you rolled a ${die1} and ${die1}. the sum to ${die+die1}`
// console.log(roll);

// 20 <= 10

// 10>=20
// false
// 20>=10
// true

// console.warn("thats warning")

// console.log(" CONDITION");
//     let random=Math.random();
//     if(random<=.2){}


// const num = 10;
 
// if(num <= 10) {
//     if(num >= 5) {
//         console.log("HEY!");
//     }
// } else {
//     if (num < 10) {
//         if(num % 2 === 0){
//             console.log("YOU GOT ME!");
//         }
//     }
// }


// let myNumber = [1, 2,3,4,5,6]
// console.log(myNumber);

// let myNumber = [1, 2,3,4,5,6];
// console.log(myNumber);

// let myNumber = [1, 2,3,4,5,6];
// let position= myNumber.indexOf(3);
// console.log(position);


// let myName="farabi";
// myName

// var myName ="farabi";
// var myAge = "20";
// console.log("My name is",myName,"and my age:",myAge,);

// let a=10, b=20, c=30;
// console.log(a,b,c);

// let word="earth";
// let pi=3.12; 
// console.log(typeof pi);


// let x;
// let y=5;

// x=y;
// y=y+1;
// console.log("x=",x,"y=",y);

// x+=4;
// x-=2;
// x*=3;
// x/=4;

// let n = 7;

// if(n<20){
//     console.log(n);
//     console.log(n,"is smaller than 20");
// }
// else{
//     console.log(n,"is greater than 20");

// }

// let personOne="Farabi";
// let personTwo="Arash";
// let areTheyBrother=true;

// if("Farabi"==personOne){
//     if("Arash"==personTwo){
//         if(areTheyBrother){
//             console.log("Farabi and Arash are brother");
            
//         }else{
//             console.log("They are not brother");
//         }
//     }
// }


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<--------------Section 21-------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   SCOPE     -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<



// function collectEgg (){
//     let totalPart= 10;
    

// }
// console.log(collectEgg);

// let totalPart=12;
// function collectEgg (){
//     let totalPart= 10;
//     return totalPart;
//    }
// console.log(totalPart);
// collectEgg();
// console.log(totalPart);

// function rescueMe(){
//     let msg="rescue me !! I am in the sea!!!!!"
//     msg;
// }




// >>>>>>>>that means msg is scoped in function rescueMe. msg is not available out side of function .

// let bird= 'Koel'

// function birdWatch(){
//     let bird='parrot'
//     console.log(bird);
// }
// console.log(bird);

// birdWatch();
// that is main example of scoped variable to remember-->>>>



//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   BLOCK SCOPE   -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<



// mainly block scope means the functionalities of a variable in a function and in a block such as conditional.if we declare some variable in a condition with let the the variable will be scoped into the condition which we can not access the variable out side of the condition . also not any part of code .but if we use var for declaring variable in condition then we can access the variable outside of our condition .but we should not use the var for declaring variable.


// let radius=0;
// if (radius>0){
//     const PI=3.1416;
//     let msg='hello'
// }

// now the variable msg is scoped and cant be accessed if wee write

// console.log(msg);

// but can be accessed if we write 

// let radius=0;
// if (radius>0){
//     const PI=3.1416;
//     var msg='hello'
// }

// now the variable msg is not scoped and can be accessed if wee write

// console.log(msg);

// that is the fact of block scope 



//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   LEXICAL SCOPE   -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<



// In short this is a formula of nesting function inside of a function .
// so that we can access the inner function through outer function.

// function outer (){
//     let hero ="Harry Potter";

//     function inner(){
//         let seekHelp = `${hero}, help us!`
//         console.log(seekHelp);
//     }
//     inner();
// }


//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------  FUNCTION EXPRESSION  -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    // this is all about how to write a function and what is the structure of writing a function and put the value of function in a variable.here i write a function not named and put the value of function or return of the function in the variable called square.
    
    // const square = function (num){
    //     return num*num;
    // }
    // square(7);
 
    // and 

    // function square(num){
    //     return num*num;
    // }
    // square;

    // these two do the same functionalities but the writing sequence is different.thats instanceof.



//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>-------- HIGHER ORDER FUNCTION  -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<



// function that operate on/with other functions. 
// they can :
// --accept other function as arguments
// --return a function 



//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>-------- RETURN FUNCTION  -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<



// return function ends the function execution and specifies a value to be returned to the function caller

// syntax is -- return [expression];



//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>-------- DEFINING METHOD  -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<



//In w3School -- javascript method are action that can be performed on object.A javascript method is a property containing function definition.

// In MDN its a short hand for a function assigned to the method name.



//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>-------- KEYWORD THIS  -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<



// KEYWORD "this" defined in w3 school by that 

// due to w3 school "this" have different value based on where it is used

// In a method this refers to the owner Object
// Alone, this refers to the global object
// in a function,"this" refers to the global object
// in a function, in strict mode this is underfined
// in a Event,this refers to the element that recieved the event
// methods like call () and apply () can refers to any object

// According to MDN a function this keyword behaves a little differently in Javasrcipt compared to other languages.
// it also has some different between strict mode and non-strict mode.



//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   TRY/CATCH     -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<



// According to MDN try/catch statement marks a block of statements to try and specifies a response should an exception be thrown.

// According to w3School
// The try statement allows to define a block of code to be tested for errors while it is being executed.

// The catch statement allows to define a block of code to be executed if an error occurs in the try block.

// The finally statement lets  execute code after try and catch regardless of the result.

// The try statement lets you test a block of code for errors.

// The catch statement lets you handle the error.

// The throw statement lets you create custom errors.

// The finally statement lets you execute code, after try and catch, regardless of the result.



// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<--------------Sect5ion 22-------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   FOR/EACH     -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<



// According to MDN The forEach() method executes a provided function once for each array element.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// According to w3School
// The forEach() method calls a function once for each element in an array, in order

// Syntax
// arr.forEach(callback(currentValue[, index[, array]]) {
//   // execute something
// }[, thisArg]);



//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   MAP METHOD     -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


// According to MDN 
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map



// According to w3School
// The map() method creates a new array with the results of calling a function for every array element.

// The map() method calls the provided function once for each element in an array, in order.

// Note: map() does not execute the function for array elements without values.

// Note: this method does not change the original array.

// https://www.w3schools.com/jsref/jsref_map.asp



//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   ARROW FUNCTION     -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// According to MDN 
// An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.

// Differences & Limitations:

// Does not have its own bindings to this or super, and should not be used as methods.
// Does not have arguments, or new.target keywords.
// Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
// Can not be used as constructors.
// Can not use yield, within its body.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions


// According to w3School
// Arrow functions were introduced in ES6.

// Arrow functions allow us to write shorter function syntax:

// Before:
// hello = function() {
//   return "Hello World!";
// }

// With Arrow Function:
// hello = () => {
//   return "Hello World!";
// }

// https://www.w3schools.com/js/js_arrow_function.asp



//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   SCOPE     -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// According to MDN 


// According to w3School



//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   IMPLICIT FUNCTION     -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// UDEMY ALL THE FUNCTION DO THE SAME THING


// According to MDN 


// According to w3School



//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   arrow function wrap     -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// According to MDN 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// According to w3School

// https://levelup.gitconnected.com/javascript-best-practices-arrow-functions-aefef2517f4




//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   setTimeout and setInterval  --------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// According to MDN 
// Prerequisites:	Basic computer literacy, a reasonable understanding of JavaScript fundamentals.
// Objective:	To understand asynchronous loops and intervals and what they are useful for.
// These functions are:

// setTimeout()
// Execute a specified block of code once after a specified time has elapsed.
// setInterval()
// Execute a specified block of code repeatedly with a fixed time delay between each call.
// requestAnimationFrame()
// The modern version of setInterval(). Executes a specified block of code before the browser next repaints the display, allowing an animation to be run at a suitable framerate regardless of the environment it is being run in.

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals
// https://javascript.info/settimeout-setinterval


// According to w3School

// JavaScript can be executed in time-intervals.

// This is called timing events.

// https://www.w3schools.com/js/js_timing.asp



//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   The filter Method     -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// According to MDN 
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter


// According to w3School
// The filter() method creates an array filled with all array elements that pass a test (provided as a function).

// Note: filter() does not execute the function for array elements without values.

// Note: filter() does not change the original array.
// https://www.w3schools.com/jsref/jsref_filter.asp



//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   Some & Every Methods     -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// According to MDN 
// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

// According to w3School
// The every() method checks if all elements in an array pass a test (provided as a function).

// The every() method executes the function once for each element present in the array:

// If it finds an array element where the function returns a false value, every() returns false (and does not check the remaining values)
// If no false occur, every() returns true
// Note: every() does not execute the function for array elements without values.

// Note: every() does not change the original array

// https://www.w3schools.com/jsref/jsref_every.asp



//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   The Reduce Method     -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<



// According to MDN 
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce



// According to w3School
// The reduce() method reduces the array to a single value.
// The reduce() method executes a provided function for each value of the array (from left-to-right).
// The return value of the function is stored in an accumulator (result/total).
// Note: reduce() does not execute the function for array elements without values.
// Note: This method does not change the original array.
// https://www.w3schools.com/jsref/jsref_reduce.asp




//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   Arrow Functions & 'this'     -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<



// https://www.codementor.io/@dariogarciamoya/understanding-this-in-javascript-with-arrow-functions-gcpjwfyuc
// According to MDN 


// According to w3School
















//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   SCOPE     -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// According to MDN 


// According to w3School

// <<<<<<<<<<<<<<<<<<<<--------------Sect5ion 23-------------->>>>>>>>>>>>>>>>>>>>>>

// <<<<<<<<<<<<<<<<<<<<--------------Sect5ion 24-------------->>>>>>>>>>>>>>>>>>>>>>

// <<<<<<<<<<<<<<<<<<<<--------------Sect5ion 25-------------->>>>>>>>>>>>>>>>>>>>>>

// <<<<<<<<<<<<<<<<<<<<--------------Sect5ion 26-------------->>>>>>>>>>>>>>>>>>>>>>

// <<<<<<<<<<<<<<<<<<<<--------------Sect5ion 27-------------->>>>>>>>>>>>>>>>>>>>>>

// <<<<<<<<<<<<<<<<<<<<--------------Sect5ion 28-------------->>>>>>>>>>>>>>>>>>>>>>

// <<<<<<<<<<<<<<<<<<<<--------------Sect5ion 29-------------->>>>>>>>>>>>>>>>>>>>>>

// <<<<<<<<<<<<<<<<<<<<--------------Sect5ion 30-------------->>>>>>>>>>>>>>>>>>>>>>

// <<<<<<<<<<<<<<<<<<<<--------------Sect5ion 31-------------->>>>>>>>>>>>>>>>>>>>>>