import type { LandingLanguage } from './landingCopy';

export type LegalSection = { heading: string; body: string[] };
export type LegalDoc = { title: string; updated: string; intro: string; sections: LegalSection[] };
export type LegalCopy = { backHome: string; privacy: LegalDoc; terms: LegalDoc };

const COMPANY = 'HONG KONG TAITECH INNOVATION LIMITED';
const ADDRESS = 'UNIT 1618A, 16/F, PIONEER CENTRE, 750 NATHAN ROAD, MONG KOK, HONG KONG';
const EMAIL = 'support@ezecomacademy.com';
const UPDATED = '25 November 2026';

const en: LegalCopy = {
  backHome: '← Back to home',
  privacy: {
    title: 'Privacy Policy',
    updated: `Last updated: ${UPDATED}`,
    intro: `This Privacy Policy explains how ${COMPANY} ("we", "us", "our"), the operator of EZ Entrepreneur Academy, collects, uses and protects information when you visit our website or contact us.`,
    sections: [
      {
        heading: '1. Who we are',
        body: [
          `${COMPANY}, registered at ${ADDRESS}, operates the EZ Entrepreneur Academy website and mentoring service.`,
        ],
      },
      {
        heading: '2. Information we collect',
        body: [
          'Contact information you give us directly, such as your name, phone number or WhatsApp number, and email address, when you message us or sign up for our service.',
          'Technical information collected automatically when you click a WhatsApp button on our site, such as your IP address and browser user-agent string. We do not store your raw IP address — it is combined with your browser information and a secret value and converted into a one-way hash, which we use only to estimate how many unique visitors clicked each link and to count clicks. The hash cannot be reversed to recover your IP address.',
          'Information you share with us during onboarding or while using our service, such as details about your store, products, platforms used, or business goals.',
        ],
      },
      {
        heading: '3. How we use information',
        body: [
          'To respond to your enquiries and provide our mentoring and store-management services.',
          'To operate, maintain and improve our website, including measuring how many people click through to WhatsApp.',
          'To meet legal and accounting obligations.',
        ],
      },
      {
        heading: '4. How we share information',
        body: [
          'We do not sell your personal information.',
          'We may share information with service providers who help us run our website and business (for example, hosting and database providers), under confidentiality obligations.',
          'We may disclose information if required by law or to protect our legal rights.',
        ],
      },
      {
        heading: '5. Data retention',
        body: [
          'We keep contact and onboarding information for as long as needed to provide our service and meet legal obligations. Click and visit statistics are kept in aggregate form and are not linked to your name or contact details.',
        ],
      },
      {
        heading: '6. Your rights',
        body: [
          `You may ask us to access, correct or delete personal information we hold about you by contacting us at ${EMAIL}. We will respond within a reasonable time.`,
        ],
      },
      {
        heading: '7. Cookies and similar technologies',
        body: [
          'Our website may use basic technical storage (such as cookies) necessary for the site to function. We do not use third-party advertising cookies.',
        ],
      },
      {
        heading: '8. Children',
        body: [
          'Our service is intended for adults aged 18 and over. We do not knowingly collect personal information from anyone under 18.',
        ],
      },
      {
        heading: '9. Changes to this policy',
        body: [
          'We may update this Privacy Policy from time to time. The "Last updated" date above shows when it was last revised.',
        ],
      },
      {
        heading: '10. Contact us',
        body: [`If you have questions about this Privacy Policy, contact us at ${EMAIL} or via WhatsApp.`],
      },
    ],
  },
  terms: {
    title: 'Terms of Service',
    updated: `Last updated: ${UPDATED}`,
    intro: `These Terms of Service ("Terms") govern your use of the EZ Entrepreneur Academy website and mentoring service, operated by ${COMPANY} ("we", "us", "our"). By using our website or service you agree to these Terms.`,
    sections: [
      {
        heading: '1. Who we are',
        body: [`${COMPANY}, registered at ${ADDRESS}, operates the EZ Entrepreneur Academy website and mentoring service. You can contact us at ${EMAIL}.`],
      },
      {
        heading: '2. Eligibility',
        body: ['You must be at least 18 years old to use our service or enter into any agreement with us.'],
      },
      {
        heading: '3. Our service',
        body: [
          'We provide practical guidance on setting up and operating online stores on platforms such as Shopify, Amazon, OZON and TikTok Shop, under a Self-Managed or Fully Managed arrangement as described on our website.',
          'The specific scope of services, fees, payment terms and any revenue-sharing percentage are set out in the individual contract or agreement you sign with us before work begins. If anything on this website conflicts with your signed contract, the signed contract controls.',
        ],
      },
      {
        heading: '4. No guarantee of results',
        body: [
          'We do not guarantee any income, sales, profit or specific business outcome. Results depend on your effort, your products, market conditions and other factors outside our control. Operating an online store involves costs and financial risk that you accept as your own.',
        ],
      },
      {
        heading: '5. Your responsibilities',
        body: [
          'You are responsible for complying with the terms of any third-party platform (such as Shopify, Amazon, OZON or TikTok Shop) and all applicable laws, including those relating to product safety, intellectual property, consumer protection and taxation.',
          'You will not use our service to sell counterfeit, unauthorized, illegal or unsafe goods.',
        ],
      },
      {
        heading: '6. Fees and payment',
        body: [
          'Fees, including any percentage of store sales revenue, are set out in your signed contract with us. Any upfront costs for inventory, platform fees or advertising are your own responsibility unless your contract says otherwise.',
        ],
      },
      {
        heading: '7. Termination',
        body: [
          'You may stop using our service at any time by contacting us. There is no cancellation fee or required notice period, but we ask you to contact us so we can confirm the end of the service in writing and close out any active work.',
          'We may suspend or end the service if you breach these Terms, your signed contract, or applicable law.',
        ],
      },
      {
        heading: '8. Intellectual property',
        body: ['Our website content, branding and materials remain our property or that of our licensors. You may not copy or redistribute them without our permission.'],
      },
      {
        heading: '9. Limitation of liability',
        body: [
          'To the extent permitted by law, we are not liable for indirect, incidental or consequential losses, including lost profits or lost business, arising from your use of our service or website.',
        ],
      },
      {
        heading: '10. Governing law',
        body: ['These Terms are governed by the laws of the Hong Kong Special Administrative Region, without regard to conflict-of-law principles. Any dispute arising from these Terms or your use of our service will be subject to the jurisdiction described in your signed contract, or otherwise the courts of Hong Kong.'],
      },
      {
        heading: '11. Changes to these Terms',
        body: ['We may update these Terms from time to time. The "Last updated" date above shows when they were last revised. Continued use of our service after changes means you accept the updated Terms.'],
      },
      {
        heading: '12. Contact us',
        body: [`If you have questions about these Terms, contact us at ${EMAIL} or via WhatsApp.`],
      },
    ],
  },
};

