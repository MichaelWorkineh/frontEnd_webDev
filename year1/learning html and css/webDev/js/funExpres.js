//function expresstion
setTimeout(function(){console.log('i waited 2 seconds')},2000);
    //syntax: setTimeout(function(){...},delay in miliseconnds)

let counter = 0;
function timeout(){
    setTimeout(function () {
        console.log('hi '+ counter++);
        timeout();
    },2000);
}

timeout();
//ctrl + c

//immidiate functuion invokation
(function(){
   console.log('immediately invoked function expresstion (IIFE)');
})();