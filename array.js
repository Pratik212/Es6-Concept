// let items = new Array(2);
// // console.log(items.length);
// // console.log(items[0]);
// // console.log(items[1]);

// items = new Array("2");
// // console.log(items.length);
// console.log(items[0]);
// console.log(items[1]);

// items = new Array(1,2);
// console.log(items.length);
// console.log(items[0]);
// console.log(items[1]);

// items = new Array(3,"4");
// console.log(items.length);
// console.log(items[0]);
// console.log(items[1]);

// items = Array.of(3,4);
// console.log(items.length);
// console.log(items[0]);
// console.log(items[1]);


// items = Array.of(2);
// console.log(items.length);
// console.log(items[0]);
// console.log(items[1]);

// items = new Array("2");
// console.log(items.length);
// console.log(items[0]);
// console.log(items[1]);

// function makearray(arraylike){
//     let result = [];
//      for(let i=0,len=arraylike.length;i<len;i++){
//          result.push(arraylike[i]);
//      }
//      return result;
// }

// function doSomething(){
//     let args = Array.from(arguments);
// }

// let numbers = {
//     *[Symbol.iterator](){
//         yield 1;
//         yield 2;
//         yield 3;
//     }
// }
// let numbers2=Array.from(numbers,(value)=>value+5);
// console.log(numbers2);

//ARRAYS (NEW METHODS)
let numbers = [25,30,35,40,45,50];
console.log(numbers.find(n=>n>32));
console.log(numbers.findIndex(n=>n>32));

numbers.fill(2);
console.log(numbers.toString());

numbers=[1,2,3,4];
// numbers.fill(1,2);
// console.log(numbers.toString());

// numbers.fill(0,1,3);//(value,startindex,endindex)
// console.log(numbers.toString());

numbers.copyWithin(2,0);
console.log(numbers.toString());