const zh: LegalCopy = {
  backHome: '← 返回首页',
  privacy: {
    title: '隐私政策',
    updated: `最近更新：${UPDATED}`,
    intro: `本隐私政策说明 ${COMPANY}（以下简称"我们"），即 EZ Entrepreneur Academy 的运营主体，在你访问我们的网站或与我们联系时，如何收集、使用和保护相关信息。`,
    sections: [
      { heading: '1. 我们是谁', body: [`${COMPANY}，注册地址为 ${ADDRESS}，运营 EZ Entrepreneur Academy 网站及导师指导服务。`] },
      {
        heading: '2. 我们收集哪些信息',
        body: [
          '你主动提供的联系信息，例如你的姓名、电话或 WhatsApp 号码、电子邮箱，这些信息会在你联系我们或申请服务时提供。',
          '当你点击网站上的 WhatsApp 按钮时，我们会自动收集一些技术信息，例如你的 IP 地址和浏览器标识。我们不会存储你原始的 IP 地址——它会与浏览器信息及一个密钥一起，经过单向哈希处理后存储，仅用于估算每个链接的独立点击人数和点击次数，该哈希值无法还原出你的 IP 地址。',
          '你在接洽或使用服务过程中分享的信息，例如店铺情况、产品、使用的平台或经营目标。',
        ],
      },
      { heading: '3. 我们如何使用信息', body: ['回应你的咨询，并提供导师指导和店铺管理服务。', '运营、维护和改进我们的网站，包括统计 WhatsApp 的点击情况。', '履行法律和财务合规义务。'] },
      { heading: '4. 我们如何共享信息', body: ['我们不会出售你的个人信息。', '我们可能会与协助我们运营网站和业务的服务商（例如托管和数据库服务商）共享信息，并要求其遵守保密义务。', '如法律要求，或为保护我们的合法权益，我们可能披露相关信息。'] },
      { heading: '5. 数据保留', body: ['我们会在提供服务及履行法律义务所需的期限内保留联系和接洽信息。点击与访问统计数据以汇总形式保存，不与你的姓名或联系方式关联。'] },
      { heading: '6. 你的权利', body: [`你可以通过 ${EMAIL} 联系我们，要求查阅、更正或删除我们持有的关于你的个人信息，我们会在合理时间内回复。`] },
      { heading: '7. Cookie 及类似技术', body: ['我们的网站可能使用网站正常运行所需的基本技术性存储（如 Cookie）。我们不使用第三方广告 Cookie。'] },
      { heading: '8. 未成年人', body: ['我们的服务面向 18 岁及以上成年人。我们不会在明知情况下收集 18 岁以下人士的个人信息。'] },
      { heading: '9. 政策变更', body: ['我们可能会不定期更新本隐私政策，上方"最近更新"日期即为最后修订时间。'] },
      { heading: '10. 联系我们', body: [`如对本隐私政策有疑问，请通过 ${EMAIL} 或 WhatsApp 联系我们。`] },
    ],
  },
  terms: {
    title: '服务条款',
    updated: `最近更新：${UPDATED}`,
    intro: `本服务条款（"条款"）适用于你使用 EZ Entrepreneur Academy 网站及导师指导服务，该服务由 ${COMPANY}（以下简称"我们"）运营。使用我们的网站或服务，即表示你同意本条款。`,
    sections: [
      { heading: '1. 我们是谁', body: [`${COMPANY}，注册地址为 ${ADDRESS}，运营 EZ Entrepreneur Academy 网站及导师指导服务。你可通过 ${EMAIL} 联系我们。`] },
      { heading: '2. 使用资格', body: ['你必须年满 18 岁才能使用我们的服务或与我们签署任何协议。'] },
      {
        heading: '3. 我们的服务',
        body: [
          '我们按照网站所述的自主运营或全托管方式，为你在 Shopify、Amazon、OZON、TikTok Shop 等平台上搭建和运营线上店铺提供实用指导。',
          '具体服务范围、费用、付款方式及任何分成比例，以双方在开始合作前签署的具体合同或协议为准。如本网站内容与你签署的合同存在冲突，以签署的合同为准。',
        ],
      },
      { heading: '4. 不保证结果', body: ['我们不保证任何收入、销售额、利润或特定的经营结果。实际结果取决于你的投入、产品、市场状况及其他我们无法控制的因素。经营线上店铺涉及的费用和财务风险由你自行承担。'] },
      { heading: '5. 你的责任', body: ['你需遵守相关第三方平台（如 Shopify、Amazon、OZON、TikTok Shop）的条款以及所有适用法律，包括产品安全、知识产权、消费者保护和税务相关法律。', '你不得利用我们的服务销售假冒、未经授权、非法或不安全的商品。'] },
      { heading: '6. 费用与付款', body: ['费用（包括任何店铺销售收入分成比例）以你与我们签署的合同为准。除合同另有约定外，库存、平台或广告等前期费用由你自行承担。'] },
      { heading: '7. 终止服务', body: ['你可以随时联系我们停止使用本服务。没有取消费用或通知期限要求，但请联系我们以便书面确认服务结束并处理尚未完成的工作。', '如你违反本条款、所签合同或适用法律，我们可能暂停或终止服务。'] },
      { heading: '8. 知识产权', body: ['我们网站的内容、品牌及相关材料归我们或授权方所有。未经许可，你不得复制或再分发。'] },
      { heading: '9. 责任限制', body: ['在法律允许的范围内，对因使用我们的服务或网站而产生的间接、附带或后果性损失（包括利润损失或业务损失），我们不承担责任。'] },
      { heading: '10. 适用法律', body: ['本条款受香港特别行政区法律管辖，不适用冲突法原则。因本条款或你使用服务产生的任何争议，以你所签合同约定的管辖方式为准，否则适用香港法院管辖。'] },
      { heading: '11. 条款变更', body: ['我们可能会不定期更新本条款，上方"最近更新"日期即为最后修订时间。变更后继续使用我们的服务，即表示你接受更新后的条款。'] },
      { heading: '12. 联系我们', body: [`如对本条款有疑问，请通过 ${EMAIL} 或 WhatsApp 联系我们。`] },
    ],
  },
};

