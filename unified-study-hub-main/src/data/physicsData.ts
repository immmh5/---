// ╔══════════════════════════════════════════════════════════════════╗
// ║          قسم البيانات - مكتبة الفيزياء 1 الرقمية              ║
// ║    يمكنك تعديل هذا الملف لتحديث المحتوى بدون لمس الأكواد      ║
// ╚══════════════════════════════════════════════════════════════════╝

export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
}

export interface InteractiveQuestion {
  question: string;
  answer: string;
}

export interface Lesson {
  id: string;
  title: string;
  explanation: string;
  summary: string;
  applications: string;
  questions: InteractiveQuestion[];
  quiz: QuizQuestion[];
}

export interface Chapter {
  id: number;
  title: string;
  titleEn: string;
  color: string;
  gradient: string;
  icon: string;
  description: string;
  lessons: Lesson[];
}

// ─── الفصل الأول: مدخل إلى علم الفيزياء ─────────────────────────
const chapter1: Chapter = {
  id: 1,
  title: "مدخل إلى علم الفيزياء",
  titleEn: "A Physics Toolkit",
  color: "#4F46E5",
  gradient: "from-indigo-500 to-blue-600",
  icon: "🔬",
  description: "الرياضيات والفيزياء، القياس، الدقة والضبط",
  lessons: [
    {
      id: "1-1",
      title: "الرياضيات والفيزياء",
      explanation: `
<h2>🔢 الرياضيات والفيزياء</h2>

<h3>ما هي الفيزياء؟</h3>
<p>الفيزياء هي فرع من فروع العلم يُعنى بدراسة العالم الطبيعي، أي المادة والطاقة وكيفية ارتباطهما. يحاول الفيزيائيون فهم الظواهر الطبيعية من خلال الملاحظة والتجربة وبناء النماذج الرياضية.</p>

<h3>العلاقة بين الرياضيات والفيزياء</h3>
<p>الرياضيات هي <strong>لغة الفيزياء</strong>. فالقوانين الفيزيائية تُعبَّر عنها بمعادلات رياضية تصف العلاقة بين الكميات الفيزيائية. بدون الرياضيات، لن نستطيع التعبير عن قوانين الطبيعة بدقة.</p>

<div class="formula-box">
<h4>📐 مثال: قانون نيوتن الثاني</h4>
<p class="formula">F = m × a</p>
<p>حيث F = القوة (نيوتن)، m = الكتلة (كجم)، a = التسارع (م/ث²)</p>
</div>

<h3>الكميات الفيزيائية</h3>
<p>تُقسم الكميات الفيزيائية إلى نوعين:</p>

<h4>1. الكميات القياسية (Scalar Quantities)</h4>
<p>هي كميات تُحدد بمقدار فقط (رقم ووحدة)، مثل:</p>
<ul>
<li><strong>المسافة</strong>: 50 كم</li>
<li><strong>الكتلة</strong>: 10 كجم</li>
<li><strong>الزمن</strong>: 5 ثوانٍ</li>
<li><strong>درجة الحرارة</strong>: 25°C</li>
<li><strong>السرعة</strong>: 60 كم/س</li>
</ul>

<h4>2. الكميات المتجهة (Vector Quantities)</h4>
<p>هي كميات تُحدد بمقدار واتجاه، مثل:</p>
<ul>
<li><strong>الإزاحة</strong>: 50 كم شمالاً</li>
<li><strong>السرعة المتجهة</strong>: 60 كم/س شرقاً</li>
<li><strong>القوة</strong>: 10 نيوتن لأعلى</li>
<li><strong>التسارع</strong>: 9.8 م/ث² لأسفل</li>
</ul>

<h3>النظام الدولي للوحدات (SI)</h3>
<p>اتفق العلماء على استخدام نظام موحد للوحدات يُسمى <strong>النظام الدولي SI</strong>:</p>

<table class="units-table">
<tr><th>الكمية</th><th>الوحدة</th><th>الرمز</th></tr>
<tr><td>الطول</td><td>متر</td><td>m</td></tr>
<tr><td>الكتلة</td><td>كيلوجرام</td><td>kg</td></tr>
<tr><td>الزمن</td><td>ثانية</td><td>s</td></tr>
<tr><td>التيار الكهربائي</td><td>أمبير</td><td>A</td></tr>
<tr><td>درجة الحرارة</td><td>كلفن</td><td>K</td></tr>
<tr><td>شدة الإضاءة</td><td>كانديلا</td><td>cd</td></tr>
<tr><td>كمية المادة</td><td>مول</td><td>mol</td></tr>
</table>

<h3>البادئات (Prefixes)</h3>
<p>تُستخدم البادئات للتعبير عن الكميات الكبيرة جداً أو الصغيرة جداً:</p>
<table class="units-table">
<tr><th>البادئة</th><th>الرمز</th><th>القيمة</th></tr>
<tr><td>جيجا</td><td>G</td><td>10⁹</td></tr>
<tr><td>ميجا</td><td>M</td><td>10⁶</td></tr>
<tr><td>كيلو</td><td>k</td><td>10³</td></tr>
<tr><td>سنتي</td><td>c</td><td>10⁻²</td></tr>
<tr><td>ملّي</td><td>m</td><td>10⁻³</td></tr>
<tr><td>مايكرو</td><td>μ</td><td>10⁻⁶</td></tr>
<tr><td>نانو</td><td>n</td><td>10⁻⁹</td></tr>
</table>

<div class="example-box">
<h4>💡 مثال محلول</h4>
<p><strong>السؤال:</strong> حوّل 5.2 كم إلى متر.</p>
<p><strong>الحل:</strong></p>
<p>1 كم = 10³ م = 1000 م</p>
<p>5.2 كم = 5.2 × 1000 = <strong>5200 م</strong></p>
</div>

<div class="example-box">
<h4>💡 مثال محلول 2</h4>
<p><strong>السؤال:</strong> حوّل 350 ملّي أمبير إلى أمبير.</p>
<p><strong>الحل:</strong></p>
<p>1 ملّي أمبير = 10⁻³ أمبير</p>
<p>350 ملّي أمبير = 350 × 10⁻³ = <strong>0.35 أمبير</strong></p>
</div>

<h3>الأرقام المعنوية (Significant Figures)</h3>
<p>الأرقام المعنوية هي الأرقام المؤكدة في القياس بالإضافة إلى رقم مقدّر واحد. قواعد تحديدها:</p>
<ul>
<li>الأرقام غير الصفرية دائماً معنوية: 456 → 3 أرقام معنوية</li>
<li>الأصفار بين أرقام غير صفرية معنوية: 1002 → 4 أرقام</li>
<li>الأصفار على يسار أول رقم غير صفري ليست معنوية: 0.0045 → رقمان</li>
<li>الأصفار على يمين الرقم الأخير مع فاصلة عشرية معنوية: 2.30 → 3 أرقام</li>
</ul>

<svg viewBox="0 0 500 200" class="illustration-svg">
  <rect x="10" y="10" width="480" height="180" rx="10" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="250" y="40" text-anchor="middle" fill="currentColor" font-size="16" font-weight="bold">الكميات الفيزيائية</text>
  <rect x="40" y="60" width="190" height="110" rx="8" fill="#4F46E520" stroke="#4F46E5" stroke-width="1.5"/>
  <text x="135" y="85" text-anchor="middle" fill="#4F46E5" font-size="14" font-weight="bold">كميات قياسية</text>
  <text x="135" y="108" text-anchor="middle" fill="currentColor" font-size="12">مقدار فقط</text>
  <text x="135" y="128" text-anchor="middle" fill="currentColor" font-size="11">المسافة - الكتلة - الزمن</text>
  <text x="135" y="148" text-anchor="middle" fill="currentColor" font-size="11">السرعة - درجة الحرارة</text>
  <rect x="270" y="60" width="190" height="110" rx="8" fill="#DC262620" stroke="#DC2626" stroke-width="1.5"/>
  <text x="365" y="85" text-anchor="middle" fill="#DC2626" font-size="14" font-weight="bold">كميات متجهة</text>
  <text x="365" y="108" text-anchor="middle" fill="currentColor" font-size="12">مقدار + اتجاه</text>
  <text x="365" y="128" text-anchor="middle" fill="currentColor" font-size="11">الإزاحة - القوة - التسارع</text>
  <text x="365" y="148" text-anchor="middle" fill="currentColor" font-size="11">السرعة المتجهة</text>
</svg>
      `,
      applications: `
<h3>🌍 تطبيقات علمية</h3>

<div class="app-card">
<h4>📡 الأقمار الصناعية ونظام GPS</h4>
<p>يستخدم نظام تحديد المواقع العالمي (GPS) معادلات فيزيائية رياضية لتحديد موقعك بدقة. الأقمار الصناعية تُرسل إشارات لاسلكية، ويتم حساب المسافة بناءً على زمن وصول الإشارة وسرعة الضوء:</p>
<p class="formula">d = c × t</p>
<p>حيث c = سرعة الضوء (3×10⁸ م/ث)، t = الزمن</p>
</div>

<div class="app-card">
<h4>🏗️ الهندسة المعمارية</h4>
<p>يستخدم المهندسون وحدات القياس والأرقام المعنوية لضمان دقة التصميمات. خطأ بسيط في التحويل بين الوحدات قد يؤدي لكوارث! مثل حادثة مسبار المريخ عام 1999 الذي ضاع بسبب خلط بين النظام المتري والبريطاني.</p>
</div>

<div class="app-card">
<h4>💊 الصيدلة والطب</h4>
<p>جرعات الأدوية تُحسب بالملّيجرام (mg) أو المايكروجرام (μg). دقة التحويل بين الوحدات مسألة حياة أو موت! الأرقام المعنوية تحدد دقة الجرعة المطلوبة.</p>
</div>
      `,
      summary: `
<h3>📝 ملخص الدرس</h3>
<ul>
<li>الفيزياء تدرس المادة والطاقة وتفاعلهما</li>
<li>الرياضيات هي لغة الفيزياء</li>
<li>الكميات القياسية: لها مقدار فقط (مسافة، كتلة، زمن)</li>
<li>الكميات المتجهة: لها مقدار واتجاه (إزاحة، قوة، تسارع)</li>
<li>النظام الدولي SI: نظام موحد للوحدات (م، كجم، ث)</li>
<li>البادئات تُستخدم للتعبير عن المضاعفات والأجزاء</li>
<li>الأرقام المعنوية تحدد دقة القياس</li>
</ul>

<div class="formula-box">
<h4>📌 القوانين المهمة</h4>
<p>• تحويل الوحدات: الكمية × معامل التحويل</p>
<p>• 1 كم = 1000 م | 1 كجم = 1000 جم</p>
<p>• 1 ساعة = 3600 ثانية</p>
</div>
      `,
      questions: [
        { question: "ما الفرق بين الكمية القياسية والكمية المتجهة؟", answer: "الكمية القياسية تُحدد بمقدار فقط (مثل المسافة والكتلة)، أما الكمية المتجهة فتُحدد بمقدار واتجاه (مثل الإزاحة والقوة)." },
        { question: "حوّل 2500 ملّيمتر إلى متر.", answer: "2500 ملّيمتر = 2500 × 10⁻³ م = 2.5 م" },
        { question: "كم عدد الأرقام المعنوية في العدد 0.00340؟", answer: "3 أرقام معنوية (3 و 4 و 0 الأخير)، الأصفار على اليسار ليست معنوية." },
        { question: "ما وحدة قياس القوة في النظام الدولي؟", answer: "نيوتن (N) وهي تساوي كجم·م/ث²" },
        { question: "اذكر 3 أمثلة على كميات متجهة.", answer: "الإزاحة، السرعة المتجهة، القوة، التسارع، العزم (أي ثلاثة منها)." }
      ],
      quiz: [
        { question: "أي مما يلي يُعد كمية متجهة؟", options: ["الكتلة", "درجة الحرارة", "الإزاحة", "الزمن"], correct: 2 },
        { question: "ما وحدة قياس الكتلة في النظام الدولي SI؟", options: ["جرام", "كيلوجرام", "طن", "باوند"], correct: 1 },
        { question: "كم عدد الأرقام المعنوية في العدد 4050؟", options: ["2", "3", "4", "1"], correct: 1 },
        { question: "1 كيلومتر يساوي:", options: ["100 متر", "1000 متر", "10000 متر", "10 متر"], correct: 1 },
        { question: "أي بادئة تعني 10⁻³؟", options: ["كيلو", "سنتي", "ملّي", "مايكرو"], correct: 2 }
      ]
    },
    {
      id: "1-2",
      title: "القياس (الدقة والضبط)",
      explanation: `
<h2>📏 القياس - الدقة والضبط</h2>

<h3>أهمية القياس في الفيزياء</h3>
<p>القياس هو عملية مقارنة كمية مجهولة بكمية معيارية (وحدة قياس). <strong>كل قياس يحتوي على قدر من عدم اليقين</strong> (الخطأ)، ولذلك من المهم فهم مفهومي الدقة والضبط.</p>

<h3>الدقة (Precision)</h3>
<p>تشير الدقة إلى <strong>مدى تقارب القياسات المتكررة</strong> لنفس الكمية من بعضها البعض. إذا حصلت على نتائج متقاربة عند تكرار القياس، فإن قياسك دقيق.</p>

<h3>الضبط (Accuracy)</h3>
<p>يشير الضبط إلى <strong>مدى قرب القياس من القيمة الحقيقية</strong> (المقبولة). القياس المضبوط هو الذي يكون قريباً من القيمة الفعلية.</p>

<svg viewBox="0 0 500 220" class="illustration-svg">
  <text x="250" y="25" text-anchor="middle" fill="currentColor" font-size="16" font-weight="bold">الدقة مقابل الضبط</text>
  <!-- Target 1: دقيق ومضبوط -->
  <circle cx="100" cy="120" r="50" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="100" cy="120" r="35" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="100" cy="120" r="20" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="100" cy="120" r="5" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="98" cy="118" r="3" fill="#22C55E"/>
  <circle cx="102" cy="122" r="3" fill="#22C55E"/>
  <circle cx="100" cy="116" r="3" fill="#22C55E"/>
  <circle cx="103" cy="120" r="3" fill="#22C55E"/>
  <text x="100" y="190" text-anchor="middle" fill="#22C55E" font-size="11" font-weight="bold">دقيق ومضبوط ✓</text>
  <!-- Target 2: دقيق غير مضبوط -->
  <circle cx="250" cy="120" r="50" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="250" cy="120" r="35" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="250" cy="120" r="20" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="250" cy="120" r="5" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="270" cy="92" r="3" fill="#EAB308"/>
  <circle cx="274" cy="96" r="3" fill="#EAB308"/>
  <circle cx="272" cy="90" r="3" fill="#EAB308"/>
  <circle cx="276" cy="94" r="3" fill="#EAB308"/>
  <text x="250" y="190" text-anchor="middle" fill="#EAB308" font-size="11" font-weight="bold">دقيق غير مضبوط</text>
  <!-- Target 3: غير دقيق وغير مضبوط -->
  <circle cx="400" cy="120" r="50" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="400" cy="120" r="35" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="400" cy="120" r="20" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="400" cy="120" r="5" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="380" cy="90" r="3" fill="#EF4444"/>
  <circle cx="420" cy="140" r="3" fill="#EF4444"/>
  <circle cx="410" cy="100" r="3" fill="#EF4444"/>
  <circle cx="385" cy="145" r="3" fill="#EF4444"/>
  <text x="400" y="190" text-anchor="middle" fill="#EF4444" font-size="11" font-weight="bold">غير دقيق وغير مضبوط ✗</text>
</svg>

<h3>الخطأ النسبي والخطأ المئوي</h3>
<div class="formula-box">
<h4>📐 القوانين</h4>
<p class="formula">الخطأ النسبي = |القيمة المقاسة - القيمة المقبولة| ÷ القيمة المقبولة</p>
<p class="formula">نسبة الخطأ المئوية = الخطأ النسبي × 100%</p>
</div>

<div class="example-box">
<h4>💡 مثال محلول</h4>
<p><strong>السؤال:</strong> قاس طالب تسارع الجاذبية فحصل على 9.6 م/ث². إذا كانت القيمة المقبولة 9.8 م/ث²، احسب نسبة الخطأ المئوية.</p>
<p><strong>الحل:</strong></p>
<p>الخطأ النسبي = |9.6 - 9.8| ÷ 9.8 = 0.2 ÷ 9.8 = 0.0204</p>
<p>نسبة الخطأ المئوية = 0.0204 × 100% = <strong>2.04%</strong></p>
</div>

<h3>أدوات القياس</h3>
<p>تختلف أدوات القياس في دقتها:</p>
<ul>
<li><strong>المسطرة</strong>: دقة 1 ملّيمتر (أقل دقة)</li>
<li><strong>القدمة ذات الورنية</strong>: دقة 0.1 ملّيمتر</li>
<li><strong>المايكرومتر</strong>: دقة 0.01 ملّيمتر (أعلى دقة)</li>
</ul>

<svg viewBox="0 0 500 120" class="illustration-svg">
  <text x="250" y="20" text-anchor="middle" fill="currentColor" font-size="14" font-weight="bold">مقارنة دقة أدوات القياس</text>
  <rect x="30" y="40" width="120" height="60" rx="8" fill="#EF444420" stroke="#EF4444"/>
  <text x="90" y="65" text-anchor="middle" fill="currentColor" font-size="12" font-weight="bold">المسطرة</text>
  <text x="90" y="85" text-anchor="middle" fill="currentColor" font-size="11">دقة: 1 mm</text>
  <rect x="190" y="40" width="120" height="60" rx="8" fill="#EAB30820" stroke="#EAB308"/>
  <text x="250" y="65" text-anchor="middle" fill="currentColor" font-size="12" font-weight="bold">الورنية</text>
  <text x="250" y="85" text-anchor="middle" fill="currentColor" font-size="11">دقة: 0.1 mm</text>
  <rect x="350" y="40" width="120" height="60" rx="8" fill="#22C55E20" stroke="#22C55E"/>
  <text x="410" y="65" text-anchor="middle" fill="currentColor" font-size="12" font-weight="bold">المايكرومتر</text>
  <text x="410" y="85" text-anchor="middle" fill="currentColor" font-size="11">دقة: 0.01 mm</text>
</svg>

<h3>التمثيل البياني</h3>
<p>يُعد التمثيل البياني من أهم الأدوات لتحليل البيانات في الفيزياء. يساعد على:</p>
<ul>
<li>اكتشاف العلاقة بين المتغيرات</li>
<li>التنبؤ بقيم لم تُقاس</li>
<li>حساب الميل والمقطع</li>
<li>تحديد نوع العلاقة (طردية، عكسية، تربيعية)</li>
</ul>

<div class="formula-box">
<h4>📐 معادلة الخط المستقيم</h4>
<p class="formula">y = mx + b</p>
<p>حيث m = الميل (slope)، b = المقطع (y-intercept)</p>
<p class="formula">الميل = Δy ÷ Δx = (y₂ - y₁) ÷ (x₂ - x₁)</p>
</div>
      `,
      applications: `
<h3>🌍 تطبيقات علمية</h3>

<div class="app-card">
<h4>🏥 الأجهزة الطبية</h4>
<p>أجهزة قياس ضغط الدم ومستوى السكر تحتاج لدقة عالية وضبط مستمر. يتم معايرة هذه الأجهزة دورياً لضمان أن القياسات قريبة من القيم الحقيقية (مضبوطة) ومتسقة (دقيقة).</p>
</div>

<div class="app-card">
<h4>🏭 مراقبة الجودة في المصانع</h4>
<p>في تصنيع القطع الميكانيكية، يُستخدم المايكرومتر لقياس الأبعاد بدقة 0.01 مم. أي انحراف عن المواصفات قد يؤدي لفشل القطعة. نسبة الخطأ المسموحة عادة أقل من 0.1%.</p>
</div>

<div class="app-card">
<h4>🌡️ الأرصاد الجوية</h4>
<p>محطات الأرصاد تستخدم أدوات قياس عالية الدقة لرصد درجة الحرارة والضغط الجوي والرطوبة. دقة التنبؤ بالطقس تعتمد بشكل مباشر على دقة القياسات الأولية.</p>
</div>
      `,
      summary: `
<h3>📝 ملخص الدرس</h3>
<ul>
<li><strong>الدقة</strong>: مدى تقارب القياسات المتكررة من بعضها</li>
<li><strong>الضبط</strong>: مدى قرب القياس من القيمة الحقيقية</li>
<li>يمكن أن يكون القياس دقيقاً لكن غير مضبوط (أو العكس)</li>
<li>نسبة الخطأ = |المقاسة - المقبولة| ÷ المقبولة × 100%</li>
<li>المايكرومتر أكثر دقة من الورنية، والورنية أدق من المسطرة</li>
<li>التمثيل البياني أداة مهمة لتحليل البيانات</li>
</ul>
      `,
      questions: [
        { question: "ما الفرق بين الدقة والضبط؟", answer: "الدقة هي تقارب القياسات المتكررة من بعضها، أما الضبط فهو قرب القياس من القيمة الحقيقية." },
        { question: "قاس طالب طول جسم 3 مرات فحصل على: 5.2 سم، 5.21 سم، 5.19 سم. هل قياساته دقيقة؟", answer: "نعم، قياساته دقيقة لأن القيم متقاربة جداً من بعضها. لكن لا نعرف إذا كانت مضبوطة بدون معرفة القيمة الحقيقية." },
        { question: "احسب نسبة الخطأ إذا كانت القيمة المقاسة 25.3 والمقبولة 25.0", answer: "نسبة الخطأ = |25.3 - 25.0| ÷ 25.0 × 100% = 0.3 ÷ 25.0 × 100% = 1.2%" }
      ],
      quiz: [
        { question: "الدقة تعني:", options: ["قرب القياس من القيمة الحقيقية", "تقارب القياسات المتكررة", "استخدام أداة قياس حديثة", "عدم وجود خطأ"], correct: 1 },
        { question: "أي أداة قياس أكثر دقة؟", options: ["المسطرة", "الشريط المتري", "القدمة ذات الورنية", "المايكرومتر"], correct: 3 },
        { question: "إذا كانت القيمة المقبولة 10 والمقاسة 9.5، فنسبة الخطأ:", options: ["5%", "50%", "0.5%", "0.05%"], correct: 0 },
        { question: "ميل الخط المستقيم يُحسب من:", options: ["Δx ÷ Δy", "Δy ÷ Δx", "x × y", "x + y"], correct: 1 }
      ]
    }
  ]
};

