var counter = (function(){
    let count=0;
    function print(message){
        console.log(message+'----'+count);
    }
    return{
        get:function(){return count;},
        set:function(value){count=value;},
        increment:function(){
            //print('before increment');
            count+=1;
            print('after increment');
        },
        reset:function(){
           // print('before reset');
            count=0;
            print('after reset');
        }
    }
})();
//console.log(counter.get());
counter.set(10);
for(i=1;i<10;i++){
    counter.increment();
}
console.log('\n');
console.log(counter.get());

var x= (function(){
    let user='Bob';
    function descibe(quality){
        console.log(user+' is great at '+quality.toUpperCase())
    }
    return{
        theLegend: function () { return user;},
        praise: function (){
            descibe('public speaking');
        },
        prop:function (value2) {descibe(value2);}

    }
})();
console.log('hey, '+x.theLegend().toUpperCase());
x.prop('math');
x.praise();