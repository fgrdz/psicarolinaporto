import { styled } from 'styled-components';
import { Link } from 'react-scroll';
import { useState } from 'react';
import logo from '../../assets/logo-normal.png';

export default function FloatingNavbar() {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <Navbar>
      <Link to="#" spy={true} smooth={true} offset={-140} duration={500} onClick={() => setActiveNav('#')}>
        <Logo src={logo} />
        <span>Carolina Guimarães Porto</span>
      </Link>

      <ul>
        <li className={activeNav === '#' ? 'active' : ''}>
          <Link to="#" spy={true} smooth={true} offset={-140} duration={500} onClick={() => setActiveNav('#')}>
            Home
          </Link>
        </li>
        <li className={activeNav === 'sobre-a-psicanalise' ? 'active' : ''}>
          <Link
            to="sobre-a-psicanalise"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setActiveNav('sobre-a-psicanalise')}
          >
            Sobre a psicanálise
          </Link>
        </li>
        <li className={activeNav === 'sobre-mim' ? 'active' : ''}>
          <Link
            to="sobre-mim"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setActiveNav('sobre-mim')}
          >
            Sobre mim
          </Link>
        </li>
        <li className={activeNav === 'blog-scroll' ? 'active' : ''}>
          <Link
            to="blog-scroll"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setActiveNav('blog-scroll')}
          >
            Blog
          </Link>
        </li>
        <li className={activeNav === 'perguntas-frequentes' ? 'active' : ''}>
          <Link
            to="perguntas-frequentes"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setActiveNav('perguntas-frequentes')}
          >
            Perguntas frequentes
          </Link>
        </li>
      </ul>
    </Navbar>
  );
}
const Logo = styled.img`
  width: 70px;

  margin-left: 1rem;
  cursor: pointer;
`;

const Navbar = styled.div`
  background: rgba(247, 248, 250, 0.3);
  position: fixed;
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 70px;
  width: 100vw;
  backdrop-filter: blur(15px);
  @media screen and (max-width: 768px) {
    display: none;
    width: 0;
  }
  span {
    font-family: 'Clemente Hairline', sans-serif;
    letter-spacing: 3px;
    font-size: 1rem;
    color: #2c4a63;
    cursor: pointer;
  }
  > a {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 18px;
    height: 70px;
    padding-right: 1rem;
    font-family: 'Clemente', sans-serif;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.1rem;
      cursor: pointer;

      a {
        width: fit-content;
        background: transparent;
        color: #2c4a63;
        padding: 0.2rem;
        position: relative;
        transition: color 400ms ease;

        &:hover,
        &.active {
          color: #2c4a63;
        }

        &:hover::after,
        &.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 4px;
          background: #2c4a63;
          transition: all 400ms ease;
        }
      }
    }
  }
`;
