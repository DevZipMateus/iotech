
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Shield, Wrench, Users } from 'lucide-react';

const AboutUs = () => {
  const features = [
    {
      icon: Lightbulb,
      title: 'Inovação Própria',
      description: 'Fabricamos nossos próprios produtos de automação, garantindo controle total sobre qualidade e inovação.'
    },
    {
      icon: Shield,
      title: 'Qualidade Premium',
      description: 'Sistemas integrados de alta qualidade para iluminação, climatização, segurança e entretenimento.'
    },
    {
      icon: Wrench,
      title: 'Soluções Personalizadas',
      description: 'Cada projeto é único, desenvolvido especificamente para atender às necessidades do cliente.'
    },
    {
      icon: Users,
      title: 'Experiência Premium',
      description: 'Proporcionamos uma experiência de vida mais confortável, segura e eficiente para nossos clientes.'
    }
  ];

  return (
    <section className="section-container section-bg-main">
      <div className="text-center mb-16">
        <h2 className="section-title text-white">
          Sobre a Iotech.Dev
        </h2>
        <p className="section-subtitle text-white/80">
          Inovação e tecnologia para transformar sua casa em um ambiente inteligente
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        {/* Left column - Content */}
        <div className="order-2 lg:order-1">
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-light text-white mb-6">
              Liderando o Futuro da 
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-medium">
                {' '}Automação Residencial
              </span>
            </h3>
            
            <p className="text-lg text-white/80 leading-relaxed">
              A Iotech.Dev se destaca pela <strong>fabricação própria</strong> de produtos de automação residencial inteligente, 
              garantindo controle total sobre a qualidade e inovação de nossas soluções.
            </p>
            
            <p className="text-lg text-white/80 leading-relaxed">
              Nosso foco está em criar <strong>soluções personalizadas e integradas</strong> para iluminação, climatização, 
              segurança, entretenimento e controle de acesso, proporcionando uma experiência premium para nossos clientes.
            </p>
            
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-6 rounded-lg border-l-4 border-cyan-400">
              <p className="text-lg font-medium text-white mb-2">
                "Personalizado para você, projetado para o futuro."
              </p>
              <p className="text-white/80">
                Este é nosso compromisso: criar soluções que se adaptem perfeitamente ao seu estilo de vida, 
                sempre pensando na evolução tecnológica.
              </p>
            </div>
          </div>
        </div>

        {/* Right column - Visual */}
        <div className="order-1 lg:order-2">
          <div className="relative">
            <div className="bg-gradient-to-br from-cyan-100/20 to-blue-100/20 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/10">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-md">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-3">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-1">Iluminação</h4>
                  <p className="text-sm text-slate-600">Inteligente</p>
                </div>
                
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-md">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-3">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-1">Segurança</h4>
                  <p className="text-sm text-slate-600">Integrada</p>
                </div>
                
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-md">
                  <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-3">
                    <Wrench className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-1">Climatização</h4>
                  <p className="text-sm text-slate-600">Controlada</p>
                </div>
                
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-md">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-3">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-1">Entretenimento</h4>
                  <p className="text-sm text-slate-600">Premium</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
