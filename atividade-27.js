/*
Imagine que você está criando uma pequena ferramenta para alunos acompanharem seu desempenho escolar. 
A ideia é que o aluno insira suas duas notas principais e o sistema exiba a média aritmética entre elas.

Sua tarefa é criar uma arrow function chamada calcularMedia que receba duas notas e retorne a média entre elas.
*/
const calcularMedia = (nota1, nota2) => { return ((Number(nota1) + Number(nota2)) / 2) }
console.log(calcularMedia(7,9))