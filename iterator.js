console.log("iterators and generators");

//ITERATORS & GENERATORS(FUNCTION)

let color = ['red','green','blue'];

for(let i=0;i<color.length;i++){
    console.log(color[i]);
}

function createIterator(items){
    var i = 0;

    return{
        next : function(){
            var done = (i>=items.length);
            var value = !done ? items[i++] :undefined;
            return{
                done:done,
                value:value
            };
        }
    }
}

var iterator = createIterator([1,2,3]);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

let myCreatedIterator=function *mynewIterator(items){
    for(let i=0;i<items.length;i++){
        yield items[i];
    }
    // yield 1;
    // yield 2;
    // yield 3;
}

var iterator = myCreatedIterator([1,2,3]);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

var obj = {
    createIterator:function *(items){
        for(let i=0;i<items.length;i++){
            yield items[i];
        }
    }
}

let iterator2 = obj.createIterator([1,2,3]);
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());

