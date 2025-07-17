
import React from 'react';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 text-white pt-14 pb-8 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/3fe2c4f3-a2d9-445f-887c-073a7a09900a.png" 
                alt="Iotech.Dev" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-slate-300 mb-4 max-w-sm leading-relaxed">
              Transformamos sua casa em um ambiente inteligente com soluções personalizadas 
              de automação residencial. Qualidade, inovação e tecnologia premium.
            </p>
            <p className="text-cyan-400 font-medium">
              "Personalizado para você, projetado para o futuro."
            </p>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">
              Navegação
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#inicio" 
                  className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('inicio');
                  }}
                >
                  Início
                </a>
              </li>
              <li>
                <a 
                  href="#sobre" 
                  className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('sobre');
                  }}
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a 
                  href="#servicos" 
                  className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('servicos');
                  }}
                >
                  Serviços
                </a>
              </li>
              <li>
                <a 
                  href="#localizacao" 
                  className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('localizacao');
                  }}
                >
                  Localização
                </a>
              </li>
              <li>
                <a 
                  href="#contato" 
                  className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contato');
                  }}
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">
              Contato
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div className="text-slate-300 text-sm">
                  <p>Av. Hermógenes Assis Feijó nº 399</p>
                  <p>Sala 11 – Barra</p>
                  <p>Balneário Camboriú/SC</p>
                  <p>CEP: 88330-005</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                <a 
                  href="tel:+554799172467" 
                  className="text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  (47) 99172-4679
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                <a 
                  href="mailto:contatoiotech.dev@gmail.com" 
                  className="text-slate-300 hover:text-cyan-400 transition-colors break-all"
                >
                  contatoiotech.dev@gmail.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Instagram className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                <a 
                  href="https://www.instagram.com/iotech.oficial/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  @iotech.oficial
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <hr className="border-slate-700 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
          <p>&copy; {currentYear} Iotech.Dev - Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">
            Desenvolvido com tecnologia e inovação em Santa Catarina
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
