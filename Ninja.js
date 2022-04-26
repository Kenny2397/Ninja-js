class Ninja{
    constructor(name, salud) {
        this.name = name;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName = () => console.log(this.name);
    
    showStats() {
        console.log(this.name);
        console.log(this.fuerza);
        console.log(this.velocidad);
        console.log(this.salud);
    }
    drinkSake = () => this.salud += 10;
}
const ninja1 = new Ninja("Hyabusa",100);
ninja1.sayName();
console.log("==============");
ninja1.showStats();
console.log("==============");
ninja1.drinkSake();
ninja1.showStats();