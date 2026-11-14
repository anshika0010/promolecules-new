// HydraPump+™ product page text, per site language.
// Uses the same layout as Father of Insane™ / Warflex™ / Inopower-R™ (CountryProductPage). Shared labels
// (headings, quote button, "where to buy"…) come from the Father of Insane™ text; everything
// product-specific is overridden here, because HydraPump+ is a liquid glycerol hydration formula, not a pre-workout.
// {loc} → "في الإمارات" / "en Venezuela" / "O'zbekistonda" / "nchini Tanzania" / "в Туркменистане" / "in Belize"…;
// {cities} → city list from FOI_CITIES (per country).
// All 10 site languages are written. `langs` limits the country layout to the languages below,
// so a new site language keeps the standard product page until its text is added here.

import { getFoiText } from "./father-of-insane";

// Arabic: from the HydraPump+ UAE page supplied.
const ar = {
  ...getFoiText("ar"),
  badge: "تركيبة سائلة بالجلسرين للترطيب والبمب",
  tag: "ترطيب أعمق وبمب أقوى، خاصة في التمارين الطويلة والأجواء الحارة.",
  warn: "اشرب كمية كافية من الماء قبل التمرين وأثناءه وبعده.",
  intro:
    "HydraPump+™ من برومولكيولز تركيبة عالية الأداء للترطيب والبمب، مصممة لدعم امتلاء العضلات والتروية والتحمّل. وللرياضيين {loc}{cities} ممن يتمرنون لفترات طويلة أو بحجم تدريبي عالٍ أو في الأجواء الحارة، تجمع بين الجلسرين السائل والسيترولين والإلكتروليتات لترطيب خلوي عميق وبمب قوي. يمكن تناولها وحدها أو مع أي مكمل ما قبل التمرين.",
  stats: ["حصة", "نكهة", "مكونات رئيسية", "الحد الأدنى للعمر (سنة)"],
  ingredients_p: "تشمل المكوّنات الرئيسية:",
  steps: [
    "تناولها قبل التمرين، واتبع الملصق لمعرفة حجم الحصة.",
    "يمكن دمجها مع أي مكمل ما قبل التمرين، أو تناولها وحدها.",
    "مثالية للجلسات الطويلة أو عالية الحجم. واصل شرب الماء كالمعتاد.",
  ],
  who: [
    "من يريدون عضلات أكثر امتلاءً وبمباً قوياً",
    "جلسات التمرين الطويلة أو عالية الحجم",
    "التمرين في الأجواء الحارة",
    "الرياضيون الذين يريدون دمج الترطيب مع مكمل ما قبل التمرين",
  ],
  skip_p:
    "من هم دون 18 عامًا، والحوامل والمرضعات. وإذا كنت تتناول أدوية بوصفة طبية أو لديك حالة صحية، فاستشر مختصاً في الرعاية الصحية قبل الاستخدام.",
  safety: [
    "للبالغين الأصحاء من عمر 18 عاماً فأكثر.",
    "إذا كنت تتناول أدوية بوصفة طبية أو لديك حالة صحية، استشر مختصاً في الرعاية الصحية قبل الاستخدام.",
    "لا يُستخدم أثناء الحمل أو الرضاعة.",
    "يُحفظ بعيداً عن متناول الأطفال.",
    "يُخزَّن في مكان بارد وجاف.",
  ],
  faq: [
    {
      question: "ما هو HydraPump+™؟",
      answer:
        "HydraPump+™ تركيبة عالية الأداء للترطيب والبمب، مصممة لدعم امتلاء العضلات والتروية والتحمّل. بفضل الجلسرين السائل والسيترولين والإلكتروليتات، هي مصنوعة لترطيب خلوي عميق وبمب قوي، خاصة في التمارين عالية الحجم أو في الأجواء الحارة.",
    },
    {
      question: "من يجب أن يستخدم HydraPump+™؟",
      answer:
        "من يريدون عضلات أكثر امتلاءً وبمباً قوياً، وجلسات التمرين الطويلة أو عالية الحجم، والتمرين في الأجواء الحارة، والرياضيون الذين يريدون دمج الترطيب مع مكمل ما قبل التمرين.",
    },
    {
      question: "كيف أتناول HydraPump+™؟",
      answer:
        "تناولها قبل التمرين. يمكن دمجها مع أي مكمل ما قبل التمرين وهي مثالية للجلسات الطويلة أو عالية الحجم. اتبع الملصق لمعرفة حجم الحصة.",
    },
    {
      question: "هل يمكنني دمج HydraPump+™ مع مكمل ما قبل التمرين؟",
      answer: "نعم. يمكن دمج HydraPump+™ مع أي مكمل ما قبل التمرين أو تناوله وحده قبل التمرين.",
    },
    {
      question: "لماذا HydraPump+™ سائل؟",
      answer:
        "يعتمد HydraPump+™ على نظام جلسرين سائل صممته Promolecules™ لامتصاص أفضل. هو نظام ترطيب وأداء، وليس منتج بمب فقط.",
    },
    {
      question: "هل يناسب HydraPump+™ الأجواء الحارة والتمارين عالية الحجم؟",
      answer:
        "نعم. صُمم للجلسات عالية الحجم والتمرين في الأجواء الحارة، حيث تزداد أهمية الترطيب والإلكتروليتات. واصل شرب الماء كالمعتاد واتبع الملصق.",
    },
    {
      question: "ما الفوائد الرئيسية لـ HydraPump+™؟",
      answer:
        "تدعم امتلاء العضلات والبمب، وتدعم الترطيب الخلوي العميق بالجلسرين السائل والإلكتروليتات، وتدعم التحمّل، وتساعد على تحسين الأداء في التمرين، بشكل سائل مصمم لامتصاص أفضل.",
    },
    {
      question: "ما نكهات HydraPump+™؟",
      answer:
        "يتوفر HydraPump+™ بـ 11 نكهة: Mint Mojito وBlue Razz وBubblegum وCherry Lemonade وCola وJuicy Grapes وMango Pineapple وOrange وFruit Punch وSour Apple وStrawberry.",
    },
    {
      question: "أين أشتري HydraPump+™؟",
      answer:
        "يُباع HydraPump+™ عبر موقع Promolecules™ الرسمي. افتح صفحة بلدك أو استخدم الصفحة العالمية.",
    },
    {
      question: "هل يمكنني طلب HydraPump+™ {loc}؟",
      answer:
        "يُباع HydraPump+™ عبر موقع Promolecules™ الرسمي. تختلف قواعد التوصيل والاستيراد من بلد لآخر، فتحقق مما ينطبق {loc} وتواصل معنا قبل الطلب.",
    },
  ],
  faq_title: "كل ما تحتاج معرفته عن HydraPump+™",
};

