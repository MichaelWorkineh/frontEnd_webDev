//learning about clousres
function sayHello(name){
    return function() {
        console.log('\'sup '+ name)
    }
}
let bob = sayHello('bob');
bob();

//dicking around
dede = ['peperment buttler','gunts','jermaine','cake','F.P.'];
for(i=0;i<5;i++){
    dede[i]=sayHello(dede[i]);
}
for(i=0;i<5;i++){
    dede[i]();
}