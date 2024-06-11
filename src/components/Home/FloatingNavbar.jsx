import { styled } from 'styled-components';
import { Link } from 'react-scroll';
import { useState } from 'react';
import logo from '../../assets/logo-normal.png';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function FloatingNavbar() {
  const [activeNav, setActiveNav] = useState('#');
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Navbar activeNav={activeNav}>
        <Link to="#" spy={true} smooth={true} offset={-140} duration={500} onClick={() => setActiveNav('#')}>
          <Logo src={logo} />
          <span>Carolina Guimarães Porto</span>
        </Link>

        <ul>
          <li className={activeNav === '#' ? 'active' : ''}>
            <Link
              to="#"
              spy={true}
              smooth={true}
              offset={-140}
              duration={500}
              onClick={() => {
                setActiveNav('#');
                toggleMenu();
              }}
            >
              Home
            </Link>
          </li>
          <li className={activeNav === 'sobre-mim' ? 'active' : ''}>
            <Link
              to="sobre-mim"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => {
                setActiveNav('sobre-mim');
                toggleMenu();
              }}
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
              onClick={() => {
                setActiveNav('blog-scroll');
                toggleMenu();
              }}
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
              onClick={() => {
                setActiveNav('perguntas-frequentes');
                toggleMenu();
              }}
            >
              Perguntas frequentes
            </Link>
          </li>
        </ul>
      </Navbar>

      <MobileNavbar>
        <MobileHeader>
          <Link to="#" spy={true} smooth={true} offset={-140} duration={500} onClick={() => setActiveNav('#')}>
            <Logo src={logo} />
            <span>Carolina Guimarães Porto</span>
          </Link>
          <MenuIcon onClick={toggleMenu}>{menuOpen ? <FaTimes /> : <FaBars />}</MenuIcon>
        </MobileHeader>
        {menuOpen && (
          <DropdownMenuOverlay onClick={toggleMenu}>
            <DropdownMenu>
              <li className={activeNav === '#' ? 'active' : ''}>
                <Link
                  to="#"
                  spy={true}
                  smooth={true}
                  offset={-140}
                  duration={500}
                  onClick={() => {
                    setActiveNav('#');
                    toggleMenu();
                  }}
                >
                  Home
                </Link>
              </li>
              <li className={activeNav === 'sobre-mim' ? 'active' : ''}>
                <Link
                  to="sobre-mim"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => {
                    setActiveNav('sobre-mim');
                    toggleMenu();
                  }}
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
                  onClick={() => {
                    setActiveNav('blog-scroll');
                    toggleMenu();
                  }}
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
                  onClick={() => {
                    setActiveNav('perguntas-frequentes');
                    toggleMenu();
                  }}
                >
                  Perguntas frequentes
                </Link>
              </li>
            </DropdownMenu>
          </DropdownMenuOverlay>
        )}
      </MobileNavbar>
    </>
  );
}

const Logo = styled.img`
  width: 70px;
  margin-left: 1rem;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 50px;
    margin-left: 0;
  }
`;

const Navbar = styled.div`
  background: rgba(247, 248, 250, 0.89);
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
  backdrop-filter: blur(10px);

  @media screen and (max-width: 768px) {
    display: none;
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

const MobileNavbar = styled.div`
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const MobileHeader = styled.div`
  background: rgba(247, 248, 250, 0.89);
  position: fixed;
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  padding: 0 1rem;
  backdrop-filter: blur(10px);

  span {
    font-family: 'Clemente Hairline', sans-serif;
    letter-spacing: 3px;
    font-size: 0.8rem !important;
    color: #2c4a63;
    cursor: pointer;
  }

  > a {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;

const MenuIcon = styled.div`
  font-size: 1.5rem;
  color: #2c4a63;
  cursor: pointer;
  display: flex;
`;

const DropdownMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const DropdownMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: rgba(247, 248, 250, 0.95);
  backdrop-filter: blur(10px);
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  padding: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  li {
    width: 100%;
    padding: 0.5rem 0;

    a {
      width: 100%;
      color: #2c4a63;
      padding: 0.5rem 1rem;
      display: block;
      transition: background 400ms ease;

      &:hover,
      &.active {
        background: #f0f0f0;
      }
    }
  }
`;
