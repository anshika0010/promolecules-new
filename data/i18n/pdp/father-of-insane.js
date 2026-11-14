// Father of Insane™ product page text, per site language.
// {loc} → "in the UAE" / "في الإمارات" (empty on the global site), {cur} → local currency code.
// Languages not listed here fall back to English.

const en = {
  badge: "Ultra high-stim pre-workout",
  tag: "Built for experienced athletes who train hard.",
  warn: "Not for beginners. Advanced users only.",
  price_from: "Base price from US$ {price}",
  price_local: "Price: {price}",
  cities: ", from {cities},",
  local_cur: "Local currency: {cur}",
  cta: "Buy now",
  quote_cta: "Get a quotation",
  quote_p: "Contact us for a quotation and delivery details {loc}.",
  flavour: "Flavour",
  servings: "Servings",
  intro:
    "Promolecules Father of Insane™ is a high-stimulant pre-workout for healthy adults who are already used to stimulant products. For athletes {loc}{cities} who train for strength, power and high-intensity work, it delivers a concentrated 5200 mg proprietary blend with three caffeine sources and two forms of creatine.",
  stats: ["caffeine per serving", "proprietary blend", "servings", "flavours"],
  ingredients_h: "Ingredients",
  ingredients_p: "The proprietary blend (5200 mg) contains:",
  howto_h: "How to use",
  steps: [
    "Start with ½ scoop in 120–180 ml of water about 30 minutes before training to assess tolerance.",
    "If well tolerated, use 1 full scoop in 240–300 ml of water about 30 minutes before training.",
    "Do not exceed one scoop per day.",
  ],
  who_h: "Who is it for?",
  who: [
    "Advanced gym-goers and bodybuilders",
    "Strength athletes and weightlifters",
    "Cross-training enthusiasts and experienced users of stimulant pre-workouts",
  ],
  skip_h: "Who should not use it?",
  skip_p:
    "Beginners, people sensitive to caffeine or other stimulants, and pregnant or breastfeeding women. If you have a medical condition or take medication, consult a healthcare professional first.",
  facts_h: "Supplement facts",
  safety_h: "Safety information",
  safety: [
    "For healthy adults only.",
    "Not for beginners.",
    "Do not exceed the recommended serving.",
    "Avoid combining with other caffeine products.",
    "Keep out of reach of children.",
    "Store in a cool, dry place.",
  ],
  faq_h: "Questions & answers",
  faq: [
    {
      question: "Does it contain caffeine?",
      answer:
        "Yes. It contains caffeine anhydrous, dicaffeine malate (2XCaff®) and caffeine citrate (Citra Caff®), 450 mg in total per serving.",
    },
    {
      question: "Does it contain creatine?",
      answer: "Yes: creatine monohydrate and creatine HCl (CreaCCL®).",
    },
    {
      question: "Can I take it every day?",
      answer:
        "Follow the label directions and do not exceed one serving per day. Consult a healthcare professional if you have questions about regular use.",
    },
    {
      question: "Can I combine it with other supplements?",
      answer:
        "It can be used with compatible sports nutrition products, but avoid additional caffeine-containing supplements unless a healthcare professional advises otherwise.",
    },
    {
      question: "Is it available {loc}?",
      answer:
        "Please check availability and delivery terms {loc} through the official store before ordering. Buy only from the official Promolecules website or authorised sellers to make sure the product is genuine.",
    },
  ],
  buy_h: "Where to buy",
  worldwide_h: "Promolecules worldwide",
  disclaimer:
    "Dietary supplement. Results vary with training, nutrition and individual tolerance. Not intended to diagnose, treat, cure or prevent any disease.",
};

