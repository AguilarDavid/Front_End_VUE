var numero1 = parseInt(prompt("Ingrese el primer dígito"));
var numero2 = parseInt(prompt("Ingresa el segundo dígito"));

if(numero1 > numero2){
    alert("el número " + numero1 +" es mayor que " + numero2);
} else if(numero1 == numero2){
    alert("Los dos números son iguales");
} else{
    alert("el número " + numero2 + " es mayor que " + numero1)
}