// ─── الفصل الثاني: تمثيل الحركة ─────────────────────────────────
const chapter2: Chapter = {
  id: 2,
  title: "تمثيل الحركة",
  titleEn: "Representing Motion",
  color: "#059669",
  gradient: "from-emerald-500 to-teal-600",
  icon: "🚗",
  description: "الحركة، الموقع والزمن، منحنى الموقع-الزمن، السرعة المتجهة",
  lessons: [
    {
      id: "2-1",
      title: "الحركة",
      explanation: `
<h2>🚶 الحركة</h2>

<h3>ما هي الحركة؟</h3>
<p>الحركة هي <strong>تغير موقع الجسم بمرور الزمن</strong> بالنسبة لنقطة مرجعية. كل شيء حولنا في حالة حركة: الأرض تدور حول الشمس، السيارات تسير في الشوارع، وحتى جزيئات الهواء تتحرك باستمرار.</p>

<h3>النقطة المرجعية (Reference Point)</h3>
<p>لتحديد ما إذا كان الجسم يتحرك أم لا، نحتاج إلى <strong>نقطة مرجعية</strong> (إطار مرجعي). الحركة نسبية - فالراكب في القطار ثابت بالنسبة للقطار لكنه متحرك بالنسبة للأرض.</p>

<div class="important-note">
<h4>⚠️ نقطة مهمة</h4>
<p>الحركة نسبية! لا يمكن وصف حركة جسم إلا بالنسبة لنقطة مرجعية محددة.</p>
</div>

<h3>المسافة والإزاحة</h3>

<h4>المسافة (Distance)</h4>
<p>هي <strong>الطول الكلي للمسار</strong> الذي يقطعه الجسم. كمية قياسية (لها مقدار فقط، دائماً موجبة).</p>

<h4>الإزاحة (Displacement)</h4>
<p>هي <strong>أقصر مسافة بين نقطة البداية ونقطة النهاية مع تحديد الاتجاه</strong>. كمية متجهة (لها مقدار واتجاه، يمكن أن تكون سالبة).</p>

<svg viewBox="0 0 500 200" class="illustration-svg">
  <text x="250" y="25" text-anchor="middle" fill="currentColor" font-size="15" font-weight="bold">المسافة مقابل الإزاحة</text>
  <!-- Path (distance) -->
  <path d="M 80 150 Q 150 50, 250 100 Q 350 150, 420 80" fill="none" stroke="#EAB308" stroke-width="3" stroke-dasharray="8,4"/>
  <text x="250" y="60" text-anchor="middle" fill="#EAB308" font-size="12">المسافة (المسار الكلي)</text>
  <!-- Displacement -->
  <line x1="80" y1="150" x2="420" y2="80" stroke="#22C55E" stroke-width="3"/>
  <polygon points="420,80 408,78 412,90" fill="#22C55E"/>
  <text x="250" y="140" text-anchor="middle" fill="#22C55E" font-size="12">الإزاحة (أقصر مسافة)</text>
  <!-- Points -->
  <circle cx="80" cy="150" r="6" fill="#4F46E5"/>
  <text x="80" y="175" text-anchor="middle" fill="currentColor" font-size="11">البداية</text>
  <circle cx="420" cy="80" r="6" fill="#EF4444"/>
  <text x="420" y="70" text-anchor="middle" fill="currentColor" font-size="11">النهاية</text>
</svg>

<div class="example-box">
<h4>💡 مثال محلول</h4>
<p><strong>السؤال:</strong> مشى شخص 3 كم شرقاً ثم 4 كم شمالاً. احسب المسافة والإزاحة.</p>
<p><strong>الحل:</strong></p>
<p>المسافة = 3 + 4 = <strong>7 كم</strong></p>
<p>الإزاحة = √(3² + 4²) = √(9 + 16) = √25 = <strong>5 كم</strong> (بزاوية شمال الشرق)</p>
</div>

<h3>مخطط الحركة (Motion Diagram)</h3>
<p>مخطط الحركة هو سلسلة من الصور المتتابعة لجسم متحرك على فترات زمنية متساوية. يُظهر:</p>
<ul>
<li>إذا كانت المسافات بين النقاط <strong>متساوية</strong> → الجسم يتحرك بسرعة ثابتة</li>
<li>إذا كانت المسافات <strong>تزداد</strong> → الجسم يتسارع</li>
<li>إذا كانت المسافات <strong>تتناقص</strong> → الجسم يتباطأ</li>
</ul>

<svg viewBox="0 0 500 150" class="illustration-svg">
  <text x="250" y="20" text-anchor="middle" fill="currentColor" font-size="14" font-weight="bold">مخططات الحركة</text>
  <!-- Constant speed -->
  <text x="50" y="50" fill="currentColor" font-size="11">سرعة ثابتة:</text>
  <circle cx="150" cy="45" r="5" fill="#22C55E"/><circle cx="200" cy="45" r="5" fill="#22C55E"/>
  <circle cx="250" cy="45" r="5" fill="#22C55E"/><circle cx="300" cy="45" r="5" fill="#22C55E"/>
  <circle cx="350" cy="45" r="5" fill="#22C55E"/><circle cx="400" cy="45" r="5" fill="#22C55E"/>
  <line x1="155" y1="45" x2="395" y2="45" stroke="#22C55E" stroke-width="1" stroke-dasharray="4"/>
  <!-- Accelerating -->
  <text x="50" y="90" fill="currentColor" font-size="11">تسارع:</text>
  <circle cx="150" cy="85" r="5" fill="#3B82F6"/><circle cx="175" cy="85" r="5" fill="#3B82F6"/>
  <circle cx="210" cy="85" r="5" fill="#3B82F6"/><circle cx="260" cy="85" r="5" fill="#3B82F6"/>
  <circle cx="325" cy="85" r="5" fill="#3B82F6"/><circle cx="410" cy="85" r="5" fill="#3B82F6"/>
  <line x1="155" y1="85" x2="405" y2="85" stroke="#3B82F6" stroke-width="1" stroke-dasharray="4"/>
  <!-- Decelerating -->
  <text x="50" y="130" fill="currentColor" font-size="11">تباطؤ:</text>
  <circle cx="150" cy="125" r="5" fill="#EF4444"/><circle cx="235" cy="125" r="5" fill="#EF4444"/>
  <circle cx="300" cy="125" r="5" fill="#EF4444"/><circle cx="350" cy="125" r="5" fill="#EF4444"/>
  <circle cx="385" cy="125" r="5" fill="#EF4444"/><circle cx="410" cy="125" r="5" fill="#EF4444"/>
  <line x1="155" y1="125" x2="405" y2="125" stroke="#EF4444" stroke-width="1" stroke-dasharray="4"/>
</svg>
      `,
      applications: `
<h3>🌍 تطبيقات علمية</h3>
<div class="app-card">
<h4>🏃 الملاحة الرياضية</h4>
<p>في سباقات الجري، المسافة الكلية التي يقطعها العداء حول المضمار مختلفة عن إزاحته. في سباق 400 متر على مضمار دائري، المسافة = 400 م لكن الإزاحة = صفر (لأنه يعود لنقطة البداية)!</p>
</div>
<div class="app-card">
<h4>✈️ الملاحة الجوية</h4>
<p>الطيارون يستخدمون الإزاحة (المسافة المباشرة + الاتجاه) لتحديد مسار الطائرة، بينما المسافة الفعلية قد تكون أطول بسبب تجنب المناطق المحظورة أو الأحوال الجوية.</p>
</div>
      `,
      summary: `
<h3>📝 ملخص الدرس</h3>
<ul>
<li>الحركة: تغير موقع الجسم بمرور الزمن بالنسبة لنقطة مرجعية</li>
<li>المسافة: الطول الكلي للمسار (قياسية، موجبة دائماً)</li>
<li>الإزاحة: أقصر مسافة بين البداية والنهاية مع الاتجاه (متجهة)</li>
<li>مخطط الحركة يُظهر موقع الجسم على فترات زمنية متساوية</li>
</ul>
      `,
      questions: [
        { question: "سيارة تحركت 100 كم شرقاً ثم 100 كم غرباً. ما المسافة؟ وما الإزاحة؟", answer: "المسافة = 200 كم. الإزاحة = صفر (لأنها عادت لنقطة البداية)." },
        { question: "كيف تميز بين جسم يتسارع وجسم يتحرك بسرعة ثابتة من مخطط الحركة؟", answer: "السرعة الثابتة: المسافات بين النقاط متساوية. التسارع: المسافات بين النقاط تزداد تدريجياً." }
      ],
      quiz: [
        { question: "الإزاحة كمية:", options: ["قياسية", "متجهة", "ليس لها وحدة", "دائماً موجبة"], correct: 1 },
        { question: "عداء أكمل دورة كاملة حول مضمار 400م. إزاحته:", options: ["400 م", "200 م", "صفر", "800 م"], correct: 2 },
        { question: "في مخطط الحركة، إذا تزايدت المسافات بين النقاط فالجسم:", options: ["ثابت", "يتسارع", "يتباطأ", "سرعته ثابتة"], correct: 1 }
      ]
    },
    {
      id: "2-2",
      title: "الموقع والزمن",
      explanation: `
<h2>📍 الموقع والزمن</h2>

<h3>نظام الإحداثيات</h3>
<p>لوصف حركة الجسم بدقة، نستخدم <strong>نظام إحداثيات</strong> مع تحديد:</p>
<ul>
<li><strong>نقطة الأصل</strong>: النقطة المرجعية (الموقع صفر)</li>
<li><strong>الاتجاه الموجب</strong>: عادة يميناً أو لأعلى</li>
<li><strong>الاتجاه السالب</strong>: عكس الاتجاه الموجب</li>
</ul>

<h3>الموقع (Position)</h3>
<p>الموقع هو <strong>بُعد الجسم عن نقطة الأصل مع تحديد الاتجاه</strong>. يُرمز له بالرمز <strong>x</strong> أو <strong>d</strong>.</p>

<h3>الفاصل الزمني (Time Interval)</h3>
<div class="formula-box">
<h4>📐 القانون</h4>
<p class="formula">Δt = t₂ - t₁</p>
<p>الفاصل الزمني = الزمن النهائي - الزمن الابتدائي</p>
</div>

<h3>الإزاحة</h3>
<div class="formula-box">
<h4>📐 القانون</h4>
<p class="formula">Δx = x₂ - x₁</p>
<p>الإزاحة = الموقع النهائي - الموقع الابتدائي</p>
<p>• إذا Δx > 0 → الحركة في الاتجاه الموجب</p>
<p>• إذا Δx < 0 → الحركة في الاتجاه السالب</p>
</div>

<div class="example-box">
<h4>💡 مثال محلول</h4>
<p><strong>السؤال:</strong> جسم موقعه الابتدائي x₁ = 2 م عند t₁ = 0 ث، وموقعه النهائي x₂ = 8 م عند t₂ = 3 ث. احسب الإزاحة والفاصل الزمني.</p>
<p><strong>الحل:</strong></p>
<p>الإزاحة: Δx = 8 - 2 = <strong>6 م</strong> (في الاتجاه الموجب)</p>
<p>الفاصل الزمني: Δt = 3 - 0 = <strong>3 ث</strong></p>
</div>

<svg viewBox="0 0 500 120" class="illustration-svg">
  <text x="250" y="20" text-anchor="middle" fill="currentColor" font-size="14" font-weight="bold">خط الأعداد - الموقع</text>
  <line x1="30" y1="60" x2="470" y2="60" stroke="currentColor" stroke-width="2"/>
  <polygon points="470,60 460,55 460,65" fill="currentColor"/>
  <text x="475" y="65" fill="currentColor" font-size="11">+x</text>
  <!-- Marks -->
  <line x1="100" y1="55" x2="100" y2="65" stroke="currentColor" stroke-width="1.5"/>
  <text x="100" y="80" text-anchor="middle" fill="currentColor" font-size="10">-2</text>
  <line x1="150" y1="55" x2="150" y2="65" stroke="currentColor" stroke-width="1.5"/>
  <text x="150" y="80" text-anchor="middle" fill="currentColor" font-size="10">-1</text>
  <line x1="200" y1="55" x2="200" y2="65" stroke="currentColor" stroke-width="1.5"/>
  <text x="200" y="80" text-anchor="middle" fill="currentColor" font-size="10">0</text>
  <line x1="250" y1="55" x2="250" y2="65" stroke="currentColor" stroke-width="1.5"/>
  <text x="250" y="80" text-anchor="middle" fill="currentColor" font-size="10">1</text>
  <line x1="300" y1="55" x2="300" y2="65" stroke="currentColor" stroke-width="1.5"/>
  <text x="300" y="80" text-anchor="middle" fill="currentColor" font-size="10">2</text>
  <line x1="350" y1="55" x2="350" y2="65" stroke="currentColor" stroke-width="1.5"/>
  <text x="350" y="80" text-anchor="middle" fill="currentColor" font-size="10">3</text>
  <line x1="400" y1="55" x2="400" y2="65" stroke="currentColor" stroke-width="1.5"/>
  <text x="400" y="80" text-anchor="middle" fill="currentColor" font-size="10">4</text>
  <!-- Position markers -->
  <circle cx="300" cy="45" r="5" fill="#4F46E5"/>
  <text x="300" y="35" text-anchor="middle" fill="#4F46E5" font-size="10">x₁=2</text>
  <circle cx="400" cy="45" r="5" fill="#EF4444"/>
  <text x="400" y="35" text-anchor="middle" fill="#EF4444" font-size="10">x₂=4</text>
  <line x1="305" y1="45" x2="395" y2="45" stroke="#22C55E" stroke-width="2"/>
  <polygon points="395,45 388,41 388,49" fill="#22C55E"/>
  <text x="350" y="105" text-anchor="middle" fill="#22C55E" font-size="11">Δx = 2 م</text>
</svg>
      `,
      applications: `
<h3>🌍 تطبيقات علمية</h3>
<div class="app-card">
<h4>📱 تطبيقات تتبع الحركة</h4>
<p>تطبيقات مثل Google Maps تتبع موقعك بمرور الزمن لحساب سرعتك والوقت المتوقع للوصول. كل هذا يعتمد على مفهوم الموقع والزمن.</p>
</div>
<div class="app-card">
<h4>⚽ التحليل الرياضي</h4>
<p>في كرة القدم، يتم تتبع مواقع اللاعبين كل جزء من الثانية باستخدام كاميرات خاصة. هذه البيانات تُستخدم لحساب المسافة المقطوعة والسرعة والتسارع.</p>
</div>
      `,
      summary: `
<h3>📝 ملخص الدرس</h3>
<ul>
<li>الموقع: بُعد الجسم عن نقطة الأصل مع الاتجاه</li>
<li>الإزاحة: Δx = x₂ - x₁ (التغير في الموقع)</li>
<li>الفاصل الزمني: Δt = t₂ - t₁</li>
<li>الإزاحة الموجبة تعني حركة في الاتجاه الموجب</li>
</ul>
      `,
      questions: [
        { question: "جسم موقعه 5 م ثم أصبح -3 م. ما إزاحته؟", answer: "Δx = -3 - 5 = -8 م (تحرك 8 م في الاتجاه السالب)" },
        { question: "هل يمكن أن تكون الإزاحة سالبة؟ وماذا يعني ذلك؟", answer: "نعم، الإزاحة السالبة تعني أن الجسم تحرك في الاتجاه السالب (عكس الاتجاه الموجب المحدد)." }
      ],
      quiz: [
        { question: "إذا كان x₁ = 3 م و x₂ = -2 م، فالإزاحة:", options: ["5 م", "-5 م", "1 م", "-1 م"], correct: 1 },
        { question: "الفاصل الزمني هو:", options: ["لحظة محددة", "الفرق بين زمنين", "سرعة الجسم", "موقع الجسم"], correct: 1 }
      ]
    },
    {
      id: "2-3",
      title: "منحنى (الموقع-الزمن)",
      explanation: `
<h2>📈 منحنى الموقع-الزمن</h2>

<h3>ما هو منحنى الموقع-الزمن؟</h3>
<p>هو رسم بياني يمثل <strong>موقع الجسم على المحور الرأسي (y) مقابل الزمن على المحور الأفقي (x)</strong>. يُعطي صورة كاملة عن حركة الجسم.</p>

<h3>قراءة منحنى الموقع-الزمن</h3>
<ul>
<li><strong>خط أفقي</strong> → الجسم ساكن (الموقع لا يتغير)</li>
<li><strong>خط مستقيم مائل لأعلى</strong> → حركة بسرعة ثابتة في الاتجاه الموجب</li>
<li><strong>خط مستقيم مائل لأسفل</strong> → حركة بسرعة ثابتة في الاتجاه السالب</li>
<li><strong>خط منحنٍ</strong> → حركة بسرعة متغيرة (تسارع أو تباطؤ)</li>
</ul>

<svg viewBox="0 0 500 280" class="illustration-svg">
  <text x="250" y="20" text-anchor="middle" fill="currentColor" font-size="14" font-weight="bold">أشكال منحنى الموقع-الزمن</text>
  <!-- Axes -->
  <line x1="60" y1="250" x2="480" y2="250" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="250" x2="60" y2="40" stroke="currentColor" stroke-width="1.5"/>
  <text x="270" y="270" text-anchor="middle" fill="currentColor" font-size="12">الزمن (t)</text>
  <text x="30" y="145" text-anchor="middle" fill="currentColor" font-size="12" transform="rotate(-90,30,145)">الموقع (x)</text>
  <!-- Stationary -->
  <line x1="80" y1="180" x2="160" y2="180" stroke="#EAB308" stroke-width="3"/>
  <text x="120" y="170" text-anchor="middle" fill="#EAB308" font-size="10">ساكن</text>
  <!-- Constant velocity positive -->
  <line x1="170" y1="220" x2="260" y2="100" stroke="#22C55E" stroke-width="3"/>
  <text x="215" y="90" text-anchor="middle" fill="#22C55E" font-size="10">سرعة ثابتة +</text>
  <!-- Constant velocity negative -->
  <line x1="270" y1="100" x2="360" y2="210" stroke="#EF4444" stroke-width="3"/>
  <text x="315" y="90" text-anchor="middle" fill="#EF4444" font-size="10">سرعة ثابتة -</text>
  <!-- Accelerating -->
  <path d="M 370 230 Q 400 220, 460 80" fill="none" stroke="#8B5CF6" stroke-width="3"/>
  <text x="430" y="70" text-anchor="middle" fill="#8B5CF6" font-size="10">تسارع</text>
</svg>

<h3>ميل منحنى الموقع-الزمن = السرعة</h3>
<div class="formula-box">
<h4>📐 العلاقة المهمة</h4>
<p class="formula">السرعة المتوسطة = ميل الخط = Δx ÷ Δt</p>
<p>ميل كبير = سرعة كبيرة | ميل صغير = سرعة صغيرة | ميل صفر = سكون</p>
</div>

<div class="example-box">
<h4>💡 مثال محلول</h4>
<p><strong>السؤال:</strong> من منحنى الموقع-الزمن، الجسم عند الموقع 2 م في الزمن 1 ث، وعند الموقع 10 م في الزمن 5 ث. احسب السرعة المتوسطة.</p>
<p><strong>الحل:</strong></p>
<p>v = Δx ÷ Δt = (10 - 2) ÷ (5 - 1) = 8 ÷ 4 = <strong>2 م/ث</strong></p>
</div>
      `,
      applications: `
<h3>🌍 تطبيقات علمية</h3>
<div class="app-card">
<h4>📊 تحليل حركة المركبات</h4>
<p>كاميرات ساهر تسجل موقع السيارة في أزمنة مختلفة. بحساب ميل منحنى الموقع-الزمن يتم تحديد سرعة السيارة ومعرفة ما إذا تجاوزت الحد المسموح.</p>
</div>
      `,
      summary: `
<h3>📝 ملخص الدرس</h3>
<ul>
<li>منحنى الموقع-الزمن: الموقع (y) مقابل الزمن (x)</li>
<li>ميل المنحنى = السرعة المتوسطة</li>
<li>خط أفقي = سكون، خط مائل = سرعة ثابتة، منحنٍ = تسارع</li>
<li>v = Δx ÷ Δt</li>
</ul>
      `,
      questions: [
        { question: "ماذا يعني خط أفقي في منحنى الموقع-الزمن؟", answer: "يعني أن الجسم ساكن (لا يتحرك) - موقعه لا يتغير مع مرور الزمن." },
        { question: "كيف تحسب السرعة من منحنى الموقع-الزمن؟", answer: "بحساب ميل الخط: السرعة = Δx ÷ Δt = التغير في الموقع ÷ التغير في الزمن." }
      ],
      quiz: [
        { question: "ميل منحنى الموقع-الزمن يمثل:", options: ["التسارع", "المسافة", "السرعة", "القوة"], correct: 2 },
        { question: "خط مستقيم مائل في منحنى الموقع-الزمن يدل على:", options: ["سكون", "تسارع", "سرعة ثابتة", "سرعة متغيرة"], correct: 2 }
      ]
    },
    {
      id: "2-4",
      title: "السرعة المتجهة",
      explanation: `
<h2>➡️ السرعة المتجهة</h2>

<h3>السرعة (Speed) مقابل السرعة المتجهة (Velocity)</h3>
<p><strong>السرعة</strong>: كمية قياسية = المسافة ÷ الزمن (مقدار فقط)</p>
<p><strong>السرعة المتجهة</strong>: كمية متجهة = الإزاحة ÷ الزمن (مقدار + اتجاه)</p>

<div class="formula-box">
<h4>📐 القوانين</h4>
<p class="formula">السرعة المتوسطة = المسافة الكلية ÷ الزمن الكلي</p>
<p class="formula">السرعة المتجهة المتوسطة = الإزاحة ÷ الزمن = Δx ÷ Δt</p>
</div>

<h3>السرعة المتجهة اللحظية</h3>
<p>هي سرعة الجسم في <strong>لحظة محددة</strong>. تُحسب من ميل المماس لمنحنى الموقع-الزمن عند تلك اللحظة.</p>

<div class="example-box">
<h4>💡 مثال محلول</h4>
<p><strong>السؤال:</strong> سيارة قطعت 150 كم شمالاً في ساعتين، ثم 100 كم جنوباً في ساعة. احسب السرعة المتوسطة والسرعة المتجهة المتوسطة.</p>
<p><strong>الحل:</strong></p>
<p>السرعة المتوسطة = المسافة الكلية ÷ الزمن الكلي = (150 + 100) ÷ 3 = <strong>83.3 كم/س</strong></p>
<p>الإزاحة = 150 - 100 = 50 كم شمالاً</p>
<p>السرعة المتجهة المتوسطة = 50 ÷ 3 = <strong>16.7 كم/س شمالاً</strong></p>
</div>

<svg viewBox="0 0 500 150" class="illustration-svg">
  <text x="250" y="20" text-anchor="middle" fill="currentColor" font-size="14" font-weight="bold">السرعة مقابل السرعة المتجهة</text>
  <rect x="30" y="40" width="200" height="90" rx="10" fill="#3B82F620" stroke="#3B82F6"/>
  <text x="130" y="65" text-anchor="middle" fill="#3B82F6" font-size="13" font-weight="bold">السرعة (Speed)</text>
  <text x="130" y="85" text-anchor="middle" fill="currentColor" font-size="11">كمية قياسية</text>
  <text x="130" y="105" text-anchor="middle" fill="currentColor" font-size="11">= مسافة ÷ زمن</text>
  <text x="130" y="120" text-anchor="middle" fill="currentColor" font-size="11">مقدار فقط</text>
  <rect x="270" y="40" width="200" height="90" rx="10" fill="#8B5CF620" stroke="#8B5CF6"/>
  <text x="370" y="65" text-anchor="middle" fill="#8B5CF6" font-size="13" font-weight="bold">السرعة المتجهة</text>
  <text x="370" y="85" text-anchor="middle" fill="currentColor" font-size="11">كمية متجهة</text>
  <text x="370" y="105" text-anchor="middle" fill="currentColor" font-size="11">= إزاحة ÷ زمن</text>
  <text x="370" y="120" text-anchor="middle" fill="currentColor" font-size="11">مقدار + اتجاه</text>
</svg>
      `,
      applications: `
<h3>🌍 تطبيقات علمية</h3>
<div class="app-card">
<h4>🚀 إطلاق الصواريخ</h4>
<p>عند إطلاق صاروخ فضائي، يجب أن تصل سرعته المتجهة إلى 11.2 كم/ث (سرعة الإفلات) في الاتجاه الصحيح للتغلب على جاذبية الأرض. ليس المقدار فقط المهم بل الاتجاه أيضاً!</p>
</div>
      `,
      summary: `
<h3>📝 ملخص الدرس</h3>
<ul>
<li>السرعة: قياسية = مسافة ÷ زمن</li>
<li>السرعة المتجهة: متجهة = إزاحة ÷ زمن</li>
<li>السرعة المتجهة اللحظية = ميل المماس لمنحنى x-t</li>
<li>v̄ = Δx ÷ Δt</li>
</ul>
      `,
      questions: [
        { question: "ما الفرق بين السرعة والسرعة المتجهة؟", answer: "السرعة كمية قياسية (مسافة÷زمن)، السرعة المتجهة كمية متجهة (إزاحة÷زمن) لها مقدار واتجاه." }
      ],
      quiz: [
        { question: "السرعة المتجهة المتوسطة تساوي:", options: ["المسافة ÷ الزمن", "الإزاحة ÷ الزمن", "التسارع × الزمن", "الموقع × الزمن"], correct: 1 },
        { question: "جسم قطع 60 م شرقاً و40 م غرباً في 10 ث. سرعته المتجهة المتوسطة:", options: ["10 م/ث", "2 م/ث شرقاً", "6 م/ث", "4 م/ث غرباً"], correct: 1 }
      ]
    }
  ]
};

