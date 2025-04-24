import { Box, Stack, Typography } from '@mui/material';
import styled from 'styled-components';
import SocialButtons from '../../SocialButtons';


export default function PsicanaliseSection () {
    return(
        <ContainerSection id='psicanalise'>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }} sx={{ alignItems: 'center' }}>
                <Box my={4} maxWidth="880px" display="flex" flexDirection="column" alignItems="flexStart" gap={2} p={2}>
                  <Typography>
                    <StyledTypography color="primary" variant="h4" marginBottom={'30px'} justifySelf={'center'}>
                        Como funciona o tratamento psicanalítico?                    
                    </StyledTypography>
                    <StyledTypography variant="body1">
                        A psicanálise é um espaço de escuta e fala. Aqui, você é convidado(a) a dizer o que pensa, sente, sonha e repete.
                    </StyledTypography>
                    <StyledTypography variant="body1">
                        Não se trata de receber conselhos ou fórmulas prontas. O que guia o tratamento é a sua própria palavra. Através da escuta atenta e acolhedora, 
                        o que você diz vai ganhando novos contornos, permitindo que sentidos escondidos venham à tona.
                    </StyledTypography> 
                    <StyledTypography variant="body1">
                        Ao longo do tempo, você pode perceber repetições, sintomas, 
                        modos de sofrer que pareciam inevitáveis. E com isso, surge a possibilidade de viver de outra forma — mais alinhada ao seu desejo e menos determinada por dores antigas.
                    </StyledTypography>
                    <StyledTypography variant="body1">
                        O ritmo do processo é singular. Cada análise é única, respeita o tempo de cada sujeito e se constrói encontro após encontro. As sessões acontecem uma vez por semana e peço 
                        que reserve uma hora do seu dia para conversarmos. 
                    </StyledTypography>
                    <StyledTypography variant="body1">
                        É um caminho que exige coragem, mas que pode abrir espaço para transformação, alívio e mais liberdade de ser quem se é.
                    </StyledTypography>
                    <StyledTypography variant="body1">    
                        <strong>
                        Se sentir que é hora de começar, estou por aqui. É só clicar no botão abaixo para falar comigo pelo WhatsApp. Vamos conversar sobre valores possíveis para você, horários para 
                        nos encontrar e podemos marcar nosso primeiro encontro online. 
                        </strong>
                    </StyledTypography>
                  </Typography>
                </Box>
        </Stack>
        <SocialButtons/>
        </ContainerSection>
    )
}

const ContainerSection = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding-top: 2rem;
    padding-bottom: 2rem;
    background-color: #ced9df;
`
const StyledTypography = styled(Typography)`
  padding-bottom: 10px !important;
  text-align: left !important;
`;