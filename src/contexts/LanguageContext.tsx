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
    
    // About Page
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
    
    // About Page
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