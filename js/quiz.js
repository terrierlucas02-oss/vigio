// ═══════════════════════════════════════════
// VIGIO — QUIZ
// ═══════════════════════════════════════════

const QUIZ_THEMES = [
  {
    id: "cardiaque",
    icon: "❤️",
    name: "Arrêt cardiaque & RCP",
    color: "#E8281A",
  },
  {
    id: "respiration",
    icon: "😮‍💨",
    name: "Étouffement & Respiration",
    color: "#F59E0B",
  },
  {
    id: "neurologie",
    icon: "🧠",
    name: "AVC & Neurologie",
    color: "#A855F7",
  },
  {
    id: "trauma",
    icon: "🩸",
    name: "Traumatismes",
    color: "#EF4444",
  },
  {
    id: "autre",
    icon: "🔥",
    name: "Brûlures & Divers",
    color: "#F97316",
  },
];

const QUESTIONS = [
  // ─── CARDIAQUE ───
  {
    theme: "cardiaque",
    q: "Quelle est la profondeur recommandée des compressions thoraciques lors d'une RCP adulte ?",
    answers: ["2-3 cm", "5-6 cm", "8-10 cm", "1-2 cm"],
    correct: 1,
    explanation: "Les compressions doivent être de 5 à 6 cm de profondeur chez l'adulte. Trop superficielles, elles sont inefficaces. Trop profondes, elles risquent de fracturer les côtes."
  },
  {
    theme: "cardiaque",
    q: "Quel est le rythme optimal de compressions thoraciques ?",
    answers: ["60 par minute", "80 par minute", "100 à 120 par minute", "150 par minute"],
    correct: 2,
    explanation: "Le rythme recommandé est de 100 à 120 compressions par minute. L'astuce : le tempo de 'Stayin' Alive' des Bee Gees est à 103 bpm — parfait !"
  },
  {
    theme: "cardiaque",
    q: "En RCP adulte sans formation aux insufflations, que faut-il faire ?",
    answers: ["Arrêter et appeler", "Faire uniquement des compressions", "Attendre l'arrivée des secours", "Faire des insufflations quand même"],
    correct: 1,
    explanation: "Si vous n'êtes pas formé aux insufflations, faites uniquement des compressions thoraciques en continu. C'est toujours bien plus efficace que de ne rien faire."
  },
  {
    theme: "cardiaque",
    q: "Où placer les mains pour le massage cardiaque ?",
    answers: ["Sur l'estomac", "Sur la partie haute du sternum", "Au centre du thorax, moitié inférieure du sternum", "Sur le côté gauche du thorax"],
    correct: 2,
    explanation: "Les mains se placent au centre du thorax, sur la moitié inférieure du sternum. Ni trop haut (fracture sternum), ni sur le ventre."
  },
  {
    theme: "cardiaque",
    q: "Le défibrillateur (DAE) peut-il faire du mal à la victime ?",
    answers: ["Oui, si le coeur bat encore", "Non, il analyse et ne choque que si nécessaire", "Oui, il peut brûler la peau", "Seulement chez les enfants"],
    correct: 1,
    explanation: "Le DAE analyse le rythme cardiaque et ne délivre un choc que si c'est médicalement nécessaire. Il est conçu pour être utilisé par des non-professionnels en toute sécurité."
  },
  {
    theme: "cardiaque",
    q: "Pour une RCP enfant (1-8 ans), par quoi commence-t-on ?",
    answers: ["30 compressions comme l'adulte", "5 insufflations initiales, puis 30:2", "Appeler le 15 d'abord, toujours", "100 compressions sans insufflation"],
    correct: 1,
    explanation: "Chez l'enfant, l'arrêt cardiaque est souvent d'origine respiratoire. On commence donc par 5 insufflations avant de démarrer le cycle 30:2."
  },
  {
    theme: "cardiaque",
    q: "Quelle est la première action à faire devant quelqu'un d'inconscient ?",
    answers: ["Commencer le massage cardiaque immédiatement", "Vérifier la sécurité des lieux puis évaluer la conscience", "Appeler les proches", "Mettre en PLS"],
    correct: 1,
    explanation: "La sécurité d'abord, toujours. Puis on évalue la conscience, la respiration, on appelle les secours — dans cet ordre."
  },
  {
    theme: "cardiaque",
    q: "Si le tissu qu'on utilise pour comprimer une plaie est imbibé de sang, que fait-on ?",
    answers: ["On le retire et on en met un propre", "On ajoute une couche par-dessus sans retirer le premier", "On serre plus fort", "On cesse la compression"],
    correct: 1,
    explanation: "On ne retire jamais le premier pansement : cela détacherait les caillots en formation. On ajoute une couche par-dessus et on continue à appuyer."
  },

  // ─── RESPIRATION ───
  {
    theme: "respiration",
    q: "Quand fait-on la manœuvre de Heimlich ?",
    answers: ["Si la personne tousse fort", "Si la personne ne peut pas parler et suffoque", "Dès qu'elle se racle la gorge", "Si elle a de la fièvre"],
    correct: 1,
    explanation: "Heimlich se fait uniquement en cas d'étouffement complet : la personne ne peut pas parler, tousse faiblement ou pas du tout, devient cyanosée."
  },
  {
    theme: "respiration",
    q: "Dans quel ordre réalise-t-on les gestes pour un adulte qui s'étouffe ?",
    answers: ["Compressions abdominales d'abord", "5 tapes dans le dos, puis 5 compressions abdominales", "Appeler le 15 d'abord", "Compressions thoraciques"],
    correct: 1,
    explanation: "Toujours dans cet ordre : pencher en avant, 5 tapes dans le dos entre les omoplates, vérifier, puis si échec : 5 compressions abdominales (Heimlich)."
  },
  {
    theme: "respiration",
    q: "Comment réalise-t-on les tapes dans le dos ?",
    answers: ["Doucement, avec la paume ouverte sur la nuque", "Fermement, avec le talon de la main entre les omoplates", "Avec le bout des doigts, légèrement", "Sur les reins"],
    correct: 1,
    explanation: "Les tapes doivent être fermes, avec le talon de la main, entre les omoplates. L'objectif est de créer un choc mécanique pour déloger le corps étranger."
  },
  {
    theme: "respiration",
    q: "Que faire si un nourrisson s'étouffe ?",
    answers: ["Faire la manœuvre de Heimlich abdominale", "Tapes dans le dos + compressions thoraciques (pas abdominales)", "Le retourner et secouer fort", "Mettre le doigt dans la bouche"],
    correct: 1,
    explanation: "Chez le nourrisson, on ne fait JAMAIS la manœuvre de Heimlich abdominale (risque de lésions). On alterne tapes dans le dos + compressions thoraciques avec 2 doigts."
  },
  {
    theme: "respiration",
    q: "Pour une noyade, comment adapte-t-on la RCP ?",
    answers: ["Identique à l'adulte classique", "On commence par 5 insufflations avant les compressions", "On commence par 50 compressions", "On attend que la victime vomisse l'eau"],
    correct: 1,
    explanation: "La noyade est avant tout une asphyxie. On commence donc par 5 insufflations pour réoxygéner, avant de démarrer le cycle 30:2 habituel."
  },

  // ─── NEUROLOGIE ───
  {
    theme: "neurologie",
    q: "Que signifie le V dans la méthode VITE pour l'AVC ?",
    answers: ["Vomissement", "Visage asymétrique (sourire déformé)", "Vertiges", "Vertige ou vision trouble"],
    correct: 1,
    explanation: "V = Visage. On demande à la personne de sourire : si un côté de la bouche est affaissé, c'est un signe d'AVC. Chaque lettre de VITE correspond à un signe."
  },
  {
    theme: "neurologie",
    q: "Pourquoi est-il crucial de noter l'heure d'apparition des signes d'AVC ?",
    answers: ["Pour remplir les papiers à l'hôpital", "Car les traitements (thrombolyse) doivent être administrés dans une fenêtre de temps précise", "Pour calculer l'indemnisation", "C'est une simple formalité"],
    correct: 1,
    explanation: "La thrombolyse (dissolving le caillot) n'est efficace et sûre que dans les 4h30 suivant le début des symptômes. L'heure exacte est donc capitale pour le traitement."
  },
  {
    theme: "neurologie",
    q: "Peut-on donner de l'aspirine à quelqu'un en plein AVC ?",
    answers: ["Oui, ça fluidifie le sang", "Non, sans avis médical c'est dangereux", "Oui, si on n'a rien d'autre", "Seulement de l'ibuprofène"],
    correct: 1,
    explanation: "NON. L'AVC peut être hémorragique (saignement). L'aspirine aggraverait alors l'hémorragie. Seul le médecin détermine le traitement approprié."
  },
  {
    theme: "neurologie",
    q: "Quelle position pour une personne suspectée d'AVC ?",
    answers: ["À plat, jambes surélevées", "Assise ou semi-allongée, tête légèrement surélevée", "Debout appuyée à un mur", "En PLS immédiatement"],
    correct: 1,
    explanation: "On installe la personne en position semi-allongée, tête légèrement surélevée, confortablement. La PLS n'est indiquée que si elle perd conscience."
  },

  // ─── TRAUMA ───
  {
    theme: "trauma",
    q: "Lors d'une hémorragie, à quel moment pose-t-on un garrot ?",
    answers: ["Toujours en premier", "Si la compression directe n'est pas suffisante sur un membre", "Seulement si la plaie est au cou", "Jamais, c'est dangereux"],
    correct: 1,
    explanation: "Le garrot est un recours ultime pour les membres quand la compression directe ne suffit pas. Bien posé et maintenu, il sauve des vies. Il ne faut jamais le desserrer."
  },
  {
    theme: "trauma",
    q: "Où se pose le garrot ?",
    answers: ["Directement sur la plaie", "5 à 7 cm au-dessus de la plaie, jamais sur une articulation", "Sous la plaie", "Sur l'articulation la plus proche"],
    correct: 1,
    explanation: "Le garrot se pose 5 à 7 cm au-dessus de la plaie pour comprimer les vaisseaux sanguins. Il ne doit jamais être posé sur une articulation (genou, coude)."
  },
  {
    theme: "trauma",
    q: "Pour une brûlure, quelle est la première action ?",
    answers: ["Mettre du beurre ou de la crème", "Faire couler de l'eau fraîche minimum 15 minutes", "Percer les cloques", "Appliquer de la glace"],
    correct: 1,
    explanation: "Eau fraîche (pas glacée !) pendant au minimum 15 minutes. L'eau stoppe la brûlure en profondeur et soulage la douleur. Beurre, crème et glace sont PROHIBÉS."
  },
  {
    theme: "trauma",
    q: "Peut-on tenter de réduire (remettre en place) une fracture visible ?",
    answers: ["Oui, délicatement", "Non, jamais — c'est réservé aux médecins", "Oui si on est loin d'un hôpital", "Oui pour les petits os"],
    correct: 1,
    explanation: "On ne tente JAMAIS de réduire une fracture. On immobilise dans la position trouvée. Tenter de remettre en place aggrave les lésions et cause une douleur intense."
  },

  // ─── AUTRE ───
  {
    theme: "autre",
    q: "Comment utiliser un extincteur ? Méthode PASS — que signifie le premier S ?",
    answers: ["Sortir", "Squeeze — serrer la poignée", "Sécurité", "Surveillance"],
    correct: 1,
    explanation: "PASS : Pin (goupille), Aim (viser la base), Squeeze (serrer la poignée), Sweep (balayer). Le premier S = Squeeze : on appuie sur la gâchette."
  },
  {
    theme: "autre",
    q: "En cas d'hypoglycémie chez un diabétique conscient, que faire ?",
    answers: ["Appeler le 15 immédiatement", "Donner du sucre (jus, boisson sucrée, sucres)", "Ne rien donner, attendre", "Donner de l'insuline"],
    correct: 1,
    explanation: "Si la personne est consciente et peut avaler : donnez du sucre rapide (3 morceaux, jus de fruit, boisson sucrée). Attendez 15 min. Sans amélioration → appelez le 15."
  },
  {
    theme: "autre",
    q: "Que signifie PLS ?",
    answers: ["Position de Lieu Sécurisé", "Position Latérale de Sécurité", "Placement de Latéralité Stable", "Protection des Lésions Sévères"],
    correct: 1,
    explanation: "PLS = Position Latérale de Sécurité. Elle permet de maintenir les voies aériennes ouvertes chez une personne inconsciente qui respire encore."
  },
  {
    theme: "autre",
    q: "En cas de choc anaphylactique avec stylo d'adrénaline disponible, où l'injecte-t-on ?",
    answers: ["Dans le bras", "Dans la veine", "Dans la face externe de la cuisse (même à travers le vêtement)", "Dans le ventre"],
    correct: 2,
    explanation: "Le stylo auto-injecteur se pose fermement sur la face externe de la cuisse, même à travers les vêtements. On maintient 10 secondes puis on masse la zone."
  },
  {
    theme: "autre",
    q: "Que fait-on si les vêtements d'une victime de brûlure collent à la peau ?",
    answers: ["On les retire rapidement pour évaluer la brûlure", "On ne les retire pas — risque d'arracher la peau", "On mouille et on tire doucement", "On découpe avec des ciseaux à ras"],
    correct: 1,
    explanation: "On ne retire JAMAIS les vêtements qui adhèrent à la peau. Tirer risque d'emporter de la peau brûlée avec. Les médecins s'en chargeront avec les équipements appropriés."
  },
];

