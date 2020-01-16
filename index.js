// console.log("Hello Pratik palanpure");

// function multiply(multiplier,...theargs){
//     return theargs.map(function(element){
//         return multiplier * element;
//     });
// }
// var arr=multiply(2,1,2,3);
// console.log(arr);

// function sortrestargs(...theargs){
//     var sortargs=theargs.sort();
//     return sortargs; 
// }
// // function sortarguments(){
// //     var sortargs=arguments.sort();
// //     return sortargs; 
// // }

// console.log(sortrestargs(5,8,9,3,2));
// //console.log(sortarguments(5,8,9,3,2));

// //spread parameters

// let values1=25;
//     values2=30;

//     console.log(Math.max(values1,values2));

// let values=[10,20,30,40,50];    
// console.log(Math.max(...values,60,70));

// let parts=['shoulders','knees'];
// let lyrics=['head',...parts,'and','toes'];

// console.log(lyrics);


// let newarray=[...lyrics];
// newarray.push('new element');

// console.log(lyrics,newarray);

// let concatarray=[...parts,...values];
// console.log(concatarray);

// //name properties

// function doSomething(){

// }
// var doAnotherThing=function(){

// };
// console.log(doSomething.name)
// console.log(doAnotherThing.name);

// var domything=function domything(){

// }
// console.log(domything.name);

// var person={
//     get firstname(){
//         return "pratik";
//     },
//     sayname:function(){
//         console.log(this.name);
//     }
// }

// // console.log(person.sayname.name);

// var descriptor=Object.getOwnPropertyDescriptor(person,"firstname");
// console.log(descriptor.get.name);

// console.log(doAnotherThing.bind().name);

// //meta properties
// // function Person(name){
// //     if(typeof new.target === Person){
// //         this.name = name;
// //     }
// //     else{
// //         throw new Error("you must use new with Person")
// //     }
    
// // }

// var person = new Person("pratik");
// var justanobject = Person.call(person,"pratik");


// console.log(person);
 //console.log(justanobject);

//  function block level

//  "use strict";

//  if(true){
//      console.log(typeof doSomething);
//      function doSomething(){

//      }
//      doSomething();
//  }

//  console.log(typeof doSomething);
// Arrow function

 var reflect=function(value){
     return value;
 }

 var reflect=value=>value;
 //console.log(reflect);

 var sum = function (num1 , num2){
     return num1 + num2;
 }

 var sum = (num1 , num2) =>{
      return num1 + num2;
    };
 //console.log(sum);

 var getname=function(){
     return "pratik";
 }
 //console.log(getname);

 var getname=()=>"pratik";

 var donothing=function(){};
 var donothing=()=>{};
//  console.log(donothing)
;

var gettempitem=function(id){
    return{
        id:id,
        name:temp
    };
    
};

var gettempitem=id=>({id:id,name:"temp"})
//console.log(gettempitem);

// var values=[10,2,5,8,7,9];
//  var result=values.sort(function(a,b){
//      return a-b;
//  })

 

//  var result=values.sort((a,b)=>a-b);
//  console.log(result);

//  function myfunction(){
//      console.log(arguments[0]);
//  }
//  myfunction("pratik palanpure");

//  var compare=(a,b)=>a-b;
//  console.log(compare instanceof Function);

let person=function(name){
    return{
            getname:function(){
            return name;
        }
    };

}("pratik")

//console.log(person.getname());

var pagehandler={
    id:"123456",

    init: function(){
        document.addEventListener("click",function(event){
            this.doSomething(event.type);
        }.bind(this), false);
    },
    doSomething :function(type){
        console.log("handeling "+ type + "for" + this.id);
    }
}