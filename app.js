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




// <<<<<<<<<<<<<<<<<<<<--------------Sect5ion 23-------------->>>>>>>>>>>>>>>>>>>>>>




//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   Default Parameters     -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// According to MDN 
// Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters


// According to w3School
// If a function in JavaScript is called with missing arguments (less than declared), the missing values are set to undefined.
// https://www.w3schools.com/howto/howto_js_default_parameters.asp




//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   Spread in Function Calls     -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// According to MDN 
// Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

// According to w3School




//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   Spread with Array Literals     -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

// According to MDN 


// According to w3School




//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   Rest Parameters     -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// According to MDN 
// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

// Rest parameter is an improved way to handle function parameter, allowing us to more easily handle various input as parameters in a function. The rest parameter syntax allows us to represent an indefinite number of arguments as an array. With the help of a rest parameter a function can be called with any number of arguments, no matter how it was defined. Rest parameter is added in ES2015 or ES6 which improved the ability to handle parameter.

// Note: In order to run the code in this article make use of the console provided by the browser or use an online tool like repl.it.

// Syntax:

// function functionname[...parameters]//... is the rest parameter
// {
// statement;
// }

// https://www.geeksforgeeks.org/javascript-rest-operator/



// According to w3School




//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   Destructuring Arrays     -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   Destructuring Object     -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   Destructuring Parameters -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<



// According to MDN 
// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

// https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/

// According to w3School




// <<<<<<<<<<<<<<<<<<<<--------------Sect5ion 24-------------->>>>>>>>>>>>>>>>>>>>>>



//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   The Document Object Model (DOM)  -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// According to MDN 
// The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web. In this guide, we'll briefly introduce the DOM. We'll look at how the DOM represents an HTML or XML document in memory and how you use APIs to create web content and applications.
// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction


// According to w3School
// When a web page is loaded, the browser creates a Document Object Model of the page.

// The HTML DOM model is constructed as a tree of Objects:
// https://www.w3schools.com/js/js_htmldom.asp




//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   The Document Object   -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// According to MDN 
// The Document Object Model (DOM) connects web pages to scripts or programming languages by representing the structure of a document—such as the HTML representing a web page—in memory. Usually it refers to JavaScript, even though modeling HTML, SVG, or XML documents as objects are not part of the core JavaScript language.

// The DOM represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. DOM methods allow programmatic access to the tree. With them, you can change the document's structure, style, or content.

// Nodes can also have event handlers attached to them. Once an event is triggered, the event handlers get executed.
// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model



// According to w3School

// When an HTML document is loaded into a web browser, it becomes a document object.

// The document object is the root node of the HTML document.
// https://www.w3schools.com/jsref/dom_obj_document.asp




//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   getElementById     -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// According to MDN 
// The Document method getElementById() returns an Element object representing the element whose id property matches the specified string. Since element IDs are required to be unique if specified, they're a useful way to get access to a specific element quickly.

// If you need to get access to an element which doesn't have an ID, you can use querySelector() to find the element using any selector.

// Syntax
// var element = document.getElementById(id);

// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById

// According to w3School

// The getElementById() method returns the element that has the ID attribute with the specified value.

// This method is one of the most common methods in the HTML DOM, and is used almost every time you want to manipulate, or get info from, an element on your document.

// Returns null if no elements with the specified ID exists.

// An ID should be unique within a page. However, if more than one element with the specified ID exists, the getElementById() method returns the first element in the source code.

// https://www.w3schools.com/jsref/met_document_getelementbyid.asp






//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   getElementsByTagName &className -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// According to MDN 
// The getElementsByClassName method of Document interface returns an array-like object of all child elements which have all of the given class name(s). When called on the document object, the complete document is searched, including the root node. You may also call getElementsByClassName() on any element; it will return only elements which are descendants of the specified root element with the given class name(s).
// Syntax
// var elements = document.getElementsByClassName(names); // or:
// var elements = rootElement.getElementsByClassName(names);

// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName



// The Element.getElementsByTagName() method returns a live HTMLCollection of elements with the given tag name. All descendants of the specified element are searched, but not the element itself. The returned list is live, which means it updates itself with the DOM tree automatically. Therefore, there is no need to call Element.getElementsByTagName() with the same element and arguments repeatedly if the DOM changes in between calls.

