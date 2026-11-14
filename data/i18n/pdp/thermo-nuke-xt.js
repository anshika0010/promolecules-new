// Thermo Nuke XT™ product page text, per site language.
// Uses the same layout as the other products (CountryProductPage). Shared labels (headings, quote button,
// "where to buy"…) come from the Father of Insane™ text; everything product-specific is overridden here.
// {loc} → "في الإمارات" / "en Argentina" / "O'zbekistonda" / "nchini Tanzania"; {cities} → city list from FOI_CITIES.
// All 10 site languages are written. `langs` limits the country layout to the languages below,
// so a new site language keeps the standard product page until its text is added here.

import { getFoiText } from "./father-of-insane";

// Arabic: from the Thermo Nuke XT UAE page supplied.
const ar = {
  ...getFoiText("ar"),
  badge: "حارق دهون حراري متعدد المنبهات",
  tag: "مصنوع للمستخدمين المتقدمين في فترات التنشيف وعجز السعرات.",
  warn: "تحذير: غير مخصص للمبتدئين. للمستخدمين المتقدمين فقط.",
  servings: "حجم العبوة",
  intro:
    "Thermo Nuke XT™ من برومولكيولز تركيبة حرارية عالية المنبهات، مصممة لدعم النشاط الأيضي وحرارة الجسم مع الحفاظ على الطاقة والتركيز. وللرياضيين ذوي الخبرة {loc}{cities} في فترات التنشيف وعجز السعرات، هو ليس حارق دهون خفيفاً، بل نظام حراري متعدد المنبهات. تناول الحصة الأولى بحذر وأبقِ الماء قريباً.",
  stats: ["كبسولة في العبوة", "خليط حراري", "حصص يومياً كحد أقصى", "الحد الأدنى للعمر (سنة)"],
  steps: [
    "تناول حصة واحدة صباحاً. اتبع الملصق لمعرفة عدد الكبسولات في الحصة.",
    "يمكنك تناول حصة ثانية اختيارية قبل التمرين.",
    "الأفضل استخدامه خلال فترات عجز السعرات. لا تجمعه مع منتجات أخرى تحتوي على منبهات.",
  ],
  who: [
    "الرياضيون ذوو الخبرة في فترات التنشيف",
    "من هم في فترة عجز السعرات",
    "مستخدمو المنتجات المحتوية على منبهات ذوو الخبرة",
  ],
  skip_p:
    "المبتدئون، والحساسون للكافيين أو المنبهات الأخرى، ومن هم دون 18 عاماً، والحوامل والمرضعات. وإذا كنت تتناول أدوية بوصفة طبية أو لديك حالة صحية، فاستشر مختصاً في الرعاية الصحية قبل الاستخدام.",
  safety: [
    "للبالغين الأصحاء من عمر 18 عاماً فأكثر.",
    "استخدمه بحذر إذا كنت حساساً للكافيين أو المنبهات الأخرى.",
    "لا تجمعه مع منتجات أخرى تحتوي على منبهات.",
    "إذا كنت تتناول أدوية بوصفة طبية أو لديك حالة صحية، استشر مختصاً في الرعاية الصحية قبل الاستخدام.",
    "لا يُستخدم أثناء الحمل أو الرضاعة.",
    "يُحفظ بعيداً عن متناول الأطفال.",
    "يُخزَّن في مكان بارد وجاف.",
  ],
  faq: [
    {
      question: "ما هو Thermo Nuke XT™؟",
      answer:
        "Thermo Nuke XT™ تركيبة حرارية عالية المنبهات، مصممة لدعم النشاط الأيضي وحرارة الجسم مع الحفاظ على الطاقة والتركيز. ليس حارق دهون خفيفاً: فهو مصنوع للمستخدمين المتقدمين في فترات التنشيف وعجز السعرات.",
    },
    {
      question: "من يجب أن يستخدم Thermo Nuke XT™؟",
      answer:
        "الرياضيون ذوو الخبرة في فترات التنشيف، ومن هم في فترة عجز السعرات، ومستخدمو المنتجات المحتوية على منبهات ذوو الخبرة.",
    },
    {
      question: "كيف أتناول Thermo Nuke XT™؟",
      answer:
        "تناول حصة واحدة صباحاً مع حصة ثانية اختيارية قبل التمرين. الأفضل استخدامه خلال فترات عجز السعرات. اتبع الملصق لمعرفة عدد الكبسولات في الحصة.",
    },
    {
      question: "هل Thermo Nuke XT™ مناسب للمبتدئين؟",
      answer:
        "لا. لا يُنصح باستخدام Thermo Nuke XT™ للمبتدئين أو للحساسين للمنبهات. فهو مخصص للمستخدمين ذوي الخبرة.",
    },
    {
      question: "هل Thermo Nuke XT™ حارق دهون يحتوي على منبهات؟",
      answer:
        "نعم. يعتمد على نظام حراري متعدد المنبهات. استخدمه بحذر إذا كنت حساساً للكافيين أو المنبهات الأخرى، ولا تجمعه مع منتجات أخرى تحتوي على منبهات.",
    },
    {
      question: "ما أفضل وقت لتناول Thermo Nuke XT™؟",
      answer:
        "تناول حصة واحدة صباحاً مع حصة ثانية اختيارية قبل التمرين. الأفضل استخدامه خلال فترات عجز السعرات. اتبع الملصق لمعرفة عدد الكبسولات في الحصة.",
    },
    {
      question: "ما الفوائد الرئيسية لـ Thermo Nuke XT™؟",
      answer:
        "يدعم النشاط الأيضي والحرارة الحرارية، ويدعم حرق الدهون خلال فترات عجز السعرات، ويمنح طاقة عالية بتركيبة متعددة المنبهات، ويدعم التركيز خلال فترات التنشيف. مصنوع لفترات التنشيف وأهداف التحول الجادة.",
    },
    {
      question: "أين أشتري Thermo Nuke XT™؟",
      answer:
        "يُباع Thermo Nuke XT™ عبر موقع Promolecules™ الرسمي. افتح صفحة بلدك أو استخدم الصفحة العالمية.",
    },
    {
      question: "هل يمكنني طلب Thermo Nuke XT™ {loc}؟",
      answer:
        "يُباع Thermo Nuke XT™ عبر موقع Promolecules™ الرسمي. تختلف قواعد التوصيل والاستيراد من بلد لآخر، فتحقق مما ينطبق {loc} وتواصل معنا قبل الطلب.",
    },
  ],
  faq_title: "كل ما تحتاج معرفته عن Thermo Nuke XT™",
};