// Spanish: from the HydraPump+ Venezuela / Uruguay pages supplied.
const es = {
  ...getFoiText("es"),
  badge: "Fórmula líquida de glicerol para hidratación y pump",
  tag: "Hidratación más profunda y mejores pumps, sobre todo en sesiones largas y con calor.",
  warn: "Bebe suficiente agua antes, durante y después de entrenar.",
  intro:
    "HydraPump+™ de Promolecules es una matriz de hidratación y pump de alto rendimiento, pensada para apoyar la plenitud muscular, la vascularidad y la resistencia. Para los atletas {loc}{cities} que hacen sesiones largas, de alto volumen o con calor, combina glicerol líquido, citrulina y electrolitos para una hidratación celular profunda y buenos pumps. Se puede tomar sola o con cualquier pre-entreno.",
  stats: ["porciones", "sabores", "ingredientes clave", "edad mínima (años)"],
  ingredients_p: "Ingredientes principales:",
  steps: [
    "Tómala antes de entrenar y sigue la etiqueta para el tamaño de la porción.",
    "Se puede combinar con cualquier pre-entreno o tomar sola.",
    "Ideal para sesiones largas o de alto volumen. Sigue bebiendo agua como siempre.",
  ],
  who: [
    "Quienes buscan músculos más llenos y buenos pumps",
    "Sesiones largas o de alto volumen",
    "Entrenar en condiciones de calor",
    "Atletas que quieren combinar hidratación con un pre-entreno",
  ],
  skip_p:
    "Menores de 18 años y mujeres embarazadas o en período de lactancia. Si tomas medicamentos recetados o tienes una condición médica, consulta a un profesional de la salud antes de usarlo.",
  safety: [
    "Para adultos sanos de 18 años o más.",
    "Si tomas medicamentos recetados o tienes una condición médica, consulta a un profesional de la salud antes de usarlo.",
    "No usar durante el embarazo o la lactancia.",
    "Mantener fuera del alcance de los niños.",
    "Guardar en un lugar fresco y seco.",
  ],
  faq: [
    {
      question: "¿Qué es HydraPump+™?",
      answer:
        "HydraPump+™ es una matriz de hidratación y pump de alto rendimiento, pensada para apoyar la plenitud muscular, la vascularidad y la resistencia. Con glicerol líquido, citrulina y electrolitos, está hecha para una hidratación celular profunda y buenos pumps, sobre todo en entrenamientos de alto volumen o con calor.",
    },
    {
      question: "¿Quién debería usar HydraPump+™?",
      answer:
        "Quienes buscan músculos más llenos y buenos pumps, quienes hacen sesiones largas o de alto volumen, quienes entrenan con calor y los atletas que quieren combinar hidratación con un pre-entreno.",
    },
    {
      question: "¿Cómo se toma HydraPump+™?",
      answer:
        "Tómala antes de entrenar. Se puede combinar con cualquier pre-entreno y es ideal para sesiones largas o de alto volumen. Sigue la etiqueta para el tamaño de la porción.",
    },
    {
      question: "¿Puedo combinar HydraPump+™ con un pre-entreno?",
      answer: "Sí. HydraPump+™ se puede combinar con cualquier pre-entreno o tomar solo antes de entrenar.",
    },
    {
      question: "¿Por qué HydraPump+™ es líquido?",
      answer:
        "HydraPump+™ usa un sistema de glicerol líquido que Promolecules™ diseñó para una mejor absorción. Está hecho como un sistema de hidratación y rendimiento, no solo de pump.",
    },
    {
      question: "¿HydraPump+™ sirve para el calor o el entrenamiento de alto volumen?",
      answer:
        "Sí. Está hecho para sesiones de alto volumen y entrenamientos con calor, donde más importan la hidratación y los electrolitos. Sigue bebiendo agua como siempre y respeta la etiqueta.",
    },
    {
      question: "¿Cuáles son los beneficios clave de HydraPump+™?",
      answer:
        "Apoya la plenitud muscular y el pump, apoya la hidratación celular profunda con glicerol líquido y electrolitos, apoya la resistencia y ayuda a mejorar el rendimiento en el entrenamiento, en un formato líquido pensado para una mejor absorción.",
    },
    {
      question: "¿En qué sabores viene HydraPump+™?",
      answer:
        "HydraPump+™ viene en 11 sabores: Mint Mojito, Blue Razz, Bubblegum, Cherry Lemonade, Cola, Juicy Grapes, Mango Pineapple, Orange, Fruit Punch, Sour Apple y Strawberry.",
    },
    {
      question: "¿Dónde puedo comprar HydraPump+™?",
      answer:
        "HydraPump+™ se vende en el sitio oficial de Promolecules™. Abre la página de tu país o usa la página global.",
    },
    {
      question: "¿Puedo pedir HydraPump+™ {loc}?",
      answer:
        "HydraPump+™ se vende en el sitio oficial de Promolecules™. La entrega y las reglas de importación cambian según el país, así que revisa qué aplica {loc} y escríbenos antes de pedir.",
    },
  ],
  faq_title: "Todo lo que necesitas saber sobre HydraPump+™",
};

