///////////// Task 1 /////////////
class Rectangle {
    #width = 3;
    #height = 5;

    constructor(w, h){
        if(typeof(w) == "number" && w > 0)  this.#width=w;
        if(typeof(h) == "number" && h > 0)  this.#height=h;
    }

    setWidth (w){
        if(typeof(w) == "number" && w > 0)  this.#width=w;
    }

    getWidth (){
        return this.#width;
    }

    setHeight (w){
        if(typeof(h) == "number" && h > 0)  this.#height=h;
    }
    
    getHeight (){
        return this.#height;
    }

    calcArea (){
        return (this.#width*this.#height);
    }

    calcPrim (){
        return (this.#width+this.#height)*2;
    }

    draw (symbol){
        let line ='';
        for (let i = 0; i < this.#width; i++) {
            line += symbol[0];                    
        }
        for (let j = 0; j < this.#height; j++) {
            console.log(line);
        }
    }
}

let r1 = new Rectangle(2,3);
console.log(r1.calcArea());
console.log(r1.calcPrim());
r1.draw("*");

///////////// Task 2 /////////////

class Square extends Rectangle{
    constructor(side){
        super(side, side);
    }
}

let s1 = new Square(5);
console.log(s1.calcArea());
console.log(s1.calcPrim());
s1.draw("$");

