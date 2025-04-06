import styled from "styled-components";
import NavbarCrypto from "../crypto/NavbarCrypto";
import Register from "./Register";

export default function LoginPage() {
  return (
    <LoginStyled>
      <NavbarCrypto handleScroll={() => {}} />
      <Register />
    </LoginStyled>
  );
}
const LoginStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;
  color: white;
  min-height: 100vh;
`;
