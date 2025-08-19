import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'tr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  tr: {
    // Navigation
    'nav.home': 'Ana Sayfa',
    'nav.about': 'Hakkımızda',
    'nav.services': 'Hizmetler',
    'nav.projects': 'Projeler',
    'nav.references': 'Referanslar',
    'nav.careers': 'Kariyer',
    'nav.contact': 'İletişim',
    
    // Home Page
    'home.hero.title': 'Teknoloji Çözümlerinde Güvenilir Ortağınız',
    'home.hero.subtitle': '15+ yıllık deneyimimizle, sistem entegrasyon, veri merkezi çözümleri, süper bilgisayar teknolojileri ve bilişim güvenliği alanlarında kapsamlı hizmetler sunuyoruz.',
    'home.hero.cta': 'Hizmetlerimizi Keşfedin',
    'home.hero.contact': 'İletişime Geçin',
    'home.hero.slide1.title': 'İLERİ TEKNOLOJİ ÇÖZÜMLERİ',
    'home.hero.slide1.description': 'En son teknoloji ile güçlü ve güvenilir çözümler sunuyoruz.',
    'home.hero.slide2.title': 'AR-GE ÜRÜNLERİ',
    'home.hero.slide2.description': 'İnovatif araştırma ve geliştirme projelerimizle geleceği şekillendiriyoruz.',
    'home.hero.slide3.title': 'YÜKSEK STANDART HİZMETLER',
    'home.hero.slide3.description': 'Müşteri memnuniyetini ön planda tutarak kaliteli hizmet sunuyoruz.',
    
    // Services
    'services.title': 'Hizmetlerimiz',
    'services.subtitle': 'Teknoloji alanında geniş yelpazedeki uzmanlığımızla müşterilerimize değer katıyoruz',
    'services.system_integration.title': 'Sistem Entegrasyonu',
    'services.system_integration.description': 'Farklı teknolojileri bir araya getirerek kusursuz çalışan sistemler kuruyoruz.',
    'services.data_center.title': 'Veri Merkezi Çözümleri',
    'services.data_center.description': 'Modern veri merkezi altyapıları ile verilerinizi güvende tutuyoruz.',
    'services.hpc.title': 'Süper Bilgisayar Teknolojileri',
    'services.hpc.description': 'Yüksek performanslı hesaplama çözümleri ile karmaşık problemleri çözüyoruz.',
    'services.security.title': 'Bilişim Güvenliği',
    'services.security.description': 'Kapsamlı güvenlik çözümleri ile dijital varlıklarınızı koruyoruz.',
    'services.virtualization.title': 'Sanallaştırma',
    'services.virtualization.description': 'Kaynaklarınızı optimize ederek maliyetlerinizi düşürüyoruz.',
    'services.disaster_recovery.title': 'Felaket Kurtarma',
    'services.disaster_recovery.description': 'İş sürekliliğinizi garanti altına alıyoruz.',
    
    // Projects
    'projects.title': 'Projelerimiz',
    'projects.subtitle': 'Çeşitli sektörlerde gerçekleştirdiğimiz başarılı projeler ve çözümlerimiz. Her proje, müşteri ihtiyaçlarına özel geliştirilmiş teknoloji çözümleridir.',
    'projects.view_details': 'Detayları Görüntüle',
    'projects.category': 'Kategori',
    'projects.technologies': 'Teknolojiler',
    'projects.status.completed': 'Tamamlandı',
    'projects.status.active': 'Aktif', 
    'projects.status.development': 'Geliştirme Aşamasında',
    'projects.status.ongoing': 'Devam Ediyor',
    
    // Project carousel
    'projects.carousel.management.title': 'Proje Yönetimi',
    'projects.carousel.management.description': 'Profesyonel proje yönetimi ile başarılı çözümler',
    'projects.carousel.dashboard.title': 'Analitik Dashboard',
    'projects.carousel.dashboard.description': 'Modern veri görselleştirme ve analiz sistemleri',
    'projects.carousel.infrastructure.title': 'Altyapı Projeleri',
    'projects.carousel.infrastructure.description': 'Kurumsal IT altyapısı ve veri merkezi çözümleri',
    'projects.carousel.network.title': 'Ağ Altyapısı',
    'projects.carousel.network.description': 'Güvenli ve ölçeklenebilir ağ mimarisi kurulumu',
    
    // Individual projects
    'projects.gis.title': 'CBS Tabanlı Bilgi Sistemleri',
    'projects.gis.description': 'Coğrafi Bilgi Sistemleri tabanlı entegre veri yönetim çözümleri',
    'projects.gis.category': 'Coğrafi Bilgi Sistemleri',
    'projects.ecommerce.title': 'Talep Tabanlı E-Ticaret Portalı',
    'projects.ecommerce.description': 'Dinamik talep yönetimi özellikli modern e-ticaret platformu',  
    'projects.ecommerce.category': 'E-Ticaret',
    'projects.cctv.title': 'CCTV ve Güvenlik Yönetim Projeleri',
    'projects.cctv.description': 'Entegre güvenlik kamera sistemleri ve merkezi yönetim çözümleri',
    'projects.cctv.category': 'Güvenlik Sistemleri',
    'projects.terminal.title': 'Terminal (Otogar) Yönetim Projesi',
    'projects.terminal.description': 'Otogar operasyonlarının dijital yönetimi için kapsamlı sistem',
    'projects.terminal.category': 'Ulaşım Yönetimi',
    'projects.hgs.title': 'HGS Entegrasyon Sistemleri',
    'projects.hgs.description': 'Hızlı Geçiş Sistemi entegrasyonu ve ödeme altyapısı',
    'projects.hgs.category': 'Ödeme Sistemleri',
    'projects.infrastructure.title': 'Kurumsal Altyapı Modernizasyonu',
    'projects.infrastructure.description': 'Büyük ölçekli kurumsal IT altyapısının yenilenmesi ve optimizasyonu',
    'projects.infrastructure.category': 'Altyapı',
    
    // References
    'references.title': 'Referanslarımız',
    'references.subtitle': 'Güvenilir teknoloji partneri olarak birçok kurumsal müşteriyle uzun vadeli işbirlikleri gerçekleştiriyoruz. İşte bizimle çalışan değerli kurumlarımız.',
    'references.stats.clients': 'Kurumsal Müşteri',
    'references.stats.clients_desc': 'Çeşitli sektörlerden',
    'references.stats.projects': 'Başarılı Proje',
    'references.stats.projects_desc': 'Tamamlanan işler',
    'references.stats.experience': 'Yıl Deneyim',
    'references.stats.experience_desc': 'Sektörde tecrübe',
    'references.stats.satisfaction': 'Müşteri Memnuniyeti',
    'references.stats.satisfaction_desc': 'Kaliteli hizmet',
    'references.partners_title': 'İş Ortaklarımız ve Referanslarımız',
    'references.sectors_title': 'Hizmet Verdiğimiz Sektörler',
    
    // Reference slides
    'references.slide1.title': 'Kamu Kurumları',
    'references.slide1.description': 'Türkiye\'nin önde gelen bakanlık ve kamu kurumlarıyla stratejik ortaklıklar kurarak dijital dönüşüm projelerinde liderlik ediyoruz.',
    'references.slide2.title': 'Üniversite & Akademik Kurumlar',
    'references.slide2.description': 'Türkiye\'nin prestijli üniversiteleriyle akademik işbirliği yaparak eğitim teknolojileri ve araştırma projelerinde aktif rol alıyoruz.',
    'references.slide3.title': 'Özel Sektör & Kurumlar',
    'references.slide3.description': 'Belediyeler, özel kuruluşlar ve sivil toplum organizasyonları ile çeşitli teknoloji çözümleri geliştiriyoruz.',
    
    // Sectors
    'references.sectors.education': 'Eğitim',
    'references.sectors.defense': 'Savunma',
    'references.sectors.health': 'Sağlık',
    'references.sectors.public': 'Kamu',
    'references.sectors.finance': 'Finans',
    'references.sectors.energy': 'Enerji',
    'references.sectors.telecom': 'Telekomünikasyon',
    'references.sectors.automotive': 'Otomotiv',
    'references.sectors.manufacturing': 'İmalat',
    'references.sectors.logistics': 'Lojistik',
    'references.sectors.tourism': 'Turizm',
    'references.sectors.agriculture': 'Tarım',
    
    // CTA Section
    'references.cta.title': 'Bizimle Çalışmak İster misiniz?',
    'references.cta.description': 'Teknoloji projelerinizde güvenilir iş ortağı arıyorsanız, uzman ekibimizle size özel çözümler geliştirebiliriz.',
    'references.cta.contact': 'İrtibata Geçin',
    'references.cta.services': 'Hizmetlerimizi İnceleyin',
    
    // Careers
    'careers.title': 'Kariyer Fırsatları',
    'careers.subtitle': 'Aramıza katılacak arkadaşlar, Ankara\'da bulunan işyerimizde Java teknolojileri kullanarak, web tabanlı ve dağıtık mimaride yazılım geliştirme projelerinde çalışma imkanı bulacaklar.',
    'careers.why_join.title': 'Neden 2C Teknoloji?',
    'careers.growth.title': 'Takım Çalışması',
    'careers.growth.description': 'Deneyimli ve uzman kadro ile birlikte çalışma fırsatı',
    'careers.innovation.title': 'Teknoloji Odaklı',
    'careers.innovation.description': 'En güncel teknolojiler ile proje geliştirme imkanı',
    'careers.team.title': 'Merkezi Lokasyon',
    'careers.team.description': 'Ankara\'da modern ofis ortamında çalışma',
    'careers.balance.title': 'Esnek Çalışma',
    'careers.balance.description': 'İş-yaşam dengesi ve esnek çalışma saatleri',
    'careers.open_positions': 'Açık Pozisyonlar',
    'careers.apply_now': 'Başvuru Yap',
    'careers.requirements': 'Gereksinimler:',
    'careers.contact_cta': 'Aradığınız pozisyon listede yok mu? Yine de bizimle iletişime geçin!',
    'careers.contact_button': 'İletişime Geç',
    
    // Career carousel
    'careers.carousel.development.title': 'Yazılım Geliştirme',
    'careers.carousel.development.description': 'Modern teknolojiler ile yazılım geliştirme fırsatları',
    'careers.carousel.growth.title': 'Kariyer Gelişimi',
    'careers.carousel.growth.description': 'Sürekli öğrenme ve gelişim odaklı çalışma ortamı',
    'careers.carousel.teamwork.title': 'Takım Çalışması',
    'careers.carousel.teamwork.description': 'Uzman ekip ile birlikte çalışma deneyimi',
    'careers.carousel.office.title': 'Modern Ofis',
    'careers.carousel.office.description': 'Ankara\'da konforlu ve teknolojik çalışma ortamı',
    
    // Job openings
    'careers.jobs.java_dev.title': 'Java Yazılım Geliştirici',
    'careers.jobs.java_dev.description': 'Web tabanlı ve dağıtık mimaride yazılım geliştirme projelerinde çalışacak deneyimli Java geliştiricisi arıyoruz.',
    'careers.jobs.java_dev.req1': 'Java teknolojilerinde en az 2 yıl deneyim',
    'careers.jobs.java_dev.req2': 'Spring Framework bilgisi',
    'careers.jobs.java_dev.req3': 'Web tabanlı uygulama geliştirme deneyimi',
    'careers.jobs.java_dev.req4': 'Dağıtık mimari bilgisi',
    'careers.jobs.java_dev.req5': 'Veritabanı yönetimi deneyimi',
    
    'careers.jobs.sysadmin.title': 'Sistem Yöneticisi',
    'careers.jobs.sysadmin.description': 'Kurumsal IT altyapısının yönetimi ve sistem entegrasyon projelerinde görev alacak deneyimli sistem yöneticisi.',
    'careers.jobs.sysadmin.req1': 'Linux/Windows server yönetimi',
    'careers.jobs.sysadmin.req2': 'Veri merkezi altyapısı deneyimi',
    'careers.jobs.sysadmin.req3': 'Ağ yönetimi ve güvenlik',
    'careers.jobs.sysadmin.req4': 'Sanallaştırma teknolojileri',
    'careers.jobs.sysadmin.req5': 'VMware/Hyper-V deneyimi',
    
    'careers.jobs.security.title': 'Bilişim Güvenliği Uzmanı',
    'careers.jobs.security.description': 'Kurumsal güvenlik çözümleri ve siber güvenlik projelerinde çalışacak uzman personel.',
    'careers.jobs.security.req1': 'Siber güvenlik alanında deneyim',
    'careers.jobs.security.req2': 'Güvenlik araçları bilgisi',
    'careers.jobs.security.req3': 'Risk analizi ve yönetimi',
    'careers.jobs.security.req4': 'Penetrasyon testleri',
    'careers.jobs.security.req5': 'Güvenlik sertifikaları tercih edilir',
    
    // Job details
    'careers.job_type.full_time': 'Tam Zamanlı',
    'careers.location.ankara': 'Ankara',
    'careers.experience.2_5': '2-5 Yıl',
    'careers.experience.3_7': '3-7 Yıl',
    'careers.experience.3_6': '3-6 Yıl',
    
    // Contact
    'contact.title': 'İletişim',
    'contact.subtitle': 'Projeleriniz ve teknoloji ihtiyaçlarınız hakkında bizimle iletişime geçin. Uzman ekibimiz size en uygun çözümleri sunmak için hazır.',
    'contact.get_in_touch': 'Bizimle İletişime Geçin',
    'contact.form_description': 'Formu doldurarak bize ulaşabilir, projeleriniz hakkında bilgi alabilirsiniz.',
    'contact.address': 'Adres',
    'contact.phone': 'Telefon',
    'contact.email': 'E-posta',
    'contact.form.name': 'Ad Soyad',
    'contact.form.email': 'E-posta',
    'contact.form.subject': 'Konu',
    'contact.form.message': 'Mesaj',
    'contact.form.send': 'Mesaj Gönder',
    'contact.form.name_placeholder': 'Adınızı ve soyadınızı girin',
    'contact.form.email_placeholder': 'E-posta adresinizi girin',
    'contact.form.subject_placeholder': 'Mesaj konusunu girin',
    'contact.form.message_placeholder': 'Mesajınızı buraya yazın...',
    'contact.form.first_name': 'Ad',
    'contact.form.last_name': 'Soyad',
    'contact.form.first_name_placeholder': 'Adınız',
    'contact.form.last_name_placeholder': 'Soyadınız',
    'contact.form.email_example': 'ornek@email.com',
    'contact.form.phone': 'Telefon',
    'contact.form.phone_placeholder': '+90 5XX XXX XX XX',
    'contact.form.company': 'Şirket',
    'contact.form.company_placeholder': 'Şirket adınız',
    'contact.form.subject_placeholder_detailed': 'Mesajınızın konusu',
    'contact.form.message_placeholder_detailed': 'Projeniz veya ihtiyacınız hakkında detaylı bilgi veriniz...',
    'contact.info_title': 'İletişim Bilgileri',
    'contact.office_main': 'Merkez Ofis',
    'contact.office_rnd': 'ArGe Ofisi',
    'contact.working_hours': 'Çalışma Saatleri',
    'contact.working_hours.weekdays': 'Pazartesi - Cuma: 09:00 - 18:00',
    'contact.working_hours.saturday': 'Cumartesi: 09:00 - 13:00',
    'contact.working_hours.sunday': 'Pazar: Kapalı',
    'contact.emergency_support': 'Acil Destek',
    'contact.emergency_description': 'Kritik sistemler için 7/24 acil destek hizmeti mevcuttur.',
    
    // About Page (existing translations)
    'about.title': 'Hakkımızda',
    'about.hero.description': '2C olarak müşterilerimize ihtiyacı doğrultusunda değer oluşturmayı ve entegre çözümler sunarak platform bağımsız bir şekilde çalışmalarına devam etmekteyiz. Firmamız, verimliliğin artırılması, rekabet üstünlüğünün sağlanması ve ölçülebilir maliyet kazancının oluşması için müşteri odaklı bir firma olmayı ön planda tutmaktadır. Yenilikçi fikirlerimiz ve pazar-odaklı hizmetlerimiz aracılığıyla daha güvenli ve sağlıklı yaşam için karşılaşılan sorunları çözerek sürdürülebilir bir başarı amaçlıyoruz.',
    
    // Carousel slides
    'carousel.expert_consulting.title': 'Uzman Danışmanlık',
    'carousel.expert_consulting.description': '15+ yıllık deneyimimizle teknoloji çözümleri sunuyoruz',
    'carousel.team_work.title': 'Takım Çalışması',
    'carousel.team_work.description': 'Profesyonel ekibimizle müşteri odaklı hizmet',
    'carousel.modern_office.title': 'Modern Ofis',
    'carousel.modern_office.description': 'Ankara merkezli güçlü altyapımız',
    'carousel.tech_center.title': 'Teknoloji Merkezi',
    'carousel.tech_center.description': 'Yenilikçi çözümler geliştirme merkezi',
    'carousel.itc_usa.title': 'Information Technology Corporation (USA)',
    'carousel.itc_usa.description': 'Uluslararası teknoloji iş birliği',
    
    // About content
    'about.details.title': 'Detaylarla 2C',
    'about.details.p1': '2C, ülkemiz ekonomisine katkı sağlayan yerli teknolojiler üretebilen, rekabet edilebilir ürünler ve çözümler sunan, müşteri odaklı kaliteli hizmet veren bir teknoloji şirketi olarak faaliyet göstermektedir.',
    'about.details.p2': 'Uzman kadromuz ile sistem entegrasyon, veri merkezi çözümleri, süper bilgisayar teknolojileri, bilişim güvenliği, sanallaştırma ve felaket kurtarma alanlarında kapsamlı hizmetler sunmaktayız.',
    'about.mission.title': 'Misyonumuz',
    'about.mission.description': 'Müşterilerimizin ihtiyaçlarını net bir şekilde çıkarılması ve bu ihtiyacın karşılanması için en uygun teknolojinin sağlanması Müşteri memnuniyetini sürekliliğinin sağlanması Yüksek kalitede ürün ve hizmetler sunulması Teknoloji alt yapılarının hatasız bir şekilde hazırlanması Global pazarda rekabet edebilir teknolojilerin üretilmesi Bilgi toplumuna dönüşüm sürecinde Türkiye\'nin rekabet gücünün ve refah seviyesinin artmasına destek verilmesi şeklindedir',
    'about.why2c.title': 'Neden 2C?',
    'about.why2c.experience': '15+ yıllık sektör deneyimi',
    'about.why2c.expert_team': 'Uzman teknik kadro',
    'about.why2c.customer_focused': 'Müşteri odaklı hizmet anlayışı',
    'about.why2c.local_tech': 'Yerli teknoloji odaklı çözümler',
    'about.success_stories.title': 'Başarı Hikayeleri',
    'about.success_stories.projects': 'Tamamlanan Proje',
    'about.success_stories.customers': 'Mutlu Müşteri',
    'about.vision.title': 'Vizyon',
    'about.vision.description': 'Teknoloji alanında öncü ve güvenilir bir marka olmak',
    'about.innovation.title': 'İnovasyon',
    'about.innovation.description': 'Sürekli gelişim ve yenilikçi çözümler',
    'about.trust.title': 'Güven',
    'about.trust.description': 'Müşteri memnuniyeti odaklı hizmet anlayışı',
    'about.partnership.title': 'Akademi-Üniversite İş Birliği',
    'about.partnership.description': 'Türkiye\'nin önde gelen üniversiteleri ve araştırma kurumları ile stratejik iş birlikleri gerçekleştiriyoruz.',
    'about.partnership.alt': 'Akademi-Üniversite İş Birliği - ODTÜ, İTÜ, Galatasaray Üniversitesi, TOBB ETÜ, Atılım Üniversitesi, Antalya Üniversitesi',
    
    // Footer
    'footer.company_info': 'Teknoloji çözümleri alanında 15+ yıllık deneyimimizle hizmet veren 2C, müşteri odaklı yaklaşımı ile sektörde güvenilir bir marka haline gelmiştir.',
    'footer.quick_links': 'Hızlı Bağlantılar',
    'footer.contact_info': 'İletişim Bilgileri',
    'footer.all_rights_reserved': 'Tüm hakları saklıdır.',
    
    // Company Stats
    'stats.projects': 'Tamamlanan Proje',
    'stats.clients': 'Mutlu Müşteri',
    'stats.experience': 'Yıllık Deneyim',
    'stats.team': 'Uzman Kadro',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.references': 'References',
    'nav.careers': 'Careers',
    'nav.contact': 'Contact',
    
    // Home Page
    'home.hero.title': 'Your Trusted Partner in Technology Solutions',
    'home.hero.subtitle': 'With our 15+ years of experience, we provide comprehensive services in system integration, data center solutions, supercomputer technologies, and information security.',
    'home.hero.cta': 'Discover Our Services',
    'home.hero.contact': 'Get In Touch',
    'home.hero.slide1.title': 'ADVANCED TECHNOLOGY SOLUTIONS',
    'home.hero.slide1.description': 'We provide powerful and reliable solutions with the latest technology.',
    'home.hero.slide2.title': 'R&D PRODUCTS',
    'home.hero.slide2.description': 'We shape the future with our innovative research and development projects.',
    'home.hero.slide3.title': 'HIGH-STANDARD SERVICES',
    'home.hero.slide3.description': 'We provide quality service by prioritizing customer satisfaction.',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'We add value to our customers with our wide range of expertise in technology',
    'services.system_integration.title': 'System Integration',
    'services.system_integration.description': 'We build seamlessly working systems by bringing different technologies together.',
    'services.data_center.title': 'Data Center Solutions',
    'services.data_center.description': 'We keep your data safe with modern data center infrastructures.',
    'services.hpc.title': 'Supercomputer Technologies',
    'services.hpc.description': 'We solve complex problems with high performance computing solutions.',
    'services.security.title': 'Information Security',
    'services.security.description': 'We protect your digital assets with comprehensive security solutions.',
    'services.virtualization.title': 'Virtualization',
    'services.virtualization.description': 'We reduce your costs by optimizing your resources.',
    'services.disaster_recovery.title': 'Disaster Recovery',
    'services.disaster_recovery.description': 'We guarantee your business continuity.',
    
    // Projects
    'projects.title': 'Our Projects',
    'projects.subtitle': 'Our successful projects and solutions in various sectors. Each project is a technology solution specially developed for customer needs.',
    'projects.view_details': 'View Details',
    'projects.category': 'Category',
    'projects.technologies': 'Technologies',
    'projects.status.completed': 'Completed',
    'projects.status.active': 'Active',
    'projects.status.development': 'In Development',
    'projects.status.ongoing': 'Ongoing',
    
    // Project carousel
    'projects.carousel.management.title': 'Project Management',
    'projects.carousel.management.description': 'Successful solutions with professional project management',
    'projects.carousel.dashboard.title': 'Analytics Dashboard',
    'projects.carousel.dashboard.description': 'Modern data visualization and analysis systems',
    'projects.carousel.infrastructure.title': 'Infrastructure Projects',
    'projects.carousel.infrastructure.description': 'Corporate IT infrastructure and data center solutions',
    'projects.carousel.network.title': 'Network Infrastructure',
    'projects.carousel.network.description': 'Secure and scalable network architecture setup',
    
    // Individual projects
    'projects.gis.title': 'GIS-Based Information Systems',
    'projects.gis.description': 'Geographic Information Systems based integrated data management solutions',
    'projects.gis.category': 'Geographic Information Systems',
    'projects.ecommerce.title': 'Demand-Based E-Commerce Portal',
    'projects.ecommerce.description': 'Modern e-commerce platform with dynamic demand management features',
    'projects.ecommerce.category': 'E-Commerce',
    'projects.cctv.title': 'CCTV and Security Management Projects',
    'projects.cctv.description': 'Integrated security camera systems and central management solutions',
    'projects.cctv.category': 'Security Systems',
    'projects.terminal.title': 'Terminal (Bus Station) Management Project',
    'projects.terminal.description': 'Comprehensive system for digital management of bus terminal operations',
    'projects.terminal.category': 'Transportation Management',
    'projects.hgs.title': 'HGS Integration Systems',
    'projects.hgs.description': 'Fast Transit System integration and payment infrastructure',
    'projects.hgs.category': 'Payment Systems',
    'projects.infrastructure.title': 'Corporate Infrastructure Modernization',
    'projects.infrastructure.description': 'Renewal and optimization of large-scale corporate IT infrastructure',
    'projects.infrastructure.category': 'Infrastructure',
    
    // References
    'references.title': 'Our References',
    'references.subtitle': 'As a reliable technology partner, we establish long-term collaborations with many corporate clients. Here are our valued institutions that work with us.',
    'references.stats.clients': 'Corporate Clients',
    'references.stats.clients_desc': 'From various sectors',
    'references.stats.projects': 'Successful Projects',
    'references.stats.projects_desc': 'Completed works',
    'references.stats.experience': 'Years Experience',
    'references.stats.experience_desc': 'Industry expertise',
    'references.stats.satisfaction': 'Customer Satisfaction',
    'references.stats.satisfaction_desc': 'Quality service',
    'references.partners_title': 'Our Business Partners and References',
    'references.sectors_title': 'Sectors We Serve',
    
    // Reference slides
    'references.slide1.title': 'Public Institutions',
    'references.slide1.description': 'We lead digital transformation projects by establishing strategic partnerships with Turkey\'s leading ministries and public institutions.',
    'references.slide2.title': 'University & Academic Institutions',
    'references.slide2.description': 'We play an active role in educational technologies and research projects through academic cooperation with Turkey\'s prestigious universities.',
    'references.slide3.title': 'Private Sector & Institutions',
    'references.slide3.description': 'We develop various technology solutions with municipalities, private organizations and civil society organizations.',
    
    // Sectors
    'references.sectors.education': 'Education',
    'references.sectors.defense': 'Defense',
    'references.sectors.health': 'Health',
    'references.sectors.public': 'Public',
    'references.sectors.finance': 'Finance',
    'references.sectors.energy': 'Energy',
    'references.sectors.telecom': 'Telecommunications',
    'references.sectors.automotive': 'Automotive',
    'references.sectors.manufacturing': 'Manufacturing',
    'references.sectors.logistics': 'Logistics',
    'references.sectors.tourism': 'Tourism',
    'references.sectors.agriculture': 'Agriculture',
    
    // CTA Section
    'references.cta.title': 'Would You Like to Work With Us?',
    'references.cta.description': 'If you are looking for a reliable business partner for your technology projects, we can develop customized solutions for you with our expert team.',
    'references.cta.contact': 'Get In Touch',
    'references.cta.services': 'Review Our Services',
    
    // Careers
    'careers.title': 'Career Opportunities',
    'careers.subtitle': 'Friends who will join us will have the opportunity to work on web-based and distributed architecture software development projects using Java technologies at our workplace in Ankara.',
    'careers.why_join.title': 'Why 2C Technology?',
    'careers.growth.title': 'Team Work',
    'careers.growth.description': 'Opportunity to work with experienced and expert staff',
    'careers.innovation.title': 'Technology Focused',
    'careers.innovation.description': 'Opportunity to develop projects with the latest technologies',
    'careers.team.title': 'Central Location',
    'careers.team.description': 'Working in a modern office environment in Ankara',
    'careers.balance.title': 'Flexible Working',
    'careers.balance.description': 'Work-life balance and flexible working hours',
    'careers.open_positions': 'Open Positions',
    'careers.apply_now': 'Apply Now',
    'careers.requirements': 'Requirements:',
    'careers.contact_cta': 'The position you are looking for is not on the list? Still get in touch with us!',
    'careers.contact_button': 'Get In Touch',
    
    // Career carousel
    'careers.carousel.development.title': 'Software Development',
    'careers.carousel.development.description': 'Software development opportunities with modern technologies',
    'careers.carousel.growth.title': 'Career Growth',
    'careers.carousel.growth.description': 'Continuous learning and development focused work environment',
    'careers.carousel.teamwork.title': 'Team Work',
    'careers.carousel.teamwork.description': 'Working experience with expert team',
    'careers.carousel.office.title': 'Modern Office',
    'careers.carousel.office.description': 'Comfortable and technological working environment in Ankara',
    
    // Job openings
    'careers.jobs.java_dev.title': 'Java Software Developer',
    'careers.jobs.java_dev.description': 'We are looking for an experienced Java developer to work on web-based and distributed architecture software development projects.',
    'careers.jobs.java_dev.req1': 'At least 2 years of experience in Java technologies',
    'careers.jobs.java_dev.req2': 'Spring Framework knowledge',
    'careers.jobs.java_dev.req3': 'Web-based application development experience',
    'careers.jobs.java_dev.req4': 'Distributed architecture knowledge',
    'careers.jobs.java_dev.req5': 'Database management experience',
    
    'careers.jobs.sysadmin.title': 'System Administrator',
    'careers.jobs.sysadmin.description': 'Experienced system administrator to work on corporate IT infrastructure management and system integration projects.',
    'careers.jobs.sysadmin.req1': 'Linux/Windows server management',
    'careers.jobs.sysadmin.req2': 'Data center infrastructure experience',
    'careers.jobs.sysadmin.req3': 'Network management and security',
    'careers.jobs.sysadmin.req4': 'Virtualization technologies',
    'careers.jobs.sysadmin.req5': 'VMware/Hyper-V experience',
    
    'careers.jobs.security.title': 'Information Security Specialist',
    'careers.jobs.security.description': 'Specialist personnel to work on corporate security solutions and cybersecurity projects.',
    'careers.jobs.security.req1': 'Experience in cybersecurity',
    'careers.jobs.security.req2': 'Knowledge of security tools',
    'careers.jobs.security.req3': 'Risk analysis and management',
    'careers.jobs.security.req4': 'Penetration testing',
    'careers.jobs.security.req5': 'Security certificates preferred',
    
    // Job details
    'careers.job_type.full_time': 'Full Time',
    'careers.location.ankara': 'Ankara',
    'careers.experience.2_5': '2-5 Years',
    'careers.experience.3_7': '3-7 Years',
    'careers.experience.3_6': '3-6 Years',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Get in touch with us about your projects and technology needs. Our expert team is ready to provide you with the most suitable solutions.',
    'contact.get_in_touch': 'Get In Touch With Us',
    'contact.form_description': 'You can contact us by filling out the form and get information about your projects.',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.name_placeholder': 'Enter your name and surname',
    'contact.form.email_placeholder': 'Enter your email address',
    'contact.form.subject_placeholder': 'Enter message subject',
    'contact.form.message_placeholder': 'Write your message here...',
    'contact.form.first_name': 'First Name',
    'contact.form.last_name': 'Last Name',
    'contact.form.first_name_placeholder': 'Your first name',
    'contact.form.last_name_placeholder': 'Your last name',
    'contact.form.email_example': 'example@email.com',
    'contact.form.phone': 'Phone',
    'contact.form.phone_placeholder': '+90 5XX XXX XX XX',
    'contact.form.company': 'Company',
    'contact.form.company_placeholder': 'Your company name',
    'contact.form.subject_placeholder_detailed': 'Subject of your message',
    'contact.form.message_placeholder_detailed': 'Please provide detailed information about your project or needs...',
    'contact.info_title': 'Contact Information',
    'contact.office_main': 'Head Office',
    'contact.office_rnd': 'R&D Office',
    'contact.working_hours': 'Working Hours',
    'contact.working_hours.weekdays': 'Monday - Friday: 09:00 - 18:00',
    'contact.working_hours.saturday': 'Saturday: 09:00 - 13:00',
    'contact.working_hours.sunday': 'Sunday: Closed',
    'contact.emergency_support': 'Emergency Support',
    'contact.emergency_description': '24/7 emergency support service is available for critical systems.',
    
    // About Page (existing translations)
    'about.title': 'About Us',
    'about.hero.description': 'As 2C, we continue to create value for our customers according to their needs and provide integrated solutions that work platform-independently. Our company prioritizes being a customer-oriented firm to increase efficiency, provide competitive advantage and create measurable cost savings. Through our innovative ideas and market-oriented services, we aim for sustainable success by solving the problems encountered for a safer and healthier life.',
    
    // Carousel slides
    'carousel.expert_consulting.title': 'Expert Consulting',
    'carousel.expert_consulting.description': 'We provide technology solutions with our 15+ years of experience',
    'carousel.team_work.title': 'Team Work',
    'carousel.team_work.description': 'Customer-focused service with our professional team',
    'carousel.modern_office.title': 'Modern Office',
    'carousel.modern_office.description': 'Strong infrastructure based in Ankara',
    'carousel.tech_center.title': 'Technology Center',
    'carousel.tech_center.description': 'Innovation solutions development center',
    'carousel.itc_usa.title': 'Information Technology Corporation (USA)',
    'carousel.itc_usa.description': 'International technology cooperation',
    
    // About content
    'about.details.title': '2C in Detail',
    'about.details.p1': '2C operates as a technology company that can produce domestic technologies that contribute to our country\'s economy, offer competitive products and solutions, and provide customer-oriented quality service.',
    'about.details.p2': 'With our expert staff, we provide comprehensive services in system integration, data center solutions, supercomputer technologies, information security, virtualization and disaster recovery.',
    'about.mission.title': 'Our Mission',
    'about.mission.description': 'Clearly identifying our customers\' needs and providing the most appropriate technology to meet these needs. Ensuring continuity of customer satisfaction. Providing high quality products and services. Preparing technology infrastructures flawlessly. Producing globally competitive technologies. Supporting the increase of Turkey\'s competitiveness and welfare level in the transformation process to an information society.',
    'about.why2c.title': 'Why 2C?',
    'about.why2c.experience': '15+ years of industry experience',
    'about.why2c.expert_team': 'Expert technical staff',
    'about.why2c.customer_focused': 'Customer-focused service approach',
    'about.why2c.local_tech': 'Local technology-oriented solutions',
    'about.success_stories.title': 'Success Stories',
    'about.success_stories.projects': 'Completed Projects',
    'about.success_stories.customers': 'Happy Customers',
    'about.vision.title': 'Vision',
    'about.vision.description': 'To be a pioneering and reliable brand in the field of technology',
    'about.innovation.title': 'Innovation',
    'about.innovation.description': 'Continuous development and innovative solutions',
    'about.trust.title': 'Trust',
    'about.trust.description': 'Customer satisfaction-oriented service approach',
    'about.partnership.title': 'Academy-University Partnership',
    'about.partnership.description': 'We establish strategic partnerships with Turkey\'s leading universities and research institutions.',
    'about.partnership.alt': 'Academy-University Partnership - METU, ITU, Galatasaray University, TOBB ETU, Atılım University, Antalya University',
    
    // Footer
    'footer.company_info': '2C, serving in the field of technology solutions with 15+ years of experience, has become a reliable brand in the industry with its customer-oriented approach.',
    'footer.quick_links': 'Quick Links',
    'footer.contact_info': 'Contact Information',
    'footer.all_rights_reserved': 'All rights reserved.',
    
    // Company Stats
    'stats.projects': 'Completed Projects',
    'stats.clients': 'Happy Clients',
    'stats.experience': 'Years Experience',
    'stats.team': 'Expert Team',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('tr');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'tr' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};