// ═══════════════════════════════════════════
// VIGIO — GUIDE D'URGENCE + MODE VOCAL IA
// ═══════════════════════════════════════════

const PROTOCOLS = {
  rcp: {
    title: "❤️ Arrêt cardiaque — RCP",
    showMetronome: true,
    showTimer: true,
    steps: [
      { text: "Vérifiez la sécurité", detail: "Assurez-vous que la zone est sûre pour vous et la victime.", voice: "Vérifiez d'abord que la zone est sûre pour vous et pour la victime." },
      { text: "Évaluez la conscience", detail: "Secouez doucement les épaules : « Vous m'entendez ? Ça va ? »", voice: "Secouez doucement les épaules de la victime et demandez : vous m'entendez, ça va ? Si pas de réponse, elle est inconsciente." },
      { text: "Appelez les secours", detail: "Appelez le 15, 18 ou 112.", voice: "Appelez les secours immédiatement, le 15, le 18 ou le 112. Si vous n'êtes pas seul, désignez quelqu'un précisément." },
      { text: "Vérifiez la respiration", detail: "Basculez la tête, soulevez le menton. 10 secondes max.", voice: "Basculez doucement la tête en arrière et soulevez le menton. Regardez, écoutez et sentez la respiration pendant 10 secondes. Si elle ne respire pas normalement, commencez la réanimation." },
      { text: "Démarrez les compressions", detail: "Centre du thorax, bras tendus. 5-6 cm, 100/min.", voice: "Placez vos deux mains au centre de la poitrine, bras tendus. Appuyez fort, cinq à six centimètres de profondeur, cent compressions par minute." },
      { text: "30 compressions → 2 insufflations", detail: "Répétez sans vous arrêter.", voice: "Après trente compressions, réalisez deux insufflations si vous êtes formé. Sinon, continuez uniquement les compressions sans vous arrêter." },
      { text: "Défibrillateur (DAE)", detail: "Si disponible, allumez-le et suivez ses instructions.", voice: "Si un défibrillateur est disponible, allumez-le et suivez ses instructions. Continuez le massage entre les analyses." },
      { text: "Continuez jusqu'aux secours", detail: "Ne vous arrêtez pas.", voice: "Continuez la réanimation sans vous arrêter jusqu'à l'arrivée des secours ou jusqu'à ce que la victime reprenne une respiration normale." },
    ],
  },
  etouffement: {
    title: "😮‍💨 Étouffement — Heimlich",
    showMetronome: false, showTimer: false,
    steps: [
      { text: "Reconnaissez l'étouffement", detail: "Ne peut pas parler, tousse faiblement, se tient la gorge.", voice: "La personne ne peut pas parler, tousse très faiblement ou porte les mains à sa gorge. C'est un étouffement." },
      { text: "Penchez-la en avant", detail: "Une main sur le thorax.", voice: "Penchez la personne en avant, maintenez-la avec une main sur le thorax." },
      { text: "5 tapes dans le dos", detail: "Entre les omoplates, talon de la main.", voice: "Donnez cinq tapes fermes dans le dos, entre les omoplates, avec le plat de la main." },
      { text: "5 compressions abdominales", detail: "Poing entre nombril et sternum, poussez vers l'intérieur et le haut.", voice: "Placez-vous derrière la personne. Serrez un poing au-dessus du nombril. Poussez fort vers l'intérieur et vers le haut, cinq fois." },
      { text: "Alternez jusqu'au résultat", detail: "5 tapes + 5 compressions jusqu'à expulsion.", voice: "Alternez cinq tapes dans le dos et cinq compressions abdominales jusqu'à expulsion du corps étranger." },
      { text: "Si perte de conscience", detail: "Allongez, appelez le 15, commencez la RCP.", voice: "Si la personne perd conscience, allongez-la, appelez le 15 et commencez la réanimation immédiatement." },
    ],
  },
  avc: {
    title: "🧠 AVC",
    showMetronome: false, showTimer: true,
    steps: [
      { text: "Méthode VITE", detail: "Visage asymétrique · Incapacité bras · Troubles parole · En urgence appelez le 15", voice: "Reconnaissez les signes avec le mot VITE. V : visage asymétrique. I : incapacité à lever les deux bras. T : troubles de la parole. E : appelez le 15 immédiatement." },
      { text: "Appelez le 15", detail: "Notez l'heure d'apparition des signes.", voice: "Appelez le 15 immédiatement. Notez l'heure exacte d'apparition des premiers signes, c'est capital pour le traitement." },
      { text: "Allongez la personne", detail: "Tête légèrement surélevée. Rien à manger ni à boire.", voice: "Allongez la personne confortablement, tête légèrement surélevée. Ne lui donnez rien à boire ni à manger." },
      { text: "Restez avec elle", detail: "Parlez-lui calmement. Surveillez la respiration.", voice: "Restez auprès d'elle. Parlez-lui calmement pour la rassurer. Surveillez sa respiration jusqu'à l'arrivée des secours." },
    ],
  },
  hemorragie: {
    title: "🩸 Hémorragie",
    showMetronome: false, showTimer: true,
    steps: [
      { text: "Protégez-vous", detail: "Gants ou sac plastique si disponibles.", voice: "Si vous avez des gants, mettez-les. Sinon, utilisez un sac plastique pour vous protéger." },
      { text: "Allongez la victime", detail: "Surélevez la zone blessée si possible.", voice: "Allongez la victime. Si possible, surélevez la zone qui saigne." },
      { text: "Compression directe", detail: "Appuyez FORT sans relâcher.", voice: "Appuyez très fort sur la plaie avec un tissu propre ou vos mains. Maintenez la pression sans jamais relâcher." },
      { text: "Appelez le 15", detail: "Décrivez le saignement.", voice: "Appelez le 15. Décrivez l'abondance du saignement et l'origine de la blessure." },
      { text: "Garrot si membre incontrôlable", detail: "5-7 cm au-dessus. Notez l'heure. Ne desserrez JAMAIS.", voice: "Si le saignement est incontrôlable sur un membre, posez un garrot au-dessus de la plaie. Notez l'heure de pose. Ne le desserrez jamais." },
    ],
  },
  pls: {
    title: "🤕 Position Latérale de Sécurité",
    showMetronome: false, showTimer: false,
    steps: [
      { text: "Vérifiez la conscience et la respiration", detail: "Inconsciente mais respire normalement.", voice: "La personne est inconsciente mais elle respire normalement. Nous allons la mettre en position latérale de sécurité." },
      { text: "Appelez le 15", detail: "Appelez les secours.", voice: "Appelez le 15 immédiatement." },
      { text: "Bras proche à angle droit", detail: "Paume vers le haut.", voice: "Placez le bras le plus proche de vous à angle droit, paume orientée vers le haut." },
      { text: "Autre main sur la joue", detail: "Dos de la main contre la joue.", voice: "Prenez l'autre main et posez le dos de cette main contre la joue la plus proche de vous. Maintenez-la." },
      { text: "Pliez le genou éloigné", detail: "Tirez le pied vers vous.", voice: "Attrapez le genou le plus éloigné et tirez le pied vers vous pour plier la jambe." },
      { text: "Basculez vers vous", detail: "Tenez la main sur la joue et le genou.", voice: "En maintenant la main sur la joue et le genou plié, faites basculer doucement la personne vers vous." },
      { text: "Vérifiez les voies aériennes", detail: "Tête basculée, surveillance régulière.", voice: "Assurez que la tête est bien basculée pour garder les voies aériennes ouvertes. Vérifiez la respiration régulièrement." },
    ],
  },
  brulure: {
    title: "🔥 Brûlure",
    showMetronome: false, showTimer: true,
    steps: [
      { text: "Éloignez de la source", detail: "Ne retirez pas les vêtements collés.", voice: "Éloignez la victime de la source de chaleur. Ne retirez pas les vêtements qui collent à la peau." },
      { text: "Eau froide 15 minutes", detail: "Pas glacée. Démarrez le chrono.", voice: "Faites couler de l'eau fraîche, pas glacée, sur la brûlure pendant au minimum quinze minutes. Démarrez le chronomètre." },
      { text: "Appelez le 15 si nécessaire", detail: "Brûlure étendue, visage, enfant, chimique.", voice: "Appelez le 15 si la brûlure est étendue, sur le visage, s'il s'agit d'un enfant, ou si c'est une brûlure chimique." },
      { text: "Ne percez pas les cloques", detail: "Pas de beurre, huile, ou corps gras.", voice: "Ne percez jamais les cloques. N'appliquez ni beurre, ni huile, ni aucun corps gras." },
      { text: "Couvrez sans serrer", detail: "Film alimentaire ou pansement non adhérent.", voice: "Après le refroidissement, couvrez avec un film alimentaire ou un pansement non adhérent, sans serrer." },
    ],
  },
  malaise: {
    title: "💊 Malaise",
    showMetronome: false, showTimer: false,
    steps: [
      { text: "Évaluez la situation", detail: "Consciente ? Diabétique ?", voice: "Évaluez la situation. La personne est-elle consciente ? Est-elle diabétique ?" },
      { text: "Installez confortablement", detail: "Assise ou allongée. Desserrez les vêtements.", voice: "Installez la personne confortablement, assise ou allongée. Desserrez les vêtements serrés et aérez la pièce." },
      { text: "Si diabétique : donnez du sucre", detail: "Jus, boisson sucrée. Attendez 15 min.", voice: "Si elle est diabétique et consciente, donnez du sucre, un jus de fruit ou une boisson sucrée. Attendez quinze minutes." },
      { text: "Appelez le 15 si nécessaire", detail: "Douleur thoracique, perte de connaissance, absence d'amélioration.", voice: "Appelez le 15 si : douleur dans la poitrine, perte de connaissance, ou absence d'amélioration après quinze minutes." },
    ],
  },
  noyade: {
    title: "🌊 Noyade",
    showMetronome: false, showTimer: true,
    steps: [
      { text: "Ne sautez pas sans évaluer", detail: "Tendez une corde, vêtement, perche.", voice: "N'entrez pas dans l'eau sans évaluer. Tendez une corde, un vêtement ou une perche." },
      { text: "Appelez le 15 ou le 196", detail: "Donnez votre position précise.", voice: "Appelez le 15, le 18 ou le 196 pour les secours en mer. Donnez votre position précise." },
      { text: "Sortez la victime de l'eau", detail: "Soutenez la nuque si plongeon.", voice: "Sortez la victime de l'eau. En cas de plongeon, immobilisez la nuque autant que possible." },
      { text: "5 insufflations d'abord", detail: "Différent de la RCP standard.", voice: "Pour les noyades, commencez par cinq insufflations avant de démarrer le massage cardiaque. C'est différent du protocole standard." },
      { text: "RCP jusqu'aux secours", detail: "30 compressions + 2 insufflations.", voice: "Continuez la réanimation : trente compressions, deux insufflations, sans interruption jusqu'à l'arrivée des secours." },
    ],
  },
};

