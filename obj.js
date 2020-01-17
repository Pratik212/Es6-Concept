//console.log("pratik palanpure");

//Expands object functionality

function createfunction(name,age){
    return{
        name,
        age
    };
    
}
 

// var person={
//     name:"pratik",
//     sayname:function(){
//         console.log(this.name);
//     }
// };

// var person={},
//     suffix = "name";
//     lastname="last";

// person["first"+suffix]="pratik";
// person[lastname+suffix]="palanpure";

// console.log(person["first name"]);
// console.log(person[lastname+suffix]);

// var obj={a:1};
// var copy=Object.assign({},obj);
// console.log(copy);

// var o1={a:1};
// var o2={b:2};
// var o3={c:3};

// console.log(Object.assign({},o1,o2,o3));

//onject prototype

let person={
    getgreeting(){
        return "hello";
    }
};

let dog={
    getgreeting(){
        return "Woof";
    }
}

let friend={
    getgreeting(){
        return super.getgreeting.call() + ",hi";
    }
}
Object.setPrototypeOf(friend,person);

let relative=Object.create(friend);

// Object.setPrototypeOf(friend,person);
console.log(person.getgreeting());
console.log(friend.getgreeting());
console.log(relative.getgreeting());

// console.log(Object.getPrototypeOf(friend)=== person);


// let friend=Object.create(person);
// console.log(friend.getgreeting());
// console.log(Object.getPrototypeOf(friend)===dog);


// let stud={
//     id:1,
//     name:"pratik",
//     dob:"02/12/199",
//     mobile:9664500754
// }

// function myfunction(value){
//     console.log(value);
// }
  
// myfunction({id:1,name:pratik,mobile:9664500754}=stud)

// console.log(id);