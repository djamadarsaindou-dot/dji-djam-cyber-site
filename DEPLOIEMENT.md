# Déploiement du site Dji Djam Cyber

## Méthode la plus simple (5 min, pas de compétences techniques)

### Étape 1 — Créer un compte Vercel (gratuit)
1. Va sur https://vercel.com/signup
2. Clique "Continue with GitHub" ou "Continue with Email"
3. Confirme ton email si demandé

### Étape 2 — Déployer le site en glisser-déposer
1. Une fois connecté, va sur https://vercel.com/new
2. Tout en bas, clique sur **"deploy a template"** ou cherche le bouton **"Browse Templates"** / **"Import Project"**
3. **Méthode glisser-déposer la plus simple** : va sur https://vercel.com/new (page projet vide)
   - Vercel propose souvent une option "Import" depuis un dossier local
   - **OU** utilise la méthode GitHub (étape 3 ci-dessous, plus fiable)

### Étape 3 — Méthode GitHub recommandée (plus pérenne)
1. Crée un compte GitHub gratuit : https://github.com/signup
2. Crée un nouveau repository public : https://github.com/new
   - Nom : `dji-djam-cyber-site`
   - Public
   - "Create repository"
3. Sur la page du repo, clique "uploading an existing file"
4. Glisse-dépose les 2 fichiers : `index.html` + `logo.png`
5. Clique "Commit changes" tout en bas
6. Va sur https://vercel.com/new
7. Sélectionne ton repo GitHub `dji-djam-cyber-site` → "Import"
8. Laisse tous les paramètres par défaut → "Deploy"
9. ⏱ Attends ~30 secondes
10. **Ton site est en ligne** à une URL du type `dji-djam-cyber-site.vercel.app`

### Étape 4 — Domaine personnalisé (optionnel, plus tard)
Si tu veux `djidjamcyber.com` ou `djidjamcyber.fr` :
1. Achète le domaine sur OVH (~7€/an) ou Gandi (~12€/an)
2. Dans Vercel → projet → Settings → Domains → "Add domain"
3. Suis les instructions DNS

---

## Pour modifier le site plus tard

1. Édite `index.html` localement
2. Si tu utilises GitHub : `git push` (ou ré-upload via l'interface web)
3. Vercel re-déploie automatiquement en ~30 sec

---

## Vérifications après mise en ligne

Avant d'envoyer tes mails de prospection :
- [ ] Ouvre l'URL Vercel dans Chrome **et** sur ton téléphone
- [ ] Vérifie que le numéro de tel et l'email sont corrects
- [ ] Clique sur les boutons "Appeler" et "Email" pour vérifier qu'ils fonctionnent
- [ ] Vérifie que le lien Google Maps t'amène bien à ton adresse
- [ ] Vérifie le lien Facebook (URL `https://www.facebook.com/Dji_djam_cyber` — à adapter si ton URL FB est différente)

**Ajoute l'URL du site dans la signature de tes mails de prospection !**
