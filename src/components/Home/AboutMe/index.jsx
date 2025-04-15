import styled from 'styled-components';
import profile from '../../../assets/profile-3.jpg';
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
              Sobre mim
            </StyledTypography>
            <StyledTypography color="white" variant="h5">
              CRP 13/10290
            </StyledTypography>
            <StyledTypography variant="body1">
              Sou psicóloga formada pela UEPB, com mais de seis anos de pesquisa em saúde mental e formação contínua em
              psicanálise lacaniana, além de cinco anos de experiência clínica. Trabalhar com pessoas sempre foi minha
              paixão e vocação. Meu objetivo, a partir de uma escuta fundamentada na técnica, na ética e na teoria
              lacaniana, é ser um instrumento de transformação para você. É pela via da palavra que acessamos o
              inconsciente e as amarras que causam seu sofrer. Juntos, construiremos um espaço singular de escuta e
              reconstrução, dedicado ao seu processo.
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