import { Typography } from '@mui/material';
import { styled } from 'styled-components';
import image from '../../assets/logotipo4.png';
import { Instagram, LinkedIn, WhatsApp } from '@mui/icons-material';

export default function Footer() {
    return (
        <>
            <ContainerFooter>
                <ContentFooter>
                    <FooterSection1>
                        <Typography variant='h1' sx={{ fontSize: '18px', fontWeight: 'bold', color: 'black', marginBottom: '8px' }}>
                            Atendimento e Contato:
                        </Typography>
                        <Typography variant='body1' sx={{ fontSize: '14px' }}>
                            Campina Grande, Paraíba: carolinagporto7@gmail.com
                        </Typography>
                        <Typography variant='body1' sx={{ fontSize: '14px' }}>
                            Contato: +55 83 9627-6657
                        </Typography>
                    </FooterSection1>
                    <FooterSection1>
                        <Typography variant='body1' sx={{ fontSize: '14px' }}>
                            Atendimento em horário comercial ou noturno via agendamento prévio.
                            <br />Disponibilidade de horário sob consulta.
                        </Typography>
                    </FooterSection1>
                    <SocialMediaIcons>
                        <a href="https://www.instagram.com/psicarolinagporto" target="_blank"  >
                            <Instagram sx={{ fontSize: 24, marginRight: 1, cursor:'pointer' }} />
                        </a>
                        <a href="https://www.linkedin.com/in/carolina-porto-60984b1a1/" target="_blank"  >
                            <LinkedIn sx={{ fontSize: 24,cursor:'pointer' }} />
                        </a>
                        
                    </SocialMediaIcons>
                </ContentFooter>
                <Logo src={image} alt={'Logotipo Carolina Porto'} />
            </ContainerFooter>
        </>
    );
}

const ContainerFooter = styled.div`
    display: flex;
    align-items: center;
    background-color: #F7F8FA;
    box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
    
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

    @media (max-width: 768px) {
        margin-left: 0;
        padding: 8px;
        margin-bottom: 20px;
    }
`;

const SocialMediaIcons = styled.div`
    display: flex;
    margin-left: 60px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        display:none;
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
