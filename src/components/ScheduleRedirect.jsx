import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

const ScheduleRedirect = () => {
  const navigate = useNavigate();
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5583996276657";

  useEffect(() => {
    // 1. Dispara a conversão
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-16855079403/t5nhCJDAmrMaEOuzkOU-',
        'value': 1.0,
        'currency': 'BRL'
      });
    }

    // 2. Abre o WhatsApp em nova aba
    const newWindow = window.open(whatsappUrl, '_blank');
    
    // 3. Retorna para a página principal após 100ms
    const timer = setTimeout(() => {
      navigate('/');
    }, 100);

    // Foca na janela do WhatsApp (opcional)
    if (newWindow) {
      newWindow.focus();
    }

    return () => {
      clearTimeout(timer);
      // Fecha a janela se o componente for desmontado (opcional)
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
      <CircularProgress />
    </div>
  );
};

export default ScheduleRedirect;