import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
const navigation = [{
  name: "Ana Sayfa",
  href: "/"
}, {
  name: "Hakkımızda",
  href: "/about"
}, {
  name: "Ürün & Hizmetler",
  href: "/services"
}, {
  name: "Projeler",
  href: "/projects"
}, {
  name: "Kariyer",
  href: "/careers"
}, {
  name: "Referanslar",
  href: "/references"
}, {
  name: "İletişim",
  href: "/contact"
}];
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  return <header className="bg-background/80 backdrop-blur-md border-b border-border/50 sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">2C Teknoloji</span>
            <div className="flex items-center space-x-3">
              <img src="/lovable-uploads/bd2f2332-ad41-4c85-828f-28da412f9907.png" alt="2C Teknoloji Logo" className="w-12 h-12 object-contain" />
              <span className="text-xl font-bold text-foreground">Teknoloji</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map(item => <Link key={item.name} to={item.href} className={cn("text-sm font-medium transition-colors hover:text-primary relative py-2", location.pathname === item.href ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full" : "text-foreground/70")}>
              {item.name}
            </Link>)}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button variant="hero" asChild>
            
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <Button variant="ghost" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5">
            <span className="sr-only">Ana menüyü aç</span>
            {mobileMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && <div className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md">
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm">
              <div className="flex items-center justify-between">
                <Link to="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                  <div className="flex items-center space-x-3">
                    <img src="/lovable-uploads/bd2f2332-ad41-4c85-828f-28da412f9907.png" alt="2C Teknoloji Logo" className="w-10 h-10 object-contain" />
                    <span className="text-lg font-bold text-foreground">Teknoloji</span>
                  </div>
                </Link>
                <Button variant="ghost" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5">
                  <span className="sr-only">Kapat</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </Button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-border">
                  <div className="space-y-2 py-6">
                    {navigation.map(item => <Link key={item.name} to={item.href} onClick={() => setMobileMenuOpen(false)} className={cn("block rounded-lg px-3 py-2 text-base font-medium transition-colors hover:bg-muted", location.pathname === item.href ? "text-primary bg-primary/5" : "text-foreground")}>
                        {item.name}
                      </Link>)}
                  </div>
                  <div className="py-6">
                    <Button variant="hero" className="w-full" asChild>
                      <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                        İletişime Geç
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>}
    </header>;
}