// Uzbek: from the HydraPump+ Uzbekistan page supplied. {name} = "O'zbekiston", {loc} = "O'zbekistonda".
const uz = {
  ...getFoiText("uz"),
  badge: "Gidratatsiya va pamp uchun suyuq glitserol formulasi",
  tag: "Chuqurroq gidratatsiya va kuchliroq pamp, ayniqsa uzoq va issiq mashg'ulotlarda.",
  warn: "Mashg'ulotdan oldin, mashg'ulot paytida va keyin yetarli suv iching.",
  intro:
    "Promolecules'ning HydraPump+™ mahsuloti — mushaklar to'laligi, qon tomirlari ko'rinishi va chidamlilikni qo'llab-quvvatlash uchun mo'ljallangan yuqori samarali gidratatsiya va pamp matritsasi. {name} sportchilari{cities} uzoq, hajmi katta yoki issiq sharoitdagi mashg'ulotlarda chuqur hujayra gidratatsiyasi va kuchli pamp uchun suyuq glitserol, sitrullin va elektrolitlar uyg'unligini topadilar. Uni yolg'iz yoki istalgan trenirovka oldi kompleksi bilan birga ichish mumkin.",
  stats: ["porsiya", "ta'm", "asosiy tarkibiy qism", "minimal yosh (yil)"],
  ingredients_p: "Asosiy tarkibiy qismlar:",
  steps: [
    "Mashg'ulotdan oldin iching. Porsiya hajmini yorliqdan qarang.",
    "Uni istalgan trenirovka oldi kompleksi bilan birga yoki yolg'iz ichish mumkin.",
    "Uzoq yoki hajmi katta mashg'ulotlar uchun ayni muddao. Suvni odatdagidek ichishda davom eting.",
  ],
  who: [
    "To'laroq mushaklar va kuchli pamp istaganlar",
    "Uzoq yoki hajmi katta mashg'ulotlar",
    "Issiq sharoitda mashq qilish",
    "Gidratatsiyani trenirovka oldi kompleksi bilan birga ishlatmoqchi bo'lgan sportchilar",
  ],
  skip_p:
    "18 yoshga to'lmaganlar, homilador va emizikli ayollar. Retsept bo'yicha dori qabul qilsangiz yoki kasalligingiz bo'lsa, ishlatishdan oldin shifokor bilan maslahatlashing.",
  safety: [
    "18 yosh va undan katta sog'lom kattalar uchun.",
    "Retsept bo'yicha dori qabul qilsangiz yoki kasalligingiz bo'lsa, ishlatishdan oldin shifokor bilan maslahatlashing.",
    "Homiladorlik va emizish davrida ishlatilmasin.",
    "Bolalar yetmaydigan joyda saqlang.",
    "Salqin va quruq joyda saqlang.",
  ],
  faq: [
    {
      question: "HydraPump+™ nima?",
      answer:
        "HydraPump+™ — mushaklar to'laligi, qon tomirlari ko'rinishi va chidamlilikni qo'llab-quvvatlash uchun mo'ljallangan yuqori samarali gidratatsiya va pamp matritsasi. Suyuq glitserol, sitrullin va elektrolitlar bilan u chuqur hujayra gidratatsiyasi va kuchli pamp uchun yaratilgan, ayniqsa hajmi katta mashg'ulotlarda yoki issiq sharoitda.",
    },
    {
      question: "HydraPump+™ni kimlar ishlatishi mumkin?",
      answer:
        "To'laroq mushaklar va kuchli pamp istaganlar, uzoq yoki hajmi katta mashg'ulot qiluvchilar, issiq sharoitda mashq qiluvchilar va gidratatsiyani trenirovka oldi kompleksi bilan birga ishlatmoqchi bo'lgan sportchilar.",
    },
    {
      question: "HydraPump+™ni qanday qabul qilaman?",
      answer:
        "Mashg'ulotdan oldin iching. Uni istalgan trenirovka oldi kompleksi bilan birga qo'llash mumkin, uzoq yoki hajmi katta mashg'ulotlar uchun ayni muddao. Porsiya hajmini yorliqdan qarang.",
    },
    {
      question: "HydraPump+™ni trenirovka oldi kompleksi bilan birga ishlatsa bo'ladimi?",
      answer:
        "Ha. HydraPump+™ni istalgan trenirovka oldi kompleksi bilan birga yoki mashg'ulotdan oldin yolg'iz ichish mumkin.",
    },
    {
      question: "HydraPump+™ nima uchun suyuq?",
      answer:
        "HydraPump+™ Promolecules™ yaxshiroq so'rilish uchun ishlab chiqqan suyuq glitserol tizimidan foydalanadi. Bu faqat pamp mahsuloti emas, balki gidratatsiya va samaradorlik tizimi.",
    },
    {
      question: "HydraPump+™ issiq havo yoki hajmi katta mashg'ulotlar uchun mosmi?",
      answer:
        "Ha. U hajmi katta mashg'ulotlar va issiq sharoit uchun yaratilgan, bunda gidratatsiya va elektrolitlar eng muhim. Suvni odatdagidek ichishda davom eting va yorliqqa amal qiling.",
    },
    {
      question: "HydraPump+™ning asosiy afzalliklari nimada?",
      answer:
        "Mushaklar to'laligi va pampni qo'llab-quvvatlaydi, suyuq glitserol va elektrolitlar bilan chuqur hujayra gidratatsiyasini qo'llab-quvvatlaydi, chidamlilikni qo'llab-quvvatlaydi va mashg'ulot natijasini yaxshilashga yordam beradi. Yaxshiroq so'rilish uchun suyuq shaklda.",
    },
    {
      question: "HydraPump+™ qanday ta'mlarda bor?",
      answer:
        "HydraPump+™ 11 ta ta'mda mavjud: Mint Mojito, Blue Razz, Bubblegum, Cherry Lemonade, Cola, Juicy Grapes, Mango Pineapple, Orange, Fruit Punch, Sour Apple, Strawberry.",
    },
    {
      question: "HydraPump+™ni qayerdan sotib olaman?",
      answer:
        "HydraPump+™ Promolecules™ ning rasmiy saytida sotiladi. Mamlakatingiz sahifasini yoki global sahifani oching.",
    },
    {
      question: "HydraPump+™ ga {loc} buyurtma bersam bo'ladimi?",
      answer:
        "HydraPump+™ Promolecules™ ning rasmiy saytida sotiladi. Yetkazib berish va import qoidalari mamlakatga qarab farq qiladi, shuning uchun buyurtma berishdan oldin {loc} nima amal qilishini tekshiring va biz bilan bog'laning.",
    },
  ],
  faq_title: "HydraPump+™ haqida bilishingiz kerak bo'lgan hamma narsa",
};

