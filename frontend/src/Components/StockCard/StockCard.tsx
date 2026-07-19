import "./StockCard.css";

interface StockCardProps {
  symbol: string;
  name: string;
  price: number;
  change: number;
}

export const StockCard = ({ symbol, name, price, change }: StockCardProps) => {
  return (
    <div className="stock-card-container">
      <div className="symbol">{symbol}</div>
      <div className="name">{name}</div>
      <div className="price">{price}</div>
      <div className="change">{change}</div>
    </div>
  );
};
