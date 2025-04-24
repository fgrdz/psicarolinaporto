import { styled } from 'styled-components';
import Info from '../components/Home/Info/index';

import AboutMe from '../components/Home/AboutMe/index';
import ImpactosPessoais from '../components/Home/ImpactosPessoais/index';
import FAQ from '../components/Home/FAQ/index';
import BlogScroll from '../components/Home/BlogScroll/index';
import Footer from '../components/Home/Footer/index';
import Reviews from '../components/Home/Reviews/index';
import PsicanaliseSection from '../components/Home/Psicanalise';

export default function Home() {
  return (
    <main>
      <HomeSection id="#">
        <Info />
      </HomeSection>
      <AboutMe path="sobre-mim" />
      <PsicanaliseSection/>
      <ImpactosPessoais />
      <BlogScroll />
      <Reviews />
      <FAQ />
      <Footer />
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

  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    justify-content: center;
    height: fit-content;
    padding-top: 0;
  }
`;
