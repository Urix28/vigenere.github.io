function TransformarFrase(Frase)
  {
   var Out = [];
   for(var i = 0; i < Frase.length; i++)
   {
    var CodeNumber = Frase.charCodeAt(i);
    if(CodeNumber >= 97 && CodeNumber <= 122)
    {
     CodeNumber = CodeNumber - 32;
    }
    if(CodeNumber == 209 || CodeNumber == 241)
    {
     Out.push(15);
    }
    if(CodeNumber == 32)
    {
     Out.push(32);
    }
    else{
     if(CodeNumber-64 < 15)
     {
      Out.push(CodeNumber-64);
     }
     else if(CodeNumber-64 >= 15 && CodeNumber-64 < 28){
      Out.push(CodeNumber-63);
     }
    }
   }
   return Out;
  }
  function Algoritmo(Accion)
  {
   var FraseIngresada = document.getElementById('cadena').value;
   var ClaveIngresada = document.getElementById('contra').value;
   var ArrayFinal = [];
   if(FraseIngresada.match(/\d$/g) || ClaveIngresada.match(/\d$/g)){
    Swal.fire({
      title: 'Error!',
      text: 'La cadena y tampoco la contraseña pueden llevar números',
      icon: 'error'
    })
     return;
   }
   if(FraseIngresada.length < 1 || ClaveIngresada.length < 1)
   {
    Swal.fire({
      title: 'Error!',
      text: 'Te hace falta llenar algun campo',
      icon: 'error'
    })
    return;
   }
   if(FraseIngresada.length < ClaveIngresada.length){
    Swal.fire({
      title: 'Error!',
      text: 'La longitud de la cadena debe ser mayor a la longitud de la contraseña',
      icon: 'error'
    })
    return;
   }
   
   
    var ClaveArreglo = TransformarFrase(ClaveIngresada);
   var FraseArreglo = TransformarFrase(FraseIngresada);
   var ContarEspacios = 0;
   if (Accion == true)
   {
    for(var i = 0; i < FraseArreglo.length; i++)
    {
     if(FraseArreglo[i] == 32)
     {
      ArrayFinal.push(32);
      ContarEspacios += 1;
     }else{
      ArrayFinal.push((ClaveArreglo[(i - ContarEspacios) % ClaveArreglo.length] + FraseArreglo[i]) % 27);
     }
    }
    Swal.fire(
      'Cifrado exitoso',
      'Ahora para descifrar coloca la cadena cifrada y su clave',
      'success'
    )
   }else{
    for(var i = 0; i < FraseArreglo.length; i++)
    {
     if(FraseArreglo[i] == 32)
     {
      ArrayFinal.push(32);
      ContarEspacios += 1;
     }else{
      var Value = FraseArreglo[i] - ClaveArreglo[(i - ContarEspacios) % ClaveArreglo.length];
      if (Value < 1)
      {
       Value += 27;
      }
     ArrayFinal.push(Value % 27);
     }
    }
    Swal.fire(
      'Descifrado exitoso',
      'Se ha completado',
      'success'
    )
   }
   return ArrayFinal;
   
   
  }

  function FraseFinal(Abecedario)
  {
    
   var Final = ""
   for(var i = 0; i < Abecedario.length; i++)
   {
    if (Abecedario[i] == 15 )
    {
     Final += String.fromCharCode(209);
    }
    if (Abecedario[i] == 32)
    {
     Final += String.fromCharCode(32);
    }
    if (Abecedario[i] == 0)
    {
     Final += String.fromCharCode(90);
    }
    if(Abecedario[i] < 15 && Abecedario [i] > 0)
     Final += String.fromCharCode(Abecedario[i]+64);
    else if(Abecedario[i] > 15 && Abecedario[i] < 28){
     Final += String.fromCharCode(Abecedario[i]+63);
    }
   }
   document.getElementById('resultado').value = Final.toLowerCase();
  }