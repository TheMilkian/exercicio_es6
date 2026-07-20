const alunos = [
  { nome: "João", nota: 7}, 
  { nome: "Márcio", nota: 4}, 
  { nome: "Júlia", nota: 9}, 
  { nome: "Carla", nota: 8}, 
  { nome: "Daniel", nota: 7},
  { nome: "Jonas", nota: 6},
  { nome: "Flávia", nota: 3},
];



const alunosAprovados = (listaDeAlunos) => {
  const aprovados = [];

  for (const aluno of listaDeAlunos) {
    if (aluno.nota >= 6) {
      aprovados.push(aluno);
    }
  }

  return aprovados;
};

console.log(alunosAprovados(alunos));