// ═══════════════════════════════════════════
// VIGIO — CHAT IA
// ═══════════════════════════════════════════

let chatHistory = [];
let isLoading = false;
let recognition = null;
let isRecording = false;

// ── SEND MESSAGE ──
async function sendMessage() {
  const input = document.getElementById("chat-input");
  const text = input.value.trim();
  if (!text || isLoading) return;

  input.value = "";
  autoResize(input);
  addMessage("user", text);
  chatHistory.push({ role: "user", content: text });

  setLoading(true);
  showTyping();

  try {
    const reply = await VigioAI.ask(text, chatHistory.slice(0, -1));
    removeTyping();
    addMessage("assistant", reply);
    chatHistory.push({ role: "assistant", content: reply });
  } catch (err) {
    removeTyping();
    addMessage("assistant", "❌ Impossible de joindre l'assistant. Vérifiez votre connexion.\n\n**En cas d'urgence, appelez le 15, 18 ou 112.**");
    console.error(err);
  }

  setLoading(false);
}

function sendSuggestion(text) {
  document.getElementById("chat-input").value = text;
  sendMessage();
}

function newChat() {
  chatHistory = [];
  const msgs = document.getElementById("chat-messages");
  msgs.innerHTML = `
    <div class="message msg-assistant">
      <div class="msg-avatar">⛑</div>
      <div class="msg-bubble">
        <p>Nouvelle conversation. Comment puis-je vous aider ?</p>
        <p><strong>En cas d'urgence, appelez le 15, 18 ou 112.</strong></p>
      </div>
    </div>
  `;
}

// ── DOM HELPERS ──
function addMessage(role, text) {
  const container = document.getElementById("chat-messages");
  const div = document.createElement("div");
  div.className = `message msg-${role}`;

  const avatar = role === "assistant" ? "⛑" : "👤";
  const html = markdownToHtml(text);

  div.innerHTML = `
    <div class="msg-avatar">${avatar}</div>
    <div class="msg-bubble">${html}</div>
  `;

  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function showTyping() {
  const container = document.getElementById("chat-messages");
  const div = document.createElement("div");
  div.className = "message msg-assistant msg-typing";
  div.id = "typing-indicator";
  div.innerHTML = `
    <div class="msg-avatar">⛑</div>
    <div class="msg-bubble">
      <div class="typing-dots">
        <span></span><span></span><span></span>
      </div>
    </div>
  `;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function removeTyping() {
  document.getElementById("typing-indicator")?.remove();
}

function setLoading(state) {
  isLoading = state;
  document.getElementById("send-btn").disabled = state;
}

// ── KEYBOARD ──
function handleKey(e) {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
}

function autoResize(el) {
  el.style.height = "auto";
  el.style.height = Math.min(el.scrollHeight, 140) + "px";
}

// ── MARKDOWN SIMPLE ──
function markdownToHtml(text) {
  return text
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, "<code>$1</code>")
    .replace(/^(\d+)\.\s(.+)$/gm, "<li>$2</li>")
    .replace(/(<li>.*<\/li>)/gs, "<ol>$1</ol>")
    .replace(/^-\s(.+)$/gm, "<li>$1</li>")
    .replace(/\n\n/g, "</p><p>")
    .replace(/\n/g, "<br>")
    .replace(/^/, "<p>").replace(/$/, "</p>")
    .replace(/<p><\/p>/g, "");
}

// ── VOICE INPUT ──
function toggleVoiceInput() {
  if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
    alert("La reconnaissance vocale n'est pas supportée par ce navigateur.");
    return;
  }

  if (isRecording) {
    recognition?.stop();
    return;
  }

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SpeechRecognition();
  recognition.lang = "fr-FR";
  recognition.interimResults = true;
  recognition.maxAlternatives = 1;

  const btn = document.getElementById("voice-input-btn");
  const input = document.getElementById("chat-input");

  recognition.onstart = () => {
    isRecording = true;
    btn.classList.add("recording");
    btn.textContent = "⏹";
  };

  recognition.onresult = (e) => {
    const transcript = Array.from(e.results)
      .map(r => r[0].transcript)
      .join("");
    input.value = transcript;
    autoResize(input);
  };

  recognition.onend = () => {
    isRecording = false;
    btn.classList.remove("recording");
    btn.textContent = "🎤";
    if (input.value.trim()) sendMessage();
  };

  recognition.onerror = () => {
    isRecording = false;
    btn.classList.remove("recording");
    btn.textContent = "🎤";
  };

  recognition.start();
}
