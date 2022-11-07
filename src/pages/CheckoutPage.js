import { useNavigate } from "react-router-dom"
import Product from "../components/Product";
import { useContext} from "react";
import CartContext from "../Context/CartContext";


export default function CheckoutPage() {
  const navigate = useNavigate();
  const {cart, setCart} = useContext(CartContext)
  const {product} = useContext(CartContext)

      
    
  function getTotalFromProducts() {
    cart.map((product) =>{
      if(product.selected === true){
        return <Product
              key={product.name}
              name={product.name}
              icon={product.icon}
              price={product.price} />
      }
    })
    return cart.reduce((acc, current) => {
      return acc += current.price;
        }, 0)
      }
      
    
      return (
    <div className="CheckoutPage">
      <h1>Produtos Selecionados</h1>
      {/* TODO: aqui vão os produtos selcionados na tela de produtos */}
      <div className="register">
        <b>Total da compra:</b> R$ <span>{getTotalFromProducts}</span>
      </div>
      <button onClick={() => navigate("/")}>Voltar</button>
    </div>


  )
}