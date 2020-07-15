
const regresaTrue=()=>{
    console.log('Regresa true');
    return true;
}


const regresaFalse=()=>{
    console.log('Regresa false');
    return false;
}

console.warn('Not o la negacion');
console.log(true);//true
console.log(!true);//false
console.log(!false);//true

console.log(!regresaFalse());//true

console.warn('operador AND');//es true si todos los valores estan en true 
console.log(true && true);//true
console.log(true && false);//false

console.log('=====================');
console.log(regresaFalse() && regresaTrue());//false
console.log(regresaTrue() && regresaFalse());//false

console.warn('operador OR');//true si al menos un elemento de la condicion es true
console.log(true || false);//true
console.log(false || false);//false

console.log(regresaTrue() || regresaFalse());//false
console.log(regresaFalse() || regresaTrue());//false

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = false && 'Hola Mundo';
const a2 = 'Hola' && "Mundo" && soyFalso && true;
const a3 = soyFalso || 'Ya no soy Falso';
const a4 = soyFalso || soyUndefined || soyNull||'Ya no soy Falso de nuevo' || true;
const a5 = soyFalso || soyUndefined || regresaTrue()||'Ya no soy Falso de nuevo' || true;
console.log(a1, a2, a3, a4, a5);


if(true || true || true ||false)// no se debe usar mas de 3 condiciones
{
    console.log('Hacer Algo');
}else{
    console.log('Hacer otra cosa')
}