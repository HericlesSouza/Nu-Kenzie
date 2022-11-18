import { useState } from "react";
import "./style.css";
import "./../../index.css";

export const Form = ({ listTransactions, setListTransactions }) => {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState(0)
  const [option, setOption] = useState('Entrada')

  const createBodyForm = (event, inputDescription, inputValue, optionChoose) => {
    event.preventDefault();
    const newTransition = 
      {
        description: inputDescription,
        type: optionChoose,
        value: Number(inputValue),
      }
      setListTransactions([...listTransactions, newTransition])
      console.log(listTransactions)
  };
 
  return (
    <form onSubmit={(event) => createBodyForm(event, description, value, option)}>
      <div>
        <label htmlFor="input-description">Descrição</label>
        <input
          onChange={(event) => setDescription(event.target.value)}
          type="text"
          id="input-description"
          required
          placeholder="Digite aqui sua descrição"
        />
        <p>Ex: Compra de roupas</p>
      </div>
      <div>
        <div>
          <label htmlFor="input-value">Valor</label>
          <div className="input-value">
            <input
              onChange={(event) => setValue(event.target.value)}
              type="number"
              id="input-value"
              required
            />
            <p>R$</p>
          </div>
        </div>
        <div className="type-value">
          <label htmlFor="input-value">Tipo de valor</label>
          <select onChange={(event) => setOption(event.target.value)}>
            <option value="Entrada">Entrada</option>
            <option value="Saída">Saída</option>
          </select>
        </div>
      </div>
      <button type="submit">Inserir valor</button>
    </form>
  );
};
