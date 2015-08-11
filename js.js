function fnIgnoreEnter(thisEvent)
{
    if(thisEvent.keyCode == 13) // enter key
    {
        sprawdz();
    }
}
var elementy = new Array('+','-','*','/');
var zakresliczenia = 1;
/////////////////////// MENUE       ////////////////////
/////////////////////// Czyszczenie ////////////////////
function czyszczenie(){
     document.getElementById('spr').value= "";
     document.getElementById('odpowiedz').innerHTML = "";
     document.getElementById('obliczono').innerHTML = ""; 
     document.getElementById('opinia').innerHTML = ""; 
}
       
/////////////////////// Losowanie ////////////////////

function losowanie(){
        zakres();
        czyszczenie();
        var pierwsza = Math.round(Math.random() * (document.getElementById("zakresLiczenia").value - 1)+1);
        var druga = Math.round(Math.random() * (document.getElementById("zakresLiczenia").value - 1)+1);
        var obliczenie;
        var form = document.getElementById('niewidzialny');
        var i = Math.round(Math.random() * (elementy.length-1));
        var z = document.getElementById('3');
        z.innerHTML = pierwsza + "  " + elementy[i] +"  " + druga +"  =";
        var wyn = document.getElementById('wynik');
        switch(elementy[i]){
        case '+':
           obliczenie = pierwsza+druga ;
                break;
        case '-':
           obliczenie = pierwsza-druga ;
                break;
        case '*':
           obliczenie = pierwsza*druga ;
                break;
        case '/':
           obliczenie = pierwsza/druga ;
                break;
        }  
        form.value = obliczenie;
    }

/////////////////////// SPRAWDZENIE ////////////////////

function sprawdz(){
     var p = document.getElementById('wy');
     var niewidz = document.getElementById('spr').value;
     var wyna = document.getElementById('niewidzialny').value;
     document.getElementById('odpowiedz').innerHTML = "Prawidlowa odpowiedz to:";
     document.getElementById('obliczono').innerHTML = wyna;

     if (wyna == niewidz){
       document.getElementById('opinia').innerHTML = "Twój wynik jest poprawny";
     }else document.getElementById('opinia').innerHTML = "oj oj coś poszło nie tak :( masz zły wynik";
}
 /////////////////////// Ustawianie Zakresu ////////////////////  
 /////////////////////// działania         ////////////////////
function zakres(){
    elementy = [];
    if(document.getElementById("plus").checked){
     elementy.push('+');
     }
    if(document.getElementById("minus").checked){
     elementy.push('-');
     }
    if(document.getElementById("razy").checked){
     elementy.push('*');
     }
    if(document.getElementById("dziel").checked){
     elementy.push('/');
     }
}
 /////////////////////// Wartości do obliczenia ////////////////////
function increment(){
    zakresliczenia = document.getElementById("zakresLiczenia").value; 
    zakresliczenia = parseInt(zakresliczenia) + 1;
    document.getElementById("zakresLiczenia").value = zakresliczenia;
}
function decrement(){
    zakresliczenia = document.getElementById("zakresLiczenia").value; 
    zakresliczenia = parseInt(zakresliczenia) - 1;
    document.getElementById("zakresLiczenia").value = zakresliczenia;    
}
