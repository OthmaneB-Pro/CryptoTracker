import { useEffect, useState } from "react";
import styled from "styled-components";
import CardList from "../../reusable-ui/CardList";

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

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        );
        const data = await res.json();
        setCryptoData(data);
      } catch (error) {
        console.log("Erreur dans la récupération des données de crypto", error);
      }
    };
    fetchCryptoData();
  }, []);

  return (
    <CryptoCardStyled>
      {cryptoData.length > 1 ? (
        <>
          <img src={cryptoData[3].image} alt="crypto_icon" />
          <p>{cryptoData[3].name}</p>
          <p>{cryptoData[3].current_price}</p>
        </>
      ) : (
        "Chargement..."
      )}

      <h1>Top 20 crypto</h1>

      {cryptoData.slice(0, 20).map((crypto) => (
        <CardList
          key={crypto.id}
          cryptoName={crypto.name}
          src={crypto.image}
          currentPrice={crypto.current_price}
          pricePourcentage24h={crypto.price_change_percentage_24h}
          symbol={crypto.symbol}
        />
      ))}
    </CryptoCardStyled>
  );
}

const CryptoCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: red;
`;
