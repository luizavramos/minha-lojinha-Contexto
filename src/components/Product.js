import CartContext from "../Context/CartContext";
import { useContext, useState } from "react";

export default function Product(props) {
  const {product, setProduct} = useContext(CartContext)
  const [select, setSelect]= useState(false)
  const { name, icon, price, selected } = props;
  const adjustedPrice = price.toFixed(2).toString().replace(".", ",");

  function handleSelect() {
    setSelect(!selected)
  }

  return (
    <div className="product">
      <div className={selected ? "product selected" : "product"} onClick={handleSelect}></div>
      {icon} {name} - R$ {adjustedPrice}
    </div>
  );
}