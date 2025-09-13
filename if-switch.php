<?php
$edad = 20;
if ($edad < 18) {
    echo "Eres menor de edad.";
} elseif ($edad >= 18 && $edad < 65) {
    echo "Eres un adulto.";
} else {
    echo "Eres un adulto mayor.";
}

$categorias = 'a';
switch ($categorias) {
    case 'a':
        echo "Categoría A: Electrónica";
        break;
    case 'b':
        echo "Categoría B: Ropa";
        break;
    case 'c':
        echo "Categoría C: Alimentos";
        break;
    default:
        echo "Categoría no reconocida.";
        break;
}
?>