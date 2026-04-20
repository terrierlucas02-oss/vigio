// ═══════════════════════════════════════════
// VIGIO — FORMATION
// ═══════════════════════════════════════════

const FICHES = [
  {
    id: "rcp-adulte",
    icon: "❤️",
    cat: "cardiaque",
    catLabel: "Cardiaque",
    title: "RCP Adulte",
    desc: "Réanimation cardio-pulmonaire chez l'adulte. Le geste le plus important en cas d'arrêt cardiaque.",
    tags: ["RCP", "Massage cardiaque", "Urgence vitale"],
    readTime: "5 min",
    accent: "#E8281A",
    content: `
      <div class="fiche-alerte">⚠️ En cas d'urgence réelle, appelez le 15, 18 ou 112 AVANT tout.</div>

      <h3>🔍 Reconnaître l'arrêt cardiaque</h3>
      <p>La victime est <strong>inconsciente</strong>, ne répond pas et <strong>ne respire pas normalement</strong> (absence de respiration ou gasps — respirations anormales bruyantes et irrégulières).</p>

      <h3>📞 Étape 1 — Alerter</h3>
      <ol>
        <li>Vérifiez la sécurité des lieux</li>
        <li>Secouez les épaules : « Vous m'entendez ? »</li>
        <li>Appelez le 15 / 18 / 112 ou faites appeler par un tiers</li>
        <li>Demandez à quelqu'un de chercher un DAE (défibrillateur)</li>
      </ol>

      <h3>🤲 Étape 2 — Massage cardiaque</h3>
      <ol>
        <li>Allongez la victime sur le dos, sur une surface dure</li>
        <li>Agenouuillez-vous à côté du thorax</li>
        <li>Placez le talon d'une main au <strong>centre du thorax</strong> (moitié inférieure du sternum)</li>
        <li>Posez l'autre main par-dessus, doigts entrelacés</li>
        <li>Bras tendus, épaules à la verticale</li>
        <li>Appuyez : <strong>5 à 6 cm de profondeur</strong></li>
        <li>Rythme : <strong>100 à 120 compressions par minute</strong></li>
        <li>Laissez le thorax se reexpander complètement entre chaque compression</li>
      </ol>

      <div class="fiche-tip">💡 Astuce rythme : chantonnez mentalement "Stayin' Alive" des Bee Gees (103 bpm) — parfait pour le massage !</div>

      <h3>💨 Étape 3 — Insufflations (si formé)</h3>
      <ol>
        <li>Après 30 compressions, réalisez 2 insufflations</li>
        <li>Basculez la tête, soulevez le menton</li>
        <li>Pincez le nez, soufflez 1 seconde en regardant le thorax se soulever</li>
        <li>Si vous n'êtes pas formé : <strong>compressions seules, sans interruption</strong></li>
      </ol>

      <h3>⚡ Étape 4 — DAE (Défibrillateur)</h3>
      <p>Dès qu'un DAE est disponible, <strong>mettez-le en marche</strong> et suivez ses instructions vocales. Il analyse le rythme cardiaque et ne délivrera un choc que si nécessaire. Il ne peut pas faire de mal.</p>

      <h3>🔄 Continuez jusqu'à</h3>
      <ul>
        <li>L'arrivée des secours qui prennent le relais</li>
        <li>La reprise d'une respiration normale de la victime</li>
        <li>L'épuisement physique total (changez-vous toutes les 2 minutes si possible)</li>
      </ul>
    `
  },

  {
    id: "rcp-enfant",
    icon: "👶",
    cat: "cardiaque",
    catLabel: "Cardiaque",
    title: "RCP Enfant & Nourrisson",
    desc: "Spécificités de la réanimation chez l'enfant (1-8 ans) et le nourrisson (< 1 an).",
    tags: ["RCP", "Enfant", "Nourrisson", "Pédiatrie"],
    readTime: "5 min",
    accent: "#E8281A",
    content: `
      <div class="fiche-alerte">⚠️ Les techniques diffèrent selon l'âge. Lisez attentivement.</div>

      <h3>👶 Nourrisson (moins d'1 an)</h3>
      <p><strong>Compressions :</strong></p>
      <ol>
        <li>Allongez le nourrisson sur une surface dure</li>
        <li>Utilisez 2 doigts au centre du thorax (sous la ligne des mamelons)</li>
        <li>Profondeur : environ 4 cm</li>
        <li>Rythme : 100-120/min</li>
        <li>Insufflations : bouche-à-bouche-et-nez (5 insufflations initiales, puis 30:2)</li>
      </ol>

      <h3>🧒 Enfant (1 à 8 ans)</h3>
      <p><strong>Compressions :</strong></p>
      <ol>
        <li>1 ou 2 mains selon la morphologie de l'enfant</li>
        <li>Au centre du thorax</li>
        <li>Profondeur : environ 5 cm</li>
        <li>Rythme : 100-120/min</li>
        <li>Commencez par <strong>5 insufflations initiales</strong>, puis 30:2</li>
      </ol>

      <h3>🔑 Différences clés</h3>
      <ul>
        <li>Chez l'enfant : commencez toujours par <strong>5 insufflations</strong> (l'arrêt est souvent d'origine respiratoire)</li>
        <li>Adaptez la force des compressions à la morphologie</li>
        <li>Si vous êtes seul : 2 minutes de RCP AVANT d'appeler les secours</li>
      </ul>

      <div class="fiche-tip">💡 Si seul avec un enfant inconscient : 5 insufflations → 2 minutes de RCP → appel 15 → reprise RCP</div>
    `
  },

  {
    id: "heimlich",
    icon: "😮‍💨",
    cat: "respiration",
    catLabel: "Respiration",
    title: "Étouffement — Heimlich",
    desc: "Reconnaître et traiter l'étouffement par corps étranger chez l'adulte, l'enfant et le nourrisson.",
    tags: ["Heimlich", "Étouffement", "Corps étranger"],
    readTime: "4 min",
    accent: "#F59E0B",
    content: `
      <h3>🔍 Reconnaître l'étouffement</h3>
      <ul>
        <li>La personne <strong>ne peut pas parler</strong> ou toussoe très faiblement</li>
        <li>Elle porte les mains à la gorge</li>
        <li>Son visage devient rouge puis bleu (cyanose)</li>
        <li>Elle ne peut pas respirer normalement</li>
      </ul>
      <div class="fiche-alerte">⚠️ Différence : si la personne tousse fort et arrive à parler, encouragez-la à tousser. N'intervenez pas encore.</div>

      <h3>👤 Adulte et enfant > 1 an</h3>
      <ol>
        <li>Penchez la personne en avant, une main sur le thorax</li>
        <li><strong>5 tapes dans le dos</strong> entre les omoplates, avec le plat de la main</li>
        <li>Vérifiez si le corps étranger est expulsé</li>
        <li>Si non : <strong>5 compressions abdominales (Heimlich)</strong></li>
      </ol>

      <p><strong>Manœuvre de Heimlich :</strong></p>
      <ol>
        <li>Placez-vous derrière la personne</li>
        <li>Formez un poing, pouce vers l'intérieur, placez-le entre le nombril et le sternum</li>
        <li>Saisissez votre poing avec l'autre main</li>
        <li>Tirez fortement <strong>vers l'intérieur et vers le haut</strong></li>
        <li>Répétez jusqu'à 5 fois</li>
        <li>Alternez 5 tapes + 5 compressions jusqu'à résultat ou perte de conscience</li>
      </ol>

      <h3>👶 Nourrisson (< 1 an)</h3>
      <ol>
        <li>Allongez-le face vers le bas sur votre avant-bras, tête vers le bas</li>
        <li>5 tapes dans le dos avec le plat de la main</li>
        <li>Retournez-le, 5 compressions thoraciques avec 2 doigts</li>
        <li>Alternez jusqu'à expulsion</li>
      </ol>
      <div class="fiche-alerte">⚠️ NE jamais faire la manœuvre de Heimlich sur un nourrisson !</div>

      <h3>😴 Si perte de conscience</h3>
      <p>Allongez doucement. Appelez le 15. Commencez la RCP. Le massage peut expulser le corps étranger.</p>
    `
  },

  {
    id: "avc",
    icon: "🧠",
    cat: "neurologie",
    catLabel: "Neurologie",
    title: "AVC — Accident Vasculaire Cérébral",
    desc: "Reconnaître les signes d'un AVC et agir vite. Chaque minute, 2 millions de neurones meurent.",
    tags: ["AVC", "VITE", "Neurologie", "Urgence"],
    readTime: "4 min",
    accent: "#A855F7",
    content: `
      <div class="fiche-alerte">🧠 En cas d'AVC, chaque minute compte. <strong>Appelez le 15 immédiatement.</strong></div>

      <h3>🔡 Méthode VITE</h3>
      <ul>
        <li><strong>V — Visage :</strong> La bouche est-elle déviée d'un côté ? Demandez de sourire.</li>
        <li><strong>I — Incapacité :</strong> Peut-elle lever les deux bras ? Un bras tombe-t-il ?</li>
        <li><strong>T — Troubles de la parole :</strong> La parole est-elle incompréhensible, déformée ?</li>
        <li><strong>E — En urgence, appelez le 15.</strong></li>
      </ul>

      <p>D'autres signes possibles : perte de vision soudaine, maux de tête violents soudains, perte d'équilibre.</p>

      <h3>📞 Que faire ?</h3>
      <ol>
        <li>Appelez le 15 immédiatement</li>
        <li>Notez <strong>l'heure précise</strong> d'apparition des premiers signes (essentiel pour le traitement)</li>
        <li>Installez la personne confortablement, <strong>tête légèrement surélevée</strong></li>
        <li>Ne lui donnez rien à boire ni à manger</li>
        <li>Restez auprès d'elle, rassurez-la</li>
        <li>N'essayez pas de la transporter seul</li>
      </ol>

      <div class="fiche-tip">💡 Les traitements sont très efficaces si administrés dans les 4h30. Chaque minute perdue = dégâts supplémentaires.</div>

      <h3>❌ À ne pas faire</h3>
      <ul>
        <li>Ne pas donner d'aspirine ou d'anticoagulants sans avis médical</li>
        <li>Ne pas laisser la personne seule</li>
        <li>Ne pas attendre que ça passe</li>
        <li>Ne pas la faire marcher si elle a du mal à se tenir</li>
      </ul>
    `
  },

  {
    id: "pls",
    icon: "🤕",
    cat: "cardiaque",
    catLabel: "Cardiaque",
    title: "Position Latérale de Sécurité",
    desc: "La PLS pour protéger les voies aériennes d'une victime inconsciente qui respire.",
    tags: ["PLS", "Inconscient", "Voies aériennes"],
    readTime: "4 min",
    accent: "#3B82F6",
    content: `
      <h3>🎯 Quand faire la PLS ?</h3>
      <p>La personne est <strong>inconsciente</strong> mais <strong>respire normalement</strong>. La PLS évite qu'elle s'étouffe avec sa langue ou ses vomissements.</p>

      <h3>🔄 Étapes</h3>
      <ol>
        <li>Appelez le 15</li>
        <li>Agenouuillez-vous à côté de la personne</li>
        <li><strong>Bras proche :</strong> à angle droit, paume vers le haut</li>
        <li><strong>Autre main :</strong> dos de la main contre la joue la plus proche de vous — maintenez</li>
        <li><strong>Autre jambe :</strong> pliez le genou éloigné en tirant le pied vers vous</li>
        <li>Tirez doucement sur le genou plié pour faire basculer la personne <strong>vers vous</strong></li>
        <li>Ajustez la jambe du dessus à angle droit pour stabiliser</li>
        <li>Basculez la tête en arrière pour ouvrir les voies aériennes</li>
        <li>Surveillez la respiration régulièrement</li>
      </ol>

      <div class="fiche-tip">💡 Moyen mémo : "Grand écart + dossier de chaise" — la jambe et le bras du dessus forment des angles droits.</div>

      <div class="fiche-alerte">⚠️ En cas de traumatisme cervical suspecté (accident de voiture, chute) : ne retournez la personne qu'en dernier recours et immobilisez la nuque.</div>

      <h3>🔍 Surveiller</h3>
      <ul>
        <li>Vérifiez la respiration toutes les minutes</li>
        <li>Si la respiration s'arrête → passez à la RCP immédiatement</li>
        <li>Parlez-lui même si elle ne répond pas</li>
      </ul>
    `
  },

  {
    id: "hemorragie",
    icon: "🩸",
    cat: "trauma",
    catLabel: "Traumatismes",
    title: "Hémorragie — Compression",
    desc: "Arrêter un saignement abondant. La compression directe reste le geste numéro 1.",
    tags: ["Hémorragie", "Garrot", "Compression"],
    readTime: "4 min",
    accent: "#EF4444",
    content: `
      <h3>🩸 Reconnaître l'hémorragie grave</h3>
      <p>Saignement abondant, continu, qui ne s'arrête pas spontanément. Peut entraîner un choc hémorragique.</p>

      <h3>🤲 Étape 1 — Compression directe</h3>
      <ol>
        <li>Protégez-vous si possible (gants, sac plastique)</li>
        <li>Allongez la victime</li>
        <li>Appuyez <strong>FORT et sans relâcher</strong> sur la plaie avec un tissu propre ou vos mains</li>
        <li>Maintenez la pression jusqu'à l'arrêt ou l'arrivée des secours</li>
        <li>Si le tissu est imbibé : <strong>ajoutez une couche par-dessus</strong>, ne retirez pas</li>
      </ol>

      <div class="fiche-tip">💡 "Appuyez fort comme si vous vouliez passer à travers" — c'est souvent la bonne intensité.</div>

      <h3>🔴 Étape 2 — Garrot (si membre, incontrôlable)</h3>
      <p>Si la compression directe est insuffisante sur un membre :</p>
      <ol>
        <li>Posez le garrot <strong>5-7 cm au-dessus</strong> de la plaie (jamais sur une articulation)</li>
        <li>Serrez jusqu'à l'arrêt du saignement</li>
        <li><strong>Notez l'heure de pose</strong> (écrivez-la sur la peau)</li>
        <li><strong>Ne desserrez JAMAIS</strong> — seuls les médecins peuvent le faire</li>
      </ol>
      <div class="fiche-alerte">⚠️ Le garrot fait mal — c'est normal. Il sauve des vies. Ne le desserrez jamais.</div>

      <h3>📞 Et aussi</h3>
      <ul>
        <li>Appelez le 15</li>
        <li>Surveillez les signes de choc : pâleur, sueurs, pouls rapide, agitation</li>
        <li>Gardez la victime allongée, couvrez-la pour éviter le froid</li>
      </ul>
    `
  },

  {
    id: "brulure",
    icon: "🔥",
    cat: "autre",
    catLabel: "Autre",
    title: "Brûlures — Premiers soins",
    desc: "Traitement des brûlures thermiques, chimiques et électriques. L'eau froide en premier.",
    tags: ["Brûlure", "Eau froide", "Peau"],
    readTime: "4 min",
    accent: "#F97316",
    content: `
      <h3>🔥 Gravité des brûlures</h3>
      <ul>
        <li><strong>1er degré :</strong> Rougeur (érythème) — coup de soleil léger</li>
        <li><strong>2e degré :</strong> Cloques (phlyctènes) — douloureux</li>
        <li><strong>3e degré :</strong> Peau blanche ou noire, indolore (destruction des nerfs) — urgence médicale</li>
      </ul>

      <h3>💧 Toujours : eau fraîche pendant 15 minutes</h3>
      <ol>
        <li>Éloignez de la source de chaleur</li>
        <li>Faites couler de l'eau <strong>fraîche (pas glacée)</strong> sur la brûlure</li>
        <li><strong>Minimum 15 minutes</strong> — démarrez le chrono</li>
        <li>L'eau stoppe la brûlure en profondeur et soulage la douleur</li>
      </ol>
      <div class="fiche-alerte">⚠️ NE JAMAIS mettre : beurre, huile, dentifrice, eau glacée, alcool, crème maison.</div>

      <h3>📞 Appelez le 15 si</h3>
      <ul>
        <li>Brûlure étendue (> paume de main)</li>
        <li>Visage, mains, pieds, parties génitales, articulations</li>
        <li>Enfant ou personne âgée</li>
        <li>Brûlure chimique ou électrique</li>
        <li>Inhalation de fumées</li>
      </ul>

      <h3>🩹 Après refroidissement</h3>
      <ul>
        <li>Couvrez avec un film alimentaire ou pansement non adhérent</li>
        <li>Ne percez pas les cloques (protection naturelle)</li>
        <li>Consultez un médecin pour toute brûlure du 2e ou 3e degré</li>
      </ul>

      <h3>⚡ Brûlure électrique</h3>
      <p>Coupez l'alimentation électrique avant toute intervention. La brûlure visible est souvent moins grave que les lésions internes. Appelez toujours le 15.</p>
    `
  },

  {
    id: "fracture",
    icon: "🦴",
    cat: "trauma",
    catLabel: "Traumatismes",
    title: "Fractures & Entorses",
    desc: "Immobiliser, ne pas réduire, appeler si nécessaire. Les bases de la prise en charge des fractures.",
    tags: ["Fracture", "Entorse", "Immobilisation"],
    readTime: "3 min",
    accent: "#6B7280",
    content: `
      <h3>🦴 Reconnaître une fracture</h3>
      <ul>
        <li>Douleur intense, surtout à la palpation</li>
        <li>Déformation visible du membre</li>
        <li>Gonflement, hématome rapide</li>
        <li>Impossibilité de bouger le membre</li>
        <li>Craquement entendu au moment du traumatisme</li>
      </ul>

      <h3>✋ À ne pas faire</h3>
      <ul>
        <li><strong>Ne pas tenter de réduire</strong> la fracture (remettre en place)</li>
        <li>Ne pas faire marcher sur un membre fracturé</li>
        <li>Ne pas retirer les chaussures si fracture de cheville (gonflement)</li>
      </ul>

      <h3>✅ À faire</h3>
      <ol>
        <li>Immobilisez dans la position trouvée</li>
        <li>Appelez le 15 si : fracture du fémur, du bassin, de la colonne, ouverte, avec paralysie</li>
        <li>Appliquez de la glace enveloppée dans un tissu (15 min max)</li>
        <li>Surélevez si possible</li>
        <li>Pour une attelle : immobilisez l'articulation au-dessus et en-dessous</li>
      </ol>

      <h3>🚨 Fracture ouverte</h3>
      <p>Os visible. Appelez le 15. Couvrez la plaie avec un linge propre sans appuyer sur l'os.</p>

      <div class="fiche-tip">💡 En attendant les secours : immobilisez avec ce que vous avez (carton, bâton, journal rigide) en rembourriant.</div>
    `
  },

  {
    id: "malaise-diabete",
    icon: "💊",
    cat: "autre",
    catLabel: "Autre",
    title: "Malaise — Hypoglycémie",
    desc: "Identifier et traiter un malaise hypoglycémique chez un diabétique. Simple mais vital.",
    tags: ["Diabète", "Hypoglycémie", "Malaise"],
    readTime: "3 min",
    accent: "#22C55E",
    content: `
      <h3>🔍 Signes d'hypoglycémie</h3>
      <ul>
        <li>Tremblements, sueurs froides</li>
        <li>Pâleur, faiblesse soudaine</li>
        <li>Confusion, irritabilité</li>
        <li>Faim intense soudaine</li>
        <li>Palpitations</li>
      </ul>

      <h3>✅ Si consciente</h3>
      <ol>
        <li>Asseyez-la ou allongez-la</li>
        <li>Donnez du sucre : 3 morceaux de sucre, 150 ml de jus de fruit, boisson sucrée</li>
        <li>Attendez 15 minutes</li>
        <li>Si amélioration → donnez un encas avec glucides lents (pain, biscuit)</li>
        <li>Si pas d'amélioration → appelez le 15</li>
      </ol>

      <div class="fiche-alerte">⚠️ NE JAMAIS donner à manger ou à boire à une personne inconsciente ou qui ne peut pas avaler.</div>

      <h3>😴 Si inconsciente</h3>
      <ol>
        <li>Position latérale de sécurité</li>
        <li>Appelez le 15</li>
        <li>Si disponible et formé : injection de glucagon (kit fourni aux diabétiques)</li>
      </ol>

      <h3>🌀 Malaise vagal (syncope)</h3>
      <p>Pâleur, sueurs, vertiges puis perte de connaissance brève. Allongez avec les jambes surélevées (sauf douleur thoracique ou difficultés respiratoires). Généralement bénin mais appelez le 15 si doute.</p>
    `
  },

  {
    id: "noyade",
    icon: "🌊",
    cat: "respiration",
    catLabel: "Respiration",
    title: "Noyade — Sauvetage",
    desc: "Extraire, évaluer, réanimer. Les spécificités de la noyade dans la RCP.",
    tags: ["Noyade", "RCP", "Sauvetage"],
    readTime: "4 min",
    accent: "#06B6D4",
    content: `
      <div class="fiche-alerte">⚠️ Ne risquez pas votre vie pour sauver quelqu'un. Tendez quelque chose avant de sauter.</div>

      <h3>🏊 Étape 1 — Sortir de l'eau</h3>
      <ol>
        <li>Jetez un objet flottant (bouée, jerricane vide, glacière)</li>
        <li>Tendez une corde, un vêtement, une perche</li>
        <li>Si vous entrez dans l'eau : approchez par derrière la victime pour éviter d'être agrippé</li>
        <li>Immobilisez la nuque si plongeon ou traumatisme suspecté</li>
      </ol>

      <h3>📞 Étape 2 — Alerter</h3>
      <p>Appelez le 15, 18 ou 196 (secours en mer). Donnez votre position précise.</p>

      <h3>🫁 Étape 3 — RCP noyade (différente !)</h3>
      <p>La noyade est d'abord une <strong>asphyxie</strong>, donc :</p>
      <ol>
        <li>Commencez par <strong>5 insufflations initiales</strong> (pas 30 compressions)</li>
        <li>Si pas de respiration : 30 compressions + 2 insufflations</li>
        <li>Continuez jusqu'aux secours</li>
      </ol>
      <div class="fiche-tip">💡 Différence clé : noyade = 5 insufflations d'abord. Arrêt cardiaque classique = compressions d'abord.</div>

      <h3>🌡️ Hypothermie</h3>
      <p>La victime peut être en hypothermie profonde. <strong>Ne concluez pas trop vite à la mort.</strong> Des victoires ont eu lieu après 30+ minutes de réanimation en eau froide. Continuez la RCP.</p>
    `
  },

  {
    id: "choc-anaphylactique",
    icon: "🐝",
    cat: "autre",
    catLabel: "Autre",
    title: "Choc Anaphylactique",
    desc: "Réaction allergique sévère. Adrénaline en urgence. Reconnaître les signes avant qu'il soit trop tard.",
    tags: ["Allergie", "Anaphylaxie", "Adrénaline"],
    readTime: "3 min",
    accent: "#F59E0B",
    content: `
      <h3>🔍 Reconnaître le choc anaphylactique</h3>
      <p>Après contact allergène (aliment, piqûre d'abeille, médicament) :</p>
      <ul>
        <li>Urticaire, démangeaisons soudaines</li>
        <li>Gonflement du visage, lèvres, gorge</li>
        <li>Difficultés respiratoires, sifflement</li>
        <li>Chute de tension, vertiges, perte de connaissance</li>
      </ul>
      <div class="fiche-alerte">⚠️ Le choc anaphylactique peut tuer en quelques minutes. Appelez le 15 IMMÉDIATEMENT.</div>

      <h3>💉 Stylo d'adrénaline (auto-injecteur)</h3>
      <p>Si la personne en possède un (Epipen, Jext, Anapen) :</p>
      <ol>
        <li>Retirez le capuchon de sécurité</li>
        <li>Appuyez fermement sur la face externe de la cuisse (même à travers les vêtements)</li>
        <li>Maintenez 10 secondes</li>
        <li>Massez l'endroit de l'injection</li>
        <li>Appelez le 15 — l'adrénaline n'est qu'un pont, pas un traitement définitif</li>
      </ol>

      <h3>🤲 En attendant les secours</h3>
      <ul>
        <li>Allongez la personne, jambes surélevées (sauf difficultés respiratoires → position semi-assise)</li>
        <li>Si inconsciente et respire → PLS</li>
        <li>Si arrêt cardiaque → RCP</li>
      </ul>
    `
  },

  {
    id: "securite-incendie",
    icon: "🚒",
    cat: "autre",
    catLabel: "Autre",
    title: "Sécurité Incendie",
    desc: "Évacuation, numéros d'urgence, extincteurs. Les réflexes essentiels en cas d'incendie.",
    tags: ["Incendie", "Évacuation", "Extincteur"],
    readTime: "3 min",
    accent: "#EF4444",
    content: `
      <h3>🔥 Réflexes immédiats</h3>
      <ol>
        <li>Donnez l'alarme : criez, actionnez l'alarme incendie</li>
        <li>Appelez le 18 ou 112</li>
        <li>Évacuez — ne prenez pas l'ascenseur</li>
        <li>Fermez les portes derrière vous (ralentit la propagation)</li>
      </ol>

      <h3>💨 En présence de fumée</h3>
      <ul>
        <li>Baissez-vous : la fumée monte, l'air frais est en bas</li>
        <li>Bouchez les fentes de porte avec des vêtements humides</li>
        <li>Signalez-vous à la fenêtre mais ne sautez pas si étage élevé</li>
      </ul>

      <h3>🧯 Extincteur (PASS)</h3>
      <ol>
        <li><strong>P — Pin :</strong> Retirez la goupille de sécurité</li>
        <li><strong>A — Aim :</strong> Visez la base des flammes</li>
        <li><strong>S — Squeeze :</strong> Serrez la poignée</li>
        <li><strong>S — Sweep :</strong> Balayez de côté à côté</li>
      </ol>
      <div class="fiche-tip">💡 Un extincteur standard dure environ 15 secondes. Ne perdez pas de temps sur un feu trop important — évacuez.</div>

      <div class="fiche-alerte">⚠️ Ne jamais retourner chercher des objets dans un bâtiment en feu.</div>
    `
  },
];

