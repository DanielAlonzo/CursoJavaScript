//*#*#*#*#*#*#     FORMAS DE DEFINIR FUNCIONES      #*#*#*#*#*#

//forma NO recomendada de hacer una funcion
function saludar(){
    
    console.log('Hola Mundo');
}

//No. 2 - Funcion anonima
const saludar2 = function(){
    console.log('Hola Mundo');
}

//No. 3 - funcion con argumentos
function saludar3(nombre){
    console.log('Hola '+nombre);
    return 10;
    console.log('soy un codigo que esta despues del return');
} 
//No. 3.2 - Funcion anonima con argumentos
const saludar3_2 = function(nombre){
    console.log('Hola '+nombre);
}

//No. 4 - argumentos fuera de la funcion
function saludar4(){
    console.log(arguments)
    console.log('Hola Mundo');
}
//No.5 - funcion de flecha
const saludarFlecha = ()=>{
    console.log('Hola flecha');
}
//No.6 - funcion de flecha con argumento
const saludarFlecha2 = (nombre)=>{//  <- puede funcionar sin los parentesis: nombre => {}
    console.log('Hola '+nombre);  //pero es buena practica poner los parentesis, para saber que es una funcion de flecha
}

function sumar(a,b){
    return a+b;
}
const sumar2=(a,b)=>{
    return a+b;
}
const sumar3=(a,b)=> a+b;//esto solo se puede hacer si solo hay una linea, si hay mas de una
                         //se debe hacer como sumar2()

function getAleatorio(){
    return Math.random();
}
const getAleatorio2=()=> Math.random();


saludar();
saludar2()
saludar3('DAni')
saludar3_2('Hector')
saludar4('Dani', 24,true,'Honduras')
saludarFlecha()
saludarFlecha2('Daniel')

console.log(sumar(1,2));
console.log(sumar2(1,2));
console.log(sumar3(1,2));
console.log(getAleatorio());
console.log(getAleatorio2());