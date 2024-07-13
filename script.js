var input = document.getElementById("input");
var Ergebnis = document.getElementById("Ergebnis");
let mpz = 0;
let m = 0;

let s;
let E;
 
  function senden() {
     console.log("Senden")
     s = 0;
     mpz = 0;
     m = 0;

if (input.value.includes("a")) {
    mpz = mpz + 26; 
 }
 else if (input.value.includes("b")) {
     mpz = mpz + 26;
 } 
 else if (input.value.includes("c")) {
     mpz = mpz + 26;
 } 
 else if (input.value.includes("d")) {
     mpz = mpz + 26;
 } 
 else if (input.value.includes("e")) {
     mpz = mpz + 26;
 } 
 else if (input.value.includes("f")) {
     mpz = mpz + 26;
 } 
 else if (input.value.includes("g")) {
     mpz = mpz + 26;
 } 
 else if (input.value.includes("h")) {
     mpz = mpz + 26;
 } 
 else if (input.value.includes("i")) {
     mpz = mpz + 26;
 } 
 else if (input.value.includes("j")) {
     mpz = mpz + 26;
 } 
 else if (input.value.includes("k")) {
     mpz = mpz + 26;
 } 
 else if (input.value.includes("l")) {
     mpz = mpz + 26;
 } 
 else if (input.value.includes("m")) {
     mpz = mpz + 26;
 } 
 else if (input.value.includes("n")) {
     mpz = mpz + 26;
 } 
 else if (input.value.includes("o")) {
     mpz = mpz + 26;
 } 
 else if (input.value.includes("p")) {
     mpz = mpz + 26;
 } 
 else if (input.value.includes("q")) {
     mpz = mpz + 26;
 } 
 else if (input.value.includes("r")) {
     mpz = mpz + 26;
 } 
 else if (input.value.includes("s")) {
     mpz = mpz + 26;
 } 
 else if (input.value.includes("t")) {
     mpz = mpz + 26;
 } 
 else if (input.value.includes("u")) {
     mpz = mpz + 26;
 } 
 else if (input.value.includes("v")) {
     mpz = mpz + 26;
 } 
 else if (input.value.includes("w")) {
     mpz = mpz + 26;
 } 
 else if (input.value.includes("x")) {
     mpz = mpz + 26;
 } 
 else if (input.value.includes("y")) {
     mpz = mpz + 26;
 } 
 else if (input.value.includes("z")) {
     mpz = mpz + 26;
 } 
 
 if (input.value.includes("A")) {
     mpz = mpz + 26; 
  }
  else if (input.value.includes("B")) {
      mpz = mpz + 26;
  } 
  else if (input.value.includes("C")) {
      mpz = mpz + 26;
  } 
  else if (input.value.includes("D")) {
      mpz = mpz + 26;
  } 
  else if (input.value.includes("E")) {
      mpz = mpz + 26;
  } 
  else if (input.value.includes("F")) {
      mpz = mpz + 26;
  } 
  else if (input.value.includes("G")) {
      mpz = mpz + 26;
  } 
  else if (input.value.includes("H")) {
      mpz = mpz + 26;
  } 
  else if (input.value.includes("I")) {
      mpz = mpz + 26;
  } 
  else if (input.value.includes("J")) {
      mpz = mpz + 26;
  } 
  else if (input.value.includes("K")) {
      mpz = mpz + 26;
  } 
  else if (input.value.includes("L")) {
      mpz = mpz + 26;
  } 
  else if (input.value.includes("M")) {
      mpz = mpz + 26;
  } 
  else if (input.value.includes("N")) {
      mpz = mpz + 26;
  } 
  else if (input.value.includes("O")) {
      mpz = mpz + 26;
  } 
  else if (input.value.includes("P")) {
      mpz = mpz + 26;
  } 
  else if (input.value.includes("Q")) {
      mpz = mpz + 26;
  } 
  else if (input.value.includes("R")) {
      mpz = mpz + 26;
  } 
  else if (input.value.includes("S")) {
      mpz = mpz + 26;
  } 
  else if (input.value.includes("T")) {
      mpz = mpz + 26;
  } 
  else if (input.value.includes("U")) {
      mpz = mpz + 26;
  } 
  else if (input.value.includes("V")) {
      mpz = mpz + 26;
  } 
  else if (input.value.includes("W")) {
      mpz = mpz + 26;
  } 
  else if (input.value.includes("X")) {
      mpz = mpz + 26;
  } 
  else if (input.value.includes("Y")) {
      mpz = mpz + 26;
  } 
  else if (input.value.includes("Z")) {
      mpz = mpz + 26;
  } 
 
  if (input.value.includes("1")) {
     mpz = mpz + 10; 
  }
  else if (input.value.includes("2")) {
      mpz = mpz + 10;
  } 
  else if (input.value.includes("3")) {
      mpz = mpz + 10;
  } 
  else if (input.value.includes("4")) {
      mpz = mpz + 10;
  } 
  else if (input.value.includes("5")) {
      mpz = mpz + 10;
  } 
  else if (input.value.includes("6")) {
      mpz = mpz + 10;
  } 
  else if (input.value.includes("7")) {
      mpz = mpz + 10;
  } 
  else if (input.value.includes("8")) {
      mpz = mpz + 10;
  } 
  else if (input.value.includes("9")) {
      mpz = mpz + 10;
  } 
  else if (input.value.includes("0")) {
      mpz = mpz + 10;
  } 
  
  if (input.value.includes("^")) {
     mpz = mpz + 40;
  }
  else if(input.value.includes("°")){
     mpz = mpz + 40;
  }
  else if(input.value.includes("!")){
     mpz = mpz + 40;
  }
  else if(input.value.includes("§")){
     mpz = mpz + 40;
  }
  else if(input.value.includes("$")){
     mpz = mpz + 40;
  }
  else if(input.value.includes("&")){
     mpz = mpz + 40;
  }
  else if(input.value.includes("/")){
     mpz = mpz + 40;
  }
  else if(input.value.includes("{")){
     mpz = mpz + 40;
  }
  else if(input.value.includes("(")){
     mpz = mpz + 40;
  }
  else if(input.value.includes("[")){
     mpz = mpz + 40;
  }
  else if(input.value.includes(")")){
     mpz = mpz + 40;
  }
  else if(input.value.includes("]")){
     mpz = mpz + 40;
  }
  else if(input.value.includes("}")){
     mpz = mpz + 40;
  }
  else if(input.value.includes("=")){
     mpz = mpz + 40;
  }
  else if(input.value.includes("ß")){
     mpz = mpz + 40;
  }
  else if(input.value.includes("?")){
     mpz = mpz + 40;
  }
  else if(input.value.includes("`")){
     mpz = mpz + 40;
  }
  else if(input.value.includes("´")){
     mpz = mpz + 40;
  }
  else if(input.value.includes("-")){
     mpz = mpz + 40;
  }
  else if(input.value.includes("+")){
     mpz = mpz + 40;
  }
  else if(input.value.includes("@")){
     mpz = mpz + 40;
  }
  else if(input.value.includes("*")){
     mpz = mpz + 40;
  }
  else if(input.value.includes("~")){
     mpz = mpz + 40;
  }
  else if(input.value.includes("#")){
     mpz = mpz + 40;
  }
  else if(input.value.includes("'")){
     mpz = mpz + 40;
  }
  else if(input.value.includes("<")){
     mpz = mpz + 40;
  }
  else if(input.value.includes(">")){
     mpz = mpz + 40;
  }
  else if(input.value.includes("|")){
     mpz = mpz + 40;
  }
  else if(input.value.includes(",")){
     mpz = mpz + 40;
  }
  else if(input.value.includes(";")){
     mpz = mpz + 40;
  }
  else if(input.value.includes(".")){
     mpz = mpz + 40;
  }
  else if(input.value.includes(":")){
     mpz = mpz + 40;
  }
  else if(input.value.includes("€")){
     mpz = mpz + 40;
  }
  else if(input.value.includes("ü")){
     mpz = mpz + 40;
  }
  else if(input.value.includes("ö")){
     mpz = mpz + 40;
  }
  else if(input.value.includes("ä")){
     mpz = mpz + 40;
  }
  else if(input.value.includes("Ü")){
     mpz = mpz + 40;
  }
  else if(input.value.includes("Ö")){
     mpz = mpz + 40;
  }
  else if(input.value.includes("Ä")){
     mpz = mpz + 40;
  }
  else if(input.value.includes(" ")){//40
     mpz = mpz + 40;
  }
 
  
 
 
 
    console.log("mpz:"+mpz);

    if (mpz>0) {

        m = mpz ** input.value.length;
        m = m/2;
        console.log("m:"+m);
        s = m/2150000000;

        if (s>60) {
        s = s/60 
        E = " Minuten"
        console.log("Min")

        if (s>60) 
         {s = s/60
           E = " Stunden"
           console.log("h")  
         }
         
         if (s>24) {
             s = s/24
             E = " Tage"
             console.log("d")   
         }
     
         if (s>365) {
             s = s/365
             E = " Jahre"
             console.log("a")   
         }
      } else {
        E = " Sekunden"
        console.log("s")
      }

      Ergebnis.innerHTML = "Ein guter PC braucht durschnittlich "+ s + E + ", um dein Passwort zu erraten";
   
    }

    else {
        Ergebnis.innerHTML = "Gib dein Passwort ein";
    }
};

 function sendenc() {
    setTimeout(senden,100);
 }
 

 
 var Senden = document.getElementById("Submit");

 document.addEventListener("keydown",sendenc);
 Senden.onclick = senden;

 
