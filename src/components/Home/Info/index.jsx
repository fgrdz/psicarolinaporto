import { useEffect, useState } from 'react';
import profile from '../../../assets/profile-1.jpg';
import { styled } from 'styled-components';
import { Box, Stack, Typography } from '@mui/material';
import SocialButtons from '../SocialButtons';

export default function Info() {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Stack
      direction={{ xs: 'column-reverse', sm: 'row' }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      sx={{ alignItems: 'center', marginTop: '50px' }}
      id="inicio"
    >
      <Box my={4} display="flex" flexDirection="column" alignItems="flexStart" gap={2} p={2}>
        <Typography variant="h1" sx={{ fontSize: '28px', marginBottom: '8px' }}>
          Vamos juntos escrever uma nova história de vida para além do seu sofrimento.
        </Typography>
        <Typography variant="h2" sx={{ fontSize: '20px', marginBottom: '8px', color: '#4e4e4e' }}>
          Psicóloga e Psicanalista
        </Typography>
        <Typography variant="h3" sx={{ fontSize: '16px', marginBottom: '8px' }}>
          Você se sente ansiosa(o), deprimida(o), presa(o) em si mesma(o) ou distante de quem gostaria de ser? Se sente
          sem conseguir amar, trabalhar ou se relacionar? Te convido a um novo espaço de escuta e acolhimento. Você não
          precisa passar por isso sozinha(o). Vamos juntos através da fala, reconstruir sua história e transformar o que
          hoje te faz sofrer.
        </Typography>
        <Typography variant="h3" sx={{ fontSize: '16px' }}>
          – Psicóloga online
        </Typography>
        <Typography variant="h3" sx={{ fontSize: '16px' }}>
          – Psicanalista lacaniana
        </Typography>
        <Typography variant="h3" sx={{ fontSize: '16px' }}>
          – Psicanalista particular especializada
        </Typography>
        <Typography variant="h3" sx={{ fontSize: '16px' }}>
          – Psicóloga no Brasil e no mundo
        </Typography>
        <Typography variant="h3" sx={{ fontSize: '16px' }}>
          – Vamos ouvir o que seu sofrimento tem a dizer?
        </Typography>

        <SocialButtons />
      </Box>
      <Profile>
        <Avatar id="profile-avatar" src={profile} alt="Profile picture" scrollOffset={scrollOffset} />
      </Profile>
    </Stack>
  );
}

const Avatar = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;

  margin-left: auto;
  margin-right: auto;
  object-position: top;

  -webkit-box-shadow: ${({ scrollOffset }) =>
    `${-(scrollOffset / 10) + 45}px -${scrollOffset / 100}px 0.6px 0px rgba(44, 74, 99, 1)`};
  -moz-box-shadow: ${({ scrollOffset }) =>
    `${-(scrollOffset / 10) + 45}px -${scrollOffset / 100}px 0.6px 0px rgba(44, 74, 99, 1)`};
  box-shadow: ${({ scrollOffset }) =>
    `${-(scrollOffset / 10) + 45}px -${scrollOffset / 100}px 0.6px 0px rgba(44, 74, 99, 1)`};

  transition: box-shadow 0.3s ease;

  @media (max-width: 768px) {
    margin-top: 80px;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;

    &:hover {
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
    }
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 400px;
`;