// When called on an HTML element in an HTML document, getElementsByTagName lower-cases the argument before searching for it. This is undesirable when trying to match camel-cased SVG elements (such as <linearGradient>) in an HTML document. Instead, use Element.getElementsByTagNameNS(), which preserves the capitalization of the tag name.

// Element.getElementsByTagName is similar to Document.getElementsByTagName(), except that it only searches for elements that are descendants of the specified element.

// Syntax
// elements = element.getElementsByTagName(tagName)
// https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName
// According to w3School



//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   querySelector & querySelectorAll ---------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// According to MDN 

// The Document method querySelectorAll() returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors.

// Note: This method is implemented based on the ParentNode mixin's querySelectorAll() method.

// Syntax
// elementList = parentNode.querySelectorAll(selectors);

// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll

// The Element method querySelectorAll() returns a static (not live) NodeList representing a list of elements matching the specified group of selectors which are descendants of the element on which the method was called.

// Note: This method is implemented based on the ParentNode mixin's querySelectorAll() method.

// Syntax
// elementList = parentNode.querySelectorAll(selectors);

// https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll


// According to w3School

// The querySelectorAll() method returns all elements in the document that matches a specified CSS selector(s), as a static NodeList object.

// The NodeList object represents a collection of nodes. The nodes can be accessed by index numbers. The index starts at 0.
// https://www.w3schools.com/jsref/met_document_queryselectorall.asp


//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------  innerHTML, textContent, & innerText------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// According to MDN 
The textContent property of the Node interface represents the text content of the node and its descendants.

Note: textContent and HTMLElement.innerText are easily confused, but the two properties are different in important ways.

Syntax
let text = someNode.textContent
someOtherNode.textContent = string

https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent

// According to w3School



//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------    javascript attributes     -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// According to MDN 
The Element.attributes property returns a live collection of all attribute nodes registered to the specified node. It is a NamedNodeMap, not an Array, so it has no Array methods and the Attr nodes' indexes may differ among browsers. To be more specific, attributes is a key/value pair of strings that represents any information regarding that attribute.

Syntax
var attr = element.attributes;
https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes

// According to w3School


//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   Changing Styles     -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// According to MDN 
The style read-only property returns the inline style of an element in the form of a CSSStyleDeclaration object that contains a list of all styles properties for that element with values assigned for the attributes that are defined in the element's inline style attribute.

See the CSS Properties Reference for a list of the CSS properties accessible via style. The style property has the same (and highest) priority in the CSS cascade as an inline style declaration set via the style attribute.

Syntax
style = CSSStyleDeclaration.style

https://developer.mozilla.org/en-US/docs/Web/API/ElementCSSInlineStyle/style

// According to w3School



//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   mdn classlist javascript     -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// According to MDN 
The Element.classList is a read-only property that returns a live DOMTokenList collection of the class attributes of the element. This can then be used to manipulate the class list.

Using classList is a convenient alternative to accessing an element's list of classes as a space-delimited string via element.className.

Syntax
const elementClasses = elementNodeReference.classList;

https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

// According to w3School


//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   Traversing Parent/Child/Sibling-----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// According to MDN 
Node.nextSibling
The Node.nextSibling read-only property returns the node immediately following the specified one in their parent's childNodes, or returns null if the specified node is the last child in the parent element.

Syntax
nextNode = node.nextSibling
https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling

ParentNode.children
The ParentNode property children is a read-only property that returns a live HTMLCollection which contains all of the child elements of the node upon which it was called.

Syntax
let children = node.children;

https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/children

// According to w3School


//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   Append & AppendChild     -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// According to MDN 
ParentNode.append()
The ParentNode.append() method inserts a set of Node objects or DOMString objects after the last child of the ParentNode. DOMString objects are inserted as equivalent Text nodes.

Differences from Node.appendChild():

ParentNode.append() allows you to also append DOMString objects, whereas Node.appendChild() only accepts Node objects.
ParentNode.append() has no return value, whereas Node.appendChild() returns the appended Node object.
ParentNode.append() can append several nodes and strings, whereas Node.appendChild() can only append one node.
Syntax
// [Throws, Unscopable]
ParentNode.append(...nodesOrDOMStrings) // returns undefined

