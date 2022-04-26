class Vehiculo{

    constructor(anio, marca, modelo, color, ruedas) {
        this.anio = anio;
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.ruedas = ruedas;
    }

    acelerar() {
        return "acelerermos";
    }
}
class Auto extends Vehiculo {
    constructor(anio, marca, modelo, color, ruedas,placa) {
        super(anio, marca, modelo, color, ruedas);
        this.placa = placa || "123";
    }
    acelerar() {
        return "Run!" + super.acelerar();
    }

}

const auto1 = new Vehiculo(1991, "Honda", "civic", "rojo", 4);
console.log(auto1.marca);
console.log(auto1.acelerar());

const auto2 = new Auto(2020, "Toyota", "Hilux", "Gray", 4, "AEA-123");
console.log(auto2.placa);
console.log(auto2.acelerar());
