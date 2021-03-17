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