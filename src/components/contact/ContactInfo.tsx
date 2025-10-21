
import React from 'react';
import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react';

interface ContactInfoProps {
  setRef: (el: HTMLDivElement | null) => void;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ setRef }) => {
  const whatsappNumber = '5554999892217'; // Número da Iotech.Dev: 54 999892217
  const whatsappMessage = 'Olá! Gostaria de mais informações sobre os serviços de automação residencial da Iotech.Dev.';

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Telefone",
      details: "+55 (54) 99989-2217",
      href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      details: "contatoiotech.dev@gmail.com",
      href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      title: "WhatsApp",
      details: "+55 (54) 99989-2217",
      href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Endereço",
      details: "Av. Hermógenes Assis Feijó nº 399 Sala 11 – Barra, Balneário Camboriú/SC",
      href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    }
  ];

  return (
    <div 
      className="space-y-8 opacity-0 bg-white p-8 rounded-lg shadow-sm"
      ref={setRef}
    >
      <div className="text-center mb-6">
        <p className="text-accounting-navy font-medium">
          Para sua comodidade, disponibilizamos atendimento exclusivamente através dos seguintes canais de comunicação:
        </p>
      </div>
      
      <div>
        <div className="space-y-6">
          {contactInfo.map((info, index) => (
            <a 
              href={info.href}
              key={index}
              className="flex items-start hover:text-accounting-green transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-accounting-green mt-1 mr-3">
                {info.icon}
              </div>
              <div>
                <h4 className="font-medium text-accounting-navy">{info.title}</h4>
                <p className="text-accounting-blue">{info.details}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-accounting-navy font-display font-semibold text-xl mb-4">
          Horário de Atendimento
        </h3>
        <p className="text-accounting-blue">
          Segunda a Sexta: 9h às 18h<br />
          Sábados: 9h às 13h
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
