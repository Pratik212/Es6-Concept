//FUNCTIONS - ITERATORS & GENERATORS

// let color=['red','blue','orange'];

// for (let i = 0; i < color.length; i++) {
//    console.log(color[i]);
// }

// function createIterator(items){
//     var i=0;
//     return{
//         next:function(){
//             var done=(i>=items.length);
//             var value=!done ? items[i++] : undefined;
//             return{
//                 done:done,
//                 value:value
//             };
//         }
//     }

// }


// var iterator = createIterator([1,2,3]);

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// function *mynewiterator(items){
//      for(let i=0;i<items.length;i++){
//          yield items[i];
//      }
// }


// let mycreateiterator=function *mynewiterator(items){
//     for (let i = 0; i < items.length; i++) {
//         yield items[i];
        
//     }
// }


// var iterator = mycreateiterator([1 , 2, 3]);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

var obj={
    createIterator:function *(items){
        for (let i = 0; i < items.length; i++) {
          yield items[i];
            
        }
    }
}
let iterator2=obj.createIterator([1,2,3]);

console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
