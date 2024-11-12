const votingForm = document.getElementById('votingForm');
const chapa1Count = document.getElementById('chapa1');
const chapa2Count = document.getElementById('chapa2');
const chapa3Count = document.getElementById('chapa3');
const chapa4Count = document.getElementById('chapa4');

let votes = {
  "Chapa 1": 0,
  "Chapa 2": 0,
  "Chapa 3": 0,
  "Chapa 4": 0,
};

votingForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const turma = document.getElementById('class').value;
  const chapa = document.querySelector('input[name="chapa"]:checked').value;
  
  if (name && turma && chapa) {
    // Contabiliza o voto para a chapa escolhida
    votes[chapa] += 1;
    updateResults();
    
    // Limpa o formulário
    votingForm.reset();
    alert('Voto registrado com sucesso!');
  } else {
    alert('Por favor, preencha todos os campos!');
  }
});

function updateResults() {
  chapa1Count.textContent = votes["Chapa 1"];
  chapa2Count.textContent = votes["Chapa 2"];
  chapa3Count.textContent = votes["Chapa 3"];
  chapa4Count.textContent = votes["Chapa 4"];
}
