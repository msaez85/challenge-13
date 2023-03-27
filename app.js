/*ejercicio 1*/
let saludo1 = prompt('ingrese la primera parte de su saludo');
let saludo2 = prompt('ingrese la segunda parte de su saludo');
document.write('Ejercicio 1 <br/>');
document.write(saludo1 + ' ' + saludo2 + '<br/>');
document.write(saludo1);
document.write(' ');
document.write(saludo2);
document.write('<br/>');
document.write('<br/>');

/*ejercicio 2*/
let var1 = parseInt(prompt('ingrese el primer valor'));
let var2 = parseInt(prompt('ingrese el segundo valor'));
document.write('Ejercicio 2 <br/>');
document.write('el primer numero es: ' + var1 + '<br/>');
document.write('el segundo numero es: ' + var2 + '<br/>');
document.write('la suma de los dos primeros numeros es: '  + (var1 + var2) + '<br/>');
document.write('la resta de los dos primeros numeros es: '  + (var1 - var2) + '<br/>');
document.write('el producto de los dos primeros numeros es: '  + (var1 * var2) + '<br/>');
document.write('la division de los dos primeros numeros es: '  + (var1 / var2) + '<br/>');
document.write('el primer numero (' + var1 + ') es ' + ((var1 % 2) == 0?'par':'impar') + '<br/>');
document.write('el segundo numero (' + var2 + ') es ' + ((var2 % 2) == 0?'par':'impar') + '<br/>');
let var3 = parseInt(prompt('ingrese el tercer valor'));
document.write('<br/>');
document.write('el tercer numero es: ' + var3 + '<br/>');
document.write('la suma de los tres numeros es: '  + (var1 + var2 + var3) + '<br/>');
document.write('la resta de los tres numeros es: '  + (var1 - var2 - var3) + '<br/>');
document.write('el producto de los tres numeros es: '  + (var1 * var2 * var3) + '<br/>');