// Spanish: from the Thermo Nuke XT Argentina / Venezuela pages supplied.
const es = {
  ...getFoiText("es"),
  badge: "Quemagrasas termogénico multiestimulante",
  tag: "Hecho para usuarios avanzados en fases de definición y déficit calórico.",
  warn: "Advertencia: no es para principiantes. Solo para usuarios avanzados.",
  servings: "Presentación",
  intro:
    "Thermo Nuke XT™ de Promolecules es una fórmula termogénica de alto estímulo, diseñada para apoyar el rendimiento metabólico y el calor corporal sin perder energía ni enfoque. Para los atletas con experiencia {loc}{cities} en fases de definición y de déficit calórico, no es un quemagrasas suave, sino un sistema termogénico multiestimulante. Toma la primera porción con cuidado y ten agua a mano.",
  stats: ["cápsulas por frasco", "mezcla termogénica", "porciones al día como máximo", "edad mínima (años)"],
  steps: [
    "Toma una porción por la mañana. Sigue la etiqueta para saber cuántas cápsulas tomar por porción.",
    "Puedes tomar una segunda porción opcional antes de entrenar.",
    "Se usa mejor durante fases de déficit calórico. No lo combines con otros productos con estimulantes.",
  ],
  who: [
    "Atletas con experiencia en fases de definición",
    "Personas en una fase de déficit calórico",
    "Usuarios experimentados de productos con estimulantes",
  ],
  skip_p:
    "Principiantes, personas sensibles a la cafeína u otros estimulantes, menores de 18 años y mujeres embarazadas o en período de lactancia. Si tomas medicamentos recetados o tienes una condición médica, consulta a un profesional de la salud antes de usarlo.",
  safety: [
    "Para adultos sanos de 18 años o más.",
    "Úsalo con precaución si eres sensible a la cafeína u otros estimulantes.",
    "No lo combines con otros productos que contengan estimulantes.",
    "Si tomas medicamentos recetados o tienes una condición médica, consulta a un profesional de la salud antes de usarlo.",
    "No usar durante el embarazo o la lactancia.",
    "Mantener fuera del alcance de los niños.",
    "Guardar en un lugar fresco y seco.",
  ],
  faq: [
    {
      question: "¿Qué es Thermo Nuke XT™?",
      answer:
        "Thermo Nuke XT™ es una fórmula termogénica de alto estímulo, diseñada para apoyar el rendimiento metabólico y el calor corporal sin perder energía ni enfoque. No es un quemagrasas suave: está hecha para usuarios avanzados en fases de definición y de déficit calórico.",
    },
    {
      question: "¿Quién debería usar Thermo Nuke XT™?",
      answer:
        "Atletas con experiencia en fases de definición, personas en una fase de déficit calórico y usuarios experimentados de productos con estimulantes.",
    },
    {
      question: "¿Cómo se toma Thermo Nuke XT™?",
      answer:
        "Toma una porción por la mañana, con una segunda porción opcional antes de entrenar. Se usa mejor durante fases de déficit calórico. Sigue la etiqueta para saber cuántas cápsulas tomar por porción.",
    },
    {
      question: "¿Thermo Nuke XT™ es apto para principiantes?",
      answer:
        "No. Thermo Nuke XT™ no se recomienda para principiantes ni para personas sensibles a los estimulantes. Está hecho para usuarios con experiencia.",
    },
    {
      question: "¿Thermo Nuke XT™ es un quemagrasas con estimulantes?",
      answer:
        "Sí. Usa un sistema termogénico multiestimulante. Úsalo con precaución si eres sensible a la cafeína o a otros estimulantes, y no lo combines con otros productos que contengan estimulantes.",
    },
    {
      question: "¿Cuándo es mejor tomar Thermo Nuke XT™?",
      answer:
        "Toma una porción por la mañana, con una segunda porción opcional antes de entrenar. Se usa mejor durante fases de déficit calórico. Sigue la etiqueta para saber cuántas cápsulas tomar por porción.",
    },
    {
      question: "¿Cuáles son los beneficios clave de Thermo Nuke XT™?",
      answer:
        "Apoya el rendimiento metabólico y el calor termogénico, apoya la quema de grasa durante fases de déficit calórico, da una alta salida de energía con una fórmula multiestimulante y apoya el enfoque durante la definición. Hecha para fases de definición y metas de transformación serias.",
    },
    {
      question: "¿Dónde puedo comprar Thermo Nuke XT™?",
      answer:
        "Thermo Nuke XT™ se vende en el sitio oficial de Promolecules™. Abre la página de tu país o usa la página global.",
    },
    {
      question: "¿Puedo pedir Thermo Nuke XT™ {loc}?",
      answer:
        "Thermo Nuke XT™ se vende en el sitio oficial de Promolecules™. La entrega y las reglas de importación cambian según el país, así que revisa qué aplica {loc} y escríbenos antes de pedir.",
    },
  ],
  faq_title: "Todo lo que necesitas saber sobre Thermo Nuke XT™",
};

