<?php
$nombre = "Juan"; //string
$apellido = 'Pérez'; //string
echo $nombre . " " . $apellido . "<br>"; //Concatenación
echo "$nombre $apellido<br>"; //Interpolación
echo '$nombre $apellido<br>'; //Interpolación no funciona
$edad = 30; //integer
$promedio = 85.5; //float
$es_estudiante = true; //boolean
$ejemplo_nulo = null; //null

$numero = array(1, 2, 3, 4, 5, 6); //array

$numero = [1, 2, 3, 4, 5, 6]; //array (forma corta)

$lista = ["juan", 12, 3.5, true, null, []]; //array con diferentes tipos de datos

echo $numero[0] . " " . $numeros[1] . "<br>"; //Acceder al primer elemento del array

$persona = [
    "nombre" => "Ana",
    "apellido" => "García",
    "edad" => 25,
    "es_estudiante" => false
];
echo $persona["nombre"] . " " . $persona["apellido"] . "<br>"; //Acceder a elementos del array asociativo

define(constant_name: 'TITULO', value: "HOLA"); //Constante

echo TITULO . "<br>"; //Imprimir constante

const SUB_TITULO = "PHP es genial"; //Constante (otra forma)
echo SUB_TITULO . "<br>";



?>