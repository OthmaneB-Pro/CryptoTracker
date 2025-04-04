import { useNavigate } from "react-router";
import styled from "styled-components";

export default function NavbarCrypto({ handleScroll }: any) {
  const navigate = useNavigate()
  return (
    <NavbarCryptoStyled>
      <ul>
        <li>
          <a href="/">Accueil</a>
        </li>
        <li>
          <a onClick={handleScroll} href="/">
            Crypto
          </a>
        </li>
        <li>
          <a href="/crypto">Recherche</a>
        </li>
        <li>
          <button onClick={() => navigate("/login")}>Inscription</button>
        </li>
        <li>
          <button>Connexion</button>
        </li>
      </ul>
    </NavbarCryptoStyled>
  );
}

const NavbarCryptoStyled = styled.nav`
  display: flex;
  justify-content: space-around;
  margin-bottom: 50px;
  ul {
    display: flex;
    list-style: none;
    li {
      margin: 10px;
      a {
        text-decoration: none;
        color: white;

        &:hover {
          transition: all 0.2s ease-in-out;
          color: #979797;
          text-decoration: underline;
        }
      }
      button {
        border: none;
        padding: 5px;
        border-radius: 5px;
        background: #7e7e7e;
        color: white;

        &:hover {
          cursor: pointer;
          background: #494949;
          transition: all 0.2s ease-in-out;
        }
      }
    }
  }
`;
