entrada ();

validacao_op_valida ();

calcula ();

validacao_sair ();

// ---------------- dados de entrada

function entrada(){
 alert("Vamos calcular?");
 funcao = prompt("Escolha a operação que você deseja usar: 'soma', 'subtração', 'multiplicação' e 'divisão'. \n\n Se não quiser calcular nada, basta digitar 'sair'.");
}

// ---------------- calculadora

function calcula () {
  while (funcao === "soma" || funcao === "subtração" || funcao === "multiplicação" || funcao === "divisão") {
  switch (funcao) {
  case 'soma':
    soma ();
    break;
  case 'subtração':
  subtracao ();
  break;
  case 'multiplicação':
    multiplicacao ();
    break;
  case 'divisão':
   divisao ();
    break;
}}
}

// ---------------- funções das operações

function soma () {
  var valor1 = prompt("Digite o primeiro valor: ");
  var valor2 = prompt("Digite o segundo valor: ");
  var resultado = parseInt(valor1) + parseInt(valor2);
  print = alert("O resultado é: " + resultado + ".");
  funcao = prompt("Escolha a operação que você deseja usar: 'soma', 'subtração', 'multiplicação' e 'divisão'. \n\n Se não quiser calcular nada, basta digitar 'sair'.");
}

function subtracao () {
  alert ("Você escolheu a operação de SUBTRAÇÃO. Lembre que a ordem de entrada dos valores vai alterar o resultado.");
  var valor1 = prompt("Digite o primeiro valor: ");
  var valor2 = prompt("Digite o segundo valor: ");
  var resultado = parseInt(valor1) - parseInt(valor2);
  print = alert("O resultado é: " + resultado + ".");
  funcao = prompt("Escolha a operação que você deseja usar: 'soma', 'subtração', 'multiplicação' e 'divisão'. \n\n Se não quiser calcular nada, basta digitar 'sair'.");
}

function multiplicacao () {
  var valor1 = prompt("Digite o primeiro valor: ");
  var valor2 = prompt("Digite o segundo valor: ");
  var resultado = parseInt(valor1) * parseInt(valor2);
  print = alert("O resultado é: " + resultado + ".");
  funcao = prompt("Escolha a operação que você deseja usar: 'soma', 'subtração', 'multiplicação' e 'divisão'. \n\n Se não quiser calcular nada, basta digitar 'sair'.");
}

function divisao (){
  alert ("Você escolheu a operação de DIVISÃO. Lembre que a ordem de entrada dos valores vai alterar o resultado.");
  var valor1 = prompt("Digite o valor para o dividendo: ");
  var valor2 = prompt("Digite o valor para o divisor: ");
  var resultado = parseInt(valor1) / parseInt(valor2);
  print = alert("O resultado é: " + resultado + ".");
  funcao = prompt("Escolha a operação que você deseja usar: 'soma', 'subtração', 'multiplicação' e 'divisão'. \n\n Se não quiser calcular nada, basta digitar 'sair'.");
}

// ---------------- validações

function validacao_op_valida () {
  while (funcao != "soma" && funcao != "subtração" && funcao != "multiplicação" && funcao != "divisão" && funcao != "sair") {
  funcao = prompt("Operação inválida. \n\n Você so pode escolher entre: 'soma', 'subtração', 'multiplicação' e 'divisão'. \n\n Se não quiser calcular nada, basta digitar 'sair'."); }
}

function validacao_sair () {
  if (funcao === "sair") {
   print = alert("Até a próxima!");
}
}