const ar = {
  badge: "مكمل ما قبل التمرين فائق التحفيز",
  tag: "مصمم للرياضيين أصحاب الخبرة الذين يتدربون بقوة.",
  warn: "غير مناسب للمبتدئين. للمستخدمين المتقدمين فقط.",
  price_from: "السعر الأساسي يبدأ من {price} دولارًا أمريكيًا",
  price_local: "السعر: {price}",
  cities: "، من {cities}،",
  local_cur: "العملة المحلية: {cur}",
  cta: "اشترِ الآن",
  quote_cta: "اطلب عرض سعر",
  quote_p: "تواصل معنا للحصول على عرض سعر وتفاصيل التوصيل {loc}.",
  flavour: "النكهة",
  servings: "الحصص",
  intro:
    "«Father of Insane» من برومولكيولز مكمل ما قبل التمرين عالي المنبّهات للبالغين الأصحاء الذين اعتادوا استخدام منتجات تحتوي على منبّهات. وللرياضيين {loc}{cities} ممن يتدربون على القوة والقدرة والتمارين عالية الشدة، يقدّم خليطًا خاصًا مركّزًا وزنه 5200 ملغ يضم ثلاثة مصادر للكافيين وشكلين من الكرياتين.",
  stats: ["كافيين لكل حصة", "خليط خاص", "حصة", "نكهات"],
  ingredients_h: "المكوّنات",
  ingredients_p: "يحتوي الخليط الخاص (5200 ملغ) على:",
  howto_h: "طريقة الاستخدام",
  steps: [
    "ابدأ بنصف مغرفة (½) مع 120–180 مل من الماء قبل التمرين بنحو 30 دقيقة لتقييم مدى تحمّلك.",
    "إذا كان التحمّل جيدًا، استخدم مغرفة كاملة مع 240–300 مل من الماء قبل التمرين بنحو 30 دقيقة.",
    "لا تتجاوز مغرفة واحدة في اليوم.",
  ],
  who_h: "لمن هذا المنتج؟",
  who: [
    "رواد الصالات الرياضية المتقدمون ولاعبو كمال الأجسام",
    "رياضيو القوة ولاعبو رفع الأثقال",
    "هواة التدريب المتنوع والمستخدمون ذوو الخبرة لمكملات ما قبل التمرين المحتوية على منبّهات",
  ],
  skip_h: "من يجب ألا يستخدمه؟",
  skip_p:
    "المبتدئون، والأشخاص الحساسون للكافيين أو المنبّهات الأخرى، والحوامل والمرضعات. وإذا كنت تعاني من حالة طبية أو تتناول دواءً فاستشر مختصًا في الرعاية الصحية أولًا.",
  facts_h: "حقائق المكمل الغذائي",
  safety_h: "معلومات السلامة",
  safety: [
    "للبالغين الأصحاء فقط.",
    "غير مناسب للمبتدئين.",
    "لا تتجاوز الحصة الموصى بها.",
    "تجنّب الجمع مع منتجات أخرى تحتوي على الكافيين.",
    "يُحفظ بعيدًا عن متناول الأطفال.",
    "يُخزَّن في مكان بارد وجاف.",
  ],
  faq_h: "أسئلة وأجوبة",
  faq: [
    {
      question: "هل يحتوي على كافيين؟",
      answer:
        "نعم. يضم الكافيين اللامائي، وملات ثنائي الكافيين (2XCaff®)، وسترات الكافيين (Citra Caff®)، بإجمالي 450 ملغ لكل حصة.",
    },
    {
      question: "هل يحتوي على كرياتين؟",
      answer: "نعم: كرياتين أحادي الهيدرات وكرياتين HCl (CreaCCL®).",
    },
    {
      question: "هل يمكنني تناوله يوميًا؟",
      answer:
        "اتبع الإرشادات على الملصق ولا تتجاوز حصة واحدة في اليوم. استشر مختصًا في الرعاية الصحية إذا كانت لديك أسئلة حول الاستخدام المنتظم.",
    },
    {
      question: "هل يمكن دمجه مع مكملات أخرى؟",
      answer:
        "يمكن استخدامه مع منتجات التغذية الرياضية المتوافقة، لكن تجنّب المكملات الإضافية المحتوية على الكافيين ما لم ينصح بذلك مختص في الرعاية الصحية.",
    },
    {
      question: "هل المنتج متوفر {loc}؟",
      answer:
        "يُرجى التأكد من التوفر وشروط التوصيل {loc} عبر المتجر الرسمي قبل الطلب. اشترِ فقط من موقع Promolecules الرسمي أو من البائعين المعتمدين لضمان أصالة المنتج.",
    },
  ],
  buy_h: "أين تشتري",
  worldwide_h: "Promolecules حول العالم",
  quantity: "الكمية",
  description_h: "الوصف",
  faq_kicker: "الأسئلة الشائعة",
  faq_title: "كل ما تحتاج معرفته عن Father of Insane™",
  faq_sub: "إجابات عن أكثر الأسئلة شيوعًا حول المكوّنات والاستخدام والسلامة.",
  disclaimer:
    "مكمل غذائي. تختلف النتائج حسب التدريب والتغذية وقدرة التحمّل الفردية. غير مخصص لتشخيص أي مرض أو علاجه أو الشفاء منه أو الوقاية منه.",
};

const es = {
  badge: "Pre-entreno de ultra alto estímulo",
  tag: "Creado para atletas con experiencia que entrenan a fondo.",
  warn: "No apto para principiantes. Solo para usuarios avanzados.",
  price_from: "Precio base desde US$ {price}",
  price_local: "Precio: {price}",
  cities: ", desde {cities},",
  local_cur: "Moneda local: {cur}",
  cta: "Comprar ahora",
  quote_cta: "Solicitar cotización",
  quote_p: "Contáctanos para recibir una cotización y los detalles de entrega {loc}.",
  flavour: "Sabor",
  servings: "Porciones",
  intro:
    "Father of Insane™ de Promolecules es un pre-entreno con un contenido muy alto de estimulantes para adultos sanos que ya usan productos con estimulantes. Para los atletas {loc}{cities} que entrenan fuerza, potencia y alta intensidad, ofrece una mezcla propietaria concentrada de 5200 mg con tres fuentes de cafeína y dos formas de creatina.",
  stats: ["de cafeína por porción", "mezcla propietaria", "porciones", "sabores"],
  ingredients_h: "Qué contiene",
  ingredients_p: "La mezcla propietaria de 5200 mg contiene:",
  howto_h: "Cómo usarlo",
  steps: [
    "Empieza con ½ scoop en 120–180 ml de agua, unos 30 minutos antes de entrenar, para evaluar tu tolerancia.",
    "Si lo toleras bien, usa 1 scoop completo en 240–300 ml de agua, unos 30 minutos antes de entrenar.",
    "No excedas un scoop al día.",
  ],
  who_h: "Para quién es",
  who: [
    "Usuarios avanzados de gimnasio y fisicoculturistas",
    "Atletas de fuerza y powerlifters",
    "Aficionados al entrenamiento cruzado y usuarios con experiencia en pre-entrenos con estimulantes",
  ],
  skip_h: "Quién no debe usarlo",
  skip_p:
    "Principiantes, personas sensibles a la cafeína u otros estimulantes, y mujeres embarazadas o en periodo de lactancia. Si tienes alguna condición médica o tomas medicamentos, consulta antes a un profesional de la salud.",
  facts_h: "Información nutricional",
  safety_h: "Información de seguridad",
  safety: [
    "Solo para adultos sanos.",
    "No apto para principiantes.",
    "No excedas la porción recomendada.",
    "Evita combinarlo con otros productos que contengan cafeína.",
    "Mantener fuera del alcance de los niños.",
    "Conservar en un lugar fresco y seco.",
  ],
  faq_h: "Preguntas frecuentes",
  faq: [
    {
      question: "¿Contiene cafeína?",
      answer:
        "Sí. Incluye Caffeine Anhydrous, Dicaffeine Malate (2XCaff®) y Caffeine Citrate (Citra Caff®), con un total de 450 mg de cafeína por porción.",
    },
    {
      question: "¿Contiene creatina?",
      answer: "Sí: Creatine Monohydrate y Creatine HCl (CreaCCL®).",
    },
    {
      question: "¿Puedo tomarlo todos los días?",
      answer:
        "Sigue las instrucciones de la etiqueta y nunca excedas una porción al día. Consulta a un profesional de la salud si tienes dudas sobre el uso regular.",
    },
    {
      question: "¿Puedo combinarlo con otros suplementos?",
      answer:
        "Puede usarse con productos de nutrición deportiva compatibles, pero evita suplementos adicionales con cafeína salvo indicación de un profesional de la salud.",
    },
    {
      question: "¿Está disponible {loc}?",
      answer:
        "Confirma la disponibilidad y las condiciones de entrega {loc} en la tienda oficial antes de comprar. Compra solo en el sitio oficial de Promolecules o con vendedores autorizados para asegurarte de que el producto sea original.",
    },
  ],
  buy_h: "Dónde comprar",
  worldwide_h: "Promolecules en el mundo",
  quantity: "Cantidad",
  description_h: "Descripción",
  faq_kicker: "Preguntas frecuentes",
  faq_title: "Todo lo que necesitas saber sobre Father of Insane™",
  faq_sub: "Respuestas a las preguntas más comunes sobre ingredientes, uso y seguridad.",
  disclaimer:
    "Suplemento alimenticio. Los resultados varían según el entrenamiento, la alimentación y la tolerancia individual. No está destinado a diagnosticar, tratar, curar ni prevenir ninguna enfermedad.",
};

