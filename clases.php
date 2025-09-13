<?php

interface FiguraGeometrica {
    public function area();
}

abstract class Model {
    private $id;
    abstract public function get($nameProperty);
    abstract public function set($nameProperty, $value);

    public function getId() {
        return $this->id;
    }
    public function setId($id) {
        $this->id = $id;
    }
}

class Rectangulo extends Model implements FiguraGeometrica {
    private $base = null;
    private $altura = null;
    
    public function __construct($id) {
        parent::setId($id);
    }
    public function set($nameProperty, $value) {
        $this->$nameProperty = $value;
    }
    public function get($nameProperty = null) {
        return $this->$nameProperty;
    }
    public function area(): int 
    {
        return $this->base * $this->altura;
    }
}

class Cuadrado implements FiguraGeometrica {
    public $arista = null;

    public function area(): int 
    {
        return $this->arista * $this->arista;
    }
}

class Triangulo implements FiguraGeometrica {
    private $base = null;
    private $altura = null;

    public function setBase($base): void
    {
        $this->base = $base;
    }
    public function setAltura($altura): void
    {
        $this->altura = $altura;
    }
    public function area(): float|int
    {
        return ($this->base * $this->altura) / 2;
    }
}

$cuadrado = new Cuadrado();
$cuadrado->arista = 4;
echo "Area del cuadrado: " . $cuadrado->area();

$triangulo = new Triangulo();
$triangulo->setBase(4);
$triangulo->setAltura(4);
echo "Area del Triangulo: " . $triangulo -> area();

$Rectangulo = new Rectangulo(1);
$Rectangulo->set("altura",4);
$Rectangulo->set("base",4);
echo "Area del Rectangulo: ". $Rectangulo -> area();
?>