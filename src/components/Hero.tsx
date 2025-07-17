
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Shield, Home } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-800 to-blue-950"></div>
      
      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="circuit-overlay"></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-500"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="text-center lg:text-left">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start mb-8">
              <img 
                src="/lovable-uploads/6ea06ada-fced-46d4-894a-c1955343ebf7.png" 
                alt="Iotech.Dev - Soluções Tecnológicas" 
                className="h-20 sm:h-24 lg:h-28 w-auto"
              />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light mb-6 text-white leading-tight">
              Automação Residencial
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-medium">
                Inteligente
              </span>
            </h1>

            <p className="text-xl sm:text-2xl lg:text-3xl text-cyan-300 mb-4 font-light">
              Personalizado para você, projetado para o futuro.
            </p>

            <p className="text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Desenvolvemos e instalamos sistemas de automação residencial personalizados que transformam sua casa em um ambiente mais inteligente, confortável e seguro.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 px-8 py-6 text-lg"
                onClick={() => scrollToSection('contato')}
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-blue-900 px-8 py-6 text-lg"
                onClick={() => scrollToSection('servicos')}
              >
                Nossos Serviços
              </Button>
            </div>

            {/* Key features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <div className="flex items-center justify-center lg:justify-start text-slate-300">
                <Home className="h-6 w-6 text-cyan-400 mr-3" />
                <span>Iluminação Inteligente</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start text-slate-300">
                <Shield className="h-6 w-6 text-cyan-400 mr-3" />
                <span>Segurança Integrada</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start text-slate-300">
                <Zap className="h-6 w-6 text-cyan-400 mr-3" />
                <span>Climatização Controlada</span>
              </div>
            </div>
          </div>

          {/* Right column - Visual element */}
          <div className="relative lg:flex justify-center items-center hidden">
            <div className="relative w-full max-w-lg">
              {/* Central smart home icon */}
              <div className="relative bg-gradient-to-br from-cyan-400/20 to-blue-600/20 backdrop-blur-md rounded-full p-16 border border-cyan-400/30">
                <Home className="h-32 w-32 text-cyan-400 mx-auto" />
                
                {/* Floating connection nodes */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="absolute -top-4 -right-4 w-6 h-6 bg-blue-500 rounded-full animate-pulse animation-delay-300"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-300 rounded-full animate-pulse animation-delay-500"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-blue-400 rounded-full animate-pulse animation-delay-700"></div>
                
                {/* Connection lines */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-96 h-96 border border-cyan-400/20 rounded-full absolute -inset-32 animate-ping animation-delay-1000"></div>
                  <div className="w-80 h-80 border border-blue-400/30 rounded-full absolute -inset-24 animate-ping animation-delay-1500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-400 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
