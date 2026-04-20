// ═══════════════════════════════════════════
// VIGIO — GUIDE D'URGENCE
// ═══════════════════════════════════════════

// ── PROTOCOLES ──
const PROTOCOLS = {

  rcp: {
    title: "❤️ Arrêt cardiaque — RCP",
    showMetronome: true,
    showTimer: true,
    steps: [
      {
        text: "Vérifiez la sécurité",
        detail: "Assurez-vous que la zone est sûre pour vous et la victime. Approchez-vous prudemment.",
        voice: "Vérifiez d'abord que la zone est sûre pour vous et pour la victime."
      },
      {
        text: "Évaluez la conscience",
        detail: "Secouez doucement les épaules : « Vous m'entendez ? Ça va ? ». Si pas de réponse → inconscient.",
        voice: "Secouez doucement les épaules de la victime et demandez : vous m'entendez, ça va ? Si pas de réponse, elle est inconsciente."
      },
      {
        text: "Appelez les secours",
        detail: "Appelez le 15, 18 ou 112. Si quelqu'un est là, désignez une personne : « Vous, appelez le 15 maintenant ! »",
        voice: "Appelez les secours immédiatement. Composez le 15, le 18 ou le 112. Si vous n'êtes pas seul, désignez quelqu'un précisément."
      },
      {
        text: "Vérifiez la respiration",
        detail: "Basculez la tête en arrière, soulevez le menton. Regardez, écoutez, sentez 10 secondes max. Absente ou anormale → commencez la RCP.",
        voice: "Basculez doucement la tête en arrière et soulevez le menton. Regardez, écoutez et sentez la respiration pendant 10 secondes maximum. Si elle ne respire pas normalement, commencez la réanimation."
      },
      {
        text: "Démarrez les compressions",
        detail: "Placez vos mains au centre du thorax, bras tendus. Appuyez fort : 5 à 6 cm de profondeur. Rythme : 100 compressions/minute. Utilisez le métronome ci-dessous.",
        voice: "Placez vos deux mains au centre de la poitrine, bras tendus. Appuyez fort et vite, cinq à six centimètres de profondeur, à raison de cent compressions par minute. Utilisez le métronome."
      },
      {
        text: "30 compressions → 2 insufflations",
        detail: "Après 30 compressions : 2 insufflations (si formé) ou continuez uniquement les compressions. Ne vous arrêtez pas.",
        voice: "Après trente compressions, réalisez deux insufflations si vous êtes formé. Sinon, continuez uniquement les compressions sans vous arrêter."
      },
      {
        text: "Défibrillateur (DAE)",
        detail: "Si un DAE est disponible, envoyez quelqu'un le chercher. Dès son arrivée, mettez-le en marche et suivez ses instructions vocales.",
        voice: "Si un défibrillateur est disponible, envoyez quelqu'un le chercher sans arrêter le massage. Dès son arrivée, allumez-le et suivez ses instructions."
      },
      {
        text: "Continuez jusqu'aux secours",
        detail: "Ne vous arrêtez pas tant que les secours ne prennent pas le relais, sauf si le patient reprend une respiration normale.",
        voice: "Continuez la réanimation sans vous arrêter jusqu'à l'arrivée des secours ou jusqu'à ce que la victime reprenne une respiration normale."
      },
    ],
  },

  etouffement: {
    title: "😮‍💨 Étouffement — Heimlich",
    showMetronome: false,
    showTimer: false,
    steps: [
      {
        text: "Reconnaissez l'étouffement",
        detail: "La personne ne peut pas parler, tousse faiblement ou ne tousse pas, se tient la gorge, devient bleue.",
        voice: "La personne ne peut pas parler, tousse très faiblement ou porte les mains à sa gorge. C'est un signe d'étouffement."
      },
      {
        text: "Penchez-la en avant",
        detail: "Inclinez la personne vers l'avant, soutenue par une main sur le thorax.",
        voice: "Penchez la personne en avant, maintenez-la avec une main sur le thorax."
      },
      {
        text: "5 tapes dans le dos",
        detail: "Frappez fort 5 fois dans le dos, entre les omoplates, avec le talon de la main.",
        voice: "Donnez cinq tapes fermes dans le dos, entre les omoplates, avec le plat de la main."
      },
      {
        text: "5 compressions abdominales",
        detail: "Placez-vous derrière la personne. Un poing au-dessus du nombril, sous le sternum. Saisissez votre poing. Poussez fort vers l'intérieur et vers le haut.",
        voice: "Placez-vous derrière la personne. Serrez un poing au-dessus du nombril. Poussez fort vers l'intérieur et vers le haut, cinq fois."
      },
      {
        text: "Alternez jusqu'au résultat",
        detail: "Répétez : 5 tapes dans le dos + 5 compressions abdominales, jusqu'à expulsion du corps étranger ou perte de conscience.",
        voice: "Alternez cinq tapes dans le dos et cinq compressions abdominales jusqu'à ce que le corps étranger soit expulsé ou que la personne perde conscience."
      },
      {
        text: "Si perte de conscience",
        detail: "Allongez la personne, appelez le 15, commencez la RCP. Le massage peut expulser le corps étranger.",
        voice: "Si la personne perd conscience, allongez-la, appelez le 15 et commencez la réanimation cardio-pulmonaire immédiatement."
      },
    ],
  },

  avc: {
    title: "🧠 AVC — Accident Vasculaire Cérébral",
    showMetronome: false,
    showTimer: true,
    steps: [
      {
        text: "Reconnaissez les signes — VITE",
        detail: "V = Visage asymétrique (sourire déformé). I = Incapacité à lever les bras. T = Troubles de la parole (mots incompréhensibles). E = Extrême urgence → appelez le 15.",
        voice: "Reconnaissez les signes avec le mot VITE. V : visage asymétrique, sourire déformé. I : incapacité à lever les deux bras. T : troubles de la parole. E : extrême urgence, appelez le 15."
      },
      {
        text: "Appelez le 15 immédiatement",
        detail: "Chaque minute compte ! Décrivez les symptômes avec précision. Notez l'heure d'apparition des premiers signes.",
        voice: "Appelez le 15 immédiatement. Décrivez les symptômes. Notez l'heure exacte d'apparition des premiers signes, c'est capital pour le traitement."
      },
      {
        text: "Allongez la personne",
        detail: "Installez-la confortablement, tête légèrement surélevée. Ne lui donnez rien à manger ou à boire.",
        voice: "Allongez la personne confortablement, tête légèrement surélevée. Ne lui donnez rien à boire ni à manger."
      },
      {
        text: "Restez avec elle",
        detail: "Parlez-lui calmement. Rassurez-la. Ne la laissez pas seule. Surveillez sa respiration.",
        voice: "Restez auprès d'elle. Parlez-lui calmement pour la rassurer. Surveillez sa respiration jusqu'à l'arrivée des secours."
      },
      {
        text: "Attendez les secours",
        detail: "N'essayez pas de la transporter vous-même. Ne lui donnez pas d'aspirine ou de médicaments sans avis médical.",
        voice: "N'essayez pas de la transporter seul. Ne lui donnez aucun médicament. Attendez les secours et signalez tout changement de son état."
      },
    ],
  },

  hemorragie: {
    title: "🩸 Hémorragie — Compression",
    showMetronome: false,
    showTimer: true,
    steps: [
      {
        text: "Protégez-vous si possible",
        detail: "Si disponibles, mettez des gants. À défaut, utilisez un sac plastique ou le tissu de la victime.",
        voice: "Si vous avez des gants, mettez-les. Sinon, utilisez un sac plastique pour vous protéger du sang."
      },
      {
        text: "Allongez la victime",
        detail: "Position allongée pour éviter une chute. Élevez la zone blessée si possible.",
        voice: "Allongez la victime. Si possible, surélevez la zone qui saigne."
      },
      {
        text: "Compression directe",
        detail: "Appuyez FORT sur la plaie avec un linge propre, une compresse, ou vos mains. Maintenez sans relâcher.",
        voice: "Appuyez très fort sur la plaie avec un tissu propre, une compresse ou vos mains. Maintenez la pression sans jamais relâcher."
      },
      {
        text: "Appelez le 15",
        detail: "Appelez ou faites appeler les secours. Décrivez l'abondance du saignement et l'origine de la plaie.",
        voice: "Appelez ou faites appeler le 15. Décrivez l'abondance du saignement et l'origine de la blessure."
      },
      {
        text: "Garrot si hémorragie massive membre",
        detail: "Si saignement incontrôlable d'un bras ou d'une jambe : posez un garrot au-dessus de la plaie (pas sur une articulation). Notez l'heure de pose. Ne desserrez JAMAIS.",
        voice: "Si le saignement est incontrôlable sur un bras ou une jambe, posez un garrot au-dessus de la plaie. Notez l'heure de pose. Ne le desserrez jamais."
      },
      {
        text: "Maintenez jusqu'aux secours",
        detail: "Si le tissu est imbibé, ajoutez une couche par-dessus sans retirer la première. Parlez à la victime.",
        voice: "Si le tissu est imbibé, ajoutez une couche par-dessus sans retirer la première. Continuez à parler à la victime pour la rassurer."
      },
    ],
  },

  pls: {
    title: "🤕 PLS — Position Latérale de Sécurité",
    showMetronome: false,
    showTimer: false,
    steps: [
      {
        text: "Vérifiez la conscience",
        detail: "La personne ne répond pas aux questions mais respire normalement.",
        voice: "La personne est inconsciente mais elle respire normalement. C'est la situation pour la position latérale de sécurité."
      },
      {
        text: "Appelez le 15",
        detail: "Appelez immédiatement les secours ou faites appeler.",
        voice: "Appelez le 15 ou faites appeler les secours immédiatement."
      },
      {
        text: "Placez le bras proche vers vous",
        detail: "Le bras côté vous : à angle droit, paume vers le haut.",
        voice: "Placez le bras le plus proche de vous à angle droit, paume orientée vers le haut."
      },
      {
        text: "Ramenez l'autre main sur la joue",
        detail: "L'autre main : posez le dos de la main contre la joue la plus proche de vous. Maintenez.",
        voice: "Prenez l'autre main et posez le dos de cette main contre la joue la plus proche de vous. Maintenez-la en place."
      },
      {
        text: "Pliez le genou éloigné",
        detail: "Attrapez le genou farthest et tirez le pied vers vous pour le plier.",
        voice: "Attrapez le genou le plus éloigné et tirez le pied vers vous pour plier la jambe."
      },
      {
        text: "Faites basculer vers vous",
        detail: "En tenant la main sur la joue et le genou plié, faites basculer doucement la personne vers vous.",
        voice: "En maintenant la main sur la joue et le genou plié, faites basculer doucement la personne vers vous."
      },
      {
        text: "Vérifiez la tête et la respiration",
        detail: "Assurez la bascule de la tête pour garder les voies aériennes ouvertes. Vérifiez la respiration régulièrement.",
        voice: "Assurez que la tête est bien basculée pour garder les voies aériennes ouvertes. Vérifiez la respiration régulièrement jusqu'aux secours."
      },
    ],
  },

  brulure: {
    title: "🔥 Brûlure — Premiers soins",
    showMetronome: false,
    showTimer: true,
    steps: [
      {
        text: "Éloignez de la source",
        detail: "Protégez-vous. Éloignez la victime de la source de chaleur. Ne retirez pas les vêtements collés.",
        voice: "Éloignez immédiatement la victime de la source de chaleur. Ne retirez pas les vêtements qui collent à la peau."
      },
      {
        text: "Refroidissez sous eau froide",
        detail: "Faites couler de l'eau tempérée (pas glacée) sur la brûlure pendant minimum 15 minutes. L'eau soulage et stoppe la brûlure.",
        voice: "Faites couler de l'eau froide, pas glacée, sur la brûlure pendant au minimum quinze minutes. Commencez le chrono."
      },
      {
        text: "Appelez les secours si nécessaire",
        detail: "Appelez le 15 si : brûlure étendue, visage/mains/parties génitales, enfant, brûlure chimique ou électrique.",
        voice: "Appelez le 15 si la brûlure est étendue, sur le visage, les mains, si c'est un enfant, ou si c'est une brûlure chimique ou électrique."
      },
      {
        text: "Ne percez pas les cloques",
        detail: "Les cloques protègent la plaie. Ne les percez pas, ne posez pas de corps gras (beurre, huile).",
        voice: "Ne percez jamais les cloques, elles protègent la plaie. N'appliquez ni beurre, ni huile, ni aucun corps gras."
      },
      {
        text: "Couvrez sans serrer",
        detail: "Après refroidissement, couvrez d'un film alimentaire ou d'un pansement non adhérent. Ne serrez pas.",
        voice: "Après le refroidissement, couvrez la brûlure avec un film alimentaire ou un pansement non adhérent, sans serrer."
      },
    ],
  },

  malaise: {
    title: "💊 Malaise — Syncope / Hypoglycémie",
    showMetronome: false,
    showTimer: false,
    steps: [
      {
        text: "Évaluez la situation",
        detail: "La personne est-elle consciente ? Répond-elle ? Est-elle diabétique connue ?",
        voice: "Évaluez la situation. La personne est-elle consciente ? Répond-elle à vos questions ? Est-elle diabétique ?"
      },
      {
        text: "Si malaise avec conscience",
        detail: "Installez-la confortablement, assise ou allongée. Desserrez vêtements serrés. Aérez la pièce.",
        voice: "Installez la personne confortablement, assise ou allongée. Desserrez les vêtements serrés et aérez la pièce."
      },
      {
        text: "Si diabète connu et consciente",
        detail: "Donnez du sucre : sucre, jus de fruit, boisson sucrée. Attendez 15 minutes. Si pas d'amélioration, appelez le 15.",
        voice: "Si elle est diabétique et consciente, donnez-lui du sucre, un jus de fruit ou une boisson sucrée. Attendez quinze minutes. Sans amélioration, appelez le 15."
      },
      {
        text: "Appelez le 15 si",
        detail: "Douleur thoracique, essoufflement, paralysie, perte de connaissance, premiers signes d'AVC ou absence d'amélioration.",
        voice: "Appelez le 15 immédiatement si : douleur dans la poitrine, essoufflement, paralysie, perte de connaissance ou absence d'amélioration."
      },
      {
        text: "Si perte de connaissance",
        detail: "Vérifiez la respiration → PLS si elle respire. RCP si elle ne respire pas. Appelez le 15.",
        voice: "Si la personne perd connaissance, vérifiez sa respiration. Placez-la en position latérale de sécurité si elle respire. Débutez la réanimation si elle ne respire plus."
      },
    ],
  },

  noyade: {
    title: "🌊 Noyade — Sauvetage",
    showMetronome: false,
    showTimer: true,
    steps: [
      {
        text: "Ne vous jetez pas à l'eau inutilement",
        detail: "Évaluez d'abord. Tendez-lui quelque chose (corde, vêtement, perche). Criez pour alerter.",
        voice: "Ne sautez pas dans l'eau sans évaluer. Tendez une corde, un vêtement ou une perche. Criez pour alerter les autres."
      },
      {
        text: "Appelez les secours",
        detail: "Appelez le 15, 18 ou le 196 (secours en mer). Donnez votre position précise.",
        voice: "Appelez le 15, le 18 ou le 196 pour les secours en mer. Donnez votre position précise."
      },
      {
        text: "Sortez la victime de l'eau",
        detail: "Sortez-la en soutenant la nuque en cas de plongeon ou traumatisme suspecté.",
        voice: "Sortez la victime de l'eau. En cas de plongeon, maintenez et immobilisez la nuque autant que possible."
      },
      {
        text: "Vérifiez la respiration",
        detail: "Allongez-la. Basculez la tête, regardez, écoutez, sentez. Absente → RCP avec insufflations dès que possible.",
        voice: "Allongez la victime. Basculez la tête, regardez, écoutez et sentez la respiration. Si elle ne respire pas, commencez la réanimation avec insufflations."
      },
      {
        text: "Commencez par 5 insufflations",
        detail: "Pour la noyade : débutez par 5 insufflations avant le massage cardiaque (modification du protocole standard).",
        voice: "Pour les noyades, commencez par cinq insufflations avant de démarrer le massage cardiaque. C'est différent du protocole standard."
      },
      {
        text: "RCP jusqu'aux secours",
        detail: "30 compressions + 2 insufflations. Continuez sans interruption.",
        voice: "Continuez la réanimation : trente compressions, deux insufflations, sans interruption jusqu'à l'arrivée des secours."
      },
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

// ── START GUIDE ──
function startGuide(type) {
  const proto = PROTOCOLS[type];
  if (!proto) return;
  currentProtocol = proto;
  currentStep = 0;

  document.getElementById("view-selector").style.display = "none";
  document.getElementById("view-guide").style.display = "block";
  document.getElementById("guide-title").textContent = proto.title;

  document.getElementById("metronome-section").style.display = proto.showMetronome ? "block" : "none";
  document.getElementById("timer-section").style.display = proto.showTimer ? "block" : "none";

  renderSteps();
  // Activer sans voix au chargement (navigateur bloque l'audio sans interaction)
  activateStep(0, false);
  // La voix se déclenche au premier clic sur "Étape suivante" ou "Répéter"
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function stopGuide() {
  VigioVoice.stop();
  stopMetronome();
  clearInterval(timerInterval);
  timerRunning = false;
  currentProtocol = null;
  currentStep = 0;

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
  if (!activeEl) {
    showComplete();
    return;
  }

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
    activateStep(currentStep);
  }
}

function repeatVoice() {
  if (!currentProtocol) return;
  const step = currentProtocol.steps[currentStep];
  VigioVoice.speak(step.voice || step.text, true);
}

function showComplete() {
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
  if (voiceEnabled && withVoice) {
    VigioVoice.speak("Guide terminé. Restez auprès de la victime et attendez l'arrivée des secours.", true);
  }
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

  const interval = 60000 / 100; // 100 bpm
  metronomeInterval = setInterval(() => {
    beat.classList.add("beat-on");
    setTimeout(() => beat.classList.remove("beat-on"), 80);
  }, interval);
}

function stopMetronome() {
  clearInterval(metronomeInterval);
  metronomeInterval = null;
  const startBtn = document.getElementById("btn-metro-start");
  const stopBtn = document.getElementById("btn-metro-stop");
  if (startBtn) startBtn.style.display = "inline-flex";
  if (stopBtn) stopBtn.style.display = "none";
}

// ── TIMER ──
function toggleTimer() {
  timerRunning = !timerRunning;
  const btn = document.getElementById("btn-timer");

  if (timerRunning) {
    btn.textContent = "⏸ Pause";
    timerInterval = setInterval(() => {
      timerSeconds++;
      updateTimerDisplay();
    }, 1000);
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

// ── CALL EMERGENCY ──
function callEmergency() {
  window.location.href = "tel:15";
}

// Init
document.addEventListener("DOMContentLoaded", () => {
  // Prérequis : vérifier si ElevenLabs est configuré
  if (VIGIO_CONFIG.ELEVENLABS_API_KEY === "YOUR_ELEVENLABS_API_KEY") {
    console.warn("⚠️ Vigio: Clé ElevenLabs non configurée. Utilisation du fallback navigateur.");
  }
});
