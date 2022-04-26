class Ninja{
    constructor(name, salud) {
        this.name = name;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName = () => console.log(this.name);
    
    showStats() {
        console.log("name:"+this.name);
        console.log("fuerza:"+this.fuerza);
        console.log("velocidad:"+this.velocidad);
        console.log("salud:"+this.salud);
    }
    // drinkSake = () => this.salud += 10;
    drinkSake() {
        this.salud += 10;
    }
}

class Sensei extends Ninja{
    constructor(name) {
        super(name);
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduria = 10;
    }
    speakWisdom() {
        super.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }
}


const ninja1 = new Ninja("Hyabusa",100);
ninja1.sayName();
console.log("==============");
ninja1.showStats();
console.log("==============");
ninja1.drinkSake();
ninja1.showStats();
console.log("----------------");
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
console.log("==============");
superSensei.showStats();