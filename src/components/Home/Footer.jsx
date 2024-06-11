import { Typography } from '@mui/material';
import { styled } from 'styled-components';
import image from '../../assets/logotipo4.png';
import { Instagram, LinkedIn, WhatsApp } from '@mui/icons-material';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <ContainerFooter>
        <ContentFooter>
          <FooterSection1>
            <Typography variant="h1" sx={{ fontSize: '18px', fontWeight: 'bold', color: 'black', marginBottom: '8px' }}>
              Atendimento e Contato:
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '14px' }}>
              Campina Grande, Paraíba: carolinagporto7@gmail.com
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '14px' }}></Typography>
            <Typography variant="body1" sx={{ fontSize: '14px' }}>
              Contato: +55 83 9627-6657
            </Typography>
          </FooterSection1>
          <FooterSection1>
            <Typography variant="body1" sx={{ fontSize: '14px' }}>
              Atendimento em horário comercial ou <br /> noturno via agendamento prévio.
              <br />
              Disponibilidade de horário sob consulta.
            </Typography>
          </FooterSection1>
          <SocialMediaIcons>
            <a href="https://www.instagram.com/psicarolinagporto" target="_blank">
              <Instagram sx={{ fontSize: 24, marginRight: 1, cursor: 'pointer' }} />
            </a>
            <a href="https://www.linkedin.com/in/carolina-porto-60984b1a1/" target="_blank">
              <LinkedIn sx={{ fontSize: 24, cursor: 'pointer' }} />
            </a>
          </SocialMediaIcons>
        </ContentFooter>
        <Logo src={image} alt={'Logotipo Carolina Porto'} />
      </ContainerFooter>
      <Copyrigth>
        <Typography
          variant="caption"
          //   sx={{ display: 'flex', justifyContent: 'center', paddingBottom: '2rem', textAlign: 'center' }}
        >
          &copy; {currentYear} Desenvolvido por D&J Tech.
          <br />
          Todos os direitos reservados.
        </Typography>
      </Copyrigth>
    </>
  );
}

const Copyrigth = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding-bottom: 6rem;
  }
`;

const ContainerFooter = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  background-color: #f7f8fa;
  padding-top: 20px;
  /* box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.06); */
  box-shadow: rgba(9, 30, 66, 0.1) 0px -1px 1px, rgba(9, 30, 66, 0.13) 0px -1px 1px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ContentFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 500px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const FooterSection1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 60px;
  margin-bottom: 40px;
  width: 100%;
  p {
    text-align: start;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 8px;
    margin-bottom: 20px;
    justify-content: center;
    align-items: center !important;
    p {
      text-align: center !important;
      font-size: 12px !important;
    }
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-left: 60px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.img`
  justify-self: flex-end;
  margin-left: 40%;
  width: 300px;
  height: 300px;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 200px;
    height: 200px;
  }
`;
