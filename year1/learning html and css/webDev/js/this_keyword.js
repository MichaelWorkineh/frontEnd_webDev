
//this represents the way the function is called.(how you call a function)
/* function first(){
    return thi
}
console.log (first()===glodal) 
alt+shift+A*/
/* 
function first(){
    return this;
}
console.log (first() === global);

function second(){
    'use strict';
    return this;
}
console.log (second() === undefined); */

let myObject = {value:'my object'};
global.value = 'global object';

function three(name){
    return this.value+' '+name;
}
console.log(three());
console.log(three.call(myObject,'jarves'));
console.log(three.apply(myObject,['jarves','jame','george']));

function four(){
    console.log(this.firstName+' '+this.lastName);
}

let stuff1 = {
    firstName: 'Bob',
    lastName: 'Mason',
    print: four
}

let stuff2 = {
    firstName: 'Among',
    lastName: 'Us...',
    print: four
}

stuff1.print();
stuff2.print();