// ── STATE ──
let currentProtocol = null;
let currentStep = 0;
let voiceEnabled = true;
let metronomeInterval = null;
let timerInterval = null;
let timerSeconds = 0;
let timerRunning = false;

// ── MODE VOCAL IA ──
let vocalMode = false;
let recognition = null;
let isListening = false;
let vocalHistory = [];

// ── START GUIDE ──
function startGuide(type) {
  const proto = PROTOCOLS[type];
  if (!proto) return;
  currentProtocol = proto;
  currentStep = 0;
  vocalHistory = [];

  document.getElementById("view-selector").style.display = "none";
  document.getElementById("view-guide").style.display = "block";
  document.getElementById("guide-title").textContent = proto.title;
  document.getElementById("metronome-section").style.display = proto.showMetronome ? "block" : "none";
  document.getElementById("timer-section").style.display = proto.showTimer ? "block" : "none";

  renderSteps();
  activateStep(0, false);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function stopGuide() {
  VigioVoice.stop();
  stopVocalMode();
  stopMetronome();
  clearInterval(timerInterval);
  timerRunning = false;
  currentProtocol = null;
  currentStep = 0;
  vocalHistory = [];

  document.getElementById("view-guide").style.display = "none";
  document.getElementById("view-selector").style.display = "block";
  document.getElementById("steps-container").innerHTML = "";
}

// ── RENDER STEPS ──
function renderSteps() {
  const container = document.getElementById("steps-container");
  container.innerHTML = "";
  currentProtocol.steps.forEach((step, i) => {
    const el = document.createElement("div");
    el.className = "step-item";
    el.id = `step-${i}`;
    el.innerHTML = `
      <div class="step-num" id="step-num-${i}">${i + 1}</div>
      <div class="step-content">
        <div class="step-text">${step.text}</div>
        <div class="step-detail">${step.detail}</div>
        <div class="step-actions" id="step-actions-${i}" style="display:none;">
          <button class="btn-next-step" onclick="nextStep()">
            ${i === currentProtocol.steps.length - 1 ? "✓ Terminé" : "Étape suivante →"}
          </button>
          <button class="btn-repeat-step" onclick="repeatVoice()">🔊 Répéter</button>
        </div>
      </div>
    `;
    container.appendChild(el);
  });
}

// ── ACTIVATE STEP ──
function activateStep(index, withVoice = true) {
  const steps = document.querySelectorAll(".step-item");
  steps.forEach((el, i) => {
    el.classList.remove("active");
    if (i < index) {
      el.classList.add("done");
      document.getElementById(`step-num-${i}`).textContent = "";
    }
    document.getElementById(`step-actions-${i}`).style.display = "none";
  });

  const activeEl = document.getElementById(`step-${index}`);
  if (!activeEl) { showComplete(); return; }

  activeEl.classList.remove("done");
  activeEl.classList.add("active");
  document.getElementById(`step-actions-${index}`).style.display = "flex";
  activeEl.scrollIntoView({ behavior: "smooth", block: "center" });

  if (voiceEnabled && withVoice) {
    const step = currentProtocol.steps[index];
    VigioVoice.speak(step.voice || step.text, true);
  }
}

function nextStep() {
  currentStep++;
  if (currentStep >= currentProtocol.steps.length) {
    showComplete();
  } else {
    activateStep(currentStep, true);
  }
}

function repeatVoice() {
  if (!currentProtocol) return;
  const step = currentProtocol.steps[currentStep];
  VigioVoice.speak(step.voice || step.text, true);
}

function showComplete() {
  VigioVoice.stop();
  stopVocalMode();
  const container = document.getElementById("steps-container");
  const completeEl = document.createElement("div");
  completeEl.className = "guide-complete";
  completeEl.innerHTML = `
    <div style="font-size:48px;margin-bottom:12px;">✅</div>
    <h3>Guide terminé</h3>
    <p>Vous avez suivi toutes les étapes. Restez avec la victime et attendez les secours.</p>
    <div style="margin-top:20px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
      <button class="btn-secondary" onclick="stopGuide()">← Recommencer</button>
      <a href="tel:15" class="btn-primary">📞 Appeler le 15</a>
    </div>
  `;
  container.appendChild(completeEl);
  VigioVoice.speak("Guide terminé. Excellent travail. Restez auprès de la victime et attendez l'arrivée des secours.", true);
}

// ══════════════════════════════════════════
// MODE VOCAL IA COMPLET
// ══════════════════════════════════════════

function toggleVocalMode() {
  if (vocalMode) {
    stopVocalMode();
  } else {
    startVocalMode();
  }
}

async function startVocalMode() {
  if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
    alert("La reconnaissance vocale n'est pas supportée par ce navigateur. Utilisez Chrome.");
    return;
  }

  vocalMode = true;
  updateVocalBtn();

  // Afficher l'interface vocale
  document.getElementById("vocal-panel").style.display = "block";
  setVocalStatus("listening", "Je vous écoute...");

  // Construire le contexte initial pour Claude
  const step = currentProtocol.steps[currentStep];
  vocalHistory = [{
    role: "user",
    content: `Contexte : guidage "${currentProtocol.title}". Étape actuelle (${currentStep + 1}/${currentProtocol.steps.length}) : "${step.text}". Instructions : ${step.detail}`
  }, {
    role: "assistant",
    content: `Je vous guide pour ${currentProtocol.title}. Étape ${currentStep + 1} : ${step.voice || step.text} Dites "suivant" quand vous êtes prêt, ou posez-moi une question.`
  }];

  // Lire l'intro
  await VigioVoice.speak(`Mode vocal activé. ${currentProtocol.title}. Étape ${currentStep + 1} : ${step.voice || step.text} Dites "suivant" quand vous êtes prêt, ou posez-moi une question.`, true);

  // Démarrer l'écoute
  startListening();
}

