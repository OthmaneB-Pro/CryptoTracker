export type CryptoType = {
  id: string;
  name: string;
  symbol: string;
  image: { large: string };
  market_data: {
    current_price: { usd: number };
    price_change_percentage_24h: number;
  };
};
export interface CryptoDetailsProps {
  priceChange: number;
}
