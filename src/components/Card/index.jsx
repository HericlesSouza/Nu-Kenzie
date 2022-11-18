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
        listTransactions.map((element, index) => {
          let type = "";

          element.type === "Entrada"
            ? (type = "div-entry")
            : (type = "div-exit");

          return (
            <li key={index} className="item-card">
              <div className={type}></div>
              <div>
                <div>
                  <h3 className="title-item-card">{element.description}</h3>
                </div>
                <div>
                  <p className="paragraph-price">R$ {element.value}</p>
                  <div className="btn-trash">
                    <FaTrash className="icon-trash" />
                  </div>
                </div>
              </div>
              <span className="span-type-value">{element.type}</span>
            </li>
          );
        })
      )}
    </>
  );
};
