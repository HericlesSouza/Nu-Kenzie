import { Card } from "../Card";
import "./style.css";

export const List = ({ listTransactions }) => {
  return (
    <>
      {listTransactions.length === 0 ? (
        <div className="div-list">
          <h2>Você ainda não possui nenhum lançamento</h2>
          <ul>
            <Card listTransactions={listTransactions}/>
            <Card listTransactions={listTransactions}/>
            <Card listTransactions={listTransactions}/>
          </ul>
        </div>
      ) : (
        <div className="div-list">
          <ul>
            <Card listTransactions={listTransactions}/>
            <Card listTransactions={listTransactions}/>
            <Card listTransactions={listTransactions}/>
          </ul>
        </div>
      )}
    </>
  );
};
