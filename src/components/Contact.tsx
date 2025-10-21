
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Instagram, Send, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const whatsappNumber = '5554999892217'; // Número da Iotech.Dev: 54 999892217
  const whatsappMessage = 'Olá! Gostaria de mais informações sobre os serviços de automação residencial da Iotech.Dev.';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Redirecionar para WhatsApp em vez de simular envio
    const personalizedMessage = `Olá! Gostaria de mais informações sobre os serviços de automação residencial da Iotech.Dev.

Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Assunto: ${formData.subject || 'Consulta geral'}
Mensagem: ${formData.message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(personalizedMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      value: '(54) 99989-2217',
      link: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    },
    {
      icon: Mail,
      title: 'E-mail',
      value: 'marcospretto.iotech@gmail.com',
      link: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    },
    {
      icon: MapPin,
      title: 'Endereço',
      value: 'Av. Hermógenes Assis Feijó nº 399 Sala 11 – Barra',
      subtitle: 'Balneário Camboriú/SC - CEP: 88330-005'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      value: '@iotech.dev.br',
      link: 'https://www.instagram.com/iotech.dev.br'
    }
  ];

  return (
    <section className="section-container section-bg-main">
      <div className="text-center mb-10 sm:mb-12 md:mb-16 px-4">
        <h2 className="section-title text-white">
          Entre em Contato
        </h2>
        <p className="section-subtitle text-white/80">
          Estamos prontos para transformar sua casa em um ambiente inteligente. Vamos conversar!
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
        {/* Contact Form */}
        <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-xl sm:text-2xl font-semibold text-slate-800 flex items-center">
              <Send className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-600 mr-2 sm:mr-3" />
              Solicite seu Orçamento
            </CardTitle>
            <p className="text-sm sm:text-base text-slate-600">
              Preencha o formulário abaixo e entraremos em contato para agendar uma consultoria gratuita.
            </p>
          </CardHeader>
          
          <CardContent className="p-4 sm:p-6">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <Label htmlFor="name" className="text-slate-700">Nome *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-slate-700">Telefone *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-slate-700">E-mail *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1"
                  placeholder="seu.email@exemplo.com"
                />
              </div>

              <div>
                <Label htmlFor="subject" className="text-slate-700">Assunto</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1"
                  placeholder="Automação residencial, consultoria, etc."
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-slate-700">Mensagem *</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 min-h-[120px]"
                  placeholder="Conte-nos sobre seu projeto e suas necessidades..."
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white"
              >
                <Send className="h-5 w-5 mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-4 sm:space-y-6">
          <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-xl sm:text-2xl font-semibold text-slate-800">
                Informações de Contato
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-800 mb-1 text-sm sm:text-base">{info.title}</h3>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className="text-cyan-600 hover:text-cyan-700 transition-colors text-sm sm:text-base break-words"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-slate-600 text-sm sm:text-base">{info.value}</p>
                    )}
                    {info.subtitle && (
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">{info.subtitle}</p>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Business Hours */}
          <Card className="border-0 shadow-lg bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-lg sm:text-xl font-semibold text-white flex items-center">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 mr-2 sm:mr-3" />
                Horário de Atendimento
              </CardTitle>
            </CardHeader>
            
            <CardContent className="p-4 sm:p-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-white/90">Segunda a Sexta</span>
                  <span className="text-white/80">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-white/90">Sábado</span>
                  <span className="text-white/80">08:00 - 12:00</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-white/90">Domingo</span>
                  <span className="text-white/80">Fechado</span>
                </div>
              </div>
              
              <div className="mt-3 sm:mt-4 p-2.5 sm:p-3 bg-cyan-500/20 rounded-lg border border-cyan-400/30">
                <p className="text-sm text-cyan-200">
                  <strong>Atendimento de emergência:</strong> Disponível 24h para clientes com sistemas instalados.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
