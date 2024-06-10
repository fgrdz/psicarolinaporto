/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/jsx-key */
import { styled } from 'styled-components';
import profile from '../../assets/Ellipse 1.png';
// import profile2 from '../../assets/Ellipse 2.png';
import { Box, Stack, Typography } from '@mui/material';
import { useState } from 'react';
// import lines from '../../assets/lines-2.png';

export default function AboutMe() {
  const [transform, setTransform] = useState(false);

  return (
    <AboutMeSection id="sobre-mim">
      <StyledStack direction={{ xs: 'column-reverse', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
        <StyledBox my={4} maxWidth="550px" display="flex" flexDirection="column" alignItems="flexStart" gap={2} p={2}>
          {/* <Back src={lines} alt="Lines" /> */}
          <Typography variant="h4">Quem sou eu?</Typography>
          <Typography variant="h5">CRP 13/10290</Typography>
          <Typography variant="body1">
            Trabalhar com pessoas sempre foi minha paixão e vocação de vida. A psicologia foi o caminho que encontrei
            para chegar até elas e servir de porta-voz para elas encontrarem a sua própria voz.
          </Typography>
          <Typography variant="body1">
            Na minha experiência na psicologia, já trabalhei com gestantes, adolescentes, mulheres em situação de
            vulnerabilidade, saúde mental e atenção psicossocial, além de diversas realidades de pessoas diferentes que
            lido diariamente na clínica. Dentro dessas experiências, me identifiquei com a possibilidade de encontrar
            pessoas e a partir de uma escuta apoiada na técnica, ética e teoria, poder ser um instrumento de
            transformação para elas. Trabalho com a psicanálise lacaniana e estou em formação permanente de estudos
            nessa área.{' '}
          </Typography>
          <Typography variant="body1">
            Caso se interesse, te recebo em um espaço que criei na minha clínica de acolhimento da angústia e do
            sofrimento. Também tenho um perfil profissional onde discuto questões acerca da psicanálise, psicologia e
            arte{' '}
            <a href="https://www.instagram.com/psicarolinagporto" target="_blank">
              (@psicarolinagporto)
            </a>
            . Se sinta à vontade para conferir meu trabalho por lá também. Seja bem vinda(o) e qualquer coisa é só
            entrar em contato. Até!{' '}
          </Typography>
        </StyledBox>
        <Profile onMouseEnter={() => setTransform(true)} onMouseLeave={() => setTransform(false)} transform={transform}>
          <img src={transform ? profile : profile} alt="Profile picture" />
        </Profile>
      </StyledStack>
    </AboutMeSection>
  );
}

const StyledStack = styled(Stack)`
  @media screen and (min-width: 1000px) {
    display: flex;
    align-items: flex-start !important;
  }
`;
const StyledBox = styled(Box)`
  position: relative;
`;

const AboutMeSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  overflow: visible;

  @media screen and (max-width: 1024px) {
    height: max-content;
  }
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1000px) {
    position: sticky;
    top: 70px;
    width: 300px;
    margin-left: 20px;
  }

  img {
    width: 300px;
    transition: transform 0.3s ease;
    transform: ${({ transform }) => (transform ? 'scale(1.1)' : 'scale(1)')};
  }
`;
