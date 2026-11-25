import "./MinaSystemLegalPage.css";

const PRIVACY_EMAIL = "privacy.horus@kingnarmar.com";
const SUPPORT_EMAIL = "support.horus@kingnarmar.com";

export function HorusPrivacyPolicyPage() {
  return (
    <main className="legal-page">
      <div className="legal-shell"><section className="legal-card">
        <div className="legal-brand"><span className="legal-logo">KN</span><div><p>KING NARMAR</p><small>Software Solutions</small></div></div>
        <p className="legal-kicker">H.O.R.U.S System</p>
        <h1>Privacy Policy</h1>
        <p className="legal-updated">Last updated: 2026-11-25 · <a href="#horus-privacy-ar" lang="ar">العربية</a></p>
        <div className="legal-section"><h2>Overview</h2><p>H.O.R.U.S System is a multi-tenant SaaS platform for heavy transport operations. This policy explains how H.O.R.U.S handles information when authorized users access company workspaces and use operational workflows.</p></div>
        <div className="legal-section"><h2>Information H.O.R.U.S handles</h2><p>Depending on how a company uses the service, H.O.R.U.S may handle:</p><ul>
          <li>Account information such as name, email address, phone number, user ID, authentication state, company membership, and role.</li>
          <li>Company profile, settings, subscription, and authorized-user information.</li>
          <li>Customer and business-contact information, including names, phone numbers, addresses, payment terms, and operational notes.</li>
          <li>Driver records, including contact details, national ID information, licence details, status, notes, and uploaded driver documents.</li>
          <li>Fleet, route, trip, cargo, loading, waybill, proof-of-delivery, and other transport-operation records and documents.</li>
          <li>Invoices, payments, expenses, driver finance, company finance, and related business records.</li>
          <li>Audit, security, troubleshooting, invitation, and lifecycle records used to protect and operate the service.</li>
        </ul></div>
        <div className="legal-section"><h2>Why information is used</h2><p>Information is used to authenticate users, provide company-scoped workspaces, enforce role-based access, run transport and finance workflows, store business documents, generate operational records and reports, maintain auditability, protect the service, troubleshoot problems, and provide support.</p></div>
        <div className="legal-section"><h2>Service providers</h2><p>H.O.R.U.S uses Supabase for backend services including authentication, database, and private file storage. Email delivery, hosting, and other configured service providers may process information as needed to deliver, secure, and support the service. Depending on the provider and hosting location, processing may occur in other countries; applicable transfer requirements must be observed.</p></div>
        <div className="legal-section"><h2>Tenant isolation and security</h2><p>H.O.R.U.S is designed as a multi-tenant service. Company-owned business data is protected by authenticated access, company membership, role-based authorization, database row-level security, and access controls for private business-document storage. Network communication with production services uses HTTPS.</p></div>
        <div className="legal-section"><h2>Sharing and sale</h2><p>King Narmar does not sell H.O.R.U.S user data. Information may be processed by service providers as necessary to operate, secure, and support H.O.R.U.S, or disclosed when required by applicable law.</p></div>
        <div className="legal-section"><h2>Retention and deletion</h2><p>Retention depends on the purpose, applicable law, contractual obligations, security needs, and whether records are needed for accounting, audit, or legal claims. Personal information must not be kept longer than necessary for a valid purpose. Different categories may require different retention periods; an active legal or regulatory obligation may require longer retention.</p><p>Individual account deletion removes the authentication account, personal profile, and memberships after the applicable eligibility checks and seven-day cooling-off period. Company records are not automatically deleted with an individual account. A technical historical actor identifier, recorded display name, role at the time of the action, timestamps, and related audit details may remain where necessary for accountability or other lawful purposes. This identifier is not a login credential and is not anonymous when linked to a person. The deletion process clears the dedicated audit actor email field; contact details may still appear in company invitations, historical audit payloads, business records, or documents when those records have a separate purpose. Retaining such details requires a valid justification. See the <a href="/horus/account-deletion">Account Deletion</a> page for the procedure.</p></div>
        <div className="legal-section"><h2>Company and platform responsibilities</h2><p>Companies determine why they collect and use their employee, customer, driver, and other business records. King Narmar processes those workspace records to provide the service and handles account, security, and support information for operating H.O.R.U.S. The applicable responsibilities depend on the processing activity and law. Companies must have a lawful basis for processing and retaining personal information and must respond to applicable data rights.</p></div>
        <div className="legal-section"><h2>Backups and deletion requests</h2><p>Copies of information may remain in restricted recovery backups until the applicable backup retention period ends. Backup retention must be limited to recovery and other justified obligations. If a backup is restored, previously completed deletion and access-revocation decisions must be respected before ordinary access resumes.</p></div>
        <div className="legal-section"><h2>Your privacy rights</h2><p>Depending on applicable law, you may request access, correction, erasure, restriction, portability, or object to processing. Contact the privacy address below for account or platform requests. For company-controlled records, contact the responsible company; you may also contact H.O.R.U.S for assistance identifying the appropriate route. Identity verification and lawful retention exceptions may apply. You may have the right to complain to the relevant data protection authority.</p></div>
        <div className="legal-section"><h2>Children</h2><p>H.O.R.U.S is a business operations service and is not directed to children.</p></div>
        <div className="legal-section"><h2>Changes to this policy</h2><p>This policy may be updated when H.O.R.U.S features, data practices, service providers, or legal requirements change. The current version and update date will remain available on this page.</p></div>
        <div className="legal-section"><h2>Contact</h2><p>Privacy questions: <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>.</p><p>Product support: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.</p></div>
        <section className="legal-section" id="horus-privacy-ar" lang="ar" dir="rtl" aria-label="سياسة الخصوصية بالعربية">
          <h2>سياسة الخصوصية — النسخة العربية</h2>
          <p>نظام H.O.R.U.S منصة متعددة الشركات لإدارة عمليات النقل الثقيل، يقدمها King Narmar. توضح هذه السياسة كيفية معالجة المعلومات داخل مساحات عمل الشركات.</p>
          <h3>المعلومات التي نعالجها</h3>
          <ul><li>بيانات الحساب، ومنها الاسم والبريد الإلكتروني والهاتف ومعرّف المستخدم وحالة المصادقة والعضويات والصلاحيات.</li><li>ملفات الشركات وإعداداتها واشتراكاتها والمستخدمون المصرح لهم.</li><li>بيانات العملاء وجهات الاتصال التجارية، بما فيها الأسماء والهواتف والعناوين وشروط الدفع والملاحظات التشغيلية.</li><li>بيانات السائقين، ومنها الاتصال والهوية الوطنية والرخص والحالة والملاحظات والمستندات المرفوعة.</li><li>بيانات الأسطول والمسارات والرحلات والشحن والتحميل وبوالص النقل وإثباتات التسليم والمستندات التشغيلية.</li><li>الفواتير والمدفوعات والمصروفات والبيانات المالية للشركة والسائقين.</li><li>سجلات التدقيق والأمان والأعطال والدعوات ودورة حياة الحسابات.</li></ul>
          <h3>أغراض المعالجة والحماية والمشاركة</h3>
          <p>تُستخدم المعلومات للمصادقة وتشغيل مساحات العمل وتطبيق الصلاحيات وإدارة العمليات والمالية والمستندات والتقارير والتدقيق والأمان والدعم. يستخدم النظام Supabase للمصادقة وقاعدة البيانات والتخزين الخاص، وقد يعالج مقدمو البريد والاستضافة والخدمات اللازمة المعلومات لتشغيل الخدمة وتأمينها ودعمها. قد تتم المعالجة في دول أخرى بحسب موقع الاستضافة ومقدم الخدمة، مع مراعاة متطلبات نقل البيانات الواجبة التطبيق.</p>
          <p>تُحمى بيانات الشركات من خلال المصادقة والعضويات والصلاحيات وعزل البيانات على مستوى الصفوف وضوابط الوصول إلى المستندات الخاصة. يستخدم الاتصال بخدمات الإنتاج بروتوكول HTTPS. لا يبيع King Narmar بيانات مستخدمي النظام؛ وقد تُعالج لدى مقدمي الخدمات عند الحاجة أو يُفصح عنها إذا أوجب القانون ذلك.</p>
          <h3>الاحتفاظ والحذف</h3>
          <p>تُحدد مدة الاحتفاظ بحسب الغرض والقانون والالتزامات التعاقدية واحتياجات الأمان والمحاسبة والتدقيق والمطالبات القانونية. يجب ألا تُحفظ البيانات الشخصية بعد انتهاء الحاجة إلى غرض مشروع؛ وقد تختلف المدة بين الفئات وتطول عند وجود التزام قانوني أو تنظيمي.</p>
          <p>يحذف طلب حذف الحساب حساب المصادقة والملف الشخصي والعضويات بعد التحقق من الأهلية وفترة الانتظار البالغة سبعة أيام. لا تُحذف سجلات الشركة تلقائيًا بحذف الحساب الفردي. قد يبقى معرّف تقني تاريخي واسم المستخدم وصلاحيته وقت العملية والتوقيت وتفاصيل التدقيق اللازمة للمساءلة أو أغراض مشروعة أخرى. المعرّف ليس وسيلة تسجيل دخول، ولا يُعد مجهول الهوية عند ارتباطه بشخص. تُزال قيمة البريد من الحقل المخصص لبريد منفذ العملية في التدقيق، وقد تبقى بيانات اتصال داخل الدعوات أو تفاصيل التدقيق أو السجلات والمستندات لأغراض مستقلة مبررة. راجع <a href="/horus/account-deletion#horus-deletion-ar">صفحة حذف الحساب</a>.</p>
          <h3>مسؤوليات الشركة والمنصة</h3>
          <p>تحدد الشركات أغراض معالجة بيانات موظفيها وعملائها وسائقيها وسجلات أعمالها. يعالج King Narmar بيانات مساحة العمل لتقديم الخدمة وبيانات الحساب والأمان والدعم لتشغيل النظام. تتحدد المسؤوليات بحسب نشاط المعالجة والقانون؛ وعلى الشركات توفير أساس مشروع للمعالجة والاحتفاظ والاستجابة لحقوق أصحاب البيانات.</p>
          <h3>النسخ الاحتياطية</h3>
          <p>قد تبقى نسخ من المعلومات في نسخ الاستعادة المقيدة حتى انتهاء مدة الاحتفاظ بها. يجب قصر الاحتفاظ على الاستعادة والالتزامات المبررة، ومراعاة قرارات الحذف وإلغاء الوصول السابقة قبل استئناف الوصول المعتاد بعد الاستعادة.</p>
          <h3>حقوق الخصوصية</h3>
          <p>بحسب القانون الواجب التطبيق، قد يحق لك طلب الوصول والتصحيح والمحو وتقييد المعالجة ونقل البيانات أو الاعتراض عليها. تواصل مع بريد الخصوصية لطلبات الحساب والمنصة، ومع الشركة المسؤولة عن سجلاتها؛ ويمكن طلب المساعدة من النظام لتحديد المسار المناسب. قد يلزم التحقق من الهوية وتطبيق استثناءات الاحتفاظ القانونية، وقد يحق لك تقديم شكوى إلى جهة حماية البيانات المختصة.</p>
          <h3>الأطفال والتحديثات والتواصل</h3>
          <p>النظام مخصص للأعمال وليس موجّهًا للأطفال. قد تُحدّث السياسة عند تغير الخصائص أو المعالجة أو مقدمي الخدمات أو المتطلبات القانونية، ويظل تاريخ آخر تحديث متاحًا. للخصوصية: <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>، وللدعم: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.</p>
        </section>
        <div className="legal-actions"><a className="legal-button" href="/horus/account-deletion">Account Deletion</a><a className="legal-button-secondary" href="/horus/support">H.O.R.U.S Support</a><a className="legal-button-secondary" href="/horus/terms">Terms of Service</a><a className="legal-button-secondary" href="/">Back to KING NARMAR</a></div>
      </section></div>
    </main>
  );
}
