// Warflex™ product page text, per site language.
// Most of the page (how to use, who it's for, labels, FAQ 2–5…) is the same as Father of Insane™,
// so each language starts from that text and only overrides what is Warflex-specific.
// {loc} → "in the UAE" / "في الإمارات"; {cities} → city list from FOI_CITIES (per country).
// Languages not listed here fall back to English.

import { getFoiText } from "./father-of-insane";

const withFaq = (base, caffeineAnswer, title) => ({
  faq: [{ ...base.faq[0], answer: caffeineAnswer }, ...base.faq.slice(1)],
  faq_title: title,
});

const en = {
  ...getFoiText("en"),
  // From the Warflex Belize page supplied.
  badge: "High-Stim Pre-Workout with Boron Citrate",
  intro:
    "Warflex™ by Promolecules is a high-stimulant pre-workout with boron citrate, formulated for healthy adults who are used to stimulant-based sports nutrition. For athletes {loc}{cities} who train for strength, power and tough gym sessions, it brings together creatine sources, amino acids, nitric oxide support ingredients, nootropics and multiple sources of caffeine. Because the formula contains potent stimulants, start with half a scoop to assess your tolerance.",
  stats: ["caffeine per serving", "servings", "flavours", "minimum age (years)"],
  ingredients_p: "Key ingredients include:",
  safety: [
    "For use in healthy adults 18 years of age and older.",
    "Contains approximately 395 mg of caffeine per serving.",
    "Not for beginners.",
    "Do not exceed the recommended serving.",
    "Do not combine with other stimulant-containing products.",
    "Keep out of reach of children.",
    "Store in a cool, dry place.",
  ],
  ...withFaq(
    getFoiText("en"),
    "Yes. Warflex contains several caffeine compounds, for approximately 395 mg of caffeine per serving.",
    "Everything you need to know about Warflex™",
  ),
};

// Arabic: from the Warflex Tunisia page supplied.
const ar = {
  ...getFoiText("ar"),
  badge: "مكمل ما قبل التمرين عالي التحفيز بسترات البورون",
  intro:
    "«Warflex™» من برومولكيولز مكمل ما قبل التمرين عالي المنبّهات بسترات البورون، مصمم للبالغين الأصحاء المعتادين على منتجات التغذية الرياضية المحتوية على منبّهات. وللرياضيين {loc}{cities} ممن يتدربون على القوة والقدرة وجلسات الصالة الرياضية الشاقة، يجمع بين مصادر الكرياتين والأحماض الأمينية ومكوّنات دعم أكسيد النيتريك والمحسّنات الذهنية ومصادر متعددة للكافيين. ولأن التركيبة تحتوي على منبّهات قوية، ابدأ بنصف مغرفة لتقييم مدى تحمّلك.",
  stats: ["كافيين لكل حصة", "حصة", "نكهات", "الحد الأدنى للعمر (سنة)"],
  ingredients_p: "تشمل المكوّنات الرئيسية:",
  safety: [
    "للبالغين الأصحاء بعمر 18 عامًا فأكثر.",
    "يحتوي على نحو 395 ملغ من الكافيين لكل حصة.",
    "غير مناسب للمبتدئين.",
    "لا تتجاوز الحصة الموصى بها.",
    "لا تجمعه مع منتجات أخرى تحتوي على منبّهات.",
    "يُحفظ بعيدًا عن متناول الأطفال.",
    "يُخزَّن في مكان بارد وجاف.",
  ],
  ...withFaq(
    getFoiText("ar"),
    "نعم. يحتوي Warflex على عدة مركّبات كافيين، بإجمالي نحو 395 ملغ من الكافيين لكل حصة.",
    "كل ما تحتاج معرفته عن Warflex™",
  ),
};

