
var city1,city2,city3,city4,city5,city6,i;

city1 = prompt("Introduce el nombre de la ciudad");
city2 = prompt("Introduce el nombre de la ciudad");
city3 = prompt("Introduce el nombre de la ciudad");
city4 = prompt("Introduce el nombre de la ciudad");
city5 = prompt("Introduce el nombre de la ciudad");
city6 = prompt("Introduce el nombre de la ciudad");

city1 = "Barcelona";
city2 = "Madrid";
city3 = "Valencia";
city4 = "Malaga";
city5 = "Cadiz",
city6 = "Santander";



var barcelona = Array(9);
for ( i=0;i<barcelona.length; i++){
    barcelona[i]=city1.charAt(i);
}
var madrid = Array(6);
for ( i=0;i<madrid.length; i++){
    madrid[i]=city2.charAt(i);
}
var valencia = Array(8);
for ( i=0;i<valencia.length; i++){
    valencia[i]=city3.charAt(i);
}
var malaga = Array(6);
for ( i=0;i<malaga.length; i++){
    malaga[i]=city4.charAt(i);
}
var cadiz = Array(5);
for ( i=0;i<cadiz.length; i++){
    cadiz[i]=city5.charAt(i);
}
var santander = Array(9);
for ( i=0;i<santander.length; i++){
    santander[i]=city6.charAt(i);
}




for (i=barcelona.length-1; i>=0;i--){
    console.log(barcelona[i]);
    document.write(barcelona[i])
}
document.write("<br>");
for (i=madrid.length-1; i>=0;i--){
    console.log(madrid[i]);
    document.write(madrid[i]+"\n")
}
document.write("<br>");
for (i=valencia.length-1; i>=0;i--){
    console.log(valencia[i]);
    document.write(valencia[i])
}
document.write("<br>");
for (i=malaga.length-1; i>=0;i--){
    console.log(malaga[i]);
    document.write(malaga[i]+"\n")
}
document.write("<br>");
for (i=cadiz.length-1; i>=0;i--){
    console.log(cadiz[i]);
    document.write(cadiz[i])
}
document.write("<br>");
for (i=santander.length-1; i>=0;i--){
    console.log(santander[i]);
    document.write(santander[i]+"\n")
}










