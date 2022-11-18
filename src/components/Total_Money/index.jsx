import { Button } from "../Button"
import './style.css'
export const TotalMoney = () => {
    return (
        <div className="div-total-value">
            <div>
              <h3>Valor total:</h3>
              <span>R$ 8456</span>
            </div>
            <span>O valor se refere ao saldo</span>
          </div>
    )
}