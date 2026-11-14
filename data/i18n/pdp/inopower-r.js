// Inopower-R™ product page text, per site language.
// Uses the same layout as Father of Insane™ / Warflex™ (CountryProductPage). Shared labels
// (headings, quote button, "where to buy"…) come from the Father of Insane™ text; everything
// product-specific is overridden here, because Inopower-R is a stimulant-free capsule, not a pre-workout.
// Facts from the supplement-facts label: serving = 2 capsules, 600 mg Inopower-R blend
// (inosine, taurine, ATP), vitamin B6 50 mg, vitamin B12 600 mcg; 120 capsules = 60 servings.
// {loc} → "in the UAE" / "في الإمارات"; {cities} → city list from FOI_CITIES; {name} → country name.
// Languages not listed here fall back to English.

import { getFoiText } from "./father-of-insane";

// Keeps the shared labels, swaps in Inopower text, and keeps the base "Is it available {loc}?" question last.
const build = (lang, t) => {
  const base = getFoiText(lang);
  return { ...base, ...t, faq: [...t.faq, base.faq[4]] };
};

const en = build("en", {
  badge: "Stimulant-free ATP support",
  tag: "Steady training energy, without caffeine.",
  warn: "Stimulant-free: 0 mg caffeine per serving.",
  servings: "Pack size",
  intro:
    "Promolecules Inopower-R™ is a stimulant-free ATP support formula for healthy adults. For athletes {loc}{cities} who want steady energy in training without caffeine, each serving of 2 capsules gives a 600 mg Inopower-R blend of inosine, taurine and ATP, with vitamin B6 and vitamin B12. Take it on its own or with your usual pre-workout. Because it has no stimulants, it also suits evening sessions.",
  stats: ["caffeine per serving", "Inopower-R blend", "servings", "minimum age (years)"],
  ingredients_p: "Each serving (2 capsules) contains the 600 mg Inopower-R blend, plus vitamins B6 and B12:",
  steps: [
    "Take 2 capsules (one serving) with water about 30 minutes before training.",
    "Take it on its own, or with your usual pre-workout. It adds no caffeine.",
    "Do not exceed the recommended serving.",
  ],
  who: [
    "Athletes and runners",
    "Strength and resistance training enthusiasts",
    "People who train in the evening or late at night",
    "People who are sensitive to caffeine, or taking a break from stimulant pre-workouts",
  ],
  skip_p:
    "Children and anyone under 18, and pregnant or breastfeeding women. If you have a medical condition or take medication, consult a healthcare professional first.",
  safety: [
    "For healthy adults aged 18 and over.",
    "Contains no caffeine or other stimulants.",
    "Do not exceed the recommended serving.",
    "Consult a healthcare professional before use if you have a medical condition or take medication.",
    "Not recommended during pregnancy or breastfeeding.",
    "Keep out of reach of children.",
    "Store in a cool, dry place.",
  ],
  faq: [
    {
      question: "Does it contain caffeine?",
      answer: "No. Inopower-R contains no caffeine and no other stimulants.",
    },
    {
      question: "What is in it?",
      answer:
        "Each serving (2 capsules) has a 600 mg Inopower-R blend of inosine, taurine and ATP (adenosine 5'-triphosphate), plus 50 mg of vitamin B6 and 600 mcg of vitamin B12.",
    },
    {
      question: "Can I take it with my pre-workout?",
      answer:
        "Yes. It can be taken on its own or with your usual pre-workout. It adds no caffeine, but always check the caffeine in your pre-workout and follow its label.",
    },
    {
      question: "Can I take it before an evening workout?",
      answer: "Yes. Inopower-R has no stimulants, so it suits evening and late-night training.",
    },
  ],
  faq_title: "Everything you need to know about Inopower-R™",
});

