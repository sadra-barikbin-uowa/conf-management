/* ============ CONTENT (from the conference PDF) ============
   Every user-facing string is { ar, en } so the language toggle can switch it.
   Person names stay in Arabic in both languages. */

import baghdadLogo from "../logos/baghdad-logo.png";
import basraLogo from "../logos/basra-logo.png";
import karbalaLogo from "../logos/karbala-logo.png";
import kufaLogo from "../logos/kufa-logo.png";
import kutLogo from "../logos/kut-logo.png";
import mesanLogo from "../logos/mesan-logo.png";
import musilLogo from "../logos/musil-logo.png";
import shrineLogo from "./assets/supporters/shrine-logo.png";
import warithLogo from "./assets/supporters/warith-university-logo.png";

export const EVENT = new Date("2026-12-26T09:00:00+03:00");
export const EMAIL = "conference@uowa.edu.iq";

export const TITLE = {
  ar: "التقييم المؤسسي في عصر التحول الرقمي والذكاء الاصطناعي",
  en: "Institutional Evaluation in the Era of Digital Transformation and AI",
};

export const UI = {
  brand: {
    ar: "مؤتمر التقييم المؤسسي ",
    en: "Institutional Evaluation Conference",
  },
  nav: {
    dates: { ar: "المواعيد", en: "Dates" },
    axes: { ar: "المحاور", en: "Topics" },
    submit: { ar: "المشاركة", en: "Submit" },
    about: { ar: "عن المؤتمر", en: "About" },
    gallery: { ar: "المعرض", en: "Gallery" },
    committees: { ar: "اللجان", en: "Committees" },
    contact: { ar: "التواصل", en: "Contact" },
  },
  patron: {
    ar: "برعاية الأمانة العامة للعتبة الحسينية المقدسة",
    en: "Under the patronage of the General Secretariat of the Holy Shrine of Imam Hussain",
  },
  conference: { ar: "مؤتمر", en: "Conference on" },
  heroSub: {
    ar: "يلتقي الباحثون والأكاديميون في كربلاء المقدسة لمناقشة مستقبل تقييم الأداء المؤسسي، يوم 26 كانون الأول 2026.",
    en: "Researchers and academics meet in Holy Karbala to discuss the future of institutional performance evaluation, on 26 December 2026.",
  },
  ctaSubmit: { ar: "سجّل وأرسل بحثك", en: "Register & submit" },
  ctaAxes: { ar: "تصفّح المحاور", en: "Explore topics" },
  countdown: {
    ar: "العد التنازلي لافتتاح المؤتمر",
    en: "Countdown to the opening",
  },
  units: [
    { ar: "يوم", en: "Days" },
    { ar: "ساعة", en: "Hours" },
    { ar: "دقيقة", en: "Minutes" },
    { ar: "ثانية", en: "Seconds" },
  ],
  stats: [
    { n: 7, ar: "جامعات مشاركة", en: "Partner universities" },
    { n: 4, ar: "محاور علمية", en: "Research axes" },
    { n: 20, ar: "موضوعًا بحثيًا", en: "Research topics" },
    { n: 66, ar: "عضوًا في اللجان", en: "Committee members" },
  ],
  facts: [
    {
      icon: "calendar",
      label: { ar: "الموعد", en: "Date" },
      value: { ar: "26 كانون الأول 2026", en: "26 December 2026" },
      note: {
        ar: "جلسة افتتاح صباحًا وختامية مساءً",
        en: "Opening in the morning, closing in the evening",
      },
    },
    {
      icon: "map",
      label: { ar: "المكان", en: "Venue" },
      value: { ar: "قاعة القلم", en: "Al-Qalam Hall" },
      note: {
        ar: "جامعة وارث الأنبياء، كربلاء المقدسة",
        en: "University of Warith Al-Anbiyaa, Karbala",
      },
    },
    {
      icon: "building",
      label: { ar: "الجهة المنظمة", en: "Organiser" },
      value: {
        ar: "كلية الإدارة والاقتصاد",
        en: "College of Administration & Economics",
      },
      note: {
        ar: "بالتعاون مع العتبة الحسينية المقدسة",
        en: "With the HR Development Department",
      },
    },
    {
      icon: "book",
      label: { ar: "النشر", en: "Publication" },
      value: {
        ar: "مجلة وارث العلمية",
        en: "Warith Al-Anbiyaa Scientific Journal",
      },
      note: {
        ar: "للبحوث المقبولة بعد التحكيم",
        en: "For accepted, peer-reviewed papers",
      },
    },
  ],
  sec: {
    dates: {
      t: { ar: "المواعيد المهمة", en: "Key dates" },
      s: {
        ar: "أربع محطات، والمؤشر يتحرك مع الوقت الفعلي",
        en: "Four milestones, tracked against today's date",
      },
    },
    axes: {
      t: { ar: "محاور المؤتمر", en: "Conference axes" },
      s: {
        ar: "أربعة محاور تضم الموضوعات التي يستقبلها المؤتمر",
        en: "Four axes covering the topics the conference accepts",
      },
    },
    submit: {
      t: { ar: "المشاركة والنشر", en: "Participation & publication" },
      s: {
        ar: "الشروط وصيغة الإرسال ونموذج التسجيل في مكان واحد",
        en: "Rules, format and registration in one place",
      },
    },
    about: {
      t: { ar: "عن المؤتمر", en: "About the conference" },
      s: {
        ar: "سبع جامعات عراقية حول سؤال واحد: كيف نقيّم أداء مؤسساتنا بذكاء وعدالة؟",
        en: "Seven Iraqi universities around one question: how do we evaluate our institutions intelligently and fairly?",
      },
    },
    gallery: {
      t: { ar: "معرض الصور", en: "Photo gallery" },
      s: {
        ar: "لمحات من فعاليات المؤتمر وتجسيد لأجوائه والفرص البحثية",
        en: "Moments from the conference and its vibrant research atmosphere",
      },
    },
    committees: {
      t: { ar: "اللجان", en: "Committees" },
      s: {
        ar: "مرتّبة حسب الأولوية، ورئيس كل لجنة في المقدمة",
        en: "Ordered by priority, each chair listed first",
      },
    },
    contact: {
      t: { ar: "تواصل معنا", en: "Contact us" },
      s: {
        ar: "نسعد بأسئلتكم في أي وقت",
        en: "We are happy to answer your questions",
      },
    },
  },
  goals: { ar: "أهداف المؤتمر", en: "Objectives" },
  gallery: { ar: "معرض الصور", en: "Photo gallery" },
  unis: { ar: "الجامعات المشاركة", en: "Participating universities" },
  supporters: { ar: "الجهات الساندة", en: "Supporters" },
  rulesTitle: { ar: "شروط المشاركة", en: "Participation rules" },
  formatTitle: { ar: "صيغة الإرسال", en: "Submission format" },
  formatNote: {
    ar: "إذا تعذّر حضور الباحث للمناقشة، لا يُعدّ بحثه مقبولًا للنشر.",
    en: "Papers are not accepted for publication if the researcher cannot attend the discussion.",
  },
  axis: { ar: "المحور", en: "Axis" },
  topics: { ar: "موضوعات", en: "topics" },
  chair: { ar: "الرئيس", en: "Chair" },
  members: { ar: "عضوًا", en: "members" },
  showAll: { ar: "عرض جميع الأعضاء", en: "Show all members" },
  showLess: { ar: "عرض أقل", en: "Show less" },
  done: { ar: "انتهى", en: "Passed" },
  today: { ar: "اليوم", en: "Today" },
  daysLeft: { ar: "يومًا متبقيًا", en: "days left" },
  next: { ar: "المحطة القادمة", en: "Next milestone" },
  email: { ar: "البريد الإلكتروني", en: "Email" },
  copy: { ar: "نسخ البريد", en: "Copy email" },
  copied: { ar: "تم النسخ بنجاح", en: "Copied" },
  close: { ar: "إغلاق", en: "Close" },
  theme: { ar: "تبديل المظهر", en: "Toggle theme" },
  lang: { ar: "English", en: "عربي" },
  menu: { ar: "القائمة", en: "Menu" },
  top: { ar: "إلى الأعلى", en: "Back to top" },
  footer: {
    ar: "جميع الحقوق محفوظة جامعة وارث الأنبياء -مركز الحاسبة الإلكترونية - شعبة البرمجيات",
    en: "University of Warith Al-Anbiyaa · College of Administration & Economics · 2026",
  },
  form: {
    title: { ar: "نموذج التسجيل", en: "Registration form" },
    sub: {
      ar: "املأ بياناتك وسنتواصل معك بخصوص بحثك",
      en: "Fill in your details and we will contact you about your paper",
    },
    name: {
      ar: "الاسم الكامل واللقب العلمي",
      en: "Full name & academic title",
    },
    email: { ar: "البريد الإلكتروني", en: "Email" },
    phone: { ar: "رقم الهاتف", en: "Phone number" },
    org: { ar: "الجامعة أو المؤسسة", en: "University or institution" },
    axis: { ar: "المحور البحثي", en: "Research axis" },
    choose: { ar: "اختر محورًا", en: "Choose an axis" },
    paper: { ar: "عنوان البحث", en: "Paper title" },
    authors: { ar: "عدد الباحثين", en: "Number of authors" },
    abstract: { ar: "ملف الملخص والسيرة الذاتية", en: "Abstract & CV file" },
    drop: {
      ar: "اسحب الملف هنا أو اضغط للاختيار (Word أو PDF)",
      en: "Drop a file here or click to choose (Word or PDF)",
    },
    agree: {
      ar: "أقرّ بأن البحث غير منشور سابقًا وأتحمل مسؤولية فحص الاستلال",
      en: "I confirm the paper is unpublished and I accept responsibility for plagiarism screening",
    },
    send: { ar: "إرسال الطلب", en: "Submit" },
    sending: { ar: "جارٍ الإرسال…", en: "Sending…" },
    okTitle: { ar: "تم استلام طلبك", en: "Request received" },
    okText: {
      ar: "هذه واجهة تجريبية. لإتمام المشاركة أرسل الملخص إلى البريد الرسمي:",
      en: "This is a preview form. To complete your submission, email your abstract to:",
    },
    again: { ar: "تسجيل جديد", en: "New registration" },
    step: { ar: "الخطوة", en: "Step" },
    of: { ar: "من", en: "of" },
    nextStep: { ar: "التالي", en: "Next" },
    back: { ar: "السابق", en: "Back" },
    steps: [
      { ar: "بيانات الباحث", en: "Researcher" },
      { ar: "بيانات البحث", en: "Paper" },
      { ar: "المرفقات", en: "Files" },
    ],
    err: {
      required: { ar: "هذا الحقل مطلوب", en: "This field is required" },
      email: { ar: "صيغة البريد غير صحيحة", en: "Invalid email address" },
      phone: { ar: "رقم الهاتف غير صحيح", en: "Invalid phone number" },
      agree: {
        ar: "يجب الموافقة على الإقرار",
        en: "You must accept the declaration",
      },
    },
  },
};