const de: LegalCopy = {
  backHome: '← Zurück zur Startseite',
  privacy: {
    title: 'Datenschutzerklärung',
    updated: `Zuletzt aktualisiert: ${UPDATED}`,
    intro: `Diese Datenschutzerklärung erläutert, wie ${COMPANY} ("wir", "uns", "unser"), Betreiber von EZ Entrepreneur Academy, Informationen erfasst, verwendet und schützt, wenn Sie unsere Website besuchen oder uns kontaktieren.`,
    sections: [
      { heading: '1. Wer wir sind', body: [`${COMPANY}, registriert unter ${ADDRESS}, betreibt die Website und den Mentoring-Service von EZ Entrepreneur Academy.`] },
      {
        heading: '2. Welche Informationen wir erfassen',
        body: [
          'Kontaktinformationen, die Sie uns direkt mitteilen, etwa Name, Telefon- oder WhatsApp-Nummer und E-Mail-Adresse, wenn Sie uns schreiben oder sich für unseren Service anmelden.',
          'Technische Informationen, die automatisch erfasst werden, wenn Sie auf einen WhatsApp-Button klicken, etwa IP-Adresse und Browser-Kennung. Wir speichern Ihre rohe IP-Adresse nicht — sie wird zusammen mit Ihren Browserinformationen und einem Geheimwert in einen Einweg-Hashwert umgewandelt, den wir nur verwenden, um die Anzahl eindeutiger Besucher pro Link und Klicks zu zählen. Der Hashwert kann nicht zurück in Ihre IP-Adresse umgewandelt werden.',
          'Informationen, die Sie uns während der Aufnahme oder Nutzung unseres Services mitteilen, etwa zu Ihrem Shop, Produkten, genutzten Plattformen oder Geschäftszielen.',
        ],
      },
      { heading: '3. Wie wir Informationen verwenden', body: ['Um auf Ihre Anfragen zu reagieren und unsere Mentoring- und Shop-Management-Dienste zu erbringen.', 'Um unsere Website zu betreiben, zu pflegen und zu verbessern, einschließlich der Messung von WhatsApp-Klicks.', 'Um rechtliche und buchhalterische Pflichten zu erfüllen.'] },
      { heading: '4. Wie wir Informationen weitergeben', body: ['Wir verkaufen Ihre personenbezogenen Daten nicht.', 'Wir können Informationen mit Dienstleistern teilen, die uns bei Website und Geschäftsbetrieb unterstützen (z. B. Hosting- und Datenbankanbieter), unter Vertraulichkeitspflichten.', 'Wir können Informationen offenlegen, wenn dies gesetzlich vorgeschrieben ist oder zum Schutz unserer Rechte erforderlich ist.'] },
      { heading: '5. Speicherdauer', body: ['Wir bewahren Kontakt- und Aufnahmeinformationen so lange auf, wie es für die Leistungserbringung und rechtliche Pflichten erforderlich ist. Klick- und Besuchsstatistiken werden aggregiert gespeichert und nicht mit Ihrem Namen oder Kontaktdaten verknüpft.'] },
      { heading: '6. Ihre Rechte', body: [`Sie können uns unter ${EMAIL} kontaktieren, um Zugriff, Berichtigung oder Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen. Wir antworten innerhalb einer angemessenen Frist.`] },
      { heading: '7. Cookies und ähnliche Technologien', body: ['Unsere Website kann grundlegende technische Speicherung (z. B. Cookies) verwenden, die für den Betrieb der Website notwendig ist. Wir verwenden keine Werbe-Cookies von Drittanbietern.'] },
      { heading: '8. Kinder', body: ['Unser Service richtet sich an Erwachsene ab 18 Jahren. Wir erfassen wissentlich keine personenbezogenen Daten von Personen unter 18 Jahren.'] },
      { heading: '9. Änderungen dieser Richtlinie', body: ['Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Das Datum "Zuletzt aktualisiert" oben zeigt die letzte Überarbeitung.'] },
      { heading: '10. Kontakt', body: [`Bei Fragen zu dieser Datenschutzerklärung erreichen Sie uns unter ${EMAIL} oder per WhatsApp.`] },
    ],
  },
  terms: {
    title: 'Nutzungsbedingungen',
    updated: `Zuletzt aktualisiert: ${UPDATED}`,
    intro: `Diese Nutzungsbedingungen ("Bedingungen") regeln Ihre Nutzung der Website und des Mentoring-Services von EZ Entrepreneur Academy, betrieben von ${COMPANY} ("wir", "uns", "unser"). Mit der Nutzung unserer Website oder unseres Services stimmen Sie diesen Bedingungen zu.`,
    sections: [
      { heading: '1. Wer wir sind', body: [`${COMPANY}, registriert unter ${ADDRESS}, betreibt die Website und den Mentoring-Service von EZ Entrepreneur Academy. Sie erreichen uns unter ${EMAIL}.`] },
      { heading: '2. Teilnahmevoraussetzungen', body: ['Sie müssen mindestens 18 Jahre alt sein, um unseren Service zu nutzen oder eine Vereinbarung mit uns zu schließen.'] },
      {
        heading: '3. Unser Service',
        body: [
          'Wir bieten praktische Begleitung beim Aufbau und Betrieb von Online-Shops auf Plattformen wie Shopify, Amazon, OZON und TikTok Shop, im Rahmen eines selbstständigen oder vollständig betreuten Modells, wie auf unserer Website beschrieben.',
          'Der konkrete Leistungsumfang, die Gebühren, Zahlungsbedingungen und ein etwaiger Umsatzanteil sind im individuellen Vertrag festgelegt, den Sie vor Beginn der Arbeit mit uns unterschreiben. Bei Widersprüchen zwischen dieser Website und Ihrem unterschriebenen Vertrag ist der unterschriebene Vertrag maßgeblich.',
        ],
      },
      { heading: '4. Keine Ergebnisgarantie', body: ['Wir garantieren keine Einnahmen, Umsätze, Gewinne oder ein bestimmtes Geschäftsergebnis. Die Ergebnisse hängen von Ihrem Einsatz, Ihren Produkten, Marktbedingungen und anderen Faktoren außerhalb unserer Kontrolle ab. Der Betrieb eines Online-Shops ist mit Kosten und finanziellen Risiken verbunden, die Sie selbst tragen.'] },
      { heading: '5. Ihre Pflichten', body: ['Sie sind verantwortlich für die Einhaltung der Bedingungen Dritter Plattformen (z. B. Shopify, Amazon, OZON oder TikTok Shop) sowie aller geltenden Gesetze, einschließlich Produktsicherheit, geistigem Eigentum, Verbraucherschutz und Steuerrecht.', 'Sie werden unseren Service nicht nutzen, um gefälschte, unbefugte, illegale oder unsichere Waren zu verkaufen.'] },
      { heading: '6. Gebühren und Zahlung', body: ['Gebühren, einschließlich eines etwaigen Anteils am Shop-Umsatz, sind in Ihrem unterschriebenen Vertrag mit uns festgelegt. Vorabkosten für Lagerbestand, Plattformgebühren oder Werbung tragen Sie selbst, sofern Ihr Vertrag nichts anderes bestimmt.'] },
      { heading: '7. Beendigung', body: ['Sie können die Nutzung unseres Services jederzeit durch Kontaktaufnahme beenden. Es gibt keine Kündigungsgebühr oder vorgeschriebene Frist, aber wir bitten Sie, uns zu kontaktieren, damit wir das Ende des Services schriftlich bestätigen und laufende Arbeiten abschließen können.', 'Wir können den Service aussetzen oder beenden, wenn Sie gegen diese Bedingungen, Ihren unterschriebenen Vertrag oder geltendes Recht verstoßen.'] },
      { heading: '8. Geistiges Eigentum', body: ['Die Inhalte, Marken und Materialien unserer Website bleiben unser Eigentum oder das unserer Lizenzgeber. Sie dürfen diese ohne unsere Zustimmung nicht kopieren oder weiterverbreiten.'] },
      { heading: '9. Haftungsbeschränkung', body: ['Soweit gesetzlich zulässig, haften wir nicht für indirekte, beiläufige oder Folgeschäden, einschließlich entgangenem Gewinn oder Geschäftsverlust, die aus der Nutzung unseres Services oder unserer Website entstehen.'] },
      { heading: '10. Anwendbares Recht', body: ['Diese Bedingungen unterliegen dem Recht der Sonderverwaltungsregion Hongkong, ohne Berücksichtigung des Kollisionsrechts. Streitigkeiten aus diesen Bedingungen oder Ihrer Nutzung des Services unterliegen der in Ihrem unterschriebenen Vertrag festgelegten Zuständigkeit, andernfalls den Gerichten von Hongkong.'] },
      { heading: '11. Änderungen dieser Bedingungen', body: ['Wir können diese Bedingungen von Zeit zu Zeit aktualisieren. Das Datum "Zuletzt aktualisiert" oben zeigt die letzte Überarbeitung. Die fortgesetzte Nutzung unseres Services nach Änderungen bedeutet, dass Sie die aktualisierten Bedingungen akzeptieren.'] },
      { heading: '12. Kontakt', body: [`Bei Fragen zu diesen Bedingungen erreichen Sie uns unter ${EMAIL} oder per WhatsApp.`] },
    ],
  },
};

