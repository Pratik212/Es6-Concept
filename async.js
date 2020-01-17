let button=document.getElementById('my-btn');
 
button.onclick=function(event){
    console.log("Clicked");

}

//nodejs

// readfile("example.txt",function(err,contents){
//     if(err){
//         throw err;
//     }
//     writefile("newexample.txt",function(err){
//         if(err){
//             throw err;
//         }
//         console.log('file was written!');
        
//     })
//     console.log(contents);
    
// })
// console.log('Hi!');


// let promise = readfile("example.txt");
// promise.then(function(contents){
//     //fulfillment
//     console.log('contents');
// },function(err){
//     console.log(err.message);
    
// });

// promise.then(function(contents){
//     console.log('contents');

//     promise.then(function(contents){
//         console.log(contents);
        
//     })
// })

// promise.then(null,function(err){
//     console.log(err.message);
// })

// promise.catch(function(err){
//     console.log(err.message);
// })


let p1 = new Promise(function(resolve,reject){
    resolve(40);
})

//CHAINED PROMISES

// p1.then(function(value){
//     console.log(value);
//     return value + 1;
// }).then(function(value){
//     console.log('finished -'+value);
//     return value + 1;
// }).then(function(value){
//     console.log('finished2 -'+value);
// })

//unchained promise
// let p2=p1.then(function(value){
//     console.log(value);
// })
// let p3=p2.then(function(value){
//     console.log('finished');
// })
// let p4=p3.then(function(value){
//     console.log('finished2');
// })

// let X1= new Promise(function(resolve,reject){
    // resolve(40);
    //throw new Error("Explosion!");
// })


//CATCHING ERROR IN PROMISES
 
// X1.catch(function(error){
//     console.log(error.message);
//     throw new Error("Boom Bang Bang!");
// }).catch(function(error){
//     console.log(error.message);
    
// })

//REJECT PROMISES WITH VALUE

// let z1 = new Promise(function(resolve,reject){
//     reject(40);
// })

// z1.catch(function(value){
//     console.log(value);
//     return value + 1;
// }).then(function(value){
//     console.log('finished -'+value);
//     return value + 1;
// });

let y1 = new Promise(function(resolve,reject){
    resolve(40);
});

let y2 = new Promise(function(resolve,reject){
    resolve(45);
})

y1.then(function(value){
    console.log(value);
    return y2;
}).then(function(value){
    console.log(value);
    
})

let b1 = new Promise(function(resolve,reject){
    resolve(50);
});
let b2 = Promise.reject();//(function(resolve,reject){
//     resolve(51);
// })
let b3 = new Promise(function(resolve,reject){
    resolve(52);
})

let b4 = Promise.race([b1,b2,b3]);

b4.then(function(value){
    // console.log(Array.isArray(value));
    // console.log(value[0]);
    // console.log(value[1]);
    // console.log(value[2]);
    console.log("b4= "+value);
    
    
})