function stopVocalMode() {
  vocalMode = false;
  isListening = false;
  recognition && recognition.stop();
  recognition = null;
  VigioVoice.stop();
  updateVocalBtn();
  document.getElementById("vocal-panel").style.display = "none";
}

function updateVocalBtn() {
  const btn = document.getElementById("btn-vocal-mode");
  if (!btn) return;
  if (vocalMode) {
    btn.textContent = "⏹ Arrêter le mode vocal";
    btn.style.background = "var(--red)";
    btn.style.color = "white";
    btn.style.borderColor = "var(--red)";
  } else {
    btn.textContent = "🎙 Mode vocal IA";
    btn.style.background = "";
    btn.style.color = "";
    btn.style.borderColor = "";
  }
}

function startListening() {
  if (!vocalMode) return;

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SpeechRecognition();
  recognition.lang = "fr-FR";
  recognition.continuous = false;
  recognition.interimResults = true;
  recognition.maxAlternatives = 1;

  let finalTranscript = "";
  let interimTranscript = "";

  recognition.onstart = () => {
    isListening = true;
    setVocalStatus("listening", "Je vous écoute...");
  };

  recognition.onresult = (e) => {
    interimTranscript = "";
    finalTranscript = "";
    for (let i = e.resultIndex; i < e.results.length; i++) {
      if (e.results[i].isFinal) {
        finalTranscript += e.results[i][0].transcript;
      } else {
        interimTranscript += e.results[i][0].transcript;
      }
    }
    const display = finalTranscript || interimTranscript;
    if (display) setVocalStatus("listening", `"${display}"`);
  };

  recognition.onend = () => {
    isListening = false;
    if (finalTranscript.trim() && vocalMode) {
      handleVocalInput(finalTranscript.trim());
    } else if (vocalMode) {
      // Relancer l'écoute si rien n'a été capté
      setTimeout(() => vocalMode && startListening(), 500);
    }
  };

  recognition.onerror = (e) => {
    if (e.error === "no-speech" && vocalMode) {
      setTimeout(() => vocalMode && startListening(), 800);
    }
  };

  try { recognition.start(); } catch(e) {}
}