// Swahili: from the HydraPump+ Tanzania page supplied. {loc} = "nchini Tanzania".
const sw = {
  ...getFoiText("sw"),
  badge: "Fomula ya glycerol ya kimiminika kwa unyevu na pump",
  tag: "Unyevu wa kina na pump kali, hasa katika mazoezi marefu na ya joto.",
  warn: "Kunywa maji ya kutosha kabla, wakati na baada ya mazoezi.",
  intro:
    "HydraPump+™ kutoka Promolecules ni fomula ya utendaji wa juu ya unyevu na pump, iliyotengenezwa kusaidia ujazo wa misuli, mishipa na stamina. Kwa wanamichezo {loc}{cities} wanaofanya mazoezi marefu, ya kiasi kikubwa au katika joto, inachanganya glycerol ya kimiminika, citrulline na elektrolaiti kwa unyevu wa kina wa seli na pump kali. Inaweza kutumika peke yake au pamoja na pre-workout yoyote.",
  stats: ["vipimo", "ladha", "viambato vikuu", "umri wa chini (miaka)"],
  ingredients_p: "Viambato vikuu ni pamoja na:",
  steps: [
    "Itumie kabla ya mazoezi na ufuate lebo kwa ukubwa wa kipimo.",
    "Inaweza kuchanganywa na pre-workout yoyote au kutumika peke yake.",
    "Inafaa sana kwa mazoezi marefu au ya kiasi kikubwa. Endelea kunywa maji kama kawaida.",
  ],
  who: [
    "Wanaotaka misuli iliyojaa zaidi na pump kali",
    "Mazoezi marefu au ya kiasi kikubwa",
    "Kufanya mazoezi katika joto",
    "Wanamichezo wanaotaka kuchanganya unyevu na pre-workout",
  ],
  skip_p:
    "Walio chini ya miaka 18, na wanawake wajawazito au wanaonyonyesha. Ukitumia dawa za daktari au una hali ya kiafya, wasiliana na mtaalamu wa afya kabla ya kutumia.",
  safety: [
    "Kwa watu wazima wenye afya wenye umri wa miaka 18 na zaidi.",
    "Ukitumia dawa za daktari au una hali ya kiafya, wasiliana na mtaalamu wa afya kabla ya kutumia.",
    "Isitumike wakati wa ujauzito au kunyonyesha.",
    "Weka mbali na watoto.",
    "Hifadhi mahali penye ubaridi na pakavu.",
  ],
  faq: [
    {
      question: "HydraPump+™ ni nini?",
      answer:
        "HydraPump+™ ni fomula ya utendaji wa juu ya unyevu na pump, iliyotengenezwa kusaidia ujazo wa misuli, mishipa na stamina. Ikiwa na glycerol ya kimiminika, citrulline na elektrolaiti, imeundwa kwa unyevu wa kina wa seli na pump kali, hasa katika mazoezi ya kiasi kikubwa au hali ya joto.",
    },
    {
      question: "Nani anapaswa kutumia HydraPump+™?",
      answer:
        "Wanaotaka misuli iliyojaa zaidi na pump kali, wanaofanya mazoezi marefu au ya kiasi kikubwa, wanaofanya mazoezi katika joto, na wanamichezo wanaotaka kuchanganya unyevu na pre-workout.",
    },
    {
      question: "Nitumieje HydraPump+™?",
      answer:
        "Itumie kabla ya mazoezi. Inaweza kuchanganywa na pre-workout yoyote na inafaa sana kwa mazoezi marefu au ya kiasi kikubwa. Fuata lebo kwa ukubwa wa kipimo.",
    },
    {
      question: "Je, naweza kuchanganya HydraPump+™ na pre-workout?",
      answer:
        "Ndiyo. HydraPump+™ inaweza kuchanganywa na pre-workout yoyote au kutumika peke yake kabla ya mazoezi.",
    },
    {
      question: "Kwa nini HydraPump+™ ni kimiminika?",
      answer:
        "HydraPump+™ hutumia mfumo wa glycerol ya kimiminika ambao Promolecules™ iliubuni kwa ufyonzaji bora. Ni mfumo wa unyevu na utendaji, si bidhaa ya pump pekee.",
    },
    {
      question: "Je, HydraPump+™ inafaa kwa joto au mazoezi ya kiasi kikubwa?",
      answer:
        "Ndiyo. Imetengenezwa kwa mazoezi ya kiasi kikubwa na hali ya joto, ambapo unyevu na elektrolaiti ni muhimu zaidi. Endelea kunywa maji kama kawaida na ufuate lebo.",
    },
    {
      question: "Faida kuu za HydraPump+™ ni zipi?",
      answer:
        "Husaidia ujazo wa misuli na pump, husaidia unyevu wa kina wa seli kwa glycerol ya kimiminika na elektrolaiti, husaidia stamina na husaidia kuboresha utendaji wa mazoezi, katika muundo wa kimiminika kwa ufyonzaji bora.",
    },
    {
      question: "HydraPump+™ ina ladha gani?",
      answer:
        "HydraPump+™ inapatikana katika ladha 11: Mint Mojito, Blue Razz, Bubblegum, Cherry Lemonade, Cola, Juicy Grapes, Mango Pineapple, Orange, Fruit Punch, Sour Apple na Strawberry.",
    },
    {
      question: "Naweza kununua wapi HydraPump+™?",
      answer:
        "HydraPump+™ inauzwa kupitia tovuti rasmi ya Promolecules™. Fungua ukurasa wa nchi yako au tumia ukurasa wa kimataifa.",
    },
    {
      question: "Je, naweza kuagiza HydraPump+™ {loc}?",
      answer:
        "HydraPump+™ inauzwa kupitia tovuti rasmi ya Promolecules™. Sheria za uwasilishaji na uagizaji hutofautiana kati ya nchi, kwa hiyo angalia kinachotumika {loc} na wasiliana nasi kabla ya kuagiza.",
    },
  ],
  faq_title: "Kila unachohitaji kujua kuhusu HydraPump+™",
};

// Russian: from the HydraPump+ Turkmenistan page supplied (also used on kz/kg/tj).
// {name} = "Туркменистан" (intro, like the other products); {loc} = "в Туркменистане" (FAQ).
const ru = {
  ...getFoiText("ru"),
  badge: "Жидкая формула с глицерином для гидратации и пампа",
  tag: "Глубокая гидратация и сильный памп, особенно на длинных тренировках и в жару.",
  warn: "Пейте достаточно воды до, во время и после тренировки.",
  intro:
    "HydraPump+™ от Promolecules — высокоэффективная матрица для гидратации и пампа, созданная для поддержки наполненности мышц, васкулярности и выносливости. Для спортсменов страны {name}{cities} которые проводят длинные, объёмные тренировки или тренируются в жару, она сочетает жидкий глицерин, цитруллин и электролиты для глубокой клеточной гидратации и сильного пампа. Её можно принимать отдельно или вместе с любым предтренировочным комплексом.",
  stats: ["порций", "вкусов", "ключевых компонента", "минимальный возраст (лет)"],
  ingredients_p: "Ключевые компоненты:",
  steps: [
    "Принимайте перед тренировкой. Размер порции смотрите на этикетке.",
    "Можно сочетать с любым предтренировочным комплексом или принимать отдельно.",
    "Идеально для длинных и объёмных тренировок. Пейте воду как обычно.",
  ],
  who: [
    "Те, кто хочет более наполненные мышцы и сильный памп",
    "Длинные или объёмные тренировки",
    "Тренировки в жару",
    "Атлеты, которые хотят сочетать гидратацию с предтренировочным комплексом",
  ],
  skip_p:
    "Лица младше 18 лет, беременные и кормящие женщины. Если вы принимаете лекарства по назначению или у вас есть заболевание, перед применением проконсультируйтесь с врачом.",
  safety: [
    "Для здоровых взрослых от 18 лет.",
    "Если вы принимаете лекарства по назначению или у вас есть заболевание, перед применением проконсультируйтесь с врачом.",
    "Не применять при беременности и кормлении грудью.",
    "Хранить в недоступном для детей месте.",
    "Хранить в прохладном сухом месте.",
  ],
  faq: [
    {
      question: "Что такое HydraPump+™?",
      answer:
        "HydraPump+™ — высокоэффективная матрица для гидратации и пампа, созданная для поддержки наполненности мышц, васкулярности и выносливости. С жидким глицерином, цитруллином и электролитами она рассчитана на глубокую клеточную гидратацию и сильный памп, особенно на объёмных тренировках или в жару.",
    },
    {
      question: "Кому подходит HydraPump+™?",
      answer:
        "Тем, кто хочет более наполненные мышцы и сильный памп, кто проводит длинные или объёмные тренировки, тренируется в жару, а также атлетам, которые хотят сочетать гидратацию с предтренировочным комплексом.",
    },
    {
      question: "Как принимать HydraPump+™?",
      answer:
        "Принимайте перед тренировкой. Можно сочетать с любым предтренировочным комплексом, идеально для длинных и объёмных тренировок. Размер порции смотрите на этикетке.",
    },
    {
      question: "Можно ли сочетать HydraPump+™ с предтренировочным комплексом?",
      answer:
        "Да. HydraPump+™ можно сочетать с любым предтренировочным комплексом или принимать отдельно перед тренировкой.",
    },
    {
      question: "Почему HydraPump+™ жидкий?",
      answer:
        "В HydraPump+™ используется система жидкого глицерина, которую Promolecules™ разработала для лучшего усвоения. Это система гидратации и результативности, а не только пампа.",
    },
    {
      question: "Подходит ли HydraPump+™ для жары и объёмных тренировок?",
      answer:
        "Да. Он создан для объёмных тренировок и жары, когда гидратация и электролиты особенно важны. Пейте воду как обычно и следуйте этикетке.",
    },
    {
      question: "Каковы основные преимущества HydraPump+™?",
      answer:
        "Поддерживает наполненность мышц и памп, глубокую клеточную гидратацию за счёт жидкого глицерина и электролитов, а также выносливость; помогает улучшить результативность тренировки. Жидкий формат — для лучшего усвоения.",
    },
    {
      question: "Какие вкусы есть у HydraPump+™?",
      answer:
        "HydraPump+™ выпускается в 11 вкусах: Mint Mojito, Blue Razz, Bubblegum, Cherry Lemonade, Cola, Juicy Grapes, Mango Pineapple, Orange, Fruit Punch, Sour Apple, Strawberry.",
    },
    {
      question: "Где купить HydraPump+™?",
      answer:
        "HydraPump+™ продаётся на официальном сайте Promolecules™. Откройте страницу своей страны или глобальную страницу.",
    },
    {
      question: "Можно ли заказать HydraPump+™ {loc}?",
      answer:
        "HydraPump+™ продаётся на официальном сайте Promolecules™. Доставка и правила ввоза различаются по странам, поэтому перед заказом уточните, что действует {loc}, и свяжитесь с нами.",
    },
  ],
  faq_title: "Всё, что нужно знать о HydraPump+™",
};

