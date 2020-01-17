// function Rectangle(length,width){
//     this.length = length;
//     this.width = width;
// }
// Rectangle.prototype.getArea=function(){
//     return this.length * this.width;
// }
// function Square(length){
//     Rectangle.call(this,length,length);
// }

// Square.prototype=Object.create(Rectangle.prototype,{
//     constructor:{
//         value:Square,
//         enumrable:true,
//         writable:true,
//         configurable:true
//     }
// });

// var square = new Square(5);
// console.log(square.getArea());
// console.log(square instanceof Square);
// console.log(square instanceof Rectangle);

class Rectangle{
    constructor(length,width){
        this.length = length;
        this.width = width;
    }
    static create(length,width){
        return new Rectangle(length,width)
    }
    getArea(){
        console.log("parents class getarea called");
        
        return this.length * this.width;
    }
}
class Square extends Rectangle{
    constructor(length){
        super(length,length);
    }
    getArea(){
        console.log("derived class getarea called");
        return super.getArea();
        //return this.length * this.width;
    }
}

var rect = Rectangle.create(4,5);
var square = new Square(3);
console.log(square.getArea());
console.log(square instanceof Square);
console.log(square instanceof Rectangle);
console.log(rect.getArea());