async function handleVocalInput(text) {
  if (!vocalMode || !currentProtocol) return;

  setVocalStatus("thinking", `Vous : "${text}"`);
  addVocalMessage("user", text);

  const textLower = text.toLowerCase().trim();

  // Détection des commandes simples
  const isNext = /^(suivant|ok|fait|c'est fait|continue|étape suivante|next|go|ça y est|j'ai fait|done)$/i.test(textLower);
  const isPrev = /^(précédent|retour|avant|revenir)$/i.test(textLower);
  const isRepeat = /^(répète|répéter|redis|quoi|pardon|comment)$/i.test(textLower);
  const isStop = /^(stop|arrête|fin|terminer|quitter)$/i.test(textLower);
  const isCall = /^(appelle|appeler|urgence|samu|pompiers)$/i.test(textLower);

  if (isStop) {
    addVocalMessage("assistant", "Mode vocal arrêté.");
    await VigioVoice.speak("Mode vocal arrêté.", true);
    stopVocalMode();
    return;
  }

  if (isCall) {
    const msg = "J'appelle les secours maintenant.";
    addVocalMessage("assistant", msg);
    await VigioVoice.speak(msg, true);
    window.location.href = "tel:15";
    return;
  }

  if (isRepeat) {
    const step = currentProtocol.steps[currentStep];
    const msg = step.voice || step.text;
    addVocalMessage("assistant", msg);
    await VigioVoice.speak(msg, true);
    setTimeout(() => vocalMode && startListening(), 500);
    return;
  }

  if (isPrev && currentStep > 0) {
    currentStep--;
    activateStep(currentStep, false);
    const step = currentProtocol.steps[currentStep];
    const msg = `Retour à l'étape ${currentStep + 1} : ${step.voice || step.text}`;
    addVocalMessage("assistant", msg);
    await VigioVoice.speak(msg, true);
    setTimeout(() => vocalMode && startListening(), 500);
    return;
  }

  if (isNext) {
    if (currentStep >= currentProtocol.steps.length - 1) {
      showComplete();
      return;
    }
    currentStep++;
    activateStep(currentStep, false);
    const step = currentProtocol.steps[currentStep];
    const msg = `Étape ${currentStep + 1} : ${step.voice || step.text}`;
    addVocalMessage("assistant", msg);
    await VigioVoice.speak(msg, true);
    setTimeout(() => vocalMode && startListening(), 800);
    return;
  }

  // Question libre → Claude
  setVocalStatus("thinking", "Vigio réfléchit...");

  const step = currentProtocol.steps[currentStep];
  const systemPrompt = `Tu es Vigio, un assistant vocal de premiers secours. Tu guides actuellement une personne pour "${currentProtocol.title}", étape ${currentStep + 1}/${currentProtocol.steps.length} : "${step.text}".
Réponds en 1-2 phrases maximum, de façon claire et directe, comme si tu parlais à voix haute.
Ne répète pas "étape X" inutilement. 
Si la personne dit "suivant", "ok", "fait" ou similaire, dis-lui l'étape suivante.
Rappelle toujours d'appeler le 15 en cas de doute.`;

  vocalHistory.push({ role: "user", content: text });

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 200,
        system: systemPrompt,
        messages: vocalHistory.slice(-6),
      }),
    });

    const data = await res.json();
    const reply = data.content?.[0]?.text || "Je n'ai pas compris. Répétez ?";

    vocalHistory.push({ role: "assistant", content: reply });
    addVocalMessage("assistant", reply);
    setVocalStatus("speaking", "Vigio parle...");

    await VigioVoice.speak(reply, true);
    setTimeout(() => vocalMode && startListening(), 600);

  } catch(e) {
    const fallback = "Je n'ai pas pu répondre. Continuez ou dites 'suivant'.";
    addVocalMessage("assistant", fallback);
    await VigioVoice.speak(fallback, true);
    setTimeout(() => vocalMode && startListening(), 600);
  }
}