export const DATES = [
  {
    date: "2026-12-01",
    t: { ar: "استلام الملخصات", en: "Abstracts deadline" },
    d: {
      ar: "آخر موعد لاستلام ملخصات البحوث",
      en: "Last day to submit abstracts",
    },
  },
  {
    date: "2026-12-10",
    t: { ar: "استلام البحوث", en: "Full papers deadline" },
    d: {
      ar: "آخر موعد لاستلام البحوث الكاملة",
      en: "Last day to submit full papers",
    },
  },
  {
    date: "2026-12-25",
    t: { ar: "استقبال الباحثين", en: "Researchers arrive" },
    d: {
      ar: "الوصول والمبيت في كربلاء المقدسة مساءً",
      en: "Arrival and overnight stay in Karbala",
    },
  },
  {
    date: "2026-12-26",
    t: { ar: "يوم المؤتمر", en: "Conference day" },
    d: {
      ar: "الافتتاح صباحًا، ثم الجلسة الختامية والتوصيات مساءً",
      en: "Opening in the morning, closing session and recommendations in the evening",
    },
  },
];

export const AXES = [
  {
    icon: "target",
    name: {
      ar: "التخطيط الاستراتيجي ومنظومات التقييم المؤسسي",
      en: "Strategic planning and institutional evaluation systems",
    },
    items: [
      {
        ar: "التكامل بين التخطيط الاستراتيجي والتشغيلي ومنظومات التقييم المؤسسي",
        en: "Integrating strategic and operational planning with institutional evaluation systems",
      },
      {
        ar: "مؤشرات الأداء الرئيسة وأثرها في قياس تحقيق الأهداف الاستراتيجية",
        en: "Key performance indicators and their impact on achieving strategic goals",
      },
      {
        ar: "حوكمة الأداء المؤسسي وعلاقتها بعمليات المتابعة والتقييم",
        en: "Institutional performance governance and its relationship with monitoring and evaluation processes",
      },
      {
        ar: "التقييم المؤسسي ودوره في تحسين جودة التخطيط وصنع القرار",
        en: "Institutional evaluation and its role in improving planning quality and decision-making",
      },
      {
        ar: "قياس الأثر المؤسسي والاستدامة في ضوء الخطط الاستراتيجية",
        en: "Measuring institutional impact and sustainability in light of strategic plans",
      },
    ],
  },
  {
    icon: "cpu",
    name: {
      ar: "التحول الرقمي والذكاء الاصطناعي وقياس الأداء",
      en: "Digital transformation, artificial intelligence, and performance measurement",
    },
    items: [
      {
        ar: "التحول الرقمي وأثره في تطوير أنظمة التقييم المؤسسي",
        en: "Digital transformation and its impact on developing institutional evaluation systems",
      },
      {
        ar: "تطبيقات الذكاء الاصطناعي وتحليل البيانات في قياس الأداء",
        en: "Artificial intelligence applications and data analysis in performance measurement",
      },
      {
        ar: "البيانات الضخمة ودورها في دعم القرارات المبنية على الأداء",
        en: "Big data and its role in supporting performance-based decision-making",
      },
      {
        ar: "لوحات المؤشرات الرقمية والنظم الذكية لمتابعة الأداء المؤسسي",
        en: "Digital dashboards and intelligent systems for monitoring institutional performance",
      },
      {
        ar: "التحديات الأخلاقية والتنظيمية لاستخدام الذكاء الاصطناعي في التقييم",
        en: "Ethical and regulatory challenges of using artificial intelligence in evaluation",
      },
    ],
  },
  {
    icon: "trending",
    name: {
      ar: "إدارة التغيير والابتكار والتحسين المستمر",
      en: "Change management, innovation, and continuous improvement",
    },
    items: [
      {
        ar: "إدارة التغيير المؤسسي ودورها في تعزيز فعالية التقييم",
        en: "Institutional change management and its role in strengthening evaluation effectiveness",
      },
      {
        ar: "بناء ثقافة تنظيمية داعمة للجودة والتميز المؤسسي",
        en: "Building an organizational culture that supports quality and institutional excellence",
      },
      {
        ar: "توظيف نتائج التقييم في التطوير والتحسين المستمر",
        en: "Utilizing evaluation results for development and continuous improvement",
      },
      {
        ar: "القيادة المؤسسية وإدارة التحول نحو التميز",
        en: "Institutional leadership and managing transformation toward excellence",
      },
      {
        ar: "إدارة المخاطر والتحديات المرتبطة بعمليات التقييم المؤسسي",
        en: "Risk management and challenges related to institutional evaluation processes",
      },
    ],
  },
  {
    icon: "users",
    name: {
      ar: "تنمية الموارد البشرية والشراكات المؤسسية",
      en: "Human resource development and institutional partnerships",
    },
    items: [
      {
        ar: "تقييم الأداء ودوره في تنمية الاصول البشرية",
        en: "The role of performance evaluation in human capital development",
      },
      {
        ar: "العدالة والشفافية في أنظمة تقييم الأداء الوظيفي",
        en: "Justice and transparency in personnel performance appraisal systems",
      },
      {
        ar: "ربط نتائج التقييم ببرامج التدريب والتطوير والتحفيز المؤسسي",
        en: "Linking evaluation results to training, development, and institutional incentive programs",
      },
      {
        ar: "توظيف الخرائط المعرفية في دعم عمليات التقييم المؤسسي وتعزيز كفاءة الأداء",
        en: "Utilizing knowledge maps to support institutional evaluation processes and enhance performance efficiency",
      },
      {
        ar: "بناء القدرات المؤسسية وتعزيز التعلم التنظيمي بالاعتماد على تبادل الخبرات",
        en: "Institutional capacity building and organizational learning through the exchange of expertise",
      },
    ],
  },
];

