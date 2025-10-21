
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';

const LocationMap = () => {
  const openGoogleMaps = () => {
    window.open('https://www.google.com.br/maps/place/Barra+Mall+-+Av.+Herm%C3%B3genes+Assis+Feij%C3%B3,+399+-+11+-+Barra,+Balne%C3%A1rio+Cambori%C3%BA+-+SC,+88330-005/@-27.0111341,-48.601287,19.5z/data=!4m5!3m4!1s0x94d8b6ffa374819b:0x50c404b3634ff74b!8m2!3d-27.0110736!4d-48.6008197?entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D', '_blank');
  };

  return (
    <section className="section-container section-bg-main">
      <div className="text-center mb-10 sm:mb-12 md:mb-16 px-4">
        <h2 className="section-title text-white">
          Nossa Localização
        </h2>
        <p className="section-subtitle text-white/80">
          Estamos estrategicamente localizados em Balneário Camboriú para melhor atendê-lo
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left column - Map */}
        <div className="order-2 lg:order-1 px-4">
          <Card className="border-0 shadow-lg overflow-hidden bg-white/90 backdrop-blur-sm">
            <div className="relative h-64 sm:h-80 md:h-96 bg-slate-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.1855555555555!2d-48.60128700000001!3d-27.0111341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b6ffa374819b%3A0x50c404b3634ff74b!2sBarra%20Mall%20-%20Av.%20Herm%C3%B3genes%20Assis%20Feij%C3%B3%2C%20399%20-%2011%20-%20Barra%2C%20Balne%C3%A1rio%20Cambori%C3%BA%20-%20SC%2C%2088330-005!5e0!3m2!1spt-BR!2sbr!4v1000000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Iotech.Dev"
                className="absolute inset-0"
              ></iframe>
            </div>
          </Card>
        </div>

        {/* Right column - Location Info */}
        <div className="order-1 lg:order-2 px-4">
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">Endereço Completo</h3>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                  Av. Hermógenes Assis Feijó nº 399<br />
                  Sala 11 – Barra<br />
                  Balneário Camboriú/SC<br />
                  CEP: 88330-005
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-4 sm:p-6 rounded-lg border-l-4 border-cyan-400 backdrop-blur-sm">
              <h4 className="font-semibold text-white mb-2 sm:mb-3 text-sm sm:text-base">Localização Estratégica</h4>
              <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                Estamos localizados no coração de Balneário Camboriú, em uma região de fácil acesso 
                e com estacionamento disponível. Nossa sede no Barra Mall oferece comodidade e 
                facilidade para nossos clientes.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <Card className="border border-cyan-400/30 bg-white/10 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Navigation className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-1">Fácil Acesso</h4>
                  <p className="text-sm text-white/80">Próximo às principais vias de BC</p>
                </CardContent>
              </Card>

              <Card className="border border-blue-400/30 bg-white/10 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-1">Estacionamento</h4>
                  <p className="text-sm text-white/80">Vagas disponíveis no local</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={openGoogleMaps}
                className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Abrir no Google Maps
              </Button>
              
              <Button 
                variant="outline" 
                className="flex-1 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 bg-white/10 backdrop-blur-sm"
                onClick={() => {
                  navigator.clipboard.writeText('Av. Hermógenes Assis Feijó nº 399 Sala 11 – Barra, Balneário Camboriú/SC - CEP: 88330-005');
                }}
              >
                Copiar Endereço
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