https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append

Node.appendChild()
The Node.appendChild() method adds a node to the end of the list of children of a specified parent node. If the given child is a reference to an existing node in the document, appendChild() moves it from its current position to the new position (there is no requirement to remove the node from its parent node before appending it to some other node).

This means that a node can't be in two points of the document simultaneously. So if the node already has a parent, the node is first removed, then appended at the new position. The Node.cloneNode() method can be used to make a copy of the node before appending it under the new parent. Note that the copies made with cloneNode will not be automatically kept in sync.

If the given child is a DocumentFragment, the entire contents of the DocumentFragment are moved into the child list of the specified parent node.

Newer API available!
The ParentNode.append() method supports multiple arguments and appending strings.

Syntax
element.appendChild(aChild)
https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild


// According to w3School


//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   removeChild & remove     -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// According to MDN 

Node.removeChild()
The Node.removeChild() method removes a child node from the DOM and returns the removed node.

Syntax
var oldChild = node.removeChild(child);
Or just:

node.removeChild(child);
child is the child node to be removed from the DOM.
node is the parent node of child.
oldChild holds a reference to the removed child node, i.e., oldChild === child.
https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild

// According to w3School



//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   Pokemon Sprites Demo     -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// According to MDN 
Implementing image sprites in CSS
Image sprites are used in numerous web apps where multiple images are used. Rather than include each image as a separate image file, it is much more memory- and bandwidth-friendly to send them as a single image; using background position as a way to distinguish between individual images in the same image file, so the number of HTTP requests is reduced.

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Images/Implementing_image_sprites_in_CSS

// According to w3School



// <<<<<<<<<<<<<<<<<<<<--------------Sect5ion 25-------------->>>>>>>>>>>>>>>>>>>>>>



//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   Introduction to events     -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   Inline Events     -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


// According to MDN 
Events are actions or occurrences that happen in the system you are programming, which the system tells you about so you can respond to them in some way if desired. For example, if the user selects a button on a webpage, you might want to respond to that action by displaying an information box. In this article, we discuss some important concepts surrounding events, and look at how they work in browsers. This won't be an exhaustive study; just what you need to know at this stage.

Prerequisites:	Basic computer literacy, a basic understanding of HTML and CSS, JavaScript first steps.
Objective:	To understand the fundamental theory of events, how they work in browsers, and how events may differ in different programming environments.

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Event

// According to w3School



//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   The Onclick Property     -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// According to MDN 
GlobalEventHandlers.onclick
The onclick property of the GlobalEventHandlers mixin is the EventHandler for processing click events on a given element.

The click event is raised when the user clicks on an element. It fires after the mousedown and mouseup events, in that order.

Note: When using the click event to trigger an action, also consider adding this same action to the keydown event, to allow the use of that same action by people who don't use a mouse or a touch screen.
Syntax
target.onclick = functionRef;

https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick

// According to w3School



//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   addEventListener     -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// According to MDN 
EventTarget.addEventListener()
The EventTarget method addEventListener() sets up a function that will be called whenever the specified event is delivered to the target. Common targets are Element, Document, and Window, but the target may be any object that supports events (such as XMLHttpRequest).

addEventListener() works by adding a function or an object that implements EventListener to the list of event listeners for the specified event type on the EventTarget on which it's called.

Syntax
target.addEventListener(type, listener [, options]);
target.addEventListener(type, listener [, useCapture]);
target.addEventListener(type, listener [, useCapture, wantsUntrusted 
    This API has not been standardized.
    
    
]); // Gecko/Mozilla only

https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener




// According to w3School



//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   Events & The Keyword This     -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// According to MDN 
The Event interface represents an event which takes place in the DOM.

An event can be triggered by the user action e.g. clicking the mouse button or tapping keyboard, or generated by APIs to represent the progress of an asynchronous task. It can also be triggered programmatically, such as by calling the HTMLElement.click() method of an element, or by defining the event, then sending it to a specified target using EventTarget.dispatchEvent().

https://developer.mozilla.org/en-US/docs/Web/API/Event

