import { styled } from 'styled-components';
import Info from '../components/Home/Info';

import AboutMe from '../components/Home/AboutMe';
import ImpactosPessoais from '../components/Home/ImpactosPessoais';
import FAQ from '../components/Home/FAQ';
import BlogScroll from '../components/Home/BlogScroll';
import Footer from '../components/Home/Footer';
import Reviews from '../components/Home/Reviews';

export default function Home() {
  return (
    <main>
      <HomeSection id="#">
        <Info />
      </HomeSection>
      <AboutMe path="sobre-mim" />
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
