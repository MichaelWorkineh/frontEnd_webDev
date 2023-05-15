var counter=(function(){
//private stuff
let count  = 0;
function print(message){
    console.log(message+'---'+count);
}
    //return an object
    return {
        value: count,
        increment: function(){
            count+=1;
            print('after increment: ');
        },
    reset: function(){
        print ('before reset: ');
        count = 0;
        print ('after reset: ');
    }
    }
})();
counter.increment();
counter.increment();
counter.increment();

console.log(counter.value);

counter.reset();
