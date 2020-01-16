// console.log("pratik palanpure");

// let options={
//     repeat : true,
//     save: false
// }

// // let repeat=options.repeat,
// //     save=options.save;

// let {repeat,save}=options;

//     console.log(repeat);
//     console.log(save);


// let node={
//     type:"identifier",
//     name:"john"
// }
// type="item";
// name=10;

// function myfunction(value){
//     console.log(value);
// }

// myfunction({type, name:localname , isvalid=false}=node);

// console.log(type);
// console.log(localname); 
// console.log(isvalid);

// let newnode={
//     type:"identifier",
//     name:"john",
//     loc:{
//         start:{
//             line:1,
//             column:2   
//         },
//         end:{
//             line:4,
//             column:4
//         }
//     }
// }

// let {loc:{start}}=newnode;
// let {loc:{end}}=newnode;
// console.log(start.line);
// console.log(start.column);
 
// console.log(end.line);
// console.log(end.column);

// //desstructuring arrays

// let colors=["red","green","blue"];
// let firstcolor="black";
// let secondcolor="purple";


// //let [,,thirdcolor] = colors;

// //console.log(thirdcolor);

// // console.log(firstcolor);
// // console.log(secondcolor);
// // console.log(colors);

// [firstcolor,secondcolor]=colors;

// // console.log(firstcolor);
// // console.log(secondcolor);

// //swap values

// let a=1;
//     b=2;


// [a,b]=[b,a];

// // console.log(a);
// // console.log(b);

// //default value

// let food=["burger"];

// let [firstfood,secondfood="fries"]=food;

// // console.log(firstfood);
// // console.log(secondfood);

// colors=["red",["green","light green"],"blue"];

// // console.log(colors);    

// //Rest Items

// colors=["red","green","blue"];
// let [restone,...restcolors]=colors;

// // console.log(restone);
// // console.log(restcolors);
// // console.log(colors);

// let [... clonedcolors]=colors.concat();
// //console.log(clonedcolors);

//Array and object

let node={
    type:"Identifier",
    name:"foo",
    loc:{
        start:{
            line:1,
            column:2
        },
        end:{
            line:3,
            line:4
        }
    },
    range:[5,5]
}

let{loc:{start},range:[startindex] } = node ;

console.log(start.line);
console.log(start.column);
console.log(startindex);

// function setcookie(name,value,options){
//     options=options || {};

//     let secure=options.secure,
//     path=options.path,
//     domain=options.domain,
//     expires=options.expires 

//     //code to actually set the cookie

//     setcookie("type","js" {
//         secure:true,
//         expires:60000
//     })

// }

function setcookie(name,value,
    {secure=false,
        path="/",
        domain="example.com",
        expires=new Date(Date.now()+360000000)}={}){

            console.log(secure,path,domain,expires);
}
    //code to actually set the cookie

    setcookie("type","js",{
        secure:true,
        expires:60000
    });