// English: from the HydraPump+ Belize page supplied. Also the global www site, where {loc} is empty.
const en = {
  ...getFoiText("en"),
  badge: "Liquid glycerol hydration and pump formula",
  tag: "Deeper hydration and stronger pumps, especially in long and hot sessions.",
  warn: "Drink enough water before, during and after training.",
  intro:
    "Promolecules HydraPump+™ is a high-performance hydration and pump matrix designed to support muscle fullness, vascularity and endurance. For athletes {loc}{cities} who train long, at high volume or in the heat, it combines liquid glycerol, citrulline and electrolytes for deep cellular hydration and strong pumps. Take it on its own or stack it with any pre-workout.",
  stats: ["servings", "flavours", "key ingredients", "minimum age (years)"],
  ingredients_p: "Key ingredients include:",
  steps: [
    "Take it before your workout. Follow the label for the serving size.",
    "Stack it with any pre-workout, or take it on its own.",
    "Ideal for long or high-volume sessions. Keep drinking water as usual.",
  ],
  who: [
    "Lifters who want fuller muscles and strong pumps",
    "Long or high-volume training sessions",
    "Training in hot conditions",
    "Athletes who want to stack hydration with a pre-workout",
  ],
  skip_p:
    "Anyone under 18, and pregnant or breastfeeding women. If you are on prescription medication or have a medical condition, consult a healthcare professional before use.",
  safety: [
    "For use in healthy adults 18 years of age and older.",
    "If you are on prescription medication or have a medical condition, please consult a healthcare professional before use.",
    "Not to be used during pregnancy or breastfeeding.",
    "Keep out of reach of children.",
    "Store in a cool, dry place.",
  ],
  faq: [
    {
      question: "What is HydraPump+™?",
      answer:
        "HydraPump+™ is a high-performance hydration and pump matrix designed to support muscle fullness, vascularity and endurance. With liquid glycerol, citrulline and electrolytes, it is built for deep cellular hydration and strong pumps, especially in high-volume or hot training conditions.",
    },
    {
      question: "Who should use HydraPump+™?",
      answer:
        "Lifters who want fuller muscles and strong pumps, people doing long or high-volume sessions or training in hot conditions, and athletes who want to stack hydration with a pre-workout.",
    },
    {
      question: "How do I take HydraPump+™?",
      answer:
        "Take it before your workout. It can be stacked with any pre-workout and is ideal for long or high-volume sessions. Follow the label for the serving size.",
    },
    {
      question: "Can I stack HydraPump+™ with a pre-workout?",
      answer: "Yes. HydraPump+™ can be stacked with any pre-workout, or taken on its own before your workout.",
    },
    {
      question: "Why is HydraPump+™ a liquid?",
      answer:
        "HydraPump+™ uses a liquid glycerol system that Promolecules™ designed for better absorption. It is built as a hydration plus performance system, not only a pump product.",
    },
    {
      question: "Is HydraPump+™ good for hot weather or high-volume training?",
      answer:
        "Yes. It is made for high-volume sessions and hot training conditions, where hydration and electrolytes matter most. Keep drinking water as usual and follow the label.",
    },
    {
      question: "What are the key benefits of HydraPump+™?",
      answer:
        "It supports muscle fullness and pumps, deep cellular hydration with liquid glycerol and electrolytes, and endurance, and helps improve workout performance, in a liquid format designed for better absorption.",
    },
    {
      question: "What flavours does HydraPump+™ come in?",
      answer:
        "HydraPump+™ comes in 11 flavours: Mint Mojito, Blue Razz, Bubblegum, Cherry Lemonade, Cola, Juicy Grapes, Mango Pineapple, Orange, Fruit Punch, Sour Apple and Strawberry.",
    },
    {
      question: "Where can I buy HydraPump+™?",
      answer:
        "HydraPump+™ is sold through the official Promolecules™ website. Open the page for your country, or use the global page.",
    },
    {
      question: "Can I order HydraPump+™ {loc}?",
      answer:
        "HydraPump+™ is sold through the official Promolecules™ website. Delivery and import rules differ by country, so check what applies {loc} and contact us before you order.",
    },
  ],
  faq_title: "Everything you need to know about HydraPump+™",
};