const it: LegalCopy = {
  backHome: '← Torna alla home',
  privacy: {
    title: 'Informativa sulla Privacy',
    updated: `Ultimo aggiornamento: ${UPDATED}`,
    intro: `Questa Informativa sulla Privacy spiega come ${COMPANY} ("noi", "nostro"), gestore di EZ Entrepreneur Academy, raccoglie, utilizza e protegge le informazioni quando visiti il nostro sito o ci contatti.`,
    sections: [
      { heading: '1. Chi siamo', body: [`${COMPANY}, registrata a ${ADDRESS}, gestisce il sito web e il servizio di mentoring di EZ Entrepreneur Academy.`] },
      {
        heading: '2. Quali informazioni raccogliamo',
        body: [
          'Informazioni di contatto che ci fornisci direttamente, come nome, numero di telefono o WhatsApp ed e-mail, quando ci scrivi o ti iscrivi al nostro servizio.',
          'Informazioni tecniche raccolte automaticamente quando clicchi un pulsante WhatsApp sul nostro sito, come indirizzo IP e stringa del browser. Non conserviamo il tuo indirizzo IP originale: viene combinato con le informazioni del browser e un valore segreto e trasformato in un hash unidirezionale, usato solo per stimare quanti visitatori unici hanno cliccato ciascun link e per contare i click. L’hash non può essere invertito per recuperare il tuo IP.',
          'Informazioni che condividi durante l’avvio della collaborazione o l’uso del servizio, come dettagli sul tuo negozio, prodotti, piattaforme utilizzate o obiettivi aziendali.',
        ],
      },
      { heading: '3. Come usiamo le informazioni', body: ['Per rispondere alle tue richieste e fornire i nostri servizi di mentoring e gestione negozio.', 'Per gestire, mantenere e migliorare il nostro sito, incluso misurare i click verso WhatsApp.', 'Per adempiere a obblighi legali e contabili.'] },
      { heading: '4. Come condividiamo le informazioni', body: ['Non vendiamo i tuoi dati personali.', 'Possiamo condividere informazioni con fornitori di servizi che ci assistono nella gestione del sito e dell’attività (ad es. hosting e database), soggetti a obblighi di riservatezza.', 'Possiamo divulgare informazioni se richiesto dalla legge o per tutelare i nostri diritti legali.'] },
      { heading: '5. Conservazione dei dati', body: ['Conserviamo le informazioni di contatto e di avvio per il tempo necessario a fornire il servizio e adempiere agli obblighi legali. Le statistiche di click e visite sono conservate in forma aggregata e non collegate al tuo nome o ai tuoi dati di contatto.'] },
      { heading: '6. I tuoi diritti', body: [`Puoi chiederci di accedere, correggere o eliminare i dati personali che conserviamo su di te scrivendo a ${EMAIL}. Risponderemo entro un termine ragionevole.`] },
      { heading: '7. Cookie e tecnologie simili', body: ['Il nostro sito può utilizzare archiviazione tecnica di base (come i cookie) necessaria al funzionamento del sito. Non utilizziamo cookie pubblicitari di terze parti.'] },
      { heading: '8. Minori', body: ['Il nostro servizio è destinato ad adulti di almeno 18 anni. Non raccogliamo consapevolmente dati personali di persone sotto i 18 anni.'] },
      { heading: '9. Modifiche a questa informativa', body: ['Possiamo aggiornare questa Informativa periodicamente. La data "Ultimo aggiornamento" sopra indica l’ultima revisione.'] },
      { heading: '10. Contattaci', body: [`Per domande su questa Informativa, scrivi a ${EMAIL} o contattaci su WhatsApp.`] },
    ],
  },
  terms: {
    title: 'Termini di Servizio',
    updated: `Ultimo aggiornamento: ${UPDATED}`,
    intro: `Questi Termini di Servizio ("Termini") regolano l’uso del sito web e del servizio di mentoring di EZ Entrepreneur Academy, gestito da ${COMPANY} ("noi", "nostro"). Utilizzando il nostro sito o servizio accetti questi Termini.`,
    sections: [
      { heading: '1. Chi siamo', body: [`${COMPANY}, registrata a ${ADDRESS}, gestisce il sito web e il servizio di mentoring di EZ Entrepreneur Academy. Puoi contattarci a ${EMAIL}.`] },
      { heading: '2. Requisiti di accesso', body: ['Devi avere almeno 18 anni per usare il nostro servizio o stipulare un accordo con noi.'] },
      {
        heading: '3. Il nostro servizio',
        body: [
          'Offriamo una guida pratica per creare e gestire negozi online su piattaforme come Shopify, Amazon, OZON e TikTok Shop, con modalità Autogestita o Completamente Gestita come descritto sul nostro sito.',
          'L’ambito specifico dei servizi, le tariffe, le condizioni di pagamento ed eventuali percentuali sui ricavi sono indicati nel contratto individuale che firmi con noi prima dell’inizio del lavoro. In caso di conflitto tra questo sito e il contratto firmato, prevale il contratto firmato.',
        ],
      },
      { heading: '4. Nessuna garanzia di risultati', body: ['Non garantiamo alcun guadagno, vendita, profitto o specifico risultato commerciale. I risultati dipendono dal tuo impegno, dai tuoi prodotti, dalle condizioni di mercato e da altri fattori fuori dal nostro controllo. Gestire un negozio online comporta costi e rischi finanziari che accetti come tuoi.'] },
      { heading: '5. Le tue responsabilità', body: ['Sei responsabile del rispetto dei termini di qualsiasi piattaforma di terze parti (come Shopify, Amazon, OZON o TikTok Shop) e di tutte le leggi applicabili, incluse quelle su sicurezza dei prodotti, proprietà intellettuale, tutela dei consumatori e fiscalità.', 'Non utilizzerai il nostro servizio per vendere merce contraffatta, non autorizzata, illegale o non sicura.'] },
      { heading: '6. Tariffe e pagamento', body: ['Le tariffe, inclusa qualsiasi percentuale sui ricavi di vendita del negozio, sono indicate nel contratto firmato con noi. I costi iniziali per magazzino, commissioni di piattaforma o pubblicità sono a tuo carico, salvo diversa indicazione nel contratto.'] },
      { heading: '7. Cessazione', body: ['Puoi interrompere l’uso del nostro servizio in qualsiasi momento contattandoci. Non ci sono costi di cancellazione o periodi di preavviso richiesti, ma ti chiediamo di contattarci per confermare per iscritto la fine del servizio e chiudere eventuali lavori in corso.', 'Possiamo sospendere o terminare il servizio se violi questi Termini, il contratto firmato o la legge applicabile.'] },
      { heading: '8. Proprietà intellettuale', body: ['I contenuti, il marchio e i materiali del nostro sito restano di nostra proprietà o dei nostri licenzianti. Non puoi copiarli o ridistribuirli senza il nostro permesso.'] },
      { heading: '9. Limitazione di responsabilità', body: ['Nei limiti consentiti dalla legge, non siamo responsabili per perdite indirette, incidentali o consequenziali, inclusi mancati profitti o perdita di attività, derivanti dall’uso del nostro servizio o sito.'] },
      { heading: '10. Legge applicabile', body: ['Questi Termini sono regolati dalle leggi della Regione Amministrativa Speciale di Hong Kong, senza riguardo ai principi di conflitto di leggi. Qualsiasi controversia derivante da questi Termini o dall’uso del servizio sarà soggetta alla giurisdizione indicata nel contratto firmato, o altrimenti ai tribunali di Hong Kong.'] },
      { heading: '11. Modifiche a questi Termini', body: ['Possiamo aggiornare questi Termini periodicamente. La data "Ultimo aggiornamento" sopra indica l’ultima revisione. L’uso continuato del servizio dopo le modifiche implica l’accettazione dei Termini aggiornati.'] },
      { heading: '12. Contattaci', body: [`Per domande su questi Termini, scrivi a ${EMAIL} o contattaci su WhatsApp.`] },
    ],
  },
};

