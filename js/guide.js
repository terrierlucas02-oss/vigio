// ═══════════════════════════════════════════
// VIGIO — GUIDE D'URGENCE
// Protocoles PSE 2024 · DGSCGC · ILCOR 2024
// ═══════════════════════════════════════════

// ── PROTOCOLES ──
const PROTOCOLS = {

  // ─── RCP ───
  rcp_adulte: {
    title: "❤️ Arrêt cardiaque — Adulte (8 ans+)",
    showMetronome: true,
    showTimer: true,
    steps: [
      {
        text: "Vérifiez la sécurité",
        detail: "Assurez-vous que la zone est sûre pour vous et la victime.",
        voice: "Vérifiez que la zone est sûre pour vous et pour la victime.",
        video: "PLACEHOLDER_RCP_ADULTE_1"
      },
      {
        text: "Évaluez la conscience",
        detail: "Secouez doucement les épaules : « Vous m'entendez ? Ça va ? »",
        voice: "Secouez doucement les épaules et demandez : vous m'entendez ? Si pas de réponse, elle est inconsciente.",
        video: "PLACEHOLDER_RCP_ADULTE_2"
      },
      {
        text: "Appelez le 15 / 18 / 112",
        detail: "Désignez quelqu'un si vous n'êtes pas seul.",
        voice: "Appelez le 15, le 18 ou le 112 immédiatement. Si vous n'êtes pas seul, désignez quelqu'un précisément.",
        video: "PLACEHOLDER_RCP_ADULTE_3"
      },
      {
        text: "Vérifiez la respiration",
        detail: "Basculez la tête, soulevez le menton. 10 secondes max.",
        voice: "Basculez la tête en arrière, soulevez le menton. Regardez, écoutez, sentez 10 secondes. Si elle ne respire pas normalement, commencez.",
        video: "PLACEHOLDER_RCP_ADULTE_4"
      },
      {
        text: "30 compressions thoraciques",
        detail: "2 mains au centre du sternum. 5-6 cm de profondeur. 100-120/min.",
        voice: "Placez les deux mains au centre de la poitrine, bras tendus. Appuyez fort, cinq à six centimètres, cent à cent vingt fois par minute. Comptez jusqu'à trente.",
        video: "PLACEHOLDER_RCP_ADULTE_5"
      },
      {
        text: "2 insufflations",
        detail: "Si formé : pincez le nez, soufflez 1 seconde. Sinon continuez les compressions.",
        voice: "Si vous êtes formé, pincez le nez et donnez deux insufflations d'une seconde en regardant la poitrine se soulever. Sinon continuez les compressions sans vous arrêter.",
        video: "PLACEHOLDER_RCP_ADULTE_6"
      },
      {
        text: "DAE — Défibrillateur",
        detail: "Si disponible, allumez-le et suivez ses instructions vocales.",
        voice: "Si un défibrillateur est disponible, allumez-le et suivez ses instructions. Continuez le massage entre les analyses.",
        video: "PLACEHOLDER_RCP_ADULTE_7"
      },
      {
        text: "Continuez sans interruption",
        detail: "30:2 jusqu'à l'arrivée des secours ou reprise de la respiration.",
        voice: "Continuez sans vous arrêter jusqu'à l'arrivée des secours ou jusqu'à ce que la victime reprenne une respiration normale.",
        video: "PLACEHOLDER_RCP_ADULTE_8"
      },
    ],
  },

  rcp_enfant: {
    title: "❤️ Arrêt cardiaque — Enfant (1-8 ans)",
    showMetronome: true,
    showTimer: true,
    steps: [
      {
        text: "Vérifiez la sécurité",
        detail: "Zone sûre pour vous et l'enfant.",
        voice: "Vérifiez que la zone est sûre.",
        video: "PLACEHOLDER_RCP_ENFANT_1"
      },
      {
        text: "Appelez le 15 / 18 / 112",
        detail: "Appelez immédiatement.",
        voice: "Appelez le 15 immédiatement.",
        video: "PLACEHOLDER_RCP_ENFANT_2"
      },
      {
        text: "5 insufflations initiales",
        detail: "Tête légèrement en arrière. 5 souffles lents. Regardez la poitrine se soulever.",
        voice: "L'arrêt chez l'enfant est souvent respiratoire. Commencez par cinq insufflations initiales. Tête légèrement en arrière, soufflez doucement en regardant la poitrine se soulever.",
        video: "PLACEHOLDER_RCP_ENFANT_3"
      },
      {
        text: "15 compressions — 1 seule main",
        detail: "1 main au centre de la poitrine. 1/3 épaisseur thorax (~5 cm). 100-120/min.",
        voice: "Une seule main au centre de la poitrine. Appuyez au tiers de l'épaisseur du thorax, soit environ cinq centimètres. Cent à cent vingt fois par minute. Comptez jusqu'à quinze.",
        video: "PLACEHOLDER_RCP_ENFANT_4"
      },
      {
        text: "2 insufflations",
        detail: "Puis reprenez 15 compressions. Ratio 15:2 sans interruption.",
        voice: "Deux insufflations, puis reprenez quinze compressions. Continuez ce cycle sans vous arrêter.",
        video: "PLACEHOLDER_RCP_ENFANT_5"
      },
      {
        text: "DAE si disponible",
        detail: "Allumez et suivez les instructions.",
        voice: "Si un défibrillateur est disponible, allumez-le et suivez ses instructions.",
        video: "PLACEHOLDER_RCP_ENFANT_6"
      },
      {
        text: "Continuez jusqu'aux secours",
        detail: "Ratio 15:2 sans interruption.",
        voice: "Continuez le cycle quinze compressions deux insufflations sans vous arrêter jusqu'à l'arrivée des secours.",
        video: "PLACEHOLDER_RCP_ENFANT_7"
      },
    ],
  },

  rcp_nourrisson: {
    title: "❤️ Arrêt cardiaque — Nourrisson (-1 an)",
    showMetronome: true,
    showTimer: true,
    steps: [
      {
        text: "Vérifiez la sécurité",
        detail: "Zone sûre.",
        voice: "Vérifiez que la zone est sûre.",
        video: "PLACEHOLDER_RCP_NOUR_1"
      },
      {
        text: "Appelez le 15 / 18 / 112",
        detail: "Appelez immédiatement.",
        voice: "Appelez le 15 immédiatement.",
        video: "PLACEHOLDER_RCP_NOUR_2"
      },
      {
        text: "5 insufflations initiales",
        detail: "Tête très légèrement en arrière. Couvrez bouche ET nez. 5 petits souffles doux.",
        voice: "Tête très légèrement en arrière. Couvrez à la fois la bouche et le nez du nourrisson avec votre bouche. Donnez cinq petits souffles très doux.",
        video: "PLACEHOLDER_RCP_NOUR_3"
      },
      {
        text: "15 compressions — 2 pouces",
        detail: "Encerclez le thorax avec les 2 mains. 2 pouces côte à côte au centre du sternum. ~4 cm.",
        voice: "Encerclez le thorax avec vos deux mains. Placez deux pouces côte à côte au centre du sternum. Appuyez à environ quatre centimètres de profondeur. Quinze fois.",
        video: "PLACEHOLDER_RCP_NOUR_4"
      },
      {
        text: "2 insufflations bouche+nez",
        detail: "Couvrez bouche ET nez. Souffles très doux. Puis 15 compressions.",
        voice: "Deux petits souffles très doux en couvrant bouche et nez. Puis reprenez quinze compressions. Ratio quinze deux sans interruption.",
        video: "PLACEHOLDER_RCP_NOUR_5"
      },
      {
        text: "Continuez jusqu'aux secours",
        detail: "15:2 sans interruption.",
        voice: "Continuez sans vous arrêter jusqu'à l'arrivée des secours.",
        video: "PLACEHOLDER_RCP_NOUR_6"
      },
    ],
  },

  // ─── ÉTOUFFEMENT ───
  etouffement_adulte: {
    title: "😮‍💨 Étouffement — Adulte / Enfant",
    showMetronome: false, showTimer: false,
    steps: [
      { text: "Reconnaissez l'étouffement", detail: "Ne peut plus parler ni tousser. Se tient la gorge.", voice: "La personne ne peut plus parler ni tousser et se tient la gorge. Agissez immédiatement.", video: "PLACEHOLDER_ETOUFFE_1" },
      { text: "Penchez-la en avant", detail: "Une main sur le thorax pour la soutenir.", voice: "Penchez la personne en avant et soutenez-la avec une main sur le thorax.", video: "PLACEHOLDER_ETOUFFE_2" },
      { text: "5 claques dans le dos", detail: "Talon de la main entre les omoplates. Fort.", voice: "Donnez cinq grandes claques fermes dans le dos avec le plat de la main, entre les omoplates.", video: "PLACEHOLDER_ETOUFFE_3" },
      { text: "5 compressions abdominales", detail: "Poing entre nombril et sternum. Vers le haut et vers soi.", voice: "Poing entre le nombril et le sternum. Saisissez votre poing. Poussez fort vers le haut et vers vous, cinq fois.", video: "PLACEHOLDER_ETOUFFE_4" },
      { text: "Alternez jusqu'au résultat", detail: "5 claques + 5 compressions jusqu'à désobstruction.", voice: "Alternez cinq claques dans le dos et cinq compressions abdominales jusqu'à expulsion du corps étranger.", video: "PLACEHOLDER_ETOUFFE_5" },
      { text: "Si perte de conscience", detail: "Allongez, appelez le 15, RCP.", voice: "Si la personne perd conscience, allongez-la, appelez le 15 et commencez la réanimation immédiatement.", video: "PLACEHOLDER_ETOUFFE_6" },
    ],
  },

  etouffement_nourrisson: {
    title: "😮‍💨 Étouffement — Nourrisson (-1 an)",
    showMetronome: false, showTimer: false,
    steps: [
      { text: "JAMAIS de Heimlich abdominal", detail: "Uniquement claques dos + compressions thoraciques.", voice: "Attention : ne faites jamais de compressions abdominales sur un nourrisson.", video: "PLACEHOLDER_ETOUFFE_NOUR_1" },
      { text: "Face vers le bas sur l'avant-bras", detail: "Tête plus basse que le corps.", voice: "Placez le nourrisson face vers le bas sur votre avant-bras, tête plus basse que le corps.", video: "PLACEHOLDER_ETOUFFE_NOUR_2" },
      { text: "5 claques dans le dos", detail: "Talon de la main. Doux mais ferme.", voice: "Donnez cinq claques dans le dos avec le talon de la main, entre les omoplates.", video: "PLACEHOLDER_ETOUFFE_NOUR_3" },
      { text: "Retournez sur le dos — 5 compressions thoraciques", detail: "2 doigts au centre de la poitrine. Vers le bas.", voice: "Retournez le nourrisson sur le dos. Deux doigts au centre de la poitrine. Cinq compressions vers le bas.", video: "PLACEHOLDER_ETOUFFE_NOUR_4" },
      { text: "Alternez jusqu'au résultat", detail: "5 claques dos + 5 compressions thoraciques.", voice: "Alternez cinq claques dans le dos et cinq compressions thoraciques jusqu'à désobstruction.", video: "PLACEHOLDER_ETOUFFE_NOUR_5" },
      { text: "Appelez le 15", detail: "Appelez ou faites appeler.", voice: "Appelez le 15 immédiatement.", video: "PLACEHOLDER_ETOUFFE_NOUR_6" },
    ],
  },

  // ─── AUTRES URGENCES ───
  avc: {
    title: "🧠 AVC — Accident Vasculaire Cérébral",
    showMetronome: false, showTimer: true,
    steps: [
      { text: "Méthode VITE", detail: "Visage · Incapacité bras · Troubles parole · En urgence", voice: "VITE : V visage asymétrique, I incapacité à lever les bras, T troubles de la parole, E appelez le 15 immédiatement.", video: "PLACEHOLDER_AVC_1" },
      { text: "Appelez le 15", detail: "Notez l'heure exacte d'apparition des signes.", voice: "Appelez le 15 et notez l'heure exacte d'apparition des premiers signes. C'est capital pour le traitement.", video: "PLACEHOLDER_AVC_2" },
      { text: "Allongez, tête surélevée", detail: "Rien à manger ni à boire. Pas d'aspirine.", voice: "Allongez la personne, tête légèrement surélevée. Ne donnez rien à boire ni à manger et surtout pas d'aspirine.", video: "PLACEHOLDER_AVC_3" },
      { text: "Surveillez jusqu'aux secours", detail: "Parlez-lui calmement.", voice: "Restez auprès d'elle, parlez-lui calmement et surveillez sa respiration jusqu'à l'arrivée des secours.", video: "PLACEHOLDER_AVC_4" },
    ],
  },

  hemorragie: {
    title: "🩸 Hémorragie externe",
    showMetronome: false, showTimer: true,
    steps: [
      { text: "Appuyez FORT sur la plaie", detail: "Tissu propre. Sans jamais relâcher.", voice: "Appuyez très fort sur la plaie avec un tissu propre. Ne relâchez jamais la pression.", video: "PLACEHOLDER_HEMO_1" },
      { text: "Allongez ET couvrez", detail: "Couvrez avec veste ou couverture. Évite l'hypothermie.", voice: "Allongez la victime et couvrez-la immédiatement avec une veste ou une couverture pour éviter l'hypothermie.", video: "PLACEHOLDER_HEMO_2" },
      { text: "Si tissu imbibé", detail: "Ajoutez une couche par-dessus SANS enlever la première.", voice: "Si le tissu est imbibé de sang, ajoutez une couche par-dessus sans jamais enlever la première.", video: "PLACEHOLDER_HEMO_3" },
      { text: "Appelez le 15", detail: "Décrivez le saignement.", voice: "Appelez le 15 et décrivez l'abondance du saignement.", video: "PLACEHOLDER_HEMO_4" },
      { text: "Garrot — dernier recours", detail: "Seulement si membre et compression vraiment impossible. 5 cm au-dessus. Notez l'heure.", voice: "Le garrot est un dernier recours uniquement si la compression est vraiment impossible. Serrez fort cinq centimètres au-dessus. Notez l'heure. Ne desserrez jamais.", video: "PLACEHOLDER_HEMO_5" },
    ],
  },

  pls: {
    title: "🤕 Position Latérale de Sécurité",
    showMetronome: false, showTimer: false,
    steps: [
      { text: "Inconsciente + respire → PLS", detail: "Vérifiez conscience et respiration 10 secondes.", voice: "La personne est inconsciente mais respire normalement. Mettez-la en position latérale de sécurité.", video: "PLACEHOLDER_PLS_1" },
      { text: "Appelez le 15", detail: "Appelez immédiatement.", voice: "Appelez le 15 immédiatement.", video: "PLACEHOLDER_PLS_2" },
      { text: "Bras proche à angle droit", detail: "Paume vers le haut.", voice: "Placez le bras le plus proche de vous à angle droit, paume vers le haut.", video: "PLACEHOLDER_PLS_3" },
      { text: "Main sur la joue", detail: "Dos de la main contre la joue. Maintenez.", voice: "Posez le dos de l'autre main contre la joue la plus proche de vous et maintenez-la.", video: "PLACEHOLDER_PLS_4" },
      { text: "Pliez le genou éloigné", detail: "Tirez le pied vers vous.", voice: "Attrapez le genou le plus éloigné et tirez le pied vers vous pour plier la jambe.", video: "PLACEHOLDER_PLS_5" },
      { text: "Basculez vers vous", detail: "Tenez main sur joue + genou plié.", voice: "En maintenant la main sur la joue et le genou plié, basculez doucement la personne vers vous.", video: "PLACEHOLDER_PLS_6" },
      { text: "Vérifiez toutes les 2 minutes", detail: "Tête basculée. Surveiller la respiration.", voice: "Assurez que la tête est basculée pour garder les voies aériennes ouvertes. Vérifiez la respiration toutes les deux minutes.", video: "PLACEHOLDER_PLS_7" },
    ],
  },

  brulure: {
    title: "🔥 Brûlure",
    showMetronome: false, showTimer: true,
    steps: [
      { text: "Éloignez de la source", detail: "Ne retirez pas les vêtements collés.", voice: "Éloignez la victime de la source de chaleur. Ne retirez jamais les vêtements qui collent à la peau.", video: "PLACEHOLDER_BRULURE_1" },
      { text: "Eau fraîche — 15 minutes minimum", detail: "Pas glacée. Démarrez le chrono.", voice: "Faites couler de l'eau fraîche, jamais glacée, sur la brûlure pendant au minimum quinze minutes. Démarrez le chronomètre.", video: "PLACEHOLDER_BRULURE_2" },
      { text: "Appelez le 15 si nécessaire", detail: "Brûlure étendue, visage, enfant, chimique.", voice: "Appelez le 15 si la brûlure est étendue, sur le visage, s'il s'agit d'un enfant ou d'une brûlure chimique.", video: "PLACEHOLDER_BRULURE_3" },
      { text: "Ne percez pas les cloques", detail: "Pas de beurre, huile, crème.", voice: "Ne percez jamais les cloques. N'appliquez ni beurre, ni huile, ni aucun corps gras.", video: "PLACEHOLDER_BRULURE_4" },
      { text: "Couvrez sans serrer", detail: "Film alimentaire ou compresse non adhérente.", voice: "Après le refroidissement, couvrez avec un film alimentaire ou une compresse non adhérente, sans serrer.", video: "PLACEHOLDER_BRULURE_5" },
    ],
  },

  malaise: {
    title: "💊 Malaise",
    showMetronome: false, showTimer: false,
    steps: [
      { text: "Stimulez et installez", detail: "Sans surélever les jambes. Desserrez les vêtements.", voice: "Appelez la personne, stimulez doucement. Installez-la confortablement sans surélever les jambes. Desserrez les vêtements.", video: "PLACEHOLDER_MALAISE_1" },
      { text: "Vérifiez si diabétique", detail: "Cherchez insuline ou sucre près d'elle.", voice: "Vérifiez si elle est diabétique. Cherchez de l'insuline ou du sucre près d'elle. Si oui, donnez-lui du sucre ou un jus de fruit.", video: "PLACEHOLDER_MALAISE_2" },
      { text: "Appelez le 15 si nécessaire", detail: "Douleur thoracique, perte de connaissance, absence d'amélioration.", voice: "Appelez le 15 si douleur thoracique, perte de connaissance ou absence d'amélioration.", video: "PLACEHOLDER_MALAISE_3" },
      { text: "Si inconsciente + respire → PLS", detail: "Appelez le 15 + PLS.", voice: "Si la personne perd conscience mais respire, placez-la en position latérale de sécurité et appelez le 15.", video: "PLACEHOLDER_MALAISE_4" },
      { text: "Si inconsciente + ne respire pas → RCP", detail: "RCP immédiate.", voice: "Si la personne ne respire plus, commencez la réanimation immédiatement.", video: "PLACEHOLDER_MALAISE_5" },
    ],
  },

  noyade: {
    title: "🌊 Noyade",
    showMetronome: false, showTimer: true,
    steps: [
      { text: "Ne sautez pas sans évaluer", detail: "Tendez une corde, vêtement, perche.", voice: "N'entrez pas dans l'eau sans évaluer. Tendez une corde, un vêtement ou une perche.", video: "PLACEHOLDER_NOYADE_1" },
      { text: "Appelez le 15 ou le 196", detail: "Position précise.", voice: "Appelez le 15, le 18 ou le 196 pour les secours en mer. Donnez votre position précise.", video: "PLACEHOLDER_NOYADE_2" },
      { text: "Sortez la victime de l'eau", detail: "Immobilisez la nuque si plongeon.", voice: "Sortez la victime de l'eau. En cas de plongeon, immobilisez la nuque.", video: "PLACEHOLDER_NOYADE_3" },
      { text: "5 insufflations d'abord", detail: "Différent de la RCP standard.", voice: "Commencez par cinq insufflations avant les compressions. C'est différent du protocole standard.", video: "PLACEHOLDER_NOYADE_4" },
      { text: "RCP 30:2 jusqu'aux secours", detail: "30 compressions + 2 insufflations.", voice: "Continuez trente compressions et deux insufflations sans interruption jusqu'aux secours.", video: "PLACEHOLDER_NOYADE_5" },
    ],
  },
};

