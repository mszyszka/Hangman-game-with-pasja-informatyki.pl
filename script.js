var password = "Bez pracy nie ma kołaczy";
password = password.toUpperCase();
var password_length = password.length;
var fail_number = "0";
var password1 = "";
for (i = 0; i < password_length; i++) {
    if (password.charAt(i) == " ") password1 = password1 + " ";
    else password1 = password1 + "-";
}

function write_password() {
    document.getElementById("game-space").innerHTML = password1;
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

function start() {
    var div_content = "";
    for (i = 0; i < 35; i++) {
        var element = "letter" + i;
        div_content = div_content + '<div class="letter" onclick="check(' + i + ')" id="' + element + '">' + lettersArry[i] + '</div>';
        if ((i + 1) % 7 == 0) div_content = div_content + '<div class="clearfix"></div>';
    }
    document.getElementById("alphabet").innerHTML = div_content;
    write_password();
}
String.prototype.setSign = function (place, sign) {
    if (place > this.length - 1) return this.toString();
    else return this.substr(0, place) + sign + this.substr(place + 1);
}

function check(nr)
{    
    var hit = false;
    
    for (i = 0; i < password_length; i++)
    {
        if (password.charAt(i) == lettersArry[nr])
        {
            password1 = password1.setSign(i, lettersArry[nr]);
            hit = true;
        }
    }
    
    if (hit == true) 
    {
        var element = "letter" + nr;
        
        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.color = "#00C000";
        document.getElementById(element).style.border = "3px solid #00C000";
        document.getElementById(element).style.cursor = "default";
        
        write_password();
    }
    
    else {
         var element = "letter" + nr;
        
        document.getElementById(element).style.background = "#330000";
        document.getElementById(element).style.color = "#C00000";
        document.getElementById(element).style.border = "3px solid #C00000";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick", ";");
        
        fail_number++;
        var img = "img/s"+fail_number+".jpg";
        document.getElementById("szubienica").innerHTML = '<img src="'+img+'" alt="obraz" />'; 
    }
//    You won!
    if (password == password1)
    {
        document.getElementById("alphabet").innerHTML = "Tak jest! Podano prawidłowe hasło: " + password + '<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';    
    }
//    You lose!
    if (fail_number == 9)
     {
        document.getElementById("alphabet").innerHTML = "Przegrana! Prawidłowe hasło: " + password + '<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';    
    }
}
//Skończyłem na godzine i siedemnastu minutach