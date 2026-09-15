const buttons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.section');

function showSection(id){
  sections.forEach(s => s.classList.toggle('active', s.id === id));
  buttons.forEach(b => b.classList.toggle('active', b.dataset.section === id));
  window.scrollTo({top:0, behavior:'smooth'});
}

buttons.forEach(btn => btn.addEventListener('click', () => showSection(btn.dataset.section)));

document.querySelectorAll('[data-go]').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    showSection(el.dataset.go);
  });
});

const players = [
  ['01','Lucas Almeida','Goleiro'],
  ['02','Pedro Henrique','Lateral'],
  ['03','Rafael Costa','Zagueiro'],
  ['04','Caio Martins','Zagueiro'],
  ['05','Matheus Lima','Volante'],
  ['06','Bruno Reis','Lateral'],
  ['07','Gabriel Santos','Meia'],
  ['08','João Vitor','Meio-campo'],
  ['09','Miguel Rocha','Atacante'],
  ['10','Enzo Ferreira','Meia'],
  ['11','Davi Oliveira','Atacante'],
  ['12','André Souza','Goleiro'],
  ['14','Felipe Ramos','Zagueiro'],
  ['17','Thiago Alves','Ponta'],
  ['20','Arthur Mendes','Meia'],
  ['21','Ruan Silva','Atacante'],
  ['23','Gustavo Nunes','Volante'],
  ['27','Victor Hugo','Ponta']
];

document.getElementById('squad').innerHTML = players.map(p => `
  <article class="player">
    <div class="player-number">${p[0]}</div>
    <div class="player-name">${p[1]}</div>
    <div class="player-pos">${p[2]}</div>
  </article>
`).join('');

function interest(item){
  alert('Interesse registrado: ' + item + '\\n\\nQuando você quiser, podemos trocar este botão por WhatsApp, formulário ou checkout.');
}

function buyTicket(sector){
  alert('Ingresso selecionado: ' + sector + '\\n\\nA venda ainda será ativada quando você definir a data e o horário do jogo.');
}
