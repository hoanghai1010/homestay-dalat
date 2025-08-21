import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <div>
              <h1 className="font-heading text-xl font-bold text-primary">
                Serenity Valley
              </h1>
              <p className="text-xs text-muted-foreground -mt-1">Homestay</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Trang Chủ
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Giới Thiệu
            </button>
            <button
              onClick={() => scrollToSection('rooms')}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Phòng
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Liên Hệ
            </button>
          </nav>

          {/* CTA Button */}
          <Button 
            variant="default" 
            className="hidden md:inline-flex bg-gradient-primary hover:opacity-90 transition-opacity duration-200 shadow-medium"
            onClick={() => scrollToSection('booking')}
          >
            Đặt Phòng
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-border animate-fade-in-up">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                Trang Chủ
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                Giới Thiệu
              </button>
              <button
                onClick={() => scrollToSection('rooms')}
                className="text-left text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                Phòng
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                Liên Hệ
              </button>
              <Button 
                variant="default" 
                className="w-full bg-gradient-primary hover:opacity-90 transition-opacity duration-200 shadow-medium"
                onClick={() => scrollToSection('booking')}
              >
                Đặt Phòng
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;