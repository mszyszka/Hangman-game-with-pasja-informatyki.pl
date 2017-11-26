var haslo = "Bez pracy nie ma kołaczy";
haslo = haslo.toUpperCase();
var dlugosc = haslo.length;
var haslo1 = "";
var ileSkuch = "";


for (i = 0; i < dlugosc; i++)
{
    if (haslo.charAt(i) == " ") haslo1 = haslo1 + " ";
    else haslo1 = haslo1 + "-";
}



function wypiszHaslo() 
{
    document.getElementById("plansza").innerHTML = haslo1;
}
window.onload = start;

var lettersArry = new Array(35);
lettersArry[0] = "A";
lettersArry[1] = "Ą";
lettersArry[2] = "B";
lettersArry[3] = "C";
lettersArry[4] = "Ć";
lettersArry[5] = "D";
lettersArry[6] = "E";
lettersArry[7] = "Ę";
lettersArry[8] = "F";
lettersArry[9] = "G";
lettersArry[10] = "H";
lettersArry[11] = "I";
lettersArry[12] = "J";
lettersArry[13] = "K";
lettersArry[14] = "L";
lettersArry[15] = "Ł";
lettersArry[16] = "M";
lettersArry[17] = "N";
lettersArry[18] = "Ń";
lettersArry[19] = "O";
lettersArry[20] = "Ó";
lettersArry[21] = "P";
lettersArry[22] = "Q";
lettersArry[23] = "R";
lettersArry[24] = "S";
lettersArry[25] = "Ś";
lettersArry[26] = "T";
lettersArry[27] = "U";
lettersArry[28] = "V";
lettersArry[29] = "W";
lettersArry[30] = "X";
lettersArry[31] = "Y";
lettersArry[32] = "Z";
lettersArry[33] = "Ż";
lettersArry[34] = "Ź";


function start(){
    
    var trescDiva = "";
    
    for(i=0; i<=34; i++)
    {
        var element = "lit" + i;
        
        trescDiva = trescDiva + '<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">'+lettersArry[i]+'</div>';
        
        if( ((i+1)%7)==0)
        {
            trescDiva = trescDiva + '<div class="clearfix"></div>';
        }
        
    }

    document.getElementById("alfabet").innerHTML = trescDiva;
    
    wypiszHaslo();
}

String.prototype.ustawZnak = function(miejsce, znak)
    {
        if(miejsce > this.length-1) return this.toString();
        else return this.substr(0,miejsce) +znak+ this.substr(miejsce+1);
    }
    
    function sprawdz(nr)
    {   
        var trafiona = false;
        
        for (i=0; i<dlugosc; i++)
        {
            
           if(haslo.charAt(i)==lettersArry[nr])
           {
                haslo1 = haslo1.ustawZnak(i,lettersArry[nr]);
               trafiona = true;
           } 
            
        }
        
        if (trafiona == true)
        {
            var element = "lit" +nr;
            document.getElementById(element).style.background = "#003300";
            document.getElementById(element).style.color = "#00C000";
            document.getElementById(element).style.border = "3px solid #00C000";
            document.getElementById(element).style.cursor = "default";
            
            wypiszHaslo();
        }
        else 
        {
            var element = "lit" +nr;
            document.getElementById(element).style.background = "#330000";
            document.getElementById(element).style.color = "#C00000";
            document.getElementById(element).style.border = "3px solid #C00000";
            document.getElementById(element).style.cursor = "default";
            document.getElementById(element).setAttribute("onclick", ";");
            
            ileSkuch++;
            var obraz = "img/s" +ileSkuch+".jpg";
            document.getElementById("szubienica").innerHTML= '<img src="'+obraz+'" alt="obrazek" />';
        }
        
        //wygrana
        if(haslo == haslo1)
        {
            document.getElementById("alfabet").innerHTML = "Tak jest!" + haslo+ 
                '<br /><br /><span class="reset" onclick="location.reload()" >JESZCZE RAZ</span>';
        }
        //przegrana 
        if(ileSkuch>=9) 
        {
            document.getElementById("alfabet").innerHTML = "No niestety. Hasło to: " + haslo+ 
                '<br /><br /><span class="reset" onclick="location.reload()" >JESZCZE RAZ</span>';
        }
        
    }