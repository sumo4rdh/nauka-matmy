/////////////////////// SPRAWDZENIE ////////////////////

function sprawdz() {
    var p = document.getElementById('wy'), niewidz = document.getElementById('spr').value, wyna = document.getElementById('niewidzialny').value;
    document.getElementById('odpowiedz').innerHTML = "Prawidlowa odpowiedz to:";
    document.getElementById('obliczono').innerHTML = wyna;
    if (wyna == niewidz) {
        document.getElementById('opinia').innerHTML = "Twój wynik jest poprawny";
    } else {
        document.getElementById('opinia').innerHTML = "oj oj coś poszło nie tak :( masz zły wynik";

    }
}
function fnIgnoreEnter(thisEvent) {
    if (thisEvent.keyCode == 13) {
        sprawdz();
    }
}
var elementy = ['+', '-', '*', '/'];
var zakresliczenia = 1;
/////////////////////// MENUE       ////////////////////
/////////////////////// Czyszczenie ////////////////////
function czyszczenie() {
    document.getElementById('spr').value = "";
    document.getElementById('odpowiedz').innerHTML = "";
    document.getElementById('obliczono').innerHTML = "";
    document.getElementById('opinia').innerHTML = "";
}
       
/////////////////////// Losowanie ////////////////////

function losowanie() {
    zakres();
    czyszczenie();
    if(document.getElementById("licznik").innerHTML == ""){
    timer();
    }
    var pierwsza = Math.round(Math.random() * (document.getElementById("zakresLiczenia").value - 1) + 1), druga = Math.round(Math.random() * (document.getElementById("zakresLiczenia").value - 1) + 1), obliczenie, form = document.getElementById('niewidzialny'), i = Math.round(Math.random() * (elementy.length - 1)), z = document.getElementById('3'), wyn = document.getElementById('wynik');
    z.innerHTML = pierwsza + "  " + elementy[i] + "  " + druga + "  =";
    switch (elementy[i]) {
    case '+':
        obliczenie = pierwsza + druga;
        break;
    case '-':
        obliczenie = pierwsza - druga;
        break;
    case '*':
        obliczenie = pierwsza * druga;
        break;
    case '/':
        obliczenie = pierwsza / druga;
        break;
    }
    form.value = obliczenie;
}


 /////////////////////// Ustawianie Zakresu ////////////////////  
 /////////////////////// działania         ////////////////////
function zakres() {
    elementy = [];
    if (document.getElementById("plus").checked) {
        elementy.push('+');
    }
    if (document.getElementById("minus").checked) {
        elementy.push('-');
    }
    if (document.getElementById("razy").checked) {
        elementy.push('*');
    }
    if (document.getElementById("dziel").checked) {
        elementy.push('/');
    }
}
 /////////////////////// Wartości do obliczenia ////////////////////
function increment() {
    zakresliczenia = document.getElementById("zakresLiczenia").value; 
    zakresliczenia = parseInt(zakresliczenia) + 1;
    document.getElementById("zakresLiczenia").value = zakresliczenia;
}
function decrement() {
    zakresliczenia = document.getElementById("zakresLiczenia").value; 
    zakresliczenia = parseInt(zakresliczenia) - 1;
    document.getElementById("zakresLiczenia").value = zakresliczenia;    
}

/////////////////////// Timer ////////////////////
function timer(){
    
    var myVar = setInterval(function() {myTimer()}, 1000), d = 10;
    function myTimer() {
        d -= 1;
        if (d <= 0){
            document.getElementById("licznik").innerHTML = "";
            sprawdz();
            clearInterval(myVar);
            console.log("wyczyszczono");
        } else document.getElementById("licznik").innerHTML = d;
    }
}
/////////////////////// Nauczanie ////////////////////
function random() {
    var iloscObrazkow;
    iloscObrazkow = Math.round(Math.random() * (10 + 1));
    for(iloscObrazkow; iloscObrazkow >= 0; iloscObrazkow--){    
    var para = document.createElement("img");
    para.setAttribute('src',"img/kulka.png");
    para.setAttribute('class', "nieaktywny");
    para.setAttribute('onclick', "usun()");
         
   
    var element = document.getElementById("rand");
    element.appendChild(para);
    }
}
function usun(){
     var element = document.getElementById("rand");
     element.removeChild(element.childNodes[0]);
}