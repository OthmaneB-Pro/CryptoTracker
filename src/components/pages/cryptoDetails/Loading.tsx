import styled from "styled-components";
import NavbarCrypto from "../crypto/NavbarCrypto";

export default function Loading() {
  return (
    <CryptoDetailsStyled>
      <NavbarCrypto handleScroll={() => {}} />
      <p>Loading...</p>
    </CryptoDetailsStyled>
  );
}

const CryptoDetailsStyled = styled.div`
  color: white;
  background-color: black;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  p{
    font-size : 30px;
  }
`;
