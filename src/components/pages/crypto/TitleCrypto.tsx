import styled from "styled-components";

export default function TitleCrypto({ cryptoRef }: any) {
  return <TitleCryptoStyled ref={cryptoRef}>Cryptos populaires</TitleCryptoStyled>;
}

const TitleCryptoStyled = styled.h1`
  margin: 100px 0 50px 0;
`;