export const GOALS = [
  {
    ar: "تعزيز التكامل بين التخطيط الاستراتيجي والتشغيلي ومنظومات التقييم المؤسسي بما يسهم في تحسين الأداء وتحقيق التميزز المؤسسي.",
    en: "Strengthen the integration between strategic and operational planning and institutional evaluation systems in a way that contributes to improving performance and achieving institutional excellence.",
  },
  {
    ar: "دعم التحول الرقمي وتوظيف تقنيات الذكاء الاصطناعي في تطوير عمليات التقييم وقياس الأداء , بما يعزز كفاءة اتخاذ القرار والارتقاء بالأداء المؤسسي.",
    en: "Support digital transformation and employ artificial intelligence technologies in the development of evaluation and performance measurement processes, thereby enhancing decision-making efficiency and improving institutional performance.",
  },
  {
    ar: "إبراز دور إدارة التغيير المؤسسي في ترسيخ ثقافة التقييم وتعزيز التطوير والتحسين المستمر بما يحقق الاستدامه المؤسسية.",
    en: "Highlight the role of institutional change management in consolidating a culture of evaluation and promoting continuous development and improvement to achieve institutional sustainability.",
  },
  {
    ar: "تطوير منظومات تقييم الأداء وتعزيز الشراكات العلمية والمهنية وتبادل الخبرات بين المؤسسات الأكاديمية والحكومية والقطاع الخاص.",
    en: "Develop performance evaluation systems and strengthen scientific and professional partnerships and the exchange of expertise among academic, governmental, and private institutions.",
  },
];

