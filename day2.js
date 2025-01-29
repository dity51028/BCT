//javascript function
/*
function welcomeUser(name){
    return("hello "+name+" welcome to our page");

}

let nameVal = "XYZ";
console.log(welcomeUser(nameVal));


//function expression : when we use a function without a name then its called function expression

let welcome = function (name){
    return("hello "+name+" welcome to our page");
}

let nameVal = "ABC"
console.log(welcome(nameVal));

//write a function expression for multiplying two digits

//take two digits and return the smallest number using function expression

//arrow function : it's a concise syntax for write a function

let sum = (a,b) =>{
    return a+b;
}

console.log("sum of two digits : " +sum(4,5));

// take an integer and check if it is even number or not using arrow function .
// take an integer array and find the sum of all numbers.

//IIFE: Immediately invoked function expression : immedieately executed after their defination

(function(){
    console.log("it's a IIFE");
    
})();
//print your name using IIFE 

//callback function : when we use a function in a function parameter ,
//                    it is called callback function.

function greet(name,callback){
    console.log("Hii "+name);
    callback();
}
function callMe(){
    console.log("it's a callback function"); 
}
greet("John",callMe);


//higher order function (HOF) : 1.map() 2.filter() 3.reduce()

//map() => it is used for manipulate our array 

let arr = [1,2,3,4,5];
let upadateArr = arr.map(val=>val+2);
console.log("inital array: "+arr);
console.log("after updating the array :"+upadateArr);

//filter() => it will filter out the elements using specific conditions

let filterArr = arr.filter(val=>val%2);
console.log("filtered array"+filterArr);

//create a filter function and find out the numbers 
// greater than 23

//reduce() => it will reduce the whole array in a single value.
in reduce method : we've to define 
accumulator : which will store the previous value
initial value : store the initial


let arr = [1,2,3,4,5];
let reducedArr = arr.reduce(function(acc,i){
    return acc+i;
},0);

console.log("sum of the elements : "+reducedArr);


//Asynchronous javascript : function running parallel with other 
//                 functions then it is called asynchronous function


document.getElementById("demo").innerHTML = "This is from javascript"

setTimeout(()=>{
    document.getElementById("test").innerHTML = "run successfully "
},7000);



//javascript promises 
let promise = new Promise(function (myResolve,myReject){
        myResolve();  // if the promise is resolved
        myReject();   // if the promise is rejected
});

promise.then(
        function(value){
            /*if the code run successfully */
      //  },
      //  function (error){
            /*if the code didn't run successfully*/
       // } 
//)
/*

function displayer(some){
    document.getElementById("promise").innerHTML = some;
}

let promise = new Promise(function(res,rej){
    let x = 0;
    if(x == 0){
        res("okk your code is running successfully")
    }else{
        rej("Opps !! there is an error ")
    }
});

promise.then(
    function(value) {displayer(value);},
    
);
*/

const promise = new Promise(function(res,rej){
    setTimeout(() => {
        res("Page loaded successfully")
        
    }, 3000);
});

promise.then(function(value){
    document.getElementById("call").innerHTML = value;
});

//write a program take a status and check if it is 200 then send successful message with 
//green colored text otherwise print an error message with red colored text
