// Spanish: from the Warflex Argentina page supplied.
const es = {
  ...getFoiText("es"),
  badge: "Pre-entreno de alto estímulo con citrato de boro",
  intro:
    "Warflex™ de Promolecules es un pre-entreno de alto estímulo con citrato de boro, formulado para adultos sanos acostumbrados a productos de nutrición deportiva con estimulantes. Para los atletas {loc}{cities} que entrenan fuerza, potencia y sesiones exigentes de gimnasio, reúne fuentes de creatina, aminoácidos, ingredientes de apoyo al óxido nítrico, nootrópicos y varias fuentes de cafeína. Como la fórmula contiene estimulantes potentes, empieza con medio scoop para evaluar tu tolerancia.",
  stats: ["de cafeína por porción", "porciones", "sabores", "edad mínima (años)"],
  ingredients_p: "Ingredientes principales:",
  safety: [
    "Para adultos sanos de 18 años o más.",
    "Contiene aproximadamente 395 mg de cafeína por porción.",
    "No apto para principiantes.",
    "No excedas la porción recomendada.",
    "No lo combines con otros productos que contengan estimulantes.",
    "Mantener fuera del alcance de los niños.",
    "Conservar en un lugar fresco y seco.",
  ],
  ...withFaq(
    getFoiText("es"),
    "Sí. Warflex contiene varios compuestos de cafeína, con aproximadamente 395 mg de cafeína por porción.",
    "Todo lo que necesitas saber sobre Warflex™",
  ),
};

// Portuguese: from the Warflex Brazil page supplied.
const pt = {
  ...getFoiText("pt"),
  badge: "Pré-treino de alto estímulo com citrato de boro",
  intro:
    "O Warflex™, da Promolecules, é um pré-treino de alto estímulo com citrato de boro, formulado para adultos saudáveis acostumados a produtos de nutrição esportiva com estimulantes. Para atletas {loc}{cities} que treinam força, potência e sessões pesadas de academia, ele reúne fontes de creatina, aminoácidos, ingredientes de suporte ao óxido nítrico, nootrópicos e várias fontes de cafeína. Como a fórmula contém estimulantes potentes, comece com meio scoop para avaliar sua tolerância.",
  stats: ["de cafeína por dose", "doses", "sabores", "idade mínima (anos)"],
  ingredients_p: "Principais ingredientes:",
  safety: [
    "Para adultos saudáveis com 18 anos ou mais.",
    "Contém aproximadamente 395 mg de cafeína por dose.",
    "Não é para iniciantes.",
    "Não exceda a porção recomendada.",
    "Não combine com outros produtos que contenham estimulantes.",
    "Mantenha fora do alcance de crianças.",
    "Armazene em local fresco e seco.",
  ],
  ...withFaq(
    getFoiText("pt"),
    "Sim. O Warflex contém vários compostos de cafeína, com cerca de 395 mg de cafeína por dose.",
    "Tudo o que você precisa saber sobre o Warflex™",
  ),
};

// Uzbek: from the Warflex Uzbekistan page supplied ({name} = "O'zbekiston").
const uz = {
  ...getFoiText("uz"),
  badge: "Bor sitratli yuqori stimulyatorli mashqdan oldingi qo'shimcha",
  intro:
    "Promolecules'ning Warflex™ mahsuloti — bor sitratli yuqori stimulyatorli mashqdan oldingi qo'shimcha bo'lib, stimulyatorli sport ovqatlanish mahsulotlariga o'rganib qolgan sog'lom kattalar uchun ishlab chiqilgan. {name} sportchilari{cities} kuch, quvvat va og'ir zal mashg'ulotlari uchun kreatin manbalari, aminokislotalar, azot oksidi uchun yordamchi komponentlar, nootroplar va bir nechta kofein manbasini birlashtirgan formulani topadilar. Formulada kuchli stimulyatorlar bo'lgani uchun bardoshliligingizni baholash maqsadida yarim o'lchov qoshiqdan boshlang.",
  stats: ["bir porsiyadagi kofein", "porsiya", "ta'm", "minimal yosh (yil)"],
  ingredients_p: "Asosiy tarkib:",
  safety: [
    "18 yosh va undan katta sog'lom kattalar uchun.",
    "Bir porsiyada taxminan 395 mg kofein bor.",
    "Yangi boshlovchilar uchun emas.",
    "Tavsiya etilgan porsiyadan oshirmang.",
    "Stimulyatorli boshqa mahsulotlar bilan birga qabul qilmang.",
    "Bolalar yetmaydigan joyda saqlang.",
    "Salqin, quruq joyda saqlang.",
  ],
  ...withFaq(
    getFoiText("uz"),
    "Ha. Warflex tarkibida bir nechta kofein birikmasi bor, bir porsiyada taxminan 395 mg kofein.",
    "Warflex™ haqida bilishingiz kerak bo'lgan hamma narsa",
  ),
};

