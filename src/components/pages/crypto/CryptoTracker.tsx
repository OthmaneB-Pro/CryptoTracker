import { useEffect, useState } from "react";

type CryptoType = {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
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
    <div>
      
        {cryptoData.length > 1 ? (
          <>
            <img src={cryptoData[3].image} alt="crypto" />
            <p>{cryptoData[3].name}</p>
            <p>{cryptoData[3].current_price}</p>
          </>
        ) : (
          "y a rien"
        )}

    </div>
  );
}