const ar = build("ar", {
  badge: "دعم ATP خالٍ من المنبّهات",
  tag: "طاقة ثابتة في التمرين، بدون كافيين.",
  warn: "خالٍ من المنبّهات: 0 ملغ كافيين لكل حصة.",
  servings: "حجم العبوة",
  intro:
    "«Inopower-R™» من برومولكيولز تركيبة لدعم ATP خالية من المنبّهات للبالغين الأصحاء. وللرياضيين {loc}{cities} ممن يريدون طاقة ثابتة في التمرين بدون كافيين، تقدّم كل حصة من كبسولتين خليط Inopower-R بوزن 600 ملغ من الإينوزين والتورين وATP، مع فيتامين B6 وفيتامين B12. تناوله وحده أو مع البري ورك أوت الذي تستخدمه عادةً. ولأنه بدون منبّهات، يناسب أيضًا تمارين المساء.",
  stats: ["كافيين لكل حصة", "خليط Inopower-R", "حصة", "الحد الأدنى للعمر (سنة)"],
  ingredients_p: "تحتوي كل حصة (كبسولتان) على خليط Inopower-R بوزن 600 ملغ، مع فيتاميني B6 وB12:",
  steps: [
    "تناول كبسولتين (حصة واحدة) مع الماء قبل التمرين بنحو 30 دقيقة.",
    "تناوله وحده أو مع البري ورك أوت المعتاد. لا يضيف أي كافيين.",
    "لا تتجاوز الحصة الموصى بها.",
  ],
  who: [
    "الرياضيون والعدّاؤون",
    "هواة تمارين القوة والمقاومة",
    "من يتمرنون في المساء أو في وقت متأخر من الليل",
    "الحساسون للكافيين، أو من يأخذون استراحة من البري ورك أوت المنبّه",
  ],
  skip_p:
    "الأطفال ومن هم دون 18 عامًا، والحوامل والمرضعات. وإذا كنت تعاني من حالة طبية أو تتناول دواءً فاستشر مختصًا في الرعاية الصحية أولًا.",
  safety: [
    "للبالغين الأصحاء بعمر 18 عامًا فأكثر.",
    "لا يحتوي على كافيين أو منبّهات أخرى.",
    "لا تتجاوز الحصة الموصى بها.",
    "استشر مختصًا في الرعاية الصحية قبل الاستخدام إذا كنت تعاني من حالة طبية أو تتناول دواءً.",
    "لا يُنصح به أثناء الحمل أو الرضاعة.",
    "يُحفظ بعيدًا عن متناول الأطفال.",
    "يُخزَّن في مكان بارد وجاف.",
  ],
  faq: [
    {
      question: "هل يحتوي على كافيين؟",
      answer: "لا. لا يحتوي Inopower-R على كافيين ولا على أي منبّهات أخرى.",
    },
    {
      question: "ماذا يحتوي؟",
      answer:
        "تحتوي كل حصة (كبسولتان) على خليط Inopower-R بوزن 600 ملغ من الإينوزين والتورين وATP (أدينوسين ثلاثي الفوسفات)، إضافة إلى 50 ملغ من فيتامين B6 و600 ميكروغرام من فيتامين B12.",
    },
    {
      question: "هل يمكنني تناوله مع البري ورك أوت؟",
      answer:
        "نعم. يمكن تناوله وحده أو مع البري ورك أوت المعتاد. لا يضيف أي كافيين، لكن تحقق دائمًا من كمية الكافيين في البري ورك أوت واتبع ملصقه.",
    },
    {
      question: "هل يمكنني تناوله قبل تمرين المساء؟",
      answer: "نعم. لا يحتوي Inopower-R على منبّهات، لذلك يناسب التمرين في المساء وفي وقت متأخر من الليل.",
    },
  ],
  faq_title: "كل ما تحتاج معرفته عن Inopower-R™",
});

const es = build("es", {
  badge: "Apoyo de ATP sin estimulantes",
  tag: "Energía estable para entrenar, sin cafeína.",
  warn: "Sin estimulantes: 0 mg de cafeína por porción.",
  servings: "Presentación",
  intro:
    "Inopower-R™ de Promolecules es una fórmula de apoyo de ATP sin estimulantes para adultos sanos. Para los atletas {loc}{cities} que quieren energía estable al entrenar sin cafeína, cada porción de 2 cápsulas aporta una mezcla Inopower-R de 600 mg con inosina, taurina y ATP, además de vitamina B6 y vitamina B12. Tómalo solo o con tu pre entreno habitual. Como no tiene estimulantes, también sirve para entrenar por la noche.",
  stats: ["de cafeína por porción", "mezcla Inopower-R", "porciones", "edad mínima (años)"],
  ingredients_p: "Cada porción (2 cápsulas) contiene la mezcla Inopower-R de 600 mg, además de vitaminas B6 y B12:",
  steps: [
    "Toma 2 cápsulas (una porción) con agua unos 30 minutos antes de entrenar.",
    "Tómalo solo o con tu pre entreno habitual. No añade cafeína.",
    "No excedas la porción recomendada.",
  ],
  who: [
    "Atletas y corredores",
    "Personas que entrenan fuerza y resistencia",
    "Quienes entrenan por la tarde-noche o de madrugada",
    "Personas sensibles a la cafeína o que descansan de los pre entrenos estimulantes",
  ],
  skip_p:
    "Niños y menores de 18 años, y mujeres embarazadas o en periodo de lactancia. Si tienes una condición médica o tomas medicamentos, consulta primero a un profesional de la salud.",
  safety: [
    "Para adultos sanos de 18 años o más.",
    "No contiene cafeína ni otros estimulantes.",
    "No excedas la porción recomendada.",
    "Consulta a un profesional de la salud antes de usarlo si tienes una condición médica o tomas medicamentos.",
    "No recomendado durante el embarazo o la lactancia.",
    "Mantener fuera del alcance de los niños.",
    "Conservar en un lugar fresco y seco.",
  ],
  faq: [
    {
      question: "¿Contiene cafeína?",
      answer: "No. Inopower-R no contiene cafeína ni otros estimulantes.",
    },
    {
      question: "¿Qué contiene?",
      answer:
        "Cada porción (2 cápsulas) tiene una mezcla Inopower-R de 600 mg con inosina, taurina y ATP (adenosín 5'-trifosfato), además de 50 mg de vitamina B6 y 600 mcg de vitamina B12.",
    },
    {
      question: "¿Puedo tomarlo con mi pre entreno?",
      answer:
        "Sí. Puedes tomarlo solo o con tu pre entreno habitual. No añade cafeína, pero revisa siempre la cafeína de tu pre entreno y sigue su etiqueta.",
    },
    {
      question: "¿Puedo tomarlo antes de entrenar por la noche?",
      answer: "Sí. Inopower-R no tiene estimulantes, así que sirve para entrenar por la noche.",
    },
  ],
  faq_title: "Todo lo que necesitas saber sobre Inopower-R™",
});