// Uzbek: from the Thermo Nuke XT Uzbekistan page supplied. {name} = "O'zbekiston", {loc} = "O'zbekistonda".
const uz = {
  ...getFoiText("uz"),
  badge: "Ko'p stimulyatorli termogen yog' yoquvchi",
  tag: "Cutting davrlari va kaloriya taqchilligidagi ilg'or foydalanuvchilar uchun.",
  warn: "Ogohlantirish: yangi boshlovchilar uchun emas. Faqat ilg'or foydalanuvchilar uchun.",
  servings: "Qadoq hajmi",
  intro:
    "Promolecules'ning Thermo Nuke XT™ mahsuloti — energiya va diqqatni saqlagan holda moddalar almashinuvi faolligi va tana haroratini qo'llab-quvvatlash uchun yaratilgan yuqori stimulyatorli termogen formula. {name}ning tajribali sportchilari{cities} quritish (cutting) va kaloriya taqchilligi davrida undan foydalanadi: bu yengil yog' yoquvchi emas, balki ko'p stimulyatorli termogen tizim. Birinchi porsiyani ehtiyotkorlik bilan oling va suvni yoningizda saqlang.",
  stats: ["kapsula qadoqda", "termogen aralashma", "kuniga eng ko'p porsiya", "minimal yosh (yil)"],
  steps: [
    "Ertalab bir porsiya iching. Bir porsiyadagi kapsulalar sonini yorliqdan qarang.",
    "Xohlasangiz, mashg'ulotdan oldin ikkinchi porsiyani ichishingiz mumkin.",
    "Kaloriya taqchilligi davrida ishlatgan ma'qul. Stimulyatorli boshqa mahsulotlar bilan birga ishlatmang.",
  ],
  who: [
    "Cutting davridagi tajribali sportchilar",
    "Kaloriya taqchilligi davridagi odamlar",
    "Stimulyatorli mahsulotlardan tajribali foydalanuvchilar",
  ],
  skip_p:
    "Yangi boshlovchilar, kofein yoki boshqa stimulyatorlarga sezgir odamlar, 18 yoshga to'lmaganlar, homilador va emizikli ayollar. Retsept bo'yicha dori qabul qilsangiz yoki kasalligingiz bo'lsa, ishlatishdan oldin shifokor bilan maslahatlashing.",
  safety: [
    "18 yosh va undan katta sog'lom kattalar uchun.",
    "Kofeinga yoki boshqa stimulyatorlarga sezgir bo'lsangiz, ehtiyotkorlik bilan ishlating.",
    "Stimulyator saqlovchi boshqa mahsulotlar bilan birga ishlatmang.",
    "Retsept bo'yicha dori qabul qilsangiz yoki kasalligingiz bo'lsa, ishlatishdan oldin shifokor bilan maslahatlashing.",
    "Homiladorlik va emizish davrida ishlatilmasin.",
    "Bolalar yetmaydigan joyda saqlang.",
    "Salqin va quruq joyda saqlang.",
  ],
  faq: [
    {
      question: "Thermo Nuke XT™ nima?",
      answer:
        "Thermo Nuke XT™ — energiya va diqqatni saqlagan holda moddalar almashinuvi faolligi va tana haroratini qo'llab-quvvatlash uchun yaratilgan yuqori stimulyatorli termogen formula. Bu yengil yog' yoquvchi emas: u quritish (cutting) davrlari va kaloriya taqchilligi vaqtidagi ilg'or foydalanuvchilar uchun mo'ljallangan.",
    },
    {
      question: "Thermo Nuke XT™ni kimlar ishlatishi mumkin?",
      answer:
        "Cutting davridagi tajribali sportchilar, kaloriya taqchilligi davridagi odamlar va stimulyatorli mahsulotlardan tajribali foydalanuvchilar.",
    },
    {
      question: "Thermo Nuke XT™ni qanday qabul qilaman?",
      answer:
        "Ertalab bir porsiya iching, xohlasangiz mashg'ulotdan oldin ikkinchi porsiya. Uni kaloriya taqchilligi davrida ishlatgan ma'qul. Bir porsiyadagi kapsulalar sonini yorliqdan qarang.",
    },
    {
      question: "Thermo Nuke XT™ yangi boshlovchilar uchun mosmi?",
      answer:
        "Yo'q. Thermo Nuke XT™ yangi boshlovchilar va stimulyatorlarga sezgir odamlarga tavsiya etilmaydi. U tajribali foydalanuvchilar uchun yaratilgan.",
    },
    {
      question: "Thermo Nuke XT™ stimulyatorli yog' yoquvchimi?",
      answer:
        "Ha. U ko'p stimulyatorli termogen tizimdan foydalanadi. Kofeinga yoki boshqa stimulyatorlarga sezgir bo'lsangiz, ehtiyotkorlik bilan ishlating va stimulyator saqlovchi boshqa mahsulotlar bilan birga ishlatmang.",
    },
    {
      question: "Thermo Nuke XT™ni qachon ichish yaxshi?",
      answer:
        "Ertalab bir porsiya iching, xohlasangiz mashg'ulotdan oldin ikkinchi porsiya. Uni kaloriya taqchilligi davrida ishlatgan ma'qul. Bir porsiyadagi kapsulalar sonini yorliqdan qarang.",
    },
    {
      question: "Thermo Nuke XT™ning asosiy afzalliklari nimada?",
      answer:
        "Moddalar almashinuvi faolligi va termogen issiqlikni, kaloriya taqchilligi davrida yog' yonishini va cutting davrida diqqatni qo'llab-quvvatlaydi, ko'p stimulyatorli formuladan yuqori energiya beradi. Cutting davrlari va jiddiy o'zgarish maqsadlari uchun yaratilgan.",
    },
    {
      question: "Thermo Nuke XT™ni qayerdan sotib olaman?",
      answer:
        "Thermo Nuke XT™ Promolecules™ ning rasmiy saytida sotiladi. Mamlakatingiz sahifasini yoki global sahifani oching.",
    },
    {
      question: "Thermo Nuke XT™ ga {loc} buyurtma bersam bo'ladimi?",
      answer:
        "Thermo Nuke XT™ Promolecules™ ning rasmiy saytida sotiladi. Yetkazib berish va import qoidalari mamlakatga qarab farq qiladi, shuning uchun buyurtma berishdan oldin {loc} nima amal qilishini tekshiring va biz bilan bog'laning.",
    },
  ],
  faq_title: "Thermo Nuke XT™ haqida bilishingiz kerak bo'lgan hamma narsa",
};

