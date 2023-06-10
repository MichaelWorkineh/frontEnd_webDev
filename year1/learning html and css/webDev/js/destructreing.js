let array = ['bob', 'wade', 'mark', 'ethan', 'suan']
let x, y, z, others;
[x,y,z,...others] = array;
console.log(x+' , '+y+' , '+others);
let brand,model,year,modelContainer=[],yearContainer=[],brandContainer = [],simplerCarList={models:[],year:[],brand:[]},betterList=[],carDetail={brand:"",model:"",year:""};
let car = [{
    brand:'BMW',
    year: '2008',
    model: 'mi4780',
    cost: 2300
},{
    brand:'toyota',
    year: '2010',
    model: 'cs4780',
    cost: 1300
}];
for(i=0;i<2;i++){
    ({brand,model, year} = car[i]);
    simplerCarList.models[i]=model;
    carDetail.brand=brand;
    carDetail.model=model;
    carDetail.year=year;
    betterList[i] = carDetail;
    simplerCarList.year[i]=year;
    simplerCarList.brand[i]=brand;
}
console.log(simplerCarList);
console.log('better list'+'\n'+betterList)