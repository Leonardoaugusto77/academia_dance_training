document.getElementById("menuToggle").addEventListener("click", function () {
  var nav = document.querySelector(".nav_header");
  nav.classList.toggle("active");
});

// Array de feedbacks dos alunos
const feedbacks = [
  {
    photo: "Imgs/Feedbacks/1.jpg",
    comment: '"Super indico, energia fantástica!"',
    name: "Vanessa Almeida",
  },
  {
    photo: "Imgs/Feedbacks/3.jpg",
    comment: '"Melhor academia da região sem dúvidas 👏🏼"',
    name: "Ana Claudia Pimentel",
  },
  {
    photo: "Imgs/Feedbacks/4.jpg",
    comment:
      '"Maravilhoso super recomendo! A melhor academia os professores são de mais! ❤️"',
    name: "Ariany Marchiorato",
  },
  {
    photo: "Imgs/Feedbacks/5.jpg",
    comment:
      '"Professoras ótimas, super animadas! Estou adorando fazer as aulas!"',
    name: "Ana Lagnez",
  },
  {
    photo: "Imgs/Feedbacks/7.jpg",
    comment: '"Como eu amo esta energia deste lugar."',
    name: "Edina Oliveira",
  },
  {
    photo: "Imgs/Feedbacks/8.jpg",
    comment: '"A melhor! 👏👏"',
    name: "Roseli Aparecida",
  },
];

// Função para atualizar o feedback
// Função para atualizar o feedback
function updateFeedback(index) {
  const feedback = feedbacks[index];
  const feedbackPhoto = document.getElementById("feedbackPhoto");
  const feedbackComment = document.getElementById("feedbackComment");
  const feedbackName = document.getElementById("feedbackName");

  feedbackPhoto.src = feedback.photo;
  feedbackComment.innerHTML = feedback.comment; // Usando innerHTML para exibir aspas duplas corretamente
  feedbackName.textContent = feedback.name;
}

// Variáveis para navegação
let currentIndex = 0;

// Atualiza o feedback inicial
updateFeedback(currentIndex);

// Função para navegação anterior
function showPreviousFeedback() {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : feedbacks.length - 1;
  updateFeedback(currentIndex);
}

// Função para navegação seguinte
function showNextFeedback() {
  currentIndex = currentIndex < feedbacks.length - 1 ? currentIndex + 1 : 0;
  updateFeedback(currentIndex);
}

// Adiciona event listeners para os botões de navegação
document
  .querySelector(".feedback_nav_prev")
  .addEventListener("click", showPreviousFeedback);
document
  .querySelector(".feedback_nav_next")
  .addEventListener("click", showNextFeedback);

// Função para trocar automaticamente o feedback a cada 5 segundos
function startAutoSlide() {
  setInterval(() => {
    showNextFeedback();
  }, 5000); // 5000 milissegundos = 5 segundos
}

// Inicia o slide automático
startAutoSlide();
