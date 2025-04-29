import { useEffect } from 'react';

export const GoogleAdsConversionTracker = () => {
  const gtmId = 'GTM-TRM8W8NW';
  const conversionId = 'AW-16855079403'; 
  const conversionLabel = 't5nhCJDAmrMaEOuzkOU-'; 

  useEffect(() => {
    // Implementação do GTM
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    });

    const gtmScript = document.createElement('script');
    gtmScript.async = true;
    gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
    document.head.appendChild(gtmScript);

    // Implementação do Google Ads Conversion Tracker
    if (!window.gtag) {
      const gtagScript = document.createElement('script');
      gtagScript.async = true;
      gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${conversionId}`;
      document.head.appendChild(gtagScript);

      window.gtag = function() {
        window.dataLayer.push(arguments);
      };
      gtag('js', new Date());
      gtag('config', conversionId);
    }

    // Função de relatório de conversão
    window.gtag_report_conversion = function(url) {
      const callback = () => {
        if (typeof url !== 'undefined') {
          window.location.href = url;
        }
      };
      
      gtag('event', 'conversion', {
        'send_to': `${conversionId}/${conversionLabel}`,
        'value': 1.0,
        'currency': 'BRL',
        'event_callback': callback
      });
      
      return false;
    };

    return () => {
      // Limpeza
      delete window.gtag_report_conversion;
      document.head.removeChild(gtmScript);
    };
  }, []);

  return (
    <>
      {/* Implementação do noscript para GTM */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  );
};