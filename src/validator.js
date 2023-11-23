/* const validator = {
  //*validar algoritmo de lunh

  isValid:function (valorDelNumero){

    //* convertir en array y volteo los datos

     let valorInvertido= Array.from(valorDelNumero).map((i)=>Number(i)).reverse();
     let sumaDeValores = 0;

     //*ubicar las posiones pares para multiplicarlo
    for(let i = 0; i < valorInvertido.length; i++){

          if(i % 2 != 0){//busca las posiones pares pero esta en las i
                if ( (valorInvertido[i]*2) >=10){
                  valorInvertido[i]=valorInvertido[i]*2-9;
                }
                else{
                  valorInvertido[i]= valorInvertido[i]*2;
                }
          }
          else {
            valorInvertido[i];
                  }
          sumaDeValores=sumaDeValores+valorInvertido[i];
}
return sumaDeValores%10===0
},

  maskify: function (valorDelNumero){
   // pasamos a un arrray y juntamos los espacios
   let informacionDelArray= Array.from(valorDelNumero);

   let cuatroUltimosNumeros= informacionDelArray.slice(-4);
   let todoMenosCuatro=informacionDelArray.slice(0,-4);
   //console.log(todoMenosCuatro)
   for(let i = 0 ; i<valorDelNumero.length-4 ; i++){
   //igualamos los numeros con el # y guardamos mapeando segun la condicion
   todoMenosCuatro[i]="#";
   //todoMenosCuatro= todoMenosCuatro[i];
   }
   // convinado los numeros
   let maskifyCard = (todoMenosCuatro.concat(cuatroUltimosNumeros)).join("");
   //console.log(maskifyCard)
   return maskifyCard
}
}

export default validator;

 */