let array = ['bob', 'wade', 'mark', 'ethan', 'suan']
let x, y, z, others;
[x,y,z,...others] = array;
console.log(x+' , '+y+' , '+others);
let model,year;
({model, year} = {
    brand:'BMW',
    year: '2008',
    model: 'mi4780',
    cost: 2300
});

console.log(model);
console.log(year);