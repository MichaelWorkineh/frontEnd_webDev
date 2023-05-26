/* console.log('Hi!'); */
let name = 'abebe';
let sentence = `            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Sint debitis cum dolorum temporibus neque dicta, illo 

            
            ipsa labore accusantium dignissimos similique repellat, qui, tempore ullam! 
            Voluptate odio voluptates distinctio perferendis.`;

console.log(`Hi, ${name}`);
console.log(sentence);

function reason(){
    return 2;
}

let soln = `the ${(reason()<=1)?'soln is ':'solns are'}`;
console.log(soln);