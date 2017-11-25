var haslo = "Bez pracy nie ma kołaczy";
haslo = haslo.toUpperCase();
var dlugosc = haslo.length;
var haslo1 = "";


for (i = 0; i < dlugosc; i++) {
    if (haslo[i] == " ") haslo1 = haslo1 + " ";
    else haslo1 = haslo1 + "-";
}



function wypiszHaslo() {
    document.getElementById("plansza").innerHTML = haslo1;
}
window.onload = wypiszHaslo;