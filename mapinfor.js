console.log("for each loop in map");

let map=new Map([["name","Pratik"],["year",2020],["age","21"]]);

map.forEach(function(value , key , ownerMap){
    console.log(key + "-" + value);
    //console.log(ownerMap === map);

    console.log(ownerMap.get("name"));
})



//WEAKMAPS

let mapp=new WeakMap(),
    element =document.querySelector('.element');

    mapp.set(element,"original value");

let value= mapp.get(element);
console.log(value);





let key1= {},
    key2={},
    mymap=new WeakMap([[key1,"pratik"],[key2,2020]]);

    console.log(mymap.has(key1));

    console.log(mymap.get(key1));
    console.log(mymap.get(key2));

    mymap.delete(key1);
    console.log(mymap.has(key1));
    
    
    
    