// ── SÉLECTEUR VICTIME ──
const URGENCE_MENU = [
  {
    id: "arret_cardiaque",
    icon: "❤️",
    title: "Arrêt cardiaque",
    sub: "RCP · Massage cardiaque",
    variants: [
      { label: "Adulte (8 ans+)", protocol: "rcp_adulte" },
      { label: "Enfant (1-8 ans)", protocol: "rcp_enfant" },
      { label: "Nourrisson (-1 an)", protocol: "rcp_nourrisson" },
    ]
  },
  {
    id: "etouffement",
    icon: "😮‍💨",
    title: "Étouffement",
    sub: "Obstruction voies aériennes",
    variants: [
      { label: "Adulte / Enfant", protocol: "etouffement_adulte" },
      { label: "Nourrisson (-1 an)", protocol: "etouffement_nourrisson" },
    ]
  },
  { id: "avc", icon: "🧠", title: "AVC", sub: "Accident vasculaire cérébral", protocol: "avc" },
  { id: "hemorragie", icon: "🩸", title: "Hémorragie", sub: "Compression · Garrot", protocol: "hemorragie" },
  { id: "pls", icon: "🤕", title: "Inconscient qui respire", sub: "Position Latérale de Sécurité", protocol: "pls" },
  { id: "brulure", icon: "🔥", title: "Brûlure", sub: "Premiers soins brûlures", protocol: "brulure" },
  { id: "malaise", icon: "💊", title: "Malaise", sub: "Hypoglycémie · Syncope", protocol: "malaise" },
  { id: "noyade", icon: "🌊", title: "Noyade", sub: "Extraction · RCP aquatique", protocol: "noyade" },
];

