import styled from "styled-components";

type CardListType = {
  src: string;
  cryptoName: string;
  symbol: string;
  currentPrice: number;
  pricePourcentage24h: number;
};
export default function CardList({
  src,
  cryptoName,
  symbol,
  currentPrice,
  pricePourcentage24h,
}: CardListType) {
  return (
    <CardListStyled>
      <img src={src} alt="icon_crypto" />
      <h3>{cryptoName}</h3>
      <h3>{symbol}</h3>
      <p>{currentPrice}</p>
      <p>{pricePourcentage24h}</p>
    </CardListStyled>
  );
}

const CardListStyled = styled.div`
  display: flex;
  gap: 20px;
  border: 1px solid black;
  background-color: green;

  h3 {
    background: red;
  }
`;
