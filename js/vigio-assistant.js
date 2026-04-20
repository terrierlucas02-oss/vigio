// ═══════════════════════════════════════════
// VIGIO — ASSISTANT FLOTTANT PERMANENT
// ═══════════════════════════════════════════

(function () {
  // Ne pas afficher pendant le guidage actif
  const isGuidePage = window.location.pathname.includes("guide.html");

  // ── INJECTION CSS ──
  const style = document.createElement("style");
  style.textContent = `
    /* ── BOUTON VIGIO FLOTTANT ── */
    #vigio-fab {
      position: fixed;
      bottom: 24px;
      right: 24px;
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background: #0D1B2A;
      border: 1.5px solid #C8943A;
      cursor: pointer;
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 24px rgba(200,148,58,0.25), 0 0 0 0 rgba(200,148,58,0.3);
      animation: vigioFabPulse 3s ease infinite;
      transition: transform 0.2s ease;
      outline: none;
    }
    #vigio-fab:hover { transform: scale(1.08); }
    #vigio-fab.hidden { display: none !important; }

    @keyframes vigioFabPulse {
      0%, 100% { box-shadow: 0 4px 24px rgba(200,148,58,0.2), 0 0 0 0 rgba(200,148,58,0.25); }
      50% { box-shadow: 0 4px 32px rgba(200,148,58,0.35), 0 0 0 10px rgba(200,148,58,0); }
    }

    #vigio-fab svg { width: 40px; height: 40px; }

    /* ── BOUTON URGENCE FIXE ── */
    #vigio-urgence-btn {
      position: fixed;
      bottom: 24px;
      left: 24px;
      background: #C0392B;
      color: white;
      border: none;
      border-radius: 12px;
      padding: 12px 18px;
      font-size: 13px;
      font-weight: 700;
      cursor: pointer;
      z-index: 9999;
      letter-spacing: 0.3px;
      box-shadow: 0 4px 20px rgba(192,57,43,0.35);
      transition: all 0.2s ease;
      font-family: system-ui, sans-serif;
    }
    #vigio-urgence-btn:hover {
      background: #e04535;
      transform: translateY(-2px);
      box-shadow: 0 6px 24px rgba(192,57,43,0.45);
    }
    #vigio-urgence-btn.hidden { display: none !important; }

    /* ── OVERLAY ── */
    #vigio-overlay {
      position: fixed;
      bottom: 100px;
      right: 24px;
      width: 360px;
      height: 520px;
      background: #0D1B2A;
      border: 1px solid #C8943A;
      border-radius: 16px;
      z-index: 9998;
      display: none;
      flex-direction: column;
      overflow: hidden;
      box-shadow: 0 16px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(200,148,58,0.1);
      animation: vigioOverlayIn 0.25s ease;
      font-family: system-ui, -apple-system, sans-serif;
    }
    #vigio-overlay.open { display: flex; }

    @keyframes vigioOverlayIn {
      from { opacity: 0; transform: translateY(16px) scale(0.97); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }

    /* Header */
    .vigio-header {
      padding: 20px 16px 12px;
      text-align: center;
      border-bottom: 1px solid rgba(200,148,58,0.15);
      flex-shrink: 0;
      position: relative;
    }

    .vigio-header-logo svg { width: 56px; height: 56px; }

    .vigio-header-title {
      color: #C8943A;
      font-size: 15px;
      font-weight: 600;
      margin-top: 6px;
      font-style: italic;
      letter-spacing: 0.5px;
    }

    .vigio-close {
      position: absolute;
      top: 12px;
      right: 12px;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: rgba(244,241,236,0.08);
      border: 1px solid rgba(244,241,236,0.12);
      color: rgba(244,241,236,0.6);
      font-size: 13px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
    }
    .vigio-close:hover { background: rgba(244,241,236,0.15); color: #F4F1EC; }

    /* Onglets */
    .vigio-tabs {
      display: flex;
      border-bottom: 1px solid rgba(200,148,58,0.15);
      flex-shrink: 0;
    }

    .vigio-tab {
      flex: 1;
      padding: 10px;
      text-align: center;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: rgba(244,241,236,0.4);
      cursor: pointer;
      transition: all 0.2s;
      border: none;
      background: none;
      font-family: system-ui, sans-serif;
    }

    .vigio-tab.active {
      color: #C8943A;
      border-bottom: 2px solid #C8943A;
    }

    .vigio-tab:hover { color: rgba(244,241,236,0.7); }

    /* Panels */
    .vigio-panel {
      display: none;
      flex: 1;
      flex-direction: column;
      overflow: hidden;
    }
    .vigio-panel.active { display: flex; }

    /* ── PANEL DIALOGUE ── */
    .vigio-messages {
      flex: 1;
      overflow-y: auto;
      padding: 14px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .vigio-msg {
      max-width: 88%;
      padding: 9px 12px;
      border-radius: 12px;
      font-size: 13px;
      line-height: 1.55;
    }

    .vigio-msg-assistant {
      background: rgba(244,241,236,0.06);
      border: 1px solid rgba(200,148,58,0.12);
      color: rgba(244,241,236,0.85);
      align-self: flex-start;
      border-top-left-radius: 3px;
    }

    .vigio-msg-user {
      background: #C8943A;
      color: #0D1B2A;
      align-self: flex-end;
      font-weight: 500;
      border-top-right-radius: 3px;
    }

    .vigio-typing {
      display: flex;
      gap: 4px;
      padding: 10px 12px;
      background: rgba(244,241,236,0.06);
      border: 1px solid rgba(200,148,58,0.12);
      border-radius: 12px;
      border-top-left-radius: 3px;
      align-self: flex-start;
    }

    .vigio-dot {
      width: 5px; height: 5px;
      background: #C8943A;
      border-radius: 50%;
      animation: vigioDot 1.2s infinite;
    }
    .vigio-dot:nth-child(2) { animation-delay: 0.2s; }
    .vigio-dot:nth-child(3) { animation-delay: 0.4s; }

    @keyframes vigioDot {
      0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
      30% { transform: translateY(-4px); opacity: 1; }
    }

    .vigio-input-row {
      display: flex;
      gap: 8px;
      padding: 10px 12px;
      border-top: 1px solid rgba(200,148,58,0.12);
      flex-shrink: 0;
    }

    .vigio-input {
      flex: 1;
      background: rgba(244,241,236,0.06);
      border: 1px solid rgba(200,148,58,0.2);
      border-radius: 10px;
      padding: 8px 12px;
      color: #F4F1EC;
      font-size: 13px;
      outline: none;
      resize: none;
      font-family: system-ui, sans-serif;
      max-height: 80px;
      line-height: 1.4;
    }
    .vigio-input:focus { border-color: rgba(200,148,58,0.4); }
    .vigio-input::placeholder { color: rgba(244,241,236,0.25); }

    .vigio-send {
      width: 34px;
      height: 34px;
      background: #C8943A;
      border: none;
      border-radius: 8px;
      color: #0D1B2A;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
      flex-shrink: 0;
      align-self: flex-end;
      margin-bottom: 2px;
    }
    .vigio-send:hover { background: #dba84d; }
    .vigio-send:disabled { opacity: 0.35; cursor: not-allowed; }

    /* ── PANEL URGENCE ── */
    .vigio-urgences {
      flex: 1;
      overflow-y: auto;
      padding: 12px;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .vigio-urg-btn {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 14px;
      background: rgba(244,241,236,0.04);
      border: 1px solid rgba(200,148,58,0.12);
      border-radius: 10px;
      color: #F4F1EC;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
      text-align: left;
      font-family: system-ui, sans-serif;
    }

    .vigio-urg-btn:hover {
      background: rgba(200,148,58,0.1);
      border-color: rgba(200,148,58,0.3);
      transform: translateX(3px);
    }

    .vigio-urg-icon {
      font-size: 20px;
      width: 32px;
      text-align: center;
      flex-shrink: 0;
    }

    .vigio-urg-info { flex: 1; }
    .vigio-urg-title { font-weight: 600; font-size: 13px; color: #F4F1EC; }
    .vigio-urg-sub { font-size: 11px; color: rgba(244,241,236,0.45); margin-top: 1px; }
    .vigio-urg-arrow { color: rgba(200,148,58,0.5); font-size: 14px; transition: all 0.2s; }
    .vigio-urg-btn:hover .vigio-urg-arrow { color: #C8943A; transform: translateX(3px); }

    /* URGENCE ACTIVE */
    .vigio-urg-active {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 12px;
      gap: 10px;
    }

    .vigio-urg-header {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .vigio-urg-back {
      background: none;
      border: none;
      color: rgba(244,241,236,0.5);
      font-size: 12px;
      cursor: pointer;
      padding: 4px 0;
      font-family: system-ui, sans-serif;
      transition: color 0.2s;
    }
    .vigio-urg-back:hover { color: #C8943A; }

    .vigio-urg-step {
      background: rgba(200,148,58,0.06);
      border: 1px solid rgba(200,148,58,0.2);
      border-radius: 10px;
      padding: 14px;
      flex: 1;
    }

    .vigio-step-num {
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: #C8943A;
      margin-bottom: 6px;
    }

    .vigio-step-text {
      color: #F4F1EC;
      font-size: 14px;
      font-weight: 600;
      line-height: 1.4;
      margin-bottom: 6px;
    }

    .vigio-step-detail {
      color: rgba(244,241,236,0.55);
      font-size: 12px;
      line-height: 1.55;
    }

    .vigio-urg-controls {
      display: flex;
      gap: 8px;
    }

    .vigio-urg-next {
      flex: 1;
      padding: 10px;
      background: #C8943A;
      color: #0D1B2A;
      border: none;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      font-family: system-ui, sans-serif;
    }
    .vigio-urg-next:hover { background: #dba84d; }

    .vigio-urg-repeat {
      padding: 10px 14px;
      background: transparent;
      color: rgba(244,241,236,0.6);
      border: 1px solid rgba(200,148,58,0.2);
      border-radius: 8px;
      font-size: 13px;
      cursor: pointer;
      transition: all 0.2s;
      font-family: system-ui, sans-serif;
    }
    .vigio-urg-repeat:hover { border-color: #C8943A; color: #C8943A; }

    .vigio-call-bar {
      display: flex;
      gap: 6px;
      padding: 10px 12px;
      background: rgba(192,57,43,0.08);
      border-top: 1px solid rgba(192,57,43,0.2);
      flex-shrink: 0;
    }

    .vigio-call-btn {
      flex: 1;
      padding: 8px 4px;
      background: #C0392B;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.2s;
      font-family: system-ui, sans-serif;
    }
    .vigio-call-btn:hover { background: #e04535; }

    /* Scrollbar overlay */
    #vigio-overlay ::-webkit-scrollbar { width: 4px; }
    #vigio-overlay ::-webkit-scrollbar-track { background: transparent; }
    #vigio-overlay ::-webkit-scrollbar-thumb { background: rgba(200,148,58,0.2); border-radius: 99px; }
  `;
  document.head.appendChild(style);

  // ── SVG LOGO VIGIO ──
  const LOGO_SVG = `
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 12 A24 24 0 1 1 12 50" stroke="#C8943A" stroke-width="1.5" stroke-linecap="round" fill="none"/>
      <text x="32" y="36" text-anchor="middle" font-family="Georgia,serif" font-weight="700" font-size="11" letter-spacing="2" fill="#F4F1EC">VIGIO</text>
    </svg>`;

  const LOGO_SVG_SMALL = `
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 8 A16 16 0 1 1 8 32" stroke="#C8943A" stroke-width="1.5" stroke-linecap="round" fill="none"/>
    </svg>`;

  // ── PROTOCOLES URGENCE ──
  const URGENCES = [
    {
      id: "cardiac", icon: "❤️", title: "Arrêt cardiaque", sub: "RCP · Massage cardiaque",
      steps: [
        { text: "Vérifiez la sécurité", detail: "Assurez-vous que la zone est sûre.", voice: "Vérifiez que la zone est sûre pour vous et la victime." },
        { text: "Évaluez la conscience", detail: "Secouez les épaules : « Vous m'entendez ? »", voice: "Secouez doucement les épaules. Si pas de réponse, elle est inconsciente." },
        { text: "Appelez le 15", detail: "Désignez quelqu'un si vous n'êtes pas seul.", voice: "Appelez le 15, le 18 ou le 112 immédiatement." },
        { text: "Vérifiez la respiration", detail: "10 secondes max. Absente → RCP.", voice: "Basculez la tête, soulevez le menton. 10 secondes. Si elle ne respire pas, commencez." },
        { text: "Massage cardiaque", detail: "Centre du thorax, 5-6 cm, 100/min.", voice: "Mains au centre de la poitrine. Appuyez fort, cinq à six centimètres, cent fois par minute." },
        { text: "30 compressions + 2 insufflations", detail: "Répétez sans s'arrêter.", voice: "Trente compressions, deux insufflations. Continuez sans vous arrêter." },
      ]
    },
    {
      id: "choking", icon: "😮‍💨", title: "Étouffement", sub: "Manœuvre de Heimlich",
      steps: [
        { text: "Reconnaissez l'étouffement", detail: "Ne peut pas parler, se tient la gorge.", voice: "La personne ne peut pas parler et se tient la gorge. Agissez immédiatement." },
        { text: "5 tapes dans le dos", detail: "Entre les omoplates, penchez-la en avant.", voice: "Penchez-la en avant et donnez cinq tapes fermes entre les omoplates." },
        { text: "5 compressions abdominales", detail: "Poing entre nombril et sternum, vers le haut.", voice: "Placez un poing entre le nombril et le sternum. Poussez fort vers l'intérieur et vers le haut, cinq fois." },
        { text: "Alternez jusqu'au résultat", detail: "5 tapes + 5 compressions.", voice: "Alternez cinq tapes et cinq compressions jusqu'à expulsion du corps étranger." },
      ]
    },
    {
      id: "malaise", icon: "💊", title: "Malaise", sub: "Syncope · Hypoglycémie",
      steps: [
        { text: "Installez confortablement", detail: "Assise ou allongée, vêtements desserrés.", voice: "Installez la personne confortablement, desserrez les vêtements serrés." },
        { text: "Si diabétique : donnez du sucre", detail: "Jus, boisson sucrée. Attendez 15 min.", voice: "Si elle est diabétique, donnez du sucre ou un jus de fruit. Attendez quinze minutes." },
        { text: "Appelez le 15 si nécessaire", detail: "Douleur thoracique, perte de connaissance.", voice: "Appelez le 15 si douleur thoracique, perte de connaissance ou absence d'amélioration." },
      ]
    },
    {
      id: "avc", icon: "🧠", title: "AVC", sub: "Méthode VITE",
      steps: [
        { text: "Méthode VITE", detail: "Visage · Incapacité bras · Troubles parole · En urgence", voice: "VITE : visage asymétrique, incapacité à lever les bras, troubles de la parole. En urgence appelez le 15." },
        { text: "Appelez le 15", detail: "Notez l'heure d'apparition des signes.", voice: "Appelez le 15 et notez l'heure exacte d'apparition des premiers signes." },
        { text: "Allongez, tête surélevée", detail: "Rien à manger ni à boire.", voice: "Allongez la personne, tête légèrement surélevée. Rien à boire ni à manger." },
      ]
    },
    {
      id: "brulure", icon: "🔥", title: "Brûlure", sub: "Eau froide 15 minutes",
      steps: [
        { text: "Eau froide 15 minutes", detail: "Pas glacée. Démarrez un chrono.", voice: "Faites couler de l'eau fraîche sur la brûlure pendant quinze minutes minimum." },
        { text: "Ne percez pas les cloques", detail: "Pas de beurre, huile ou corps gras.", voice: "Ne percez jamais les cloques et n'appliquez aucun corps gras." },
        { text: "Couvrez sans serrer", detail: "Film alimentaire ou compresse.", voice: "Couvrez avec un film alimentaire ou une compresse sans serrer." },
      ]
    },
    {
      id: "hemorragie", icon: "🩸", title: "Saignement", sub: "Compression directe",
      steps: [
        { text: "Appuyez FORT sur la plaie", detail: "Linge propre, sans relâcher.", voice: "Appuyez très fort sur la plaie avec un tissu propre. Ne relâchez jamais." },
        { text: "Appelez le 15", detail: "Décrivez le saignement.", voice: "Appelez le 15 et décrivez l'abondance du saignement." },
        { text: "Garrot si membre incontrôlable", detail: "Au-dessus de la plaie. Notez l'heure.", voice: "Si incontrôlable sur un membre, posez un garrot au-dessus. Notez l'heure de pose." },
      ]
    },
    {
      id: "epilepsie", icon: "⚡", title: "Épilepsie", sub: "Crise convulsive",
      steps: [
        { text: "Protégez sans retenir", detail: "Éloignez les objets dangereux. Ne retenez pas.", voice: "Éloignez les objets dangereux. Ne retenez jamais la personne pendant la crise." },
        { text: "Position latérale après la crise", detail: "Si inconsciente, mettez en PLS.", voice: "Après la crise, si elle est inconsciente, placez-la en position latérale de sécurité." },
        { text: "Appelez le 15 si", detail: "Crise > 5 min, 2e crise, blessure, premier épisode.", voice: "Appelez le 15 si la crise dure plus de cinq minutes, en cas de deuxième crise ou de blessure." },
      ]
    },
    {
      id: "allergie", icon: "🐝", title: "Allergie sévère", sub: "Choc anaphylactique",
      steps: [
        { text: "Reconnaissez le choc", detail: "Urticaire, gonflement, difficultés respiratoires.", voice: "Gonflement du visage, difficultés respiratoires, chute de tension. C'est un choc anaphylactique." },
        { text: "Stylo d'adrénaline", detail: "Face externe de la cuisse, 10 secondes.", voice: "Si elle a un stylo d'adrénaline, appuyez-le fermement sur la face externe de la cuisse pendant dix secondes." },
        { text: "Appelez le 15", detail: "L'adrénaline n'est qu'un pont.", voice: "Appelez le 15 immédiatement. L'adrénaline ne fait que gagner du temps." },
        { text: "Allongez, jambes surélevées", detail: "Sauf difficultés respiratoires.", voice: "Allongez la personne et surélevez les jambes, sauf si elle a du mal à respirer." },
      ]
    },
  ];

  // ── STATE ──
  let overlayOpen = false;
  let activeTab = "dialogue";
  let activeUrgence = null;
  let activeStep = 0;
  let chatHistory = [];
  let chatLoading = false;

  // ── CONSTRUCTION DU DOM ──
  function buildUI() {
    // Bouton FAB Vigio
    const fab = document.createElement("button");
    fab.id = "vigio-fab";
    fab.innerHTML = LOGO_SVG_SMALL;
    fab.title = "Assistant Vigio";
    fab.onclick = () => toggleOverlay();
    document.body.appendChild(fab);

    // Bouton Urgence fixe
    const urgBtn = document.createElement("button");
    urgBtn.id = "vigio-urgence-btn";
    urgBtn.innerHTML = "🚨 URGENCE &nbsp; 15 · 18 · 112";
    urgBtn.onclick = () => openUrgenceTab();
    document.body.appendChild(urgBtn);

    // Overlay
    const overlay = document.createElement("div");
    overlay.id = "vigio-overlay";
    overlay.innerHTML = `
      <div class="vigio-header">
        <div class="vigio-header-logo">${LOGO_SVG}</div>
        <div class="vigio-header-title">Je suis là.</div>
        <button class="vigio-close" onclick="window.__vigioClose()">✕</button>
      </div>
      <div class="vigio-tabs">
        <button class="vigio-tab active" id="tab-dialogue" onclick="window.__vigioTab('dialogue')">Dialogue</button>
        <button class="vigio-tab" id="tab-urgence" onclick="window.__vigioTab('urgence')">Urgence</button>
      </div>

      <!-- PANEL DIALOGUE -->
      <div class="vigio-panel active" id="panel-dialogue">
        <div class="vigio-messages" id="vigio-messages">
          <div class="vigio-msg vigio-msg-assistant">Bonjour, je suis Vigio. Posez-moi une question sur les premiers secours, ou utilisez l'onglet <strong>Urgence</strong> pour un guidage immédiat.</div>
        </div>
        <div class="vigio-input-row">
          <textarea class="vigio-input" id="vigio-chat-input" placeholder="Votre question..." rows="1" onkeydown="window.__vigioKey(event)"></textarea>
          <button class="vigio-send" id="vigio-send-btn" onclick="window.__vigioSend()">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          </button>
        </div>
      </div>

      <!-- PANEL URGENCE -->
      <div class="vigio-panel" id="panel-urgence">
        <div id="urgence-list" class="vigio-urgences">
          ${URGENCES.map(u => `
            <button class="vigio-urg-btn" onclick="window.__vigioStartUrgence('${u.id}')">
              <div class="vigio-urg-icon">${u.icon}</div>
              <div class="vigio-urg-info">
                <div class="vigio-urg-title">${u.title}</div>
                <div class="vigio-urg-sub">${u.sub}</div>
              </div>
              <div class="vigio-urg-arrow">→</div>
            </button>
          `).join("")}
        </div>
        <div id="urgence-active" style="display:none;" class="vigio-urg-active">
          <div class="vigio-urg-header">
            <button class="vigio-urg-back" onclick="window.__vigioBackUrgence()">← Retour</button>
            <span id="urg-active-title" style="color:#C8943A;font-size:13px;font-weight:600;"></span>
          </div>
          <div class="vigio-urg-step">
            <div class="vigio-step-num" id="urg-step-num">Étape 1</div>
            <div class="vigio-step-text" id="urg-step-text"></div>
            <div class="vigio-step-detail" id="urg-step-detail"></div>
          </div>
          <div class="vigio-urg-controls">
            <button class="vigio-urg-next" id="urg-next-btn" onclick="window.__vigioNextStep()">Étape suivante →</button>
            <button class="vigio-urg-repeat" onclick="window.__vigioRepeatStep()">🔊</button>
          </div>
        </div>
        <div class="vigio-call-bar">
          <button class="vigio-call-btn" onclick="location.href='tel:15'">📞 15 SAMU</button>
          <button class="vigio-call-btn" onclick="location.href='tel:18'">🚒 18 Pompiers</button>
          <button class="vigio-call-btn" onclick="location.href='tel:112'">🆘 112</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    // Cacher FAB pendant guidage actif
    if (isGuidePage) {
      const observer = new MutationObserver(() => {
        const guideActive = document.getElementById("view-guide");
        const isActive = guideActive && guideActive.style.display !== "none";
        fab.classList.toggle("hidden", isActive);
        urgBtn.classList.toggle("hidden", isActive);
      });
      observer.observe(document.body, { childList: true, subtree: true, attributes: true });
    }
  }

  // ── ACTIONS GLOBALES ──
  window.__vigioClose = () => {
    overlayOpen = false;
    document.getElementById("vigio-overlay").classList.remove("open");
  };

  window.__vigioTab = (tab) => {
    activeTab = tab;
    document.getElementById("tab-dialogue").classList.toggle("active", tab === "dialogue");
    document.getElementById("tab-urgence").classList.toggle("active", tab === "urgence");
    document.getElementById("panel-dialogue").classList.toggle("active", tab === "dialogue");
    document.getElementById("panel-urgence").classList.toggle("active", tab === "urgence");
  };

  function toggleOverlay() {
    overlayOpen = !overlayOpen;
    document.getElementById("vigio-overlay").classList.toggle("open", overlayOpen);
  }

  function openUrgenceTab() {
    overlayOpen = true;
    document.getElementById("vigio-overlay").classList.add("open");
    window.__vigioTab("urgence");
  }

  // ── CHAT DIALOGUE ──
  window.__vigioKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); window.__vigioSend(); }
  };

  window.__vigioSend = async () => {
    const input = document.getElementById("vigio-chat-input");
    const text = input.value.trim();
    if (!text || chatLoading) return;

    input.value = "";
    addChatMsg("user", text);
    chatHistory.push({ role: "user", content: text });
    setChatLoading(true);
    showTyping();

    try {
      const reply = await VigioAI.ask(text, chatHistory.slice(0, -1));
      removeTyping();
      addChatMsg("assistant", reply);
      chatHistory.push({ role: "assistant", content: reply });
    } catch (e) {
      removeTyping();
      addChatMsg("assistant", "Je n'ai pas pu répondre. En cas d'urgence, appelez le 15.");
    }
    setChatLoading(false);
  };

  function addChatMsg(role, text) {
    const msgs = document.getElementById("vigio-messages");
    const div = document.createElement("div");
    div.className = `vigio-msg vigio-msg-${role}`;
    div.innerHTML = text.replace(/\n/g, "<br>");
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function showTyping() {
    const msgs = document.getElementById("vigio-messages");
    const div = document.createElement("div");
    div.className = "vigio-typing";
    div.id = "vigio-typing";
    div.innerHTML = `<div class="vigio-dot"></div><div class="vigio-dot"></div><div class="vigio-dot"></div>`;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function removeTyping() {
    document.getElementById("vigio-typing")?.remove();
  }

  function setChatLoading(state) {
    chatLoading = state;
    const btn = document.getElementById("vigio-send-btn");
    if (btn) btn.disabled = state;
  }

  // ── URGENCE GUIDÉE ──
  window.__vigioStartUrgence = (id) => {
    const urg = URGENCES.find(u => u.id === id);
    if (!urg) return;
    activeUrgence = urg;
    activeStep = 0;

    document.getElementById("urgence-list").style.display = "none";
    document.getElementById("urgence-active").style.display = "flex";
    document.getElementById("urg-active-title").textContent = `${urg.icon} ${urg.title}`;

    renderUrgStep();
    speakUrgStep();
  };

  window.__vigioBackUrgence = () => {
    activeUrgence = null;
    activeStep = 0;
    if (window.VigioVoice) VigioVoice.stop();
    document.getElementById("urgence-list").style.display = "flex";
    document.getElementById("urgence-active").style.display = "none";
  };

  window.__vigioNextStep = () => {
    if (!activeUrgence) return;
    activeStep++;
    if (activeStep >= activeUrgence.steps.length) {
      // Terminé
      document.getElementById("urg-step-text").textContent = "✅ Guide terminé";
      document.getElementById("urg-step-detail").textContent = "Restez auprès de la victime jusqu'aux secours.";
      document.getElementById("urg-step-num").textContent = "Terminé";
      document.getElementById("urg-next-btn").textContent = "← Recommencer";
      document.getElementById("urg-next-btn").onclick = () => window.__vigioStartUrgence(activeUrgence.id);
      if (window.VigioVoice) VigioVoice.speak("Guide terminé. Restez auprès de la victime.", true);
      return;
    }
    renderUrgStep();
    speakUrgStep();
  };

  window.__vigioRepeatStep = () => {
    speakUrgStep();
  };

  function renderUrgStep() {
    if (!activeUrgence) return;
    const step = activeUrgence.steps[activeStep];
    const total = activeUrgence.steps.length;
    document.getElementById("urg-step-num").textContent = `Étape ${activeStep + 1} / ${total}`;
    document.getElementById("urg-step-text").textContent = step.text;
    document.getElementById("urg-step-detail").textContent = step.detail;
    document.getElementById("urg-next-btn").textContent =
      activeStep === total - 1 ? "✓ Terminer" : "Étape suivante →";
    document.getElementById("urg-next-btn").onclick = window.__vigioNextStep;
  }

  function speakUrgStep() {
    if (!activeUrgence || !window.VigioVoice) return;
    const step = activeUrgence.steps[activeStep];
    VigioVoice.speak(step.voice || step.text, true);
  }

  // ── INIT ──
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildUI);
  } else {
    buildUI();
  }

})();
