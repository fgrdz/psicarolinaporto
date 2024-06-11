// WhatsAppButton.js

import styled from 'styled-components';
import { Fab, Stack } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
// import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
// import { Link } from 'react-scroll';

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
const StyledStack = styled(Stack)`
  position: fixed !important;
  bottom: 20px !important;
  right: 20px !important;
  z-index: 1000 !important;
`;

const WhatsAppButton = () => {
  return (
    <StyledStack direction={{ xs: 'row', sm: 'column' }} spacing={{ xs: 1, sm: 1, md: 1 }}>
      <StyledFab
        size="medium"
        href="https://api.whatsapp.com/send?phone=5583996276657"
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
      {/* <Link to="#" spy={true} smooth={true} offset={-140} duration={500}>
        <Tooltip title="Ir para o topo" placement="left">
          <Fab size="medium">
            <KeyboardArrowUp />
          </Fab>
        </Tooltip>
      </Link> */}
    </StyledStack>
  );
};

export default WhatsAppButton;
