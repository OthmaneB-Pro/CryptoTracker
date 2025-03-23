import { useEffect, useRef, useState } from "react";
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
  const cryptoRef = useRef<HTMLDivElement>(null);

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

  const handleScroll = (event: React.MouseEvent) => {
    event.preventDefault();
    cryptoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <CryptoCardStyled>
      <nav>
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
            <button>Inscription</button>
          </li>
          <li>
            <button>Connexion</button>
          </li>
        </ul>
      </nav>

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
  nav {
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
  }
`;

const CardTabStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2px;
  column-gap: 10px;
  margin-top: 40px;
`;
