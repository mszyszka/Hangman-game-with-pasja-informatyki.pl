var haslo = "Bez pracy nie ma kołaczy";
haslo = haslo.toUpperCase();
var dlugosc = haslo.length;
var haslo1 = "";


for (i = 0; i < dlugosc; i++) {
    if (haslo.charAt(i) == " ") haslo1 = haslo1 + " ";
    else haslo1 = haslo1 + "-";
}



function wypiszHaslo() {
    document.getElementById("plansza").innerHTML = haslo1;
}
window.onload = start;

function start(){
    
    var trescDiva = "";
    
    for(i=0; i<=34; i++){
        trescDiva = trescDiva + '<div class="litera">A</div>';
    }
    
    document.getElementById("alfabet").innerHTML = trescDiva;
    
    wypiszHaslo();
}