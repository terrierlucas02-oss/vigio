# ⛑ Vigio — Premiers Secours

> Web app de premiers secours avec guidage vocal, chatbot IA, formation et quiz.

## 🚀 Déploiement GitHub Pages

```bash
# 1. Initialisez le repo
cd vigio/
git init
git remote add origin https://github.com/terrierlucas02-oss/vigio.git

# 2. Premier push
git add .
git commit -m "init: beta Vigio"
git branch -M main
git push -u origin main

# 3. Activez GitHub Pages
# → Settings > Pages > Source : main branch / (root)
```

## 🔑 Configuration ElevenLabs

Ouvrez `js/vigio.js` et remplacez :

```js
ELEVENLABS_API_KEY: "YOUR_ELEVENLABS_API_KEY",
ELEVENLABS_VOICE_ID: "YOUR_VOICE_ID",
```

## 📁 Structure

```
vigio/
├── index.html              ← Accueil
├── pages/
│   ├── guide.html          ← Guidage vocal d'urgence
│   ├── chat.html           ← Assistant IA (Claude)
│   ├── formation.html      ← Fiches de formation
│   └── quiz.html           ← Quiz & progression
├── css/
│   ├── main.css            ← Styles partagés
│   ├── home.css
│   ├── guide.css
│   ├── chat.css
│   ├── formation.css
│   └── quiz.css
└── js/
    ├── vigio.js            ← Config + VigioVoice + VigioAI
    ├── guide.js            ← Protocoles d'urgence
    ├── chat.js             ← Chat IA
    ├── formation.js        ← Fiches
    └── quiz.js             ← Quiz
```

## ⚡ Modules

| Module | Description |
|--------|-------------|
| 🚨 **Guidage** | 8 protocoles d'urgence (RCP, Heimlich, AVC, PLS, hémorragie, brûlures, malaise, noyade) avec guidage vocal ElevenLabs |
| 🤖 **Chat IA** | Assistant Claude spécialisé premiers secours, reconnaissance vocale |
| 📚 **Formation** | 12 fiches détaillées avec filtres par catégorie, suivi de lecture |
| 🎯 **Quiz** | 28 questions, 5 thèmes, scoring et progression localStorage |

## ⚠️ Disclaimer

Vigio est un outil d'aide à la décision. Il ne remplace pas les secours professionnels.
**En cas d'urgence : 15 (SAMU) · 18 (Pompiers) · 112 (Urgences)**