// Uzbek: "O'zbekistonda" ({loc}) doesn't fit these sentences, so {name} (= "O'zbekiston") is used instead.
const uz = {
  badge: "Ultra yuqori stimulyatorli mashqdan oldingi qo'shimcha",
  tag: "Qattiq mashq qiladigan tajribali sportchilar uchun yaratilgan.",
  warn: "Yangi boshlovchilar uchun emas. Faqat tajribali foydalanuvchilar uchun.",
  price_from: "Asosiy narx {price} AQSH dollaridan boshlanadi",
  price_local: "Narx: {price}",
  cities: " — {cities} va boshqa shaharlarda —",
  local_cur: "Mahalliy valyuta: {cur}",
  cta: "Rasmiy do'konda ko'rish",
  quote_cta: "Narxni so'rash",
  quote_p: "Narx va {name} bo'ylab yetkazib berish shartlarini bilish uchun biz bilan bog'laning.",
  flavour: "Ta'm",
  servings: "Porsiya",
  intro:
    "Promolecules'ning Father of Insane™ mahsuloti — stimulyatorli mahsulotlardan allaqachon foydalangan sog'lom kattalar uchun juda yuqori stimulyatorli mashqdan oldingi qo'shimcha. {name} sportchilari{cities} kuch, quvvat va yuqori intensivlikdagi mashg'ulotlar uchun uch xil kofein manbasi va ikki xil kreatin shakli bilan boyitilgan 5200 mg konsentrlangan xususiy aralashmani topadilar.",
  stats: ["bir porsiyadagi kofein", "xususiy aralashma", "porsiya", "ta'm"],
  ingredients_h: "Tarkibi",
  ingredients_p: "5200 mg xususiy aralashma tarkibi:",
  howto_h: "Qanday qabul qilinadi",
  steps: [
    "Bardoshliligingizni baholash uchun mashqdan taxminan 30 daqiqa oldin ½ o'lchov qoshiqni 120–180 ml suvga aralashtirib boshlang.",
    "Yaxshi o'zlashtirilsa, mashqdan taxminan 30 daqiqa oldin 1 to'liq o'lchov qoshiqni 240–300 ml suvga aralashtiring.",
    "Kuniga bir o'lchov qoshiqdan oshirmang.",
  ],
  who_h: "Kimlar uchun",
  who: [
    "Tajribali zal mashqchilari va bodibildinglar",
    "Kuch sportchilari va pauerlifterlar",
    "Krosstrening ishqibozlari va stimulyatorli mashqdan oldingi mahsulotlardan foydalanish tajribasi bor kishilar",
  ],
  skip_h: "Kimlar foydalanmasligi kerak",
  skip_p:
    "Yangi boshlovchilar, kofein yoki boshqa stimulyatorlarga sezgir kishilar, homilador va emizikli ayollar. Agar sizda kasallik bo'lsa yoki dori qabul qilsangiz, avval shifokor bilan maslahatlashing.",
  facts_h: "Tarkib jadvali",
  safety_h: "Xavfsizlik ma'lumotlari",
  safety: [
    "Faqat sog'lom kattalar uchun.",
    "Yangi boshlovchilar uchun emas.",
    "Tavsiya etilgan porsiyadan oshirmang.",
    "Kofeinli boshqa mahsulotlar bilan birga qabul qilmang.",
    "Bolalar yetmaydigan joyda saqlang.",
    "Salqin, quruq joyda saqlang.",
  ],
  faq_h: "Savol-javoblar",
  faq: [
    {
      question: "Tarkibida kofein bormi?",
      answer:
        "Ha. Unda Caffeine Anhydrous, Dicaffeine Malate (2XCaff®) va Caffeine Citrate (Citra Caff®) bor; jami kofein bir porsiyada 450 mg.",
    },
    {
      question: "Tarkibida kreatin bormi?",
      answer: "Ha: Creatine Monohydrate va Creatine HCl (CreaCCL®).",
    },
    {
      question: "Uni har kuni qabul qilsam bo'ladimi?",
      answer:
        "Yorliqdagi ko'rsatmalarga amal qiling va kuniga bir porsiyadan oshirmang. Muntazam qabul haqida savollaringiz bo'lsa, shifokor bilan maslahatlashing.",
    },
    {
      question: "Boshqa qo'shimchalar bilan birga qabul qilsam bo'ladimi?",
      answer:
        "Uni mos sport ovqatlanish mahsulotlari bilan birga ishlatish mumkin, ammo shifokor tavsiya qilmasa, qo'shimcha kofeinli mahsulotlardan saqlaning.",
    },
    {
      question: "Mahsulot mamlakatingizda ({name}) mavjudmi?",
      answer:
        "Buyurtma berishdan oldin rasmiy do'konda {name} uchun mavjudlik va yetkazib berish shartlarini tekshirib oling. Mahsulot asl ekaniga ishonch hosil qilish uchun faqat Promolecules rasmiy saytidan yoki vakolatli sotuvchilardan xarid qiling.",
    },
  ],
  buy_h: "Xarid qilish",
  worldwide_h: "Promolecules butun dunyoda",
  quantity: "Miqdori",
  description_h: "Tavsif",
  faq_kicker: "Savol-javoblar",
  faq_title: "Father of Insane™ haqida bilishingiz kerak bo'lgan hamma narsa",
  faq_sub: "Tarkibi, qabul qilish va xavfsizlik haqidagi eng ko'p beriladigan savollarga javoblar.",
  disclaimer:
    "Oziq-ovqat qo'shimchasi. Natijalar mashg'ulot, ovqatlanish va individual bardoshlilikka qarab farq qiladi. Hech qanday kasallikni aniqlash, davolash yoki oldini olish uchun mo'ljallanmagan.",
};

