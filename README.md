# JavaScript II - Class 2

Topic to cover:
- DOM events
- Callback Functions
- JSON
- Introduction to libraries: jQuery
- Introduction to APIs

## DOM events

Types of Events: Mouse, Keyboard, Touch, Frame/Object, Form.
http://www.w3schools.com/jsref/dom_obj_event.asp
- Mouse
    - Click, MouseOver, MouseOut
- Keyboard
    - KeyPress, KeyDown, KeyUp
- Touch
    - TouchStart, TouchEnd, TouchMove
- Frame
    - Load, Resize, Scroll
- Form
    - Focus, Change, Submit

### Define events as attributes
The use of *onclick*:
```
<div onclick="myFunction()">Hello, click me</div>
```

### Event Propagation
![N|Solid](https://www.kirupa.com/html5/images/dom_capturing_72.png)


## Callback Functions
Read: http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/

### Event Listeners
Read: http://www.w3schools.com/js/js_htmldom_eventlistener.asp
```
element.addEventListener("click", myFunction);

function myFunction() {
    alert ("Hello World!");
}
```

> **In Class Excersice**
> Create an interface with a menu and several buttons that, when clicked, show and hide different elements.

## JSON
Read: http://www.w3schools.com/js/js_json_intro.asp

## Introduction to libraries: jQuery
Read: https://en.wikipedia.org/wiki/List_of_JavaScript_libraries
Read: http://www.w3schools.com/jquery/

> **In Class Excersice**
> Take the previous interface and add a JSON variable containing data. The click events now must access different parts of this data. 
> Extra: Add jQuery to your interface. Try to convert your previously written JavaScript into jQuery.

## Introduction to APIs
Watch: https://www.youtube.com/watch?v=s7wmiS2mSXY
Read: https://www.mobapi.com/apis-introduction-and-context/

![N|Solid](https://www.mobapi.com/wp-content/uploads/2015/09/API-EN.png)

## Homework
Create a random quote generator:
https://www.freecodecamp.com/challenges/build-a-random-quote-machine
