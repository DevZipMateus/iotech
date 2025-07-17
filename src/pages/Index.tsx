
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import AboutUs from '@/components/AboutUs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ClickSpark from '@/components/ClickSpark';
import LocationMap from '@/components/LocationMap';
import { useParallax } from '@/hooks/useParallax';

const Index = () => {
  const { getParallaxStyle } = useParallax();

  useEffect(() => {
    // SEO Meta tags
    document.title = "Iotech.Dev - Automação Residencial Inteligente | Soluções Tecnológicas";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Iotech.Dev oferece soluções de automação residencial inteligente personalizadas. Iluminação, climatização, segurança e entretenimento. Personalizado para você, projetado para o futuro.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Iotech.Dev oferece soluções de automação residencial inteligente personalizadas. Iluminação, climatização, segurança e entretenimento. Personalizado para você, projetado para o futuro.';
      document.head.appendChild(meta);
    }

    // Open Graph meta tags
    const ogTags = [
      { property: 'og:title', content: 'Iotech.Dev - Automação Residencial Inteligente' },
      { property: 'og:description', content: 'Soluções de automação residencial personalizadas para uma vida mais inteligente e confortável.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
      { property: 'og:image', content: '/lovable-uploads/3fe2c4f3-a2d9-445f-887c-073a7a09900a.png' }
    ];

    ogTags.forEach(tag => {
      const existingTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (existingTag) {
        existingTag.setAttribute('content', tag.content);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });

    // Structured Data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Iotech.Dev",
      "description": "Empresa especializada em automação residencial inteligente",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. Hermógenes Assis Feijó nº 399 Sala 11",
        "addressLocality": "Balneário Camboriú",
        "addressRegion": "SC",
        "postalCode": "88330-005",
        "addressCountry": "BR"
      },
      "telephone": "+55 47 99172-4679",
      "email": "contatoiotech.dev@gmail.com",
      "url": window.location.origin,
      "logo": window.location.origin + "/lovable-uploads/3fe2c4f3-a2d9-445f-887c-073a7a09900a.png",
      "sameAs": ["https://www.instagram.com/iotech.oficial/"]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Smooth scroll behavior
    const handleHashChange = () => {
      if (window.location.hash) {
        const element = document.getElementById(window.location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <ClickSpark
      sparkColor="#00E6FF"
      sparkSize={12}
      sparkRadius={20}
      sparkCount={6}
      duration={500}
      easing="ease-out"
      extraScale={1.2}
    >
      <main className="min-h-screen flex flex-col antialiased overflow-x-hidden relative bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Floating elements with parallax */}
        <div 
          className="fixed top-20 left-10 w-3 h-3 bg-cyan-400/30 rounded-full animate-float -z-10"
          style={getParallaxStyle(0.1)}
        ></div>
        <div 
          className="fixed top-32 right-16 w-2 h-2 bg-blue-600/20 rounded-full animate-float animation-delay-500 -z-10"
          style={getParallaxStyle(0.15)}
        ></div>
        <div 
          className="fixed bottom-32 left-20 w-4 h-4 bg-cyan-300/25 rounded-full animate-float animation-delay-300 -z-10"
          style={getParallaxStyle(0.25)}
        ></div>
        
        <NavBar />
        <Hero />
        
        <div className="space-y-0 relative z-10">
          <section id="sobre" className="section-bg-semi">
            <AboutUs />
          </section>
          
          <section id="servicos" className="section-bg-alt">
            <Services />
          </section>
          
          <section id="localizacao" className="section-bg-semi">
            <LocationMap />
          </section>
          
          <section id="contato" className="section-bg-alt">
            <Contact />
          </section>
        </div>
        
        <Footer />
        <WhatsAppButton />
      </main>
    </ClickSpark>
  );
};

export default Index;
