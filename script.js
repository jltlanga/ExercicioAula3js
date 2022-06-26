let primeiroNome = prompt("Informe seu primeiro nome: ", "Julito");
let outrosNomes = prompt("Informe seu sobreNome ", "Langa");
let idade = parseInt(prompt("Informe sua idade: ", "97"));
let endereco = prompt("Informe seu CEP ", "37500-208");

const obj = {
  /*Create a object */ Nome: primeiroNome,
  SobreNome: outrosNomes,
  Idadde: idade,
  CEP: endereco,
};

console.log(
  `Olá ${primeiroNome} ${outrosNomes}, você informou que sua idade é de ${idade} anos. Você mora na cidade cujo CEP é ${endereco} `
);

console.table({
  Nome: primeiroNome,
  SobreNome: outrosNomes,
  Idadde: idade,
  CEP: endereco,
});
