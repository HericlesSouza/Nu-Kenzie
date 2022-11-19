import { Card } from "../Card";
import "./style.css";

export const List = ({
  filterActive,
  listTransactions,
  setListTransactions,
}) => {
  return (
    <>
      {filterActive.length === 0 ? (
        <div className="div-list">
          <h2>Você ainda não possui nenhum lançamento</h2>
          <ul>
            <Card filterActive={filterActive} />
            <Card filterActive={filterActive} />
            <Card filterActive={filterActive} />
          </ul>
        </div>
      ) : (
        <div className="div-list">
          <ul>
            <Card
              filterActive={filterActive}
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
            />
          </ul>
        </div>
      )}
    </>
  );
};