// ── STATE ──
let currentProtocol = null;
let currentStep = 0;
let voiceEnabled = true;
let metronomeInterval = null;
let timerInterval = null;
let timerSeconds = 0;
let timerRunning = false;
let vocalMode = false;
let recognition = null;
let isListening = false;
let vocalHistory = [];

// ── INIT ──
document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
});

// ── RENDER MENU ──
function renderMenu() {
  const grid = document.getElementById("emergency-grid");
  if (!grid) return;
  grid.innerHTML = URGENCE_MENU.map(u => `
    <button class="emergency-btn ${u.id === 'arret_cardiaque' ? 'e-rcp' : ''}"
      onclick="selectUrgence('${u.id}')">
      <div class="e-icon">${u.icon}</div>
      <div class="e-info">
        <div class="e-title">${u.title}</div>
        <div class="e-sub">${u.sub}</div>
      </div>
      <div class="e-arrow">→</div>
    </button>
  `).join("");
}

// ── SELECT URGENCE ──
function selectUrgence(id) {
  const urgence = URGENCE_MENU.find(u => u.id === id);
  if (!urgence) return;

  // Si pas de variants → lancer directement
  if (urgence.protocol) {
    startGuide(urgence.protocol);
    return;
  }

  // Sinon → afficher le sélecteur de victime
  showVictimSelector(urgence);
}

