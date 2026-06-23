const TRANSLATIONS = {
  'zh-TW': {
    /* NAV */
    nav_products:   '產品',
    nav_technology: '技術',
    nav_about:      '關於我們',
    nav_clients:    '合作夥伴',
    nav_careers:    '加入KIPO',
    nav_contact:    '聯繫我們',

    /* INTEL × KIPO */
    intel_title:      '聯合開發全液冷散熱系統',
    intel_desc:       '科普與 Intel 共同開發全水冷系統，涵蓋 CPU、Addon Card、DIMM、OSFP、E1.S 完整液冷解決方案。',
    intel_stat_unit:  '/cm² 晶片面積散熱目標',

    /* PRODUCT TABS */
    tab_lcm:  '液冷模組 LCM',
    tab_evac: '氣冷 EVAC',
    tab_nb:   '筆電 / AIO',
    tab_rack: '機架系統 RACK',
    lcm_cpu_title:   'CPU LCM Series',
    lcm_gpu_title:   'GPU LCM Series',
    lcm_other_title: 'Others LCM Series',
    evac_title:      'KIPO EVAC Series — 伺服器氣冷方案',
    rack_title:      'KIPO RACK Series — CDU / CDM',
    rack_cdm_custom: '客製化設計',
    spec_spec: 'SPEC', spec_app: 'Application', spec_pwr: 'Power',
    spec_cool: 'Coolant', spec_flow: 'Flow Rate', spec_pd: 'Pressure Drop', spec_rth: 'Thermal Resistance',

    /* CAREERS */
    careers_eyebrow: '加入我們',
    careers_h2:      '與 KIPO 共同驅動科技未來',
    careers_sub:     '我們在台中、台北、昆山持續尋找熱愛散熱技術、勇於創新的夥伴，共同打造全球頂尖的熱管理解決方案。',
    job1_title: '散熱模擬工程師', job1_loc: '台中總部 / 昆山廠',
    job2_title: '機構設計工程師', job2_loc: '台中總部 / 昆山廠',
    job3_title: '研發工程師',     job3_loc: '台中總部',
    job4_title: '業務工程師',     job4_loc: '台北辦事處',
    job5_title: '品保工程師',     job5_loc: '台中總部 / 昆山廠',
    job6_title: '自動化設備工程師', job6_loc: '昆山廠',
    careers_cta_p:   '沒有看到符合的職缺？歡迎主動投遞履歷，我們隨時歡迎優秀人才！',
    careers_cta_btn: '投遞履歷',

    /* HERO */
    hero_eyebrow: '25+年散熱技術深耕',
    hero_h1:      '驅動科技之心<br/>冷卻無限可能',
    hero_sub:     '科普科技深耕散熱領域逾 25 年，從筆電散熱模組到伺服器液冷系統，為全球一流電子品牌提供高效、輕量、低碳的熱管理解決方案。',
    hero_cta1:    '聯繫業務',
    hero_cta2:    '查看產品',
    stat1_label:  '散熱效率',
    stat1_val:    '高效導熱',
    stat2_label:  '設計理念',
    stat2_val:    '輕量化',
    stat3_label:  '環保承諾',
    stat3_val:    '低碳綠能',
    m1_label:     '年產業深耕',
    m2_label:     '專業員工人數',
    m3_label:     '資本額<br/>(新台幣)',
    m4_label:     '全球據點',

    /* SOLUTIONS */
    sol_h2:       '產品線',
    sol_sub:      '涵蓋消費性電子到企業級伺服器的完整散熱解決方案。',
    sol_tag:      '核心產品',
    sol1_title:   '筆電 / 電競散熱模組',
    sol1_desc:    '大功率容量設計，低熱阻、安全穩定。適用於主流筆記型電腦及高效能電競機型，提供均溫板與熱管整合解決方案。',
    sol2_title:   '桌上型 AIO 散熱模組',
    sol2_desc:    '一體成型整合設計，適用於 All-in-One 桌上型電腦，提供高效靜音散熱體驗。',
    sol3_title:   '伺服器散熱系統',
    sol3_desc:    '涵蓋氣冷與液冷兩大系統，針對高密度伺服器與 AI 運算叢集提供企業級散熱方案，低碳足跡。',
    sol4_title:   '高效能散熱風扇',
    sol4_desc:    '高風量、高靜壓、低噪音設計；另提供低功耗靜音風扇系列，適用於對噪音敏感的應用環境。',
    sol_cta:      '索取資料 →',

    /* TECHNOLOGY */
    tech_h2:      '核心技術優勢',
    tech_sub:     '三大技術方向驅動科普科技在散熱領域的持續領先。',
    tech1_num:    '01',
    tech1_title:  '輕薄設計',
    tech1_desc:   '採用輕薄導熱複合材料，減輕產品重量，同時提升散熱效率。',
    tech2_num:    '02',
    tech2_title:  '高效散熱',
    tech2_desc:   '突破傳統冷卻技術瓶頸，讓您的設備運作更穩定、壽命更長。',
    tech2_stat:   '高效<br/>散熱',
    tech3_num:    '03',
    tech3_title:  '綠色科技',
    tech3_desc:   '獨家低碳足跡液體冷卻技術，降低碳排放，為地球盡一份力。',
    fb1_label:    '筆電',
    fb1_val:      '高效',
    fb2_label:    '伺服器',
    fb2_val:      '極效',
    fb3_label:    '風扇',
    fb3_val:      '靜音',

    /* ABOUT */
    about_h2:     '關於科普科技',
    about_p1:     '科普科技股份有限公司（Kipotec Corporation）成立於 1998 年，深耕散熱解決方案逾 25 年。我們的使命是成為全球領先的散熱方案提供者，為客戶創造更高的附加價值。',
    about_p2:     '憑藉高效散熱、輕量化設計與綠色技術三大核心優勢，科普科技持續為全球知名電子品牌提供從研發設計到量產交付的一站式熱管理服務。',
    about_cert_title: '認證與資質',
    cert_quality: '品質認證',
    cert_env:     '環境保護及安全認證',
    cert_auto:    '汽車安全認證',
    about_s1:     '創立年份',
    about_s2:     '年專業深耕',
    about_s3:     '員工人數',
    about_s4:     '資本額',

    /* CLIENTS */
    clients_title: '服務全球頂級電子品牌',

    /* CTA BAND */
    cta_h2:   '需要客製化散熱方案？',
    cta_p:    '我們的工程師團隊將根據您的應用需求，提供從設計開發到量產的完整技術支援。',
    cta_btn:  '立即諮詢',

    /* CONTACT */
    contact_h2:  '聯繫我們',
    contact_p:   '無論是標準產品詢價或客製化工程需求，歡迎透過以下方式與我們聯繫。',
    office1:     '集團總部',
    office1_addr:'台中市工業區36路18號',
    office1_tel: '+886-4-2359-6699',
    office2:     '台北辦事處',
    office2_addr:'新北市新莊區新北大道3段5號20樓之3',
    office2_tel: '+886-2-8522-7278',
    office3:     '昆山廠',
    office3_addr:'江蘇省昆山市周市鎮橫新涇路88號',
    office3_tel: '+86-512-57639568',
    contact_email:      'howard@kipotec.com.tw',
    contact_email_href: 'mailto:howard@kipotec.com.tw',
    form_name:        '姓名',
    form_name_ph:     '王大明',
    form_company:     '公司',
    form_company_ph:  '貴公司名稱',
    form_email:       '電子郵件',
    form_email_ph:    'your@company.com',
    form_product:     '產品類別',
    form_product_ph:  '選擇產品類別',
    form_opt1:        '筆電 / 電競散熱模組',
    form_opt2:        '桌上型 AIO 散熱模組',
    form_opt3:        '伺服器散熱系統',
    form_opt4:        '散熱風扇',
    form_opt5:        '液冷系統',
    form_opt6:        '客製化需求',
    form_message:     '需求描述',
    form_message_ph:  '請描述您的應用場景、散熱功率需求及工作環境...',
    form_submit:      '送出詢問',
    form_note:        '我們將在 1 個工作日內以電子郵件回覆您。',

    /* FOOTER */
    footer_tagline: '驅動科技之心，冷卻無限可能。<br/>深耕散熱解決方案逾 25 年，服務全球頂級電子品牌。',
    fl1_title:  '產品',
    fl1_l1: '筆電散熱模組', fl1_l2: 'AIO 散熱模組', fl1_l3: '伺服器散熱', fl1_l4: '散熱風扇',
    fl2_title:  '公司',
    fl2_l1: '關於我們', fl2_l2: '技術優勢', fl2_l3: '合作夥伴', fl2_l4: '聯繫我們',
    fl3_title:  '據點',
    fl3_l1: '台中總部', fl3_l2: '台北辦公室', fl3_l3: '昆山廠',
    footer_copy: '© 2026 科普科技股份有限公司 Kipotec Corporation. All rights reserved.',
    footer_loc:  '台中・台北・昆山 | 成立於 1998 年',
  },

  'zh-CN': {
    nav_products:   '产品',
    nav_technology: '技术',
    nav_about:      '关于我们',
    nav_clients:    '合作伙伴',
    nav_careers:    '加入KIPO',
    nav_contact:    '联系我们',

    /* INTEL × KIPO */
    intel_title:      '联合开发全液冷散热系统',
    intel_desc:       '科普与 Intel 共同开发全水冷系统，涵盖 CPU、Addon Card、DIMM、OSFP、E1.S 完整液冷解决方案。',
    intel_stat_unit:  '/cm² 芯片面积散热目标',

    /* PRODUCT TABS */
    tab_lcm:  '液冷模组 LCM', tab_evac: '气冷 EVAC', tab_nb: '笔电 / AIO', tab_rack: '机架系统 RACK',
    lcm_cpu_title: 'CPU LCM Series', lcm_gpu_title: 'GPU LCM Series', lcm_other_title: 'Others LCM Series',
    evac_title: 'KIPO EVAC Series — 服务器气冷方案', rack_title: 'KIPO RACK Series — CDU / CDM',
    rack_cdm_custom: '客制化设计',
    spec_spec: 'SPEC', spec_app: 'Application', spec_pwr: 'Power',
    spec_cool: 'Coolant', spec_flow: 'Flow Rate', spec_pd: 'Pressure Drop', spec_rth: 'Thermal Resistance',

    /* CAREERS */
    careers_eyebrow: '加入我们', careers_h2: '与 KIPO 共同驱动科技未来',
    careers_sub: '我们在台中、台北、昆山持续寻找热爱散热技术、勇于创新的伙伴。',
    job1_title: '散热模拟工程师', job1_loc: '台中总部 / 昆山厂',
    job2_title: '机构设计工程师', job2_loc: '台中总部 / 昆山厂',
    job3_title: '研发工程师',     job3_loc: '台中总部',
    job4_title: '业务工程师',     job4_loc: '台北办事处',
    job5_title: '品保工程师',     job5_loc: '台中总部 / 昆山厂',
    job6_title: '自动化设备工程师', job6_loc: '昆山厂',
    careers_cta_p: '没有看到合适的职缺？欢迎主动投递简历！', careers_cta_btn: '投递简历',
    hero_eyebrow: '25+年散热技术深耕',
    hero_h1:      '驱动科技之心<br/>冷却无限可能',
    hero_sub:     '科普科技深耕散热领域逾 25 年，从笔电散热模组到服务器液冷系统，为全球一流电子品牌提供高效、轻量、低碳的热管理解决方案。',
    hero_cta1:    '联系业务',
    hero_cta2:    '查看产品',
    stat1_label:  '散热效率',
    stat1_val:    '高效导热',
    stat2_label:  '设计理念',
    stat2_val:    '轻量化',
    stat3_label:  '环保承诺',
    stat3_val:    '低碳绿能',
    m1_label:     '年产业深耕',
    m2_label:     '专业员工人数',
    m3_label:     '资本额<br/>(新台币)',
    m4_label:     '全球据点',
    sol_h2:       '产品线',
    sol_sub:      '涵盖消费性电子到企业级服务器的完整散热解决方案。',
    sol_tag:      '核心产品',
    sol1_title:   '笔电 / 电竞散热模组',
    sol1_desc:    '大功率容量设计，低热阻、安全稳定。适用于主流笔记型电脑及高效能电竞机型，提供均温板与热管整合解决方案。',
    sol2_title:   '桌上型 AIO 散热模组',
    sol2_desc:    '一体成型整合设计，适用于 All-in-One 桌上型电脑，提供高效静音散热体验。',
    sol3_title:   '服务器散热系统',
    sol3_desc:    '涵盖气冷与液冷两大系统，针对高密度服务器与 AI 运算集群提供企业级散热方案，低碳足迹。',
    sol4_title:   '高效能散热风扇',
    sol4_desc:    '高风量、高静压、低噪音设计；另提供低功耗静音风扇系列，适用于对噪音敏感的应用环境。',
    sol_cta:      '索取资料 →',
    tech_h2:      '核心技术优势',
    tech_sub:     '三大技术方向驱动科普科技在散热领域的持续领先。',
    tech1_num:    '01',
    tech1_title:  '轻薄设计',
    tech1_desc:   '采用轻薄导热复合材料，减轻产品重量，同时提升散热效率。',
    tech2_num:    '02',
    tech2_title:  '高效散热',
    tech2_desc:   '突破传统冷却技术瓶颈，让您的设备运作更稳定、寿命更长。',
    tech2_stat:   '高效<br/>散热',
    tech3_num:    '03',
    tech3_title:  '绿色科技',
    tech3_desc:   '独家低碳足迹液体冷却技术，降低碳排放，为地球尽一份力。',
    fb1_label:    '笔电',
    fb1_val:      '高效',
    fb2_label:    '服务器',
    fb2_val:      '极效',
    fb3_label:    '风扇',
    fb3_val:      '静音',
    about_h2:     '关于科普科技',
    about_p1:     '科普科技股份有限公司（Kipotec Corporation）成立于 1998 年，深耕散热解决方案逾 25 年。我们的使命是成为全球领先的散热方案提供者，为客户创造更高的附加价值。',
    about_p2:     '凭借高效散热、轻量化设计与绿色技术三大核心优势，科普科技持续为全球知名电子品牌提供从研发设计到量产交付的一站式热管理服务。',
    about_cert_title: '认证与资质',
    cert_quality: '品质认证',
    cert_env:     '环境保护及安全认证',
    cert_auto:    '汽车安全认证',
    about_s1:     '创立年份',
    about_s2:     '年专业深耕',
    about_s3:     '员工人数',
    about_s4:     '资本额',
    clients_title: '服务全球顶级电子品牌',
    cta_h2:   '需要定制散热方案？',
    cta_p:    '我们的工程师团队将根据您的应用需求，提供从设计开发到量产的完整技术支援。',
    cta_btn:  '立即咨询',
    contact_h2:  '联系我们',
    contact_p:   '无论是标准产品询价或定制工程需求，欢迎透过以下方式与我们联系。',
    office1:     '集团总部',
    office1_addr:'台中市工业区36路18号',
    office1_tel: '+886-4-2359-6699',
    office2:     '台北办事处',
    office2_addr:'新北市新庄区新北大道3段5号20楼之3',
    office2_tel: '+886-2-8522-7278',
    office3:     '昆山厂',
    office3_addr:'江苏省昆山市周市镇横新泾路88号',
    office3_tel: '+86-512-57639568',
    contact_email:      'sales@kipotec.com.tw',
    contact_email_href: 'mailto:sales@kipotec.com.tw',
    form_name:        '姓名',
    form_name_ph:     '王大明',
    form_company:     '公司',
    form_company_ph:  '贵公司名称',
    form_email:       '电子邮件',
    form_email_ph:    'your@company.com',
    form_product:     '产品类别',
    form_product_ph:  '选择产品类别',
    form_opt1:        '笔电 / 电竞散热模组',
    form_opt2:        '桌上型 AIO 散热模组',
    form_opt3:        '服务器散热系统',
    form_opt4:        '散热风扇',
    form_opt5:        '液冷系统',
    form_opt6:        '定制需求',
    form_message:     '需求描述',
    form_message_ph:  '请描述您的应用场景、散热功率需求及工作环境...',
    form_submit:      '送出询问',
    form_note:        '我们将在 1 个工作日内以电子邮件回覆您。',
    footer_tagline: '驱动科技之心，冷却无限可能。<br/>深耕散热解决方案逾 25 年，服务全球顶级电子品牌。',
    fl1_title:  '产品',
    fl1_l1: '笔电散热模组', fl1_l2: 'AIO 散热模组', fl1_l3: '服务器散热', fl1_l4: '散热风扇',
    fl2_title:  '公司',
    fl2_l1: '关于我们', fl2_l2: '技术优势', fl2_l3: '合作伙伴', fl2_l4: '联系我们',
    fl3_title:  '据点',
    fl3_l1: '台中总部', fl3_l2: '台北办公室', fl3_l3: '昆山厂',
    footer_copy: '© 2026 科普科技股份有限公司 Kipotec Corporation. All rights reserved.',
    footer_loc:  '台中・台北・昆山 | 成立于 1998 年',
  },

  'en': {
    nav_products:   'Products',
    nav_technology: 'Technology',
    nav_about:      'About',
    nav_clients:    'Partners',
    nav_careers:    'Join KIPO',
    nav_contact:    'Contact Us',

    /* INTEL × KIPO */
    intel_title:      'Jointly Developed Full Liquid-Cooling System',
    intel_desc:       'Kipo and Intel jointly developed a full liquid-cooling system covering CPU, Addon Card, DIMM, OSFP, and E1.S.',
    intel_stat_unit:  '/cm² chip area thermal target',

    /* PRODUCT TABS */
    tab_lcm: 'Liquid Cooling LCM', tab_evac: 'Air Cooling EVAC', tab_nb: 'Notebook / AIO', tab_rack: 'Rack System',
    lcm_cpu_title: 'CPU LCM Series', lcm_gpu_title: 'GPU LCM Series', lcm_other_title: 'Others LCM Series',
    evac_title: 'KIPO EVAC Series — Server Air Cooling', rack_title: 'KIPO RACK Series — CDU / CDM',
    rack_cdm_custom: 'Customizable',
    spec_spec: 'SPEC', spec_app: 'Application', spec_pwr: 'Power',
    spec_cool: 'Coolant', spec_flow: 'Flow Rate', spec_pd: 'Pressure Drop', spec_rth: 'Thermal Resistance',

    /* CAREERS */
    careers_eyebrow: 'Join Us', careers_h2: 'Build the Future of Thermal Tech with KIPO',
    careers_sub: 'We are always looking for passionate engineers and innovators across Taichung, Taipei, and Kunshan to create world-class thermal management solutions.',
    job1_title: 'Thermal Simulation Engineer', job1_loc: 'Taichung HQ / Kunshan',
    job2_title: 'Mechanical Design Engineer',  job2_loc: 'Taichung HQ / Kunshan',
    job3_title: 'R&D Engineer',                job3_loc: 'Taichung HQ',
    job4_title: 'Sales Engineer',              job4_loc: 'Taipei Branch',
    job5_title: 'QA Engineer',                 job5_loc: 'Taichung HQ / Kunshan',
    job6_title: 'Automation Engineer',         job6_loc: 'Kunshan Factory',
    careers_cta_p: "Don't see a matching role? We welcome proactive applications from talented individuals!", careers_cta_btn: 'Send Resume',
    hero_eyebrow: '25+ Years of Thermal Expertise',
    hero_h1:      'Driving Technology\'s Core<br/>Cooling Infinite Possibilities',
    hero_sub:     'Kipotec has specialized in thermal management for over 25 years — from notebook cooling modules to server liquid cooling systems — delivering high-efficiency, lightweight, and low-carbon heat solutions to the world\'s leading electronics brands.',
    hero_cta1:    'Contact Sales',
    hero_cta2:    'View Products',
    stat1_label:  'Thermal Efficiency',
    stat1_val:    'High Performance',
    stat2_label:  'Design Philosophy',
    stat2_val:    'Lightweight',
    stat3_label:  'Eco Commitment',
    stat3_val:    'Low Carbon',
    m1_label:     'Years of Expertise',
    m2_label:     'Employees',
    m3_label:     'Capital<br/>(NTD)',
    m4_label:     'Global Locations',
    sol_h2:       'Product Lines',
    sol_sub:      'Complete thermal solutions from consumer electronics to enterprise-grade servers.',
    sol_tag:      'Core Product',
    sol1_title:   'Notebook / Gaming Cooling Modules',
    sol1_desc:    'High-power capacity design with low thermal resistance, safe and stable. Compatible with mainstream notebooks and high-performance gaming laptops, integrating vapor chambers and heat pipe solutions.',
    sol2_title:   'Desktop AIO Cooling Modules',
    sol2_desc:    'Integrated all-in-one design for AIO desktop computers, delivering efficient and quiet thermal performance.',
    sol3_title:   'Server Cooling Systems',
    sol3_desc:    'Covering both air-cooled and liquid-cooled systems, providing enterprise-grade thermal solutions for high-density servers and AI computing clusters with a low carbon footprint.',
    sol4_title:   'High-Performance Cooling Fans',
    sol4_desc:    'High airflow, high static pressure, and low noise design. Also available: low-power silent fan series for noise-sensitive environments.',
    sol_cta:      'Request Info →',
    tech_h2:      'Core Technology Advantages',
    tech_sub:     'Three technology pillars drive Kipotec\'s sustained leadership in thermal management.',
    tech1_num:    '01',
    tech1_title:  'Slim & Light Design',
    tech1_desc:   'Lightweight thermal composite materials reduce product weight while enhancing thermal efficiency.',
    tech2_num:    '02',
    tech2_title:  'High-Efficiency Cooling',
    tech2_desc:   'Breaking through traditional cooling bottlenecks for more stable operation and longer device lifespan.',
    tech2_stat:   'High<br/>Efficiency',
    tech3_num:    '03',
    tech3_title:  'Green Technology',
    tech3_desc:   'Exclusive low-carbon-footprint liquid cooling technology that reduces carbon emissions for a greener planet.',
    fb1_label:    'Notebook',
    fb1_val:      'High',
    fb2_label:    'Server',
    fb2_val:      'Max',
    fb3_label:    'Fan',
    fb3_val:      'Silent',
    about_h2:     'About Kipotec',
    about_p1:     'Kipotec Corporation (科普科技股份有限公司) was founded in 1998 and has specialized in thermal solutions for over 25 years. Our mission is to become the world\'s leading thermal solution provider, creating greater value for our customers.',
    about_p2:     'With three core advantages — high-efficiency thermal dissipation, lightweight design, and green technology — Kipotec continuously provides world-renowned electronics brands with end-to-end thermal management services from R&D to mass production.',
    about_cert_title: 'Certifications',
    cert_quality: 'Quality Certifications',
    cert_env:     'Environmental & Safety Certifications',
    cert_auto:    'Automotive Safety Certifications',
    about_s1:     'Year Founded',
    about_s2:     'Years of Expertise',
    about_s3:     'Employees',
    about_s4:     'Capital',
    clients_title: 'Trusted by the World\'s Leading Electronics Brands',
    cta_h2:   'Need a Custom Thermal Solution?',
    cta_p:    'Our engineering team will provide complete technical support from design and development to mass production based on your application requirements.',
    cta_btn:  'Get in Touch',
    contact_h2:  'Contact Us',
    contact_p:   'Whether for standard product inquiries or custom engineering needs, our team is ready to assist you.',
    office1:     'Group Headquarters',
    office1_addr:'No.18, Rd.36, Industrial Zone, Taichung',
    office1_tel: '+886-4-2359-6699',
    office2:     'Taipei Branch',
    office2_addr:'20F-3, No.5, Sec.3, New Taipei Blvd., Xinzhuang, New Taipei',
    office2_tel: '+886-2-8522-7278',
    office3:     'Kunshan Factory',
    office3_addr:'No.88 Hengxinjing Rd., Zhoushi, Kunshan, Jiangsu',
    office3_tel: '+86-512-57639568',
    contact_email:      'howard@kipotec.com.tw',
    contact_email_href: 'mailto:howard@kipotec.com.tw',
    form_name:        'Name',
    form_name_ph:     'John Smith',
    form_company:     'Company',
    form_company_ph:  'Your company name',
    form_email:       'Email',
    form_email_ph:    'your@company.com',
    form_product:     'Product Category',
    form_product_ph:  'Select a product category',
    form_opt1:        'Notebook / Gaming Cooling Modules',
    form_opt2:        'Desktop AIO Cooling Modules',
    form_opt3:        'Server Cooling Systems',
    form_opt4:        'Cooling Fans',
    form_opt5:        'Liquid Cooling Systems',
    form_opt6:        'Custom Requirements',
    form_message:     'Message',
    form_message_ph:  'Please describe your application, thermal power requirements, and operating environment...',
    form_submit:      'Submit Inquiry',
    form_note:        'We will reply by email within 1 business day.',
    footer_tagline: 'Driving Technology\'s Core, Cooling Infinite Possibilities.<br/>25+ years of thermal solutions serving the world\'s leading electronics brands.',
    fl1_title:  'Products',
    fl1_l1: 'Notebook Cooling', fl1_l2: 'AIO Cooling', fl1_l3: 'Server Cooling', fl1_l4: 'Cooling Fans',
    fl2_title:  'Company',
    fl2_l1: 'About Us', fl2_l2: 'Technology', fl2_l3: 'Partners', fl2_l4: 'Contact',
    fl3_title:  'Locations',
    fl3_l1: 'Taichung HQ', fl3_l2: 'Taipei Office', fl3_l3: 'Kunshan Factory',
    footer_copy: '© 2026 Kipotec Corporation (科普科技股份有限公司). All rights reserved.',
    footer_loc:  'Taichung · Taipei · Kunshan | Est. 1998',
  }
};

