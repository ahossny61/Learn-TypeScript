function age(constructor:Function ) {
    console.log('in decrator fn ',constructor);
    constructor.prototype.age = 55;
}

@age
class A {
    name:string;
    message:string;

    constructor(name:string,message:string){
        this.name = name;
        this.message = message;
    }

    sayHello(){
        console.log(`${this.name} : ${this.message}\nage : ${this.age}`);
    }
}

console.log(new A('Ahmed','Hello to our board').sayHello());

let x = 5;