// According to w3School



//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------    Keyboard Events & Event Objects--------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// According to MDN 

// KeyboardEvent objects describe a user interaction with the keyboard; each event describes a single interaction between the user and a key (or combination of a key with modifier keys) on the keyboard. The event type (keydown, keypress, or keyup) identifies what kind of keyboard activity occurred.

// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent


// According to w3School



//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   Form Events & PreventDefault-----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// // According to MDN 

// Event.preventDefault()
// The Event interface's preventDefault() method tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be. The event continues to propagate as usual, unless one of its event listeners calls stopPropagation() or stopImmediatePropagation(), either of which terminates propagation at once.

// As noted below, calling preventDefault() for a non-cancelable event, such as one dispatched via EventTarget.dispatchEvent(), without specifying cancelable: true has no effect.

// Syntax
// event.preventDefault();

// https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault


// According to w3School




//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   SCOPE     -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// According to MDN 
// The change event is fired for <input>, <select>, and <textarea> elements when an alteration to the element's value is committed by the user. Unlike the input event, the change event is not necessarily fired for each alteration to an element's value.

// Bubbles	Yes
// Cancelable	No
// Interface	Event
// Event handler property	onchange
// Depending on the kind of element being changed and the way the user interacts with the element, the change event fires at a different moment:

// When the element is :checked (by clicking or using the keyboard) for <input type="radio"> and <input type="checkbox">;
// When the user commits the change explicitly (e.g., by selecting a value from a <select>'s dropdown with a mouse click, by selecting a date from a date picker for <input type="date">, by selecting a file in the file picker for <input type="file">, etc.);
// When the element loses focus after its value was changed, but not committed (e.g., after editing the value of <textarea> or <input type="text">).
// The HTML specification lists the <input> types that should fire the change event.


// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event


// HTMLElement: input event
// The input event fires when the value of an <input>, <select>, or <textarea> element has been changed. 

// Bubbles	Yes
// Cancelable	No
// Interface	InputEvent
// Event handler property	GlobalEventHandlers.oninput
// The event also applies to elements with contenteditable enabled, and to any element when designMode is turned on. In the case of contenteditable and designMode, the event target is the editing host. If these properties apply to multiple elements, the editing host is the nearest ancestor element whose parent isn't editable.

// For <input> elements with type=checkbox or type=radio, the input event should fire whenever a user toggles the control, per the HTML5 specification. However, historically this has not always been the case. Check compatibility, or use the change event instead for elements of these types.

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event



// According to w3School




//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   Event.bubbles     -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// According to MDN 

// Event.bubbles
// The bubbles read-only property of the Event interface indicates whether the event bubbles up through the DOM or not.

// Note: See Event bubbling and capture for more information on bubbling.

// Syntax
// var doesItBubble = event.bubbles;

// According to w3School




//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   SCOPE     -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// According to MDN 
// Event delegation
// Capturing and bubbling allow us to implement one of most powerful event handling patterns called event delegation.

// The idea is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common ancestor.

// In the handler we get event.target to see where the event actually happened and handle it.
// https://javascript.info/event-delegation
// According to w3School



// <<<<<<<<<<<<<<<<<<<<--------------Sect5ion 27-------------->>>>>>>>>>>>>>>>>>>>>>


//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   Call stack     -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// According to MDN 
Call stack
A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function, etc.

When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.
Any functions that are called by that function are added to the call stack further up, and run where their calls are reached.
When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.
If the stack takes up more space than it had assigned to it, it results in a "stack overflow" error.

https://developer.mozilla.org/en-US/docs/Glossary/Call_stack

// According to w3School



//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   WebAPIs & Single Threaded     -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// According to MDN 

// Web APIs

// When writing code for the Web, there are a large number of Web APIs available. Below is a list of all the APIs and interfaces (object types) that you may be able to use while developing your Web app or site.

// Web APIs are typically used with JavaScript, although this doesn't always have to be the case.
// https://developer.mozilla.org/en-US/docs/Web/API

// Thread
// Thread in computer science is the execution of running multiple tasks or programs at the same time. Each unit capable of executing code is called a thread.
// https://developer.mozilla.org/en-US/docs/Glossary/Thread

// According to w3School


