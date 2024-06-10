import styled from 'styled-components';

import profile from '../../assets/profile-3.jpg';
import { Box, Stack, Typography } from '@mui/material';

export default function AboutMe() {
  return (
    <AboutMeSection id="sobre-mim">
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }} sx={{ alignItems: 'center' }}>
        <Box my={4} maxWidth="880px" display="flex" flexDirection="column" alignItems="flexStart" gap={2} p={2}>
          <Typography>
            <Profile>
              <img id="profile-img" src={profile} alt="Main text" />
            </Profile>
            <StyledTypography color="white" variant="h4">
              Quem sou eu?
            </StyledTypography>
            <StyledTypography color="white" variant="h5">
              CRP 13/10290
            </StyledTypography>
            <StyledTypography variant="body1">
              Trabalhar com pessoas sempre foi minha paixão e vocação de vida. A psicologia foi o caminho que encontrei
              para chegar até elas e servir de porta-voz para elas encontrarem a sua própria voz.
            </StyledTypography>
            <StyledTypography variant="body1">
              Na minha experiência na psicologia, já trabalhei com gestantes, adolescentes, mulheres em situação de
              vulnerabilidade, saúde mental e atenção psicossocial, além de diversas realidades de pessoas diferentes
              que lido diariamente na clínica. Dentro dessas experiências, me identifiquei com a possibilidade de
              encontrar pessoas e a partir de uma escuta apoiada na técnica, ética e teoria, poder ser um instrumento de
              transformação para elas. Trabalho com a psicanálise lacaniana e estou em formação permanente de estudos
              nessa área.{' '}
            </StyledTypography>
            <StyledTypography variant="body1">
              Caso se interesse, te recebo em um espaço que criei na minha clínica de acolhimento da angústia e do
              sofrimento. Também tenho um perfil profissional onde discuto questões acerca da psicanálise, psicologia e
              arte{' '}
              <a href="https://www.instagram.com/psicarolinagporto" target="_blank">
                (@psicarolinagporto)
              </a>
              . Se sinta à vontade para conferir meu trabalho por lá também. Seja bem vinda(o) e qualquer coisa é só
              entrar em contato. Até!{' '}
            </StyledTypography>
          </Typography>
        </Box>
      </Stack>
    </AboutMeSection>
  );
}

const StyledTypography = styled(Typography)`
  padding-bottom: 10px !important;
`;

const AboutMeSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: #2c4a63;
  color: white !important;

  @media screen and (max-width: 1024px) {
    height: max-content;
  }
`;

const Profile = styled.div`
  float: left;
  margin: 0 2em 0 0;
  position: relative;

  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    display: block;
    margin-left: auto;
    margin-right: auto;
    object-position: 80% 100%;

    border-radius: 4%;
  }

  @media screen and (max-width: 768px) {
    float: none;
    margin: 0 auto 1em auto;
    display: flex;
    justify-content: center;

    img {
      width: 100%;
      max-width: 300px;
      box-shadow: none;
    }
  }
`;