// Portuguese: from the HydraPump+ Brazil page supplied. {loc} = "no Brasil".
const pt = {
  ...getFoiText("pt"),
  badge: "Fórmula líquida de glicerol para hidratação e pump",
  tag: "Hidratação mais profunda e pumps mais fortes, principalmente em treinos longos e no calor.",
  warn: "Beba água suficiente antes, durante e depois do treino.",
  intro:
    "O HydraPump+™ da Promolecules é uma matriz de hidratação e pump de alto desempenho, feita para apoiar a plenitude muscular, a vascularização e a resistência. Para atletas {loc}{cities} que fazem treinos longos, de alto volume ou no calor, combina glicerol líquido, citrulina e eletrólitos para hidratação celular profunda e bons pumps. Pode ser tomado sozinho ou com qualquer pré-treino.",
  stats: ["porções", "sabores", "ingredientes-chave", "idade mínima (anos)"],
  ingredients_p: "Principais ingredientes:",
  steps: [
    "Tome antes do treino e siga o rótulo para o tamanho da porção.",
    "Pode ser combinado com qualquer pré-treino ou tomado sozinho.",
    "Ideal para sessões longas ou de alto volume. Continue bebendo água normalmente.",
  ],
  who: [
    "Quem quer músculos mais cheios e bons pumps",
    "Sessões longas ou de alto volume",
    "Treinar em condições de calor",
    "Atletas que querem combinar hidratação com um pré-treino",
  ],
  skip_p:
    "Menores de 18 anos, gestantes e lactantes. Se usa medicamentos prescritos ou tem alguma condição médica, consulte um profissional de saúde antes de usar.",
  safety: [
    "Para adultos saudáveis com 18 anos ou mais.",
    "Se usa medicamentos prescritos ou tem alguma condição médica, consulte um profissional de saúde antes de usar.",
    "Não usar durante a gravidez ou a amamentação.",
    "Mantenha fora do alcance de crianças.",
    "Armazene em local fresco e seco.",
  ],
  faq: [
    {
      question: "O que é o HydraPump+™?",
      answer:
        "O HydraPump+™ é uma matriz de hidratação e pump de alto desempenho, feita para apoiar a plenitude muscular, a vascularização e a resistência. Com glicerol líquido, citrulina e eletrólitos, foi pensado para hidratação celular profunda e bons pumps, principalmente em treinos de alto volume ou no calor.",
    },
    {
      question: "Quem deve usar o HydraPump+™?",
      answer:
        "Quem quer músculos mais cheios e bons pumps, quem faz sessões longas ou de alto volume, quem treina no calor e atletas que querem combinar hidratação com um pré-treino.",
    },
    {
      question: "Como tomar o HydraPump+™?",
      answer:
        "Tome antes do treino. Pode ser combinado com qualquer pré-treino e é ideal para sessões longas ou de alto volume. Siga o rótulo para o tamanho da porção.",
    },
    {
      question: "Posso combinar o HydraPump+™ com um pré-treino?",
      answer: "Sim. O HydraPump+™ pode ser combinado com qualquer pré-treino ou tomado sozinho antes do treino.",
    },
    {
      question: "Por que o HydraPump+™ é líquido?",
      answer:
        "O HydraPump+™ usa um sistema de glicerol líquido que a Promolecules™ criou para melhor absorção. Ele é um sistema de hidratação e desempenho, não só de pump.",
    },
    {
      question: "O HydraPump+™ é bom para o calor ou treinos de alto volume?",
      answer:
        "Sim. Foi feito para sessões de alto volume e treinos no calor, quando hidratação e eletrólitos mais importam. Continue bebendo água normalmente e siga o rótulo.",
    },
    {
      question: "Quais são os principais benefícios do HydraPump+™?",
      answer:
        "Apoia a plenitude muscular e o pump, a hidratação celular profunda com glicerol líquido e eletrólitos e a resistência, e ajuda a melhorar o desempenho no treino, em formato líquido pensado para melhor absorção.",
    },
    {
      question: "Quais sabores o HydraPump+™ tem?",
      answer:
        "O HydraPump+™ tem 11 sabores: Mint Mojito, Blue Razz, Bubblegum, Cherry Lemonade, Cola, Juicy Grapes, Mango Pineapple, Orange, Fruit Punch, Sour Apple e Strawberry.",
    },
    {
      question: "Onde posso comprar o HydraPump+™?",
      answer:
        "O HydraPump+™ é vendido no site oficial da Promolecules™. Abra a página do seu país ou use a página global.",
    },
    {
      question: "Posso pedir o HydraPump+™ {loc}?",
      answer:
        "O HydraPump+™ é vendido no site oficial da Promolecules™. Entrega e regras de importação mudam de país para país, então confira o que vale {loc} e fale com a gente antes de pedir.",
    },
  ],
  faq_title: "Tudo o que você precisa saber sobre o HydraPump+™",
};

// French: from the HydraPump+ Haiti page supplied. {loc} = "en Haïti".
const fr = {
  ...getFoiText("fr"),
  badge: "Formule liquide au glycérol pour hydratation et pump",
  tag: "Une hydratation plus profonde et de meilleurs pumps, surtout lors des séances longues et par temps chaud.",
  warn: "Buvez suffisamment d'eau avant, pendant et après l'entraînement.",
  intro:
    "HydraPump+™ de Promolecules est une matrice d'hydratation et de pump haute performance, conçue pour soutenir le volume musculaire, la vascularité et l'endurance. Pour les athlètes {loc}{cities} qui font des séances longues, à gros volume ou par temps chaud, elle associe glycérol liquide, citrulline et électrolytes pour une hydratation cellulaire profonde et de forts pumps. À prendre seule ou avec n'importe quel pré-workout.",
  stats: ["portions", "saveurs", "ingrédients clés", "âge minimum (ans)"],
  ingredients_p: "Principaux ingrédients :",
  steps: [
    "Prenez-la avant l'entraînement et suivez l'étiquette pour la taille de la portion.",
    "Elle peut être associée à n'importe quel pré-workout, ou prise seule.",
    "Idéale pour les séances longues ou à gros volume. Continuez à boire de l'eau normalement.",
  ],
  who: [
    "Ceux qui veulent des muscles plus pleins et de bons pumps",
    "Séances longues ou à gros volume",
    "Entraînement par temps chaud",
    "Athlètes qui veulent associer hydratation et pré-workout",
  ],
  skip_p:
    "Les moins de 18 ans, les femmes enceintes ou qui allaitent. Si vous suivez un traitement ou avez un problème de santé, demandez l'avis d'un professionnel de santé avant utilisation.",
  safety: [
    "Réservé aux adultes en bonne santé de 18 ans et plus.",
    "Si vous suivez un traitement ou avez un problème de santé, demandez l'avis d'un professionnel de santé avant utilisation.",
    "Ne pas utiliser pendant la grossesse ou l'allaitement.",
    "Tenir hors de portée des enfants.",
    "Conserver dans un endroit frais et sec.",
  ],
  faq: [
    {
      question: "Qu'est-ce que HydraPump+™ ?",
      answer:
        "HydraPump+™ est une matrice d'hydratation et de pump haute performance, conçue pour soutenir le volume musculaire, la vascularité et l'endurance. Avec du glycérol liquide, de la citrulline et des électrolytes, elle vise une hydratation cellulaire profonde et de forts pumps, surtout lors de séances à gros volume ou par temps chaud.",
    },
    {
      question: "Qui peut utiliser HydraPump+™ ?",
      answer:
        "Ceux qui veulent des muscles plus pleins et de bons pumps, ceux qui font des séances longues ou à gros volume ou s'entraînent par temps chaud, et les athlètes qui veulent associer hydratation et pré-workout.",
    },
    {
      question: "Comment prendre HydraPump+™ ?",
      answer:
        "Prenez-la avant l'entraînement. Elle peut être associée à n'importe quel pré-workout et convient aux séances longues ou à gros volume. Suivez l'étiquette pour la taille de la portion.",
    },
    {
      question: "Puis-je associer HydraPump+™ à un pré-workout ?",
      answer: "Oui. HydraPump+™ peut être associé à n'importe quel pré-workout, ou pris seul avant l'entraînement.",
    },
    {
      question: "Pourquoi HydraPump+™ est-il liquide ?",
      answer:
        "HydraPump+™ repose sur un système de glycérol liquide que Promolecules™ a conçu pour une meilleure absorption. C'est un système d'hydratation et de performance, pas seulement de pump.",
    },
    {
      question: "HydraPump+™ convient-il à la chaleur ou aux séances à gros volume ?",
      answer:
        "Oui. Il est conçu pour les séances à gros volume et par temps chaud, quand l'hydratation et les électrolytes comptent le plus. Continuez à boire de l'eau et suivez l'étiquette.",
    },
    {
      question: "Quels sont les principaux bénéfices d'HydraPump+™ ?",
      answer:
        "Il soutient le volume musculaire et le pump, l'hydratation cellulaire profonde grâce au glycérol liquide et aux électrolytes, et l'endurance, et aide à améliorer la performance à l'entraînement, dans un format liquide conçu pour une meilleure absorption.",
    },
    {
      question: "Quelles saveurs propose HydraPump+™ ?",
      answer:
        "HydraPump+™ existe en 11 saveurs : Mint Mojito, Blue Razz, Bubblegum, Cherry Lemonade, Cola, Juicy Grapes, Mango Pineapple, Orange, Fruit Punch, Sour Apple et Strawberry.",
    },
    {
      question: "Où acheter HydraPump+™ ?",
      answer:
        "HydraPump+™ est vendu sur le site officiel de Promolecules™. Ouvrez la page de votre pays ou utilisez la page mondiale.",
    },
    {
      question: "Puis-je commander HydraPump+™ {loc} ?",
      answer:
        "HydraPump+™ est vendu sur le site officiel de Promolecules™. La livraison et les règles d'importation varient selon les pays : vérifiez ce qui s'applique {loc} et contactez-nous avant de commander.",
    },
  ],
  faq_title: "Tout ce qu'il faut savoir sur HydraPump+™",
};

