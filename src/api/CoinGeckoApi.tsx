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
