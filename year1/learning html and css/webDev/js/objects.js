//object contains related atributes (properties) of a data.
//array  contain datas
//object literal syntax
let car={
    //property: value,...
    make:'BMW',model:'1243',year: 2010,getPrice: function(){
        let value=5000-this.year;
        return value;
    },
    printDescription: function(){
        console.log(this.make+' '+this.model);
    }
}
//odjectIdentifier.property; to access a property
car.printDescription();
console.log(car.year);
//odjectIdentifier['property']; to access a property
console.log(car['year']);
car.whatever='i am unoriginal';
console.log(car.whatever);

let parkingLone =[
    car1={maker:'toyota',model: '4runner',year: '2008',color: 'black'},
    car2={maker:'toyota',model: '4runner',year: '2008',color: 'white'},
    car3={maker:'nissan',model: 'cruser',year: '2010',color: 'black'},
    car4={maker:'ford',model: 'explorer',year: '1996',color: 'sliver'}
    ];
console.log(parkingLone[3].model);

let branches = [
    {consumer: [{name: 'mark',telephone:['123-1234-123','123-1234-123'],location: 'L.A.'},
               {name: 'bob',telephone:['123-2234-223','123-0204-120'],location: 'sanfransico'},
               {name: 'wade',telephone:['123-1234-123','123-1234-123'],location: 'ohio'},
              ],
    employee: [{name: 'komi',telephone:['123-1234-123','123-1234-123'],location: 'L.A.',workHour: 10,employement:'fulltime'},
                {name: 'todoro',telephone:['123-2234-223','123-0204-120'],location: 'sanfransico',workHour: 8,employement:'fulltime'},
                {name: 'monica',telephone:['123-2334-100','223-0230-786'],location: 'ohio',workHour: 5,employement:'parttime'}                     
              ]},
    {consumer: [{name: 'mark',telephone:['123-1234-123','123-1234-123'],location: 'L.A.'},
              {name: 'bob',telephone:['123-2234-223','123-0204-120'],location: 'sanfransico'},
              {name: 'wade',telephone:['123-1234-123','123-1234-123'],location: 'ohio'},
             ],
    employee: [{name: 'komi2',telephone:['123-1234-123-2','123-1234-123-2'],location: 'L.A.2',workHour: 10,employement:'fulltime2'},
               {name: 'todoro2',telephone:['123-2234-223-2','123-0204-120-2'],location: 'sanfransico2',workHour: 8,employement:'fulltime2'},
               {name: 'monica2',telephone:['123-2334-100-2','223-0230-786-2'],location: 'ohio2',workHour: 5,employement:'parttime2'}                     
             ]}
    
            ]
for(i=0;i<2;i++){
    for(j=0;j<3;j++){
        console.log(branches[i].employee[j].name+', '+branches[i].employee[j].telephone[1]+', '+branches[i].employee[j].location+', empolyment: '+branches[i].employee[j].employement);
    }
}