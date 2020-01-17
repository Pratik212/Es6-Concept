// console.log("weak set in deatils");

// let set = new Set(),
//     key ={};
    

// set.add(key);
// // console.log(set.size);

// key = null;
// // console.log("---"+set.size);

// key = [...set][0];
// // console.log(key);

// let weakSet = new WeakSet(),
//     key1 = {};

// weakSet.add(key1);
// weakSet.delete(key1);
// // console.log(weakSet.has(key1));

// let key11={},
//     key22={};
//     objSet=new WeakSet([key11,key22]);

//     console.log(objSet.has(key11));
//     console.log(objSet.has(key22));

//SET AND MAPS-MAPS INTRODUCTION

let map =new Map();

let key1={},
    key2={};

map.set("name","Pratik");
map.set("year",2019);
map.set("key1",10);
map.set("key2",20);

console.log(map.get("name"));
console.log(map.get("year"));
console.log(map.get("key1"));
console.log(map.get("key2"));

console.log(map.size);
console.log(map.has("name"));

map.clear();
console.log(map.size);


let mymap = new Map([["name","pratik"],["year",2020],["key1","this is a key1"]]);

console.log(mymap.size);
console.log(mymap.get("name"));
console.log(mymap.get("year"));
console.log(mymap.get("key1"));







    