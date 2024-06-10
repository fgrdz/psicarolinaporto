import profile from '../../assets/profile-1.jpg';
import { styled } from 'styled-components';
import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Instagram, LinkedIn } from '@mui/icons-material';

export default function Info() {
  return (
    <Stack
      direction={{ xs: 'column-reverse', sm: 'row' }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      sx={{ alignItems: 'center' }}
    >
      <Box my={4} maxWidth="550px" display="flex" flexDirection="column" alignItems="flexStart" gap={2} p={2}>
        <Typography variant="h2">
          Psicóloga e <br /> Psicanalista
        </Typography>
        <Typography variant="h3">
          Ofereço a você um espaço de acolhimento pela via da palavra. Em um espaço livre de julgamentos é possível
          construir novas elaborações e novas possibilidades de ser para além do sofrimento.
        </Typography>
        <Box>
          <Button variant="contained">Agendar Sessão</Button>
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <LinkedIn />
          </IconButton>
          <IconButton>
            <Instagram />
          </IconButton>
        </Box>
      </Box>
      <Profile>
        <Avatar src={profile} alt="Profile picture" />
      </Profile>
    </Stack>
  );
}

const Avatar = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
  -webkit-box-shadow: 45px -28px 0.6px 0px rgba(44, 74, 99, 1);
  -moz-box-shadow: 45px -28px 0.6px 0px rgba(44, 74, 99, 1);
  box-shadow: 45px -28px 0.6px 0px rgba(44, 74, 99, 1);
  transition: box-shadow 0.3s ease; /* Adiciona a transição */

  &:hover {
    -webkit-box-shadow: 0px 0px 0.6px 0px rgba(44, 74, 99, 1);
    -moz-box-shadow: 0px 0px 0.6px 0px rgba(44, 74, 99, 1);
    box-shadow: 0px 0px 0.6px 0px rgba(44, 74, 99, 1);
  }
  @media (max-width: 768px) {
    margin-top: 20px;
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
`;
