var numeriRandom = [];
var risposteUtente = [];

for(var i = 0; i < 5; i++){
    var numero = Math.floor(Math.random() * 101);
    numeriRandom.push(numero);
} alert(numeriRandom);

var tempo = 30;
     document.getElementById('tempo')
    
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (tempo == -1) {
        clearTimeout(timerId);
      } else {
        document.getElementById('tempo').innerHTML = tempo + ' secondi rimanenti';
        tempo--;
      }
    }

    setTimeout(inserisciRisposte,32000);
    function inserisciRisposte(){
        

        while (risposteUtente.length < 5){
            var numeroUtente = parseInt(prompt('Inserisci i numeri visti in precedenza'));
            risposteUtente.push(numeroUtente);
        } console.log(risposteUtente);
    }
    setTimeout(comparaRisposte,40000)
   function comparaRisposte(){
       var punteggio = 0;
        for(var i = 0; i < 5; i++){
            if(numeriRandom[i] == risposteUtente[i]){
                punteggio += 1;
                
            }
        } document.getElementById('punteggio').innerHTML = 'Hai totalizzato' + ' ' + punteggio + ' ' + 'punti'
   } 