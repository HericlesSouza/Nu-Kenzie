import "./style.css";
import { FaTrash } from "react-icons/fa";

export const Card = ({ listTransactions }) => {
  return (
    <>
      {listTransactions.length === 0 ? (
        <li className="li-no-items">
          <div></div>
          <div></div>
          <div></div>
        </li>
      ) : (
        <li className="item-card">
          <div className="div-entry"></div>
          <div>
            <div>
              <h3 className="title-item-card">Salário - Mês Dezembro</h3>
            </div>
            <div>
              <p className="paragraph-price">R$ 6.660,00</p>
              <div className="btn-trash">
                <FaTrash className="icon-trash" />
              </div>
            </div>
          </div>
          <span className="span-type-value">Entrada</span>
        </li>
      )}
    </>
  );
};