export const UNIS = [
  {
    ar: "جامعة بغداد",
    en: "University of Baghdad",
    href: "https://uobaghdad.edu.iq/",
    logo: baghdadLogo,
  },
  {
    ar: "جامعة الكوفة",
    en: "University of Kufa",
    href: "https://uokufa.edu.iq/",
    logo: kufaLogo,
  },
  {
    ar: "جامعة كربلاء",
    en: "University of Karbala",
    href: "https://uokerbala.edu.iq/",
    logo: karbalaLogo,
  },
  {
    ar: "جامعة الموصل",
    en: "University of Mosul",
    href: "https://uomosul.edu.iq/",
    logo: musilLogo,
  },
  {
    ar: "جامعة الكوت",
    en: "University of Kut",
    href: "https://uokut.edu.iq/",
    logo: kutLogo,
  },
  {
    ar: "جامعة البصرة",
    en: "University of Basrah",
    href: "https://uobasrah.edu.iq/",
    logo: basraLogo,
  },
  {
    ar: "جامعة ميسان",
    en: "University of Misan",
    href: "https://uomisan.edu.iq/ar/",
    logo: mesanLogo,
  },
];
export const SUPPORTERS = [
  {
    ar: "العتبة الحسينية المقدسة",
    en: "Imam Hussain Holy Shrine",
    href: "https://imamhussain.org/arabic",
    logo: shrineLogo,
  },
  {
    ar: "جامعة وارث الأنبياء",
    en: "WARITH AL-ANBIYAA UNIVERSITY",
    href: "https://uowa.edu.iq/arabic",
    logo: warithLogo,
  },
  {
    ar: "كلية الإدارة والاقتصاد",
    en: "College of Administration and Economics",
    href: "https://uowa.edu.iq/arabic/cae",
    logo: warithLogo,
    featured: true,
  },
];