// ── STATE ──
let currentQuiz = [];
let currentQIndex = 0;
let score = 0;
let wrongAnswers = [];
let currentTheme = null;

// ── INIT ──
document.addEventListener("DOMContentLoaded", () => {
  renderThemes();
  renderScoreGlobal();
});

// ── RENDER MENU ──
function renderThemes() {
  const grid = document.getElementById("quiz-themes");
  grid.innerHTML = QUIZ_THEMES.map(theme => {
    const qs = QUESTIONS.filter(q => q.theme === theme.id);
    const best = vigioLoadProgress(`quiz_best_${theme.id}`, null);
    return `
      <button class="theme-card" onclick="startThemeQuiz('${theme.id}')">
        ${best !== null ? `<div class="theme-best">Meilleur : ${best}/${qs.length}</div>` : ""}
        <span class="theme-icon">${theme.icon}</span>
        <div class="theme-name">${theme.name}</div>
        <div class="theme-count">${qs.length} questions</div>
      </button>
    `;
  }).join("");
}

function renderScoreGlobal() {
  const bars = document.getElementById("score-bars");
  bars.innerHTML = QUIZ_THEMES.map(theme => {
    const qs = QUESTIONS.filter(q => q.theme === theme.id);
    const best = vigioLoadProgress(`quiz_best_${theme.id}`, 0);
    const pct = qs.length > 0 ? Math.round((best / qs.length) * 100) : 0;
    return `
      <div class="score-bar-item">
        <div class="score-bar-label">${theme.icon} ${theme.name.split(" ")[0]}</div>
        <div class="score-bar-track">
          <div class="score-bar-fill" style="width:${pct}%"></div>
        </div>
        <div class="score-bar-pct">${pct}%</div>
      </div>
    `;
  }).join("");
}