// ─── الفصل الثالث: الحركة المتسارعة ─────────────────────────────
const chapter3: Chapter = {
  id: 3,
  title: "الحركة المتسارعة",
  titleEn: "Accelerated Motion",
  color: "#DC2626",
  gradient: "from-red-500 to-orange-600",
  icon: "🏎️",
  description: "التسارع، الحركة بتسارع ثابت، السقوط الحر",
  lessons: [
    {
      id: "3-1",
      title: "التسارع (العجلة)",
      explanation: `
<h2>⚡ التسارع (العجلة)</h2>

<h3>ما هو التسارع؟</h3>
<p>التسارع هو <strong>معدل التغير في السرعة المتجهة بالنسبة للزمن</strong>. إذا تغيرت سرعة الجسم (مقداراً أو اتجاهاً أو كليهما)، فإن الجسم يتسارع.</p>

<div class="formula-box">
<h4>📐 القانون الأساسي</h4>
<p class="formula">a = Δv ÷ Δt = (v₂ - v₁) ÷ (t₂ - t₁)</p>
<p>الوحدة: م/ث² (متر لكل ثانية تربيع)</p>
</div>

<h3>أنواع التسارع</h3>
<ul>
<li><strong>تسارع موجب</strong>: السرعة تزداد (الجسم يتسارع)</li>
<li><strong>تسارع سالب (تباطؤ)</strong>: السرعة تتناقص</li>
<li><strong>تسارع صفري</strong>: السرعة ثابتة</li>
</ul>

<h3>منحنى السرعة-الزمن</h3>
<p>يمثل السرعة المتجهة على المحور الرأسي مقابل الزمن على المحور الأفقي:</p>
<ul>
<li><strong>ميل المنحنى = التسارع</strong></li>
<li><strong>المساحة تحت المنحنى = الإزاحة</strong></li>
</ul>

<svg viewBox="0 0 500 250" class="illustration-svg">
  <text x="250" y="20" text-anchor="middle" fill="currentColor" font-size="14" font-weight="bold">منحنى السرعة-الزمن</text>
  <line x1="60" y1="220" x2="460" y2="220" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="220" x2="60" y2="40" stroke="currentColor" stroke-width="1.5"/>
  <text x="260" y="245" text-anchor="middle" fill="currentColor" font-size="11">الزمن (ث)</text>
  <text x="25" y="130" text-anchor="middle" fill="currentColor" font-size="11" transform="rotate(-90,25,130)">السرعة (م/ث)</text>
  <!-- Constant acceleration -->
  <line x1="80" y1="200" x2="230" y2="80" stroke="#22C55E" stroke-width="3"/>
  <text x="155" y="70" text-anchor="middle" fill="#22C55E" font-size="10">تسارع ثابت (+)</text>
  <!-- Constant velocity -->
  <line x1="240" y1="120" x2="350" y2="120" stroke="#3B82F6" stroke-width="3"/>
  <text x="295" y="110" text-anchor="middle" fill="#3B82F6" font-size="10">سرعة ثابتة (a=0)</text>
  <!-- Deceleration -->
  <line x1="360" y1="100" x2="450" y2="200" stroke="#EF4444" stroke-width="3"/>
  <text x="405" y="90" text-anchor="middle" fill="#EF4444" font-size="10">تباطؤ (-)</text>
</svg>

<div class="example-box">
<h4>💡 مثال محلول</h4>
<p><strong>السؤال:</strong> سيارة تتحرك بسرعة 20 م/ث زادت سرعتها إلى 35 م/ث خلال 5 ثوانٍ. احسب تسارعها.</p>
<p><strong>الحل:</strong></p>
<p>a = (v₂ - v₁) ÷ Δt = (35 - 20) ÷ 5 = 15 ÷ 5 = <strong>3 م/ث²</strong></p>
</div>
      `,
      applications: `
<h3>🌍 تطبيقات علمية</h3>
<div class="app-card">
<h4>🚗 أنظمة الأمان في السيارات</h4>
<p>أحزمة الأمان والوسائد الهوائية تعمل على إطالة زمن التوقف، مما يقلل التسارع (التباطؤ) وبالتالي يقلل القوة المؤثرة على الجسم. لهذا السبب التصادم البطيء أقل خطورة.</p>
</div>
<div class="app-card">
<h4>🎢 الأفعوانية (Roller Coaster)</h4>
<p>تصل قوة g في بعض الأفعوانيات إلى 5g (أي 5 أضعاف تسارع الجاذبية). الطيارون المقاتلون يتدربون على تحمل حتى 9g!</p>
</div>
      `,
      summary: `
<h3>📝 ملخص الدرس</h3>
<ul>
<li>التسارع = معدل تغير السرعة = Δv ÷ Δt</li>
<li>وحدته: م/ث²</li>
<li>تسارع موجب = زيادة السرعة، سالب = تباطؤ</li>
<li>ميل منحنى v-t = التسارع</li>
<li>المساحة تحت منحنى v-t = الإزاحة</li>
</ul>
      `,
      questions: [
        { question: "سيارة تتباطأ من 30 م/ث إلى 10 م/ث في 4 ث. ما تسارعها؟", answer: "a = (10-30)÷4 = -20÷4 = -5 م/ث² (سالب لأنها تتباطأ)" },
        { question: "ماذا يمثل ميل منحنى السرعة-الزمن؟", answer: "يمثل التسارع. ميل موجب = تسارع، ميل سالب = تباطؤ، ميل صفر = سرعة ثابتة." }
      ],
      quiz: [
        { question: "وحدة التسارع هي:", options: ["م/ث", "م/ث²", "م²/ث", "ث/م"], correct: 1 },
        { question: "تسارع سيارة زادت سرعتها من 0 إلى 20 م/ث في 4 ث:", options: ["5 م/ث²", "80 م/ث²", "4 م/ث²", "20 م/ث²"], correct: 0 },
        { question: "المساحة تحت منحنى السرعة-الزمن تمثل:", options: ["التسارع", "السرعة", "الإزاحة", "القوة"], correct: 2 }
      ]
    },
    {
      id: "3-2",
      title: "الحركة بتسارع ثابت",
      explanation: `
<h2>📊 الحركة بتسارع ثابت</h2>

<h3>معادلات الحركة بتسارع ثابت</h3>
<p>عندما يتحرك جسم بتسارع ثابت (a = ثابت)، نستخدم المعادلات التالية:</p>

<div class="formula-box">
<h4>📐 المعادلات الأربع للحركة</h4>
<p class="formula">v = v₀ + at</p>
<p class="formula">Δx = v₀t + ½at²</p>
<p class="formula">v² = v₀² + 2aΔx</p>
<p class="formula">Δx = ½(v₀ + v)t</p>
<p>حيث: v₀ = السرعة الابتدائية، v = السرعة النهائية، a = التسارع، t = الزمن، Δx = الإزاحة</p>
</div>

<h3>كيف تختار المعادلة المناسبة؟</h3>
<table class="units-table">
<tr><th>المعادلة</th><th>الكمية المجهولة غير المطلوبة</th></tr>
<tr><td>v = v₀ + at</td><td>Δx (الإزاحة)</td></tr>
<tr><td>Δx = v₀t + ½at²</td><td>v (السرعة النهائية)</td></tr>
<tr><td>v² = v₀² + 2aΔx</td><td>t (الزمن)</td></tr>
<tr><td>Δx = ½(v₀ + v)t</td><td>a (التسارع)</td></tr>
</table>

<div class="example-box">
<h4>💡 مثال محلول</h4>
<p><strong>السؤال:</strong> سيارة تنطلق من السكون بتسارع 3 م/ث². أوجد سرعتها والمسافة المقطوعة بعد 6 ثوانٍ.</p>
<p><strong>الحل:</strong></p>
<p>المعطيات: v₀ = 0، a = 3 م/ث²، t = 6 ث</p>
<p>السرعة: v = v₀ + at = 0 + 3(6) = <strong>18 م/ث</strong></p>
<p>المسافة: Δx = v₀t + ½at² = 0 + ½(3)(6²) = ½(3)(36) = <strong>54 م</strong></p>
</div>

<div class="example-box">
<h4>💡 مثال محلول 2</h4>
<p><strong>السؤال:</strong> سيارة سرعتها 25 م/ث ضغط سائقها على الفرامل فتوقفت بعد 50 م. أوجد التسارع.</p>
<p><strong>الحل:</strong></p>
<p>المعطيات: v₀ = 25 م/ث، v = 0 (توقفت)، Δx = 50 م</p>
<p>v² = v₀² + 2aΔx</p>
<p>0 = (25)² + 2a(50)</p>
<p>0 = 625 + 100a</p>
<p>a = -625 ÷ 100 = <strong>-6.25 م/ث²</strong> (سالب لأنها تتباطأ)</p>
</div>
      `,
      applications: `
<h3>🌍 تطبيقات علمية</h3>
<div class="app-card">
<h4>✈️ إقلاع الطائرات</h4>
<p>طائرة بوينج 747 تحتاج للوصول لسرعة حوالي 80 م/ث على مدرج بطول 3000 م. باستخدام v² = v₀² + 2aΔx يمكن حساب التسارع المطلوب ≈ 1.07 م/ث².</p>
</div>
<div class="app-card">
<h4>🚗 مسافة الفرملة</h4>
<p>مسافة الفرملة تتناسب مع مربع السرعة! إذا تضاعفت سرعة السيارة، تتضاعف مسافة الفرملة 4 مرات. لهذا السرعة الزائدة خطيرة جداً.</p>
</div>
      `,
      summary: `
<h3>📝 ملخص الدرس</h3>
<ul>
<li>v = v₀ + at (لا تحتاج Δx)</li>
<li>Δx = v₀t + ½at² (لا تحتاج v)</li>
<li>v² = v₀² + 2aΔx (لا تحتاج t)</li>
<li>Δx = ½(v₀ + v)t (لا تحتاج a)</li>
<li>اختر المعادلة التي تحتوي على 3 كميات معلومة وكمية مجهولة واحدة</li>
</ul>
      `,
      questions: [
        { question: "جسم يتحرك بسرعة 10 م/ث وتسارع 2 م/ث². ما سرعته بعد 5 ث؟", answer: "v = v₀ + at = 10 + 2(5) = 20 م/ث" },
        { question: "جسم يبدأ من السكون ويقطع 100 م بتسارع 4 م/ث². ما سرعته النهائية؟", answer: "v² = 0 + 2(4)(100) = 800، v = √800 ≈ 28.3 م/ث" }
      ],
      quiz: [
        { question: "جسم من السكون بتسارع 2 م/ث² لمدة 5 ث. الإزاحة:", options: ["10 م", "25 م", "50 م", "5 م"], correct: 1 },
        { question: "المعادلة v² = v₀² + 2aΔx لا تحتوي على:", options: ["السرعة", "التسارع", "الزمن", "الإزاحة"], correct: 2 }
      ]
    },
    {
      id: "3-3",
      title: "السقوط الحر",
      explanation: `
<h2>🍎 السقوط الحر</h2>

<h3>ما هو السقوط الحر؟</h3>
<p>السقوط الحر هو حركة جسم تحت تأثير <strong>الجاذبية فقط</strong> (بإهمال مقاومة الهواء). جميع الأجسام تسقط بنفس التسارع بغض النظر عن كتلتها!</p>

<div class="formula-box">
<h4>📐 تسارع الجاذبية الأرضية</h4>
<p class="formula">g = 9.8 م/ث² ≈ 10 م/ث²</p>
<p>اتجاهه دائماً نحو الأسفل (نحو مركز الأرض)</p>
</div>

<h3>معادلات السقوط الحر</h3>
<p>نفس معادلات الحركة بتسارع ثابت مع استبدال a بـ g:</p>
<div class="formula-box">
<p class="formula">v = v₀ + gt</p>
<p class="formula">Δy = v₀t + ½gt²</p>
<p class="formula">v² = v₀² + 2gΔy</p>
</div>

<div class="important-note">
<h4>⚠️ اتفاقية الإشارات</h4>
<p>إذا اعتبرنا الأعلى موجباً: g = -9.8 م/ث² (لأن الجاذبية للأسفل)</p>
<p>إذا اعتبرنا الأسفل موجباً: g = +9.8 م/ث²</p>
</div>

<h3>رمي جسم لأعلى</h3>
<p>عند رمي جسم لأعلى:</p>
<ul>
<li>السرعة تتناقص أثناء الصعود (g يعاكس الحركة)</li>
<li>عند أعلى نقطة: v = 0</li>
<li>يعود ليسقط بنفس سرعة الرمي عند نفس الارتفاع</li>
<li>زمن الصعود = زمن النزول</li>
</ul>

<svg viewBox="0 0 500 280" class="illustration-svg">
  <text x="250" y="25" text-anchor="middle" fill="currentColor" font-size="14" font-weight="bold">حركة جسم مرمي لأعلى</text>
  <!-- Ground -->
  <line x1="50" y1="250" x2="450" y2="250" stroke="currentColor" stroke-width="2" stroke-dasharray="5"/>
  <!-- Trajectory -->
  <path d="M 150 250 Q 250 40, 350 250" fill="none" stroke="#8B5CF6" stroke-width="3"/>
  <!-- Labels -->
  <circle cx="150" cy="250" r="5" fill="#22C55E"/>
  <text x="150" y="270" text-anchor="middle" fill="currentColor" font-size="10">v₀ ↑</text>
  <circle cx="250" cy="65" r="5" fill="#EAB308"/>
  <text x="250" y="55" text-anchor="middle" fill="#EAB308" font-size="11">v = 0 (أعلى نقطة)</text>
  <circle cx="350" cy="250" r="5" fill="#EF4444"/>
  <text x="350" y="270" text-anchor="middle" fill="currentColor" font-size="10">v = v₀ ↓</text>
  <!-- Arrows -->
  <line x1="160" y1="230" x2="160" y2="180" stroke="#22C55E" stroke-width="2"/>
  <polygon points="160,180 155,190 165,190" fill="#22C55E"/>
  <text x="175" y="200" fill="#22C55E" font-size="10">صعود</text>
  <line x1="340" y1="180" x2="340" y2="230" stroke="#EF4444" stroke-width="2"/>
  <polygon points="340,230 335,220 345,220" fill="#EF4444"/>
  <text x="325" y="200" fill="#EF4444" font-size="10">نزول</text>
  <!-- g arrow -->
  <line x1="420" y1="100" x2="420" y2="160" stroke="#DC2626" stroke-width="2"/>
  <polygon points="420,160 415,150 425,150" fill="#DC2626"/>
  <text x="440" y="135" fill="#DC2626" font-size="11">g</text>
</svg>

<div class="example-box">
<h4>💡 مثال محلول</h4>
<p><strong>السؤال:</strong> أُسقط حجر من أعلى برج ارتفاعه 45 م. كم يستغرق ليصل الأرض؟ وما سرعته لحظة الوصول؟ (g = 10 م/ث²)</p>
<p><strong>الحل:</strong></p>
<p>المعطيات: v₀ = 0، Δy = 45 م، g = 10 م/ث²</p>
<p>الزمن: Δy = ½gt² → 45 = ½(10)t² → t² = 9 → t = <strong>3 ث</strong></p>
<p>السرعة: v = gt = 10 × 3 = <strong>30 م/ث</strong></p>
</div>
      `,
      applications: `
<h3>🌍 تطبيقات علمية</h3>
<div class="app-card">
<h4>🌙 السقوط الحر على القمر</h4>
<p>على سطح القمر g = 1.6 م/ث² (سُدس جاذبية الأرض). لذلك رائد الفضاء يستطيع القفز لارتفاع 6 أضعاف ما يقفزه على الأرض! تجربة ريشة ومطرقة على القمر أثبتت أنهما يسقطان بنفس التسارع.</p>
</div>
<div class="app-card">
<h4>🪂 القفز بالمظلة</h4>
<p>القافز يصل لسرعة نهائية حوالي 55 م/ث (200 كم/س) بسبب مقاومة الهواء. عند فتح المظلة تقل السرعة إلى 5 م/ث تقريباً.</p>
</div>
      `,
      summary: `
<h3>📝 ملخص الدرس</h3>
<ul>
<li>السقوط الحر: حركة تحت تأثير الجاذبية فقط</li>
<li>g = 9.8 ≈ 10 م/ث² (ثابت لجميع الأجسام)</li>
<li>نفس معادلات الحركة مع a = g</li>
<li>عند أعلى نقطة: v = 0</li>
<li>زمن الصعود = زمن النزول</li>
</ul>
      `,
      questions: [
        { question: "لماذا تصل الريشة والحجر للأرض في نفس الوقت في الفراغ؟", answer: "لأن تسارع الجاذبية ثابت ولا يعتمد على الكتلة. في الفراغ لا توجد مقاومة هواء، فجميع الأجسام تسقط بنفس التسارع g." },
        { question: "رُمي كرة لأعلى بسرعة 20 م/ث. ما أقصى ارتفاع تصله؟ (g=10)", answer: "v² = v₀² - 2gΔy → 0 = 400 - 20Δy → Δy = 20 م" }
      ],
      quiz: [
        { question: "تسارع الجاذبية الأرضية تقريباً:", options: ["5 م/ث²", "9.8 م/ث²", "15 م/ث²", "20 م/ث²"], correct: 1 },
        { question: "جسم سقط من ارتفاع 80 م. الزمن (g=10):", options: ["2 ث", "4 ث", "8 ث", "16 ث"], correct: 1 },
        { question: "عند أعلى نقطة لجسم مرمي لأعلى:", options: ["v=0, a=0", "v=0, a=g", "v=max, a=0", "v=max, a=g"], correct: 1 }
      ]
    }
  ]
};

