/* eslint-disable no-unused-vars */
import { Instagram, LinkedIn, WhatsApp } from '@mui/icons-material';
import { Box, Button, IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useApp } from '../hooks/context';
import { useState } from 'react';

export default function SocialButtons() {
  const navigate = useNavigate();
  const {setOpenWhatsApp} = useApp();

  const handleWhatsAppClick = () => {
    setOpenWhatsApp(true); 
    
    navigate("/agendar-sessao");
  };

  return (
    <Box marginTop={4} sx={{
      display: 'flex',
      justifyContent: 'center'
    }}>
      <ButtonSchedule onClick={handleWhatsAppClick} variant="contained">
        AGENDE SUA SESSÃO
      </ButtonSchedule>
    </Box>
  );
}

const ButtonSchedule = styled(Button)(({ theme }) => ({
  height: '60px',
  width: '200px',
  boxShadow: `
    0 0 10px rgba(61, 106, 144, 0.6),
    0 0 20px rgba(64, 115, 158, 0.4) !important`, 

  '&:hover': {
    transform: 'translateY(-1px)',
    boxShadow: `
      0 0 15px rgba(127, 178, 219, 0.1),
      0 0 25px rgba(64, 115, 158, 0.6),
      0 0 35px rgba(100, 155, 200, 0.4) !important`,
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
      rgba(100, 155, 200, 0.1),
      rgba(100, 155, 200, 0.05)
    )`,
    zIndex: -1,
  }
})); 