// ── START QUIZ ──
function startThemeQuiz(themeId) {
  const theme = QUIZ_THEMES.find(t => t.id === themeId);
  const qs = QUESTIONS.filter(q => q.theme === themeId);
  beginQuiz(shuffle(qs), theme?.name || themeId);
  currentTheme = themeId;
}

function startRandomQuiz() {
  const shuffled = shuffle([...QUESTIONS]).slice(0, 10);
  beginQuiz(shuffled, "Quiz aléatoire");
  currentTheme = "random";
}

function beginQuiz(questions, name) {
  currentQuiz = questions;
  currentQIndex = 0;
  score = 0;
  wrongAnswers = [];

  document.getElementById("q-total").textContent = questions.length;
  document.getElementById("quiz-theme-name").textContent = name;
  document.getElementById("view-menu").style.display = "none";
  document.getElementById("view-results").style.display = "none";
  document.getElementById("view-quiz").style.display = "block";
  document.getElementById("question-feedback").style.display = "none";

  showQuestion();
}

// ── SHOW QUESTION ──
function showQuestion() {
  const q = currentQuiz[currentQIndex];
  const total = currentQuiz.length;
  const progress = ((currentQIndex) / total) * 100;

  document.getElementById("q-current").textContent = currentQIndex + 1;
  document.getElementById("quiz-progress-fill").style.width = progress + "%";
  document.getElementById("question-num").textContent = `Question ${currentQIndex + 1}`;
  document.getElementById("question-text").textContent = q.q;
  document.getElementById("question-feedback").style.display = "none";

  const letters = ["A", "B", "C", "D"];
  const grid = document.getElementById("answers-grid");
  grid.innerHTML = q.answers.map((ans, i) => `
    <button class="answer-btn" onclick="selectAnswer(${i})" id="ans-${i}">
      <span class="ans-letter">${letters[i]}</span>
      <span>${ans}</span>
    </button>
  `).join("");
}

