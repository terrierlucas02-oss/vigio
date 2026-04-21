// ═══════════════════════════════════════════
// VIGIO — QUIZ
// Protocoles PSE 2024 · DGSCGC · ILCOR 2024
// Validés référentiel officiel
// ═══════════════════════════════════════════

const QUIZ_THEMES = [
  { id: "cardiaque", icon: "❤️", name: "Arrêt cardiaque & RCP", color: "#E8281A" },
  { id: "respiration", icon: "😮‍💨", name: "Étouffement & Obstruction", color: "#F59E0B" },
  { id: "neurologie", icon: "🧠", name: "AVC & Neurologie", color: "#A855F7" },
  { id: "trauma", icon: "🩸", name: "Hémorragie & Traumatismes", color: "#EF4444" },
  { id: "autre", icon: "🔥", name: "Malaise & Divers", color: "#F97316" },
];

const QUESTIONS = [
  // ─── CARDIAQUE ───
  {
    theme: "cardiaque",
    q: "Quel est le ratio compressions/insufflations pour la RCP adulte (8 ans et plus) ?",
    answers: ["30:2", "15:2", "15:1", "30:1"],
    correct: 0,
    explanation: "Pour l'adulte (8 ans et plus) : 30 compressions puis 2 insufflations. Référentiel PSE 2024."
  },
  {
    theme: "cardiaque",
    q: "Quel est le ratio compressions/insufflations pour la RCP enfant (1 à 8 ans) ?",
    answers: ["30:2", "15:2", "15:1", "5:1"],
    correct: 1,
    explanation: "Pour l'enfant (1 à 8 ans) : 15 compressions puis 2 insufflations. L'arrêt chez l'enfant est souvent d'origine respiratoire, d'où les 5 insufflations initiales et le ratio 15:2."
  },
  {
    theme: "cardiaque",
    q: "Pourquoi commence-t-on la RCP enfant par 5 insufflations initiales ?",
    answers: ["Pour ouvrir les voies aériennes", "Car l'arrêt est souvent d'origine respiratoire chez l'enfant", "C'est le même protocole que l'adulte", "Pour tester si le cœur bat encore"],
    correct: 1,
    explanation: "Chez l'enfant, l'arrêt cardiaque est très souvent causé par une détresse respiratoire. Les 5 insufflations initiales permettent de réoxygéner rapidement avant de démarrer le massage."
  },
  {
    theme: "cardiaque",
    q: "Quelle technique utilise-t-on pour la RCP nourrisson (moins d'1 an) ?",
    answers: ["2 mains comme l'adulte", "1 main comme l'enfant", "2 pouces + encerclement thoracique", "2 doigts posés à plat"],
    correct: 2,
    explanation: "Pour le nourrisson : 2 pouces côte à côte au centre du sternum avec encerclement thoracique des 2 mains. Plus simple pour trouver la localisation et plus efficace que 2 doigts seuls."
  },
  {
    theme: "cardiaque",
    q: "Quelle est la profondeur des compressions pour la RCP adulte ?",
    answers: ["2-3 cm", "5-6 cm", "8-10 cm", "3-4 cm"],
    correct: 1,
    explanation: "Les compressions doivent être de 5 à 6 cm chez l'adulte. Référentiel PSE 2024 / ILCOR 2024."
  },
  {
    theme: "cardiaque",
    q: "Quel est le rythme de compressions recommandé pour toutes les RCP ?",
    answers: ["60-80/min", "80-100/min", "100-120/min", "120-140/min"],
    correct: 2,
    explanation: "100 à 120 compressions par minute pour adulte, enfant et nourrisson. Ce rythme est validé par le référentiel ILCOR 2024."
  },
  {
    theme: "cardiaque",
    q: "Pour la RCP nourrisson, comment couvre-t-on les voies aériennes lors des insufflations ?",
    answers: ["Bouche à bouche uniquement", "Bouche à nez uniquement", "Bouche couvrant bouche ET nez ensemble", "Masque facial uniquement"],
    correct: 2,
    explanation: "Chez le nourrisson, on couvre à la fois la bouche ET le nez avec sa bouche pour réaliser les insufflations. La taille du visage du bébé le permet."
  },
  {
    theme: "cardiaque",
    q: "Si on n'est pas formé aux insufflations, que fait-on ?",
    answers: ["On attend les secours sans rien faire", "On fait uniquement des compressions thoraciques en continu", "On fait 30 compressions puis on attend", "On appelle le 15 et on suit leurs instructions uniquement"],
    correct: 1,
    explanation: "Les compressions seules sont très efficaces. Ne pas savoir faire les insufflations ne doit pas empêcher de commencer la RCP. Continuez les compressions sans interruption."
  },

  // ─── RESPIRATION / OBSTRUCTION ───
  {
    theme: "respiration",
    q: "Quel est le protocole pour l'étouffement adulte/enfant ?",
    answers: ["5 compressions abdominales seulement", "5 claques dos puis 5 compressions abdominales, alterner", "10 claques dans le dos", "Appeler le 15 et attendre"],
    correct: 1,
    explanation: "Protocole OBVA adulte/enfant : 5 claques dans le dos entre les omoplates + 5 compressions abdominales. On alterne jusqu'à désobstruction ou perte de connaissance."
  },
  {
    theme: "respiration",
    q: "Que fait-on en cas d'étouffement chez un nourrisson ?",
    answers: ["Manœuvre de Heimlich abdominale", "5 claques dos + 5 compressions thoraciques, alterner", "5 claques dans le dos uniquement", "Le tenir à l'envers et secouer"],
    correct: 1,
    explanation: "JAMAIS de compressions abdominales sur un nourrisson. On alterne 5 claques dans le dos (tête vers le bas) et 5 compressions thoraciques (2 doigts au centre de la poitrine)."
  },
  {
    theme: "respiration",
    q: "Comment positionne-t-on le nourrisson pour les claques dans le dos ?",
    answers: ["Sur le dos, tête surélevée", "Face vers le bas sur l'avant-bras, tête plus basse que le corps", "Assis sur nos genoux", "Debout, penché en avant"],
    correct: 1,
    explanation: "Le nourrisson est placé face vers le bas sur notre avant-bras, tête plus basse que le corps. La gravité aide à déloger le corps étranger."
  },
  {
    theme: "respiration",
    q: "Pour la noyade, par quoi commence-t-on la RCP ?",
    answers: ["30 compressions comme la RCP standard", "5 insufflations initiales avant les compressions", "On appelle d'abord le 15 sans rien faire", "On secoue la victime pour la faire vomir"],
    correct: 1,
    explanation: "La noyade est une asphyxie. On commence toujours par 5 insufflations avant les compressions, comme pour l'enfant. C'est différent de la RCP adulte standard."
  },

  // ─── NEUROLOGIE ───
  {
    theme: "neurologie",
    q: "Que signifie le V dans la méthode VITE pour l'AVC ?",
    answers: ["Vomissement", "Visage asymétrique", "Vertiges", "Vision trouble"],
    correct: 1,
    explanation: "V = Visage asymétrique. On demande de sourire : si un côté est affaissé, c'est un signe d'AVC. VITE : Visage, Incapacité bras, Troubles parole, En urgence appelez le 15."
  },
  {
    theme: "neurologie",
    q: "Pourquoi noter l'heure exacte d'apparition des signes d'AVC ?",
    answers: ["Pour remplir les papiers administratifs", "Car la thrombolyse n'est efficace que dans les 4h30", "Pour calculer le temps d'intervention des pompiers", "C'est une simple formalité"],
    correct: 1,
    explanation: "La thrombolyse (traitement dissolvant le caillot) n'est possible que dans les 4h30 suivant le début des symptômes. L'heure précise est donc capitale pour le choix du traitement."
  },
  {
    theme: "neurologie",
    q: "Peut-on donner de l'aspirine à une personne suspecte d'AVC ?",
    answers: ["Oui, ça fluidifie le sang", "Non, jamais sans avis médical", "Oui si on n'a rien d'autre", "Seulement de l'ibuprofène"],
    correct: 1,
    explanation: "NON. L'AVC peut être hémorragique. L'aspirine aggraverait alors l'hémorragie. Seul le médecin peut décider du traitement après avoir fait l'imagerie."
  },

  // ─── TRAUMA ───
  {
    theme: "trauma",
    q: "Lors d'une hémorragie externe, que fait-on si le tissu est imbibé de sang ?",
    answers: ["On le retire et on met un tissu propre", "On ajoute un tissu par-dessus sans enlever le premier", "On serre plus fort", "On cesse la compression quelques secondes"],
    correct: 1,
    explanation: "On ne retire JAMAIS le premier pansement — cela détacherait les caillots en formation. On ajoute une couche par-dessus et on continue à comprimer fort."
  },
  {
    theme: "trauma",
    q: "Pourquoi doit-on allonger ET couvrir une victime qui saigne abondamment ?",
    answers: ["Pour qu'elle soit plus confortable", "Pour éviter l'hypothermie qui fait partie de la triade de la mort", "Pour faciliter le travail des secours", "Uniquement pour éviter qu'elle s'agite"],
    correct: 1,
    explanation: "Quand on perd du sang, l'hypothermie arrive rapidement. Elle fait partie de la triade de la mort avec l'acidose et la coagulopathie. Couvrir la victime est un geste vital."
  },
  {
    theme: "trauma",
    q: "Le garrot est-il le premier geste à faire en cas d'hémorragie de membre ?",
    answers: ["Oui, c'est le geste le plus efficace", "Non, c'est un dernier recours si la compression directe est impossible", "Oui, si la plaie est profonde", "Non, on ne pose jamais de garrot"],
    correct: 1,
    explanation: "Le garrot est un DERNIER RECOURS. Il supprime toute la vascularisation du membre et risque des séquelles graves. On comprime d'abord toujours. Le garrot seulement si compression vraiment impossible."
  },
  {
    theme: "trauma",
    q: "Pour une brûlure, quelle est la première action et combien de temps ?",
    answers: ["Mettre de la crème pendant 5 min", "Eau fraîche (pas glacée) pendant 15 minutes minimum", "Eau froide pendant 5 minutes", "Appliquer du beurre immédiatement"],
    correct: 1,
    explanation: "Eau fraîche (jamais glacée) pendant au minimum 15 minutes. L'eau stoppe la brûlure en profondeur et soulage. Beurre, huile et crème sont proscrits."
  },

  // ─── MALAISE / AUTRE ───
  {
    theme: "autre",
    q: "Doit-on surélever les jambes d'une personne qui fait un malaise ?",
    answers: ["Oui, toujours pour faire remonter le sang", "Non, cela peut être délétère", "Oui mais seulement 30 secondes", "Oui si elle est diabétique"],
    correct: 1,
    explanation: "NON. Surélever les jambes lors d'un malaise vagal peut être plus délétère qu'autre chose. On installe la personne confortablement et on appelle le 15 en cas de doute."
  },
  {
    theme: "autre",
    q: "Que vérifie-t-on en priorité lors d'un malaise pour guider la prise en charge ?",
    answers: ["La tension artérielle", "Si la personne est diabétique — chercher insuline ou sucre près d'elle", "La température", "Le groupe sanguin"],
    correct: 1,
    explanation: "Vérifier si la personne est diabétique est prioritaire — chercher de l'insuline ou du sucre près d'elle. L'hypoglycémie est une cause fréquente de malaise facilement traitable."
  },
  {
    theme: "autre",
    q: "Que fait-on si une personne est inconsciente mais respire normalement ?",
    answers: ["RCP immédiate", "Position Latérale de Sécurité + appeler le 15", "Attendre qu'elle reprenne conscience", "Lui donner de l'eau"],
    correct: 1,
    explanation: "Inconsciente + respire = PLS + appeler le 15. La PLS protège les voies aériennes et évite l'inhalation en cas de vomissements. On surveille la respiration toutes les 2 minutes."
  },
  {
    theme: "autre",
    q: "Comment tient-on un nourrisson inconscient qui respire en PLS ?",
    answers: ["Comme un adulte, allongé sur le côté", "Dans le creux du bras, allongé sur le côté, tête légèrement inclinée vers le bas", "Sur le ventre", "Assis en le soutenant"],
    correct: 1,
    explanation: "Le nourrisson en PLS se tient dans le creux du bras, allongé sur le côté avec la tête légèrement inclinée vers le bas pour drainer d'éventuels vomissements."
  },
  {
    theme: "autre",
    q: "Quels sont les 3 numéros d'urgence à connaître en France ?",
    answers: ["13, 17, 18", "15, 18, 112", "15, 17, 18", "18, 112, 999"],
    correct: 1,
    explanation: "15 = SAMU (urgences médicales), 18 = Pompiers, 112 = numéro européen universel (fonctionne dans toute l'Europe, même sans réseau mobile parfois)."
  },
];

