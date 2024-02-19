//usado para definir um tipo de objeto
type robot = {
    readonly id: number | string,
    name: string
}        

//outra forma de fazer a mesma coisa, porem mais usado principalmente para classes
interface robot2 {
    readonly id: number | string,
    name: string,
    sayHello():string,
}
const bot: robot = {
    id: 1,
    name: 'megaman'
}
const bot2: robot2 = {
    id: 1,
    name: 'zero',
    sayHello(): string {
        return `Hello ${this.name}`
    }
}
console.log(bot);
console.log(bot2);

bot2.name = 'x';
console.log(bot2);

class Robos implements robot2{
    id: number;
    name: string;
    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }
    sayHello(): string {
        return `Hello ${this.name}`
    }
}

const axel = new Robos(1, 'axl');
console.log(axel);
console.log(axel.sayHello());