const es: LegalCopy = {
  backHome: '← Volver al inicio',
  privacy: {
    title: 'Política de Privacidad',
    updated: `Última actualización: ${UPDATED}`,
    intro: `Esta Política de Privacidad explica cómo ${COMPANY} ("nosotros"), operador de EZ Entrepreneur Academy, recopila, utiliza y protege la información cuando visitas nuestro sitio o nos contactas.`,
    sections: [
      { heading: '1. Quiénes somos', body: [`${COMPANY}, registrada en ${ADDRESS}, opera el sitio web y el servicio de mentoría de EZ Entrepreneur Academy.`] },
      {
        heading: '2. Qué información recopilamos',
        body: [
          'Información de contacto que nos proporcionas directamente, como tu nombre, número de teléfono o WhatsApp y correo electrónico, cuando nos escribes o te registras en nuestro servicio.',
          'Información técnica recopilada automáticamente cuando haces clic en un botón de WhatsApp en nuestro sitio, como tu dirección IP y cadena del navegador. No almacenamos tu dirección IP original: se combina con la información de tu navegador y un valor secreto, y se convierte en un hash de un solo sentido, que usamos solo para estimar cuántos visitantes únicos hicieron clic en cada enlace y contar clics. El hash no se puede revertir para recuperar tu IP.',
          'Información que compartes durante la incorporación o el uso de nuestro servicio, como detalles sobre tu tienda, productos, plataformas utilizadas u objetivos de negocio.',
        ],
      },
      { heading: '3. Cómo usamos la información', body: ['Para responder a tus consultas y prestar nuestros servicios de mentoría y gestión de tienda.', 'Para operar, mantener y mejorar nuestro sitio, incluida la medición de clics hacia WhatsApp.', 'Para cumplir con obligaciones legales y contables.'] },
      { heading: '4. Cómo compartimos la información', body: ['No vendemos tu información personal.', 'Podemos compartir información con proveedores de servicios que nos ayudan a operar el sitio y el negocio (por ejemplo, hosting y bases de datos), sujetos a obligaciones de confidencialidad.', 'Podemos divulgar información si la ley lo exige o para proteger nuestros derechos legales.'] },
      { heading: '5. Conservación de datos', body: ['Conservamos la información de contacto e incorporación durante el tiempo necesario para prestar el servicio y cumplir obligaciones legales. Las estadísticas de clics y visitas se conservan de forma agregada y no se vinculan a tu nombre o datos de contacto.'] },
      { heading: '6. Tus derechos', body: [`Puedes solicitarnos acceder, corregir o eliminar la información personal que tenemos sobre ti escribiendo a ${EMAIL}. Responderemos en un plazo razonable.`] },
      { heading: '7. Cookies y tecnologías similares', body: ['Nuestro sitio puede usar almacenamiento técnico básico (como cookies) necesario para su funcionamiento. No usamos cookies publicitarias de terceros.'] },
      { heading: '8. Menores', body: ['Nuestro servicio está dirigido a adultos de 18 años o más. No recopilamos a sabiendas información personal de menores de 18 años.'] },
      { heading: '9. Cambios a esta política', body: ['Podemos actualizar esta Política de Privacidad periódicamente. La fecha de "Última actualización" indica la última revisión.'] },
      { heading: '10. Contáctanos', body: [`Si tienes preguntas sobre esta Política de Privacidad, escríbenos a ${EMAIL} o por WhatsApp.`] },
    ],
  },
  terms: {
    title: 'Términos de Servicio',
    updated: `Última actualización: ${UPDATED}`,
    intro: `Estos Términos de Servicio ("Términos") rigen tu uso del sitio web y del servicio de mentoría de EZ Entrepreneur Academy, operado por ${COMPANY} ("nosotros"). Al usar nuestro sitio o servicio aceptas estos Términos.`,
    sections: [
      { heading: '1. Quiénes somos', body: [`${COMPANY}, registrada en ${ADDRESS}, opera el sitio web y el servicio de mentoría de EZ Entrepreneur Academy. Puedes contactarnos en ${EMAIL}.`] },
      { heading: '2. Requisitos de elegibilidad', body: ['Debes tener al menos 18 años para usar nuestro servicio o celebrar cualquier acuerdo con nosotros.'] },
      {
        heading: '3. Nuestro servicio',
        body: [
          'Ofrecemos orientación práctica para crear y operar tiendas online en plataformas como Shopify, Amazon, OZON y TikTok Shop, bajo un plan Autogestionado o Totalmente Gestionado según se describe en nuestro sitio.',
          'El alcance específico de los servicios, las tarifas, las condiciones de pago y cualquier porcentaje de ingresos compartidos se establecen en el contrato individual que firmas con nosotros antes de comenzar el trabajo. Si algo en este sitio entra en conflicto con tu contrato firmado, prevalece el contrato firmado.',
        ],
      },
      { heading: '4. Sin garantía de resultados', body: ['No garantizamos ingresos, ventas, beneficios ni ningún resultado comercial específico. Los resultados dependen de tu esfuerzo, tus productos, las condiciones del mercado y otros factores fuera de nuestro control. Operar una tienda online implica costos y riesgos financieros que asumes como propios.'] },
      { heading: '5. Tus responsabilidades', body: ['Eres responsable de cumplir con los términos de cualquier plataforma de terceros (como Shopify, Amazon, OZON o TikTok Shop) y todas las leyes aplicables, incluidas las relativas a seguridad de productos, propiedad intelectual, protección al consumidor y fiscalidad.', 'No usarás nuestro servicio para vender productos falsificados, no autorizados, ilegales o inseguros.'] },
      { heading: '6. Tarifas y pago', body: ['Las tarifas, incluido cualquier porcentaje de los ingresos por ventas de la tienda, se establecen en tu contrato firmado con nosotros. Los costos iniciales de inventario, comisiones de plataforma o publicidad son tu responsabilidad, salvo que tu contrato indique lo contrario.'] },
      { heading: '7. Terminación', body: ['Puedes dejar de usar nuestro servicio en cualquier momento contactándonos. No hay cuota de cancelación ni plazo de aviso requerido, pero te pedimos que nos contactes para confirmar por escrito el fin del servicio y cerrar cualquier trabajo en curso.', 'Podemos suspender o finalizar el servicio si incumples estos Términos, tu contrato firmado o la ley aplicable.'] },
      { heading: '8. Propiedad intelectual', body: ['El contenido, la marca y los materiales de nuestro sitio siguen siendo de nuestra propiedad o de nuestros licenciantes. No puedes copiarlos ni redistribuirlos sin nuestro permiso.'] },
      { heading: '9. Limitación de responsabilidad', body: ['En la medida permitida por la ley, no somos responsables de pérdidas indirectas, incidentales o consecuentes, incluidas ganancias perdidas o pérdida de negocio, derivadas del uso de nuestro servicio o sitio.'] },
      { heading: '10. Ley aplicable', body: ['Estos Términos se rigen por las leyes de la Región Administrativa Especial de Hong Kong, sin tener en cuenta los principios de conflicto de leyes. Cualquier disputa derivada de estos Términos o del uso del servicio estará sujeta a la jurisdicción descrita en tu contrato firmado, o en su defecto, a los tribunales de Hong Kong.'] },
      { heading: '11. Cambios a estos Términos', body: ['Podemos actualizar estos Términos periódicamente. La fecha de "Última actualización" indica la última revisión. El uso continuado del servicio tras los cambios implica la aceptación de los Términos actualizados.'] },
      { heading: '12. Contáctanos', body: [`Si tienes preguntas sobre estos Términos, escríbenos a ${EMAIL} o por WhatsApp.`] },
    ],
  },
};

