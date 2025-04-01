import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  fetchCryptoChart,
  fetchCryptoDetails,
} from "../../../api/CoinGeckoApi";
import styled from "styled-components";
import NavbarCrypto from "../crypto/NavbarCrypto";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type CryptoType = {
  id: string;
  name: string;
  symbol: string;
  image: { large: string };
  market_data: {
    current_price: { usd: number };
    price_change_percentage_24h: number;
  };
};
interface CryptoDetailsProps {
  priceChange: number;
}

export default function CryptoDetail() {
  const { id } = useParams();
  const [cryptoDetails, setCryptoDetails] = useState<CryptoType | null>(null);
  const [chartData, setChartData] = useState<number[][]>([]);

  useEffect(() => {
    if (id) {
      fetchCryptoDetails(setCryptoDetails, id);
      fetchCryptoChart(setChartData, id);
    }
  }, [id]);


  const formattedChartData = chartData ? chartData.map(([timestamp, price]) => ({
    time: new Date(timestamp).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
    price,
  })) : [];

  if (!cryptoDetails) return <p>Chargement...</p>;

  return (
    <CryptoDetailsStyled
      priceChange={cryptoDetails.market_data.price_change_percentage_24h}
    >
      <NavbarCrypto handleScroll={() => {}} />
      <ResponsiveContainer width={600} height={400}>
        <LineChart data={formattedChartData}>
          <XAxis dataKey="time" />
          <YAxis domain={["auto", "auto"]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#82ca9d"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>

      <h1>{cryptoDetails.name}</h1>
      <img src={cryptoDetails.image.large} alt={cryptoDetails.name} />
      <p>{cryptoDetails.market_data.current_price.usd} $</p>
      <p>{cryptoDetails?.market_data.price_change_percentage_24h} %</p>
    </CryptoDetailsStyled>
  );
}

const CryptoDetailsStyled = styled.div<CryptoDetailsProps>`
  color: white;
  background-color: black;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin: 20px 0;
    text-transform: uppercase;
  }

  img {
    width: 150px;
    height: 150px;
    object-fit: contain;
    margin: 20px 0;
    border-radius: 50%;
    box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.2);
  }

  p {
    font-size: 1.2rem;
    margin: 10px 0;
  }

  p:last-of-type {
    font-weight: bold;
    color: ${({ priceChange }: { priceChange: number }) =>
      priceChange > 0 ? "limegreen" : "red"};
  }
`;
