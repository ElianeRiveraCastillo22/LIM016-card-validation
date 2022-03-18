import validator from './validator.js';

//console.log(validator);
// para que aparezca los numeros en la tarjeta 
/*function aparecer(){
    document.getElementById("numero").innerHTML="1234567";
}*/
//imput numero de trajeta 
let inputNumero=document.getElementById("input-Numero");
let inputNombre=document.getElementById("input-Nombre")
let botonValidar= document.getElementById("button-continuar");
let welcome=document.getElementById("welcome");
let boxForm=document.getElementById("boxForm");
let btnWelcome=document.getElementById("btnWelcome");
let boxTarjeta=document.getElementById("boxTarjeta")
let btnRegreso=document.getElementById("btnRegreso")

btnRegreso.addEventListener("click",()=>{
    boxTarjeta.style.display="none";
    welcome.style.display="block";
})

btnWelcome.addEventListener("click",()=>{
    welcome.style.display="none";
    boxForm.style.display="block";
})

botonValidar.addEventListener('click', ()=>{
    boxTarjeta.style.display="block"
    boxForm.style.display="none"

    let valorDelNumero = inputNumero.value;// elimine .replace
//para que me lleve a otro sitio


//para que aparezca el numero en la tarjeta
    let apareceNumero=document.getElementById("aparece-numero");
    apareceNumero.innerText=validator.maskify(valorDelNumero);
    let isValidC=validator.isValid(valorDelNumero)
    let maskifyC= validator.maskify(valorDelNumero)

 if (isValidC){
     alert("tu tarjeta es valida")
    valorDelNumero = maskifyC

} else{
        alert("tu tarjeta no es valida")
          }

 });
 //restricciones para el input del numero de tarjeta 
inputNumero.addEventListener('keyup',(e)=>{
    let valorInput= e.target.value; 
    inputNumero.value = valorInput.replace(/\s/g, '').replace(/\D/g, '');//.replace(/([0-9]{4})/g,'$1 ').trim();
    //elimianmos espacios en blanco .replace(/\s/g, '')eliminar las letras .replace(/\D/g, '')//ponemos espacios cada cuatro numeros.replace(/(\d {4})/g,'$number ').trim();

}
);
//restricciones para el input del nombre de tarjeta
inputNombre.addEventListener('keyup',(e)=>{
      let valorDelNombre= e.target.value;
   inputNombre.value=valorDelNombre.replace(/[0-9]/g,'')
   let apareceNombre=document.getElementById("aparece-nombre")
   apareceNombre.innerText=valorDelNombre


});