// ── SELECT ANSWER ──
function selectAnswer(index) {
  const q = currentQuiz[currentQIndex];
  const isCorrect = index === q.correct;

  // Disable all buttons
  document.querySelectorAll(".answer-btn").forEach(btn => btn.disabled = true);

  // Highlight
  document.getElementById(`ans-${index}`).classList.add(isCorrect ? "correct" : "wrong");
  if (!isCorrect) {
    document.getElementById(`ans-${q.correct}`).classList.add("correct");
    wrongAnswers.push({ q: q.q, correct: q.answers[q.correct] });
  } else {
    score++;
  }

  // Feedback
  const feedback = document.getElementById("question-feedback");
  feedback.style.display = "flex";
  document.getElementById("feedback-icon").textContent = isCorrect ? "✅" : "❌";
  document.getElementById("feedback-text").textContent = isCorrect ? "Bonne réponse !" : "Ce n'est pas la bonne réponse";
  document.getElementById("feedback-expl").textContent = q.explanation;

  const isLast = currentQIndex === currentQuiz.length - 1;
  document.getElementById("btn-next").textContent = isLast ? "Voir mes résultats →" : "Question suivante →";

  feedback.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

// ── NEXT ──
function nextQuestion() {
  currentQIndex++;
  if (currentQIndex >= currentQuiz.length) {
    showResults();
  } else {
    showQuestion();
    document.getElementById("question-card").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// ── RESULTS ──
function showResults() {
  const total = currentQuiz.length;
  const pct = Math.round((score / total) * 100);

  document.getElementById("view-quiz").style.display = "none";
  document.getElementById("view-results").style.display = "block";

  let icon = "🎉", title = "Excellent !";
  if (pct < 50) { icon = "😟"; title = "À revoir…"; }
  else if (pct < 75) { icon = "👍"; title = "Pas mal !"; }
  else if (pct < 90) { icon = "🌟"; title = "Très bien !"; }

  document.getElementById("results-icon").textContent = icon;
  document.getElementById("results-title").textContent = title;
  document.getElementById("results-score").textContent = `${score}/${total}`;
  document.getElementById("results-sub").textContent = `${pct}% de bonnes réponses`;

  // Details
  let details = `
    <div class="result-detail-item">
      <span>Bonnes réponses</span>
      <span class="result-correct">✓ ${score}</span>
    </div>
    <div class="result-detail-item">
      <span>Mauvaises réponses</span>
      <span class="result-wrong">✗ ${total - score}</span>
    </div>
  `;
  if (wrongAnswers.length > 0) {
    details += `<div class="result-detail-item" style="flex-direction:column;gap:6px;align-items:flex-start;">
      <span style="font-weight:600;color:var(--text);">Questions ratées :</span>
      ${wrongAnswers.map(w => `<span style="font-size:12px;color:var(--text-muted);">• ${w.q.substring(0, 60)}… → <strong>${w.correct}</strong></span>`).join("")}
    </div>`;
  }
  document.getElementById("results-details").innerHTML = details;

  // Save best score
  if (currentTheme && currentTheme !== "random") {
    const qs = QUESTIONS.filter(q => q.theme === currentTheme);
    const prev = vigioLoadProgress(`quiz_best_${currentTheme}`, 0);
    if (score > prev) vigioSaveProgress(`quiz_best_${currentTheme}`, score);
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function restartQuiz() {
  if (currentTheme === "random") startRandomQuiz();
  else startThemeQuiz(currentTheme);
}

function stopQuiz() {
  document.getElementById("view-quiz").style.display = "none";
  document.getElementById("view-results").style.display = "none";
  document.getElementById("view-menu").style.display = "block";
  renderThemes();
  renderScoreGlobal();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ── UTILS ──
function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}
