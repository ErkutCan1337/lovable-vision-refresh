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
    'projects.subtitle': 'Başarıyla tamamladığımız projelerde teknoloji ve inovasyonu bir araya getiriyoruz',
    'projects.view_details': 'Detayları Görüntüle',
    
    // References
    'references.title': 'Referanslarımız',
    'references.subtitle': 'Güvenilir ortaklıklarımızla sektörde öncü konumumuzu sürdürüyoruz',
    
    // Careers
    'careers.title': 'Kariyer',
    'careers.subtitle': 'Teknoloji tutkunu yetenekli kişilerle bir araya gelerek geleceği şekillendiriyoruz',
    'careers.why_join.title': 'Neden 2C\'de Çalışmalısınız?',
    'careers.growth.title': 'Kariyer Gelişimi',
    'careers.growth.description': 'Sürekli öğrenme ve gelişim fırsatları',
    'careers.innovation.title': 'İnovatif Projeler',
    'careers.innovation.description': 'Teknolojinin öncü projelerinde yer alma imkanı',
    'careers.team.title': 'Güçlü Takım',
    'careers.team.description': 'Deneyimli ve dinamik ekibimizle çalışma fırsatı',
    'careers.balance.title': 'İş-Yaşam Dengesi',
    'careers.balance.description': 'Esnek çalışma koşulları ve supportive ortam',
    'careers.open_positions': 'Açık Pozisyonlar',
    'careers.apply_now': 'Başvuru Yap',
    
    // Contact
    'contact.title': 'İletişim',
    'contact.subtitle': 'Bizimle iletişime geçin, teknoloji ihtiyaçlarınız için en uygun çözümü birlikte bulalım',
    'contact.get_in_touch': 'İletişime Geçin',
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
    'projects.subtitle': 'In our successfully completed projects, we bring technology and innovation together',
    'projects.view_details': 'View Details',
    
    // References
    'references.title': 'Our References',
    'references.subtitle': 'We maintain our leading position in the industry with our reliable partnerships',
    
    // Careers
    'careers.title': 'Careers',
    'careers.subtitle': 'We shape the future by coming together with talented people who are passionate about technology',
    'careers.why_join.title': 'Why Should You Work at 2C?',
    'careers.growth.title': 'Career Growth',
    'careers.growth.description': 'Continuous learning and development opportunities',
    'careers.innovation.title': 'Innovative Projects',
    'careers.innovation.description': 'Opportunity to participate in pioneering technology projects',
    'careers.team.title': 'Strong Team',
    'careers.team.description': 'Opportunity to work with our experienced and dynamic team',
    'careers.balance.title': 'Work-Life Balance',
    'careers.balance.description': 'Flexible working conditions and supportive environment',
    'careers.open_positions': 'Open Positions',
    'careers.apply_now': 'Apply Now',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Get in touch with us, let\'s find the most suitable solution for your technology needs together',
    'contact.get_in_touch': 'Get In Touch',
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