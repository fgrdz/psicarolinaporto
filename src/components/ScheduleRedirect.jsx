import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ScheduleRedirect = () => {
  const navigate = useNavigate();
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5583996276657";

  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-16855079403/t5nhCJDAmrMaEOuzkOU-',
        'value': 1.0,
        'currency': 'BRL'
      });
    }

    const newWindow = window.open(whatsappUrl, '_blank');
    
    const timer = setTimeout(() => {
      navigate('/');
    }, 500);

    if (newWindow) {
      newWindow.focus();
    }

    return () => {
      clearTimeout(timer);
      if (newWindow && !newWindow.closed) {
        newWindow.close();
      }
    };
  }, [navigate]);

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