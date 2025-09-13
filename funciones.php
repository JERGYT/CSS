<?php
function saludar($nombre) {
    return "Hola $nombre";
}
function saludo( $nombre=null ): void {
    echo"Hola $nombre";
}

echo saludar("Juan")."<br>";
saludo("Ana");
echo "<br>";
saludo();

function sumar(...$valores): int {
    $rstl = 0;
    for ($i = 0; $i < count($valores); $i++) {
        $rstl += $valores[$i];
    }
    return $rstl;
}
echo "<br>";
echo sumar(1,2,3,4,5)."<br>";

?>