// HTML keys (use innerHTML)
const HTML_KEYS = new Set([
  'hero_h1', 'tech2_stat', 'footer_tagline'
]);

let currentLang = localStorage.getItem('kipo-lang') || 'zh-TW';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('kipo-lang', lang);
  const t = TRANSLATIONS[lang];

  // Update html lang attribute
  document.documentElement.lang = lang === 'en' ? 'en' : lang === 'zh-CN' ? 'zh-Hans' : 'zh-Hant';

  // Apply text translations
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!t[key]) return;
    if (HTML_KEYS.has(key)) {
      el.innerHTML = t[key];
    } else {
      el.textContent = t[key];
    }
  });

  // Apply placeholder translations
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key]) el.placeholder = t[key];
  });

  // Apply href translations (e.g. mailto links that change per locale)
  document.querySelectorAll('[data-i18n-href]').forEach(el => {
    const key = el.getAttribute('data-i18n-href');
    if (t[key]) el.href = t[key];
  });

  // Apply select options
  const selMap = {
    form_opt1: 'notebook', form_opt2: 'aio', form_opt3: 'server',
    form_opt4: 'fan', form_opt5: 'liquid', form_opt6: 'custom'
  };
  document.querySelectorAll('[data-i18n-opt]').forEach(el => {
    const key = el.getAttribute('data-i18n-opt');
    if (t[key]) el.textContent = t[key];
  });

  // Update lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function initLang() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
  applyLang(currentLang);
}
