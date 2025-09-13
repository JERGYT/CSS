<?php
$estado = $_GET["estado"];
$valor = $_GET["valor"];
$numero = $_POST['numero'];

echo "Estado: $estado $valor<br>";
$mod = $numero % 2;
if ($mod == 0) {
    echo "El número $numero es par";
} else {
    echo "El número $numero es impar";
}
?>