const fr: LegalCopy = {
  backHome: '← Retour à l’accueil',
  privacy: {
    title: 'Politique de Confidentialité',
    updated: `Dernière mise à jour : ${UPDATED}`,
    intro: `Cette Politique de Confidentialité explique comment ${COMPANY} ("nous"), exploitant d’EZ Entrepreneur Academy, collecte, utilise et protège les informations lorsque vous visitez notre site ou nous contactez.`,
    sections: [
      { heading: '1. Qui nous sommes', body: [`${COMPANY}, enregistrée à ${ADDRESS}, exploite le site web et le service de mentorat d’EZ Entrepreneur Academy.`] },
      {
        heading: '2. Informations que nous collectons',
        body: [
          'Les informations de contact que vous nous fournissez directement, telles que votre nom, numéro de téléphone ou WhatsApp et adresse e-mail, lorsque vous nous contactez ou vous inscrivez à notre service.',
          'Les informations techniques collectées automatiquement lorsque vous cliquez sur un bouton WhatsApp de notre site, telles que votre adresse IP et la chaîne de votre navigateur. Nous ne conservons pas votre adresse IP brute : elle est combinée avec les informations de votre navigateur et une valeur secrète, puis transformée en hachage à sens unique, utilisé uniquement pour estimer le nombre de visiteurs uniques ayant cliqué sur chaque lien et compter les clics. Ce hachage ne peut pas être inversé pour retrouver votre adresse IP.',
          'Les informations que vous partagez lors de la prise de contact ou de l’utilisation de notre service, telles que des détails sur votre boutique, vos produits, les plateformes utilisées ou vos objectifs commerciaux.',
        ],
      },
      { heading: '3. Comment nous utilisons les informations', body: ['Pour répondre à vos demandes et fournir nos services de mentorat et de gestion de boutique.', 'Pour exploiter, maintenir et améliorer notre site, y compris mesurer les clics vers WhatsApp.', 'Pour respecter nos obligations légales et comptables.'] },
      { heading: '4. Comment nous partageons les informations', body: ['Nous ne vendons pas vos données personnelles.', 'Nous pouvons partager des informations avec des prestataires qui nous aident à exploiter notre site et notre activité (par exemple hébergement et bases de données), soumis à des obligations de confidentialité.', 'Nous pouvons divulguer des informations si la loi l’exige ou pour protéger nos droits légaux.'] },
      { heading: '5. Conservation des données', body: ['Nous conservons les informations de contact et de prise en charge aussi longtemps que nécessaire pour fournir le service et respecter nos obligations légales. Les statistiques de clics et de visites sont conservées de manière agrégée et ne sont pas liées à votre nom ou vos coordonnées.'] },
      { heading: '6. Vos droits', body: [`Vous pouvez nous demander d’accéder, de corriger ou de supprimer les données personnelles que nous détenons à votre sujet en nous écrivant à ${EMAIL}. Nous répondrons dans un délai raisonnable.`] },
      { heading: '7. Cookies et technologies similaires', body: ['Notre site peut utiliser un stockage technique de base (comme des cookies) nécessaire à son fonctionnement. Nous n’utilisons pas de cookies publicitaires tiers.'] },
      { heading: '8. Mineurs', body: ['Notre service est destiné aux adultes de 18 ans et plus. Nous ne collectons pas sciemment de données personnelles concernant des personnes de moins de 18 ans.'] },
      { heading: '9. Modifications de cette politique', body: ['Nous pouvons mettre à jour cette Politique de Confidentialité de temps à autre. La date "Dernière mise à jour" ci-dessus indique la dernière révision.'] },
      { heading: '10. Nous contacter', body: [`Pour toute question sur cette Politique de Confidentialité, contactez-nous à ${EMAIL} ou via WhatsApp.`] },
    ],
  },
  terms: {
    title: 'Conditions d’Utilisation',
    updated: `Dernière mise à jour : ${UPDATED}`,
    intro: `Ces Conditions d’Utilisation ("Conditions") régissent votre utilisation du site web et du service de mentorat d’EZ Entrepreneur Academy, exploité par ${COMPANY} ("nous"). En utilisant notre site ou notre service, vous acceptez ces Conditions.`,
    sections: [
      { heading: '1. Qui nous sommes', body: [`${COMPANY}, enregistrée à ${ADDRESS}, exploite le site web et le service de mentorat d’EZ Entrepreneur Academy. Vous pouvez nous contacter à ${EMAIL}.`] },
      { heading: '2. Conditions d’éligibilité', body: ['Vous devez avoir au moins 18 ans pour utiliser notre service ou conclure un accord avec nous.'] },
      {
        heading: '3. Notre service',
        body: [
          'Nous fournissons un accompagnement pratique pour créer et exploiter des boutiques en ligne sur des plateformes comme Shopify, Amazon, OZON et TikTok Shop, dans le cadre d’une offre Autogérée ou Entièrement Gérée telle que décrite sur notre site.',
          'La portée précise des services, les frais, les modalités de paiement et tout pourcentage de partage des revenus sont définis dans le contrat individuel que vous signez avec nous avant le début des travaux. En cas de conflit entre ce site et votre contrat signé, le contrat signé prévaut.',
        ],
      },
      { heading: '4. Aucune garantie de résultats', body: ['Nous ne garantissons aucun revenu, aucune vente, aucun profit ni aucun résultat commercial spécifique. Les résultats dépendent de votre engagement, de vos produits, des conditions du marché et d’autres facteurs hors de notre contrôle. L’exploitation d’une boutique en ligne implique des coûts et des risques financiers que vous assumez personnellement.'] },
      { heading: '5. Vos responsabilités', body: ['Vous êtes responsable du respect des conditions de toute plateforme tierce (comme Shopify, Amazon, OZON ou TikTok Shop) et de toutes les lois applicables, y compris celles relatives à la sécurité des produits, à la propriété intellectuelle, à la protection des consommateurs et à la fiscalité.', 'Vous n’utiliserez pas notre service pour vendre des produits contrefaits, non autorisés, illégaux ou dangereux.'] },
      { heading: '6. Frais et paiement', body: ['Les frais, y compris tout pourcentage sur le chiffre de vente de la boutique, sont fixés dans votre contrat signé avec nous. Les coûts initiaux de stock, les frais de plateforme ou de publicité relèvent de votre responsabilité, sauf indication contraire de votre contrat.'] },
      { heading: '7. Résiliation', body: ['Vous pouvez cesser d’utiliser notre service à tout moment en nous contactant. Il n’y a aucun frais d’annulation ni préavis requis, mais nous vous demandons de nous contacter afin que nous confirmions par écrit la fin du service et clôturions les travaux en cours.', 'Nous pouvons suspendre ou mettre fin au service si vous enfreignez ces Conditions, votre contrat signé ou la loi applicable.'] },
      { heading: '8. Propriété intellectuelle', body: ['Le contenu, la marque et les éléments de notre site restent notre propriété ou celle de nos concédants. Vous ne pouvez pas les copier ni les redistribuer sans notre autorisation.'] },
      { heading: '9. Limitation de responsabilité', body: ['Dans la mesure permise par la loi, nous ne sommes pas responsables des pertes indirectes, accessoires ou consécutives, y compris la perte de profits ou d’activité, résultant de l’utilisation de notre service ou de notre site.'] },
      { heading: '10. Droit applicable', body: ['Ces Conditions sont régies par le droit de la Région administrative spéciale de Hong Kong, sans égard aux règles de conflit de lois. Tout litige découlant de ces Conditions ou de votre utilisation du service sera soumis à la juridiction décrite dans votre contrat signé, ou à défaut, aux tribunaux de Hong Kong.'] },
      { heading: '11. Modifications de ces Conditions', body: ['Nous pouvons mettre à jour ces Conditions de temps à autre. La date "Dernière mise à jour" ci-dessus indique la dernière révision. La poursuite de l’utilisation de notre service après des modifications signifie que vous acceptez les Conditions mises à jour.'] },
      { heading: '12. Nous contacter', body: [`Pour toute question sur ces Conditions, contactez-nous à ${EMAIL} ou via WhatsApp.`] },
    ],
  },
};

export const legalCopy: Record<LandingLanguage, LegalCopy> = { en, zh, de, it, es, fr };

