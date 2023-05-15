//for loop
    /*
        syntax: for(initalisation;condition;increment){
                    block
                }
    */
console.log('for loop');   
for(i=0;i<10;i++){
    console.log(i);
}

console.log('\nfor loop with array');
let a = [1,2,3,4,5,6];
for(i=0;i<a.length;i++){ //'.length' gives the size of the array
    console.log(a[i]);
}

//while loop
    /*syntax: while(condition) {
        block;
    }*/
x=1;
console.log('\nwhile loop');
while(x<10){
    console.log(x++);
    if(x==7) break;//to breakout of a loop or a switch
}

//do while....
q=1,c='hi';
do{
    (q==1)?c+='':c+=', agian'
    console.log((q==5)?c+' lmao XD':((q==4)?c+' lol':c));
    q++;
}
while(q<=5)