function CoinData({ coins }) {
  return coins.map((coin) => {
    const {
      market_cap_rank,
      name,
      current_price,
      market_cap,
      price_change_percentage_24h,
    } = coin;

    return (
      <tr key={market_cap_rank} className="dark:text-white">
        <td className="border p-3">{market_cap_rank}</td>
        <td className="border p-3">{name}</td>
        <td className="border p-3">${current_price.toLocaleString()}</td>
        <td className="border p-3">${market_cap.toLocaleString()}</td>
        <td
          className={`${price_change_percentage_24h < 0
              ? "text-red-600"
              : "text-green-600"
            } border p-3`}
        >
          {price_change_percentage_24h.toFixed(2)}%
        </td>
      </tr>
    );
  });
}

export default CoinData;
