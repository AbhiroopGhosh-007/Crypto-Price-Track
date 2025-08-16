import { useState, useEffect } from "react";
import Header1 from "./Components/Header1";
import SearchBox from "./Components/SearchBox";
import CryptoTable from "./Components/CryptoTable";
import Pagination from "./Components/Pagination";

function App() {
  const [search, setSearch] = useState("");
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);
  const coinsPerPage = 10;

  const URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  const fetchCoins = async () => {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      setCoins(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  // Filter coins by search
  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const indexOfLastCoin = page * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = filteredCoins.slice(indexOfFirstCoin, indexOfLastCoin);

  return (
    <div className="dark:bg-gray-900 min-h-screen">
      <Header1 />
      <SearchBox search={search} setSearch={setSearch} />
      <CryptoTable coins={currentCoins} />
      <Pagination
        totalCoins={filteredCoins.length}
        coinsPerPage={coinsPerPage}
        setPage={setPage}
        currentPage={page}
      />
    </div>
  );
}

export default App;
