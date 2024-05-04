//alert("Hello :D ");
//console.log("Info do konsoli");

//zad 3
//let a=10;
//let b=20;
//let c=23.3;
//let wynik=a+b+c;
//console.log("Wynik dodawania to: " + wynik)
//alert(a+b+c);

//document.getElementById("Zad3").innerHTML="Wynik dodawania to: " + wynik;

//zad 4
//for (let i = 0; i <= 101; i++) {
//    if (i%2===0) {
 //       console.log(i);
//    }
//}

//zad 5
//function obliczPoleTrojkata(a, b, c) {
    // Obliczenie połowy obwodu trójkąta
//    const p = (a + b + c) / 2;

    // Obliczenie pola trójkąta według wzoru
//   const pole = Math.sqrt(p * (p - a) * (p - b) * (p - c));

//    return pole;
//}

// Wprowadź długości boków
//const a = parseFloat(prompt("Podaj długość boku a:"));
//const b = parseFloat(prompt("Podaj długość boku b:"));
//const c = parseFloat(prompt("Podaj długość boku c:"));

// Sprawdzenie, czy z podanych boków można zbudować trójkąt
//if (a + b > c && a + c > b && b + c > a) {
//    console.log(`Pole trójkąta wynosi: ${obliczPoleTrojkata(a, b, c)}`);
//    document.getElementById("Zad5").innerHTML = `Pole trójkąta wynosi: <strong>${obliczPoleTrojkata(a, b, c)}</strong>`;
//} else {
//    console.log("Nie zbudujesz z tych boków trójkąta!");
//    document.getElementById("Zad5").innerHTML = "Nie zbudujesz z tych boków trójkąta!";
//}

//zad 6
//a = prompt("Jak się nazywasz? ")
//console.log(a);
//alert("Cześć " + a);

//zad 7
// Poproś użytkownika o podanie dwóch liczb całkowitych
//const liczba1 = parseInt(prompt("Podaj pierwszą liczbę całkowitą:"));
//const liczba2 = parseInt(prompt("Podaj drugą liczbę całkowitą:"));
//const suma = liczba1 + liczba2;

// Wyświetl wynik w konsoli

//console.log(`Wynik dodawania: ${suma}`);
//alert("Suma twoich liczb całkowitych to " + suma);

//zad 8
// Pobierz trzy liczby od użytkownika

//let num1 = parseFloat(prompt("Podaj pierwszą liczbę:"));
//let num2 = parseFloat(prompt("Podaj drugą liczbę:"));
//let num3 = parseFloat(prompt("Podaj trzecią liczbę:"));

// Znajdź największą liczbę

//let maxNum = Math.max(num1, num2, num3);

//console.log("Największa liczba to: " + maxNum);
//document.getElementById("Zad8").innerHTML="Największa z twoich podanych liczb to : " + maxNum;

//zad 9
// Pobierz dwie liczby od użytkownika
//let num1 = parseInt(prompt("Podaj pierwszą liczbę:"));
//let num2 = parseInt(prompt("Podaj drugą liczbę:"));

// Algorytm Euklidesa do obliczenia NWD

//function nwd(a, b) {
//    if (b === 0) {
//        return a;
//    } else {
//        return nwd(b, a % b);
//    }
//}

//let wynik = nwd(num1, num2);

//console.log("Największy wspólny dzielnik to: " + wynik);
//document.getElementById("Zad9").innerHTML="Największy wspólny dzielnik liczb podanych przez ciebie to : " + wynik;

 // zad 1 Lab 4
//for (let i = 10; i >= 1; i--) {
//    console.log(i);
//}
//console.log("Happy New Year!");

//let j = 10;
//while (j >= 1) {
//    console.log(j);
//    j--;
//}
//console.log("Happy New Year!");

 // zad 2 lab 4

// function silnia(n) {
//    if (n > 1)
//      return n * silnia(n-1);
//    else
//      return 1;
//  }
//   
//  var n = prompt("n:", "");
//    console.log(n + "! = " + silnia(n));

// zad 3 lab 4



function CzyPelnoletni(n){
    const wiek = parseFloat(prompt("Ile masz lat?"))
    if (n>= 18){
        return true;
    }else{
    window.open("https://www.w3schools.com/jsref/met_win_open.asp","self");
    }
}
CzyPelnoletni(wiek);

//zad 4 lab 4

function ZmienTlo(btn){
    const przyciski=document.getElementsByClassName("btn-ex4");
    //console.log(przyciski);
    przyciski.forEach(przyciski => {
        przyciski.style.backgroundColor = "";
        
    });
    btn.style.backgroundColor = "#00c300";
}
