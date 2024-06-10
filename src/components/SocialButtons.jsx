/* eslint-disable no-unused-vars */
import { Instagram, LinkedIn, WhatsApp } from '@mui/icons-material';
import { Box, Button, IconButton } from '@mui/material';

export default function SocialButtons() {
  return (
    <Box>
      <Button href="https://api.whatsapp.com/send?phone=5583996276657" target="_blank" variant="contained">
        Agendar Sessão
      </Button>
      {/* <IconButton href="https://api.whatsapp.com/send?phone=5583996276657" target="_blank">
        <WhatsApp />
      </IconButton>
      <IconButton>
        <LinkedIn />
      </IconButton>
      <IconButton href="https://www.instagram.com/psicarolinagporto" target="_blank">
        <Instagram />
      </IconButton> */}
    </Box>
  );
}
