const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Bruno", nota: 5 },
  { nome: "Carlos", nota: 6 },
  { nome: "Daniela", nota: 9 },
  { nome: "Eduardo", nota: 4 }
];

const alunosAprovados = (listaDeAlunos) => {
  return listaDeAlunos.filter(aluno => aluno.nota >= 6);
};

console.log(alunosAprovados(alunos));