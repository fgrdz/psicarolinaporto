import { Typography } from '@mui/material';
import { styled } from 'styled-components';
import image from '../../../assets/logotipo4.png';
import { Instagram, LinkedIn } from '@mui/icons-material';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <ContainerFooter>
        <ContentFooter>
          <FooterSection1>
            <Typography
              variant="h1"
              sx={{ fontSize: '18px', fontWeight: 'bold', color: 'black', marginBottom: '8px', textAlign: 'start' }}
            >
              Atendimento e Contato:
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '14px' }}>
              Campina Grande, Paraíba
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '14px' }}>
              E-mail: psicarolinagporto@gmail.com
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '14px' }}>
              Contato: +55 83 9627-6657
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '14px' }}>
              Zenklub:{' '}
              <ZenklubLink href="https://zenklub.com.br/psicologos/carolina-guimaraes-porto/" target="_blank">
                /carolina-guimaraes-porto
              </ZenklubLink>
            </Typography>
            <SocialMediaIcons>
              <a href="https://www.instagram.com/psicarolinagporto" target="_blank">
                <Instagram sx={{ fontSize: 24, marginRight: 1, cursor: 'pointer' }} />
              </a>
              <a href="https://www.linkedin.com/in/carolina-porto-60984b1a1/" target="_blank">
                <LinkedIn sx={{ fontSize: 24, cursor: 'pointer' }} />
              </a>
            </SocialMediaIcons>
          </FooterSection1>

          <FooterSection2>
            <Typography variant="body1" sx={{ fontSize: '14px' }}>
              Atendimento em horário comercial ou <br />
              noturno via agendamento prévio.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '14px' }}>
              Disponibilidade de horário sob consulta.
            </Typography>
          </FooterSection2>
          <Logo src={image} alt={'Logotipo Carolina Porto'} />
        </ContentFooter>
      </ContainerFooter>
      <Copyrigth>
        <Typography variant="caption">
          &copy; {currentYear} Desenvolvido por D&J Tech.
          <br />
          Todos os direitos reservados.
        </Typography>
      </Copyrigth>
    </>
  );
}

const ZenklubLink = styled.a`
  color: #7755e8;
  text-decoration: none;
  font-weight: 700;
`;

const Copyrigth = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 3rem;
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
  box-shadow: rgba(9, 30, 66, 0.1) 0px -1px 1px, rgba(9, 30, 66, 0.13) 0px -1px 1px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ContentFooter = styled.div`
  display: flex;
  width: 100%;
  gap: 100px;
  justify-content: center;
  max-height: 500px;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 20px;
    flex-direction: column;
    gap: 10px;
  }
`;

const FooterSection1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 60px;
  margin-top: 2rem;

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

const FooterSection2 = styled.div`
  display: flex;
  flex-direction: column;

  p {
    text-align: center;
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
  margin-top: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.img`
  width: 300px;
  height: 300px;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 200px;
    height: 200px;
    margin-top: -40px;
  }
`;
