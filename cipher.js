   


////////////// starting code of encryption
function enc(){
   let alphabet="abcdefghijklmnopqrstuvwxyz";
   let newalpha="";
   let plain=document.getElementById("message").value;
   let s_key=document.getElementById("key").value;

 function shift(shift_key){
    for(let i=0;i<alphabet.length;i++){
        let offset=(i+shift_key)%alphabet.length;
        newalpha += alphabet[offset];
    }
 }

 function encode(plain_text){
      let result="";
      plain_text=plain_text.toLowerCase();
        for(let i=0;i<plain_text.length;i++){
          let index=alphabet.indexOf(plain_text[i]);
          result += newalpha[index];
       }
     return result;
   }

   function reset(){
       document.getElementById("en_message").value="";
    }

   if(plain.length==0 && s_key.length==0){
        alert("Enter Message");
        alert("Enter Key between[0 to 25]");
        reset();
    }else if(plain.length==0){
        alert("Enter Message");
        reset();
    } else if(s_key.length==0 || (0>parseInt(s_key) || parseInt(s_key)>25)){
        alert("Enter Key between[0 to 25]");
        reset();
    } else {
         s_key=parseInt(s_key);
        shift(s_key);
        document.getElementById("en_message").value=encode(plain);
    } 
}
/////////////  ending code of encryption

//////////////starting code of decryption
function dec(){
   let alphabet="abcdefghijklmnopqrstuvwxyz";
   let newalpha="";
   let cipher=document.getElementById("cipher_message").value;
   let dec_key=document.getElementById("de_key").value;

  function shift(shift_key){
      for(let i=0;i<alphabet.length;i++){
          let offset=(i-shift_key+26)%alphabet.length;
          newalpha += alphabet[offset];
        }
    }

 function decode(cipher_text){
     let result=""; 
     cipher_text=cipher_text.toLowerCase();
     for(let i=0;i<cipher_text.length;i++){
          let index=alphabet.indexOf(cipher_text[i]);
          result += newalpha[index];
       }
     return result;
 }

 function reset(){
    document.getElementById("dec_message").value="";
    }

 if(cipher.length==0 && dec_key.length==0){
        alert("Enter cipher message");
        alert("Enter Key between[0 to 25]");
        reset();
    }else if(cipher.length==0){
        alert("Enter cipher message");
        reset();
    } else if(dec_key.length==0 || (0>parseInt(dec_key) || parseInt(dec_key)>25)){
        alert("Enter Key between[0 to 25]");
     reset();
    } else{
        dec_key=parseInt(dec_key);
        shift(dec_key);
        document.getElementById("dec_message").value=decode(cipher);
    }
   ///////////// ending code of decryption
}

function star_en(){
    var plain=document.getElementById("message").value;
    var s_key=document.getElementById("key").value;

    function reset(){
    document.getElementById("en_message").value="";
    }
    
    if(plain.length==0 && s_key.length==0){
        alert("Enter Message");
        alert("Enter Key between[0 to 25]");
        reset();
    }
    else if(plain.length==0){
        alert("Enter Message");
        reset();
    } 
    else if(s_key.length==0 || (0>parseInt(s_key) || parseInt(s_key)>25)){
        alert("Enter Key between[0 to 25]");
        reset();    
    }
    else {
    document.getElementById("en_message").value="XXXXXXXXXXX";
    }
}

function star_dec(){
    var cipher=document.getElementById("cipher_message").value;
    var dec_key=document.getElementById("de_key").value;

    function reset(){
    document.getElementById("dec_message").value="";
    }

    if(cipher.length==0 && dec_key.length==0){
        alert("Enter Cipher Message");
        alert("Enter Key between[0 to 25]");
        reset();
    }
    else if(cipher.length==0){
        alert("Enter Cipher Message");
        reset();
    } 
    else if(dec_key.length==0 || (0>parseInt(dec_key) || parseInt(dec_key)>25)){
        alert("Enter Key between[0 to 25]");
        reset();
    }
    else {
    document.getElementById("dec_message").value="XXXXXXXXXXX";
    }
}


////   contact us section ///////
function contact(urlofcontact){
    var a=urlofcontact;
   window.open(a,"","width=500px,height=500px,left=900px,top=140px")
}