const pt = build("pt", {
  badge: "Apoio de ATP sem estimulantes",
  tag: "Energia estável no treino, sem cafeína.",
  warn: "Sem estimulantes: 0 mg de cafeína por dose.",
  servings: "Embalagem",
  intro:
    "O Inopower-R™, da Promolecules, é uma fórmula de suporte de ATP sem estimulantes para adultos saudáveis. Para atletas {loc}{cities} que querem energia estável no treino sem cafeína, cada dose de 2 cápsulas traz uma mistura Inopower-R de 600 mg com inosina, taurina e ATP, além de vitamina B6 e vitamina B12. Use sozinho ou com o seu pré-treino habitual. Como não tem estimulantes, também serve para treinos à noite.",
  stats: ["de cafeína por dose", "mistura Inopower-R", "doses", "idade mínima (anos)"],
  ingredients_p: "Cada dose (2 cápsulas) contém a mistura Inopower-R de 600 mg, além das vitaminas B6 e B12:",
  steps: [
    "Tome 2 cápsulas (uma dose) com água cerca de 30 minutos antes do treino.",
    "Use sozinho ou com o seu pré-treino habitual. Não acrescenta cafeína.",
    "Não exceda a porção recomendada.",
  ],
  who: [
    "Atletas e corredores",
    "Praticantes de treino de força e resistência",
    "Quem treina à noite ou de madrugada",
    "Pessoas sensíveis à cafeína ou dando uma pausa nos pré-treinos estimulantes",
  ],
  skip_p:
    "Crianças e menores de 18 anos, e gestantes ou lactantes. Se você tem alguma condição médica ou usa medicamentos, consulte antes um profissional de saúde.",
  safety: [
    "Para adultos saudáveis com 18 anos ou mais.",
    "Não contém cafeína nem outros estimulantes.",
    "Não exceda a porção recomendada.",
    "Consulte um profissional de saúde antes de usar se tiver alguma condição médica ou usar medicamentos.",
    "Não recomendado durante a gravidez ou a amamentação.",
    "Mantenha fora do alcance de crianças.",
    "Armazene em local fresco e seco.",
  ],
  faq: [
    {
      question: "Contém cafeína?",
      answer: "Não. O Inopower-R não contém cafeína nem outros estimulantes.",
    },
    {
      question: "O que ele contém?",
      answer:
        "Cada dose (2 cápsulas) tem uma mistura Inopower-R de 600 mg com inosina, taurina e ATP (adenosina 5'-trifosfato), além de 50 mg de vitamina B6 e 600 mcg de vitamina B12.",
    },
    {
      question: "Posso tomar junto com meu pré-treino?",
      answer:
        "Sim. Pode ser usado sozinho ou com o seu pré-treino habitual. Não acrescenta cafeína, mas sempre confira a cafeína do seu pré-treino e siga o rótulo.",
    },
    {
      question: "Posso tomar antes de um treino à noite?",
      answer: "Sim. O Inopower-R não tem estimulantes, então serve para treinos à noite.",
    },
  ],
  faq_title: "Tudo o que você precisa saber sobre o Inopower-R™",
});

