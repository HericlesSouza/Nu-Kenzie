import "./style.css";

export const filterCards = (type, setClassButtonTodos, setClassButtonEntradas,setClassButtonDespesas, setFilterSelect) => {

    if(type.text === 'Entradas') {
      setClassButtonTodos('grey')
      setClassButtonEntradas('primary')
      setClassButtonDespesas('grey')
      return setFilterSelect('Entrada')
    } else if (type.text === 'Despesas'){
      setClassButtonTodos('grey')
      setClassButtonEntradas('grey')
      setClassButtonDespesas('primary')
      return setFilterSelect('Saída')
    } else {
      setClassButtonTodos('primary')
      setClassButtonEntradas('grey')
      setClassButtonDespesas('grey')
      return setFilterSelect('Todos')
    }
  }

export const Button = ({ text, color, setPage, setClassButtonTodos, setClassButtonEntradas,setClassButtonDespesas, setFilterSelect}) => {

  return setPage ? (
    <button
      onClick={() => setPage("pageStart")}
      type="button"
      className={color}
    >
      {text}
    </button>
  ) : (
    <button
      onClick={() => filterCards({ text}, setClassButtonTodos, setClassButtonEntradas,setClassButtonDespesas, setFilterSelect)}
      type="button"
      className={color}
    >
      {text}
    </button>
  );
};
