// ═══════════════════════════════════════════
// VIGIO — CONFIG & UTILITAIRES PARTAGÉS
// ═══════════════════════════════════════════

// ── CONFIGURATION ELEVENLABS ──
// Remplacez ces valeurs par vos vraies clés
const VIGIO_CONFIG = {
  ELEVENLABS_API_KEY: "YOUR_ELEVENLABS_API_KEY",
  ELEVENLABS_VOICE_ID: "YOUR_VOICE_ID",
  ELEVENLABS_MODEL: "eleven_multilingual_v2",
  ANTHROPIC_PROXY: "https://api.anthropic.com/v1/messages",
};

// ── SYNTHÈSE VOCALE (ElevenLabs) ──
const VigioVoice = {
  _queue: [],
  _playing: false,

  async speak(text, priority = false) {
    if (priority) {
      this._queue = [];
      this._playing = false;
      window.__vigioAudio?.pause();
    }
    this._queue.push(text);
    if (!this._playing) this._processQueue();
  },

  async _processQueue() {
    if (this._queue.length === 0) { this._playing = false; return; }
    this._playing = true;
    const text = this._queue.shift();
    try {
      await this._playText(text);
    } catch (e) {
      console.warn("TTS error:", e);
      this._fallbackSpeak(text);
    }
    this._processQueue();
  },

  async _playText(text) {
    const url = `https://api.elevenlabs.io/v1/text-to-speech/${VIGIO_CONFIG.ELEVENLABS_VOICE_ID}`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "xi-api-key": VIGIO_CONFIG.ELEVENLABS_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        model_id: VIGIO_CONFIG.ELEVENLABS_MODEL,
        voice_settings: { stability: 0.5, similarity_boost: 0.75, style: 0.3 },
      }),
    });
    if (!res.ok) throw new Error(`ElevenLabs ${res.status}`);
    const blob = await res.blob();
    const audioUrl = URL.createObjectURL(blob);
    return new Promise((resolve, reject) => {
      const audio = new Audio(audioUrl);
      window.__vigioAudio = audio;
      audio.onended = () => { URL.revokeObjectURL(audioUrl); resolve(); };
      audio.onerror = reject;
      audio.play();
    });
  },

  _fallbackSpeak(text) {
    if (!window.speechSynthesis) return;
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = "fr-FR";
    utt.rate = 0.9;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utt);
  },

  stop() {
    this._queue = [];
    this._playing = false;
    window.__vigioAudio?.pause();
    window.speechSynthesis?.cancel();
  },
};

// ── ASSISTANT IA (Claude via Anthropic) ──
const VigioAI = {
  SYSTEM_PROMPT: `Tu es Vigio, un assistant spécialisé en premiers secours et gestes d'urgence. 
Tu réponds en français, avec clarté et concision.
Tu fournis des instructions précises, étape par étape.
Tu rappelles TOUJOURS d'appeler le 15 (SAMU), 18 (Pompiers) ou 112 en cas d'urgence réelle.
Tu ne poses pas de diagnostics médicaux, tu guides les gestes de premiers secours.
Tes réponses sont courtes, directes et actionnables. Utilise des listes numérotées pour les étapes.`,

  async ask(userMessage, history = []) {
    const messages = [
      ...history,
      { role: "user", content: userMessage },
    ];

    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        system: this.SYSTEM_PROMPT,
        messages,
      }),
    });

    if (!res.ok) throw new Error(`API ${res.status}`);
    const data = await res.json();
    return data.content?.[0]?.text || "Désolé, je n'ai pas pu répondre.";
  },
};

// ── UTILITAIRES ──
function vigioFormatTime(s) {
  return s < 60 ? `${s}s` : `${Math.floor(s / 60)}min ${s % 60}s`;
}

function vigioSaveProgress(key, data) {
  try { localStorage.setItem(`vigio_${key}`, JSON.stringify(data)); } catch {}
}

function vigioLoadProgress(key, fallback = null) {
  try {
    const v = localStorage.getItem(`vigio_${key}`);
    return v ? JSON.parse(v) : fallback;
  } catch { return fallback; }
}

// Export global
window.VIGIO_CONFIG = VIGIO_CONFIG;
window.VigioVoice = VigioVoice;
window.VigioAI = VigioAI;
window.vigioSaveProgress = vigioSaveProgress;
window.vigioLoadProgress = vigioLoadProgress;
