/* eslint-disable no-unused-vars */
import { Instagram, LinkedIn, WhatsApp } from '@mui/icons-material';
import { Box, Button, IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useApp } from '../hooks/context';
import { useState } from 'react';

export default function SocialButtons() {
  const encodedMessage = "Olá, Carolina! Tenho interesse no tratamento psicanalítico. Poderia me passar mais informações?";

  const handleWhatsAppClick = () => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-16855079403/t5nhCJDAmrMaEOuzkOU-',
        'value': 1.0,
        'currency': 'BRL'
      });
    }    
    window.open(
      `https://wa.me/5583996276657?text=${encodedMessage}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <Box marginTop={4} sx={{
      display: 'flex',
      justifyContent: 'center'
    }}>
      <ButtonSchedule 
        onClick={handleWhatsAppClick}
        variant="contained"
        sx={{backgroundColor: '#25D366'}}
        >
        AGENDE SUA SESSÃO
      </ButtonSchedule>
    </Box>
  );
}

const ButtonSchedule = styled(Button)(({ theme }) => ({
  height: '60px',
  width: '200px',
  boxShadow: `
    0 0 10px rgba(37, 211, 102, 0.6),
    0 0 20px rgba(37, 211, 102, 0.4) !important`, 

  '&:hover': {
    transform: 'translateY(-1px)',
    boxShadow: `
      0 0 15px rgba(37, 211, 102, 0.1),
      0 0 25px rgba(37, 211, 102, 0.6),
      0 0 35px rgba(37, 211, 102, 0.4) !important`,
  },

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `linear-gradient(
      45deg,
      rgba(37, 211, 102, 0.1),
      rgba(37, 211, 102, 0.05)
    )`,
    zIndex: -1,
  }
}));