//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   Callback Hell :(     -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// According to MDN 

Introducing asynchronous JavaScript
Previous
Overview: Asynchronous
Next
In this article we briefly recap the problems associated with synchronous JavaScript, and take a first look at some of the different asynchronous techniques you'll encounter, showing how they can help us solve such problems.

Prerequisites:	Basic computer literacy, a reasonable understanding of JavaScript fundamentals.
Objective:	To gain familiarity with what asynchronous JavaScript is, how it differs from synchronous JavaScript, and what use cases it has.
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing

// According to w3School


//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   Promises     -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// According to MDN 

Promise
The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

// According to w3School



//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   The Async Keyword     -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// According to MDN 
async function
An async function is a function declared with the async keyword, and the await keyword is permitted within them. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.

async function name([param[, param[, ...param]]]) {
    statements
 }
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function


// According to w3School




//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   The Await Keyword      -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// According to MDN 

await
The await operator is used to wait for a Promise. It can only be used inside an async function within regular JavaScript code; however it can be used on its own with JavaScript modules.

Syntax
[rv] = await expression;

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await

// According to w3School


//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   Handling Errors In Async Functions----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// According to MDN 
https://itnext.io/error-handling-with-async-await-in-js-26c3f20bc06a
Async/await
There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”. It’s surprisingly easy to understand and use.

https://javascript.info/async-await

// According to w3School



// <<<<<<<<<<<<<<<<<<<<--------------Sect5ion 28-------------->>>>>>>>>>>>>>>>>>>>>>

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------  AJAX ----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// According to MDN 

Ajax
Getting Started
Asynchronous JavaScript and XML, while not a technology in itself, is a term coined in 2005 by Jesse James Garrett, that describes a "new" approach to using a number of existing technologies together, including HTML or XHTML, CSS, JavaScript, DOM, XML, XSLT, and most importantly the XMLHttpRequest object.

https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX



// According to w3School

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   API----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// According to MDN 

Introduction to web APIs
Overview: Client-side web APIs
Next
First up, we'll start by looking at APIs from a high level — what are they, how do they work, how to use them in your code, and how are they structured? We'll also take a look at what the different main classes of APIs are, and what kind of uses they have.

Prerequisites:	Basic computer literacy, a basic understanding of HTML and CSS, JavaScript basics (see first steps, building blocks, JavaScript objects).
Objective:	To gain familiarity with APIs, what they can do, and how you can use them in your code.

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction

// According to w3School



//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   JSON----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// According to MDN 

JSON
The JSON object contains methods for parsing JavaScript Object Notation (JSON) and converting values to JSON. It can't be called or constructed, and aside from its two method properties, it has no interesting functionality of its own.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON


// According to w3School



//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   Handling Errors In Async Functions----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<



// https://www.postman.com/
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Sending_and_Receiving_Binary_Data
// https://developer.mozilla.org/en-US/docs/Web/API/Beacon_API

// According to MDN 


// According to w3School


//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------  Query Strings & Headers------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// According to MDN 


// According to w3School





//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------  Query Strings & Headers------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// According to MDN 


// According to w3School
//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   SCOPE     -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// According to MDN 


// According to w3School





// <<<<<<<<<<<<<<<<<<<<--------------Sect5ion 26-------------->>>>>>>>>>>>>>>>>>>>>>




// <<<<<<<<<<<<<<<<<<<<--------------Sect5ion 29-------------->>>>>>>>>>>>>>>>>>>>>>

// <<<<<<<<<<<<<<<<<<<<--------------Sect5ion 30-------------->>>>>>>>>>>>>>>>>>>>>>

// <<<<<<<<<<<<<<<<<<<<--------------Sect5ion 31-------------->>>>>>>>>>>>>>>>>>>>>>

// <<<<<<<<<<<<<<<<<<<<--------------Sect5ion 32-------------->>>>>>>>>>>>>>>>>>>>>>

// <<<<<<<<<<<<<<<<<<<<--------------Sect5ion 33-------------->>>>>>>>>>>>>>>>>>>>>>

// <<<<<<<<<<<<<<<<<<<<--------------Sect5ion 33-------------->>>>>>>>>>>>>>>>>>>>>>