// ── STATE ──
let currentCat = "all";

// ── INIT ──
document.addEventListener("DOMContentLoaded", () => {
  renderFiches(FICHES);
  trackProgress();
});

// ── FILTER ──
function filterCat(cat) {
  currentCat = cat;
  document.querySelectorAll(".cat-tab").forEach(btn => {
    btn.classList.toggle("active", btn.textContent.toLowerCase().includes(cat) || cat === "all");
  });
  const filtered = cat === "all" ? FICHES : FICHES.filter(f => f.cat === cat);
  renderFiches(filtered);
}

// ── RENDER ──
function renderFiches(fiches) {
  const grid = document.getElementById("fiches-grid");
  const progress = vigioLoadProgress("formation_read", []);

  grid.innerHTML = fiches.map(f => {
    const isRead = progress.includes(f.id);
    return `
      <div class="fiche-card" onclick="openFiche('${f.id}')" style="--accent-color:${f.accent};">
        <div class="fiche-read-time">📖 ${f.readTime}${isRead ? ' · ✓ Lu' : ''}</div>
        <span class="fiche-icon">${f.icon}</span>
        <div class="fiche-cat">${f.catLabel}</div>
        <h3 class="fiche-title">${f.title}</h3>
        <p class="fiche-desc">${f.desc}</p>
        <div class="fiche-tags">
          ${f.tags.map(t => `<span class="fiche-tag">${t}</span>`).join("")}
        </div>
      </div>
    `;
  }).join("");
}

// ── OPEN / CLOSE ──
function openFiche(id) {
  const fiche = FICHES.find(f => f.id === id);
  if (!fiche) return;

  document.getElementById("modal-icon").textContent = fiche.icon;
  document.getElementById("modal-title").textContent = fiche.title;
  document.getElementById("modal-badge").innerHTML = `<span class="badge badge-red">${fiche.catLabel}</span>`;
  document.getElementById("modal-body").innerHTML = fiche.content;

  document.getElementById("fiche-modal").classList.add("open");
  document.body.style.overflow = "hidden";

  // Marquer comme lu
  const progress = vigioLoadProgress("formation_read", []);
  if (!progress.includes(id)) {
    progress.push(id);
    vigioSaveProgress("formation_read", progress);
  }
}

function closeFiche() {
  document.getElementById("fiche-modal").classList.remove("open");
  document.body.style.overflow = "";
  renderFiches(currentCat === "all" ? FICHES : FICHES.filter(f => f.cat === currentCat));
}

function closeModal(e) {
  if (e.target === document.getElementById("fiche-modal")) closeFiche();
}

function trackProgress() {
  const read = vigioLoadProgress("formation_read", []);
  console.log(`Formation : ${read.length}/${FICHES.length} fiches lues`);
}
