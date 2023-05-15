//trying to convert dataTypes
let a=7,b='6',c= a + b;//note 'let' is an operator that declares a variable.
console.log('answer: '+c);//instead of treating b as number it is a as a string and treats + as a concatination operator.

b = parseInt(b,10);//converts the string into base 10 number.
                   //syntax: parseInt(string,base);
c= a + b;
console.log('answer: '+c)

//some thing evil
let d=parseInt('bob',10);
console.log(d);//gives NAN means Not A Number

let e = isNaN(d);//checks if a value is a number or not...
console.log(e);//a boolean output