// ─── الفصل الرابع: القوى في بعد واحد ────────────────────────────
const chapter4: Chapter = {
  id: 4,
  title: "القوى في بعد واحد",
  titleEn: "Forces in One Dimension",
  color: "#7C3AED",
  gradient: "from-violet-500 to-purple-600",
  icon: "💪",
  description: "القوة والحركة، قوانين نيوتن، قوى التأثير المتبادل",
  lessons: [
    {
      id: "4-1",
      title: "القوة والحركة",
      explanation: `
<h2>⚡ القوة والحركة</h2>

<h3>ما هي القوة؟</h3>
<p>القوة هي <strong>تأثير يُغيّر حالة حركة الجسم</strong> (سرعته أو اتجاهه أو شكله). القوة كمية متجهة لها مقدار واتجاه، وحدتها <strong>نيوتن (N)</strong>.</p>

<h3>قوانين نيوتن الثلاثة</h3>

<h4>القانون الأول (قانون القصور الذاتي)</h4>
<p>الجسم الساكن يبقى ساكناً، والجسم المتحرك يبقى متحركاً بسرعة ثابتة في خط مستقيم، <strong>ما لم تؤثر عليه قوة محصلة</strong>.</p>

<div class="important-note">
<h4>⚠️ القصور الذاتي</h4>
<p>القصور الذاتي هو ميل الجسم لمقاومة تغيير حالته الحركية. كلما زادت كتلة الجسم زاد قصوره الذاتي.</p>
</div>

<h4>القانون الثاني</h4>
<div class="formula-box">
<h4>📐 القانون الأهم في الميكانيكا</h4>
<p class="formula">F = m × a</p>
<p class="formula">a = F ÷ m</p>
<p>القوة المحصلة = الكتلة × التسارع</p>
<p>التسارع يتناسب طردياً مع القوة وعكسياً مع الكتلة</p>
</div>

<h4>القانون الثالث (الفعل ورد الفعل)</h4>
<p>لكل فعل رد فعل <strong>مساوٍ في المقدار ومعاكس في الاتجاه</strong>.</p>

<svg viewBox="0 0 500 200" class="illustration-svg">
  <text x="250" y="25" text-anchor="middle" fill="currentColor" font-size="14" font-weight="bold">قوانين نيوتن الثلاثة</text>
  <!-- Law 1 -->
  <rect x="20" y="45" width="140" height="130" rx="8" fill="#3B82F620" stroke="#3B82F6"/>
  <text x="90" y="70" text-anchor="middle" fill="#3B82F6" font-size="11" font-weight="bold">القانون الأول</text>
  <text x="90" y="90" text-anchor="middle" fill="currentColor" font-size="9">القصور الذاتي</text>
  <text x="90" y="110" text-anchor="middle" fill="currentColor" font-size="9">الجسم يقاوم</text>
  <text x="90" y="125" text-anchor="middle" fill="currentColor" font-size="9">تغيير حالته</text>
  <circle cx="90" cy="150" r="12" fill="#3B82F640" stroke="#3B82F6"/>
  <line x1="78" y1="150" x2="65" y2="150" stroke="#22C55E" stroke-width="2"/>
  <line x1="102" y1="150" x2="115" y2="150" stroke="#EF4444" stroke-width="2"/>
  <text x="90" y="173" text-anchor="middle" fill="currentColor" font-size="8">ΣF = 0</text>
  <!-- Law 2 -->
  <rect x="180" y="45" width="140" height="130" rx="8" fill="#22C55E20" stroke="#22C55E"/>
  <text x="250" y="70" text-anchor="middle" fill="#22C55E" font-size="11" font-weight="bold">القانون الثاني</text>
  <text x="250" y="95" text-anchor="middle" fill="currentColor" font-size="12" font-weight="bold">F = ma</text>
  <text x="250" y="115" text-anchor="middle" fill="currentColor" font-size="9">التسارع يتناسب</text>
  <text x="250" y="130" text-anchor="middle" fill="currentColor" font-size="9">طردياً مع القوة</text>
  <text x="250" y="145" text-anchor="middle" fill="currentColor" font-size="9">عكسياً مع الكتلة</text>
  <!-- Law 3 -->
  <rect x="340" y="45" width="140" height="130" rx="8" fill="#EF444420" stroke="#EF4444"/>
  <text x="410" y="70" text-anchor="middle" fill="#EF4444" font-size="11" font-weight="bold">القانون الثالث</text>
  <text x="410" y="90" text-anchor="middle" fill="currentColor" font-size="9">الفعل ورد الفعل</text>
  <circle cx="385" cy="130" r="15" fill="#3B82F640" stroke="#3B82F6"/>
  <circle cx="435" cy="130" r="15" fill="#EF444440" stroke="#EF4444"/>
  <line x1="400" y1="125" x2="420" y2="125" stroke="#EF4444" stroke-width="2"/>
  <polygon points="420,125 415,121 415,129" fill="#EF4444"/>
  <line x1="420" y1="135" x2="400" y2="135" stroke="#3B82F6" stroke-width="2"/>
  <polygon points="400,135 405,131 405,139" fill="#3B82F6"/>
  <text x="410" y="165" text-anchor="middle" fill="currentColor" font-size="8">F₁₂ = -F₂₁</text>
</svg>

<h3>القوة المحصلة (Net Force)</h3>
<p>هي مجموع جميع القوى المؤثرة على الجسم:</p>
<ul>
<li>قوى في نفس الاتجاه → تُجمع</li>
<li>قوى في اتجاهين متعاكسين → تُطرح</li>
</ul>

<div class="example-box">
<h4>💡 مثال محلول</h4>
<p><strong>السؤال:</strong> أثرت قوة 50 نيوتن على جسم كتلته 10 كجم. احسب تسارعه.</p>
<p><strong>الحل:</strong></p>
<p>a = F ÷ m = 50 ÷ 10 = <strong>5 م/ث²</strong></p>
</div>

<h3>الوزن مقابل الكتلة</h3>
<div class="formula-box">
<h4>📐 قانون الوزن</h4>
<p class="formula">W = m × g</p>
<p>الوزن = الكتلة × تسارع الجاذبية</p>
<p>الوزن قوة (متجهة، نيوتن) | الكتلة خاصية (قياسية، كجم)</p>
</div>
      `,
      applications: `
<h3>🌍 تطبيقات علمية</h3>
<div class="app-card">
<h4>🚀 إطلاق الصواريخ</h4>
<p>الصاروخ يعمل بمبدأ قانون نيوتن الثالث: يطرد الغازات للأسفل (فعل)، فتدفعه الغازات للأعلى (رد فعل). كلما زادت قوة الدفع وقلّت الكتلة، زاد التسارع (F=ma).</p>
</div>
<div class="app-card">
<h4>🚗 حزام الأمان</h4>
<p>عند التوقف المفاجئ، يستمر جسمك بالحركة للأمام (قانون أول - القصور الذاتي). حزام الأمان يوفر القوة اللازمة لإيقافك بأمان عبر توزيعها على مساحة كبيرة.</p>
</div>
      `,
      summary: `
<h3>📝 ملخص الدرس</h3>
<ul>
<li>القانون الأول: الجسم يبقى على حاله ما لم تؤثر عليه قوة محصلة</li>
<li>القانون الثاني: F = ma</li>
<li>القانون الثالث: لكل فعل رد فعل مساوٍ ومعاكس</li>
<li>الوزن: W = mg (قوة الجاذبية)</li>
<li>الكتلة ثابتة، الوزن يتغير حسب g</li>
</ul>
      `,
      questions: [
        { question: "ما الفرق بين الكتلة والوزن؟", answer: "الكتلة: كمية المادة (قياسية، كجم، ثابتة في كل مكان). الوزن: قوة الجاذبية (متجهة، نيوتن، يتغير حسب المكان). W = mg" },
        { question: "جسم كتلته 5 كجم على الأرض. ما وزنه؟ وما وزنه على القمر (g=1.6)؟", answer: "على الأرض: W = 5×9.8 = 49 N. على القمر: W = 5×1.6 = 8 N" }
      ],
      quiz: [
        { question: "قانون نيوتن الثاني:", options: ["F = mv", "F = ma", "F = mg²", "F = m/a"], correct: 1 },
        { question: "وزن جسم كتلته 20 كجم (g=10):", options: ["2 N", "20 N", "200 N", "2000 N"], correct: 2 },
        { question: "القصور الذاتي يعتمد على:", options: ["السرعة", "الكتلة", "التسارع", "القوة"], correct: 1 }
      ]
    },
    {
      id: "4-2",
      title: "استخدام قوانين نيوتن",
      explanation: `
<h2>📋 استخدام قوانين نيوتن</h2>

<h3>مخطط الجسم الحر (Free Body Diagram)</h3>
<p>هو رسم يُظهر <strong>جميع القوى المؤثرة على جسم واحد</strong> كأسهم. خطوات رسمه:</p>
<ol>
<li>ارسم الجسم كنقطة أو مستطيل</li>
<li>حدد جميع القوى المؤثرة عليه</li>
<li>ارسم كل قوة كسهم يبدأ من الجسم باتجاهها الصحيح</li>
<li>طول السهم يتناسب مع مقدار القوة</li>
</ol>

<svg viewBox="0 0 500 220" class="illustration-svg">
  <text x="250" y="25" text-anchor="middle" fill="currentColor" font-size="14" font-weight="bold">مخطط الجسم الحر - صندوق على سطح</text>
  <!-- Box -->
  <rect x="200" y="100" width="80" height="50" rx="4" fill="#8B5CF620" stroke="#8B5CF6" stroke-width="2"/>
  <text x="240" y="130" text-anchor="middle" fill="currentColor" font-size="11">m</text>
  <!-- Weight -->
  <line x1="240" y1="150" x2="240" y2="200" stroke="#EF4444" stroke-width="3"/>
  <polygon points="240,200 235,190 245,190" fill="#EF4444"/>
  <text x="260" y="195" fill="#EF4444" font-size="11">W = mg</text>
  <!-- Normal -->
  <line x1="240" y1="100" x2="240" y2="55" stroke="#22C55E" stroke-width="3"/>
  <polygon points="240,55 235,65 245,65" fill="#22C55E"/>
  <text x="265" y="65" fill="#22C55E" font-size="11">Fn (القوة العمودية)</text>
  <!-- Applied force -->
  <line x1="280" y1="125" x2="350" y2="125" stroke="#3B82F6" stroke-width="3"/>
  <polygon points="350,125 340,120 340,130" fill="#3B82F6"/>
  <text x="340" y="115" fill="#3B82F6" font-size="11">Fa (القوة المؤثرة)</text>
  <!-- Friction -->
  <line x1="200" y1="125" x2="140" y2="125" stroke="#EAB308" stroke-width="3"/>
  <polygon points="140,125 150,120 150,130" fill="#EAB308"/>
  <text x="140" y="115" fill="#EAB308" font-size="11">f (الاحتكاك)</text>
  <!-- Ground -->
  <line x1="100" y1="152" x2="380" y2="152" stroke="currentColor" stroke-width="1" stroke-dasharray="5"/>
</svg>

<h3>القوة العمودية (Normal Force)</h3>
<p>هي قوة تأثير السطح على الجسم الملامس له، <strong>عمودية على السطح</strong> دائماً. على سطح أفقي بدون قوى رأسية إضافية:</p>
<div class="formula-box">
<p class="formula">Fn = W = mg</p>
</div>

<h3>الوزن الظاهري في المصعد</h3>
<ul>
<li>المصعد ساكن أو بسرعة ثابتة: الوزن الظاهري = الوزن الحقيقي</li>
<li>المصعد يتسارع لأعلى: الوزن الظاهري > الوزن الحقيقي</li>
<li>المصعد يتسارع لأسفل: الوزن الظاهري < الوزن الحقيقي</li>
<li>سقوط حر: الوزن الظاهري = صفر (انعدام الوزن)</li>
</ul>

<div class="formula-box">
<h4>📐 الوزن الظاهري في المصعد</h4>
<p class="formula">Fn = m(g + a) ← لأعلى</p>
<p class="formula">Fn = m(g - a) ← لأسفل</p>
</div>

<div class="example-box">
<h4>💡 مثال محلول</h4>
<p><strong>السؤال:</strong> شخص كتلته 60 كجم في مصعد يتسارع لأعلى بمقدار 2 م/ث². ما وزنه الظاهري؟ (g=10)</p>
<p><strong>الحل:</strong></p>
<p>Fn = m(g + a) = 60(10 + 2) = 60 × 12 = <strong>720 N</strong></p>
<p>(وزنه الحقيقي = 60 × 10 = 600 N، لذا يشعر بزيادة في وزنه)</p>
</div>
      `,
      applications: `
<h3>🌍 تطبيقات علمية</h3>
<div class="app-card">
<h4>🏋️ تدريب رواد الفضاء</h4>
<p>في محطة الفضاء الدولية، رواد الفضاء في حالة سقوط حر مستمر حول الأرض، لذلك يعيشون في انعدام الوزن (الوزن الظاهري = 0) رغم وجود الجاذبية!</p>
</div>
      `,
      summary: `
<h3>📝 ملخص الدرس</h3>
<ul>
<li>مخطط الجسم الحر: رسم جميع القوى على الجسم</li>
<li>القوة العمودية: عمودية على السطح، تمنع الاختراق</li>
<li>على سطح أفقي: Fn = mg</li>
<li>في المصعد: Fn = m(g±a) حسب اتجاه التسارع</li>
</ul>
      `,
      questions: [
        { question: "شخص كتلته 70 كجم في مصعد يتسارع لأسفل بـ 3 م/ث². ما وزنه الظاهري؟", answer: "Fn = m(g-a) = 70(10-3) = 70×7 = 490 N (أقل من وزنه الحقيقي 700 N)" }
      ],
      quiz: [
        { question: "القوة العمودية اتجاهها:", options: ["دائماً لأعلى", "عمودية على السطح", "موازية للسطح", "نحو المركز"], correct: 1 },
        { question: "في مصعد يسقط حراً، الوزن الظاهري:", options: ["يزداد", "يبقى ثابتاً", "صفر", "يتضاعف"], correct: 2 }
      ]
    },
    {
      id: "4-3",
      title: "قوى التأثير المتبادل",
      explanation: `
<h2>🔄 قوى التأثير المتبادل</h2>

<h3>قانون نيوتن الثالث بالتفصيل</h3>
<p>عندما يؤثر جسم A بقوة على جسم B، فإن B يؤثر على A بقوة <strong>مساوية في المقدار ومعاكسة في الاتجاه</strong>.</p>

<div class="formula-box">
<h4>📐 القانون</h4>
<p class="formula">F(A على B) = -F(B على A)</p>
<p>القوتان تؤثران على جسمين مختلفين (لا تلغيان بعضهما!)</p>
</div>

<h3>أمثلة على أزواج الفعل ورد الفعل</h3>
<ul>
<li>قدمك تدفع الأرض للخلف ← الأرض تدفعك للأمام (المشي)</li>
<li>الأرض تجذبك لأسفل ← أنت تجذب الأرض لأعلى</li>
<li>الصاروخ يدفع الغاز لأسفل ← الغاز يدفع الصاروخ لأعلى</li>
</ul>

<svg viewBox="0 0 500 150" class="illustration-svg">
  <text x="250" y="25" text-anchor="middle" fill="currentColor" font-size="14" font-weight="bold">الفعل ورد الفعل</text>
  <!-- Person walking -->
  <circle cx="150" cy="70" r="20" fill="#3B82F620" stroke="#3B82F6" stroke-width="2"/>
  <text x="150" y="75" text-anchor="middle" fill="currentColor" font-size="10">شخص</text>
  <rect x="100" y="95" width="300" height="15" fill="#8B5CF620" stroke="#8B5CF6"/>
  <text x="250" y="106" text-anchor="middle" fill="currentColor" font-size="9">الأرض</text>
  <!-- Forces -->
  <line x1="175" y1="90" x2="230" y2="90" stroke="#22C55E" stroke-width="2.5"/>
  <polygon points="230,90 222,86 222,94" fill="#22C55E"/>
  <text x="210" y="82" fill="#22C55E" font-size="9">رد فعل الأرض →</text>
  <line x1="125" y1="95" x2="70" y2="95" stroke="#EF4444" stroke-width="2.5"/>
  <polygon points="70,95 78,91 78,99" fill="#EF4444"/>
  <text x="80" y="85" fill="#EF4444" font-size="9">← فعل القدم</text>
  <text x="250" y="140" text-anchor="middle" fill="currentColor" font-size="10">القوتان متساويتان ومتعاكستان لكن على جسمين مختلفين</text>
</svg>

<div class="important-note">
<h4>⚠️ خطأ شائع</h4>
<p>زوج الفعل ورد الفعل لا يلغيان بعضهما لأنهما يؤثران على <strong>جسمين مختلفين</strong>. الوزن والقوة العمودية ليسا زوج فعل ورد فعل!</p>
</div>

<h3>حبل الشد</h3>
<p>عند سحب جسم بحبل:</p>
<ul>
<li>قوة الشد في الحبل متساوية في كل نقطة (حبل عديم الكتلة)</li>
<li>الحبل ينقل القوة ولا يضيف عليها</li>
</ul>
      `,
      applications: `
<h3>🌍 تطبيقات علمية</h3>
<div class="app-card">
<h4>🚤 محرك القارب النفاث</h4>
<p>القارب النفاث يدفع الماء للخلف (فعل)، فيدفعه الماء للأمام (رد فعل). نفس مبدأ عمل الصاروخ لكن مع الماء بدل الغاز.</p>
</div>
<div class="app-card">
<h4>🏊 السباحة</h4>
<p>السبّاح يدفع الماء للخلف بيديه (فعل)، فيدفعه الماء للأمام (رد فعل). كلما دفع الماء بقوة أكبر، تحرك أسرع.</p>
</div>
      `,
      summary: `
<h3>📝 ملخص الدرس</h3>
<ul>
<li>قانون نيوتن الثالث: F₁₂ = -F₂₁</li>
<li>القوتان على جسمين مختلفين</li>
<li>لا تلغيان بعضهما أبداً</li>
<li>أمثلة: المشي، السباحة، الصواريخ</li>
</ul>
      `,
      questions: [
        { question: "هل الوزن والقوة العمودية زوج فعل ورد فعل؟ ولماذا؟", answer: "لا! لأنهما يؤثران على نفس الجسم. زوج الوزن: الأرض تجذبك + أنت تجذب الأرض. زوج القوة العمودية: السطح يدفعك + أنت تدفع السطح." }
      ],
      quiz: [
        { question: "قوتا الفعل ورد الفعل:", options: ["تؤثران على نفس الجسم", "تؤثران على جسمين مختلفين", "غير متساويتين", "في نفس الاتجاه"], correct: 1 },
        { question: "عند المشي، القوة التي تدفعك للأمام مصدرها:", options: ["قدمك", "الأرض", "الجاذبية", "الهواء"], correct: 1 }
      ]
    }
  ]
};