const sw = {
  badge: "Pre-Workout yenye Kichocheo cha Juu Kabisa",
  tag: "Imetengenezwa kwa wanamichezo wenye uzoefu wanaofanya mazoezi kwa nguvu.",
  warn: "Si kwa wanaoanza. Kwa watumiaji wenye uzoefu tu.",
  price_from: "Bei ya msingi kuanzia US${price}",
  price_local: "Bei: {price}",
  cities: ", kuanzia {cities},",
  local_cur: "Sarafu ya ndani: {cur}",
  cta: "Tazama kwenye duka rasmi",
  quote_cta: "Omba nukuu ya bei",
  quote_p: "Wasiliana nasi kupata nukuu ya bei na masharti ya uwasilishaji {loc}.",
  flavour: "Ladha",
  servings: "Dozi",
  intro:
    "Father of Insane™ kutoka Promolecules ni kirutubisho cha kabla ya mazoezi chenye viambato vya kuchochea kwa kiwango cha juu sana, kwa watu wazima wenye afya ambao tayari hutumia bidhaa zenye vichochezi. Kwa wanamichezo {loc}{cities} wanaofanya mazoezi ya nguvu, kasi na mazoezi mazito, kinatoa mchanganyiko maalum uliokolezwa wa mg 5200 wenye vyanzo vitatu vya kafeini na aina mbili za kreatini.",
  stats: ["kafeini kwa kila dozi", "mchanganyiko maalum", "dozi", "ladha"],
  ingredients_h: "Kilichomo ndani",
  ingredients_p: "Mchanganyiko maalum wa mg 5200 una:",
  howto_h: "Jinsi ya kutumia",
  steps: [
    "Anza na nusu scoop (½) kwenye maji ya ml 120–180 takriban dakika 30 kabla ya mazoezi ili kupima uvumilivu wa mwili wako.",
    "Ukivumilia vizuri, tumia scoop 1 nzima kwenye maji ya ml 240–300 takriban dakika 30 kabla ya mazoezi.",
    "Usizidi scoop moja kwa siku.",
  ],
  who_h: "Inafaa kwa nani?",
  who: [
    "Wanaoenda gym wenye uzoefu na wajenga mwili",
    "Wanamichezo wa nguvu na wanyanyua uzito",
    "Wapenzi wa mazoezi mchanganyiko na watumiaji wazoefu wa pre-workout zenye vichochezi",
  ],
  skip_h: "Nani hapaswi kutumia?",
  skip_p:
    "Wanaoanza, watu wanaoathiriwa kwa urahisi na kafeini au vichochezi vingine, na wajawazito au wanaonyonyesha. Ikiwa una hali ya kiafya au unatumia dawa, shauriana kwanza na mtaalamu wa afya.",
  facts_h: "Taarifa za virutubisho",
  safety_h: "Taarifa za usalama",
  safety: [
    "Kwa watu wazima wenye afya tu.",
    "Si kwa wanaoanza.",
    "Usizidi dozi iliyopendekezwa.",
    "Epuka kuchanganya na bidhaa nyingine zenye kafeini.",
    "Weka mbali na watoto.",
    "Hifadhi mahali penye ubaridi na pakavu.",
  ],
  faq_h: "Maswali na majibu",
  faq: [
    {
      question: "Je, ina kafeini?",
      answer:
        "Ndiyo. Ina Caffeine Anhydrous, Dicaffeine Malate (2XCaff®) na Caffeine Citrate (Citra Caff®), jumla ya mg 450 za kafeini kwa kila dozi.",
    },
    {
      question: "Je, ina kreatini?",
      answer: "Ndiyo: Creatine Monohydrate na Creatine HCl (CreaCCL®).",
    },
    {
      question: "Naweza kuitumia kila siku?",
      answer:
        "Fuata maelekezo kwenye lebo na usizidi dozi moja kwa siku. Shauriana na mtaalamu wa afya ikiwa una maswali kuhusu matumizi ya kila siku.",
    },
    {
      question: "Naweza kuitumia pamoja na virutubisho vingine?",
      answer:
        "Inaweza kutumika pamoja na bidhaa zinazofaa za lishe ya michezo, lakini epuka virutubisho vya ziada vyenye kafeini isipokuwa umeshauriwa na mtaalamu wa afya.",
    },
    {
      question: "Je, inapatikana {loc}?",
      answer:
        "Tafadhali thibitisha upatikanaji na masharti ya uwasilishaji kwa {name} kwenye duka rasmi kabla ya kuagiza. Nunua tu kutoka tovuti rasmi ya Promolecules au wauzaji walioidhinishwa ili kuhakikisha bidhaa ni halisi.",
    },
  ],
  buy_h: "Mahali pa kununua",
  worldwide_h: "Promolecules duniani kote",
  quantity: "Kiasi",
  description_h: "Maelezo",
  faq_kicker: "Maswali na majibu",
  faq_title: "Kila unachohitaji kujua kuhusu Father of Insane™",
  faq_sub: "Majibu ya maswali yanayoulizwa mara nyingi kuhusu viambato, matumizi na usalama.",
  disclaimer:
    "Kirutubisho cha lishe. Matokeo hutofautiana kulingana na mazoezi, lishe na uvumilivu wa mtu binafsi. Hakikusudiwi kutambua, kutibu, kuponya au kuzuia ugonjwa wowote.",
};

