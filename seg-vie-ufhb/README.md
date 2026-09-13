# SEG VIE — UFHB

Banque de cours, sujets et corrigés pour les étudiants en Sciences Économiques et de Gestion de l'UFHB, avec téléchargement débloqué après inscription.

## Lancer en local

```bash
npm install
npm run dev
```

Le site s'ouvre sur `http://localhost:5173`.

## Comment ça marche

- **Navigation libre** : recherche, fiches de cours et QCM sont visibles sans compte.
- **Blocage au clic** : cliquer sur *Télécharger le PDF* ou *Voir le corrigé* sans être connecté ouvre une pop-up (`src/components/LoginModal.jsx`) avec inscription / connexion / "Continuer avec Google".
- **Après connexion** : la pop-up se ferme et le téléchargement démarré se relance automatiquement (`src/App.jsx`, fonction `handleRequestDownload` / `handleAuthSuccess`).
- **Comptes** : gérés pour l'instant dans `localStorage` via `src/context/AuthContext.jsx` (clé `segvie_user` pour la session, `segvie_users_db` pour la base des comptes). À remplacer par Supabase Auth quand vous serez prêts — la fonction `register`/`login` est isolée pour faciliter le remplacement.
- **Téléchargement** : simulé dans `src/utils/download.js` (génère un fichier de démonstration). Remplacez par une URL Supabase Storage réelle le moment venu.

## Déployer

Ce projet est un site statique généré par Vite : il se déploie sur **Netlify**, **Vercel** ou **GitHub Pages** en quelques minutes.

### Option A — Vercel (recommandé, le plus simple)
1. Poussez ce dossier sur un dépôt GitHub.
2. Sur [vercel.com](https://vercel.com), cliquez sur "New Project", importez le dépôt.
3. Vercel détecte Vite automatiquement (Build Command : `npm run build`, Output : `dist`). Cliquez sur "Deploy".

### Option B — Netlify
1. Poussez ce dossier sur GitHub (ou utilisez le glisser-déposer Netlify après un build local).
2. Sur [netlify.com](https://netlify.com) → "Add new site" → "Import an existing project".
3. Build command : `npm run build` — Publish directory : `dist`.

### Option C — build manuel + hébergement statique
```bash
npm install
npm run build
```
Le dossier `dist/` généré peut être déposé sur n'importe quel hébergement statique (Netlify drag-and-drop, GitHub Pages, OVH, etc.).

## Prochaine étape : Supabase

Quand vous branchez Supabase :
1. Remplacez le contenu de `register`, `login`, `loginWithGoogle` dans `src/context/AuthContext.jsx` par des appels à `supabase.auth.signUp` / `signInWithPassword` / `signInWithOAuth`.
2. Remplacez `triggerDownload` dans `src/utils/download.js` par une requête vers vos fichiers dans Supabase Storage (URL signée).
3. Déplacez `src/data/courses.js` vers une table Supabase et chargez-la via `useEffect` + `supabase.from('courses').select()`.