const fr = build("fr", {
  badge: "Soutien ATP sans stimulant",
  tag: "Une énergie stable à l'entraînement, sans caféine.",
  warn: "Sans stimulants : 0 mg de caféine par portion.",
  servings: "Conditionnement",
  intro:
    "Inopower-R™ de Promolecules est une formule de soutien ATP sans stimulants, destinée aux adultes en bonne santé. Pour les athlètes {loc}{cities} qui veulent une énergie stable à l'entraînement sans caféine, chaque portion de 2 gélules apporte un mélange Inopower-R de 600 mg à base d'inosine, de taurine et d'ATP, avec de la vitamine B6 et de la vitamine B12. Prenez-le seul ou avec votre pré-entraînement habituel. Sans stimulants, il convient aussi aux séances du soir.",
  stats: ["de caféine par portion", "mélange Inopower-R", "portions", "âge minimum (ans)"],
  ingredients_p: "Chaque portion (2 gélules) contient le mélange Inopower-R de 600 mg, ainsi que les vitamines B6 et B12 :",
  steps: [
    "Prenez 2 gélules (une portion) avec de l'eau environ 30 minutes avant l'entraînement.",
    "Prenez-le seul ou avec votre pré-entraînement habituel. Il n'ajoute pas de caféine.",
    "Ne dépassez pas la portion recommandée.",
  ],
  who: [
    "Athlètes et coureurs",
    "Adeptes de la musculation et de l'entraînement en résistance",
    "Personnes qui s'entraînent le soir ou tard dans la nuit",
    "Personnes sensibles à la caféine ou qui font une pause avec les pré-entraînements stimulants",
  ],
  skip_p:
    "Les enfants et les moins de 18 ans, ainsi que les femmes enceintes ou allaitantes. En cas de problème médical ou de traitement en cours, demandez d'abord l'avis d'un professionnel de santé.",
  safety: [
    "Pour adultes en bonne santé de 18 ans et plus.",
    "Ne contient ni caféine ni autres stimulants.",
    "Ne pas dépasser la portion recommandée.",
    "Demandez l'avis d'un professionnel de santé avant usage en cas de problème médical ou de traitement en cours.",
    "Déconseillé pendant la grossesse ou l'allaitement.",
    "Tenir hors de portée des enfants.",
    "Conserver dans un endroit frais et sec.",
  ],
  faq: [
    {
      question: "Contient-il de la caféine ?",
      answer: "Non. Inopower-R ne contient ni caféine ni autres stimulants.",
    },
    {
      question: "Que contient-il ?",
      answer:
        "Chaque portion (2 gélules) contient un mélange Inopower-R de 600 mg à base d'inosine, de taurine et d'ATP (adénosine 5'-triphosphate), ainsi que 50 mg de vitamine B6 et 600 mcg de vitamine B12.",
    },
    {
      question: "Puis-je le prendre avec mon pré-entraînement ?",
      answer:
        "Oui. Il peut être pris seul ou avec votre pré-entraînement habituel. Il n'ajoute pas de caféine, mais vérifiez toujours la caféine de votre pré-entraînement et suivez son étiquette.",
    },
    {
      question: "Puis-je le prendre avant une séance le soir ?",
      answer: "Oui. Inopower-R ne contient pas de stimulants, il convient donc aux séances du soir.",
    },
  ],
  faq_title: "Tout ce qu'il faut savoir sur Inopower-R™",
});

