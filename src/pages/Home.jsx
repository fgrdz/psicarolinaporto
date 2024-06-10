import { styled } from 'styled-components';
import Info from '../components/Home/Info';
import AboutMe from '../components/Home/AboutMe';
import { Container } from '@mui/material';
import MainText from '../components/Home/MainText';

export default function Home() {
  return (
    <main>
      <Container maxWidth="lg" disableGutters>
        <HomeSection id="#">
          <Info />
        </HomeSection>
        <MainText />
        <AboutMe />
      </Container>
    </main>
  );
}

const HomeSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  max-width: 960px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 0;

  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
  }

  /* MEDIA QUERIES: medium devices */
  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    justify-content: center;
    height: fit-content;
    padding-top: 0;
  }
`;