// Swahili: from the Thermo Nuke XT Tanzania page supplied. {loc} = "nchini Tanzania".
const sw = {
  ...getFoiText("sw"),
  badge: "Kichoma mafuta cha thermogenic chenye vichocheo vingi",
  tag: "Kimeundwa kwa watumiaji wa hali ya juu katika cutting na upungufu wa kalori.",
  warn: "Onyo: si kwa wanaoanza. Kwa watumiaji wa hali ya juu pekee.",
  servings: "Ukubwa wa chupa",
  intro:
    "Thermo Nuke XT™ kutoka Promolecules ni fomula ya thermogenic yenye vichocheo vingi, iliyotengenezwa kusaidia shughuli za kimetaboliki na joto la mwili huku ikiweka nishati na umakini juu. Kwa wanamichezo wenye uzoefu {loc}{cities} katika vipindi vya cutting na upungufu wa kalori, si kichoma mafuta laini bali mfumo wa thermogenic wenye vichocheo vingi. Chukua kipimo cha kwanza kwa tahadhari na uwe na maji karibu.",
  stats: ["vidonge kwa chupa", "mchanganyiko wa thermogenic", "vipimo kwa siku (upeo)", "umri wa chini (miaka)"],
  steps: [
    "Tumia kipimo kimoja asubuhi. Fuata lebo kwa idadi ya vidonge kwa kipimo.",
    "Unaweza kutumia kipimo cha pili cha hiari kabla ya mazoezi.",
    "Kinafaa zaidi wakati wa upungufu wa kalori. Usichanganye na bidhaa nyingine zenye vichocheo.",
  ],
  who: [
    "Wanamichezo wenye uzoefu katika vipindi vya cutting",
    "Watu walio katika kipindi cha upungufu wa kalori",
    "Watumiaji wenye uzoefu wa bidhaa zenye vichocheo",
  ],
  skip_p:
    "Wanaoanza, watu nyeti kwa kafeini au vichocheo vingine, walio chini ya miaka 18, na wanawake wajawazito au wanaonyonyesha. Ukitumia dawa za daktari au una hali ya kiafya, wasiliana na mtaalamu wa afya kabla ya kutumia.",
  safety: [
    "Kwa watu wazima wenye afya wenye umri wa miaka 18 na zaidi.",
    "Tumia kwa tahadhari ukiwa nyeti kwa kafeini au vichocheo vingine.",
    "Usichanganye na bidhaa nyingine zenye vichocheo.",
    "Ukitumia dawa za daktari au una hali ya kiafya, wasiliana na mtaalamu wa afya kabla ya kutumia.",
    "Isitumike wakati wa ujauzito au kunyonyesha.",
    "Weka mbali na watoto.",
    "Hifadhi mahali penye ubaridi na pakavu.",
  ],
  faq: [
    {
      question: "Thermo Nuke XT™ ni nini?",
      answer:
        "Thermo Nuke XT™ ni fomula ya thermogenic yenye vichocheo vingi, iliyotengenezwa kusaidia shughuli za kimetaboliki na joto la mwili huku ikiweka nishati na umakini juu. Si kichoma mafuta laini: kimeundwa kwa watumiaji wa hali ya juu katika vipindi vya cutting na upungufu wa kalori.",
    },
    {
      question: "Nani anapaswa kutumia Thermo Nuke XT™?",
      answer:
        "Wanamichezo wenye uzoefu katika vipindi vya cutting, watu walio katika kipindi cha upungufu wa kalori, na watumiaji wenye uzoefu wa bidhaa zenye vichocheo.",
    },
    {
      question: "Nitumieje Thermo Nuke XT™?",
      answer:
        "Tumia kipimo kimoja asubuhi, na kipimo cha pili cha hiari kabla ya mazoezi. Kinafaa zaidi wakati wa upungufu wa kalori. Fuata lebo kwa idadi ya vidonge kwa kipimo.",
    },
    {
      question: "Je, Thermo Nuke XT™ inafaa kwa wanaoanza?",
      answer:
        "Hapana. Thermo Nuke XT™ haipendekezwi kwa wanaoanza au watu wanaoathiriwa na vichocheo. Imetengenezwa kwa watumiaji wenye uzoefu.",
    },
    {
      question: "Je, Thermo Nuke XT™ ni kichoma mafuta chenye vichocheo?",
      answer:
        "Ndiyo. Kinatumia mfumo wa thermogenic wenye vichocheo vingi. Tumia kwa tahadhari ukiwa nyeti kwa kafeini au vichocheo vingine, na usichanganye na bidhaa nyingine zenye vichocheo.",
    },
    {
      question: "Ni wakati gani bora wa kutumia Thermo Nuke XT™?",
      answer:
        "Tumia kipimo kimoja asubuhi, na kipimo cha pili cha hiari kabla ya mazoezi. Kinafaa zaidi wakati wa upungufu wa kalori. Fuata lebo kwa idadi ya vidonge kwa kipimo.",
    },
    {
      question: "Faida kuu za Thermo Nuke XT™ ni zipi?",
      answer:
        "Husaidia shughuli za kimetaboliki na joto la thermogenic, husaidia kuchoma mafuta wakati wa upungufu wa kalori, hutoa nishati ya juu kutoka fomula yenye vichocheo vingi na husaidia umakini wakati wa cutting. Kimeundwa kwa vipindi vya cutting na malengo makubwa ya mabadiliko.",
    },
    {
      question: "Naweza kununua wapi Thermo Nuke XT™?",
      answer:
        "Thermo Nuke XT™ inauzwa kupitia tovuti rasmi ya Promolecules™. Fungua ukurasa wa nchi yako au tumia ukurasa wa kimataifa.",
    },
    {
      question: "Je, naweza kuagiza Thermo Nuke XT™ {loc}?",
      answer:
        "Thermo Nuke XT™ inauzwa kupitia tovuti rasmi ya Promolecules™. Sheria za uwasilishaji na uagizaji hutofautiana kati ya nchi, kwa hiyo angalia kinachotumika {loc} na wasiliana nasi kabla ya kuagiza.",
    },
  ],
  faq_title: "Kila unachohitaji kujua kuhusu Thermo Nuke XT™",
};

// Persian: from the Thermo Nuke XT Iran page supplied (Iran is on hold). {loc} = "در ایران".
const fa = {
  ...getFoiText("fa"),
  badge: "چربی‌سوز ترموژنیک چندمحرکه",
  tag: "ساخته‌شده برای کاربران پیشرفته در دوره‌های کات و کسری کالری.",
  warn: "هشدار: مناسب مبتدیان نیست. فقط برای کاربران پیشرفته.",
  servings: "اندازه بسته",
  intro:
    "Thermo Nuke XT™ از Promolecules یک فرمول ترموژنیک پرمحرک است که برای پشتیبانی از فعالیت متابولیک و گرمای بدن و حفظ انرژی و تمرکز طراحی شده است. برای ورزشکاران باتجربه {loc}{cities} در دوره‌های کات و کسری کالری، این یک چربی‌سوز ملایم نیست، بلکه یک سیستم ترموژنیک چندمحرکه است. اولین وعده را با احتیاط مصرف کنید و آب در دسترس داشته باشید.",
  stats: ["کپسول در بسته", "ترکیب ترموژنیک", "حداکثر وعده در روز", "حداقل سن (سال)"],
  steps: [
    "یک وعده صبح مصرف کنید. تعداد کپسول در هر وعده را از روی برچسب رعایت کنید.",
    "در صورت تمایل می‌توانید وعده دوم را پیش از تمرین مصرف کنید.",
    "بهتر است در دوره‌های کسری کالری استفاده شود. همراه با سایر محصولات محرک‌دار مصرف نکنید.",
  ],
  who: ["ورزشکاران باتجربه در دوره کات", "افراد در دوره کسری کالری", "کاربران باتجربه محصولات محرک‌دار"],
  skip_p:
    "مبتدیان، افراد حساس به کافئین یا سایر محرک‌ها، افراد زیر ۱۸ سال و زنان باردار یا شیرده. اگر دارو مصرف می‌کنید یا بیماری دارید، پیش از مصرف با متخصص سلامت مشورت کنید.",
  safety: [
    "برای بزرگسالان سالم ۱۸ سال به بالا.",
    "در صورت حساسیت به کافئین یا سایر محرک‌ها با احتیاط مصرف کنید.",
    "همراه با سایر محصولات حاوی محرک مصرف نکنید.",
    "اگر دارو مصرف می‌کنید یا بیماری دارید، پیش از مصرف با متخصص سلامت مشورت کنید.",
    "در دوران بارداری و شیردهی مصرف نشود.",
    "دور از دسترس کودکان نگهداری شود.",
    "در جای خنک و خشک نگهداری شود.",
  ],
  faq: [
    {
      question: "Thermo Nuke XT™ چیست؟",
      answer:
        "Thermo Nuke XT™ یک فرمول ترموژنیک پرمحرک است که برای پشتیبانی از فعالیت متابولیک و گرمای بدن و حفظ انرژی و تمرکز طراحی شده است. این یک چربی‌سوز ملایم نیست: برای کاربران پیشرفته در دوره‌های کات و کسری کالری ساخته شده است.",
    },
    {
      question: "چه کسانی باید از Thermo Nuke XT™ استفاده کنند؟",
      answer: "ورزشکاران باتجربه در دوره کات، افراد در دوره کسری کالری و کاربران باتجربه محصولات محرک‌دار.",
    },
    {
      question: "Thermo Nuke XT™ را چگونه مصرف کنم؟",
      answer:
        "یک وعده صبح و در صورت تمایل وعده دوم پیش از تمرین مصرف کنید. بهتر است در دوره‌های کسری کالری استفاده شود. تعداد کپسول در هر وعده را از روی برچسب رعایت کنید.",
    },
    {
      question: "آیا Thermo Nuke XT™ برای مبتدیان مناسب است؟",
      answer:
        "خیر. Thermo Nuke XT™ برای مبتدیان و افراد حساس به محرک‌ها توصیه نمی‌شود و برای کاربران باتجربه ساخته شده است.",
    },
    {
      question: "آیا Thermo Nuke XT™ چربی‌سوز محرک‌دار است؟",
      answer:
        "بله. از سیستم ترموژنیک چندمحرکه استفاده می‌کند. در صورت حساسیت به کافئین یا سایر محرک‌ها با احتیاط مصرف کنید و همراه با سایر محصولات محرک‌دار مصرف نکنید.",
    },
    {
      question: "بهترین زمان مصرف Thermo Nuke XT™ چه زمانی است؟",
      answer:
        "یک وعده صبح و در صورت تمایل وعده دوم پیش از تمرین مصرف کنید. بهتر است در دوره‌های کسری کالری استفاده شود. تعداد کپسول در هر وعده را از روی برچسب رعایت کنید.",
    },
    {
      question: "مزایای اصلی Thermo Nuke XT™ چیست؟",
      answer:
        "از فعالیت متابولیک و گرمای ترموژنیک، چربی‌سوزی در دوره‌های کسری کالری و تمرکز در دوره کات پشتیبانی می‌کند و با فرمول چندمحرکه انرژی بالایی می‌دهد؛ ساخته‌شده برای دوره کات و اهداف جدی تغییر بدن.",
    },
    {
      question: "Thermo Nuke XT™ را از کجا بخرم؟",
      answer:
        "Thermo Nuke XT™ از وب‌سایت رسمی Promolecules™ فروخته می‌شود. صفحه کشور خود یا صفحه جهانی را باز کنید.",
    },
    {
      question: "آیا می‌توانم Thermo Nuke XT™ را {loc} سفارش دهم؟",
      answer:
        "Thermo Nuke XT™ از وب‌سایت رسمی Promolecules™ فروخته می‌شود. قوانین ارسال و واردات در هر کشور فرق دارد؛ پیش از سفارش بررسی کنید چه قوانینی {loc} اعمال می‌شود و با ما تماس بگیرید.",
    },
  ],
  faq_title: "هر آنچه باید درباره Thermo Nuke XT™ بدانید",
};

