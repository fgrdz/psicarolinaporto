/* eslint-disable no-unused-vars */
import { Instagram, LinkedIn, WhatsApp } from '@mui/icons-material';
import { Box, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

export default function SocialButtons() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
      <Button component={Link} to="/agendar-sessao" variant="contained" size="large">
        AGENDE SUA SESSÃO
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