const ms = build("ms", {
  badge: "Sokongan ATP Tanpa Stimulan",
  tag: "Tenaga latihan yang stabil, tanpa kafein.",
  warn: "Tanpa stimulan: 0 mg kafein setiap hidangan.",
  servings: "Saiz pek",
  intro:
    "Inopower-R™ daripada Promolecules ialah formula sokongan ATP tanpa stimulan untuk orang dewasa yang sihat. Untuk atlet {loc}{cities} yang mahukan tenaga stabil semasa latihan tanpa kafein, setiap hidangan 2 kapsul memberikan adunan Inopower-R 600 mg yang mengandungi inosin, taurin dan ATP, bersama vitamin B6 dan vitamin B12. Ambil sahaja atau bersama pra-latihan biasa anda. Oleh sebab tiada stimulan, ia juga sesuai untuk sesi waktu malam.",
  stats: ["kafein setiap hidangan", "adunan Inopower-R", "hidangan", "umur minimum (tahun)"],
  ingredients_p: "Setiap hidangan (2 kapsul) mengandungi adunan Inopower-R 600 mg, serta vitamin B6 dan B12:",
  steps: [
    "Ambil 2 kapsul (satu hidangan) bersama air kira-kira 30 minit sebelum latihan.",
    "Ambil sahaja atau bersama pra-latihan biasa anda. Ia tidak menambah kafein.",
    "Jangan melebihi hidangan yang disyorkan.",
  ],
  who: [
    "Atlet dan pelari",
    "Peminat latihan kekuatan dan rintangan",
    "Mereka yang berlatih pada waktu petang atau lewat malam",
    "Mereka yang sensitif terhadap kafein, atau berehat daripada pra-latihan berstimulan",
  ],
  skip_p:
    "Kanak-kanak dan sesiapa di bawah 18 tahun, serta wanita hamil atau menyusu. Jika anda mempunyai masalah kesihatan atau mengambil ubat, dapatkan nasihat profesional kesihatan terlebih dahulu.",
  safety: [
    "Untuk orang dewasa yang sihat berumur 18 tahun ke atas.",
    "Tidak mengandungi kafein atau stimulan lain.",
    "Jangan melebihi hidangan yang disyorkan.",
    "Dapatkan nasihat profesional kesihatan sebelum digunakan jika anda mempunyai masalah kesihatan atau mengambil ubat.",
    "Tidak disyorkan semasa hamil atau menyusu.",
    "Jauhkan daripada capaian kanak-kanak.",
    "Simpan di tempat yang sejuk dan kering.",
  ],
  faq: [
    {
      question: "Adakah ia mengandungi kafein?",
      answer: "Tidak. Inopower-R tidak mengandungi kafein atau stimulan lain.",
    },
    {
      question: "Apakah kandungannya?",
      answer:
        "Setiap hidangan (2 kapsul) mengandungi adunan Inopower-R 600 mg dengan inosin, taurin dan ATP (adenosina 5'-trifosfat), serta 50 mg vitamin B6 dan 600 mcg vitamin B12.",
    },
    {
      question: "Bolehkah saya mengambilnya bersama pra-latihan?",
      answer:
        "Ya. Ia boleh diambil sahaja atau bersama pra-latihan biasa anda. Ia tidak menambah kafein, tetapi sentiasa semak kandungan kafein pra-latihan anda dan ikut labelnya.",
    },
    {
      question: "Bolehkah saya mengambilnya sebelum latihan waktu malam?",
      answer: "Ya. Inopower-R tidak mengandungi stimulan, jadi ia sesuai untuk latihan waktu malam.",
    },
  ],
  faq_title: "Semua yang perlu anda tahu tentang Inopower-R™",
});

const sw = build("sw", {
  badge: "Msaada wa ATP bila vichocheo",
  tag: "Nishati thabiti mazoezini, bila kafeini.",
  warn: "Bila vichochezi: mg 0 za kafeini kwa kila dozi.",
  servings: "Ukubwa wa kifurushi",
  intro:
    "Inopower-R™ kutoka Promolecules ni fomula ya kusaidia ATP isiyo na vichochezi, kwa watu wazima wenye afya. Kwa wanamichezo {loc}{cities} wanaotaka nishati thabiti mazoezini bila kafeini, kila dozi ya kapsuli 2 inatoa mchanganyiko wa Inopower-R wa mg 600 wenye inosine, taurine na ATP, pamoja na vitamini B6 na vitamini B12. Itumie peke yake au pamoja na pre-workout yako ya kawaida. Kwa kuwa haina vichochezi, inafaa pia kwa mazoezi ya jioni.",
  stats: ["kafeini kwa kila dozi", "mchanganyiko wa Inopower-R", "dozi", "umri wa chini (miaka)"],
  ingredients_p: "Kila dozi (kapsuli 2) ina mchanganyiko wa Inopower-R wa mg 600, pamoja na vitamini B6 na B12:",
  steps: [
    "Meza kapsuli 2 (dozi moja) kwa maji takriban dakika 30 kabla ya mazoezi.",
    "Itumie peke yake au pamoja na pre-workout yako ya kawaida. Haiongezi kafeini.",
    "Usizidi dozi iliyopendekezwa.",
  ],
  who: [
    "Wanamichezo na wakimbiaji",
    "Wapenzi wa mazoezi ya nguvu na ukinzani",
    "Wanaofanya mazoezi jioni au usiku sana",
    "Walio na unyeti kwa kafeini, au wanaopumzika kutumia pre-workout zenye vichochezi",
  ],
  skip_p:
    "Watoto na walio chini ya miaka 18, pamoja na wanawake wajawazito au wanaonyonyesha. Ikiwa una tatizo la kiafya au unatumia dawa, wasiliana kwanza na mtaalamu wa afya.",
  safety: [
    "Kwa watu wazima wenye afya wenye umri wa miaka 18 na zaidi.",
    "Haina kafeini wala vichochezi vingine.",
    "Usizidi dozi iliyopendekezwa.",
    "Wasiliana na mtaalamu wa afya kabla ya kutumia ikiwa una tatizo la kiafya au unatumia dawa.",
    "Haipendekezwi wakati wa ujauzito au kunyonyesha.",
    "Weka mbali na watoto.",
    "Hifadhi mahali penye ubaridi na pakavu.",
  ],
  faq: [
    {
      question: "Je, ina kafeini?",
      answer: "Hapana. Inopower-R haina kafeini wala vichochezi vingine.",
    },
    {
      question: "Ina nini ndani yake?",
      answer:
        "Kila dozi (kapsuli 2) ina mchanganyiko wa Inopower-R wa mg 600 wenye inosine, taurine na ATP (adenosine 5'-triphosphate), pamoja na mg 50 za vitamini B6 na mcg 600 za vitamini B12.",
    },
    {
      question: "Je, naweza kuitumia pamoja na pre-workout yangu?",
      answer:
        "Ndiyo. Inaweza kutumika peke yake au pamoja na pre-workout yako ya kawaida. Haiongezi kafeini, lakini kila mara angalia kiasi cha kafeini kwenye pre-workout yako na ufuate lebo yake.",
    },
    {
      question: "Je, naweza kuitumia kabla ya mazoezi ya jioni?",
      answer: "Ndiyo. Inopower-R haina vichochezi, kwa hiyo inafaa kwa mazoezi ya jioni na usiku.",
    },
  ],
  faq_title: "Kila unachohitaji kujua kuhusu Inopower-R™",
});