// English: from the Thermo Nuke XT Belize page supplied. Also the global www site, where {loc} is empty.
const en = {
  ...getFoiText("en"),
  badge: "Multi-stimulant thermogenic fat burner",
  tag: "Built for advanced users in cutting phases and calorie deficits.",
  warn: "Warning: not for beginners. Only for advanced users.",
  servings: "Pack size",
  intro:
    "Promolecules Thermo Nuke XT™ is a high-stimulant thermogenic formula engineered to support metabolic output and body heat while keeping energy and focus up. For experienced athletes {loc}{cities} in cutting phases and calorie-deficit periods, it is not a mild fat burner but a multi-stimulant thermogenic system. Take your first serving with care and keep water close.",
  stats: ["capsules per bottle", "thermogenic blend", "servings a day (max)", "minimum age (years)"],
  steps: [
    "Take one serving in the morning. Follow the label for the number of capsules per serving.",
    "You can take an optional second serving before your workout.",
    "Best used during calorie-deficit phases. Do not combine with other stimulant-containing products.",
  ],
  who: [
    "Experienced athletes in cutting or shredding phases",
    "People in a calorie-deficit phase",
    "Experienced users of stimulant-based products",
  ],
  skip_p:
    "Beginners, people sensitive to caffeine or other stimulants, anyone under 18, and pregnant or breastfeeding women. If you are on prescription medication or have a medical condition, consult a healthcare professional before use.",
  safety: [
    "For use in healthy adults 18 years of age and older.",
    "Use with caution if you are sensitive to caffeine or other stimulants.",
    "Do not combine with other stimulant-containing products.",
    "If you are on prescription medication or have a medical condition, please consult a healthcare professional before use.",
    "Not to be used during pregnancy or breastfeeding.",
    "Keep out of reach of children.",
    "Store in a cool, dry place.",
  ],
  faq: [
    {
      question: "What is Thermo Nuke XT™?",
      answer:
        "Thermo Nuke XT™ is a high-stimulant thermogenic formula engineered to support metabolic output and body heat while keeping energy and focus up. It is not a mild fat burner: it is built for advanced users during cutting phases and calorie-deficit periods.",
    },
    {
      question: "Who should use Thermo Nuke XT™?",
      answer:
        "Experienced athletes in cutting or shredding phases, people in a calorie-deficit phase, and experienced users of stimulant-based products.",
    },
    {
      question: "How do I take Thermo Nuke XT™?",
      answer:
        "Take one serving in the morning, with an optional second serving before your workout. It is best used during calorie-deficit phases. Follow the label for the number of capsules per serving.",
    },
    {
      question: "Is Thermo Nuke XT™ suitable for beginners?",
      answer:
        "No. Thermo Nuke XT™ is not recommended for beginners or for people who are sensitive to stimulants. It is made for experienced users.",
    },
    {
      question: "Is Thermo Nuke XT™ a stimulant fat burner?",
      answer:
        "Yes. It uses a multi-stimulant thermogenic system. Use it with caution if you are sensitive to caffeine or other stimulants, and do not combine it with other stimulant-containing products.",
    },
    {
      question: "When is the best time to take Thermo Nuke XT™?",
      answer:
        "Take one serving in the morning, with an optional second serving before your workout. It is best used during calorie-deficit phases. Follow the label for the number of capsules per serving.",
    },
    {
      question: "What are the key benefits of Thermo Nuke XT™?",
      answer:
        "It supports metabolic output and thermogenic heat, fat burning during calorie-deficit phases and focus during cutting, with high energy output from a multi-stimulant formula. Built for cutting phases and serious transformation goals.",
    },
    {
      question: "Where can I buy Thermo Nuke XT™?",
      answer:
        "Thermo Nuke XT™ is sold through the official Promolecules™ website. Open the page for your country, or use the global page.",
    },
    {
      question: "Can I order Thermo Nuke XT™ {loc}?",
      answer:
        "Thermo Nuke XT™ is sold through the official Promolecules™ website. Delivery and import rules differ by country, so check what applies {loc} and contact us before you order.",
    },
  ],
  faq_title: "Everything you need to know about Thermo Nuke XT™",
};

