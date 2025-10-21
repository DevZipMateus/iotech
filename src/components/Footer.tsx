import React from 'react';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappNumber = '5554999892217'; // Número da Iotech.Dev: 54 999892217
  const whatsappMessage = 'Olá! Gostaria de mais informações sobre os serviços de automação residencial da Iotech.Dev.';

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 text-white pt-14 pb-8 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Company Info */}
          <div className="relative">
            <div className="flex items-center space-x-3 mb-6 relative z-10">
              <div>
                <img 
                  src="/lovable-uploads/6ea06ada-fced-46d4-894a-c1955343ebf7.png" 
                  alt="Iotech.Dev" 
                  className="h-24 w-auto"
                />
              </div>
            </div>
            <p className="text-slate-300 mb-4 max-w-sm leading-relaxed relative z-10">
              Transformamos sua casa em um ambiente inteligente com soluções personalizadas 
              de automação residencial. Qualidade, inovação e tecnologia premium.
            </p>
            <p className="text-cyan-400 font-medium relative z-10">
              "Personalizado para você, projetado para o futuro."
            </p>
          </div>
          
          {/* Navigation */}
          <div className="relative">
            <h3 className="font-semibold text-lg mb-4 text-white relative">
              <span className="relative z-10">Navegação</span>
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-600"></div>
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#inicio" 
                  className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 relative group"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('inicio');
                  }}
                >
                  <span className="relative z-10">Início</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:w-full transition-all duration-300"></div>
                </a>
              </li>
              <li>
                <a 
                  href="#sobre" 
                  className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 relative group"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('sobre');
                  }}
                >
                  <span className="relative z-10">Sobre Nós</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:w-full transition-all duration-300"></div>
                </a>
              </li>
              <li>
                <a 
                  href="#servicos" 
                  className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 relative group"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('servicos');
                  }}
                >
                  <span className="relative z-10">Serviços</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:w-full transition-all duration-300"></div>
                </a>
              </li>
              <li>
                <a 
                  href="#localizacao" 
                  className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 relative group"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('localizacao');
                  }}
                >
                  <span className="relative z-10">Localização</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:w-full transition-all duration-300"></div>
                </a>
              </li>
              <li>
                <a 
                  href="#contato" 
                  className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 relative group"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contato');
                  }}
                >
                  <span className="relative z-10">Contato</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:w-full transition-all duration-300"></div>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="relative">
            <h3 className="font-semibold text-lg mb-4 text-white relative">
              <span className="relative z-10">Contato</span>
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-600"></div>
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 rounded-full bg-cyan-600/20 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                </div>
                <div className="text-slate-300 text-sm">
                  <p>Av. Hermógenes Assis Feijó nº 399</p>
                  <p>Sala 11 – Barra</p>
                  <p>Balneário Camboriú/SC</p>
                  <p>CEP: 88330-005</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 rounded-full bg-cyan-600/20 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                </div>
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  (54) 99989-2217
                </a>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 rounded-full bg-cyan-600/20 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                </div>
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-cyan-400 transition-colors break-all"
                >
                  marcospretto.iotech@gmail.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 rounded-full bg-cyan-600/20 flex items-center justify-center">
                  <Instagram className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                </div>
                <a 
                  href="https://www.instagram.com/iotech.dev.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  @iotech.dev.br
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <hr className="border-slate-600 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm relative">
          <p className="relative z-10">&copy; {currentYear} Iotech.Dev - Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0 relative z-10">
            Desenvolvido com tecnologia e inovação em Santa Catarina
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