// Russian: "страны {name}" keeps the country name in its base form (no case endings needed).
const ru = {
  badge: "Ультра-высокостимулирующий предтренировочный комплекс",
  tag: "Создан для опытных спортсменов, которые тренируются на пределе.",
  warn: "Не для начинающих. Только для опытных пользователей.",
  price_from: "Базовая цена от {price} долл. США",
  price_local: "Цена: {price}",
  cities: " — от {cities} —",
  no_cities: ",", // "…страны Казахстан, которые…" when no cities are listed
  local_cur: "Местная валюта: {cur}",
  cta: "Открыть в официальном магазине",
  quote_cta: "Запросить цену",
  quote_p: "Свяжитесь с нами, чтобы узнать цену и условия доставки для страны {name}.",
  flavour: "Вкус",
  servings: "Порции",
  intro:
    "Father of Insane™ от Promolecules — предтренировочный комплекс с очень высоким содержанием стимуляторов для здоровых взрослых, которые уже принимали продукты со стимуляторами. Для спортсменов страны {name}{cities} которые тренируются на силу, мощность и высокую интенсивность, в нём собрана концентрированная фирменная смесь 5200 мг с тремя источниками кофеина и двумя формами креатина.",
  stats: ["кофеина в порции", "фирменная смесь", "порций", "вкуса"],
  ingredients_h: "Состав",
  ingredients_p: "Фирменная смесь 5200 мг содержит:",
  howto_h: "Как принимать",
  steps: [
    "Начните с ½ мерной ложки в 120–180 мл воды примерно за 30 минут до тренировки, чтобы оценить переносимость.",
    "При хорошей переносимости используйте 1 полную мерную ложку в 240–300 мл воды примерно за 30 минут до тренировки.",
    "Не превышайте одну мерную ложку в сутки.",
  ],
  who_h: "Кому подходит",
  who: [
    "Опытные посетители спортзала и бодибилдеры",
    "Силовые атлеты и пауэрлифтеры",
    "Любители кросс-тренинга и опытные пользователи предтренировочных комплексов со стимуляторами",
  ],
  skip_h: "Кому не стоит принимать",
  skip_p:
    "Начинающим, людям с чувствительностью к кофеину и другим стимуляторам, беременным и кормящим женщинам. При наличии заболеваний или приёме лекарств сначала проконсультируйтесь с врачом.",
  facts_h: "Пищевая ценность",
  safety_h: "Меры предосторожности",
  safety: [
    "Только для здоровых взрослых.",
    "Не для начинающих.",
    "Не превышайте рекомендуемую порцию.",
    "Не сочетайте с другими продуктами, содержащими кофеин.",
    "Хранить в недоступном для детей месте.",
    "Хранить в прохладном сухом месте.",
  ],
  faq_h: "Вопросы и ответы",
  faq: [
    {
      question: "Содержит ли он кофеин?",
      answer:
        "Да. В составе безводный кофеин, дикофеин малат (2XCaff®) и кофеин цитрат (Citra Caff®); общее содержание кофеина — 450 мг на порцию.",
    },
    {
      question: "Содержит ли он креатин?",
      answer: "Да: креатин моногидрат и креатин HCl (CreaCCL®).",
    },
    {
      question: "Можно ли принимать его каждый день?",
      answer:
        "Следуйте указаниям на этикетке и не превышайте одну порцию в сутки. Если у вас есть вопросы о регулярном приёме, проконсультируйтесь с врачом.",
    },
    {
      question: "Можно ли сочетать с другими добавками?",
      answer:
        "Его можно использовать вместе с совместимыми продуктами спортивного питания, но избегайте дополнительных добавок с кофеином, если врач не рекомендовал иное.",
    },
    {
      question: "Доступен ли продукт в вашей стране ({name})?",
      answer:
        "Пожалуйста, перед заказом уточните наличие и условия доставки для страны {name} в официальном магазине. Покупайте только на официальном сайте Promolecules или у авторизованных продавцов, чтобы получить оригинальный продукт.",
    },
  ],
  buy_h: "Где купить",
  worldwide_h: "Promolecules в мире",
  quantity: "Количество",
  description_h: "Описание",
  faq_kicker: "Вопросы и ответы",
  faq_title: "Всё, что нужно знать о Father of Insane™",
  faq_sub: "Ответы на частые вопросы о составе, приёме и безопасности.",
  disclaimer:
    "Биологически активная добавка. Результаты зависят от тренировок, питания и индивидуальной переносимости. Не является лекарственным средством и не предназначена для диагностики, лечения или профилактики заболеваний.",
};