// Uzbek: "{name} sportchilari{cities} …" (same sentence shape as the other Uzbek product pages).
const uz = build("uz", {
  badge: "Stimulyatorsiz ATP qo'llab-quvvatlash",
  tag: "Mashg'ulotda barqaror energiya, kofeinsiz.",
  warn: "Stimulyatorsiz: bir porsiyada 0 mg kofein.",
  servings: "Qadoq hajmi",
  intro:
    "Promolecules'ning Inopower-R™ mahsuloti — sog'lom kattalar uchun stimulyatorsiz ATP yordami formulasi. {name} sportchilari{cities} mashg'ulotda kofeinsiz barqaror energiya istasa, 2 kapsuladan iborat har bir porsiyada inozin, taurin va ATP'dan tashkil topgan 600 mg Inopower-R aralashmasi hamda B6 va B12 vitaminlarini topadilar. Uni alohida yoki odatdagi mashqdan oldingi qo'shimchangiz bilan birga qabul qiling. Stimulyator bo'lmagani uchun kechki mashg'ulotlarga ham mos keladi.",
  stats: ["bir porsiyadagi kofein", "Inopower-R aralashmasi", "porsiya", "minimal yosh (yil)"],
  ingredients_p: "Har bir porsiyada (2 kapsula) 600 mg Inopower-R aralashmasi hamda B6 va B12 vitaminlari bor:",
  steps: [
    "Mashg'ulotdan taxminan 30 daqiqa oldin 2 kapsulani (bir porsiya) suv bilan qabul qiling.",
    "Alohida yoki odatdagi mashqdan oldingi qo'shimchangiz bilan birga qabul qiling. U kofein qo'shmaydi.",
    "Tavsiya etilgan porsiyadan oshirmang.",
  ],
  who: [
    "Sportchilar va yuguruvchilar",
    "Kuch va qarshilik mashg'ulotlari ishqibozlari",
    "Kechqurun yoki kechasi kech mashq qiladiganlar",
    "Kofeinga sezgir bo'lganlar yoki stimulyatorli qo'shimchalardan tanaffus olayotganlar",
  ],
  skip_p:
    "Bolalar va 18 yoshgacha bo'lganlar, homilador yoki emizikli ayollar. Agar sizda kasallik bo'lsa yoki dori qabul qilsangiz, avval sog'liqni saqlash mutaxassisi bilan maslahatlashing.",
  safety: [
    "18 yosh va undan katta sog'lom kattalar uchun.",
    "Tarkibida kofein va boshqa stimulyatorlar yo'q.",
    "Tavsiya etilgan porsiyadan oshirmang.",
    "Kasalligingiz bo'lsa yoki dori qabul qilsangiz, ishlatishdan oldin mutaxassis bilan maslahatlashing.",
    "Homiladorlik yoki emizish davrida tavsiya etilmaydi.",
    "Bolalar yetmaydigan joyda saqlang.",
    "Salqin, quruq joyda saqlang.",
  ],
  faq: [
    {
      question: "Tarkibida kofein bormi?",
      answer: "Yo'q. Inopower-R tarkibida kofein ham, boshqa stimulyatorlar ham yo'q.",
    },
    {
      question: "Tarkibida nima bor?",
      answer:
        "Har bir porsiyada (2 kapsula) inozin, taurin va ATP'dan (adenozin 5'-trifosfat) iborat 600 mg Inopower-R aralashmasi, shuningdek 50 mg B6 vitamini va 600 mkg B12 vitamini bor.",
    },
    {
      question: "Uni mashqdan oldingi qo'shimcham bilan birga qabul qilsam bo'ladimi?",
      answer:
        "Ha. Uni alohida yoki odatdagi qo'shimchangiz bilan birga qabul qilish mumkin. U kofein qo'shmaydi, lekin qo'shimchangizdagi kofein miqdorini doim tekshiring va yorlig'iga amal qiling.",
    },
    {
      question: "Uni kechki mashg'ulotdan oldin qabul qilsam bo'ladimi?",
      answer: "Ha. Inopower-R'da stimulyator yo'q, shuning uchun kechki mashg'ulotlarga mos keladi.",
    },
  ],
  faq_title: "Inopower-R™ haqida bilishingiz kerak bo'lgan hamma narsa",
});

