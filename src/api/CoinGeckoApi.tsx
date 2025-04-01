export const fetchCryptoData = async (setCryptoData: any) => {
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

export const fetchCryptoDetails = async (setCryptoData: any, id: string) => {
    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${id}`
      );
      const data = await res.json();
      setCryptoData(data);
    } catch (error) {
      console.log("Erreur dans la récupération des détails de la crypto", error);
    }
};

export const fetchCryptoChart = async (
  setChartData: (data: number[][]) => void,
  id: string
) => {
  try {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=2`
    );
    const data = await res.json();

    if (data && Array.isArray(data.prices)) {
      setChartData(data.prices);
    } else {
      console.warn("Aucune donnée de prix disponible.");
      setChartData([]);
    }
  } catch (error) {
    console.error("Erreur lors de la récupération du graphique", error);
    setChartData([]);
  }
};