function showVictimSelector(urgence) {
  document.getElementById("view-selector").style.display = "none";
  document.getElementById("view-victim").style.display = "block";

  document.getElementById("victim-title").textContent = `${urgence.icon} ${urgence.title}`;
  document.getElementById("victim-subtitle").textContent = "Qui est la victime ?";

  const btns = document.getElementById("victim-btns");
  btns.innerHTML = urgence.variants.map(v => `
    <button class="victim-btn" onclick="startGuide('${v.protocol}')">
      <span class="victim-label">${v.label}</span>
      <span class="victim-arrow">→</span>
    </button>
  `).join("");
}

function backToMenu() {
  document.getElementById("view-victim").style.display = "none";
  document.getElementById("view-guide").style.display = "none";
  document.getElementById("view-selector").style.display = "block";
  stopVocalMode();
  VigioVoice.stop();
}

// ── START GUIDE ──
function startGuide(type) {
  const proto = PROTOCOLS[type];
  if (!proto) return;
  currentProtocol = proto;
  currentStep = 0;
  vocalHistory = [];

  document.getElementById("view-selector").style.display = "none";
  document.getElementById("view-victim").style.display = "none";
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
  timerSeconds = 0;
  currentProtocol = null;
  currentStep = 0;

  document.getElementById("view-guide").style.display = "none";
  document.getElementById("view-selector").style.display = "block";
  document.getElementById("steps-container").innerHTML = "";
  document.getElementById("video-container").style.display = "none";
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
  document.querySelectorAll(".step-item").forEach((el, i) => {
    el.classList.remove("active");
    if (i < index) {
      el.classList.add("done");
      const num = document.getElementById(`step-num-${i}`);
      if (num) num.textContent = "";
    }
    const actions = document.getElementById(`step-actions-${i}`);
    if (actions) actions.style.display = "none";
  });

  const activeEl = document.getElementById(`step-${index}`);
  if (!activeEl) { showComplete(); return; }

  activeEl.classList.remove("done");
  activeEl.classList.add("active");
  const actions = document.getElementById(`step-actions-${index}`);
  if (actions) actions.style.display = "flex";
  activeEl.scrollIntoView({ behavior: "smooth", block: "center" });

  // Charger la vidéo de cette étape
  loadStepVideo(index);

  if (voiceEnabled && withVoice) {
    const step = currentProtocol.steps[index];
    VigioVoice.speak(step.voice || step.text, true);
  }
}

