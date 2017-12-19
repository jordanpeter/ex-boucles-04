var nb = 0;
while(nb<=100){
     if(nb<65){
          console.log("Votre score est de "+nb+" , vous avez le rang F");
          nb++;
     }
     else if(nb<70){
          console.log("Votre score est de "+nb+" , vous avez le rang D");
          nb++;
     }
     else if(nb<80){
          console.log("Votre score est de "+nb+" , vous avez le rang C");
          nb++;
     }
     else if(nb<90){
          console.log("Votre score est de "+nb+" , vous avez le rang B");
          nb++;
     }
     else{
          console.log("Votre score est de "+nb+" , vous avez le rang A");
          nb++;
     }
}
