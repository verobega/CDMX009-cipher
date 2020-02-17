const cipher = {
  cifrar
}
    function cifrar(claveTemporal, moves){
        let resultEncode="";
      
      for (var i = 0; i < claveTemporal.length ;  i++){
        let wordCipher = claveTemporal.charCodeAt(i); // convierte la letra en numero ascii
       if (wordCipher >= 65 && wordCipher <= 90){ // condicion que debe cumplir el texto una vez convertido en ASCII
         let formula = (wordCipher - 65 + moves) % 26 + 65; // aplica la formula a las letras
         let newLetter = String.fromCharCode(formula); //palabra cifrada
         
         resultEncode += newLetter;
       }
      }
      return resultEncode; //
      
      }
export default cipher


