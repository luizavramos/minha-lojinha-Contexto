export default function Product(props) {
  const { name, icon, price } = props;
  const adjustedPrice = price.toFixed(2).toString().replace(".", ",");

  return (
    <div className="product">
      {icon} {name} - R$ {adjustedPrice}
    </div>
  );
}