// ─── الفصل الخامس: القوى في بعدين ────────────────────────────────
const chapter5: Chapter = {
  id: 5,
  title: "القوى في بعدين",
  titleEn: "Forces in Two Dimensions",
  color: "#EA580C",
  gradient: "from-orange-500 to-amber-600",
  icon: "📐",
  description: "المتجهات، الاحتكاك، القوة والحركة في بعدين",
  lessons: [
    {
      id: "5-1",
      title: "المتجهات",
      explanation: `
<h2>↗️ المتجهات</h2>

<h3>تمثيل المتجهات</h3>
<p>المتجه يُمثل بسهم: <strong>طوله يمثل المقدار</strong> و<strong>اتجاهه يمثل الاتجاه</strong>.</p>

<h3>جمع المتجهات</h3>
<h4>طريقة الرأس إلى الذيل</h4>
<p>ارسم المتجه الأول، ثم ضع بداية المتجه الثاني عند نهاية الأول. المحصلة: من بداية الأول إلى نهاية الأخير.</p>

<h4>تحليل المتجهات إلى مركبات</h4>
<p>أي متجه يمكن تحليله إلى مركبتين متعامدتين (أفقية ورأسية):</p>

<div class="formula-box">
<h4>📐 تحليل المتجهات</h4>
<p class="formula">Ax = A × cos(θ)</p>
<p class="formula">Ay = A × sin(θ)</p>
<p class="formula">A = √(Ax² + Ay²)</p>
<p class="formula">θ = tan⁻¹(Ay ÷ Ax)</p>
</div>

<svg viewBox="0 0 500 250" class="illustration-svg">
  <text x="250" y="25" text-anchor="middle" fill="currentColor" font-size="14" font-weight="bold">تحليل المتجه إلى مركبات</text>
  <!-- Axes -->
  <line x1="100" y1="200" x2="400" y2="200" stroke="currentColor" stroke-width="1.5"/>
  <line x1="100" y1="200" x2="100" y2="50" stroke="currentColor" stroke-width="1.5"/>
  <text x="410" y="205" fill="currentColor" font-size="11">x</text>
  <text x="95" y="45" fill="currentColor" font-size="11">y</text>
  <!-- Vector A -->
  <line x1="100" y1="200" x2="320" y2="80" stroke="#8B5CF6" stroke-width="3"/>
  <polygon points="320,80 308,86 314,92" fill="#8B5CF6"/>
  <text x="230" y="120" fill="#8B5CF6" font-size="14" font-weight="bold">A</text>
  <!-- Ax -->
  <line x1="100" y1="200" x2="320" y2="200" stroke="#3B82F6" stroke-width="2.5" stroke-dasharray="6"/>
  <polygon points="320,200 310,195 310,205" fill="#3B82F6"/>
  <text x="210" y="220" fill="#3B82F6" font-size="12">Ax = A·cos(θ)</text>
  <!-- Ay -->
  <line x1="320" y1="200" x2="320" y2="80" stroke="#22C55E" stroke-width="2.5" stroke-dasharray="6"/>
  <polygon points="320,80 315,90 325,90" fill="#22C55E"/>
  <text x="370" y="145" fill="#22C55E" font-size="12">Ay = A·sin(θ)</text>
  <!-- Angle -->
  <path d="M 140 200 A 40 40 0 0 0 125 175" fill="none" stroke="#EAB308" stroke-width="2"/>
  <text x="150" y="185" fill="#EAB308" font-size="13">θ</text>
</svg>

<div class="example-box">
<h4>💡 مثال محلول</h4>
<p><strong>السؤال:</strong> قوة مقدارها 100 N تصنع زاوية 30° مع الأفقي. أوجد مركبتيها.</p>
<p><strong>الحل:</strong></p>
<p>Fx = 100 × cos(30°) = 100 × 0.866 = <strong>86.6 N</strong></p>
<p>Fy = 100 × sin(30°) = 100 × 0.5 = <strong>50 N</strong></p>
</div>
      `,
      applications: `
<h3>🌍 تطبيقات علمية</h3>
<div class="app-card">
<h4>✈️ هبوط الطائرة في رياح جانبية</h4>
<p>يجب على الطيار تحليل سرعة الرياح إلى مركبات وتعديل اتجاه الطائرة. يستخدم جمع المتجهات لحساب المسار الصحيح.</p>
</div>
      `,
      summary: `
<h3>📝 ملخص الدرس</h3>
<ul>
<li>المتجه: مقدار + اتجاه</li>
<li>Ax = A·cos(θ)، Ay = A·sin(θ)</li>
<li>A = √(Ax² + Ay²)</li>
<li>θ = tan⁻¹(Ay/Ax)</li>
</ul>
      `,
      questions: [
        { question: "متجه مقداره 50 بزاوية 60°. أوجد مركبتيه.", answer: "Ax = 50×cos60° = 25، Ay = 50×sin60° = 43.3" }
      ],
      quiz: [
        { question: "المركبة الأفقية للمتجه:", options: ["A·sin(θ)", "A·cos(θ)", "A·tan(θ)", "A/cos(θ)"], correct: 1 },
        { question: "محصلة متجهين 3 و 4 متعامدين:", options: ["7", "1", "5", "12"], correct: 2 }
      ]
    },
    {
      id: "5-2",
      title: "الاحتكاك",
      explanation: `
<h2>🔥 الاحتكاك</h2>

<h3>ما هو الاحتكاك؟</h3>
<p>قوة تعاكس حركة الجسم أو محاولة حركته عند تلامس سطحين. تنشأ بسبب <strong>خشونة الأسطح على المستوى المجهري</strong>.</p>

<h3>أنواع الاحتكاك</h3>

<h4>1. الاحتكاك السكوني (Static Friction)</h4>
<p>يمنع الجسم الساكن من الحركة. يزداد مع زيادة القوة المؤثرة حتى يصل لحده الأقصى.</p>
<div class="formula-box">
<p class="formula">fs ≤ μs × Fn</p>
<p>μs = معامل الاحتكاك السكوني</p>
</div>

<h4>2. الاحتكاك الحركي (Kinetic Friction)</h4>
<p>يعاكس حركة الجسم المتحرك. قيمته ثابتة وأقل من الاحتكاك السكوني الأقصى.</p>
<div class="formula-box">
<p class="formula">fk = μk × Fn</p>
<p>μk = معامل الاحتكاك الحركي (μk < μs)</p>
</div>

<div class="example-box">
<h4>💡 مثال محلول</h4>
<p><strong>السؤال:</strong> صندوق كتلته 20 كجم على سطح أفقي (μk = 0.3). ما قوة الاحتكاك الحركي؟</p>
<p><strong>الحل:</strong></p>
<p>Fn = mg = 20 × 10 = 200 N</p>
<p>fk = μk × Fn = 0.3 × 200 = <strong>60 N</strong></p>
</div>
      `,
      applications: `
<h3>🌍 تطبيقات علمية</h3>
<div class="app-card">
<h4>🚗 نظام ABS للفرامل</h4>
<p>نظام منع انغلاق الفرامل يحافظ على الاحتكاك السكوني (الأكبر) بدلاً من الحركي بين الإطار والطريق، مما يقلل مسافة الفرملة ويحافظ على التحكم بالمقود.</p>
</div>
<div class="app-card">
<h4>⛸️ التزلج على الجليد</h4>
<p>معامل الاحتكاك بين الجليد والمزلجة صغير جداً (≈0.01)، لذلك يمكن التزلج بسلاسة. طبقة رقيقة من الماء تتكون تحت المزلجة تقلل الاحتكاك أكثر.</p>
</div>
      `,
      summary: `
<h3>📝 ملخص الدرس</h3>
<ul>
<li>الاحتكاك: قوة تعاكس الحركة</li>
<li>الاحتكاك السكوني ≥ الحركي</li>
<li>fk = μk × Fn</li>
<li>الاحتكاك لا يعتمد على مساحة التلامس</li>
</ul>
      `,
      questions: [
        { question: "لماذا الاحتكاك السكوني أكبر من الحركي؟", answer: "لأن الأسطح الساكنة تتشابك أكثر على المستوى المجهري، فتحتاج قوة أكبر لبدء الحركة مقارنة بالحفاظ عليها." }
      ],
      quiz: [
        { question: "الاحتكاك الحركي:", options: ["أكبر من السكوني", "يساوي السكوني", "أصغر من السكوني", "لا علاقة بينهما"], correct: 2 },
        { question: "قوة الاحتكاك تعتمد على:", options: ["مساحة التلامس", "القوة العمودية", "سرعة الجسم", "لون السطح"], correct: 1 }
      ]
    },
    {
      id: "5-3",
      title: "القوة والحركة في بعدين",
      explanation: `
<h2>🎯 القوة والحركة في بعدين</h2>

<h3>حركة جسم على سطح مائل</h3>
<p>عند وضع جسم على سطح مائل بزاوية θ، يتحلل الوزن إلى مركبتين:</p>

<div class="formula-box">
<h4>📐 القوى على السطح المائل</h4>
<p class="formula">المركبة الموازية للسطح: W‖ = mg·sin(θ)</p>
<p class="formula">المركبة العمودية على السطح: W⊥ = mg·cos(θ)</p>
<p class="formula">القوة العمودية: Fn = mg·cos(θ)</p>
<p class="formula">الاحتكاك: f = μ × mg·cos(θ)</p>
</div>

<svg viewBox="0 0 500 250" class="illustration-svg">
  <text x="250" y="25" text-anchor="middle" fill="currentColor" font-size="14" font-weight="bold">القوى على سطح مائل</text>
  <!-- Incline -->
  <line x1="80" y1="220" x2="400" y2="220" stroke="currentColor" stroke-width="1"/>
  <line x1="80" y1="220" x2="350" y2="80" stroke="currentColor" stroke-width="2"/>
  <!-- Box -->
  <rect x="200" y="120" width="40" height="35" rx="3" fill="#8B5CF620" stroke="#8B5CF6" stroke-width="2" transform="rotate(-24, 220, 137)"/>
  <!-- Weight -->
  <line x1="220" y1="145" x2="220" y2="210" stroke="#EF4444" stroke-width="2.5"/>
  <polygon points="220,210 215,200 225,200" fill="#EF4444"/>
  <text x="235" y="210" fill="#EF4444" font-size="10">W=mg</text>
  <!-- Normal -->
  <line x1="215" y1="130" x2="180" y2="80" stroke="#22C55E" stroke-width="2.5"/>
  <polygon points="180,80 188,87 182,92" fill="#22C55E"/>
  <text x="165" y="75" fill="#22C55E" font-size="10">Fn</text>
  <!-- Component parallel -->
  <line x1="225" y1="150" x2="280" y2="175" stroke="#3B82F6" stroke-width="2" stroke-dasharray="5"/>
  <text x="290" y="180" fill="#3B82F6" font-size="9">mg·sinθ</text>
  <!-- Friction -->
  <line x1="210" y1="135" x2="165" y2="115" stroke="#EAB308" stroke-width="2.5"/>
  <polygon points="165,115 175,116 172,122" fill="#EAB308"/>
  <text x="145" y="110" fill="#EAB308" font-size="10">f</text>
  <!-- Angle -->
  <path d="M 120 220 A 40 40 0 0 0 112 200" fill="none" stroke="#EAB308" stroke-width="1.5"/>
  <text x="130" y="210" fill="#EAB308" font-size="12">θ</text>
</svg>

<div class="example-box">
<h4>💡 مثال محلول</h4>
<p><strong>السؤال:</strong> صندوق كتلته 10 كجم على سطح مائل بزاوية 30° (μk = 0.2). أوجد تسارعه.</p>
<p><strong>الحل:</strong></p>
<p>القوة المحركة: mg·sin30° = 10×10×0.5 = 50 N</p>
<p>القوة العمودية: Fn = mg·cos30° = 100×0.866 = 86.6 N</p>
<p>الاحتكاك: fk = 0.2 × 86.6 = 17.3 N</p>
<p>القوة المحصلة: 50 - 17.3 = 32.7 N</p>
<p>التسارع: a = 32.7 ÷ 10 = <strong>3.27 م/ث²</strong></p>
</div>
      `,
      applications: `
<h3>🌍 تطبيقات علمية</h3>
<div class="app-card">
<h4>🛣️ تصميم الطرق المنحدرة</h4>
<p>يستخدم المهندسون معادلات السطح المائل لتحديد أقصى زاوية ميل للطريق تضمن عدم انزلاق السيارات حتى في الأجواء الممطرة.</p>
</div>
      `,
      summary: `
<h3>📝 ملخص الدرس</h3>
<ul>
<li>على السطح المائل: الوزن يتحلل لمركبتين</li>
<li>W‖ = mg·sinθ (تسبب الانزلاق)</li>
<li>W⊥ = mg·cosθ (يعادلها القوة العمودية)</li>
<li>Fn = mg·cosθ على السطح المائل</li>
</ul>
      `,
      questions: [
        { question: "ماذا يحدث لقوة الاحتكاك عند زيادة زاوية الميل؟", answer: "تقل قوة الاحتكاك لأن Fn = mg·cosθ تقل مع زيادة θ (cos تتناقص). وفي نفس الوقت تزداد قوة الانزلاق mg·sinθ." }
      ],
      quiz: [
        { question: "القوة العمودية على سطح مائل:", options: ["mg", "mg·sinθ", "mg·cosθ", "mg·tanθ"], correct: 2 },
        { question: "القوة التي تسبب انزلاق الجسم:", options: ["mg·cosθ", "mg·sinθ", "mg", "μ·mg"], correct: 1 }
      ]
    }
  ]
};

