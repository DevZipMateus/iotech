
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  MonitorSpeaker, 
  HeadphonesIcon, 
  Wrench, 
  GraduationCap, 
  Code, 
  Network,
  ArrowRight 
} from 'lucide-react';

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Home,
      title: 'Automação Residencial',
      description: 'Desenvolvimento e instalação de sistemas de automação residencial personalizados, incluindo iluminação inteligente, climatização controlada, segurança integrada, entretenimento e controle de acesso.',
      features: ['Iluminação Inteligente', 'Climatização Controlada', 'Segurança Integrada', 'Controle de Acesso']
    },
    {
      icon: MonitorSpeaker,
      title: 'Instalação de Produtos Eletrônicos',
      description: 'Instalação de produtos eletrônicos de alta qualidade, como sistemas de som surround, TVs de última geração, equipamentos de segurança avançados e outros dispositivos eletrônicos.',
      features: ['Sistemas de Som', 'TVs Última Geração', 'Equipamentos de Segurança', 'Dispositivos Inteligentes']
    },
    {
      icon: HeadphonesIcon,
      title: 'Consultoria em Automação',
      description: 'Consultoria personalizada para ajudar os clientes a escolher as melhores soluções de automação residencial para suas necessidades específicas.',
      features: ['Análise Personalizada', 'Recomendações Técnicas', 'Planejamento de Projeto', 'Orçamento Detalhado']
    },
    {
      icon: Wrench,
      title: 'Manutenção e Suporte',
      description: 'Manutenção e suporte técnico para os sistemas de automação residencial instalados, garantindo que funcionem corretamente e com eficiência.',
      features: ['Manutenção Preventiva', 'Suporte Técnico', 'Manutenção Corretiva', 'Atendimento Especializado']
    },
    {
      icon: GraduationCap,
      title: 'Treinamento e Educação',
      description: 'Treinamento e educação para os clientes sobre como utilizar e aproveitar ao máximo os sistemas de automação residencial instalados.',
      features: ['Treinamento Personalizado', 'Manuais Detalhados', 'Suporte Contínuo', 'Orientação de Uso']
    },
    {
      icon: Code,
      title: 'Soluções Personalizadas',
      description: 'Desenvolvimento de soluções personalizadas de automação residencial para atender às necessidades específicas dos clientes.',
      features: ['Desenvolvimento Customizado', 'Integração Exclusiva', 'Soluções Únicas', 'Tecnologia Proprietária']
    },
    {
      icon: Network,
      title: 'Integração de Sistemas',
      description: 'Integração de diferentes sistemas de automação residencial para criar uma solução única e integrada que funcione perfeitamente.',
      features: ['Integração Completa', 'Sistema Unificado', 'Controle Centralizado', 'Experiência Seamless']
    }
  ];

  return (
    <section className="section-container section-bg-main relative">
      {/* Efeito prateado decorativo */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-silver-300 to-transparent opacity-60"></div>
      
      <div className="text-center mb-16 relative">
        <h2 className="section-title text-white silver-accent">
          Nossos Serviços
        </h2>
        <p className="section-subtitle text-white/80">
          Soluções completas em automação residencial para transformar sua casa em um ambiente inteligente
        </p>
        
        {/* Elemento decorativo prateado */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-silver-200 to-silver-400 rounded-full opacity-10 animate-silver-pulse"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {services.map((service, index) => (
          <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white group silver-accent silver-border relative overflow-hidden">
            {/* Efeito shimmer prateado */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-silver-100/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            <CardHeader className="text-center pb-4 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 silver-glow">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl font-semibold text-slate-800 group-hover:text-cyan-600 transition-colors">
                {service.title}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="pt-0 relative z-10">
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-slate-700 mb-3">Principais características:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-500 to-silver-400 rounded-full mr-3 animate-silver-pulse"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to action com efeito prateado */}
      <div className="text-center relative">
        <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 rounded-2xl p-8 text-white relative overflow-hidden silver-border">
          {/* Overlay prateado sofisticado */}
          <div className="absolute inset-0 bg-gradient-to-br from-silver-100/10 via-transparent to-silver-200/10 pointer-events-none"></div>
          
          <h3 className="text-2xl lg:text-3xl font-semibold mb-4 relative z-10">
            Pronto para transformar sua casa?
          </h3>
          <p className="text-lg text-cyan-100 mb-6 max-w-2xl mx-auto relative z-10">
            Entre em contato conosco e descubra como podemos criar a solução perfeita para seu lar.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-cyan-600 hover:bg-silver-50 px-8 py-6 text-lg font-semibold silver-border hover:silver-glow transition-all duration-300 relative z-10"
            onClick={scrollToContact}
          >
            Solicitar Consultoria Gratuita
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          {/* Elementos decorativos prateados */}
          <div className="absolute top-4 right-4 w-3 h-3 bg-silver-300 rounded-full opacity-30 animate-float"></div>
          <div className="absolute bottom-4 left-4 w-2 h-2 bg-silver-400 rounded-full opacity-40 animate-float animation-delay-500"></div>
        </div>
      </div>
      
      {/* Linha decorativa inferior */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-silver-300 to-transparent opacity-60"></div>
    </section>
  );
};

export default Services;
