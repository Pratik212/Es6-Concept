console.log("forech loop in sets");
 
// let set=new Set([1,2,3]);

// set.forEach(function(value,key,ownerSet){
//     console.log(key + " - " + value);
//     console.log(ownerSet === set);
    
// });

// let processor ={
//     output(value){
//         console.log(value);
//     },
//     process(dataSet){
//         dataSet.forEach((value)=>this.output(value))
//     }
    // process(dataSet){
    //     dataSet.forEach(function(value){
    //         this.output(value);
    //     },this);

    // }
// }
//processor.process(set);

// let myset = new Set([1,2,3,4,5,5,6,6,7,7,7,7]);
// let myarray = [...myset];

// console.log(myarray);

//WEAK SET

// let set = new Set(),
//     key = {};

//     set.add(key);

//     console.log(set.size);

//     key = null;

//     console.log("---"+set.size);
//     console.log(key);

//     key = [...set][0];
//     console.log(key);

//     let weakset = new WeakSet(),
//         key1 = {};

//     weakset.add(key1);

//     console.log(weakset.has(key1));
//     weakset.delete(key1);

//     console.log(weakset.has(key1));
    
    // let key11 ={},
    //     key22 ={},
    //     objset = new WeakSet([key11,key22]);

    //     console.log(objset.has(key11));
    //     console.log(objset.has(key22));


    //MAP INTRODUCTION
     
    // let map = new Map();

    // let key1={},
    //     key2={};

    // map.set("name","pratik");
    // map.set("year",2020);

    // map.set(key1,10);
    // map.set(key2,20);

    // console.log(map.get("name"));
    // console.log(map.get("year"));

    // console.log(map.get(key1));
    // console.log(map.get(key2));

    // console.log(map.size);
    // console.log(map.has("name"));

    // map.delete(key2);
    // console.log(map.size);

    // console.log(map.get(key2));

    // map.clear();
    // console.log(map.size);
    

    // let mymap = new Map([["name", "pratik"],["year",2020],["age","21"]]);

    // console.log(mymap.size);
    // console.log(mymap.get("name"));
    // console.log(mymap.get("year"));
    // console.log(mymap.get("age"));

    //FOREACH IN MAP
    
    let map = new Map([["name", "pratik"],["year",2020],["age","21"]]);

    map.forEach(function(value,key,ownerMap){
        console.log(key+"---"+value);
        console.log(ownerMap === map);
        console.log(ownerMap.get("name"));
        
    });

    let key1={},
        key2={},
        mymap=new WeakMap([[key1,"pratik"],[key2,2020]]);

        console.log(mymap.has(key1));
        console.log(mymap.get(key1));
        console.log(mymap.has(key2));
        console.log(mymap.get(key1));

        mymap.delete(key1);
        console.log(mymap.has(key1));
        
        
    