import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchCryptoDetails } from "../../../api/CoinGeckoApi";

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

export default function CryptoDetail() {
  const { id } = useParams();
  const [cryptoDetails, setCryptoDetails] = useState<CryptoType | null>(null);

  useEffect(() => {
    if (id) {
      fetchCryptoDetails(setCryptoDetails, id);
    }
  }, [id]);

  if (!cryptoDetails) return <p>Chargement...</p>;

  return (
    <div>
      <h1>{cryptoDetails.name}</h1>
      <img src={cryptoDetails.image.large} alt={cryptoDetails.name} />
      <p>{cryptoDetails.market_data.current_price.usd} $</p>
      <p>{cryptoDetails.market_data.price_change_percentage_24h} %</p>
    </div>
  );
}
