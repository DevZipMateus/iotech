
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
    <section className="section-container bg-slate-50">
      <div className="text-center mb-16">
        <h2 className="section-title text-slate-800">
          Nossos Serviços
        </h2>
        <p className="section-subtitle text-slate-600">
          Soluções completas em automação residencial para transformar sua casa em um ambiente inteligente
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {services.map((service, index) => (
          <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white group">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl font-semibold text-slate-800 group-hover:text-cyan-600 transition-colors">
                {service.title}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="pt-0">
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-slate-700 mb-3">Principais características:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to action */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl lg:text-3xl font-semibold mb-4">
            Pronto para transformar sua casa?
          </h3>
          <p className="text-lg text-cyan-100 mb-6 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos criar a solução perfeita para seu lar.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-cyan-600 hover:bg-cyan-50 px-8 py-6 text-lg font-semibold"
            onClick={scrollToContact}
          >
            Solicitar Consultoria Gratuita
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