// ─── الفصل السادس: الحركة في بعدين ──────────────────────────────
const chapter6: Chapter = {
  id: 6,
  title: "الحركة في بعدين",
  titleEn: "Motion in Two Dimensions",
  color: "#0891B2",
  gradient: "from-cyan-500 to-blue-600",
  icon: "🎯",
  description: "حركة المقذوف، الحركة الدائرية، السرعة النسبية",
  lessons: [
    {
      id: "6-1",
      title: "حركة المقذوف",
      explanation: `
<h2>🎯 حركة المقذوف</h2>

<h3>ما هي حركة المقذوف؟</h3>
<p>حركة جسم أُطلق في الهواء تحت تأثير <strong>الجاذبية فقط</strong>. المسار يكون على شكل <strong>قطع مكافئ (Parabola)</strong>.</p>

<h3>المبدأ الأساسي</h3>
<p>حركة المقذوف هي تركيب حركتين مستقلتين:</p>
<ul>
<li><strong>حركة أفقية</strong> بسرعة ثابتة (لا توجد قوة أفقية)</li>
<li><strong>حركة رأسية</strong> بتسارع ثابت = g (سقوط حر)</li>
</ul>

<div class="formula-box">
<h4>📐 المعادلات</h4>
<p><strong>أفقياً (سرعة ثابتة):</strong></p>
<p class="formula">vx = v₀·cos(θ) = ثابت</p>
<p class="formula">Δx = vx × t</p>
<p><strong>رأسياً (سقوط حر):</strong></p>
<p class="formula">vy = v₀·sin(θ) - gt</p>
<p class="formula">Δy = v₀·sin(θ)·t - ½gt²</p>
<p><strong>أقصى ارتفاع</strong> (عند vy = 0):</p>
<p class="formula">H = v₀²·sin²(θ) ÷ (2g)</p>
<p><strong>المدى الأفقي</strong> (عند Δy = 0):</p>
<p class="formula">R = v₀²·sin(2θ) ÷ g</p>
</div>

<svg viewBox="0 0 500 280" class="illustration-svg">
  <text x="250" y="25" text-anchor="middle" fill="currentColor" font-size="14" font-weight="bold">مسار حركة المقذوف</text>
  <!-- Axes -->
  <line x1="50" y1="240" x2="470" y2="240" stroke="currentColor" stroke-width="1.5"/>
  <line x1="50" y1="240" x2="50" y2="30" stroke="currentColor" stroke-width="1.5"/>
  <!-- Parabola -->
  <path d="M 60 240 Q 140 120, 250 60 Q 360 120, 440 240" fill="none" stroke="#8B5CF6" stroke-width="3"/>
  <!-- Max height -->
  <line x1="250" y1="60" x2="250" y2="240" stroke="#EAB308" stroke-width="1" stroke-dasharray="5"/>
  <text x="265" y="55" fill="#EAB308" font-size="10">أقصى ارتفاع H</text>
  <circle cx="250" cy="60" r="4" fill="#EAB308"/>
  <!-- Range -->
  <line x1="60" y1="250" x2="440" y2="250" stroke="#22C55E" stroke-width="2"/>
  <polygon points="440,250 432,246 432,254" fill="#22C55E"/>
  <text x="250" y="265" text-anchor="middle" fill="#22C55E" font-size="11">المدى الأفقي R</text>
  <!-- Initial velocity -->
  <line x1="60" y1="240" x2="120" y2="180" stroke="#3B82F6" stroke-width="2.5"/>
  <polygon points="120,180 112,188 118,192" fill="#3B82F6"/>
  <text x="80" y="195" fill="#3B82F6" font-size="10">v₀</text>
  <!-- Angle -->
  <path d="M 90 240 A 30 30 0 0 0 82 218" fill="none" stroke="#EF4444" stroke-width="1.5"/>
  <text x="100" y="228" fill="#EF4444" font-size="11">θ</text>
  <!-- Velocity components at different points -->
  <line x1="250" y1="60" x2="290" y2="60" stroke="#3B82F6" stroke-width="2"/>
  <polygon points="290,60 283,56 283,64" fill="#3B82F6"/>
  <text x="295" y="72" fill="#3B82F6" font-size="9">vx فقط</text>
</svg>

<div class="important-note">
<h4>⚠️ نقطة مهمة</h4>
<p>أقصى مدى يتحقق عند زاوية 45°. الزاويتان المتممتان (مثل 30° و 60°) تعطيان نفس المدى.</p>
</div>

<div class="example-box">
<h4>💡 مثال محلول</h4>
<p><strong>السؤال:</strong> قُذفت كرة بسرعة 20 م/ث بزاوية 30°. أوجد أقصى ارتفاع والمدى الأفقي (g=10).</p>
<p><strong>الحل:</strong></p>
<p>أقصى ارتفاع: H = (20)²×sin²(30°) ÷ (2×10) = 400×0.25 ÷ 20 = <strong>5 م</strong></p>
<p>المدى: R = (20)²×sin(60°) ÷ 10 = 400×0.866 ÷ 10 = <strong>34.6 م</strong></p>
</div>
      `,
      applications: `
<h3>🌍 تطبيقات علمية</h3>
<div class="app-card">
<h4>⚽ الرياضات الكروية</h4>
<p>كل ركلة في كرة القدم أو رمية في كرة السلة هي حركة مقذوف! اللاعب المحترف يختار زاوية الإطلاق والسرعة المثالية بالغريزة. في كرة السلة، الزاوية المثالية للتسديد حوالي 45°-55°.</p>
</div>
<div class="app-card">
<h4>💣 المدفعية العسكرية</h4>
<p>تاريخياً، معادلات حركة المقذوف طُورت لحساب مسارات قذائف المدافع. زاوية 45° تعطي أبعد مدى (بإهمال مقاومة الهواء).</p>
</div>
      `,
      summary: `
<h3>📝 ملخص الدرس</h3>
<ul>
<li>حركة المقذوف = حركة أفقية ثابتة + سقوط حر رأسي</li>
<li>المسار: قطع مكافئ</li>
<li>H = v₀²sin²θ / (2g)</li>
<li>R = v₀²sin(2θ) / g</li>
<li>أقصى مدى عند θ = 45°</li>
</ul>
      `,
      questions: [
        { question: "لماذا المركبة الأفقية للسرعة ثابتة؟", answer: "لأنه لا توجد قوة أفقية مؤثرة (بإهمال مقاومة الهواء). القوة الوحيدة هي الجاذبية وهي رأسية." },
        { question: "مقذوف بسرعة 40 م/ث بزاوية 45°. أوجد المدى (g=10).", answer: "R = 40²×sin(90°)/10 = 1600×1/10 = 160 م" }
      ],
      quiz: [
        { question: "مسار المقذوف على شكل:", options: ["خط مستقيم", "دائرة", "قطع مكافئ", "حلزون"], correct: 2 },
        { question: "أقصى مدى يتحقق عند زاوية:", options: ["30°", "45°", "60°", "90°"], correct: 1 },
        { question: "عند أعلى نقطة للمقذوف:", options: ["v=0", "vx=0", "vy=0", "a=0"], correct: 2 }
      ]
    },
    {
      id: "6-2",
      title: "الحركة الدائرية",
      explanation: `
<h2>🔄 الحركة الدائرية</h2>

<h3>الحركة الدائرية المنتظمة</h3>
<p>حركة جسم في مسار دائري <strong>بسرعة ثابتة المقدار</strong>. رغم ثبات المقدار، الاتجاه يتغير باستمرار، لذا يوجد تسارع!</p>

<h3>التسارع المركزي</h3>
<p>يتجه دائماً <strong>نحو مركز الدائرة</strong> (لذلك سُمي مركزياً).</p>

<div class="formula-box">
<h4>📐 القوانين</h4>
<p class="formula">ac = v² ÷ r</p>
<p class="formula">Fc = m × ac = mv² ÷ r</p>
<p>حيث v = السرعة، r = نصف القطر، Fc = القوة المركزية</p>
<p class="formula">السرعة الزاوية: ω = 2π ÷ T</p>
<p class="formula">v = ω × r = 2πr ÷ T</p>
<p>T = الزمن الدوري (زمن دورة كاملة)</p>
</div>

<svg viewBox="0 0 500 260" class="illustration-svg">
  <text x="250" y="25" text-anchor="middle" fill="currentColor" font-size="14" font-weight="bold">الحركة الدائرية المنتظمة</text>
  <!-- Circle -->
  <circle cx="250" cy="150" r="90" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5"/>
  <!-- Center -->
  <circle cx="250" cy="150" r="3" fill="currentColor"/>
  <text x="260" y="155" fill="currentColor" font-size="10">المركز</text>
  <!-- Object at top -->
  <circle cx="250" cy="60" r="8" fill="#3B82F6"/>
  <!-- Velocity at top -->
  <line x1="258" y1="60" x2="310" y2="60" stroke="#22C55E" stroke-width="2.5"/>
  <polygon points="310,60 302,56 302,64" fill="#22C55E"/>
  <text x="320" y="55" fill="#22C55E" font-size="10">v (مماسية)</text>
  <!-- ac at top -->
  <line x1="250" y1="68" x2="250" y2="110" stroke="#EF4444" stroke-width="2.5"/>
  <polygon points="250,110 245,102 255,102" fill="#EF4444"/>
  <text x="275" y="95" fill="#EF4444" font-size="10">ac (مركزي)</text>
  <!-- Object at right -->
  <circle cx="340" cy="150" r="8" fill="#3B82F6"/>
  <line x1="340" y1="142" x2="340" y2="100" stroke="#22C55E" stroke-width="2.5"/>
  <polygon points="340,100 335,108 345,108" fill="#22C55E"/>
  <line x1="332" y1="150" x2="290" y2="150" stroke="#EF4444" stroke-width="2.5"/>
  <polygon points="290,150 298,146 298,154" fill="#EF4444"/>
  <!-- r -->
  <line x1="250" y1="150" x2="340" y2="150" stroke="#8B5CF6" stroke-width="1.5" stroke-dasharray="4"/>
  <text x="295" y="165" fill="#8B5CF6" font-size="10">r</text>
</svg>

<div class="example-box">
<h4>💡 مثال محلول</h4>
<p><strong>السؤال:</strong> سيارة كتلتها 1000 كجم تدور في منعطف نصف قطره 50 م بسرعة 20 م/ث. أوجد القوة المركزية.</p>
<p><strong>الحل:</strong></p>
<p>Fc = mv²/r = 1000 × (20)² ÷ 50 = 1000 × 400 ÷ 50 = <strong>8000 N</strong></p>
</div>
      `,
      applications: `
<h3>🌍 تطبيقات علمية</h3>
<div class="app-card">
<h4>🎡 الألعاب الدوارة</h4>
<p>في لعبة الأفعوانية الدائرية، عند أعلى الحلقة يحتاج الراكب لسرعة كافية حتى لا يسقط. القوة المركزية المطلوبة توفرها الجاذبية + القوة العمودية.</p>
</div>
<div class="app-card">
<h4>🌍 الأقمار الصناعية</h4>
<p>القمر الصناعي يدور حول الأرض في حركة دائرية. قوة الجاذبية توفر القوة المركزية اللازمة. السرعة المدارية لقمر قريب ≈ 7.9 كم/ث!</p>
</div>
      `,
      summary: `
<h3>📝 ملخص الدرس</h3>
<ul>
<li>الحركة الدائرية: سرعة ثابتة المقدار، متغيرة الاتجاه</li>
<li>التسارع المركزي: ac = v²/r (نحو المركز)</li>
<li>القوة المركزية: Fc = mv²/r</li>
<li>v = 2πr/T</li>
</ul>
      `,
      questions: [
        { question: "لماذا يوجد تسارع رغم ثبات السرعة في الحركة الدائرية؟", answer: "لأن اتجاه السرعة يتغير باستمرار. التسارع هو معدل تغير السرعة المتجهة (مقداراً أو اتجاهاً)." }
      ],
      quiz: [
        { question: "التسارع المركزي اتجاهه:", options: ["مماسي", "نحو المركز", "بعيداً عن المركز", "رأسي"], correct: 1 },
        { question: "إذا تضاعفت السرعة مع ثبات r، القوة المركزية:", options: ["تتضاعف", "تتربع (×4)", "تنصف", "لا تتغير"], correct: 1 }
      ]
    },
    {
      id: "6-3",
      title: "السرعة المتجهة النسبية",
      explanation: `
<h2>🔀 السرعة المتجهة النسبية</h2>

<h3>المفهوم</h3>
<p>سرعة جسم تعتمد على <strong>الإطار المرجعي</strong> للمراقب. شخص يمشي في قطار متحرك، سرعته مختلفة بالنسبة لراكب آخر في القطار عن سرعته بالنسبة لشخص واقف على الرصيف.</p>

<div class="formula-box">
<h4>📐 القانون</h4>
<p class="formula">v(A بالنسبة لـ C) = v(A بالنسبة لـ B) + v(B بالنسبة لـ C)</p>
<p>أو بالرموز: vAC = vAB + vBC</p>
</div>

<h3>الحالات</h3>
<ul>
<li><strong>نفس الاتجاه</strong>: السرعات تُجمع</li>
<li><strong>اتجاهان متعاكسان</strong>: السرعات تُطرح</li>
<li><strong>اتجاهان متعامدان</strong>: نستخدم نظرية فيثاغورس</li>
</ul>

<div class="example-box">
<h4>💡 مثال محلول</h4>
<p><strong>السؤال:</strong> قطار يسير بسرعة 80 كم/س. شخص يمشي داخل القطار بسرعة 5 كم/س في نفس اتجاه القطار. ما سرعته بالنسبة للأرض؟</p>
<p><strong>الحل:</strong></p>
<p>v = 80 + 5 = <strong>85 كم/س</strong></p>
</div>

<div class="example-box">
<h4>💡 مثال محلول 2</h4>
<p><strong>السؤال:</strong> قارب يعبر نهراً. سرعته في الماء الساكن 4 م/ث (عمودياً). تيار النهر 3 م/ث (أفقياً). ما سرعته بالنسبة للأرض؟</p>
<p><strong>الحل:</strong></p>
<p>السرعتان متعامدتان:</p>
<p>v = √(4² + 3²) = √(16 + 9) = √25 = <strong>5 م/ث</strong></p>
<p>الاتجاه: θ = tan⁻¹(3/4) = 36.9° من العمودي</p>
</div>

<svg viewBox="0 0 500 200" class="illustration-svg">
  <text x="250" y="25" text-anchor="middle" fill="currentColor" font-size="14" font-weight="bold">السرعة النسبية - قارب في نهر</text>
  <!-- River -->
  <rect x="100" y="50" width="300" height="120" fill="#3B82F610" stroke="#3B82F6" stroke-width="1" rx="5"/>
  <text x="250" y="180" text-anchor="middle" fill="#3B82F6" font-size="10">النهر</text>
  <!-- Current -->
  <line x1="130" y1="110" x2="220" y2="110" stroke="#3B82F6" stroke-width="2"/>
  <polygon points="220,110 212,106 212,114" fill="#3B82F6"/>
  <text x="175" y="100" fill="#3B82F6" font-size="10">تيار: 3 م/ث</text>
  <!-- Boat velocity in water -->
  <line x1="300" y1="160" x2="300" y2="70" stroke="#22C55E" stroke-width="2.5"/>
  <polygon points="300,70 295,80 305,80" fill="#22C55E"/>
  <text x="320" y="100" fill="#22C55E" font-size="10">4 م/ث</text>
  <!-- Resultant -->
  <line x1="300" y1="160" x2="370" y2="70" stroke="#EF4444" stroke-width="3"/>
  <polygon points="370,70 360,75 365,82" fill="#EF4444"/>
  <text x="380" y="80" fill="#EF4444" font-size="11">5 م/ث</text>
  <!-- Boat -->
  <text x="300" y="170" text-anchor="middle" font-size="18">⛵</text>
</svg>
      `,
      applications: `
<h3>🌍 تطبيقات علمية</h3>
<div class="app-card">
<h4>✈️ الطيران</h4>
<p>الطيارون يأخذون سرعة الرياح واتجاهها بعين الاعتبار. طائرة سرعتها 800 كم/س مع رياح خلفية 100 كم/س ستكون سرعتها بالنسبة للأرض 900 كم/س (وصول أسرع!).</p>
</div>
<div class="app-card">
<h4>🚗 التجاوز على الطريق</h4>
<p>عند تجاوز سيارة أمامك، السرعة النسبية بينكما هي الفرق بين سرعتيكما. إذا كنت تسير 120 كم/س والسيارة أمامك 100 كم/س، فسرعتك النسبية بالنسبة لها 20 كم/س فقط.</p>
</div>
      `,
      summary: `
<h3>📝 ملخص الدرس</h3>
<ul>
<li>السرعة نسبية وتعتمد على الإطار المرجعي</li>
<li>vAC = vAB + vBC (جمع متجهات)</li>
<li>نفس الاتجاه: تُجمع | عكس الاتجاه: تُطرح</li>
<li>متعامدة: v = √(v₁² + v₂²)</li>
</ul>
      `,
      questions: [
        { question: "سيارتان تسيران بنفس الاتجاه: الأولى 100 والثانية 70 كم/س. ما سرعة الأولى بالنسبة للثانية؟", answer: "السرعة النسبية = 100 - 70 = 30 كم/س (في اتجاه الحركة)" },
        { question: "نفس السيارتين لكن متقابلتين. ما السرعة النسبية؟", answer: "السرعة النسبية = 100 + 70 = 170 كم/س (لأنهما بالاتجاه المعاكس)" }
      ],
      quiz: [
        { question: "قطار 100 كم/س وشخص يمشي عكسه بـ 5 كم/س. سرعته بالنسبة للأرض:", options: ["105 كم/س", "95 كم/س", "100 كم/س", "5 كم/س"], correct: 1 },
        { question: "سرعتان متعامدتان 6 و 8 م/ث. المحصلة:", options: ["14 م/ث", "2 م/ث", "10 م/ث", "48 م/ث"], correct: 2 }
      ]
    }
  ]
};

// ─── تصدير البيانات ──────────────────────────────────────────────
export const chapters: Chapter[] = [
  chapter1,
  chapter2,
  chapter3,
  chapter4,
  chapter5,
  chapter6
];

export const getTotalLessons = (): number => {
  return chapters.reduce((sum, ch) => sum + ch.lessons.length, 0);
};

export const SITE_TITLE = "مكتبة الفيزياء 1";
export const SITE_SUBTITLE = "نظام المسارات - المرحلة الثانوية";
