let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];
// O exercicio pede um sort do menor para o maior para poder calcular a média, mas na exibição das notas pede para mostrar as notas ordenadas com sort() sem parametros, então o sort é feito duas vezes, uma para calcular a média e outra para exibir as notas ordenadas.
function calcularMediaAtletas(objAtletas) {
  for (let i = 0; i < objAtletas.length; i++) {
    let notas = objAtletas[i].notas;
    notas = notas.sort((a, b) => a-b);
    let notasValidas = notas.slice(1,4); //O slice é usado para pegar as notas do indice 1 ao 3, ou seja, as notas válidas, já que a nota do indice 0 é a menor e a nota do indice 4 é a maior depois do sort.
    let soma = 0;
    notasValidas.forEach(nota =>{
      soma += nota; //Aqui é feita a soma das notas válidas para depois calcular a média, usando o forEach para iterar sobre as notas válidas e somar cada nota na variável soma.
    })
    let media = soma / notasValidas.length;
    console.log(`Atleta: ${objAtletas[i].nome}
Notas Obtidas: ${objAtletas[i].notas.sort().join(",")}
Média Válida: ${media}
`); //Aqui é feita a exibição do nome do atleta, as notas obtidas ordenadas com sort() sem parametros e a média válida calculada. O join(",") é usado para transformar o array de notas em uma string separada por vírgula para facilitar a leitura. Foi feito a exibição exatamente como o exercicio pede.
}

}
calcularMediaAtletas(atletas);