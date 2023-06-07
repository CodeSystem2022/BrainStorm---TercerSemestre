// Comentarios en los pasos agregados de la clase 7 parte 2

//let persona3 = new Persona('Carla', 'Ponce'); esto no se debe hacer: Persona is not defined
class Persona{ //Clase padre
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }
//Clase 7 
    nombreCompleto(){
        return this._nombre+' '+this._apellido;
    }
//Clase 7 Sobreescribiendo el mètodo de la clase padre (Object)
    toString(){ //Regresa un string
    //Se aplica el polimorfismo que significa = multiples formas en tiempo de ejecuciòn
    //El mètodo que se ejecuta depende si es una referencia de tipo padre o hija
    return this.nombreCompleto();
    }
}

class Empleado extends Persona{ //Clase hija
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

    //Sobreescritura Clase 7
    nombreCompleto(){
        return super.nombreCompleto()+', '+this._departamento; 
    }
}

let personal = new Persona('Martin', 'Perez');
console.log(persona1.nombre);
persona1.nombre = 'Juan Carlos';
console.log(persona1.nombre);
//console.log(persona1);
let persona2 = new Persona('Carlos', 'Lara');
console.log(persona2.nombre);
persona2.nombre = 'Maria Laura';
console.log(persona2.nombre);
//console.log(persona2);

let empleado1 = new Empleado('Maria', 'Gimenez', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombreCompleto());

//Object.prototype.toString Esta es la manera de acceder a atributos y mètodos de manera dinamica Clase 7
console.log(empleado1.toString());
console.log(persona1.toString());
