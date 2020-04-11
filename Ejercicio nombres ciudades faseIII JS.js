
var city1,city2,city3,city4,city5,city6;
city1 = prompt("Introduce el nombre de la ciudad");
city2 = prompt("Introduce el nombre de la ciudad");
city3 = prompt("Introduce el nombre de la ciudad");
city4 = prompt("Introduce el nombre de la ciudad");
city5 = prompt("Introduce el nombre de la ciudad");
city6 = prompt("Introduce el nombre de la ciudad");

var arrayCiutatsModificades =[];
var arrayCiutats =[city1,city2,city3,city4,city5,city6]
for (var i = 0; i<arrayCiutats.length;i++){
    var pase=arrayCiutats[i].replace(/["a"]/g,"4");
    arrayCiutatsModificades[i]=pase;
}
arrayCiutatsModificades.sort();
console.log(arrayCiutatsModificades);
document.write(arrayCiutatsModificades);




/*
city1 = "Barcelona";
city2 = "Madrid";
city3 = "Valencia";
city4 = "Malaga";
city5 = "Cadiz",
city6 = "Santander";*/