console.log("set and maps");
 //let set=Object.create(null);

// set.food=true;

// if(set.food){
//     console.log(set.food);
// }

 let map=Object.create(null);
// map.food="bar";
// map[5]="something";

// if(map.food){
//     console.log(map.food);
//     console.log(map[5]);
    
// }

// let key1={},
//     key2={}


//     map[key1]="rainbow";

//     if(map[key1]){
//         console.log(map[key2]);
//     }


//SET KEYWORDS

let set = new Set();

let key1={},
    key2={}
    

    // set.add(key1);
    // set.add(key2);

    set.add(5);
    set.add("5");  
    set.add(5); 

    // console.log(set.size);

let myset=new Set([1,2,3,4,5,5,5,6,6,6,7,7,7,7]);

myset.delete(5);

console.log("does 5 exist---"+myset.has(5));
console.log(myset.size);

myset.clear();
console.log(myset.size);



