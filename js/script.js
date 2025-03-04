document.addEventListener("DOMContentLoaded", () => {
  const stats = document.querySelectorAll(".stat");

  function animateStats() {
    stats.forEach((stat) => {
      const max = parseInt(stat.getAttribute("data-max"), 10);
      let value = 0;

      const updateStat = () => {
        if (value < max) {
          value += Math.ceil(max / 100); // Incremento proporcional
          if (value > max) value = max;
          stat.textContent = value.toLocaleString("pt-BR"); // Formatação
        } else {
          setTimeout(() => {
            value = 0; // Reinicia
            updateStat();
          }, 2000); // Pausa antes de reiniciar
          return;
        }
        requestAnimationFrame(updateStat);
      };

      updateStat();
    });
  }

  animateStats();
});

function animateCounter(id, start, end, duration) {
  let current = start;
  const increment = (end - start) / (duration / 50); // Incremento baseado na duração
  const element = document.getElementById(id);
  const interval = setInterval(() => {
    current += increment;
    if (current >= end) {
      current = end; // Garante que o valor final seja preciso
      clearInterval(interval);
    }
    element.textContent = Math.floor(current); // Atualiza o número
  }, 50); // Atualiza a cada 50ms
}

// Inicializa a contagem para cada estatística
window.onload = function () {
  animateCounter("animais-adotados", 0, 1200, 3000); // Contagem de 0 a 1200 em 3 segundos
  animateCounter("animais-achados", 0, 750, 3000); // Contagem de 0 a 750 em 3 segundos
  animateCounter("outros-estatisticas", 0, 350, 3000); // Contagem de 0 a 350 em 3 segundos
};

document.addEventListener("DOMContentLoaded", function () {
  const chatbotToggle = document.getElementById("chatbot-toggle");
  const chatbotBox = document.getElementById("chatbot-box");
  const closeChatbot = document.getElementById("close-chatbot");
  const sendMessage = document.getElementById("send-message");
  const chatbotMessages = document.getElementById("chatbot-messages");
  const chatbotInput = document.getElementById("chatbot-input");

  // Mostrar ou esconder o chatbot
  chatbotToggle.addEventListener("click", () => {
    chatbotBox.style.display =
      chatbotBox.style.display === "flex" ? "none" : "flex";
  });

  closeChatbot.addEventListener("click", () => {
    chatbotBox.style.display = "none";
  });

  // Respostas automáticas
  const responses = {
    olá: "Olá! Como posso ajudar você?",
    adotar:
      "Para adotar um pet, acesse a seção de adoção ou clique no botão abaixo para falar conosco no WhatsApp.",
    contato:
      "Você pode nos enviar uma mensagem pelo formulário ou pelo nosso WhatsApp.",
    whatsapp:
      "Clique aqui para conversar conosco no WhatsApp: <a href='https://wa.me/559299084185?text=Olá! Gostaria de mais informações.' target='_blank'>Falar no WhatsApp</a>",
  };

  // Enviar mensagem
  sendMessage.addEventListener("click", () => {
    const userMessage = chatbotInput.value.trim().toLowerCase();
    if (userMessage) {
      // Adicionar mensagem do usuário
      chatbotMessages.innerHTML += `<div><strong>Você:</strong> ${chatbotInput.value}</div>`;

      // Responder mensagem
      const botResponse =
        responses[userMessage] ||
        "Desculpe, não entendi. Você pode perguntar sobre adoção ou contato!";
      chatbotMessages.innerHTML += `<div><strong>Bot:</strong> ${botResponse}</div>`;

      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
      chatbotInput.value = "";
    }
  });
});

let darkMode = true;

// Aplica o tema salvo ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.documentElement.classList.add("light");
    darkMode = false; // Considerando que o padrão é darkMode = true
  }
});

// Adiciona o listener para os botões de toggle
document.querySelectorAll(".toggle-mode").forEach((button) => {
  button.addEventListener("click", (event) => {
    document.documentElement.classList.toggle("light");
    const mode = darkMode ? "light" : "dark";
    event.currentTarget.querySelector(
      "span"
    ).textContent = `Ativar ${mode} mode!`;
    darkMode = !darkMode;
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  });
});
