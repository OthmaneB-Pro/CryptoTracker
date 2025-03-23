import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import CardList from "../../reusable-ui/CardList";
import { fetchCryptoData } from "../../../api/CoinGeckoApi";
import NavbarCrypto from "./NavbarCrypto";

type CryptoType = {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
};
export default function CryptoTracker() {
  const [cryptoData, setCryptoData] = useState<CryptoType[]>([]);
  const cryptoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchCryptoData(setCryptoData);
  }, []);

  const handleScroll = (event: React.MouseEvent) => {
    event.preventDefault();
    cryptoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <CryptoCardStyled>

      <NavbarCrypto handleScroll={handleScroll} />
      <h1 ref={cryptoRef}>Cryptos populaires</h1>

      <CardTabStyled>
        {cryptoData.length > 1
          ? cryptoData
              .slice(0, 20)
              .map((crypto) => (
                <CardList
                  key={crypto.id}
                  cryptoName={crypto.name}
                  src={crypto.image}
                  currentPrice={crypto.current_price}
                  pricePourcentage24h={crypto.price_change_percentage_24h}
                  classNamePrice={
                    crypto.price_change_percentage_24h > 0 ? "green" : "red"
                  }
                  symbol={crypto.symbol}
                />
              ))
          : "Chargement..."}
      </CardTabStyled>
    </CryptoCardStyled>
  );
}

const CryptoCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;
  color: white;
  min-height: 100vh;

  h1 {
    margin: 100px 0 50px 0;
  }
  
`;

const CardTabStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2px;
  column-gap: 10px;
  margin-top: 40px;
`;