// ── VIDEO PLAYER ──
function loadStepVideo(index) {
  const step = currentProtocol.steps[index];
  const videoId = step.video;
  const container = document.getElementById("video-container");
  const iframe = document.getElementById("video-iframe");
  const placeholder = document.getElementById("video-placeholder");

  if (!videoId || videoId.startsWith("PLACEHOLDER_")) {
    // Pas encore de vidéo — afficher placeholder
    container.style.display = "block";
    if (iframe) iframe.style.display = "none";
    if (placeholder) {
      placeholder.style.display = "flex";
      placeholder.querySelector(".placeholder-text").textContent =
        `Vidéo — ${step.text}`;
    }
    return;
  }

  // Vidéo YouTube disponible
  container.style.display = "block";
  if (placeholder) placeholder.style.display = "none";
  if (iframe) {
    iframe.style.display = "block";
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1`;
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
  document.getElementById("video-container").style.display = "none";
  const container = document.getElementById("steps-container");
  const el = document.createElement("div");
  el.className = "guide-complete";
  el.innerHTML = `
    <div style="font-size:48px;margin-bottom:12px;">✅</div>
    <h3>Guide terminé</h3>
    <p>Restez auprès de la victime jusqu'à l'arrivée des secours.</p>
    <div style="margin-top:20px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
      <button class="btn-secondary" onclick="stopGuide()">← Recommencer</button>
      <a href="tel:15" class="btn-primary">📞 Appeler le 15</a>
    </div>
  `;
  container.appendChild(el);
  VigioVoice.speak("Guide terminé. Excellent. Restez auprès de la victime jusqu'à l'arrivée des secours.", true);
}

// ── VOICE TOGGLE ──
function toggleVoice() {
  voiceEnabled = !voiceEnabled;
  const btn = document.getElementById("btn-voice");
  if (btn) { btn.textContent = voiceEnabled ? "🔊" : "🔇"; btn.classList.toggle("muted", !voiceEnabled); }
  if (!voiceEnabled) VigioVoice.stop();
}

// ── MODE VOCAL IA ──
function toggleVocalMode() {
  vocalMode ? stopVocalMode() : startVocalMode();
}

async function startVocalMode() {
  if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
    alert("La reconnaissance vocale nécessite Chrome.");
    return;
  }
  vocalMode = true;
  updateVocalBtn();
  document.getElementById("vocal-panel").style.display = "block";
  setVocalStatus("listening", "Je vous écoute...");

  const step = currentProtocol.steps[currentStep];
  vocalHistory = [{ role: "user", content: `Contexte : ${currentProtocol.title}, étape ${currentStep + 1} : ${step.text}` },
    { role: "assistant", content: `Étape ${currentStep + 1} : ${step.voice || step.text} Dites "suivant" quand vous êtes prêt.` }];

  await VigioVoice.speak(`Mode vocal activé. ${step.voice || step.text} Dites suivant quand vous êtes prêt.`, true);
  waitAndListen(1500);
}

function stopVocalMode() {
  vocalMode = false;
  isListening = false;
  if (recognition) { try { recognition.abort(); } catch(e) {} recognition = null; }
  VigioVoice.stop();
  updateVocalBtn();
  const panel = document.getElementById("vocal-panel");
  if (panel) panel.style.display = "none";
}

function updateVocalBtn() {
  const btn = document.getElementById("btn-vocal-mode");
  if (!btn) return;
  if (vocalMode) { btn.textContent = "⏹ Arrêter le mode vocal"; btn.style.background = "var(--red)"; btn.style.color = "white"; }
  else { btn.textContent = "🎙 Mode vocal IA"; btn.style.background = ""; btn.style.color = ""; }
}

function stopListening() {
  isListening = false;
  if (recognition) { try { recognition.abort(); } catch(e) {} recognition = null; }
}

function waitAndListen(delay = 1500) {
  if (!vocalMode) return;
  const check = () => {
    if (!vocalMode) return;
    const audio = window.__vigioAudio;
    if (audio && !audio.paused && !audio.ended && audio.currentTime > 0) { setTimeout(check, 300); }
    else { setTimeout(() => vocalMode && startListening(), delay); }
  };
  setTimeout(check, 200);
}

function startListening() {
  if (!vocalMode) return;
  const audio = window.__vigioAudio;
  if (audio && !audio.paused && !audio.ended && audio.currentTime > 0) { setTimeout(() => vocalMode && startListening(), 500); return; }
  stopListening();
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SR();
  recognition.lang = "fr-FR";
  recognition.continuous = false;
  recognition.interimResults = true;
  let final = "";

  recognition.onstart = () => { isListening = true; setVocalStatus("listening", "Je vous écoute..."); };
  recognition.onresult = (e) => {
    final = "";
    let interim = "";
    for (let i = e.resultIndex; i < e.results.length; i++) {
      if (e.results[i].isFinal) final += e.results[i][0].transcript;
      else interim += e.results[i][0].transcript;
    }
    if (final || interim) setVocalStatus("listening", `"${final || interim}"`);
  };
  recognition.onend = () => { isListening = false; if (final.trim() && vocalMode) handleVocalInput(final.trim()); else if (vocalMode) setTimeout(() => vocalMode && startListening(), 800); };
  recognition.onerror = (e) => { if (e.error === "no-speech" && vocalMode) setTimeout(() => vocalMode && startListening(), 800); };
  try { recognition.start(); } catch(e) {}
}

async function handleVocalInput(text) {
  if (!vocalMode || !currentProtocol) return;
  stopListening();
  setVocalStatus("thinking", `Vous : "${text}"`);
  addVocalMessage("user", text);

  const t = text.toLowerCase().trim();
  const isNext = /^(suivant|ok|fait|continue|go|ça y est|j'ai fait|done|next|compris|oui)$/i.test(t);
  const isPrev = /^(précédent|retour|avant|revenir)$/i.test(t);
  const isRepeat = /^(répète|répéter|redis|quoi|pardon|comment|encore)$/i.test(t);
  const isStop = /^(stop|arrête|fin|quitter|terminer)$/i.test(t);
  const isCall = /^(appelle|urgence|15|samu|pompiers)$/i.test(t);

  if (isStop) { stopVocalMode(); return; }
  if (isCall) { await VigioVoice.speak("J'appelle les secours.", true); window.location.href = "tel:15"; return; }

  if (isRepeat) {
    const msg = currentProtocol.steps[currentStep].voice || currentProtocol.steps[currentStep].text;
    addVocalMessage("assistant", msg);
    await VigioVoice.speak(msg, true);
    waitAndListen(1500);
    return;
  }

  if (isPrev && currentStep > 0) {
    currentStep--;
    activateStep(currentStep, false);
    const msg = `Retour étape ${currentStep + 1} : ${currentProtocol.steps[currentStep].voice}`;
    addVocalMessage("assistant", msg);
    await VigioVoice.speak(msg, true);
    waitAndListen(1500);
    return;
  }

  if (isNext) {
    if (currentStep >= currentProtocol.steps.length - 1) { showComplete(); return; }
    currentStep++;
    activateStep(currentStep, false);
    const msg = `Étape ${currentStep + 1} : ${currentProtocol.steps[currentStep].voice}`;
    addVocalMessage("assistant", msg);
    await VigioVoice.speak(msg, true);
    waitAndListen(1500);
    return;
  }

  // Question libre → Claude Haiku
  setVocalStatus("thinking", "Vigio réfléchit...");
  const step = currentProtocol.steps[currentStep];
  try {
    const reply = await VigioAI.askVocal(`Guidage "${currentProtocol.title}", étape ${currentStep + 1} "${step.text}". Question : ${text}`, vocalHistory);
    vocalHistory.push({ role: "user", content: text }, { role: "assistant", content: reply });
    if (vocalHistory.length > 10) vocalHistory = vocalHistory.slice(-10);
    addVocalMessage("assistant", reply);
    setVocalStatus("speaking", "Vigio parle...");
    await VigioVoice.speak(reply, true);
    waitAndListen(1500);
  } catch(e) {
    const fallback = currentProtocol.steps[currentStep].voice;
    addVocalMessage("assistant", fallback);
    await VigioVoice.speak(fallback, true);
    waitAndListen(1500);
  }
}

function setVocalStatus(state, text) {
  const ind = document.getElementById("vocal-indicator");
  const txt = document.getElementById("vocal-status-text");
  if (!ind || !txt) return;
  ind.className = "vocal-indicator";
  if (state === "listening") ind.classList.add("listening");
  if (state === "thinking") ind.classList.add("thinking");
  if (state === "speaking") ind.classList.add("speaking");
  txt.textContent = text;
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

// ── METRONOME ──
function startMetronome() {
  if (metronomeInterval) return;
  document.getElementById("btn-metro-start").style.display = "none";
  document.getElementById("btn-metro-stop").style.display = "inline-flex";
  metronomeInterval = setInterval(() => {
    const beat = document.getElementById("metro-beat");
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
  const el = document.getElementById("timer-display");
  if (el) el.textContent = `${m}:${s}`;
}

function callEmergency() { window.location.href = "tel:15"; }
