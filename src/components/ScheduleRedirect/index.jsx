import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../hooks/context';

const ScheduleRedirect = () => {
  const {openWhatsApp} = useApp();
  const navigate = useNavigate();
  const encodedMessage = "Olá, Carolina! Tenho interesse no tratamento psicanalítico. Poderia me passar mais informações?";

  const hasOpenedRef = useRef(false);

  useEffect(() => {
    
      if (window.gtag) {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-16855079403/t5nhCJDAmrMaEOuzkOU-',
          'value': 1.0,
          'currency': 'BRL'
        });
      }

      const newWindow = window.open(
        `https://wa.me/5583996276657?text=${encodedMessage}`,
        '_blank',
        'noopener,noreferrer'
      );

      navigate('/');

  }, [navigate, openWhatsApp]); 

  return (
    <div style={{ 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
    </div>
  );
};

export default ScheduleRedirect; 