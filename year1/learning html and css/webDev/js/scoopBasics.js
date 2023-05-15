//can a var out side ofa function be used inside a function?
let a = 'first';
function scopeTest(){
    console.log(a);
}
scopeTest(); //yes we can.

//can we use a var created inside a fuction out side a function?
/*function scopeTest2(){
    let b='second';
}
console.log(b);//no we can not
*/

//var oustide funtion work with in a condtion with in a function 
let b = 'first';
function scopeTest3(){
    if(b!=''){
        console.log(a);
    }
}
scopeTest3();// it works