// Russian: from the Warflex Kazakhstan page supplied ({name} = country, cities in genitive).
const ru = {
  ...getFoiText("ru"),
  badge: "Высокостимулирующий предтренировочный комплекс с цитратом бора",
  intro:
    "Warflex™ от Promolecules — высокостимулирующий предтренировочный комплекс с цитратом бора для здоровых взрослых, привыкших к спортивному питанию со стимуляторами. Для спортсменов страны {name}{cities} которые тренируются на силу, мощность и тяжёлые тренировки в зале, он объединяет источники креатина, аминокислоты, компоненты для поддержки синтеза оксида азота, ноотропы и несколько источников кофеина. Поскольку формула содержит сильные стимуляторы, начните с половины мерной ложки, чтобы оценить переносимость.",
  stats: ["кофеина в порции", "порций", "вкуса", "минимальный возраст (лет)"],
  ingredients_p: "Основные компоненты:",
  safety: [
    "Для здоровых взрослых от 18 лет.",
    "Содержит около 395 мг кофеина на порцию.",
    "Не для начинающих.",
    "Не превышайте рекомендуемую порцию.",
    "Не сочетайте с другими продуктами, содержащими стимуляторы.",
    "Хранить в недоступном для детей месте.",
    "Хранить в прохладном сухом месте.",
  ],
  ...withFaq(
    getFoiText("ru"),
    "Да. Warflex содержит несколько соединений кофеина — около 395 мг кофеина на порцию.",
    "Всё, что нужно знать о Warflex™",
  ),
};

// Malay: from the Warflex Malaysia page supplied.
const ms = {
  ...getFoiText("ms"),
  badge: "Pra-Latihan Stimulan Tinggi dengan Boron Citrate",
  intro:
    "Warflex™ daripada Promolecules ialah pra-latihan berstimulan tinggi dengan boron citrate, dirumus untuk orang dewasa yang sihat dan biasa dengan produk pemakanan sukan berasaskan stimulan. Untuk atlet {loc}{cities} yang berlatih untuk kekuatan, kuasa dan sesi gim yang mencabar, ia menggabungkan sumber kreatin, asid amino, bahan sokongan nitrik oksida, nootropik dan pelbagai sumber kafein. Memandangkan formula ini mengandungi stimulan yang kuat, mulakan dengan setengah sudu untuk menilai toleransi anda.",
  stats: ["kafein setiap hidangan", "hidangan", "perisa", "umur minimum (tahun)"],
  ingredients_p: "Bahan utama termasuk:",
  safety: [
    "Untuk orang dewasa yang sihat berumur 18 tahun ke atas.",
    "Mengandungi kira-kira 395 mg kafein setiap hidangan.",
    "Tidak sesuai untuk pemula.",
    "Jangan melebihi hidangan yang disyorkan.",
    "Jangan gabungkan dengan produk lain yang mengandungi stimulan.",
    "Jauhkan daripada capaian kanak-kanak.",
    "Simpan di tempat yang sejuk dan kering.",
  ],
  ...withFaq(
    getFoiText("ms"),
    "Ya. Warflex mengandungi beberapa sebatian kafein, dengan kira-kira 395 mg kafein setiap hidangan.",
    "Semua yang perlu anda tahu tentang Warflex™",
  ),
};

// Swahili: from the Warflex Tanzania page supplied.
const sw = {
  ...getFoiText("sw"),
  badge: "Pre-Workout yenye Kichocheo cha Juu na Boron Citrate",
  intro:
    "Warflex™ kutoka Promolecules ni pre-workout yenye vichochezi vingi pamoja na boron citrate, iliyoundwa kwa watu wazima wenye afya waliozoea bidhaa za lishe ya michezo zenye vichochezi. Kwa wanamichezo {loc}{cities} wanaofanya mazoezi ya nguvu, kasi na vipindi vizito vya gym, inaunganisha vyanzo vya kreatini, asidi amino, viambato vya kusaidia nitric oxide, nootropiki na vyanzo kadhaa vya kafeini. Kwa kuwa fomula ina vichochezi vikali, anza na nusu scoop ili kupima uvumilivu wako.",
  stats: ["kafeini kwa kila dozi", "dozi", "ladha", "umri wa chini (miaka)"],
  ingredients_p: "Viambato muhimu ni pamoja na:",
  safety: [
    "Kwa watu wazima wenye afya wenye umri wa miaka 18 na zaidi.",
    "Ina takriban mg 395 za kafeini kwa kila dozi.",
    "Si kwa wanaoanza.",
    "Usizidi dozi iliyopendekezwa.",
    "Usichanganye na bidhaa nyingine zenye vichochezi.",
    "Weka mbali na watoto.",
    "Hifadhi mahali penye ubaridi na pakavu.",
  ],
  ...withFaq(
    getFoiText("sw"),
    "Ndiyo. Warflex ina misombo kadhaa ya kafeini, takriban mg 395 za kafeini kwa kila dozi.",
    "Kila unachohitaji kujua kuhusu Warflex™",
  ),
};

