import CoinData from "./CoinData";

function CryptoTable({ coins }) {
  return (
    <div className="overflow-x-auto p-4">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700 dark:text-white">
            <th className="border p-2">Rank</th>
            <th className="border p-2">Coin</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Market Cap</th>
            <th className="border p-2">24h Change</th>
          </tr>
        </thead>
        <tbody>
          <CoinData coins={coins} />
        </tbody>
      </table>
    </div>
  );
}

export default CryptoTable;
