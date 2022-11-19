import "./style.css";
import { FaTrash } from "react-icons/fa";

export const Card = ({
  filterActive,
  listTransactions,
  setListTransactions,
}) => {
  const deleteTransaction = (id) => {
    const newListTransactions = listTransactions.filter(
      (element) => element.id !== id
    );
    setListTransactions(newListTransactions)
  };

  return (
    <>
      {filterActive.length === 0 ? (
        <li className="li-no-items">
          <div></div>
          <div></div>
          <div></div>
        </li>
      ) : (
        filterActive.map((element, index) => {
          let type = "";

          element.type === "Entrada"
            ? (type = "div-entry")
            : (type = "div-exit");

          return (
            <li key={index} id={element.id} className="item-card">
              <div className={type}></div>
              <div>
                <div>
                  <h3 className="title-item-card">{element.description}</h3>
                </div>
                <div>
                  <p className="paragraph-price">R$ {element.value},00</p>
                  <div className="btn-trash">
                    <FaTrash onClick={() => deleteTransaction(element.id)} className="icon-trash" />
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
