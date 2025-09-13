<?php
$numeros = [1, 2, 3, 4, 5, 6];
//Bucle for
echo"FOR----------------------------------------------------<br>";
for ($i = 0; $i < count($numeros); $i++) {
    echo $numeros[$i] . " ";
}

echo "while----------------------------------------------------<br>";
//Bucle while
$index = 0; 
while ($index < count($numeros)) {
    echo $numeros[$i] . " ";
    $index++;
}
echo "<br>do while----------------------------------------------------<br>";
//Bucle do while
$index = 0;
do {
    echo $numeros[$index] . " ";
    $index++;
} while ($index < count($numeros));

echo "<br>foreach----------------------------------------------------<br>";
//Bucle foreach
foreach ($numeros as $valor) {
    echo $valor . "<br>";    
}
foreach ($numeros as $index => $valor) {
    
    if ($index == 3) {
        continue; //salta el ciclo cuando index es 3
    }
    echo "$index: $valor<br>";    
}
?>