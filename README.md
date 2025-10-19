# Printing Money - Visualisation Interactive des Revenus

Une reproduction moderne du site "Printing Money" de Neal.fun qui visualise de manière interactive le temps nécessaire pour gagner de l'argent selon différents salaires horaires.

## 🚀 Fonctionnalités

- **Sélecteur de salaire interactif** : Choisissez parmi différents niveaux de salaire horaire
- **Animation en temps réel** : Visualisez l'argent s'accumuler en temps réel
- **Comparaisons d'entreprises** : Comparez votre salaire aux revenus des grandes entreprises (Apple, Amazon, Google, Microsoft)
- **Dépenses gouvernementales** : Visualisez la vitesse des dépenses publiques
- **Design moderne et responsive** : Interface élégante qui s'adapte à tous les écrans
- **Effets visuels** : Animations fluides et particules d'argent

## 📁 Structure du Projet

```
printing-money/
├── index.html          # Structure HTML principale
├── styles.css          # Styles CSS avec animations
├── script.js           # Logique JavaScript interactive
└── README.md           # Documentation du projet
```

## 🛠️ Technologies Utilisées

- **HTML5** : Structure sémantique moderne
- **CSS3** : Animations, gradients, et design responsive
- **JavaScript ES6+** : Logique interactive et animations
- **Google Fonts** : Police Inter pour une typographie moderne

## 🎯 Fonctionnalités Principales

### Calculs en Temps Réel
- Conversion automatique des salaires horaires en revenus par seconde
- Calcul du temps nécessaire pour gagner 1$
- Animation fluide du compteur d'argent

### Données Économiques
- **Entreprises** : Revenus par seconde des géants technologiques
- **Gouvernement** : Dépenses par seconde des programmes publics
- **Comparaisons** : Mise en perspective des différents niveaux de revenus

### Interface Utilisateur
- Design moderne avec dégradés et ombres
- Animations CSS fluides
- Responsive design pour mobile et desktop
- Effets visuels (particules d'argent, pulsations)

## 🚀 Installation et Utilisation

1. **Cloner ou télécharger** les fichiers du projet
2. **Ouvrir** `index.html` dans un navigateur web moderne
3. **Interagir** avec les boutons de salaire pour voir les changements en temps réel

Aucune installation de dépendances n'est requise - le site fonctionne directement dans le navigateur !

## 🎨 Personnalisation

### Modifier les Salaires
Éditez le fichier `index.html` pour ajouter ou modifier les options de salaire :

```html
<button class="salary-btn" data-salary="150">$150/h</button>
```

### Ajouter des Entreprises
Modifiez l'objet `companyData` dans `script.js` :

```javascript
const companyData = {
    // ... entreprises existantes
    tesla: { name: "Tesla", revenuePerSecond: 400000, timeForDollar: 0.0025 }
};
```

### Personnaliser les Couleurs
Modifiez les variables CSS dans `styles.css` :

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --success-color: #48bb78;
}
```

## 📱 Compatibilité

- ✅ Chrome/Chromium (recommandé)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 🔧 Améliorations Futures Possibles

- [ ] Ajout de plus d'entreprises et organisations
- [ ] Calculs de revenus annuels
- [ ] Comparaisons internationales
- [ ] Mode sombre/clair
- [ ] Sauvegarde des préférences utilisateur
- [ ] Graphiques de progression
- [ ] Calculs d'inflation

## 📄 Licence

Ce projet est inspiré du site original de Neal.fun mais recréé de zéro avec des améliorations modernes. Utilisez librement pour vos projets éducatifs et personnels.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
- Signaler des bugs
- Proposer de nouvelles fonctionnalités
- Améliorer le design
- Optimiser les performances

---

**Créé avec ❤️** - Une reproduction moderne du concept original de Neal.fun