const ms = {
  badge: "Pra-Latihan Ultra Stimulan Tinggi",
  tag: "Dihasilkan untuk atlet berpengalaman yang berlatih dengan intensiti tinggi.",
  warn: "Tidak sesuai untuk pemula. Hanya untuk pengguna lanjutan.",
  price_from: "Harga asas bermula daripada US${price}",
  price_local: "Harga: {price}",
  cities: ", dari {cities},",
  local_cur: "Mata wang tempatan: {cur}",
  cta: "Lihat di kedai rasmi",
  quote_cta: "Minta sebut harga",
  quote_p: "Hubungi kami untuk sebut harga dan butiran penghantaran {loc}.",
  flavour: "Perisa",
  servings: "Hidangan",
  intro:
    "Father of Insane™ daripada Promolecules ialah suplemen pra-latihan berstimulan sangat tinggi untuk orang dewasa yang sihat dan sudah biasa menggunakan produk yang mengandungi stimulan. Untuk atlet {loc}{cities} yang berlatih untuk kekuatan, kuasa dan latihan intensiti tinggi, ia menawarkan adunan proprietari 5200 mg yang pekat dengan tiga sumber kafein dan dua bentuk kreatin.",
  stats: ["kafein setiap hidangan", "adunan proprietari", "hidangan", "perisa"],
  ingredients_h: "Kandungan",
  ingredients_p: "Adunan proprietari 5200 mg mengandungi:",
  howto_h: "Cara penggunaan",
  steps: [
    "Mulakan dengan ½ sudu penyukat dalam 120–180 ml air kira-kira 30 minit sebelum latihan untuk menilai toleransi anda.",
    "Jika toleransi baik, gunakan 1 sudu penuh dalam 240–300 ml air kira-kira 30 minit sebelum latihan.",
    "Jangan melebihi satu sudu sehari.",
  ],
  who_h: "Sesuai untuk siapa?",
  who: [
    "Pengunjung gim lanjutan dan ahli bina badan",
    "Atlet kekuatan dan pengangkat berat",
    "Peminat latihan silang dan pengguna berpengalaman pra-latihan yang mengandungi stimulan",
  ],
  skip_h: "Siapa yang tidak patut menggunakannya?",
  skip_p:
    "Pemula, individu yang sensitif terhadap kafein atau stimulan lain, serta wanita hamil atau menyusu. Jika anda mempunyai keadaan perubatan atau mengambil ubat, dapatkan nasihat profesional penjagaan kesihatan terlebih dahulu.",
  facts_h: "Fakta suplemen",
  safety_h: "Maklumat keselamatan",
  safety: [
    "Hanya untuk orang dewasa yang sihat.",
    "Tidak sesuai untuk pemula.",
    "Jangan melebihi hidangan yang disyorkan.",
    "Elakkan menggabungkan dengan produk lain yang mengandungi kafein.",
    "Jauhkan daripada capaian kanak-kanak.",
    "Simpan di tempat yang sejuk dan kering.",
  ],
  faq_h: "Soalan lazim",
  faq: [
    {
      question: "Adakah ia mengandungi kafein?",
      answer:
        "Ya. Ia menggunakan Caffeine Anhydrous, Dicaffeine Malate (2XCaff®) dan Caffeine Citrate (Citra Caff®), dengan jumlah kafein 450 mg setiap hidangan.",
    },
    {
      question: "Adakah ia mengandungi kreatin?",
      answer: "Ya: Creatine Monohydrate dan Creatine HCl (CreaCCL®).",
    },
    {
      question: "Bolehkah saya mengambilnya setiap hari?",
      answer:
        "Ikut arahan pada label dan jangan melebihi satu hidangan sehari. Rujuk profesional penjagaan kesihatan jika anda ada soalan tentang penggunaan berkala.",
    },
    {
      question: "Bolehkah ia digabungkan dengan suplemen lain?",
      answer:
        "Ia boleh digunakan bersama produk pemakanan sukan yang sesuai, tetapi elakkan suplemen berkafein tambahan melainkan dinasihatkan oleh profesional penjagaan kesihatan.",
    },
    {
      question: "Adakah ia tersedia {loc}?",
      answer:
        "Sila sahkan ketersediaan dan syarat penghantaran ke {name} di kedai rasmi sebelum membuat pesanan. Beli hanya daripada laman rasmi Promolecules atau penjual yang dibenarkan untuk memastikan produk tulen.",
    },
  ],
  buy_h: "Di mana nak beli",
  worldwide_h: "Promolecules di seluruh dunia",
  quantity: "Kuantiti",
  description_h: "Penerangan",
  faq_kicker: "Soalan lazim",
  faq_title: "Semua yang perlu anda tahu tentang Father of Insane™",
  faq_sub: "Jawapan kepada soalan lazim tentang kandungan, penggunaan dan keselamatan.",
  disclaimer:
    "Suplemen makanan. Hasil berbeza mengikut latihan, pemakanan dan toleransi individu. Tidak bertujuan untuk mendiagnosis, merawat, menyembuhkan atau mencegah sebarang penyakit.",
};

