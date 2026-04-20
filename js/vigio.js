// VIGIO — CONFIG & UTILITAIRES
const VIGIO_CONFIG = {
  ELEVENLABS_API_KEY: "sk_6e7a75914f63e645d6b95f7276eb8ff9ec0ef95a87983e44",
  ELEVENLABS_VOICE_ID: "YOUR_VOICE_ID",
  ELEVENLABS_MODEL: "eleven_multilingual_v2",
};

const VigioVoice = {
  _queue: [], _playing: false,
  async speak(text, priority = false) {
    if (priority) { this._queue = []; this._playing = false; window.__vigioAudio?.pause(); }
    this._queue.push(text);
    if (!this._playing) this._processQueue();
  },
  async _processQueue() {
    if (this._queue.length === 0) { this._playing = false; return; }
    this._playing = true;
    const text = this._queue.shift();
    try { await this._playText(text); } catch (e) { this._fallbackSpeak(text); }
    this._processQueue();
  },
  async _playText(text) {
    if (VIGIO_CONFIG.ELEVENLABS_VOICE_ID === "YOUR_VOICE_ID") throw new Error("No voice ID");
    const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VIGIO_CONFIG.ELEVENLABS_VOICE_ID}`, {
      method: "POST",
      headers: { "xi-api-key": VIGIO_CONFIG.ELEVENLABS_API_KEY, "Content-Type": "application/json" },
      body: JSON.stringify({ text, model_id: VIGIO_CONFIG.ELEVENLABS_MODEL, voice_settings: { stability: 0.5, similarity_boost: 0.75 } }),
    });
    if (!res.ok) throw new Error(`ElevenLabs ${res.status}`);
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    return new Promise((resolve, reject) => {
      const audio = new Audio(url);
      window.__vigioAudio = audio;
      audio.onended = () => { URL.revokeObjectURL(url); resolve(); };
      audio.onerror = reject;
      audio.play();
    });
  },
  _fallbackSpeak(text) {
    if (!window.speechSynthesis) return;
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "fr-FR"; u.rate = 0.9;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  },
  stop() { this._queue = []; this._playing = false; window.__vigioAudio?.pause(); window.speechSynthesis?.cancel(); },
};

const VigioAI = {
  SYSTEM_PROMPT: `Tu es Vigio, un assistant spécialisé en premiers secours et gestes d'urgence.
Tu réponds en français, avec clarté et concision.
Tu fournis des instructions précises, étape par étape.
Tu rappelles TOUJOURS d'appeler le 15 (SAMU), 18 (Pompiers) ou 112 en cas d'urgence réelle.
Tu ne poses pas de diagnostics médicaux. Tes réponses sont courtes, directes et actionnables.`,
  async ask(userMessage, history = []) {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        system: this.SYSTEM_PROMPT,
        messages: [...history, { role: "user", content: userMessage }],
      }),
    });
    if (!res.ok) throw new Error(`API ${res.status}`);
    const data = await res.json();
    return data.content?.[0]?.text || "Désolé, je n'ai pas pu répondre.";
  },
};

function vigioSaveProgress(key, data) { try { localStorage.setItem(`vigio_${key}`, JSON.stringify(data)); } catch {} }
function vigioLoadProgress(key, fallback = null) { try { const v = localStorage.getItem(`vigio_${key}`); return v ? JSON.parse(v) : fallback; } catch { return fallback; } }

window.VIGIO_CONFIG = VIGIO_CONFIG;
window.VigioVoice = VigioVoice;
window.VigioAI = VigioAI;
window.vigioSaveProgress = vigioSaveProgress;
window.vigioLoadProgress = vigioLoadProgress;
