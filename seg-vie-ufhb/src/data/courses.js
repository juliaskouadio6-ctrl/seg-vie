export const NIVEAUX = ['L1', 'L2', 'L3']
export const TYPES = ['Cours', 'Anciens sujets', 'Corrigés', 'QCM']

export const courses = [
  {
    id: 'micro-l1-s1',
    matiere: 'Microéconomie',
    niveau: 'L1',
    semestre: 'S1',
    description:
      "Introduction à la théorie du consommateur et du producteur : utilité, contrainte budgétaire, courbes d'indifférence, offre et demande, équilibre de marché.",
    coursDisponible: true,
    sujetsDisponibles: true,
    corrigesDisponibles: true,
    qcm: [
      {
        question: "Que représente la courbe d'indifférence d'un consommateur ?",
        options: [
          'Les combinaisons de biens qui coûtent le même prix',
          'Les combinaisons de biens qui procurent le même niveau de satisfaction',
          "Le revenu disponible du consommateur",
          "La quantité produite par une entreprise",
        ],
        correct: 1,
      },
      {
        question: "À l'équilibre de marché, que se passe-t-il ?",
        options: [
          'La demande est toujours supérieure à l\'offre',
          "L'offre est toujours supérieure à la demande",
          'La quantité offerte est égale à la quantité demandée',
          'Le prix est fixé par l\'État',
        ],
        correct: 2,
      },
    ],
  },
  {
    id: 'macro-l1-s1',
    matiere: 'Macroéconomie',
    niveau: 'L1',
    semestre: 'S1',
    description:
      "Les grands agrégats économiques : PIB, inflation, chômage, circuit économique et politique budgétaire de base.",
    coursDisponible: true,
    sujetsDisponibles: true,
    corrigesDisponibles: true,
    qcm: [
      {
        question: 'Que mesure le PIB ?',
        options: [
          "La richesse totale accumulée par un pays",
          "La valeur des biens et services produits sur un territoire durant une période donnée",
          'Le nombre de chômeurs dans un pays',
          "Le budget de l'État",
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'compta-l1-s1',
    matiere: 'Comptabilité générale',
    niveau: 'L1',
    semestre: 'S1',
    description:
      'Principes du bilan comptable, comptes de résultat, mécanisme de la partie double et écritures courantes.',
    coursDisponible: true,
    sujetsDisponibles: true,
    corrigesDisponibles: true,
    qcm: [
      {
        question: 'Le bilan comptable présente :',
        options: [
          "Le chiffre d'affaires de l'entreprise",
          "Les actifs et les passifs de l'entreprise à une date donnée",
          'Les seules charges de la période',
          "L'organigramme de l'entreprise",
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'maths-l1-s2',
    matiere: 'Mathématiques appliquées',
    niveau: 'L1',
    semestre: 'S2',
    description:
      "Fonctions à une variable, dérivées, optimisation et calcul matriciel appliqués aux problèmes économiques.",
    coursDisponible: true,
    sujetsDisponibles: true,
    corrigesDisponibles: true,
    qcm: [
      {
        question: "La dérivée d'une fonction en un point mesure :",
        options: [
          'Sa valeur maximale',
          'Sa pente (taux de variation instantané) en ce point',
          'Son intégrale',
          'Sa moyenne',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'micro-l2-s1',
    matiere: 'Microéconomie approfondie',
    niveau: 'L2',
    semestre: 'S1',
    description:
      'Théorie des jeux, concurrence imparfaite, monopole, oligopole et défaillances de marché.',
    coursDisponible: true,
    sujetsDisponibles: true,
    corrigesDisponibles: true,
    qcm: [
      {
        question: 'Un monopole se caractérise par :',
        options: [
          'Un grand nombre de vendeurs',
          'Un seul vendeur sur le marché',
          'Un seul acheteur sur le marché',
          'Une concurrence parfaite',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'stats-l2-s2',
    matiere: 'Statistiques et probabilités',
    niveau: 'L2',
    semestre: 'S2',
    description:
      "Lois de probabilité, échantillonnage, estimation et tests d'hypothèses appliqués aux données économiques.",
    coursDisponible: true,
    sujetsDisponibles: true,
    corrigesDisponibles: true,
    qcm: [
      {
        question: "Un test d'hypothèse sert à :",
        options: [
          'Calculer une moyenne',
          'Décider si une hypothèse sur une population est statistiquement soutenable',
          'Dessiner un graphique',
          'Trier des données',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'eco-dev-l3-s1',
    matiere: 'Économie du développement',
    niveau: 'L3',
    semestre: 'S1',
    description:
      'Théories de la croissance et du développement, pauvreté, inégalités et politiques de développement en Afrique.',
    coursDisponible: true,
    sujetsDisponibles: true,
    corrigesDisponibles: true,
    qcm: [
      {
        question: "L'indice de développement humain (IDH) combine :",
        options: [
          'Uniquement le revenu par habitant',
          'Le revenu, la santé (espérance de vie) et l\'éducation',
          'Uniquement le taux de chômage',
          "Le taux d'inflation",
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'econometrie-l3-s2',
    matiere: 'Économétrie',
    niveau: 'L3',
    semestre: 'S2',
    description:
      'Régression linéaire simple et multiple, hypothèses du modèle classique, interprétation des résultats économétriques.',
    coursDisponible: true,
    sujetsDisponibles: true,
    corrigesDisponibles: true,
    qcm: [
      {
        question: 'Dans une régression linéaire, le coefficient R² mesure :',
        options: [
          "Le nombre d'observations",
          "La part de la variance expliquée par le modèle",
          'La moyenne des résidus',
          "L'écart-type de la variable dépendante",
        ],
        correct: 1,
      },
    ],
  },
]
