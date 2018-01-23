<?php

//Conectando ao banco de dados
$conexao = mysqli_connect('localhost','root','skrillex','mercado');
if (mysqli_connect_errno())
    trigger_error(mysqli_connect_error());

//Consultando banco de dados
$qryLista = mysqli_query($conexao, "SELECT * FROM produtos");
$vetor = array();
while($resultado = mysqli_fetch_assoc($qryLista)){
    $vetor[] = array_map("utf8_encode", $resultado);
//tranformando dados para utf8
}

//Passando vetor em forma de json
echo json_encode($vetor);