// Malay: from the HydraPump+ Malaysia page supplied. {loc} = "di Malaysia".
const ms = {
  ...getFoiText("ms"),
  badge: "Formula glicerol cecair untuk hidrasi dan pam",
  tag: "Hidrasi lebih mendalam dan pam lebih kuat, terutamanya dalam sesi panjang dan cuaca panas.",
  warn: "Minum air yang cukup sebelum, semasa dan selepas latihan.",
  intro:
    "HydraPump+™ daripada Promolecules ialah matriks hidrasi dan pam berprestasi tinggi yang direka untuk menyokong kepenuhan otot, vaskulariti dan daya tahan. Untuk atlet {loc}{cities} yang berlatih lama, berjumlah tinggi atau dalam cuaca panas, ia menggabungkan glicerol cecair, sitrulin dan elektrolit untuk hidrasi sel yang mendalam dan pam yang kuat. Boleh diambil bersendirian atau bersama mana-mana pra-senaman.",
  stats: ["hidangan", "perisa", "bahan utama", "umur minimum (tahun)"],
  ingredients_p: "Bahan utama termasuk:",
  steps: [
    "Ambil sebelum senaman dan ikut label untuk saiz hidangan.",
    "Boleh digabungkan dengan mana-mana pra-senaman atau diambil bersendirian.",
    "Sesuai untuk sesi panjang atau berjumlah tinggi. Teruskan minum air seperti biasa.",
  ],
  who: [
    "Mereka yang mahukan otot lebih penuh dan pam yang kuat",
    "Sesi latihan panjang atau berjumlah tinggi",
    "Berlatih dalam cuaca panas",
    "Atlet yang mahu menggabungkan hidrasi dengan pra-senaman",
  ],
  skip_p:
    "Mereka yang berumur bawah 18 tahun, wanita hamil atau menyusu. Jika anda mengambil ubat preskripsi atau mempunyai keadaan perubatan, sila rujuk pakar kesihatan sebelum menggunakannya.",
  safety: [
    "Untuk orang dewasa sihat berumur 18 tahun ke atas.",
    "Jika anda mengambil ubat preskripsi atau mempunyai keadaan perubatan, sila rujuk pakar kesihatan sebelum menggunakannya.",
    "Tidak boleh digunakan semasa mengandung atau menyusu.",
    "Jauhkan daripada capaian kanak-kanak.",
    "Simpan di tempat yang sejuk dan kering.",
  ],
  faq: [
    {
      question: "Apakah HydraPump+™?",
      answer:
        "HydraPump+™ ialah matriks hidrasi dan pam berprestasi tinggi yang direka untuk menyokong kepenuhan otot, vaskulariti dan daya tahan. Dengan glicerol cecair, sitrulin dan elektrolit, ia dibina untuk hidrasi sel yang mendalam dan pam yang kuat, terutamanya dalam latihan berjumlah tinggi atau cuaca panas.",
    },
    {
      question: "Siapa patut menggunakan HydraPump+™?",
      answer:
        "Mereka yang mahukan otot lebih penuh dan pam yang kuat, yang menjalani sesi panjang atau berjumlah tinggi, yang berlatih dalam cuaca panas, dan atlet yang mahu menggabungkan hidrasi dengan pra-senaman.",
    },
    {
      question: "Bagaimana mengambil HydraPump+™?",
      answer:
        "Ambil sebelum senaman. Ia boleh digabungkan dengan mana-mana pra-senaman dan sesuai untuk sesi panjang atau berjumlah tinggi. Ikut label untuk saiz hidangan.",
    },
    {
      question: "Bolehkah saya menggabungkan HydraPump+™ dengan pra-senaman?",
      answer:
        "Ya. HydraPump+™ boleh digabungkan dengan mana-mana pra-senaman atau diambil bersendirian sebelum senaman.",
    },
    {
      question: "Mengapa HydraPump+™ berbentuk cecair?",
      answer:
        "HydraPump+™ menggunakan sistem glicerol cecair yang direka oleh Promolecules™ untuk penyerapan lebih baik. Ia sistem hidrasi dan prestasi, bukan sekadar produk pam.",
    },
    {
      question: "Adakah HydraPump+™ sesuai untuk cuaca panas atau latihan berjumlah tinggi?",
      answer:
        "Ya. Ia dibuat untuk sesi berjumlah tinggi dan cuaca panas, apabila hidrasi dan elektrolit paling penting. Teruskan minum air seperti biasa dan ikut label.",
    },
    {
      question: "Apakah faedah utama HydraPump+™?",
      answer:
        "Menyokong kepenuhan otot dan pam, hidrasi sel yang mendalam dengan glicerol cecair dan elektrolit, serta daya tahan, dan membantu meningkatkan prestasi senaman, dalam format cecair yang direka untuk penyerapan lebih baik.",
    },
    {
      question: "Apakah perisa HydraPump+™?",
      answer:
        "HydraPump+™ terdapat dalam 11 perisa: Mint Mojito, Blue Razz, Bubblegum, Cherry Lemonade, Cola, Juicy Grapes, Mango Pineapple, Orange, Fruit Punch, Sour Apple dan Strawberry.",
    },
    {
      question: "Di mana saya boleh membeli HydraPump+™?",
      answer:
        "HydraPump+™ dijual melalui laman web rasmi Promolecules™. Buka halaman negara anda atau gunakan halaman global.",
    },
    {
      question: "Bolehkah saya memesan HydraPump+™ {loc}?",
      answer:
        "HydraPump+™ dijual melalui laman web rasmi Promolecules™. Peraturan penghantaran dan import berbeza mengikut negara, jadi semak apa yang terpakai {loc} dan hubungi kami sebelum membuat pesanan.",
    },
  ],
  faq_title: "Semua yang anda perlu tahu tentang HydraPump+™",
};

