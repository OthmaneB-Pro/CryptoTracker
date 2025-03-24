import styled from "styled-components";

type CardListType = {
  src: string;
  cryptoName: string;
  symbol: string;
  currentPrice: number;
  pricePourcentage24h: number;
  classNamePrice: string;
};
export default function CardList({
  src,
  cryptoName,
  symbol,
  currentPrice,
  pricePourcentage24h,
  classNamePrice,
}: CardListType) {
  return (
    <CardListStyled>
      <div className="image">
        <img src={src} alt="icon_crypto" />
      </div>
      <h3 className="symbol">{symbol}</h3>
      <h3>{cryptoName}</h3>

      <p className="currentPrice">{currentPrice} $</p>
      <p className={classNamePrice}>{pricePourcentage24h} %</p>
    </CardListStyled>
  );
}

const CardListStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  border: 1px solid black;
  border-radius: 2px;
  width: 500px;
  height: 50px;
  padding: 10px;
  background-color: #494949;

  &:hover {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    background-color: #7e7e7e;
  }

  .symbol {
    background-color: #727272;
    padding: 5px;
    border-radius: 35px;
  }
  .image {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .currentPrice {
    color: #cccc03;
  }
  .red {
    color: red;
  }
  .green {
    color: #02b102;
  }
`;
