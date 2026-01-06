const DrMamdoohConfig = {
  name: "الدكتور مَمْدُوح",
  welcomeMessages: [
    "يَا هَلَا! معك الدكتور مَمْدُوح، كِيف بقدر أُساعدكم؟ بتمنالكم الصحة والسلامة",
    "أهلًا وسهلًا! أنا الدكتور مَمْدُوح، جاهز لأي استفسار. سلامتكم",
    "مرحبًا! الدكتور مَمْدُوح معكم، شو أخبارك؟ بتمنى تكونوا بصحة وعافية"
  ],
  closingPhrases: ["بتمنالكم الصحة والسلامة", "الله يعطيكم العافية", "سلامتكم", "أدام الله عليكم الصحة"]
};

const HospitalKnowledge = {
  departments: {
    "وحدة الكلى الاصطناعية": { floor: "الطابق الثالث", details: "مخصصة لعلاج مرضى الكلى والغسيل الكلوي" },
    "بنك الدم الأردني": { floor: "الطابق الثالث", details: "للتبرع بالدم واستقبال التبرعات" },
    "عيادة النسائية والتوليد": { floor: "الطابق الثالث", details: "لمتابعة الحمل والولادة والعناية بالنساء" },
    "دائرة المختبرات الطبية": { floor: "الطابق الثالث", details: "لإجراء الفحوصات المخبرية والتحاليل" },

    "عيادة العيون": { floor: "الطابق الثاني", details: "لعلاج أمراض العيون وفحص النظر" },
    "عمليات العيون": { floor: "الطابق الثاني", details: "لإجراء العمليات الجراحية للعيون" },
    "بنك العيون الأردني": { floor: "الطابق الثاني", details: "لزراعة القرنية والتبرع بالعيون" },
    "دائرة الباطنية": { floor: "الطابق الثاني", details: "لعلاج الأمراض الباطنية والمزمنة" },
    "عيادة الأنف والأذن والحنجرة": { floor: "الطابق الثاني", details: "لعلاج أمراض الأنف والأذن والحنجرة" },
    "عيادة الطب الشرعي": { floor: "الطابق الثاني", details: "للفحوصات والتحاليل الشرعية" },
    "عيادة الجلدية": { floor: "الطابق الثاني", details: "لعلاج الأمراض الجلدية والتجميل" },
    "عيادة الأمراض الصدرية": { floor: "الطابق الثاني", details: "لعلاج أمراض الصدر والجهاز التنفسي" },

    "عيادة النسائية": { floor: "الطابق الأول", details: "للمراجعات النسائية العامة" },
    "عيادة جراحة الدماغ والأعصاب": { floor: "الطابق الأول", details: "لعلاج أمراض الدماغ والأعصاب" },
    "عيادة المسالك البولية": { floor: "الطابق الأول", details: "لعلاج أمراض المسالك البولية والكلى" },
    "عيادة التأهيل": { floor: "الطابق الأول", details: "للتأهيل الطبي والعلاج الطبيعي" },

    "مكتب معلومات الحاسوب": { floor: "الطابق الأرضي", details: "للاستفسارات التقنية والدعم الفني" },
    "دائرة شؤون المرضى": { floor: "الطابق الأرضي", details: "لمتابعة شؤون المرضى والتسهيلات" },
    "استعلامات العيادات": { floor: "الطابق الأرضي", details: "لاستعلامات العيادات والمعلومات" },
    "حجز المواعيد": { floor: "الطابق الأرضي", details: "لحجز المواعيد في جميع العيادات" },
    "سحب الدم": { floor: "الطابق الأرضي", details: "لمحطة سحب العينات والدم" },
    "طباعة أوراق": { floor: "الطابق الأرضي", details: "لطباعة التقارير والنتائج" },

    "الباطني (روماتيزم والمفاصل)": { floor: "طابق ناقص واحد", details: "لعلاج أمراض الروماتيزم والمفاصل" },
    "عيادة الدم والأورام": { floor: "طابق ناقص واحد", details: "لعلاج أمراض الدم والأورام" },
    "عيادة الأمراض النفسية": { floor: "طابق ناقص واحد", details: "لعلاج الأمراض النفسية والاستشارات" },
    "مختبر سحب العينات": { floor: "طابق ناقص واحد", details: "لمختبر سحب العينات الطبية" },
    "عيادة الأطفال": { floor: "طابق ناقص واحد", details: "لعلاج أمراض الأطفال والمتابعة" }
  },

  aliases: {
    "القلب": ["القلب", "أمراض القلب", "قلبي", "قسطرة"],
    "الأطفال": ["الأطفال", "طفل", "أطفال", "مولود", "رضيع"],
    "العيون": ["العيون", "عين", "نظر", "بصر"],
    "الطوارئ": ["الطوارئ", "إسعاف", "طارئ", "حادث"],
    "الباطنية": ["الباطنية", "باطني", "داخلي"],
    "النسائية": ["النسائية", "نساء", "توليد", "حمل", "ولادة"],
    "المسالك البولية": ["المسالك البولية", "بولية", "كلى", "مسالك"],
    "الجلدية": ["الجلدية", "جلد", "بشرة"],
    "الصدرية": ["الصدرية", "صدر", "تنفس", "ربو"],
    "الأنف والأذن": ["الأنف", "أذن", "حنجرة", "سمع", "أنف وأذن"]
  },

  appointment: {
    phoneNumbers: ["📞 5353444", "📞 5353666", "📞 فرعي 2704", "📞 فرعي 2705", "📞 خارجي مباشر 5353355", "📞 خارجي مباشر 5353366", "📞 من داخل الجامعة: 31 أو 32"],
    contactForIssues: ["📞 رئيس فرع كتبة العيادات: 2733", "📞 رئيسة شعبة الكتبة: 2673", "📞 مكتب مديرة دائرة شؤون المرضى: 2174"],
    onlineBooking: {
      link: "https://apphosp.ju.edu.jo/Appointment/app",
      instructions: "للحجز من الموقع:\n1. أدخل إلى رابط الحجوزات\n2. أدخل حسابك\n3. اختر نوع التأمين الخاص بك"
    },
    location: "📍 قسم المواعيد المركزية (مبنى العيادات الخارجية - الطابق الأرضي مقابل الكافتيريا)"
  },

  workingHours: {
    "العيادات الخارجية": {
      morning: "🕗 الصباحية: من 8 صباحاً إلى 12 ظهراً",
      evening: "🕛 المسائية: من 12 ظهراً إلى 3:30 مساءً",
      note: "📅 الجمعة والسبت: عطلة رسمية للعيادات الخارجية"
    },
    "عيادات طب الأسرة": {
      morning: "🕗 الصباحية: من 8 صباحاً إلى 4 مساءً",
      evening: "🕓 المسائية: من 4 مساءً إلى 8 مساءً",
      note: "📅 الجمعة والسبت: من 8 صباحاً إلى 8 مساءً (للأطفال فقط)"
    }
  },

  departmentLinks: {
    "جراحة الكلى والمسالك البولية": {
      link: "https://hospital.ju.edu.jo/Lists/MedicineSections/Disp_Section_copy(1).aspx?Section=%D8%AC%D8%B1%D8%A7%D8%AD%D8%A9%20%D8%A7%D9%84%D9%83%D9%84%D9%89%20%D9%88%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D9%84%D9%83%20%D8%A7%D9%84%D8%A8%D9%88%D9%84%D9%8A%D8%A9",
      text: "🔗 معلومات عن قسم جراحة الكلى والمسالك البولية",
      description: "هون رح تلاقي كل المعلومات الي بتخص القسم، حتى أسماء الدكاترة مع مواعيدهم"
    },
    "جراحة العظام والمفاصل": {
      link: "https://hospital.ju.edu.jo/Lists/MedicineSections/Disp_Section_copy(1).aspx?Section=%D8%AC%D8%B1%D8%A7%D8%AD%D8%A9%20%D8%A7%D9%84%D8%B9%D8%B8%D8%A7%D9%85%20%D9%88%D8%A7%D9%84%D9%85%D9%81%D8%A7%D8%B5%D9%84",
      text: "🔗 معلومات عن قسم جراحة العظام والمفاصل",
      description: "هون رح تلاقي كل المعلومات الي بتخص الشعبة، من معلومات وأسماء أطباء وأوقات حجز"
    },
    "جراحة الدماغ والأعصاب": {
      link: "https://hospital.ju.edu.jo/Lists/MedicineSections/Disp_Section_copy(1).aspx?Section=%D8%AC%D8%B1%D8%A7%D8%AD%D8%A9%20%D8%A7%D9%84%D8%AF%D9%85%D8%A7%D8%BA%20%D9%88%D8%A7%D9%84%D8%A3%D8%B9%D8%B5%D8%A7%D8%A8",
      text: "🔗 معلومات عن قسم جراحة الدماغ والأعصاب",
      description: "هون رح تلاقي كل المعلومات الي بتخص الشعبة، من معلومات وأسماء أطباء وأوقات حجز"
    },
    "جراحة الأنف والأذن والحنجرة": {
      link: "https://hospital.ju.edu.jo/Lists/MedicineSections/Disp_Section_copy(1).aspx?Section=%D8%B4%D8%B9%D8%A8%D8%A9%20%D8%AC%D8%B1%D8%A7%D8%AD%D8%A9%20%D8%A7%D9%84%D8%A3%D9%86%D9%81%20%D9%88%D8%A7%D9%84%D8%A3%D8%B0%D9%86%20%D9%88%D8%A7%D9%84%D8%AD%D9%8F%D9%86%D8%AC%D8%B1%D8%A9%20%D9%88%D8%A3%D9%85%D8%B1%D8%A7%D8%B6%20%D8%A7%D9%84%D8%B3%D9%85%D8%B9%20%D9%88%D8%A7%D9%84%D8%AA%D9%88%D8%B2%D8%A7%D9%86",
      text: "🔗 معلومات عن قسم جراحة الأنف والأذن والحنجرة",
      description: "هون رح تلاقي كل المعلومات الي بتخص الشعبة، من معلومات وأسماء أطباء وأوقات حجز"
    }
  },

  visitingHours: {
    weekdays: "🕓 أيام الأسبوع: من الساعة 4 إلى 7 مساءً",
    holidays: "🕚 أيام العطل والأعياد: من 11 صباحاً إلى 6 مساءً",
    restrictions: ["❌ ممنوع إدخال أطفال تحت 12 سنة", "❌ ممنوع إدخال مأكولات للمرضى (التغذية حسب إرشادات الطبيب)"]
  },

  createAccount: {
    steps: [
      "1️⃣ أدخل على موقع مستشفى الجامعة الأردنية: http://hospital.ju.edu.jo",
      "2️⃣ أنشئ حساب عن طريق إدخال الرقم الوطني ورقم القيد المدني",
      "3️⃣ أدخل رقم الهاتف والبريد الإلكتروني عشان نتذكرك بالموعد"
    ],
    note: "📱 بعد ما تسوي حساب، بتقدر تحجز مواعيدك إلكترونيًا وتتلقى تذكيرات"
  }
};

