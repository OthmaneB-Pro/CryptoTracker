import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import CardList from "../../reusable-ui/CardList";
import { fetchCryptoData } from "../../../api/CoinGeckoApi";
import NavbarCrypto from "./NavbarCrypto";
import TitleCrypto from "./TitleCrypto";
import { CryptoType } from "./type/typeCrypto";
import { useNavigate } from "react-router";

export default function CryptoTracker() {
  const [cryptoData, setCryptoData] = useState<CryptoType[]>([]);
  const cryptoRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate()

  useEffect(() => {
    fetchCryptoData(setCryptoData);
  }, []);

  const handleScroll = (event: React.MouseEvent) => {
    event.preventDefault();
    cryptoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClick = (cryptoId: string) => {
    navigate(`/crypto/${cryptoId}`)
  };

  return (
    <CryptoCardStyled>
      <NavbarCrypto handleScroll={handleScroll} />
      <TitleCrypto cryptoRef={cryptoRef} />

      <CardTabStyled>
        {cryptoData.length > 1
          ? cryptoData
              .slice(0, 20)
              .map((crypto) => (
                <CardList
                  key={crypto.id}
                  id={crypto.id}
                  cryptoName={crypto.name}
                  src={crypto.image}
                  currentPrice={crypto.current_price}
                  pricePourcentage24h={crypto.price_change_percentage_24h}
                  classNamePrice={
                    crypto.price_change_percentage_24h > 0 ? "green" : "red"
                  }
                  symbol={crypto.symbol}
                  onClick={() =>handleClick(crypto.id)}
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
`;

const CardTabStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2px;
  column-gap: 10px;
  margin-top: 40px;
`;