// Persian: from the HydraPump+ Iran page supplied (Iran is on hold). {loc} = "در ایران".
const fa = {
  ...getFoiText("fa"),
  badge: "فرمول مایع گلیسرول برای آبرسانی و پمپ",
  tag: "آبرسانی عمیق‌تر و پمپ قوی‌تر، به‌ویژه در تمرین‌های طولانی و هوای گرم.",
  warn: "پیش از تمرین، در حین آن و پس از آن به اندازه کافی آب بنوشید.",
  intro:
    "HydraPump+™ از Promolecules ماتریس آبرسانی و پمپِ با عملکرد بالاست که برای پشتیبانی از پُری عضله، رگ‌نمایی و استقامت طراحی شده است. برای ورزشکاران {loc}{cities} که تمرین‌های طولانی، پرحجم یا در هوای گرم انجام می‌دهند، گلیسرول مایع، سیترولین و الکترولیت‌ها را برای آبرسانی عمیق سلولی و پمپ قوی ترکیب می‌کند. می‌توان آن را به‌تنهایی یا همراه با هر پیش‌تمرینی مصرف کرد.",
  stats: ["وعده", "طعم", "ماده اصلی", "حداقل سن (سال)"],
  ingredients_p: "مواد اصلی عبارت‌اند از:",
  steps: [
    "پیش از تمرین مصرف کنید و اندازه هر وعده را از روی برچسب رعایت کنید.",
    "با هر پیش‌تمرینی قابل ترکیب است یا می‌توان آن را به‌تنهایی مصرف کرد.",
    "برای جلسه‌های طولانی یا پرحجم ایده‌آل است. مثل همیشه آب بنوشید.",
  ],
  who: [
    "کسانی که عضلات پُرتر و پمپ قوی می‌خواهند",
    "جلسه‌های تمرین طولانی یا پرحجم",
    "تمرین در هوای گرم",
    "ورزشکارانی که می‌خواهند آبرسانی را با پیش‌تمرین ترکیب کنند",
  ],
  skip_p:
    "افراد زیر ۱۸ سال و زنان باردار یا شیرده. اگر دارو مصرف می‌کنید یا بیماری دارید، پیش از مصرف با متخصص سلامت مشورت کنید.",
  safety: [
    "برای بزرگسالان سالم ۱۸ سال به بالا.",
    "اگر دارو مصرف می‌کنید یا بیماری دارید، پیش از مصرف با متخصص سلامت مشورت کنید.",
    "در دوران بارداری و شیردهی مصرف نشود.",
    "دور از دسترس کودکان نگهداری شود.",
    "در جای خنک و خشک نگهداری شود.",
  ],
  faq: [
    {
      question: "HydraPump+™ چیست؟",
      answer:
        "HydraPump+™ ماتریس آبرسانی و پمپِ با عملکرد بالاست که برای پشتیبانی از پُری عضله، رگ‌نمایی و استقامت طراحی شده است. با گلیسرول مایع، سیترولین و الکترولیت‌ها برای آبرسانی عمیق سلولی و پمپ قوی ساخته شده، به‌ویژه در تمرین‌های پرحجم یا هوای گرم.",
    },
    {
      question: "چه کسانی باید از HydraPump+™ استفاده کنند؟",
      answer:
        "کسانی که عضلات پُرتر و پمپ قوی می‌خواهند، کسانی که جلسه‌های طولانی یا پرحجم دارند یا در هوای گرم تمرین می‌کنند، و ورزشکارانی که می‌خواهند آبرسانی را با پیش‌تمرین ترکیب کنند.",
    },
    {
      question: "HydraPump+™ را چگونه مصرف کنم؟",
      answer:
        "پیش از تمرین مصرف کنید. با هر پیش‌تمرینی قابل ترکیب است و برای جلسه‌های طولانی یا پرحجم ایده‌آل است. اندازه هر وعده را از روی برچسب رعایت کنید.",
    },
    {
      question: "آیا می‌توانم HydraPump+™ را با پیش‌تمرین ترکیب کنم؟",
      answer: "بله. HydraPump+™ را می‌توان با هر پیش‌تمرینی ترکیب کرد یا به‌تنهایی پیش از تمرین مصرف کرد.",
    },
    {
      question: "چرا HydraPump+™ مایع است؟",
      answer:
        "HydraPump+™ از سیستم گلیسرول مایع استفاده می‌کند که Promolecules™ برای جذب بهتر طراحی کرده است. این یک سیستم آبرسانی و عملکرد است، نه فقط محصول پمپ.",
    },
    {
      question: "آیا HydraPump+™ برای هوای گرم یا تمرین پرحجم مناسب است؟",
      answer:
        "بله. برای جلسه‌های پرحجم و تمرین در هوای گرم ساخته شده، جایی که آبرسانی و الکترولیت‌ها مهم‌ترند. مثل همیشه آب بنوشید و برچسب را رعایت کنید.",
    },
    {
      question: "مزایای اصلی HydraPump+™ چیست؟",
      answer:
        "از پُری عضله و پمپ، آبرسانی عمیق سلولی با گلیسرول مایع و الکترولیت‌ها و استقامت پشتیبانی می‌کند و به بهبود عملکرد تمرین کمک می‌کند؛ شکل مایع آن برای جذب بهتر طراحی شده است.",
    },
    {
      question: "HydraPump+™ در چه طعم‌هایی موجود است؟",
      answer:
        "HydraPump+™ در ۱۱ طعم موجود است: Mint Mojito، Blue Razz، Bubblegum، Cherry Lemonade، Cola، Juicy Grapes، Mango Pineapple، Orange، Fruit Punch، Sour Apple و Strawberry.",
    },
    {
      question: "HydraPump+™ را از کجا بخرم؟",
      answer:
        "HydraPump+™ از وب‌سایت رسمی Promolecules™ فروخته می‌شود. صفحه کشور خود یا صفحه جهانی را باز کنید.",
    },
    {
      question: "آیا می‌توانم HydraPump+™ را {loc} سفارش دهم؟",
      answer:
        "HydraPump+™ از وب‌سایت رسمی Promolecules™ فروخته می‌شود. قوانین ارسال و واردات در هر کشور فرق دارد؛ پیش از سفارش بررسی کنید چه قوانینی {loc} اعمال می‌شود و با ما تماس بگیرید.",
    },
  ],
  faq_title: "هر آنچه باید درباره HydraPump+™ بدانید",
};

const HYDRAPUMP_TEXT = { ar, es, uz, sw, ru, en, pt, fr, ms, fa };

export const getHydrapumpText = (lang) => HYDRAPUMP_TEXT[lang] ?? en;

// Ingredient names stay in Latin script in every language (as on the label).
export const HYDRAPUMP_INGREDIENTS = ["Liquid Glycerol", "L-Citrulline", "Electrolytes"];

// 31 servings · 11 flavours · 3 key ingredients · adults only
export const HYDRAPUMP_STATS = ["31", "11", "3", "18+"];

export const HYDRAPUMP_CONTENT = {
  name: "HydraPump+™",
  getText: getHydrapumpText,
  ingredients: HYDRAPUMP_INGREDIENTS,
  stats: HYDRAPUMP_STATS,
  langs: Object.keys(HYDRAPUMP_TEXT), // country layout only where the text exists
};
