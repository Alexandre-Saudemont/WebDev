# Portfolio Next.js - Alexandre Saudemont

Un portfolio moderne et responsive construit avec Next.js 14, TypeScript, et Tailwind CSS.

## 🚀 Fonctionnalités

-   **Design moderne** avec thème sombre/clair
-   **Multilingue** (Français, Anglais, Chinois)
-   **Responsive** design adaptatif
-   **Animations fluides** avec Framer Motion
-   **Curseur personnalisé** interactif
-   **Navigation smooth** entre les pages
-   **Loading screen** élégant

## 📁 Structure du projet

```
src/
├── app/                    # App Router Next.js
│   ├── about/             # Page À propos
│   ├── services/          # Page Services
│   ├── projects/          # Page Projets
│   ├── contact/           # Page Contact
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Page d'accueil
├── components/            # Composants réutilisables
│   ├── Header.tsx         # Navigation
│   ├── Footer.tsx         # Pied de page
│   ├── Hero.tsx           # Section hero
│   ├── CustomCursor.tsx   # Curseur personnalisé
│   └── LoadingScreen.tsx  # Écran de chargement
├── contexts/              # Contextes React
│   └── ThemeContext.tsx  # Gestion du thème
└── lib/                   # Utilitaires
    └── i18n.ts           # Configuration i18n
```

## 🎨 Design System

### Couleurs

-   **Primaire** : `#00ff88` (vert néon)
-   **Secondaire** : `#00ccff` (bleu)
-   **Background** : `#0a0a0a` (sombre) / `#ededed` (clair)
-   **Text** : `#ffffff` (sombre) / `#323234` (clair)

### Typographie

-   **Sans-serif** : System fonts avec fallbacks
-   **Monospace** : SF Mono, Fira Code, Consolas

## 🌐 Internationalisation

Le site supporte 3 langues :

-   **Français** (par défaut)
-   **Anglais**
-   **Chinois**

Les traductions sont stockées dans `/public/locales/`.

## 🛠️ Technologies utilisées

-   **Next.js 14** - Framework React
-   **TypeScript** - Typage statique
-   **Tailwind CSS** - Framework CSS
-   **Framer Motion** - Animations
-   **React i18next** - Internationalisation
-   **Lucide React** - Icônes

## 🚀 Installation et développement

```bash
# Installation des dépendances
npm install

# Développement
npm run dev

# Build de production
npm run build

# Démarrage en production
npm start
```

## 📱 Pages

1. **Accueil** (`/`) - Présentation avec hero section
2. **À propos** (`/about`) - Parcours et compétences
3. **Services** (`/services`) - Offres de services
4. **Projets** (`/projects`) - Portfolio de projets
5. **Contact** (`/contact`) - Formulaire de contact

## 🎯 Fonctionnalités avancées

-   **Thème sombre/clair** avec persistance localStorage
-   **Curseur personnalisé** avec effets hover
-   **Animations** au scroll et au hover
-   **Loading screen** avec animation
-   **Navigation responsive** avec menu mobile
-   **Sélecteur de langue** intégré

## 📦 Déploiement

Le site peut être déployé sur :

-   **Vercel** (recommandé pour Next.js)
-   **Netlify**
-   **AWS Amplify**
-   **GitHub Pages**

## 🔧 Configuration

### Variables d'environnement

Créez un fichier `.env.local` :

```
NEXT_PUBLIC_SITE_URL=https://votre-domaine.com
```

### Personnalisation

-   Modifiez les couleurs dans `globals.css`
-   Ajoutez vos traductions dans `/public/locales/`
-   Personnalisez les contenus dans les composants

## 📄 Licence

MIT License - Voir le fichier LICENSE pour plus de détails.
