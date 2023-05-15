//function declaration
function sayHello(){
    console.log('---------------');
    console.log('\'sup my nigaa!');
    console.log('---------------');
}
sayHello();//to run the funtion

let b = sayHello;//linking the funtion to a varible.
b();

let a =[sayHello,4,5,7];//linking the funtion to a array.
a[0]();

function greeter(name){ //name is a variable that will be usedin the body of the function.
    console.log('--------------------------');
    console.log('\t\'sup '+name+'!');
    console.log('--------------------------');   
}
greeter('bob');// 'bob' is the value given to the variable 'name'
greeter('6');

//understanding return
function calculator(amount){
    let result=amount*0.15;
    return result;//the function's output is result (function reurns a value )
}
console.log(calculator(990));
