import { useNavigate } from "react-router-dom"

export default function CheckoutPage() {
  const navigate = useNavigate();

  return (
    <div className="CheckoutPage">
      <h1>Produtos Selecionados</h1>
      {/* TODO: aqui vão os produtos selcionados na tela de produtos */}
      <div className="register">
        <b>Total da compra:</b> R$ <span>{Number(0).toFixed(2)}</span>
      </div>
      <button onClick={() => navigate("/")}>Voltar</button>
    </div>


  )
}