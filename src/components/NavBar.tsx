import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Início', id: 'inicio' },
    { name: 'Sobre', id: 'sobre' },
    { name: 'Serviços', id: 'servicos' },
    { name: 'Localização', id: 'localizacao' },
    { name: 'Contato', id: 'contato' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled 
          ? "py-2 sm:py-3 bg-white/95 backdrop-blur-md shadow-lg" 
          : "py-3 sm:py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 flex justify-between items-center">
        <div className="flex items-center">
          <a 
            href="#inicio" 
            className="flex items-center space-x-3"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('inicio');
            }}
          >
            <img 
              src="/lovable-uploads/6ea06ada-fced-46d4-894a-c1955343ebf7.png" 
              alt="Iotech.Dev" 
              className="h-24 w-auto"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 xl:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={cn(
                "transition-colors duration-300 text-sm xl:text-base font-medium relative group",
                scrolled 
                  ? "text-slate-700 hover:text-cyan-600" 
                  : "text-white hover:text-cyan-400"
              )}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
            >
              {link.name}
              <span className={cn(
                "absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full",
                scrolled ? "bg-cyan-600" : "bg-cyan-400"
              )}></span>
            </a>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <button 
              className={cn(
                "lg:hidden p-2 rounded-md transition-colors",
                scrolled 
                  ? "text-slate-700 hover:bg-slate-100" 
                  : "text-white hover:bg-white/10"
              )}
              aria-label="Open menu"
            >
              <Menu size={20} className="sm:w-6 sm:h-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[90%] sm:w-[85%] p-0 bg-gradient-to-br from-blue-900 to-slate-800 border-l-4 border-cyan-400">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4 sm:p-6 border-b border-cyan-400/20">
                <div className="flex items-center space-x-3">
                  <img 
                    src="/lovable-uploads/6ea06ada-fced-46d4-894a-c1955343ebf7.png" 
                    alt="Iotech.Dev" 
                    className="h-24 w-auto"
                  />
                </div>
                <SheetClose className="p-2 rounded-full hover:bg-white/10 transition-all text-white">
                  <X size={18} />
                </SheetClose>
              </div>
              
              <nav className="flex flex-col items-stretch justify-start flex-1 mt-4 sm:mt-8">
                {navLinks.map((link, index) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className={cn(
                      "text-white text-base sm:text-lg font-medium hover:bg-white/10 transition-all w-full text-center py-4 sm:py-6 px-4 flex items-center justify-center",
                      "relative overflow-hidden after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-1/3"
                    )}
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('[data-state="open"]')?.setAttribute('data-state', 'closed');
                      setTimeout(() => scrollToSection(link.id), 100);
                    }}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
              
              <div className="p-4 sm:p-6 border-t border-cyan-400/20 mt-auto">
                <div className="text-slate-300 text-xs sm:text-sm text-center">
                  © 2024 Iotech.Dev - Todos os direitos reservados
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default NavBar;