// ── STATE ──
let currentQuiz = [];
let currentQIndex = 0;
let score = 0;
let wrongAnswers = [];
let currentTheme = null;

document.addEventListener("DOMContentLoaded", () => {
  renderThemes();
  renderScoreGlobal();
});

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
        <div class="score-bar-track"><div class="score-bar-fill" style="width:${pct}%"></div></div>
        <div class="score-bar-pct">${pct}%</div>
      </div>
    `;
  }).join("");
}

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

function showQuestion() {
  const q = currentQuiz[currentQIndex];
  const total = currentQuiz.length;
  const progress = (currentQIndex / total) * 100;

  document.getElementById("q-current").textContent = currentQIndex + 1;
  document.getElementById("quiz-progress-fill").style.width = progress + "%";
  document.getElementById("question-num").textContent = `Question ${currentQIndex + 1}`;
  document.getElementById("question-text").textContent = q.q;
  document.getElementById("question-feedback").style.display = "none";

  const letters = ["A", "B", "C", "D"];
  document.getElementById("answers-grid").innerHTML = q.answers.map((ans, i) => `
    <button class="answer-btn" onclick="selectAnswer(${i})" id="ans-${i}">
      <span class="ans-letter">${letters[i]}</span>
      <span>${ans}</span>
    </button>
  `).join("");
}

function selectAnswer(index) {
  const q = currentQuiz[currentQIndex];
  const isCorrect = index === q.correct;

  document.querySelectorAll(".answer-btn").forEach(btn => btn.disabled = true);
  document.getElementById(`ans-${index}`).classList.add(isCorrect ? "correct" : "wrong");
  if (!isCorrect) {
    document.getElementById(`ans-${q.correct}`).classList.add("correct");
    wrongAnswers.push({ q: q.q, correct: q.answers[q.correct] });
  } else {
    score++;
  }

  const feedback = document.getElementById("question-feedback");
  feedback.style.display = "flex";
  document.getElementById("feedback-icon").textContent = isCorrect ? "✅" : "❌";
  document.getElementById("feedback-text").textContent = isCorrect ? "Bonne réponse !" : "Incorrect";
  document.getElementById("feedback-expl").textContent = q.explanation;

  const isLast = currentQIndex === currentQuiz.length - 1;
  document.getElementById("btn-next").textContent = isLast ? "Voir mes résultats →" : "Question suivante →";
  feedback.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function nextQuestion() {
  currentQIndex++;
  if (currentQIndex >= currentQuiz.length) {
    showResults();
  } else {
    showQuestion();
    document.getElementById("question-card").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

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

  let details = `
    <div class="result-detail-item"><span>Bonnes réponses</span><span class="result-correct">✓ ${score}</span></div>
    <div class="result-detail-item"><span>Mauvaises réponses</span><span class="result-wrong">✗ ${total - score}</span></div>
  `;
  if (wrongAnswers.length > 0) {
    details += `<div class="result-detail-item" style="flex-direction:column;gap:6px;align-items:flex-start;">
      <span style="font-weight:600;color:var(--navy);">À revoir :</span>
      ${wrongAnswers.map(w => `<span style="font-size:12px;color:var(--text-muted);">• ${w.q.substring(0, 55)}… → <strong>${w.correct}</strong></span>`).join("")}
    </div>`;
  }
  document.getElementById("results-details").innerHTML = details;

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

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}
