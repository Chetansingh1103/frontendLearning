// alert is used to show message and it waits until user presses on it

alert("hello world!");

// prompting(msg, [default])
//it has OK/Cancel button

var age = prompt("What's your age")

console.log(age)
console.log(typeof(age))

if(age >= 18){
    console.log("user is eligible")
} else {
    console.log("user is not eligible")
}

// confirm: returns a true or false
var isClassTommorow = confirm("is there any class tommorow?")
console.log(isClassTommorow)