// Malay: from the Thermo Nuke XT Malaysia page supplied. {loc} = "di Malaysia".
const ms = {
  ...getFoiText("ms"),
  badge: "Pembakar lemak termogenik berbilang stimulan",
  tag: "Dibina untuk pengguna termaju dalam fasa cutting dan defisit kalori.",
  warn: "Amaran: bukan untuk pemula. Hanya untuk pengguna termaju.",
  servings: "Saiz botol",
  intro:
    "Thermo Nuke XT™ daripada Promolecules ialah formula termogenik berstimulan tinggi yang direka untuk menyokong aktiviti metabolik dan haba badan sambil mengekalkan tenaga dan fokus. Untuk atlet berpengalaman {loc}{cities} dalam fasa cutting dan tempoh defisit kalori, ia bukan pembakar lemak yang ringan tetapi sistem termogenik berbilang stimulan. Ambil hidangan pertama dengan berhati-hati dan sediakan air.",
  stats: ["kapsul sebotol", "campuran termogenik", "hidangan sehari (maksimum)", "umur minimum (tahun)"],
  steps: [
    "Ambil satu hidangan pada waktu pagi. Ikut label untuk bilangan kapsul bagi setiap hidangan.",
    "Anda boleh mengambil hidangan kedua pilihan sebelum senaman.",
    "Paling sesuai semasa fasa defisit kalori. Jangan gabungkan dengan produk lain yang mengandungi stimulan.",
  ],
  who: [
    "Atlet berpengalaman dalam fasa cutting",
    "Mereka dalam fasa defisit kalori",
    "Pengguna berpengalaman produk berasaskan stimulan",
  ],
  skip_p:
    "Pemula, orang yang sensitif terhadap kafein atau stimulan lain, mereka yang berumur bawah 18 tahun, serta wanita hamil atau menyusu. Jika anda mengambil ubat preskripsi atau mempunyai keadaan perubatan, sila rujuk pakar kesihatan sebelum menggunakannya.",
  safety: [
    "Untuk orang dewasa sihat berumur 18 tahun ke atas.",
    "Gunakan dengan berhati-hati jika anda sensitif terhadap kafein atau stimulan lain.",
    "Jangan gabungkan dengan produk lain yang mengandungi stimulan.",
    "Jika anda mengambil ubat preskripsi atau mempunyai keadaan perubatan, sila rujuk pakar kesihatan sebelum menggunakannya.",
    "Tidak boleh digunakan semasa mengandung atau menyusu.",
    "Jauhkan daripada capaian kanak-kanak.",
    "Simpan di tempat yang sejuk dan kering.",
  ],
  faq: [
    {
      question: "Apakah Thermo Nuke XT™?",
      answer:
        "Thermo Nuke XT™ ialah formula termogenik berstimulan tinggi yang direka untuk menyokong aktiviti metabolik dan haba badan sambil mengekalkan tenaga dan fokus. Ia bukan pembakar lemak yang ringan: ia dibina untuk pengguna termaju dalam fasa cutting dan tempoh defisit kalori.",
    },
    {
      question: "Siapa patut menggunakan Thermo Nuke XT™?",
      answer:
        "Atlet berpengalaman dalam fasa cutting, mereka dalam fasa defisit kalori dan pengguna berpengalaman produk berasaskan stimulan.",
    },
    {
      question: "Bagaimana mengambil Thermo Nuke XT™?",
      answer:
        "Ambil satu hidangan pada waktu pagi, dengan hidangan kedua pilihan sebelum senaman. Ia paling sesuai digunakan semasa fasa defisit kalori. Ikut label untuk bilangan kapsul bagi setiap hidangan.",
    },
    {
      question: "Adakah Thermo Nuke XT™ sesuai untuk pemula?",
      answer:
        "Tidak. Thermo Nuke XT™ tidak disyorkan untuk pemula atau orang yang sensitif terhadap stimulan. Ia dibuat untuk pengguna berpengalaman.",
    },
    {
      question: "Adakah Thermo Nuke XT™ pembakar lemak berstimulan?",
      answer:
        "Ya. Ia menggunakan sistem termogenik berbilang stimulan. Gunakan dengan berhati-hati jika anda sensitif terhadap kafein atau stimulan lain, dan jangan gabungkan dengan produk lain yang mengandungi stimulan.",
    },
    {
      question: "Bilakah masa terbaik untuk mengambil Thermo Nuke XT™?",
      answer:
        "Ambil satu hidangan pada waktu pagi, dengan hidangan kedua pilihan sebelum senaman. Ia paling sesuai digunakan semasa fasa defisit kalori. Ikut label untuk bilangan kapsul bagi setiap hidangan.",
    },
    {
      question: "Apakah faedah utama Thermo Nuke XT™?",
      answer:
        "Menyokong aktiviti metabolik dan haba termogenik, pembakaran lemak semasa fasa defisit kalori dan fokus semasa fasa cutting, dengan tenaga tinggi daripada formula berbilang stimulan. Dibina untuk fasa cutting dan matlamat transformasi yang serius.",
    },
    {
      question: "Di mana saya boleh membeli Thermo Nuke XT™?",
      answer:
        "Thermo Nuke XT™ dijual melalui laman web rasmi Promolecules™. Buka halaman negara anda atau gunakan halaman global.",
    },
    {
      question: "Bolehkah saya memesan Thermo Nuke XT™ {loc}?",
      answer:
        "Thermo Nuke XT™ dijual melalui laman web rasmi Promolecules™. Peraturan penghantaran dan import berbeza mengikut negara, jadi semak apa yang terpakai {loc} dan hubungi kami sebelum membuat pesanan.",
    },
  ],
  faq_title: "Semua yang anda perlu tahu tentang Thermo Nuke XT™",
};

