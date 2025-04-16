import styled from 'styled-components';
import { Fab, Stack } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import zenklubIcon from '../../assets/zenklub icon.png';

const StyledFab = styled(Fab)`
  background-color: #25d366 !important;
  &:hover {
    background-color: #1da851 !important;
  }
`;
const StyledInstagram = styled(Fab)`
  background-color: #c13584 !important;
  &:hover {
    background-color: #a9337d !important;
  }
`;
const ZenklubFab = styled(Fab)`
  background-color: #7755e8 !important;
  &:hover {
    background-color: #6b4fd1 !important;
  }
`;

const StyledStack = styled(Stack)`
  position: fixed !important;
  bottom: 20px !important;
  right: 20px !important;
  z-index: 1000 !important;
`;

const WhatsAppButton = () => {
  const encodedMessage = "Olá, Carolina! Tenho interesse no tratamento psicanalítico. Poderia me passar mais informações?";
  
  return (
    <StyledStack direction={{ xs: 'row', sm: 'column' }} spacing={{ xs: 1, sm: 1, md: 1 }}>
      <StyledFab
        size="medium"
        href={`https://api.whatsapp.com/send?phone=5583996276657?text=${encodedMessage}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon style={{ color: 'white' }} />
      </StyledFab>
      <StyledInstagram
        size="medium"
        href="https://instagram.com/psicarolinagporto"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon style={{ color: 'white' }} />
      </StyledInstagram>
      <ZenklubFab
        size="medium"
        href="https://zenklub.com.br/psicologos/carolina-guimaraes-porto/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LogoImg src={zenklubIcon} />
      </ZenklubFab>
    </StyledStack>
  );
};

const LogoImg = styled.img`
  width: 75%;
  height: auto;
  border-radius: 50%;
`;

export default WhatsAppButton; 