// French: from the Warflex Haiti page supplied. There is no Father of Insane™ French text yet,
// so this is complete on its own. Labels marked (*) were not in the supplied page.
const fr = {
  badge: "Pré-entraînement haute stimulation au citrate de bore",
  tag: "Conçu pour les athlètes expérimentés qui s'entraînent intensément.",
  warn: "Déconseillé aux débutants. Réservé aux utilisateurs avancés.",
  price_from: "Prix de base à partir de {price} $ US",
  price_local: "Prix : {price}",
  cities: ", de {cities} à l'ensemble du pays,",
  local_cur: "Devise locale : {cur}",
  cta: "Voir sur la boutique officielle",
  quote_cta: "Demander un devis", // (*)
  quote_p: "Contactez-nous pour obtenir un devis et les conditions de livraison {loc}.", // (*)
  flavour: "Saveur", // (*)
  servings: "Portions",
  intro:
    "Warflex™ de Promolecules est un pré-entraînement très stimulant au citrate de bore, formulé pour des adultes en bonne santé habitués aux produits de nutrition sportive contenant des stimulants. Pour les athlètes {loc}{cities} qui s'entraînent pour la force, la puissance et les séances exigeantes en salle, il réunit des sources de créatine, des acides aminés, des ingrédients de soutien à l'oxyde nitrique, des nootropiques et plusieurs sources de caféine. La formule contenant de puissants stimulants, commencez par une demi-dose pour évaluer votre tolérance.",
  stats: ["de caféine par portion", "portions", "saveurs", "âge minimum (ans)"],
  ingredients_h: "Composition",
  ingredients_p: "Principaux ingrédients :",
  howto_h: "Mode d'emploi",
  steps: [
    "Commencez par ½ dose dans 120–180 ml d'eau environ 30 minutes avant l'entraînement afin d'évaluer votre tolérance.",
    "Si vous le tolérez bien, utilisez 1 dose complète dans 240–300 ml d'eau environ 30 minutes avant l'entraînement.",
    "Ne dépassez pas une dose par jour.",
  ],
  who_h: "Pour qui ?",
  who: [
    "Pratiquants avancés de musculation et culturistes",
    "Athlètes de force et powerlifters",
    "Adeptes du cross-training et utilisateurs expérimentés de pré-entraînements stimulants",
  ],
  skip_h: "Qui ne doit pas l'utiliser ?",
  skip_p:
    "Les débutants, les personnes sensibles à la caféine ou aux autres stimulants, et les femmes enceintes ou allaitantes. En cas de problème médical ou de traitement en cours, demandez d'abord l'avis d'un professionnel de santé.",
  facts_h: "Valeurs nutritionnelles", // (*)
  safety_h: "Informations de sécurité",
  safety: [
    "Pour adultes en bonne santé de 18 ans et plus.",
    "Contient environ 395 mg de caféine par portion.",
    "Déconseillé aux débutants.",
    "Ne pas dépasser la portion recommandée.",
    "Ne pas associer à d'autres produits contenant des stimulants.",
    "Tenir hors de portée des enfants.",
    "Conserver dans un endroit frais et sec.",
  ],
  faq_h: "Questions fréquentes",
  faq: [
    {
      question: "Contient-il de la caféine ?",
      answer: "Oui. Warflex contient plusieurs composés de caféine, soit environ 395 mg de caféine par portion.",
    },
    {
      question: "Contient-il de la créatine ?",
      answer: "Oui : Creatine Monohydrate et Creatine HCl (CreaCCL®).",
    },
    {
      question: "Puis-je en prendre tous les jours ?",
      answer:
        "Suivez les indications de l'étiquette et ne dépassez jamais une portion par jour. Consultez un professionnel de santé si vous avez des questions sur une utilisation régulière.",
    },
    {
      question: "Puis-je l'associer à d'autres compléments ?",
      answer:
        "Il peut être utilisé avec des produits de nutrition sportive compatibles, mais évitez les compléments supplémentaires contenant de la caféine, sauf avis d'un professionnel de santé.",
    },
    {
      question: "Est-il disponible {loc} ?",
      answer:
        "Vérifiez la disponibilité et les conditions de livraison pour {name} sur la boutique officielle avant de commander. Achetez uniquement sur le site officiel de Promolecules ou auprès de vendeurs agréés pour vous assurer que le produit est authentique.",
    },
  ],
  buy_h: "Où l'acheter",
  worldwide_h: "Promolecules dans le monde",
  quantity: "Quantité", // (*)
  description_h: "Description", // (*)
  faq_kicker: "Questions fréquentes",
  faq_title: "Tout ce qu'il faut savoir sur Warflex™", // (*)
  faq_sub: "Réponses aux questions les plus courantes sur la composition, l'utilisation et la sécurité.", // (*)
  disclaimer:
    "Complément alimentaire. Les résultats varient selon l'entraînement, l'alimentation et la tolérance individuelle. Ne vise pas à diagnostiquer, traiter, guérir ou prévenir une maladie.",
};