// Russian: "Для спортсменов страны {name}{cities} которые…" (no_cities adds the comma).
const ru = build("ru", {
  badge: "Поддержка АТФ без стимуляторов",
  tag: "Ровная энергия на тренировке, без кофеина.",
  warn: "Без стимуляторов: 0 мг кофеина в порции.",
  servings: "Упаковка",
  intro:
    "Inopower-R™ от Promolecules — формула поддержки АТФ без стимуляторов для здоровых взрослых. Для спортсменов страны {name}{cities} которые хотят ровной энергии на тренировке без кофеина, каждая порция из 2 капсул содержит смесь Inopower-R 600 мг из инозина, таурина и АТФ, а также витамины B6 и B12. Принимайте отдельно или вместе с привычным предтреником. Так как в составе нет стимуляторов, он подходит и для вечерних тренировок.",
  stats: ["кофеина в порции", "смесь Inopower-R", "порций", "минимальный возраст (лет)"],
  ingredients_p: "Каждая порция (2 капсулы) содержит смесь Inopower-R 600 мг, а также витамины B6 и B12:",
  steps: [
    "Примите 2 капсулы (одну порцию) с водой примерно за 30 минут до тренировки.",
    "Принимайте отдельно или вместе с привычным предтреником. Кофеина он не добавляет.",
    "Не превышайте рекомендуемую порцию.",
  ],
  who: [
    "Спортсмены и бегуны",
    "Любители силовых тренировок",
    "Те, кто тренируется вечером или поздно ночью",
    "Люди, чувствительные к кофеину, или те, кто делает перерыв в стимулирующих предтрениках",
  ],
  skip_p:
    "Дети и лица младше 18 лет, а также беременные и кормящие женщины. Если у вас есть заболевание или вы принимаете лекарства, сначала проконсультируйтесь со специалистом.",
  safety: [
    "Для здоровых взрослых от 18 лет.",
    "Не содержит кофеина и других стимуляторов.",
    "Не превышайте рекомендуемую порцию.",
    "Если у вас есть заболевание или вы принимаете лекарства, перед применением проконсультируйтесь со специалистом.",
    "Не рекомендуется во время беременности и кормления грудью.",
    "Хранить в недоступном для детей месте.",
    "Хранить в прохладном сухом месте.",
  ],
  faq: [
    {
      question: "Содержит ли он кофеин?",
      answer: "Нет. Inopower-R не содержит кофеина и других стимуляторов.",
    },
    {
      question: "Что входит в состав?",
      answer:
        "Каждая порция (2 капсулы) содержит смесь Inopower-R 600 мг из инозина, таурина и АТФ (аденозин-5'-трифосфат), а также 50 мг витамина B6 и 600 мкг витамина B12.",
    },
    {
      question: "Можно ли принимать его вместе с предтреником?",
      answer:
        "Да. Его можно принимать отдельно или вместе с привычным предтреником. Кофеина он не добавляет, но всегда проверяйте количество кофеина в предтренике и следуйте его этикетке.",
    },
    {
      question: "Можно ли принимать его перед вечерней тренировкой?",
      answer: "Да. В Inopower-R нет стимуляторов, поэтому он подходит для вечерних тренировок.",
    },
  ],
  faq_title: "Всё, что нужно знать об Inopower-R™",
});

