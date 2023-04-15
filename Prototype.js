let arr = [ 2 , 3 , 1, 5 , 4];

///////////////// task 1 /////////////////

Array.prototype.min = function (){
    let min = this[0];
    this.forEach((value) =>{
        if(min > value) min = value;
    });
    return min; 
};

console.log(arr.min());

///////////////// task 2 /////////////////

Array.prototype.customFilter = function (callback){
    let newArr = [];
    this.forEach((value) =>{
        if(callback(value)) newArr.push(value);
    });
    return newArr; 
};

let newArr1=arr.customFilter((value) => value % 2 !== 0);
console.log(newArr1);

///////////////// task 3 (fill all array with val) /////////////////

Array.prototype.customFill = function (val){
    let newArr = [];
    this.forEach(() =>{
        newArr.push(val);
    });
    return newArr; 
};

let newArr2=arr.customFill(5); 
console.log(newArr2);

///////////////// task 3 (fill array with val from start) /////////////////

Array.prototype.customFill2 = function (val , start ){
    let newArr = [];
    this.forEach((value , index) =>{
        if(index >= start) newArr.push(val);
        else newArr.push(value)
    });
    return newArr; 
};

let newArr3=arr.customFill2(5, 1); 
console.log(newArr3);

///////////////// task 3 (fill array with val from start to end) /////////////////

Array.prototype.customFill3 = function (val , start ,end){
    let newArr = [];
    this.forEach((value , index) =>{
        if(index >= start && index < end) newArr.push(val);
        else newArr.push(value)
    });
    return newArr; 
};

let newArr4=arr.customFill3(5, 1, 4); 
console.log(newArr4);

//output
// 1
// [ 3, 1, 5 ]
// [ 5, 5, 5, 5, 5 ]
// [ 2, 5, 5, 5, 5 ]
// [ 2, 5, 5, 5, 4 ]
