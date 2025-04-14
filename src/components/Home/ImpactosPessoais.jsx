import styled from 'styled-components';

import profile from '../../assets/profile-3.jpg';
import { Box, Stack, Typography } from '@mui/material';
import angustia from '../../assets/fear_8541273.png';
import desejo from '../../assets/lotus_11063763.png';
import protagonista from '../../assets/employee_1365473.png';
import inconsciente from '../../assets/vision_5165372.png';
import prisoes from '../../assets/prisoner_4633714.png';
import padroes from '../../assets/planning_4295945.png';

export default function impactosPessoais() {
  return (
    <AboutMeSection id="impactos-pessoais">
      <Typography variant="h4" color="#2c4a63" textAlign="center" margin="30px">
        Impactos Pessoais
      </Typography>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 1, md: 4 }}
        my={4}
        maxWidth="880px"
        display="flex"
        flexDirection="row"
        alignItems="flexStart"
        gap={6}
        p={2}
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <Icon src={angustia} alt="Angústia" />
          <StyledTypography variant="body1" color="primary" sx={{ mt: 1, textAlign: 'center' }}>
            Reconhecer e ressignificar sintomas, dores e angústia.
          </StyledTypography>
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center">
          <Icon src={desejo} alt="Desejo" />
          <StyledTypography variant="body1" color="primary" sx={{ mt: 1, textAlign: 'center' }}>
            Aproximar-se da construção de um desejo para você.
          </StyledTypography>
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center">
          <Icon src={protagonista} alt="Protagonista" />
          <StyledTypography variant="body1" color="primary" sx={{ mt: 1, textAlign: 'center' }}>
            Tomar posição de protagonista em relação à sua vida.
          </StyledTypography>
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center">
          <Icon src={prisoes} alt="Prisões" />
          <StyledTypography variant="body1" color="primary" sx={{ mt: 1, textAlign: 'center' }}>
            Se desamarrar de prisões que as relações te colocam.
          </StyledTypography>
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center">
          <Icon src={padroes} alt="Padrões" />
          <StyledTypography variant="body1" color="primary" sx={{ mt: 1, textAlign: 'center' }}>
            Parar de repetir padrões que você nunca percebeu.
          </StyledTypography>
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center">
          <Icon src={inconsciente} alt="Inconsciente" />
          <StyledTypography variant="body1" color="primary" sx={{ mt: 1, textAlign: 'center' }}>
            Entrar em contato com um inconsciente que te move como sujeito.
          </StyledTypography>
        </Box>
      </Stack>
    </AboutMeSection>
  );
}

const Icon = styled.img`
  width: 40px;
  margin-bottom: 10px;
`;

const StyledTypography = styled(Typography)`
  padding-bottom: 10px !important;
  color: #2c4a63 !important;
  text-align: center !important;
  font-size: 14px !important;
`;

const AboutMeSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 2rem;

  color: white !important;

  @media screen and (max-width: 1024px) {
    height: max-content;
  }
`;