// Persian (right-to-left).
const fa = build("fa", {
  badge: "حمایت از ATP بدون محرک",
  tag: "انرژی پایدار در تمرین، بدون کافئین.",
  warn: "بدون محرک: ۰ میلی‌گرم کافئین در هر وعده.",
  servings: "اندازه بسته",
  intro:
    "«Inopower-R™» از پرومولکیولز یک فرمول پشتیبان ATP بدون محرک برای بزرگسالان سالم است. برای ورزشکاران {loc}{cities} که انرژی پایدار در تمرین بدون کافئین می‌خواهند، هر وعده ۲ کپسولی یک ترکیب ۶۰۰ میلی‌گرمی Inopower-R شامل اینوزین، تورین و ATP به‌همراه ویتامین B6 و ویتامین B12 ارائه می‌دهد. آن را به‌تنهایی یا همراه پیش‌تمرین همیشگی خود مصرف کنید. چون محرک ندارد، برای تمرین‌های عصرگاهی و شبانه هم مناسب است.",
  stats: ["کافئین در هر وعده", "ترکیب Inopower-R", "وعده", "حداقل سن (سال)"],
  ingredients_p: "هر وعده (۲ کپسول) شامل ترکیب ۶۰۰ میلی‌گرمی Inopower-R به‌همراه ویتامین‌های B6 و B12 است:",
  steps: [
    "۲ کپسول (یک وعده) را با آب، حدود ۳۰ دقیقه پیش از تمرین مصرف کنید.",
    "به‌تنهایی یا همراه پیش‌تمرین همیشگی خود مصرف کنید. کافئینی اضافه نمی‌کند.",
    "از مقدار توصیه‌شده بیشتر مصرف نکنید.",
  ],
  who: [
    "ورزشکاران و دوندگان",
    "علاقه‌مندان به تمرین‌های قدرتی و مقاومتی",
    "کسانی که عصر یا دیروقت شب تمرین می‌کنند",
    "افراد حساس به کافئین یا کسانی که از پیش‌تمرین‌های محرک فاصله گرفته‌اند",
  ],
  skip_p:
    "کودکان و افراد زیر ۱۸ سال، و زنان باردار یا شیرده. اگر بیماری زمینه‌ای دارید یا دارو مصرف می‌کنید، پیش از مصرف با متخصص سلامت مشورت کنید.",
  safety: [
    "مخصوص بزرگسالان سالم ۱۸ سال به بالا.",
    "فاقد کافئین و سایر محرک‌ها.",
    "از مقدار توصیه‌شده بیشتر مصرف نکنید.",
    "اگر بیماری زمینه‌ای دارید یا دارو مصرف می‌کنید، پیش از مصرف با متخصص سلامت مشورت کنید.",
    "در دوران بارداری یا شیردهی توصیه نمی‌شود.",
    "دور از دسترس کودکان نگه دارید.",
    "در جای خنک و خشک نگهداری کنید.",
  ],
  faq: [
    {
      question: "آیا کافئین دارد؟",
      answer: "خیر. Inopower-R هیچ کافئین یا محرک دیگری ندارد.",
    },
    {
      question: "چه چیزی در آن است؟",
      answer:
        "هر وعده (۲ کپسول) شامل ترکیب ۶۰۰ میلی‌گرمی Inopower-R از اینوزین، تورین و ATP (آدنوزین ۵-تری‌فسفات)، به‌همراه ۵۰ میلی‌گرم ویتامین B6 و ۶۰۰ میکروگرم ویتامین B12 است.",
    },
    {
      question: "آیا می‌توانم آن را همراه پیش‌تمرینم مصرف کنم؟",
      answer:
        "بله. می‌توان آن را به‌تنهایی یا همراه پیش‌تمرین همیشگی مصرف کرد. کافئینی اضافه نمی‌کند، اما همیشه میزان کافئین پیش‌تمرین خود را بررسی کنید و از برچسب آن پیروی کنید.",
    },
    {
      question: "آیا می‌توانم پیش از تمرین شبانه مصرف کنم؟",
      answer: "بله. Inopower-R محرک ندارد، بنابراین برای تمرین‌های عصرگاهی و شبانه مناسب است.",
    },
  ],
  faq_title: "هر آنچه باید درباره Inopower-R™ بدانید",
});

const INOPOWER_TEXT = { en, ar, es, pt, fr, ms, sw, uz, ru, fa };

export const getInopowerText = (lang) => INOPOWER_TEXT[lang] ?? en;

// Ingredient names stay in Latin script in every language (as on the label).
export const INOPOWER_INGREDIENTS = [
  "Inosine",
  "Taurine",
  "Adenosine 5'-Triphosphate (ATP)",
  "Vitamin B6 (Pyridoxine HCl) 50 mg",
  "Vitamin B12 (Cyanocobalamin) 600 mcg",
];

// 0 mg caffeine · 600 mg blend · 120 capsules ÷ 2 per serving · adults only
export const INOPOWER_STATS = ["0 mg", "600 mg", "60", "18+"];

export const INOPOWER_CONTENT = {
  name: "Inopower-R™",
  getText: getInopowerText,
  ingredients: INOPOWER_INGREDIENTS,
  stats: INOPOWER_STATS,
};