export const RULES = [
  {
    ar: "الالتزام بضوابط البحث العلمي، مع تقويم لغوي مذكور فيه اسم المقوّم الأكاديمي.",
    en: "Follow scientific research standards, with a language review naming the academic reviewer.",
  },
  {
    ar: "أن يكون البحث ذا قيمة علمية وغير منشور أو مقدَّم سابقًا لأي جهة أخرى.",
    en: "The paper must be of scientific value and not previously published or submitted elsewhere.",
  },
  {
    ar: "ألا يزيد عدد الباحثين في البحث الواحد عن ثلاثة باحثين.",
    en: "No more than three authors per paper.",
  },
  {
    ar: "إرسال ملخص باللغتين العربية والإنكليزية (300 كلمة لكل منهما) مرفقًا بالسيرة الذاتية.",
    en: "Send an abstract in Arabic and English (300 words each) with a CV.",
  },
  {
    ar: "تخضع البحوث للتقييم العلمي وفحص الاستلال، ويتحمل الباحث المسؤولية القانونية والأخلاقية عن أي استلال.",
    en: "Papers undergo peer review and plagiarism checks; authors bear legal and ethical responsibility.",
  },
  {
    ar: "يشترط حصول الباحث على كتاب فحص استلال من كلية الإدارة والاقتصاد.",
    en: "A plagiarism-check letter from the College of Administration & Economics is required.",
  },
];

