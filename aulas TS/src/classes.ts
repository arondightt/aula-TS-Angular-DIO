// Data modifiers
/*
public: acessível por todos
private: acessível apenas pela própria classe
protected: acessível apenas pela própria classe e classes filhas
*/

class Character {
    protected name?: string;
    readonly strength: number;
    skill: number;
    
    constructor(name: string,
         strength: number,
          skill: number){
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }
    atack():string{
        return `${this.name} atacou with ${this.strength} of strength`
    }
}
const Ryu = new Character('Ryu', 100, 98);
console.log(Ryu);
Ryu.atack();
console.log(Ryu.atack());
console.log('a força de Ryu é: ', Ryu.strength);
console.log('a skill de Ryu é: ', Ryu.skill);

//subclasse (classe filha)
//extends: herda as propriedades da classe pai
//super: chama o construtor da classe pai
class Magician extends Character {
    magicPoints: number;
    constructor(name: string,
         strength: number,
          skill: number,
           magicPoints: number){
        super(name, strength, skill);
        this.magicPoints = magicPoints;
    }
}
const Gandalf = new Magician('Gandalf', 100, 98, 100);
console.log(Gandalf);
console.log(Gandalf.atack());
console.log('a força maginca de Gandalf é: ', Gandalf.magicPoints);