// French: from the Thermo Nuke XT Haiti page supplied. {loc} = "en Haïti".
const fr = {
  ...getFoiText("fr"),
  badge: "Brûleur de graisse thermogénique multi-stimulants",
  tag: "Conçu pour les utilisateurs avancés en phase de sèche et de déficit calorique.",
  warn: "Attention : pas pour les débutants. Réservé aux utilisateurs avancés.",
  servings: "Contenance",
  intro:
    "Thermo Nuke XT™ de Promolecules est une formule thermogénique très stimulante, conçue pour soutenir l'activité métabolique et la chaleur corporelle tout en gardant énergie et concentration. Pour les athlètes expérimentés {loc}{cities} en phase de sèche et de déficit calorique, ce n'est pas un brûleur de graisse léger mais un système thermogénique multi-stimulants. Prenez la première portion avec prudence et gardez de l'eau à portée de main.",
  stats: ["gélules par flacon", "mélange thermogénique", "portions par jour (max)", "âge minimum (ans)"],
  steps: [
    "Prenez une portion le matin. Suivez l'étiquette pour le nombre de gélules par portion.",
    "Vous pouvez prendre une seconde portion facultative avant l'entraînement.",
    "À utiliser de préférence en phase de déficit calorique. Ne pas associer à d'autres produits contenant des stimulants.",
  ],
  who: [
    "Athlètes expérimentés en phase de sèche",
    "Personnes en phase de déficit calorique",
    "Utilisateurs expérimentés de produits à base de stimulants",
  ],
  skip_p:
    "Les débutants, les personnes sensibles à la caféine ou à d'autres stimulants, les moins de 18 ans et les femmes enceintes ou qui allaitent. Si vous suivez un traitement ou avez un problème de santé, demandez l'avis d'un professionnel de santé avant utilisation.",
  safety: [
    "Réservé aux adultes en bonne santé de 18 ans et plus.",
    "À utiliser avec prudence si vous êtes sensible à la caféine ou à d'autres stimulants.",
    "Ne pas associer à d'autres produits contenant des stimulants.",
    "Si vous suivez un traitement ou avez un problème de santé, demandez l'avis d'un professionnel de santé avant utilisation.",
    "Ne pas utiliser pendant la grossesse ou l'allaitement.",
    "Tenir hors de portée des enfants.",
    "Conserver dans un endroit frais et sec.",
  ],
  faq: [
    {
      question: "Qu'est-ce que Thermo Nuke XT™ ?",
      answer:
        "Thermo Nuke XT™ est une formule thermogénique très stimulante, conçue pour soutenir l'activité métabolique et la chaleur corporelle tout en gardant énergie et concentration. Ce n'est pas un brûleur de graisse léger : il est fait pour les utilisateurs avancés en phase de sèche et de déficit calorique.",
    },
    {
      question: "Qui peut utiliser Thermo Nuke XT™ ?",
      answer:
        "Les athlètes expérimentés en phase de sèche, les personnes en phase de déficit calorique et les utilisateurs expérimentés de produits à base de stimulants.",
    },
    {
      question: "Comment prendre Thermo Nuke XT™ ?",
      answer:
        "Prenez une portion le matin, avec une seconde portion facultative avant l'entraînement. Il s'utilise de préférence pendant les phases de déficit calorique. Suivez l'étiquette pour le nombre de gélules par portion.",
    },
    {
      question: "Thermo Nuke XT™ convient-il aux débutants ?",
      answer:
        "Non. Thermo Nuke XT™ n'est pas recommandé aux débutants ni aux personnes sensibles aux stimulants. Il est conçu pour des utilisateurs expérimentés.",
    },
    {
      question: "Thermo Nuke XT™ est-il un brûleur de graisse à base de stimulants ?",
      answer:
        "Oui. Il repose sur un système thermogénique multi-stimulants. À utiliser avec prudence si vous êtes sensible à la caféine ou à d'autres stimulants, et à ne pas associer à d'autres produits contenant des stimulants.",
    },
    {
      question: "Quand vaut-il mieux prendre Thermo Nuke XT™ ?",
      answer:
        "Prenez une portion le matin, avec une seconde portion facultative avant l'entraînement. Il s'utilise de préférence pendant les phases de déficit calorique. Suivez l'étiquette pour le nombre de gélules par portion.",
    },
    {
      question: "Quels sont les principaux bénéfices de Thermo Nuke XT™ ?",
      answer:
        "Il soutient l'activité métabolique et la chaleur thermogénique, la combustion des graisses en phase de déficit calorique et la concentration pendant la sèche, avec une forte énergie grâce à une formule multi-stimulants. Conçu pour la sèche et les objectifs de transformation sérieux.",
    },
    {
      question: "Où acheter Thermo Nuke XT™ ?",
      answer:
        "Thermo Nuke XT™ est vendu sur le site officiel de Promolecules™. Ouvrez la page de votre pays ou utilisez la page mondiale.",
    },
    {
      question: "Puis-je commander Thermo Nuke XT™ {loc} ?",
      answer:
        "Thermo Nuke XT™ est vendu sur le site officiel de Promolecules™. La livraison et les règles d'importation varient selon les pays : vérifiez ce qui s'applique {loc} et contactez-nous avant de commander.",
    },
  ],
  faq_title: "Tout ce qu'il faut savoir sur Thermo Nuke XT™",
};

// Portuguese: from the Thermo Nuke XT Brazil page supplied. {loc} = "no Brasil".
const pt = {
  ...getFoiText("pt"),
  badge: "Termogênico queimador de gordura multiestimulante",
  tag: "Feito para usuários avançados em fases de definição e déficit calórico.",
  warn: "Aviso: não é para iniciantes. Apenas para usuários avançados.",
  servings: "Tamanho do frasco",
  intro:
    "O Thermo Nuke XT™ da Promolecules é uma fórmula termogênica de alto estímulo, feita para apoiar o desempenho metabólico e o calor corporal mantendo energia e foco. Para atletas experientes {loc}{cities} em fases de definição e de déficit calórico, não é um queimador leve, e sim um sistema termogênico multiestimulante. Tome a primeira porção com cuidado e deixe água por perto.",
  stats: ["cápsulas por frasco", "blend termogênico", "porções por dia (máx.)", "idade mínima (anos)"],
  steps: [
    "Tome uma porção pela manhã. Siga o rótulo para saber quantas cápsulas tomar por porção.",
    "Você pode tomar uma segunda porção opcional antes do treino.",
    "É melhor usar durante fases de déficit calórico. Não combine com outros produtos com estimulantes.",
  ],
  who: [
    "Atletas experientes em fases de definição",
    "Pessoas em fase de déficit calórico",
    "Usuários experientes de produtos com estimulantes",
  ],
  skip_p:
    "Iniciantes, pessoas sensíveis à cafeína ou a outros estimulantes, menores de 18 anos, gestantes e lactantes. Se usa medicamentos prescritos ou tem alguma condição médica, consulte um profissional de saúde antes de usar.",
  safety: [
    "Para adultos saudáveis com 18 anos ou mais.",
    "Use com cautela se for sensível à cafeína ou a outros estimulantes.",
    "Não combine com outros produtos que contenham estimulantes.",
    "Se usa medicamentos prescritos ou tem alguma condição médica, consulte um profissional de saúde antes de usar.",
    "Não usar durante a gravidez ou a amamentação.",
    "Mantenha fora do alcance de crianças.",
    "Armazene em local fresco e seco.",
  ],
  faq: [
    {
      question: "O que é o Thermo Nuke XT™?",
      answer:
        "O Thermo Nuke XT™ é uma fórmula termogênica de alto estímulo, feita para apoiar o desempenho metabólico e o calor corporal mantendo energia e foco. Não é um queimador leve: foi criado para usuários avançados em fases de definição e de déficit calórico.",
    },
    {
      question: "Quem deve usar o Thermo Nuke XT™?",
      answer:
        "Atletas experientes em fases de definição, pessoas em fase de déficit calórico e usuários experientes de produtos com estimulantes.",
    },
    {
      question: "Como tomar o Thermo Nuke XT™?",
      answer:
        "Tome uma porção pela manhã, com uma segunda porção opcional antes do treino. É melhor usar durante fases de déficit calórico. Siga o rótulo para saber quantas cápsulas tomar por porção.",
    },
    {
      question: "O Thermo Nuke XT™ é indicado para iniciantes?",
      answer:
        "Não. O Thermo Nuke XT™ não é recomendado para iniciantes nem para pessoas sensíveis a estimulantes. Ele é feito para usuários experientes.",
    },
    {
      question: "O Thermo Nuke XT™ é um queimador de gordura com estimulantes?",
      answer:
        "Sim. Ele usa um sistema termogênico multiestimulante. Use com cautela se for sensível à cafeína ou a outros estimulantes, e não combine com outros produtos que contenham estimulantes.",
    },
    {
      question: "Qual é o melhor momento para tomar o Thermo Nuke XT™?",
      answer:
        "Tome uma porção pela manhã, com uma segunda porção opcional antes do treino. É melhor usar durante fases de déficit calórico. Siga o rótulo para saber quantas cápsulas tomar por porção.",
    },
    {
      question: "Quais são os principais benefícios do Thermo Nuke XT™?",
      answer:
        "Apoia o desempenho metabólico e o calor termogênico, a queima de gordura em fases de déficit calórico e o foco durante a definição, com alta energia de uma fórmula multiestimulante. Feito para fases de definição e metas sérias de transformação.",
    },
    {
      question: "Onde posso comprar o Thermo Nuke XT™?",
      answer:
        "O Thermo Nuke XT™ é vendido no site oficial da Promolecules™. Abra a página do seu país ou use a página global.",
    },
    {
      question: "Posso pedir o Thermo Nuke XT™ {loc}?",
      answer:
        "O Thermo Nuke XT™ é vendido no site oficial da Promolecules™. Entrega e regras de importação mudam de país para país, então confira o que vale {loc} e fale com a gente antes de pedir.",
    },
  ],
  faq_title: "Tudo o que você precisa saber sobre o Thermo Nuke XT™",
};

