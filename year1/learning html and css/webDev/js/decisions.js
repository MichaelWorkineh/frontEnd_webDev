/*syntax
    if(argument){
        block
    }

*/
l:let count = 3;
if(count==4){
    console.log('count is 4');
}
else if(count<4){
    console.log('count is less than 4');
}
else{
    console.log('count is not 4');
}

//switch()
    /*syntax: switch(variable){
        case value1:
            block1;
            break;
        case value2:
            block2;
            break;
            .
            .
            .
        default:
            blockn;
    }*/
    let b = 'SuperMan';
switch(b.toLowerCase()){
    case 'superman':
        console.log('white');
        console.log('muscle head');
        break;
    case 'batman':
        console.log('white');
        console.log('NERD');
        console.log('EMO BOY');
        break;
    default:
        console.log('NEVER HEARD OF THIS NERD '+b);
}

//(argument)?statementTruth:statementFalse;
let value1 = 9,value2 = 10,value3=(value1<value2)?value1-value2+' true':value1+value2+' false';
console.log(value3);
