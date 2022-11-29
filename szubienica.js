var haslo = "ala ma kota i kot ma ale";
haslo = haslo.toUpperCase();
var haslo1 = "";

function szyfrowanie_hasla(){
    for(i = 0; i<haslo.length; i++){
        if(haslo.charAt(i) == " "){
            haslo1 += " "
        }
        else{
            haslo1 += "-"
        }
    }
}

szyfrowanie_hasla();

function wypisz_haslo(){
    document.getElementById("plansza").innerHTML = haslo1;
}

function start(){
    var tresc_diva="";
    for(i = 0; i<26;i++){
    var element = ""
    element += 'lit' + i;
    if(i%7 == 0)
    {
        tresc_diva += '<div style="clear:both;"'
    }
        tresc_diva += '<div class="litera" onclick=sprawdz('+(i+65)+') id ='+element+
        ">"+String.fromCharCode(i+65)+'</div>';
    }

    document.getElementById("alfabet").innerHTML = tresc_diva;

    wypisz_haslo();
}

var dupa = 2;

function nic(){
}

function sprawdz(nr){
    var character = "";
    var element = 'lit'+ (nr - 65);
    var flaga = false;
    character = String.fromCharCode(nr);
    //alert(character);
    for(i = 0;i<haslo.length; i++){
        if(character == haslo.charAt(i)){
            haslo1 = haslo1.substr(0, i) + character + haslo1.substr(i+1);
            flaga = true;
        }
    }
    if(flaga == true){
        document.getElementById(element).style.background = "#1c910f";
        document.getElementById(element).style.cursor = "default";
        wypisz_haslo();
    }
    else{
        dupa++;
        document.getElementById("szubienica").innerHTML = '<img src = "img/'+dupa+'.png"/>';
        document.getElementById(element).style.background = "#400606";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick",";");
        if(dupa == 12){
            document.getElementById("alfabet").innerHTML = "koniec gry! Poprawne haslo to: "+ haslo;
        }
    }
    if(haslo == haslo1){
        document.getElementById("alfabet").innerHTML = "wygrana!";
    }
}



window.onload = start;
