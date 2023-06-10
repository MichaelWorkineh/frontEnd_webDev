let pattern = /xyz/;
//console.log(pattern);
//console.log(typeof pattern);

let value = 'this is xyz a test.'

console.log(pattern.test(value)); //testing ts presence

console.log(value.replace(pattern, 'just')); //replacing 

console.log(value.match(pattern));

var match = value.match(pattern);
console.log(match.index);