export const SPEC = [
  { ar: "ملف Word", en: "Word file" },
  { ar: "خط Arabic Simplified", en: "Arabic Simplified font" },
  { ar: "العناوين 14", en: "Headings 14pt" },
  { ar: "المتن 12", en: "Body 12pt" },
  { ar: "الهوامش 10", en: "Footnotes 10pt" },
  { ar: "حتى 20 صفحة", en: "Up to 20 pages" },
];

const R = { chair: true };
const ADVISORY = [
  [
    "الأستاذ حسن رشيد جواد العبايجي",
    {
      ar: "الأمين العام للعتبة الحسينية المقدسة",
      en: "Secretary-General, Holy Shrine of Imam Hussain",
    },
    R,
  ],
  ["أ.د إبراهيم سعيد الحياوي", "warith"],
  ["أ.د عواد كاظم الخالدي", "warith"],
  ["أ.د طلال فائق مجبل الكمالي", "warith"],
  ["أ.د علاء عبد الحسن عطية الزغيبي", "baghdad"],
  ["أ.د وحيد محمود الإبراهيمي", "mosul"],
  ["أ.د عقيل فاضل حمد الدهان", "basrah"],
  ["أ.د علاء ناجي جاسم المولى", "kufa"],
  ["أ.د صباح واجد علي", "karbala"],
  ["أ.د عادل مانع داخل الكعبي", "misan"],
  ["أ.د فاخر جبر مطر المحمداوي", "kut"],
];
const SCIENTIFIC = [
  ["أ.د عامر علي حسين العطوي", "qadisiyah", R],
  ["أ.د عبد علي حمد الدليمي", "anbar"],
  ["أ.د سنان محمد زهير", "mosul"],
  ["أ.د فائز عبد الحسن الامي", "misan"],
  ["أ.د احمد عبدسلام احمد", "samarra"],
  ["أ.د احمد الوائلي", "kut"],
  ["أ.د لقاء العلوي", "baghdad"],
  ["أ.د مصطفى كامل رشيد", "mustansiriyah"],
  ["أ.د صالح مهدي محمد", "warith"],
  ["أ.د طلال محمد علي الجيجاوي", "warith"],
  ["أ.د ماهر حميد مجيد", "atu"],
  ["أ.د فهد مغيمش الشمري", "warith"],
  ["أ.م.د سلام جعفر الاسدي", "karbala"],
  ["أ.م.د صلاح مهدي اليساري", "karbala"],
  ["أ.م.د حسين محمد علي كشكول", "warith"],
  ["أ.م.د محمد مجيد جواد", "warith"],
];
const PREPARATORY = [
  ["م.د حسين علاء معتوق", "warith", R],
  ["السيد محمد حمزة عبد العظيم", "hr"],
  ["أ.م.د مهدي محمد مهدي", "warith"],
  ["أ.م.د محسن عبد الحسن مهدي", "karbala"],
  ["د. احسان عبد الأمير خليف", "sgo"],
  ["د. محمد عبد الامير حسن", "mof"],
  ["م.م امير حاكم هادي", "warith"],
  ["م.م محمد ضياء مهدي", "warith"],
  ["م.م عمار عبد الاله خليل", "warith"],
  ["م.م حسنين علي عبد الزهرة", "warith"],
  ["م. امين خليل ابراهيم", "samarra"],
  ["م.م صفاء عبد الحمزة عبدالله", "warith"],
  ["السيد حسنين محمد حسين", "hr"],
  ["السيد نوار زهير عبد الزهرة", "hr"],
  ["السيد علاء حميد عبد النبي", "hr"],
  ["السيد علي عبد العباس كريم", "hr"],
];
const MEDIA = [
  ["م.م عباس عاصم مطشر", "media", R],
  ["م.م حسين حامد محمد", "warith"],
  ["م.م ولاء شاكر محمود", "media"],
  ["م.م كرار علي حسين", "warith"],
  ["السيد اثير احمد جاسم", "kctv"],
  ["السيد إبراهيم صلاح إبراهيم", "hr"],
  ["السيد غسان حميد صالح", "hr"],
  ["السيد بهاء عبد الستار جبار", "hr"],
  ["السيد معتز عباس علي", "hr"],
  ["السيد علي محمد عدنان", "warith"],
];
const RECEPTION = [
  ["السيد عبد الأمير طه فرحان", "pr", R],
  ["د. عمار منصور مذكور", "pr"],
  ["م.م امير فلاح كاظم", "warith"],
  ["م.م فواز فائق صليبي", "warith"],
  ["السيد بارق صافي محسن عبد زيد", "hr"],
  ["السيد سمير حمزة عبد العظيم", "hr"],
  ["السيد مصطفى سالم عبد", "hr"],
  ["السيد عبدالله خليل ابراهيم", "hr"],
  ["السيد حيدر حميد مجيد", "hr"],
  ["السيد علي زيدان", "warith"],
];
const FINANCE = [
  ["السيد ارشد شاكر مرزة", "hr", R],
  ["السيد حسن عبد الأمير عبود", "hr"],
  ["السيد علاء احمد فارس", "warith"],
];