// Russian: from the Thermo Nuke XT Kazakhstan page supplied (also used on tm/kg/tj).
// {name} = "Казахстан" (intro, like the other products); {loc} = "в Казахстане" (FAQ).
const ru = {
  ...getFoiText("ru"),
  badge: "Термогенный жиросжигатель с несколькими стимуляторами",
  tag: "Для опытных пользователей на сушке и в дефиците калорий.",
  warn: "Внимание: не для новичков. Только для опытных пользователей.",
  servings: "Объём упаковки",
  intro:
    "Thermo Nuke XT™ от Promolecules — термогенная формула с высоким содержанием стимуляторов, созданная для поддержки метаболизма и выработки тепла при сохранении энергии и концентрации. Для опытных спортсменов страны {name}{cities} которые находятся на сушке или в дефиците калорий, это не мягкий жиросжигатель, а термогенная система с несколькими стимуляторами. Первую порцию принимайте осторожно и держите воду под рукой.",
  stats: ["капсул в упаковке", "термогенная смесь", "порции в день (макс.)", "минимальный возраст (лет)"],
  steps: [
    "Принимайте одну порцию утром. Количество капсул в порции смотрите на этикетке.",
    "При желании вторую порцию можно принять перед тренировкой.",
    "Лучше всего использовать в периоды дефицита калорий. Не сочетайте с другими продуктами со стимуляторами.",
  ],
  who: [
    "Опытные атлеты в периоды сушки",
    "Люди в фазе дефицита калорий",
    "Опытные пользователи продуктов со стимуляторами",
  ],
  skip_p:
    "Новички, люди, чувствительные к кофеину и другим стимуляторам, лица младше 18 лет, беременные и кормящие женщины. Если вы принимаете лекарства по назначению или у вас есть заболевание, перед применением проконсультируйтесь с врачом.",
  safety: [
    "Для здоровых взрослых от 18 лет.",
    "С осторожностью при чувствительности к кофеину и другим стимуляторам.",
    "Не сочетайте с другими продуктами, содержащими стимуляторы.",
    "Если вы принимаете лекарства по назначению или у вас есть заболевание, перед применением проконсультируйтесь с врачом.",
    "Не применять при беременности и кормлении грудью.",
    "Хранить в недоступном для детей месте.",
    "Хранить в прохладном сухом месте.",
  ],
  faq: [
    {
      question: "Что такое Thermo Nuke XT™?",
      answer:
        "Thermo Nuke XT™ — термогенная формула с высоким содержанием стимуляторов, созданная для поддержки метаболизма и выработки тепла при сохранении энергии и концентрации. Это не мягкий жиросжигатель: он рассчитан на опытных пользователей в периоды сушки и дефицита калорий.",
    },
    {
      question: "Кому подходит Thermo Nuke XT™?",
      answer:
        "Опытным атлетам в периоды сушки, людям в фазе дефицита калорий и опытным пользователям продуктов со стимуляторами.",
    },
    {
      question: "Как принимать Thermo Nuke XT™?",
      answer:
        "Принимайте одну порцию утром, при желании вторую — перед тренировкой. Лучше всего использовать в периоды дефицита калорий. Количество капсул в порции смотрите на этикетке.",
    },
    {
      question: "Подходит ли Thermo Nuke XT™ новичкам?",
      answer:
        "Нет. Thermo Nuke XT™ не рекомендуется новичкам и людям, чувствительным к стимуляторам. Он создан для опытных пользователей.",
    },
    {
      question: "Thermo Nuke XT™ — это жиросжигатель со стимуляторами?",
      answer:
        "Да. В нём используется термогенная система с несколькими стимуляторами. Принимайте с осторожностью при чувствительности к кофеину и другим стимуляторам и не сочетайте с другими продуктами, содержащими стимуляторы.",
    },
    {
      question: "Когда лучше принимать Thermo Nuke XT™?",
      answer:
        "Принимайте одну порцию утром, при желании вторую — перед тренировкой. Лучше всего использовать в периоды дефицита калорий. Количество капсул в порции смотрите на этикетке.",
    },
    {
      question: "Каковы основные преимущества Thermo Nuke XT™?",
      answer:
        "Поддерживает метаболизм и термогенное тепло, сжигание жира в периоды дефицита калорий и концентрацию во время сушки, даёт высокую энергию благодаря формуле с несколькими стимуляторами. Создан для периодов сушки и серьёзных целей по трансформации.",
    },
    {
      question: "Где купить Thermo Nuke XT™?",
      answer:
        "Thermo Nuke XT™ продаётся на официальном сайте Promolecules™. Откройте страницу своей страны или глобальную страницу.",
    },
    {
      question: "Можно ли заказать Thermo Nuke XT™ {loc}?",
      answer:
        "Thermo Nuke XT™ продаётся на официальном сайте Promolecules™. Доставка и правила ввоза различаются по странам, поэтому перед заказом уточните, что действует {loc}, и свяжитесь с нами.",
    },
  ],
  faq_title: "Всё, что нужно знать о Thermo Nuke XT™",
};

const THERMO_TEXT = { ar, es, uz, sw, fa, en, ms, fr, pt, ru };

export const getThermoText = (lang) => THERMO_TEXT[lang] ?? en;

// The ingredient list is not in the supplied pages, so the page shows the supplement-facts image only
// (an empty list hides the ingredients section).
export const THERMO_INGREDIENTS = [];

// 60 capsules · 650 mg blend (from the product range) · max 2 servings a day (morning + optional pre-workout) · adults only
export const THERMO_STATS = ["60", "650 mg", "2", "18+"];

export const THERMO_CONTENT = {
  name: "Thermo Nuke XT™",
  getText: getThermoText,
  ingredients: THERMO_INGREDIENTS,
  stats: THERMO_STATS,
  langs: Object.keys(THERMO_TEXT), // country layout only where the text exists
};
