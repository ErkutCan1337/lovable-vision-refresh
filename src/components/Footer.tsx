import { Link } from "react-router-dom";
import { Building2, Mail, Phone, MapPin } from "lucide-react";

const navigation = {
  company: [
    { name: "Hakkımızda", href: "/about" },
    { name: "Kariyer", href: "/careers" },
    { name: "Projeler", href: "/projects" },
    { name: "İletişim", href: "/contact" },
  ],
  services: [
    { name: "Sistem Entegrasyon", href: "/services" },
    { name: "Veri Merkezi", href: "/services" },
    { name: "Bilişim Güvenliği", href: "/services" },
    { name: "Sanallaştırma", href: "/services" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                <img 
                  src="/lovable-uploads/fb7c8c69-cc83-4677-af16-5bcc61d5920b.png" 
                  alt="2C Teknoloji Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold text-foreground">Teknoloji</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Teknoloji alanında uzman kadromuz ile müşterilerimize entegre çözümler sunarak, 
              platform bağımsız bir şekilde hizmet vermekteyiz.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-3 text-primary" />
                <span className="text-sm">Mutlukent Mah. 2037. Cad. No:30 Çankaya, Ankara</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Building2 className="h-4 w-4 mr-3 text-primary" />
                <span className="text-sm">Gazi Teknopark B Blok No:19, Gölbaşı, Ankara</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Şirket</h3>
            <ul role="list" className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Hizmetler</h3>
            <ul role="list" className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-muted-foreground">
              © 2024 2C Teknoloji. Tüm hakları saklıdır.
            </p>
            <p className="text-sm text-muted-foreground mt-4 md:mt-0">
              Yerli teknoloji üreticisi, rekabet edilebilir çözümler
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}