const ORGS = {
  warith: { ar: "جامعة وارث الأنبياء", en: "Univ. of Warith Al-Anbiyaa" },
  baghdad: { ar: "جامعة بغداد", en: "Univ. of Baghdad" },
  mosul: { ar: "جامعة الموصل", en: "Univ. of Mosul" },
  basrah: { ar: "جامعة البصرة", en: "Univ. of Basrah" },
  kufa: { ar: "جامعة الكوفة", en: "Univ. of Kufa" },
  karbala: { ar: "جامعة كربلاء", en: "Univ. of Karbala" },
  misan: { ar: "جامعة ميسان", en: "Univ. of Misan" },
  kut: { ar: "جامعة واسط", en: "Univ. of wasit" },
  qadisiyah: { ar: "جامعة القادسية", en: "Univ. of Al-Qadisiyah" },
  anbar: { ar: "جامعة الأنبار", en: "Univ. of Anbar" },
  samarra: { ar: "جامعة سامراء", en: "Univ. of Samarra" },
  mustansiriyah: { ar: "الجامعة المستنصرية", en: "Mustansiriyah Univ." },
  atu: {
    ar: "جامعة الفرات الأوسط التقنية",
    en: "Al-Furat Al-Awsat Technical Univ.",
  },
  hr: { ar: "قسم تطوير الموارد البشرية", en: "HR Development Dept." },
  media: { ar: "قسم الإعلام", en: "Media Dept." },
  pr: { ar: "قسم العلاقات العامة", en: "Public Relations Dept." },
  sgo: { ar: "مكتب الأمين العام", en: "Office of the Secretary-General" },
  mof: { ar: "وزارة المالية", en: "Ministry of Finance" },
  kctv: {
    ar: "مجموعة قنوات كربلاء الفضائية",
    en: "Karbala Satellite Channels",
  },
};

const people = (list) =>
  list.map(([name, org, r]) => ({
    name,
    org: typeof org === "string" ? ORGS[org] : org,
    chair: !!r,
  }));

/* Ordered by priority: advisory and scientific first, support committees last. */
export const COMMITTEES = [
  {
    icon: "crown",
    t: { ar: "اللجنة الاستشارية العليا", en: "Supreme Advisory Committee" },
    people: people(ADVISORY),
  },
  {
    icon: "flask",
    t: { ar: "اللجنة العلمية", en: "Scientific Committee" },
    people: people(SCIENTIFIC),
  },
  {
    icon: "clipboard",
    t: { ar: "اللجنة التحضيرية", en: "Preparatory Committee" },
    people: people(PREPARATORY),
  },
  {
    icon: "megaphone",
    t: { ar: "اللجنة الإعلامية", en: "Media Committee" },
    people: people(MEDIA),
  },
  {
    icon: "handshake",
    t: { ar: "لجنة الاستقبال", en: "Reception Committee" },
    people: people(RECEPTION),
  },
  {
    icon: "wallet",
    t: { ar: "اللجنة المالية", en: "Finance Committee" },
    people: people(FINANCE),
  },
];

export const CONTACTS = [
  {
    icon: "phone",
    t: { ar: "اللجنة التحضيرية", en: "Preparatory Committee" },
    v: "07880103500",
    href: "tel:07880103500",
  },
  {
    icon: "phone",
    t: { ar: "لجنة الاستقبال", en: "Reception Committee" },
    v: "07800977809",
    href: "tel:07800977809",
  },
  {
    icon: "mail",
    t: { ar: "البريد الإلكتروني", en: "Email" },
    v: EMAIL,
    href: null,
  },
];