class DrMamdoohBrain {
  constructor() {
    this.conversationHistory = [];
    this.initializeKeywords();
  }

  normalizeArabic(text) {
    if (!text) return "";
    return text
      .toString()
      .replace(/[\u064B-\u065F\u0670]/g, "")
      .replace(/[إأآا]/g, "ا")
      .replace(/[ى]/g, "ي")
      .replace(/[ة]/g, "ه")
      .replace(/[^\u0621-\u063A\u0641-\u064A0-9\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  initializeKeywords() {
    this.keywordMap = {
      "موقع": ["أين", "اين", "وين", "مكان", "اماكن", "أماكن", "موقع", "الطابق", "الدور", "اقسام", "الأقسام"],
      "مرحبا": ["مرحبا", "اهلا", "السلام", "صباح", "مساء", "اهلاً", "هلا"],
      "حجز": ["حجز", "موعد", "متى", "كيف احجز", "احجز", "مواعيد"],
      "أوقات": ["وقت", "متى تفتح", "متى تغلق", "ساعات", "دوام", "اوقات العمل"],
      "جراحة الكلى": ["الكلى", "مسالك", "بولية"],
      "جراحة العظام": ["العظام", "مفاصل", "عظام"],
      "جراحة الدماغ": ["الدماغ", "اعصاب", "مخ"],
      "جراحة الأنف": ["انف", "اذن", "حنجرة", "سمع"],
      "زيارة": ["زيارة", "زوار", "زيارات"],
      "حساب": ["حساب", "تسجيل", "اشتراك", "انشاء"],

      "اتصال": ["اتصال", "الاتصال", "ارقام", "أرقام", "رقم", "هاتف", "تلفون", "هاتف المستشفى", "الاتصال بالمستشفى"]
    };
  }

  containsAny(text, keywords) {
    const t = this.normalizeArabic(text);
    return keywords.some(k => t.includes(this.normalizeArabic(k)));
  }

  isGreeting(text) {
    const t = this.normalizeArabic(text);
    const greetings = ["مرحبا", "اهلا", "السلام", "صباح", "مساء", "هلا"];
    return greetings.some(g => t.includes(this.normalizeArabic(g)));
  }

  processQuestion(question) {
    const q = this.normalizeArabic(question);
    let response = "";

    if (q.includes("اماكن") && q.includes("اقسام")) response = this.getAllDepartments();
    else if (this.isGreeting(q)) response = this.getGreetingResponse();
    else if (this.containsAny(q, this.keywordMap["اتصال"])) response = this.getAppointmentResponse(q);
    else if (this.containsAny(q, this.keywordMap["حجز"])) response = this.getAppointmentResponse(q);
    else if (this.containsAny(q, this.keywordMap["أوقات"])) response = this.getHoursResponse();
    else if (this.containsAny(q, this.keywordMap["زيارة"])) response = this.getVisitingHours();
    else if (this.containsAny(q, this.keywordMap["حساب"])) response = this.getCreateAccount();
    else if (this.containsAny(q, this.keywordMap["جراحة الكلى"])) response = this.getDepartmentLink("جراحة الكلى والمسالك البولية");
    else if (this.containsAny(q, this.keywordMap["جراحة العظام"])) response = this.getDepartmentLink("جراحة العظام والمفاصل");
    else if (this.containsAny(q, this.keywordMap["جراحة الدماغ"])) response = this.getDepartmentLink("جراحة الدماغ والأعصاب");
    else if (this.containsAny(q, this.keywordMap["جراحة الأنف"])) response = this.getDepartmentLink("جراحة الأنف والأذن والحنجرة");
    else if (this.containsAny(q, this.keywordMap["موقع"])) response = this.getSpecificDepartmentLocation(q);
    else response = this.getGeneralResponse();

    this.saveConversation(question, response);
    return response + "\n\n" + this.getRandomClosing();
  }

  getSpecificDepartmentLocation(question) {
    const q = this.normalizeArabic(question);

    if (q.includes("جميع") || q.includes("كل") || q.includes("كلها")) return this.getAllDepartments();

    for (const [deptName, deptInfo] of Object.entries(HospitalKnowledge.departments)) {
      if (q.includes(this.normalizeArabic(deptName))) return this.formatDepartmentResponse(deptName, deptInfo);
    }

    for (const alias in HospitalKnowledge.aliases) {
      const aliasWords = HospitalKnowledge.aliases[alias].map(w => this.normalizeArabic(w));
      if (aliasWords.some(w => q.includes(w))) {
        for (const [deptName2, deptInfo2] of Object.entries(HospitalKnowledge.departments)) {
          if (this.normalizeArabic(deptName2).includes(this.normalizeArabic(alias))) {
            return this.formatDepartmentResponse(deptName2, deptInfo2);
          }
        }
      }
    }

    return this.getUnknownDepartmentResponse(question);
  }

  formatDepartmentResponse(deptName, deptInfo) {
    return `📍 ${deptName}\n\n🏢 الموقع: ${deptInfo.floor}\n📋 التفاصيل: ${deptInfo.details}`;
  }

  getAllDepartments() {
    let response = "🏥 جميع أقسام مستشفى الجامعة الأردنية:\n\n";
    const floors = {};

    for (const [deptName, deptInfo] of Object.entries(HospitalKnowledge.departments)) {
      if (!floors[deptInfo.floor]) floors[deptInfo.floor] = [];
      floors[deptInfo.floor].push(`• ${deptName}`);
    }

    for (const [floor, depts] of Object.entries(floors)) {
      response += `${floor}:\n${depts.join("\n")}\n\n`;
    }

    response += "💡 تلميح: اكتب اسم القسم مثل: وين عيادة العيون؟";
    return response.trim();
  }

  getUnknownDepartmentResponse() {
    return "⚠️ ما فهمت أي قسم تقصد بالضبط!\n\n💡 جرب تكتب:\n• وين عيادة العيون؟\n• أين قسم الأطفال؟\n• جميع الأقسام";
  }

  getGreetingResponse() {
    const greetings = DrMamdoohConfig.welcomeMessages;
    return greetings[Math.floor(Math.random() * greetings.length)];
  }

  getAppointmentResponse(question) {
    const q = this.normalizeArabic(question);
    let response = "📅 معلومات الحجز في مستشفى الجامعة:\n\n";

    if (q.includes("هاتف") || q.includes("تلفون") || q.includes("اتصال") || q.includes("رقم") || q.includes("ارقام")) {
      response += "📞 الحجز عن طريق الهاتف:\n" + HospitalKnowledge.appointment.phoneNumbers.map(n => `• ${n}`).join("\n");
      response += "\n\n📞 للاستفسار وحل المشاكل:\n" + HospitalKnowledge.appointment.contactForIssues.map(c => `• ${c}`).join("\n");
      response += `\n\n📍 الموقع: ${HospitalKnowledge.appointment.location}`;
    } else if (q.includes("موقع") || q.includes("انترنت") || q.includes("الكتروني") || q.includes("اونلاين")) {
      response += `🌐 الحجز الإلكتروني:\n🔗 ${HospitalKnowledge.appointment.onlineBooking.link}\n\n📋 طريقة الحجز:\n${HospitalKnowledge.appointment.onlineBooking.instructions}`;
    } else {
      response += "طرق الحجز المتاحة:\n\n";
      response += `1) الحجز الهاتفي:\n• ${HospitalKnowledge.appointment.phoneNumbers.slice(0, 3).join("، ")}\n• ${HospitalKnowledge.appointment.location}\n\n`;
      response += `2) الحجز الإلكتروني:\n• ${HospitalKnowledge.appointment.onlineBooking.link}\n• ${HospitalKnowledge.appointment.onlineBooking.instructions}`;
    }

    return response;
  }

  getHoursResponse() {
    const ext = HospitalKnowledge.workingHours["العيادات الخارجية"];
    const fam = HospitalKnowledge.workingHours["عيادات طب الأسرة"];
    return (
      "🕒 أوقات دوام المستشفى:\n\n" +
      "🏥 العيادات الخارجية:\n" +
      `${ext.morning}\n${ext.evening}\n${ext.note}\n\n` +
      "👨‍⚕️ عيادات طب الأسرة:\n" +
      `${fam.morning}\n${fam.evening}\n${fam.note}`
    );
  }

  getDepartmentLink(departmentName) {
    const dept = HospitalKnowledge.departmentLinks[departmentName];
    if (!dept) return "عفواً، هذا القسم غير متوفر حالياً.";
    return `${departmentName}:\n\n${dept.description}\n\n${dept.text}\n${dept.link}`;
  }

  getVisitingHours() {
    let response = "🕓 أوقات زيارة المرضى:\n\n";
    response += `الأيام العادية:\n${HospitalKnowledge.visitingHours.weekdays}\n\n`;
    response += `العطل والأعياد:\n${HospitalKnowledge.visitingHours.holidays}\n\n`;
    response += "🚫 الممنوعات:\n" + HospitalKnowledge.visitingHours.restrictions.map(r => `• ${r}`).join("\n");
    return response;
  }

  getCreateAccount() {
    return (
      "👤 كيفية إنشاء حساب على موقع المستشفى:\n\n" +
      HospitalKnowledge.createAccount.steps.join("\n") +
      "\n\n" +
      HospitalKnowledge.createAccount.note
    );
  }

  getGeneralResponse() {
    return "⚠️ ما فهمت سؤالك!\n\n💡 جرب تسأل عن:\n• أماكن الأقسام\n• حجز المواعيد\n• أرقام الاتصال بالمستشفى\n• أوقات العمل\n• أوقات الزيارة\n• إنشاء حساب";
  }

  getRandomClosing() {
    const closings = DrMamdoohConfig.closingPhrases;
    return closings[Math.floor(Math.random() * closings.length)];
  }

  saveConversation(question, answer) {
    this.conversationHistory.push({ question, answer, timestamp: new Date().toLocaleString("ar-EG") });
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("drMamdoohChat", JSON.stringify(this.conversationHistory));
    }
  }
}

window.DrMamdoohConfig = DrMamdoohConfig;
window.HospitalDB = HospitalKnowledge;

window.askDrMamdooh = function (question) {
  if (!window.drMamdoohInstance) window.drMamdoohInstance = new DrMamdoohBrain();
  return window.drMamdoohInstance.processQuestion(question);
};