const pt = {
  badge: "Pré-treino de ultra alto estímulo",
  tag: "Feito para atletas experientes que treinam pesado.",
  warn: "Não é para iniciantes. Apenas para usuários avançados.",
  price_from: "Preço-base a partir de US$ {price}",
  price_local: "Preço: {price}",
  cities: " — de {cities} a todo o país —",
  local_cur: "Moeda local: {cur}",
  cta: "Ver na loja oficial",
  quote_cta: "Solicitar orçamento",
  quote_p: "Fale conosco para receber um orçamento e as condições de entrega {loc}.",
  flavour: "Sabor",
  servings: "Doses",
  intro:
    "O Father of Insane™, da Promolecules, é um pré-treino com teor muito alto de estimulantes para adultos saudáveis que já usam produtos com estimulantes. Para atletas {loc}{cities} que treinam força, potência e alta intensidade, ele traz uma mistura proprietária concentrada de 5200 mg, com três fontes de cafeína e duas formas de creatina.",
  stats: ["de cafeína por dose", "mistura proprietária", "doses", "sabores"],
  ingredients_h: "Composição",
  ingredients_p: "A mistura proprietária de 5200 mg contém:",
  howto_h: "Como usar",
  steps: [
    "Comece com ½ scoop em 120–180 ml de água, cerca de 30 minutos antes do treino, para avaliar sua tolerância.",
    "Se tolerar bem, use 1 scoop cheio em 240–300 ml de água, cerca de 30 minutos antes do treino.",
    "Não exceda um scoop por dia.",
  ],
  who_h: "Para quem é",
  who: [
    "Frequentadores avançados de academia e fisiculturistas",
    "Atletas de força e powerlifters",
    "Praticantes de treino cruzado e usuários experientes de pré-treinos com estimulantes",
  ],
  skip_h: "Quem não deve usar",
  skip_p:
    "Iniciantes, pessoas sensíveis à cafeína ou a outros estimulantes, gestantes e lactantes. Se você tem alguma condição médica ou usa medicamentos, consulte um profissional de saúde antes.",
  facts_h: "Informação nutricional",
  safety_h: "Informações de segurança",
  safety: [
    "Apenas para adultos saudáveis.",
    "Não é para iniciantes.",
    "Não exceda a porção recomendada.",
    "Evite combinar com outros produtos que contenham cafeína.",
    "Mantenha fora do alcance de crianças.",
    "Armazene em local fresco e seco.",
  ],
  faq_h: "Perguntas frequentes",
  faq: [
    {
      question: "Contém cafeína?",
      answer:
        "Sim. Usa Caffeine Anhydrous, Dicaffeine Malate (2XCaff®) e Caffeine Citrate (Citra Caff®), totalizando 450 mg de cafeína por dose.",
    },
    {
      question: "Contém creatina?",
      answer: "Sim: Creatine Monohydrate e Creatine HCl (CreaCCL®).",
    },
    {
      question: "Posso tomar todos os dias?",
      answer:
        "Siga as orientações do rótulo e nunca exceda uma dose por dia. Consulte um profissional de saúde se tiver dúvidas sobre o uso regular.",
    },
    {
      question: "Posso combinar com outros suplementos?",
      answer:
        "Pode ser usado com produtos compatíveis de nutrição esportiva, mas evite suplementos adicionais com cafeína, a menos que orientado por um profissional de saúde.",
    },
    {
      question: "Está disponível {loc}?",
      answer:
        "Confirme a disponibilidade e as condições de entrega {loc} na loja oficial antes de comprar. Compre apenas no site oficial da Promolecules ou em vendedores autorizados para garantir que o produto é original.",
    },
  ],
  buy_h: "Onde comprar",
  worldwide_h: "Promolecules pelo mundo",
  quantity: "Quantidade",
  description_h: "Descrição",
  faq_kicker: "Perguntas frequentes",
  faq_title: "Tudo o que você precisa saber sobre o Father of Insane™",
  faq_sub: "Respostas às perguntas mais comuns sobre composição, uso e segurança.",
  disclaimer:
    "Suplemento alimentar. Os resultados variam conforme o treino, a alimentação e a tolerância individual. Não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença.",
};

