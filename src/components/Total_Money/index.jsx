import "./style.css";
export const TotalMoney = ({ listTransactions }) => {
  const value = listTransactions.reduce((previousValue, currentValue) => {
    return currentValue.type === "Entrada"
      ? previousValue + currentValue.value
      : previousValue - currentValue.value;
  }, 0);
  
  return (
    <div className="div-total-value">
      <div>
        <h3>Valor total:</h3>
        <span>R$ {value},00</span>
      </div>
      <span>O valor se refere ao saldo</span>
    </div>
  );
};
