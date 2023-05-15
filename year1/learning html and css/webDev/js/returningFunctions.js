//do not do these>>
/*
    var myVariable = 'I am in the global scope';
    var myFunction=function () {
        console.log('I am in the global scope, boyyy!');
    }
*/
function one(){
    return 'one';
}
let value=one;
console.log(typeof value);//which means functionis also a data type.
/* we know about the following data types in js:
            number 
            string
            boolean
            undefined
            function
*/    
console.log(value());//we can call the function with the var associated with it meaning... variableIdentifier();

//a fun can return a fun
function two(){
    return function(){
        console.log('two');
    }
}
let value2=two();
value2();

function three(){
    return function(){
        return 'three';
    }
}
console.log(three()());