var mat = [
  [],
  [],
  [],
  [],
  []
];
var imc = 0;
var acima = 0;
var abaixo = 0;

var maisnovo = 900;
var maisvelho = 0;
var indicenovo = 0;
var indicevelho = 0;
var mediaidade = 0;

var maisbaixo = 900;
var maisalto = 0;
var indicealto = 0;
var indicebaixo = 0;
var mediaaltura = 0;

var omi = 0;
var muie = 0;

var form = function() {
  var nome = prompt("Informe seu nome:");
  mat[0].push(nome);
  var idade = parseInt(prompt("Informe sua idade:"));
  mat[1].push(idade);
  var sexo = prompt("Informe seu sexo: ").toUpperCase();
  mat[2].push(sexo);
  var h = parseFloat(prompt("Informe sua altura: "));
  mat[3].push(h);
  var w = parseFloat(prompt("Informe o peso: "));
  mat[4].push(w);
}

var imcCalculo = function(x) {
  imc = mat[4][x] / (mat[3][x] * mat[3][x]);
  if (mat[2][x] == "M") {
    if (imc < 20) {
      abaixo++;
    } else if (imc > 24.9) {
      acima++;
    }
  } else {
    if (imc < 19.0) {
      abaixo++;
    } else if (imc > 23.9) {
      acima++;
    }
  }
}

var idadeCalculo = function(x) {

  if (mat[1][x] > maisvelho) {
    maisvelho = mat[1][x];
    indicevelho = x;
  }
  if (mat[1][x] < maisnovo) {
    maisnovo = mat[1][x];
    indicenovo = x;
  }
  mediaidade += mat[1][x];
}

var alturaCalculo = function(x) {
  if (mat[3][x] > maisvelho) {
    maisbaixo = mat[3][x];
    indicealto = x;
  }
  if (mat[3][x] < maisnovo) {
    maisalto = mat[3][x];
    indicebaixo = x;
  }
  mediaaltura += mat[3][x];
}

var sexoCalculo = function(x) {
  if (mat[2][x] == 'M') {
    omi++;
  } else {
    muie++;
  }
}

for (var x = 0; x < 2; x++) {
  form();
  imcCalculo(x);
  idadeCalculo(x);
  alturaCalculo(x)
  sexoCalculo(x)
}
var porcentagem = (omi* 100) / x;

alert(mat[0][indicevelho] + " é a pessoas mais velha com " + mat[1][indicevelho] + " anos\n" + mat[0][indicenovo] + " é a pessoa mais nova com " + mat[1][indicenovo] + " anos.\n" + "Há " + acima + " pessoas acima do peso e " + abaixo + " pessoas abaixo do peso.\n" + mediaidade / 2 + " é a média de idade.\n" + mat[0][indicealto] + " é a pessoa mais alta com " + mat[3][indicealto] + "m de altura.\n" + mat[0][indicebaixo] + " é a pessoa mais baixa com " + mat[3][indicebaixo] + "m de altura.\n" + mediaaltura / 2 + "m é a média de altura.\n" + porcentagem + "% das pessoas são homens.\n" + (100 - porcentagem) + "% das pessoas são mulheres.");

console.log(mat);
