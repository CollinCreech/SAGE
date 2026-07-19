import { StockCard } from "./Components/StockCard/StockCard";

const mockStocks = [
  {
    symbol: "AAPL",
    name: "Apple",
    price: 240.42,
    change: 1.8,
    dayRange: "228.90 - 233.10",
    volume: "42.1M",
    series: [4, 6, 5, 7, 9, 8, 10, 12, 11, 13, 14, 13, 15],
    brief:
      "Trending up after strong iPhone demand signals; no major news today.",
  },
  {
    symbol: "NVDA",
    name: "NVIDIA",
    price: 138.07,
    change: 3.4,
    dayRange: "132.40 - 139.80",
    volume: "61.8M",
    series: [10, 9, 11, 10, 13, 15, 14, 17, 19, 18, 21, 23, 24],
    brief: "Rallying on a data-center partnership announced this morning.",
  },
  {
    symbol: "TSLA",
    name: "Tesla",
    price: 246.55,
    change: -2.1,
    dayRange: "244.10 - 252.90",
    volume: "88.4M",
    series: [24, 23, 22, 23, 21, 20, 18, 19, 17, 16, 15, 14, 13],
    brief: "Slipping after a delivery estimate came in below expectations.",
  },
  {
    symbol: "MSFT",
    name: "Microsoft",
    price: 421.09,
    change: 0.4,
    dayRange: "418.20 - 422.75",
    volume: "19.6M",
    series: [14, 15, 14, 15, 16, 15, 16, 17, 16, 17, 18, 17, 18],
    brief:
      "Quiet session, tracking broader market with no company-specific news.",
  },
];

function App() {
  return (
    <>
      <h1>Check your stocks below</h1>
      {mockStocks.map((stock) => (
        <StockCard
          key={stock.symbol}
          name={stock.name}
          symbol={stock.symbol}
          price={stock.price}
          change={stock.change}
        />
      ))}
    </>
  );
}

export default App;
