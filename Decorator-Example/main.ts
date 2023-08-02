

function classDecorator<T extends{new (...args:any[]):{}}>
(constructor : T)
{
    return class extends constructor{
    newProperty = 'new property';
    hello = 'override';
    }
}


@classDecorator
class Greeting{
    property:'property';
    hello:string;

    constructor(m:string){
        this.hello = m;
    }


}


console.log(new Greeting('world'));