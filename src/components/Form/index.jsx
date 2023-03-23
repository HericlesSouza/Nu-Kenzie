import { useState } from "react";
import "./style.css";
import "./../../index.css";

export const Form = ({ listTransactions, setListTransactions }) => {
  const [form, setForm] = useState({
    description: "",
    value: 1,
    type: "Entrada",
  });

  const createBodyForm = (
    event,
  ) => {
    event.preventDefault();

    const newTransition = {
      id: listTransactions.length + 1,
      ...form,
    };

    setListTransactions([...listTransactions , newTransition]);

    setForm({
      description: "",
      value: 1,
    });
  };

  return (
    <form
      onSubmit={(event) => createBodyForm(event)}
    >
      <div>
        <label htmlFor="input-description">Descrição</label>
        <input
          onChange={(event) =>
            setForm({ ...form, description: event.target.value })
          }
          type="text"
          id="input-description"
          value={form.description}
          required
          placeholder="Digite aqui sua descrição"
        />
        <p>Ex: Compra de roupas</p>
      </div>
      <div>
        <div>
          <label htmlFor="input-value">Valor</label>
          <div className="div-input-value">
            <input
              onChange={(event) =>
                setForm({ ...form, value: parseInt(event.target.value) })
              }
              type="number"
              id="input-value"
              value={form.value}
              required
            />
            <p>R$</p>
          </div>
        </div>
        <div className="type-value">
          <label htmlFor="input-value">Tipo de valor</label>
          <select
            onChange={(event) =>
              setForm({ ...form, type: event.target.value })
            }
            value= {form.type}
          >
            <option value="Entrada">Entrada</option>
            <option value="Saída">Saída</option>
          </select>
        </div>
      </div>
      <button type="submit">Inserir valor</button>
    </form>
  );
};
