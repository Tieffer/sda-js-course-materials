
var array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n' ,'o', 'p', 'r', 's', 't','u', 'w', 'x', 'y', 'z'];

function getValue(){
   var value= document.getElementById("pangramInput").value.toLowerCase();
   
   return value.split(''); 
   
}

function getFormInput(value){    
  var tmp = [];    
    for( var i=0; i < array.length ; i++ ){
           if(value.indexOf(array[i]) === -1) {         
               tmp.push(array[i]);  
           } 
    }
    return tmp;
    console.log(tmp);
}


function isPangram (value){
  
    if (value.length===0){
        
        document.getElementById("result").innerHTML = 'To jest pangram';
        document.getElementById("missingLetters").innerHTML = " ";
    }else{
        document.getElementById("result").innerHTML = 'To nie jest pangram';
        document.getElementById("missingLetters").innerHTML = getFormInput(getValue());
    }
    
}
 
 document.getElementById("pangramChecker").addEventListener('submit', function(event){
    
    event.preventDefault(); 
    isPangram(getFormInput(getValue())); 
});
    


