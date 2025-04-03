import { useEffect } from 'react';

export const GoogleAdsConversionTracker = () => {
    useEffect(() => {
      // Carrega o script gtag.js se não estiver já carregado
      if (!window.gtag) {
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=AW-16855079403`;
        document.head.appendChild(script);
        
        window.dataLayer = window.dataLayer || [];
        window.gtag = function() {
          window.dataLayer.push(arguments);
        };
        gtag('js', new Date());
      }
  
      // Função de relatório de conversão
      window.gtag_report_conversion = function(url){
        const callback = () => {
          if (typeof url !== 'undefined') {
            window.location.href = url;
          }
        };
        
        gtag('event', 'conversion', {
          'send_to': 'AW-16855079403/t5nhCJDAmrMaEOuzkOU-',
          'value': 1.0,
          'currency': 'BRL',
          'event_callback': callback
        });
        
        return false;
      };
  
      return () => {
        // Limpeza opcional
        delete window.gtag_report_conversion;
      };
    }, []);
  
    return null;
  };