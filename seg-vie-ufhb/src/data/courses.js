export const NIVEAUX = ['L1', 'L2', 'L3']
export const TYPES = ['Cours', 'Anciens sujets', 'Corrigés', 'QCM']

// Pour brancher un vrai PDF sur une matière :
// 1. Dépose ton fichier PDF dans le dossier /public/cours/ du projet (sur GitHub : Add file > Upload files).
// 2. Renseigne son chemin dans pdfUrl (pour le cours) ou corrigeUrl (pour le corrigé), par exemple :
//      pdfUrl: '/cours/microeconomie-1-cours.pdf'
// 3. Tant que pdfUrl / corrigeUrl valent null, le site télécharge un fichier de démonstration à la place.

export const courses = [
  // ===================== LICENCE 1 - SEMESTRE 1 =====================
  {
    id: 'micro1-l1-s1',
    matiere: 'Microéconomie I',
    niveau: 'L1',
    semestre: 'S1',
    description:
      "Introduction à la théorie du consommateur et du producteur : utilité, contrainte budgétaire, courbes d'indifférence, offre, demande et équilibre de marché.",
    coursDisponible: true,
    sujetsDisponibles: true,
    corrigesDisponibles: true,
    pdfUrl: null,
    corrigeUrl: null,
    qcm: [
      {
        question: "Que représente la courbe d'indifférence d'un consommateur ?",
        options: [
          'Les combinaisons de biens qui coûtent le même prix',
          'Les combinaisons de biens qui procurent le même niveau de satisfaction',
          'Le revenu disponible du consommateur',
          'La quantité produite par une entreprise',
        ],
        correct: 1,
      },
      {
        question: "À l'équilibre de marché, que se passe-t-il ?",
        options: [
          "La demande est toujours supérieure à l'offre",
          "L'offre est toujours supérieure à la demande",
          'La quantité offerte est égale à la quantité demandée',
          "Le prix est fixé par l'État",
        ],
        correct: 2,
      },
    ],
  },
  {
    id: 'macro1-l1-s1',
    matiere: 'Macroéconomie I',
    niveau: 'L1',
    semestre: 'S1',
    description:
      'Les grands agrégats économiques : PIB, inflation, chômage, circuit économique et notions de politique budgétaire.',
    coursDisponible: true,
    sujetsDisponibles: true,
    corrigesDisponibles: true,
    pdfUrl: null,
    corrigeUrl: null,
    qcm: [
      {
        question: 'Que mesure le PIB ?',
        options: [
          "La richesse totale accumulée par un pays",
          'La valeur des biens et services produits sur un territoire durant une période donnée',
          'Le nombre de chômeurs dans un pays',
          "Le budget de l'État",
        ],
        correct: 1,
      },
      {
        question: "Le circuit économique met en relation :",
        options: [
          'Uniquement les ménages',
          'Uniquement les entreprises',
          "Les ménages, les entreprises, l'État et le reste du monde",
          "Uniquement l'État",
        ],
        correct: 2,
      },
    ],
  },
  {
    id: 'compta1-l1-s1',
    matiere: 'Comptabilité générale I',
    niveau: 'L1',
    semestre: 'S1',
    description:
      'Principes du bilan comptable, comptes de résultat, mécanisme de la partie double et écritures courantes.',
    coursDisponible: true,
    sujetsDisponibles: true,
    corrigesDisponibles: true,
    pdfUrl: null,
    corrigeUrl: null,
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
      {
        question: 'Le principe de la partie double signifie que :',
        options: [
          'Chaque opération est enregistrée deux fois au débit',
          "Chaque opération est enregistrée au débit d'un compte et au crédit d'un autre pour un montant égal",
          'Chaque compte a deux numéros',
          'Chaque facture doit être imprimée en deux exemplaires',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'maths1-l1-s1',
    matiere: 'Mathématiques appliquées I',
    niveau: 'L1',
    semestre: 'S1',
    description:
      "Fonctions à une variable, limites, dérivées et notions d'optimisation appliquées aux problèmes économiques.",
    coursDisponible: true,
    sujetsDisponibles: true,
    corrigesDisponibles: true,
    pdfUrl: null,
    corrigeUrl: null,
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

  // ===================== LICENCE 1 - SEMESTRE 2 =====================
  {
    id: 'micro2-l1-s2',
    matiere: 'Microéconomie II',
    niveau: 'L1',
    semestre: 'S2',
    description:
      'Théorie du producteur, coûts de production, concurrence pure et parfaite, et introduction aux défaillances de marché.',
    coursDisponible: true,
    sujetsDisponibles: true,
    corrigesDisponibles: true,
    pdfUrl: null,
    corrigeUrl: null,
    qcm: [
      {
        question: 'En concurrence pure et parfaite, une entreprise est :',
        options: [
          'Price-maker (elle fixe le prix du marché)',
          'Price-taker (elle subit le prix du marché)',
          'En situation de monopole',
          "Protégée par une barrière à l'entrée",
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'macro2-l1-s2',
    matiere: 'Macroéconomie II',
    niveau: 'L1',
    semestre: 'S2',
    description:
      "Le modèle IS-LM, la monnaie, l'inflation et les fondements de la politique monétaire.",
    coursDisponible: true,
    sujetsDisponibles: true,
    corrigesDisponibles: true,
    pdfUrl: null,
    corrigeUrl: null,
    qcm: [
      {
        question: 'La courbe LM représente :',
        options: [
          "L'équilibre sur le marché des biens et services",
          "L'équilibre sur le marché de la monnaie",
          "L'équilibre sur le marché du travail",
          "L'équilibre du commerce extérieur",
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'compta2-l1-s2',
    matiere: 'Comptabilité générale II',
    niveau: 'L1',
    semestre: 'S2',
    description:
      "Travaux de fin d'exercice, amortissements, provisions et établissement des états financiers de synthèse.",
    coursDisponible: true,
    sujetsDisponibles: true,
    corrigesDisponibles: true,
    pdfUrl: null,
    corrigeUrl: null,
    qcm: [
      {
        question: "L'amortissement comptable traduit :",
        options: [
          'Une entrée de trésorerie',
          "La dépréciation d'un actif immobilisé dans le temps",
          'Une dette envers un fournisseur',
          'Un produit exceptionnel',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'stats-l1-s2',
    matiere: 'Statistiques descriptives',
    niveau: 'L1',
    semestre: 'S2',
    description:
      'Organisation et représentation des données, indicateurs de tendance centrale et de dispersion, corrélation simple.',
    coursDisponible: true,
    sujetsDisponibles: true,
    corrigesDisponibles: true,
    pdfUrl: null,
    corrigeUrl: null,
    qcm: [
      {
        question: "La médiane d'une série statistique est :",
        options: [
          'La valeur la plus fréquente',
          'La valeur qui partage la série en deux effectifs égaux',
          'La moyenne des valeurs extrêmes',
          "L'écart entre le maximum et le minimum",
        ],
        correct: 1,
      },
    ],
  },

  // ===================== LICENCE 2 - SEMESTRE 1 =====================
  {
    id: 'micro3-l2-s1',
    matiere: 'Microéconomie III',
    niveau: 'L2',
    semestre: 'S1',
    description:
      'Théorie des jeux, concurrence imparfaite, monopole, oligopole et défaillances de marché.',
    coursDisponible: true,
    sujetsDisponibles: true,
    corrigesDisponibles: true,
    pdfUrl: null,
    corrigeUrl: null,
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
    id: 'macro3-l2-s1',
    matiere: 'Macroéconomie III',
    niveau: 'L2',
    semestre: 'S1',
    description:
      'Croissance économique, cycles conjoncturels et modèles de croissance (Solow) appliqués aux économies en développement.',
    coursDisponible: true,
    sujetsDisponibles: true,
    corrigesDisponibles: true,
    pdfUrl: null,
    corrigeUrl: null,
    qcm: [
      {
        question: 'Dans le modèle de Solow, la croissance de long terme provient principalement :',
        options: [
          "De l'accumulation infinie de capital",
          'Du progrès technique',
          'De la seule croissance démographique',
          'Des dépenses publiques',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'compta-analytique-l2-s1',
    matiere: 'Comptabilité analytique',
    niveau: 'L2',
    semestre: 'S1',
    description:
      'Calcul des coûts (coût complet, coût variable), analyse de la rentabilité et aide à la décision de gestion.',
    coursDisponible: true,
    sujetsDisponibles: true,
    corrigesDisponibles: true,
    pdfUrl: null,
    corrigeUrl: null,
    qcm: [
      {
        question: "Le seuil de rentabilité correspond au chiffre d'affaires pour lequel :",
        options: [
          "L'entreprise réalise son bénéfice maximal",
          "Le résultat de l'entreprise est nul (les charges couvrent exactement les produits)",
          "L'entreprise est en situation de faillite",
          'Les charges fixes sont nulles',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'maths-fin-l2-s1',
    matiere: 'Mathématiques financières',
    niveau: 'L2',
    semestre: 'S1',
    description:
      "Intérêts simples et composés, actualisation, annuités et évaluation de projets d'investissement.",
    coursDisponible: true,
    sujetsDisponibles: true,
    corrigesDisponibles: true,
    pdfUrl: null,
    corrigeUrl: null,
    qcm: [
      {
        question: "L'actualisation permet de :",
        options: [
          "Calculer la valeur future d'une somme actuelle",
          "Calculer la valeur aujourd'hui d'une somme future",
          'Convertir une devise étrangère',
          "Calculer un taux d'inflation",
        ],
        correct: 1,
      },
    ],
  },

  // ===================== LICENCE 2 - SEMESTRE 2 =====================
  {
    id: 'econometrie1-l2-s2',
    matiere: 'Économétrie I',
    niveau: 'L2',
    semestre: 'S2',
    description:
      'Régression linéaire simple, hypothèses du modèle classique et première interprétation des résultats.',
    coursDisponible: true,
    sujetsDisponibles: true,
    corrigesDisponibles: true,
    pdfUrl: null,
    corrigeUrl: null,
    qcm: [
      {
        question: 'Dans une régression linéaire, le coefficient R² mesure :',
        options: [
          "Le nombre d'observations",
          'La part de la variance expliquée par le modèle',
          'La moyenne des résidus',
          "L'écart-type de la variable dépendante",
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'eco-monetaire-l2-s2',
    matiere: 'Économie monétaire et financière',
    niveau: 'L2',
    semestre: 'S2',
    description:
      'Fonctions de la monnaie, création monétaire, rôle des banques centrales et politique monétaire de la BCEAO.',
    coursDisponible: true,
    sujetsDisponibles: true,
    corrigesDisponibles: true,
    pdfUrl: null,
    corrigeUrl: null,
    qcm: [
      {
        question: 'La création monétaire est principalement le fait :',
        options: [
          'Des ménages',
          'Des banques commerciales, via le crédit',
          'Des entreprises non financières',
          "Uniquement de l'État",
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'analyse-fin-l2-s2',
    matiere: 'Analyse financière',
    niveau: 'L2',
    semestre: 'S2',
    description:
      "Lecture des états financiers, ratios de rentabilité, de liquidité et de solvabilité d'une entreprise.",
    coursDisponible: true,
    sujetsDisponibles: true,
    corrigesDisponibles: true,
    pdfUrl: null,
    corrigeUrl: null,
    qcm: [
      {
        question: 'Le ratio de liquidité générale mesure :',
        options: [
          "La capacité de l'entreprise à payer ses dettes à court terme avec son actif circulant",
          'La rentabilité des capitaux propres',
          "Le niveau d'endettement à long terme",
          'La marge bénéficiaire',
        ],
        correct: 0,
      },
    ],
  },
  {
    id: 'fiscalite-l2-s2',
    matiere: 'Fiscalité',
    niveau: 'L2',
    semestre: 'S2',
    description:
      'Principes du système fiscal ivoirien : TVA, impôt sur les sociétés, impôt sur le revenu et obligations déclaratives.',
    coursDisponible: true,
    sujetsDisponibles: true,
    corrigesDisponibles: true,
    pdfUrl: null,
    corrigeUrl: null,
    qcm: [
      {
        question: 'La TVA est un impôt :',
        options: [
          'Direct, supporté par les entreprises uniquement',
          'Indirect, supporté in fine par le consommateur final',
          'Prélevé uniquement sur les salaires',
          'Réservé aux importations',
        ],
        correct: 1,
      },
    ],
  },

  // ===================== LICENCE 3 - SEMESTRE 1 =====================
  {
    id: 'econometrie2-l3-s1',
    matiere: 'Économétrie II',
    niveau: 'L3',
    semestre: 'S1',
    description:
      "Régression multiple, problèmes d'hétéroscédasticité et d'autocorrélation, introduction aux données de panel.",
    coursDisponible: true,
    sujetsDisponibles: true,
    corrigesDisponibles: true,
    pdfUrl: null,
    corrigeUrl: null,
    qcm: [
      {
        question: "L'hétéroscédasticité désigne :",
        options: [
          'Une variance des résidus constante',
          'Une variance des résidus non constante selon les observations',
          'Une corrélation parfaite entre deux variables',
          "L'absence de résidus dans le modèle",
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
    pdfUrl: null,
    corrigeUrl: null,
    qcm: [
      {
        question: "L'indice de développement humain (IDH) combine :",
        options: [
          'Uniquement le revenu par habitant',
          "Le revenu, la santé (espérance de vie) et l'éducation",
          'Uniquement le taux de chômage',
          "Le taux d'inflation",
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'finance-pub-l3-s1',
    matiere: 'Finance publique',
    niveau: 'L3',
    semestre: 'S1',
    description:
      "Budget de l'État, recettes et dépenses publiques, déficit budgétaire et dette publique.",
    coursDisponible: true,
    sujetsDisponibles: true,
    corrigesDisponibles: true,
    pdfUrl: null,
    corrigeUrl: null,
    qcm: [
      {
        question: 'Un déficit budgétaire signifie que :',
        options: [
          "Les recettes de l'État dépassent ses dépenses",
          "Les dépenses de l'État dépassent ses recettes",
          "L'État n'a plus de dette",
          'Le budget est parfaitement équilibré',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'eco-internationale-l3-s1',
    matiere: 'Économie internationale',
    niveau: 'L3',
    semestre: 'S1',
    description:
      'Théories du commerce international, avantage comparatif, balance des paiements et régimes de change.',
    coursDisponible: true,
    sujetsDisponibles: true,
    corrigesDisponibles: true,
    pdfUrl: null,
    corrigeUrl: null,
    qcm: [
      {
        question: "La théorie de l'avantage comparatif (Ricardo) explique que :",
        options: [
          "Un pays ne doit produire que ce qu'il produit le mieux dans l'absolu",
          "Un pays a intérêt à se spécialiser dans les biens où son désavantage est le plus faible",
          'Le commerce international est toujours nuisible',
          'Seuls les pays riches doivent commercer entre eux',
        ],
        correct: 1,
      },
    ],
  },

  // ===================== LICENCE 3 - SEMESTRE 2 =====================
  {
    id: 'eco-industrielle-l3-s2',
    matiere: 'Économie industrielle',
    niveau: 'L3',
    semestre: 'S2',
    description:
      'Structures de marché, stratégies des entreprises, concentration industrielle et politique de la concurrence.',
    coursDisponible: true,
    sujetsDisponibles: true,
    corrigesDisponibles: true,
    pdfUrl: null,
    corrigeUrl: null,
    qcm: [
      {
        question: 'Une entente entre entreprises pour fixer les prix est appelée :',
        options: ['Une fusion', 'Un cartel', 'Une joint-venture', 'Une privatisation'],
        correct: 1,
      },
    ],
  },
  {
    id: 'politique-eco-l3-s2',
    matiere: 'Politique économique',
    niveau: 'L3',
    semestre: 'S2',
    description:
      'Objectifs et instruments de la politique économique : politique budgétaire, monétaire, et arbitrages macroéconomiques.',
    coursDisponible: true,
    sujetsDisponibles: true,
    corrigesDisponibles: true,
    pdfUrl: null,
    corrigeUrl: null,
    qcm: [
      {
        question: 'Une politique budgétaire expansionniste consiste à :',
        options: [
          'Réduire les dépenses publiques et augmenter les impôts',
          'Augmenter les dépenses publiques et/ou réduire les impôts',
          'Fixer le taux directeur de la banque centrale',
          'Dévaluer la monnaie nationale',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'controle-gestion-l3-s2',
    matiere: 'Contrôle de gestion',
    niveau: 'L3',
    semestre: 'S2',
    description:
      "Budgets, tableaux de bord, gestion des écarts et pilotage de la performance dans l'entreprise.",
    coursDisponible: true,
    sujetsDisponibles: true,
    corrigesDisponibles: true,
    pdfUrl: null,
    corrigeUrl: null,
    qcm: [
      {
        question: 'Un écart favorable en contrôle de gestion signifie que :',
        options: [
          'Le résultat réel est moins bon que le budget prévu',
          'Le résultat réel est meilleur que le budget prévu',
          "Le budget n'a pas été respecté administrativement",
          "L'entreprise est en déficit",
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'eco-travail-l3-s2',
    matiere: 'Économie du travail',
    niveau: 'L3',
    semestre: 'S2',
    description:
      "Fonctionnement du marché du travail, déterminants du chômage, salaire minimum et politiques de l'emploi.",
    coursDisponible: true,
    sujetsDisponibles: true,
    corrigesDisponibles: true,
    pdfUrl: null,
    corrigeUrl: null,
    qcm: [
      {
        question: 'Le chômage structurel est principalement dû à :',
        options: [
          "Des fluctuations saisonnières de l'activité",
          "Une inadéquation durable entre l'offre et la demande de travail (compétences, secteurs)",
          'Une grève générale',
          'Une hausse temporaire des prix',
        ],
        correct: 1,
      },
    ],
  },
]

        
export const allCourses = [
  // ========== LICENCE 1 - SEMESTRE 1 ==========
  { id: 1, titre: "Microéconomie 1", code: "MIE1401", niveau: "L1", semestre: "S1", matiere: "Microéconomie", type: "Cours", credits: 6, description: "Comportement du consommateur et producteur", file: "/files/micro1.pdf", qcm: 45 },
  { id: 2, titre: "Macroéconomie 1", code: "MAE1401", niveau: "L1", semestre: "S1", matiere: "Macroéconomie", type: "Cours", credits: 6, description: "PIB, inflation, chômage", file: "/files/macro1.pdf", qcm: 38 },
  { id: 3, titre: "Mathématiques - Analyse", code: "MAA1407", niveau: "L1", semestre: "S1", matiere: "Mathématiques", type: "Cours", credits: 5, description: "Fonctions, limites, dérivées", file: "/files/maths-analyse-l1.pdf", qcm: 50 },
  { id: 4, titre: "Comptabilité Générale 1", code: "CGE1406", niveau: "L1", semestre: "S1", matiere: "Comptabilité", type: "Cours", credits: 6, description: "Bilan, journal, grand livre", file: "/files/compta1.pdf", qcm: 60 },
  { id: 5, titre: "Histoire des Faits Économiques", code: "HFE1401", niveau: "L1", semestre: "S1", matiere: "Histoire Éco", type: "Cours", credits: 4, description: "Des origines à la révolution industrielle", file: "/files/hfe.pdf", qcm: 30 },
  { id: 6, titre: "Introduction à la Gestion", code: "IGE1406", niveau: "L1", semestre: "S1", matiere: "Gestion", type: "Cours", credits: 5, description: "Fonctions de l'entreprise", file: "/files/intro-gestion.pdf", qcm: 25 },
  { id: 7, titre: "Anglais Économique L1", code: "LFA1408", niveau: "L1", semestre: "S1", matiere: "Anglais", type: "Cours", credits: 4, description: "Business English", file: "/files/anglais-l1.pdf", qcm: 20 },

 
  // ========== LICENCE 2 - SEMESTRE 3 ==========
  { id: 14, titre: "Microéconomie 3 - Concurrence Imparfaite", code: "MIE3501", niveau: "L2", semestre: "S3", matiere: "Microéconomie", type: "Cours", credits: 6, file: "/files/micro3.pdf", qcm: 40 },
  { id: 15, titre: "Macroéconomie 3 - Modèle IS-LM", code: "MAE3501", niveau: "L2", semestre: "S3", matiere: "Macroéconomie", type: "Cours", credits: 6, file: "/files/macro3.pdf", qcm: 38 },
  { id: 16, titre: "Comptabilité Analytique", code: "COA3501", niveau: "L2", semestre: "S3", matiere: "Comptabilité", type: "Cours", credits: 5, file: "/files/compta-analytique.pdf", qcm: 50 },
  { id: 17, titre: "Mathématiques Financières", code: "MAF3501", niveau: "L2", semestre: "S3", matiere: "Mathématiques", type: "Cours", credits: 5, file: "/files/math-fi.pdf", qcm: 45 },
  { id: 18, titre: "Économie Monétaire", code: "EMO3501", niveau: "L2", semestre: "S3", matiere: "Monnaie", type: "Cours", credits: 4, file: "/files/eco-monetaire.pdf", qcm: 32 },
  { id: 19, titre: "Marketing Fondamental", code: "MKG3501", niveau: "L2", semestre: "S3", matiere: "Marketing", type: "Cours", credits: 4, file: "/files/marketing.pdf", qcm: 30 },

  // ========== LICENCE 2 - SEMESTRE 4 ==========
  { id: 20, titre: "Économétrie 1", code: "ECM4501", niveau: "L2", semestre: "S4", matiere: "Économétrie", type: "Cours", credits: 6, file: "/files/econometrie1.pdf", qcm: 48 },
  { id: 21, titre: "Économie Publique", code: "ECP4501", niveau: "L2", semestre: "S4", matiere: "Économie Publique", type: "Cours", credits: 5, file: "/files/eco-publique.pdf", qcm: 35 },
  { id: 22, titre: "Gestion Financière", code: "GFI4501", niveau: "L2", semestre: "S4", matiere: "Finance", type: "Cours", credits: 5, file: "/files/gestion-fi.pdf", qcm: 42 },
  { id: 23, titre: "Informatique de Gestion", code: "INF4501", niveau: "L2", semestre: "S4", matiere: "Informatique", type: "Cours", credits: 4, file: "/files/info-gestion.pdf", qcm: 25 },
  { id: 24, titre: "Droit des Affaires", code: "DRA4501", niveau: "L2", semestre: "S4", matiere: "Droit", type: "Cours", credits: 4, file: "/files/droit-affaires.pdf", qcm: 38 },

  // ========== LICENCE 3 - SEMESTRE 5 - ÉCONOMIE ==========
  { id: 25, titre: "Économétrie 2 Avancée", code: "ECM5501", niveau: "L3", semestre: "S5", matiere: "Économétrie", type: "Cours", credits: 6, file: "/files/econometrie2.pdf", qcm: 50, parcours: "Economie" },
  { id: 26, titre: "Économie Internationale", code: "ECI5501", niveau: "L3", semestre: "S5", matiere: "Économie Internationale", type: "Cours", credits: 6, file: "/files/eco-internationale.pdf", qcm: 40, parcours: "Economie" },
  { id: 27, titre: "Économie du Développement", code: "ECD5501", niveau: "L3", semestre: "S5", matiere: "Développement", type: "Cours", credits: 5, file: "/files/eco-dev.pdf", qcm: 35, parcours: "Economie" },
  { id: 28, titre: "Théorie des Jeux", code: "TDJ5501", niveau: "L3", semestre: "S5", matiere: "Microéconomie", type: "Cours", credits: 5, file: "/files/theorie-jeux.pdf", qcm: 30, parcours: "Economie" },

  // ========== LICENCE 3 - SEMESTRE 5 - GESTION ==========
  { id: 29, titre: "Comptabilité des Sociétés", code: "COS5501", niveau: "L3", semestre: "S5", matiere: "Comptabilité", type: "Cours", credits: 6, file: "/files/compta-societe.pdf", qcm: 55, parcours: "Gestion" },
  { id: 30, titre: "Fiscalité d'Entreprise", code: "FIS5501", niveau: "L3", semestre: "S5", matiere: "Fiscalité", type: "Cours", credits: 5, file: "/files/fiscalite.pdf", qcm: 45, parcours: "Gestion" },
  { id: 31, titre: "Contrôle de Gestion", code: "CDG5501", niveau: "L3", semestre: "S5", matiere: "Gestion", type: "Cours", credits: 5, file: "/files/controle-gestion.pdf", qcm: 48, parcours: "Gestion" },

  // ========== LICENCE 3 - SEMESTRE 6 ==========
  { id: 32, titre: "Commerce International", code: "COI6501", niveau: "L3", semestre: "S6", matiere: "Commerce International", type: "Cours", credits: 6, file: "/files/commerce-inter.pdf", qcm: 38 },
  { id: 33, titre: "Gestion de Projet", code: "GPR6501", niveau: "L3", semestre: "S6", matiere: "Gestion", type: "Cours", credits: 5, file: "/files/gestion-projet.pdf", qcm: 30 },
  { id: 34, titre: "Marchés Financiers", code: "MFI6501", niveau: "L3", semestre: "S6", matiere: "Finance", type: "Cours", credits: 5, file: "/files/marches-fi.pdf", qcm: 42 },
  { id: 35, titre: "Rédaction Mémoire L3", code: "MEM6501", niveau: "L3", semestre: "S6", matiere: "Méthodologie", type: "Guide", credits: 6, file: "/files/guide-memoire.pdf", qcm: 10 },
];

export const niveaux = ["L1", "L2", "L3"];
export const semestres = ["S1", "S2", "S3", "S4", "S5", "S6"];
export const matieres = [...new Set(allCourses.map(c => c.matiere))];       
       
       
    
   
    
    
