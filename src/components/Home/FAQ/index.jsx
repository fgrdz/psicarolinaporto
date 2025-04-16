/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/jsx-key */
import { styled } from 'styled-components';
import { Box, Stack, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SocialButtons from '../../SocialButtons';

export default function FAQ() {
  return (
    <FAQSection id="perguntas-frequentes">
      <Stack
        direction={{ xs: 'column-reverse', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        sx={{ alignItems: 'center' }}
      >
        <Box my={4} maxWidth="880px" display="flex" flexDirection="column" alignItems="center" gap={2} p={2}>
          <Typography variant="h6">Perguntas frequentes</Typography>
          <Stack>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="body2">Quanto tempo dura?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  O processo analítico é particular e singular, não sendo possível saber a duração dele previamente.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="body2">Como funcionam as sessões online?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  Regulamentada pela resolução CFP nº 11/2018, o atendimento é online consiste em um tratamento
                  realizado através de plataformas online de comunicação, como o Zoom ou o Google Meet. Após acertadas a
                  data e horário da sessão, enviarei um link para a plataforma escolhida para o início da sessão.
                  Recomendo a sessão ser realizada em um ambiente que você se sinta à vontade e seguro para
                  conversarmos.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="body2">Qual o público do atendimento?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">Ofereço atendimento para adultos.</Typography>
              </AccordionDetails>
            </Accordion>
          </Stack>

          <Typography sx={{ fontWeight: '700', fontSize: '12px', textAlign: 'center', padding: '30px 50px 50px 30px' }}>
            Atenção: Este site não fornece atendimento imediato para pessoas em crise suicida. Se você está em crise,
            ligue para o CVV no número 188. Em situações de emergência, dirija-se ao hospital mais próximo. Em caso de
            risco de vida, ligue imediatamente para o SAMU no telefone 192.
          </Typography>
          <SocialButtons />
        </Box>
      </Stack>
    </FAQSection>
  );
}

const ZenklubLink = styled.a`
  color: #7755e8;
  text-decoration: none;
  font-weight: 700;
`;

const FAQSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-top: 4rem;
  padding-bottom: 4rem !important;

  @media screen and (max-width: 1024px) {
    height: max-content;
  }
`; 