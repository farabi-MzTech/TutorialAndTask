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










//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--------   SCOPE     -----------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// According to MDN 


// According to w3School



// <<<<<<<<<<<<<<<<<<<<--------------Sect5ion 25-------------->>>>>>>>>>>>>>>>>>>>>>

// <<<<<<<<<<<<<<<<<<<<--------------Sect5ion 26-------------->>>>>>>>>>>>>>>>>>>>>>

// <<<<<<<<<<<<<<<<<<<<--------------Sect5ion 27-------------->>>>>>>>>>>>>>>>>>>>>>

// <<<<<<<<<<<<<<<<<<<<--------------Sect5ion 28-------------->>>>>>>>>>>>>>>>>>>>>>

// <<<<<<<<<<<<<<<<<<<<--------------Sect5ion 29-------------->>>>>>>>>>>>>>>>>>>>>>

// <<<<<<<<<<<<<<<<<<<<--------------Sect5ion 30-------------->>>>>>>>>>>>>>>>>>>>>>

// <<<<<<<<<<<<<<<<<<<<--------------Sect5ion 31-------------->>>>>>>>>>>>>>>>>>>>>>

// <<<<<<<<<<<<<<<<<<<<--------------Sect5ion 32-------------->>>>>>>>>>>>>>>>>>>>>>

// <<<<<<<<<<<<<<<<<<<<--------------Sect5ion 33-------------->>>>>>>>>>>>>>>>>>>>>>

// <<<<<<<<<<<<<<<<<<<<--------------Sect5ion 33-------------->>>>>>>>>>>>>>>>>>>>>>