function setVocalStatus(state, text) {
  const indicator = document.getElementById("vocal-indicator");
  const statusText = document.getElementById("vocal-status-text");
  if (!indicator || !statusText) return;

  indicator.className = "vocal-indicator";
  if (state === "listening") indicator.classList.add("listening");
  if (state === "thinking") indicator.classList.add("thinking");
  if (state === "speaking") indicator.classList.add("speaking");

  statusText.textContent = text;
}

function addVocalMessage(role, text) {
  const log = document.getElementById("vocal-log");
  if (!log) return;
  const div = document.createElement("div");
  div.className = `vocal-msg vocal-${role}`;
  div.innerHTML = `<span class="vocal-role">${role === "user" ? "Vous" : "Vigio"}</span>${text}`;
  log.appendChild(div);
  log.scrollTop = log.scrollHeight;
}

// ── VOICE TOGGLE ──
function toggleVoice() {
  voiceEnabled = !voiceEnabled;
  const btn = document.getElementById("btn-voice");
  btn.textContent = voiceEnabled ? "🔊" : "🔇";
  btn.classList.toggle("muted", !voiceEnabled);
  if (!voiceEnabled) VigioVoice.stop();
}

// ── METRONOME ──
function startMetronome() {
  if (metronomeInterval) return;
  const beat = document.getElementById("metro-beat");
  document.getElementById("btn-metro-start").style.display = "none";
  document.getElementById("btn-metro-stop").style.display = "inline-flex";
  metronomeInterval = setInterval(() => {
    beat.classList.add("beat-on");
    setTimeout(() => beat.classList.remove("beat-on"), 80);
  }, 600);
}

function stopMetronome() {
  clearInterval(metronomeInterval);
  metronomeInterval = null;
  const s = document.getElementById("btn-metro-start");
  const e = document.getElementById("btn-metro-stop");
  if (s) s.style.display = "inline-flex";
  if (e) e.style.display = "none";
}

// ── TIMER ──
function toggleTimer() {
  timerRunning = !timerRunning;
  const btn = document.getElementById("btn-timer");
  if (timerRunning) {
    btn.textContent = "⏸ Pause";
    timerInterval = setInterval(() => { timerSeconds++; updateTimerDisplay(); }, 1000);
  } else {
    btn.textContent = "▶ Continuer";
    clearInterval(timerInterval);
  }
}

function updateTimerDisplay() {
  const m = Math.floor(timerSeconds / 60).toString().padStart(2, "0");
  const s = (timerSeconds % 60).toString().padStart(2, "0");
  document.getElementById("timer-display").textContent = `${m}:${s}`;
}

function callEmergency() { window.location.href = "tel:15"; }