// French: from the Father of Insane Haiti page supplied. Labels marked (*) were not in the page.
const fr = {
  badge: "Pré-entraînement ultra haute stimulation",
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
    "Father of Insane™ de Promolecules est un pré-entraînement très fortement dosé en stimulants, destiné aux adultes en bonne santé qui consomment déjà des produits contenant des stimulants. Pour les athlètes {loc}{cities} qui s'entraînent pour la force, la puissance et les efforts de haute intensité, il propose un mélange exclusif concentré de 5200 mg, avec trois sources de caféine et deux formes de créatine.",
  stats: ["de caféine par portion", "mélange exclusif", "portions", "saveurs"],
  ingredients_h: "Composition",
  ingredients_p: "Le mélange exclusif de 5200 mg contient :",
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
    "Réservé aux adultes en bonne santé.",
    "Déconseillé aux débutants.",
    "Ne pas dépasser la portion recommandée.",
    "Éviter de l'associer à d'autres produits contenant de la caféine.",
    "Tenir hors de portée des enfants.",
    "Conserver dans un endroit frais et sec.",
  ],
  faq_h: "Questions fréquentes",
  faq: [
    {
      question: "Contient-il de la caféine ?",
      answer:
        "Oui. Il associe Caffeine Anhydrous, Dicaffeine Malate (2XCaff®) et Caffeine Citrate (Citra Caff®), pour un total de 450 mg de caféine par portion.",
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
  faq_title: "Tout ce qu'il faut savoir sur Father of Insane™", // (*)
  faq_sub: "Réponses aux questions les plus courantes sur la composition, l'utilisation et la sécurité.", // (*)
  disclaimer:
    "Complément alimentaire. Les résultats varient selon l'entraînement, l'alimentation et la tolérance individuelle. Ne vise pas à diagnostiquer, traiter, guérir ou prévenir une maladie.",
};

// Persian (Iran, right-to-left): from the Father of Insane Iran page supplied. (*) = not in the page.
const fa = {
  badge: "پیش‌تمرین فوق‌محرک",
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
    "«Father of Insane™» از پرومولکیولز یک مکمل پیش‌تمرین با محرک بسیار بالا برای بزرگسالان سالمی است که پیش‌تر از محصولات دارای محرک استفاده کرده‌اند. برای ورزشکاران {loc}{cities} که برای قدرت، توان و تمرینات پرشدت تمرین می‌کنند، یک ترکیب متمرکز اختصاصی ۵۲۰۰ میلی‌گرمی با سه منبع کافئین و دو شکل کراتین ارائه می‌دهد.",
  stats: ["کافئین در هر وعده", "ترکیب اختصاصی", "وعده", "طعم"],
  ingredients_h: "ترکیبات",
  ingredients_p: "ترکیب اختصاصی ۵۲۰۰ میلی‌گرمی شامل:",
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
    "فقط برای بزرگسالان سالم.",
    "مناسب مبتدی‌ها نیست.",
    "از مقدار توصیه‌شده بیشتر مصرف نکنید.",
    "از ترکیب با سایر محصولات حاوی کافئین خودداری کنید.",
    "دور از دسترس کودکان نگه دارید.",
    "در جای خنک و خشک نگهداری کنید.",
  ],
  faq_h: "پرسش و پاسخ",
  faq: [
    {
      question: "آیا کافئین دارد؟",
      answer:
        "بله. شامل کافئین بی‌آب، دی‌کافئین مالات (2XCaff®) و کافئین سیترات (Citra Caff®) است و مجموع کافئین ۴۵۰ میلی‌گرم در هر وعده است.",
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
  faq_title: "هر آنچه باید درباره Father of Insane™ بدانید", // (*)
  faq_sub: "پاسخ پرسش‌های رایج درباره ترکیبات، نحوه مصرف و ایمنی.", // (*)
  disclaimer:
    "مکمل غذایی. نتایج بر اساس تمرین، تغذیه و تحمل فردی متفاوت است. برای تشخیص، درمان یا پیشگیری از هیچ بیماری نیست.",
};

const FOI_TEXT = { en, ar, es, uz, sw, ru, ms, pt, fr, fa };

/**
 * Main cities named in the intro, per country site (in that site's language).
 * Countries not listed simply show no cities.
 */
export const FOI_CITIES = {
  ae: "دبي وأبوظبي والشارقة",
  ar: "Buenos Aires, Córdoba y Rosario",
  ve: "Caracas, Maracaibo y Valencia",
  uy: "Montevideo, Punta del Este y Salto",
  uz: "Toshkent, Samarqand va Buxoro",
  tz: "Dar es Salaam, Dodoma na Arusha",
  tn: "تونس العاصمة وصفاقس وسوسة",
  sy: "دمشق وحلب وحمص",
  sa: "الرياض وجدة والدمام",
  qa: "الدوحة ولوسيل والوكرة",
  sv: "San Salvador, Santa Ana y San Miguel",
  py: "Asunción, Ciudad del Este y Encarnación",
  pr: "San Juan, Ponce y Bayamón",
  pe: "Lima, Arequipa y Trujillo",
  pa: "Ciudad de Panamá, Colón y David",
  hn: "Tegucigalpa, San Pedro Sula y La Ceiba",
  kw: "مدينة الكويت وحولي والفروانية",
  iq: "بغداد وأربيل والبصرة",
  jo: "عمّان وإربد والعقبة",
  kg: "Бишкека, Оша и Джалал-Абада", // Russian genitive ("от …")
  kz: "Алматы, Астаны и Шымкента",
  lb: "بيروت وطرابلس وصيدا",
  ly: "طرابلس وبنغازي ومصراتة",
  ma: "الدار البيضاء والرباط ومراكش",
  om: "مسقط وصلالة وصحار",
  ni: "Managua, León y Granada",
  cl: "Santiago, Valparaíso y Concepción",
  co: "Bogotá, Medellín y Cali",
  cr: "San José, Heredia y Alajuela",
  cu: "La Habana, Santiago de Cuba y Camagüey",
  do: "Santo Domingo, Santiago de los Caballeros y Punta Cana",
  ec: "Quito, Guayaquil y Cuenca",
  dz: "الجزائر العاصمة ووهران وقسنطينة",
  eg: "القاهرة والإسكندرية والجيزة",
  gt: "Ciudad de Guatemala, Quetzaltenango y Antigua",
  br: "São Paulo, Rio de Janeiro e Belo Horizonte",
  bz: "Belize City, San Ignacio and Belmopan", // English site
  ht: "Port-au-Prince, Cap-Haïtien et Pétion-Ville", // French site
  ir: "تهران، اصفهان و شیراز", // Persian site
  my: "Kuala Lumpur, Petaling Jaya dan Johor Bahru",
  tm: "Ашхабада, Туркменабата и Дашогуза", // Russian genitive ("от …")
  tj: "Душанбе, Худжанда и Бохтара",
};

export const getFoiText = (lang) => FOI_TEXT[lang] ?? en;

/** Translated text for a non-English site, or null (English pages keep productsdetail.json). */
export const getFoiTranslation = (lang) => (lang !== "en" && FOI_TEXT[lang]) || null;

// Brand / ingredient names stay in Latin script in every language (as on the label).
export const FOI_INGREDIENTS = [
  "Beta-Alanine",
  "Creatine Monohydrate",
  "Creatine HCl (CreaCCL®)",
  "L-Citrulline",
  "Betaine Anhydrous",
  "Caffeine Anhydrous",
  "Citrus Aurantium Extract (Citrusyn® 30)",
  "Dicaffeine Malate (2XCaff®)",
  "Caffeine Citrate (Citra Caff®)",
];

export const FOI_STATS = ["450 mg", "5200 mg", "35 / 65", "4"];

/** Everything the country product page needs for Father of Insane™. */
export const FOI_CONTENT = {
  name: "Father of Insane™",
  getText: getFoiText,
  ingredients: FOI_INGREDIENTS,
  stats: FOI_STATS,
};