// Persian (Iran, right-to-left): from the Warflex Iran page supplied. Complete on its own.
// Labels marked (*) were not in the supplied page.
const fa = {
  badge: "پیش‌تمرین پرمحرک با سیترات بور",
  tag: "ساخته‌شده برای ورزشکاران باتجربه‌ای که سخت تمرین می‌کنند.",
  warn: "مناسب مبتدی‌ها نیست. فقط برای کاربران حرفه‌ای.",
  price_from: "قیمت پایه از {price} دلار آمریکا",
  price_local: "قیمت: {price}",
  cities: "، از {cities}،",
  local_cur: "واحد پول محلی: {cur}",
  cta: "مشاهده در فروشگاه رسمی",
  quote_cta: "درخواست قیمت", // (*)
  quote_p: "برای دریافت قیمت و شرایط ارسال {loc} با ما تماس بگیرید.", // (*)
  flavour: "طعم", // (*)
  servings: "وعده", // (*)
  intro:
    "«Warflex™» از پرومولکیولز یک پیش‌تمرین پرمحرک همراه با بور سیترات است که برای بزرگسالان سالمی طراحی شده که با مکمل‌های ورزشی حاوی محرک آشنایی دارند. برای ورزشکاران {loc}{cities} که برای قدرت، توان و جلسات سخت باشگاه تمرین می‌کنند، منابع کراتین، آمینو اسیدها، مواد پشتیبان نیتریک اکساید، ترکیبات تقویت‌کننده تمرکز و چند منبع کافئین را در کنار هم ارائه می‌دهد. از آنجا که فرمول حاوی محرک‌های قوی است، برای سنجش تحمل خود با نصف پیمانه شروع کنید.",
  stats: ["کافئین در هر وعده", "وعده", "طعم", "حداقل سن (سال)"],
  ingredients_h: "ترکیبات",
  ingredients_p: "مواد اصلی شامل:",
  howto_h: "نحوه مصرف",
  steps: [
    "با نصف پیمانه (½) در ۱۲۰ تا ۱۸۰ میلی‌لیتر آب، حدود ۳۰ دقیقه پیش از تمرین شروع کنید تا تحمل بدنتان را بسنجید.",
    "در صورت تحمل مناسب، یک پیمانه کامل را در ۲۴۰ تا ۳۰۰ میلی‌لیتر آب، حدود ۳۰ دقیقه پیش از تمرین مصرف کنید.",
    "بیش از یک پیمانه در روز مصرف نکنید.",
  ],
  who_h: "مناسب چه کسانی است؟",
  who: [
    "باشگاه‌روندگان حرفه‌ای و بدنسازان",
    "ورزشکاران قدرتی و وزنه‌برداران",
    "علاقه‌مندان به تمرین ترکیبی و کاربران باتجربه پیش‌تمرین‌های محرک",
  ],
  skip_h: "چه کسانی نباید مصرف کنند؟",
  skip_p:
    "مبتدی‌ها، افراد حساس به کافئین یا سایر محرک‌ها، و زنان باردار یا شیرده. اگر بیماری زمینه‌ای دارید یا دارو مصرف می‌کنید، پیش از مصرف با متخصص سلامت مشورت کنید.",
  facts_h: "ارزش غذایی", // (*)
  safety_h: "نکات ایمنی",
  safety: [
    "مخصوص بزرگسالان سالم ۱۸ سال به بالا.",
    "حاوی حدود ۳۹۵ میلی‌گرم کافئین در هر وعده.",
    "مناسب مبتدی‌ها نیست.",
    "از مقدار توصیه‌شده بیشتر مصرف نکنید.",
    "با سایر محصولات حاوی محرک ترکیب نکنید.",
    "دور از دسترس کودکان نگه دارید.",
    "در جای خنک و خشک نگهداری کنید.",
  ],
  faq_h: "پرسش و پاسخ",
  faq: [
    {
      question: "آیا کافئین دارد؟",
      answer: "بله. Warflex شامل چند ترکیب کافئین است و در مجموع حدود ۳۹۵ میلی‌گرم کافئین در هر وعده دارد.",
    },
    {
      question: "آیا کراتین دارد؟",
      answer: "بله: کراتین مونوهیدرات و کراتین HCl (CreaCCL®).",
    },
    {
      question: "آیا می‌توانم هر روز مصرف کنم؟",
      answer:
        "دستورالعمل روی برچسب را دنبال کنید و هرگز بیش از یک وعده در روز مصرف نکنید. اگر درباره مصرف منظم پرسشی دارید، با متخصص سلامت مشورت کنید.",
    },
    {
      question: "آیا می‌توان با مکمل‌های دیگر ترکیب کرد؟",
      answer:
        "می‌توان آن را با محصولات تغذیه ورزشی سازگار مصرف کرد، اما از مصرف مکمل‌های حاوی کافئین اضافی خودداری کنید، مگر با توصیه متخصص سلامت.",
    },
    {
      question: "آیا {loc} در دسترس است؟",
      answer:
        "لطفاً پیش از سفارش، موجودی و شرایط ارسال به {name} را در فروشگاه رسمی بررسی کنید. برای اطمینان از اصالت محصول، فقط از سایت رسمی Promolecules یا فروشندگان مجاز خرید کنید.",
    },
  ],
  buy_h: "از کجا بخریم",
  worldwide_h: "Promolecules در سراسر جهان", // (*)
  quantity: "تعداد", // (*)
  description_h: "توضیحات", // (*)
  faq_kicker: "پرسش و پاسخ",
  faq_title: "هر آنچه باید درباره Warflex™ بدانید", // (*)
  faq_sub: "پاسخ پرسش‌های رایج درباره ترکیبات، نحوه مصرف و ایمنی.", // (*)
  disclaimer:
    "مکمل غذایی. نتایج بر اساس تمرین، تغذیه و تحمل فردی متفاوت است. برای تشخیص، درمان یا پیشگیری از هیچ بیماری نیست.",
};

const WARFLEX_TEXT = { en, ar, es, pt, uz, ru, ms, sw, fr, fa };

export const getWarflexText = (lang) => WARFLEX_TEXT[lang] ?? en;

// Ingredient names stay in Latin script in every language (as on the label).
export const WARFLEX_INGREDIENTS = [
  "Creatine Monohydrate",
  "Creatine HCl (CreaCCL®)",
  "Beta-Alanine",
  "L-Citrulline",
  "Taurine",
  "Alpha GPC",
  "Boron Citrate",
  "Agmatine Sulfate",
  "Caffeine (multiple sources)",
  "Alpha Yohimbine",
  "L-Theanine",
  "Huperzine-A",
];

export const WARFLEX_STATS = ["≈395 mg", "35 / 65", "4", "18+"];

export const WARFLEX_CONTENT = {
  name: "Warflex™",
  getText: getWarflexText,
  ingredients: WARFLEX_INGREDIENTS,
  stats: WARFLEX_STATS,
};
