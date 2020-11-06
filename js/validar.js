function validacion(evt,input){
   var c = window.Event ? evt.which : evt.keyCode;    
   var chark = String.fromCharCode(c);
   var tempValue=input.value+chark;
   

   if(c >= 48 && c <= 57){
        if(filter(tempValue)=== false){
			alert("Solo puedes ingresar 2 decimales");
            return false;
        }else{       
            return true;
        }
    }else{
          if(c == 8 || c == 13 || c == 0) {     
              return true;              
          }
 	  else if(c==45){
                if(filter(tempValue)=== false){
		      alert("Solo puedes ingresar un signo menos >:c")
		      return false;
		}else{
			return true;
			}
		}
	  else if(c == 46){
                if(filter(tempValue)=== false){
					alert("Solo puedes ingresar 1 punto");
                    return false;
                }else{       
                    return true;
                }
          }else{
			  alert("Solo puedes ingresar numeros y que sean positivos");
              return false;
          }
    }
}

function validaLetras(evt,input){
    var c = window.Event ? evt.which : evt.keyCode;    
    var chark = String.fromCharCode(c);
    var tempValue=input.value+chark;
    
    if(c >= 97 && c <= 122){
        if(filter2(tempValue)=== false){
            alert("Solo puedes letras en la cadena");
            return false;
        }else{       
            return true;
        }
       }
    if(c >= 65 && c <= 90){
         if(filter2(tempValue)=== false){
             alert("Solo puedes letras en la cadena");
             return false;
         }else{       
             return true;
         }
        }else{
            alert("Solo puedes letras en la cadena");
            return false;
        }
     
        
 }

function validacionNumbers(evt){
   var c = (evt.which) ? evt.which : evt.keyCode;
   if(c==8 || c==13){
      return true;
   }
   
   else if(c>=48 && c<=57){
      return true;
   }else{
      
      alert("Solo puedes ingresar numeros y que sean positivos")
      return false;
   }
}

function efe(evt){
   var c = (evt.which) ? evt.which : evt.keyCode;
   if(c==123){
      return false;
   }
   
   
}

function filter(__val__){
    var preg = /^\-?\d*\.?(\d{0,2})?$/g;
    if(preg.test(__val__) === true){
        //var preg = /^\-{0,1}?[0-9]+\.{0,1}?[0-9]{0,2}?)$/g; 
        
        return true;
    }else{
       return false;
    }
    
}


function filter2(__val__){
    var preg =  (/([a-z])/ig);
    if(preg.test(__val__) === true){
        //var preg = /^\-{0,1}?[0-9]+\.{0,1}?[0-9]{0,2}?)$/g; 
        
        return true;
    }else{
       return false;
    }
    
}
 
 