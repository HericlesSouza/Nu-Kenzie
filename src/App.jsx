import { useState } from "react";
import "./index.css";
import "./App.css";
import Logo from "./assets/Nu Kenzie.png";
import LogoStart from "./assets/Nu Kenzie-start.svg";
import Illustration from "./assets/illustration.svg";
import { Form } from "./components/Form";
import { Button } from "./components/Button";
import { List } from "./components/List";
import { TotalMoney } from "./components/Total_Money";

function App() {
  const [page, setPage] = useState("pageStart");
  const [listTransactions, setListTransactions] = useState([]);
  const [filterSelect, setFilterSelect] = useState("Todos");
  const [classButtonTodos, setClassButtonTodos] = useState("primary");
  const [classButtonEntradas, setClassButtonEntradas] = useState("grey");
  const [classButtonDespesas, setClassButtonDespesas] = useState("grey");

  const filterActive = listTransactions.filter((element) => {
    return filterSelect === "Todos"
      ? listTransactions
      : element.type === filterSelect;
  });

  console.log(listTransactions)
  
  return (
    <div className="App">
      {page === "pageStart" ? (
        <div className="div-page-start">
          <main className="main-start container">
            <section>
              <img src={LogoStart} alt="Logo Kenzie" />
              <div>
                <h1>Centralize o controle das suas finanças</h1>
                <span>de forma rápida e segura</span>
                <button onClick={() => setPage("pageHome")}>Iniciar</button>
              </div>
            </section>
            <img src={Illustration} alt="illustration" />
          </main>
        </div>
      ) : (
        <div>
          <header>
            <div className="div-header container">
              <img src={Logo} alt="Logo Kenzie" />
              <Button setPage={setPage} text="Início" color="grey" />
            </div>
          </header>
          <main className="container main-home">
            <section>
              <Form
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              />
              {filterActive.length !== 0 && (
                <TotalMoney listTransactions={filterActive} />
              )}
            </section>
            <section>
              <div>
                <h3>Resumo financeiro</h3>
                <div className="div-buttons">
                  <Button
                    text="Todos"
                    color={classButtonTodos}
                    setClassButtonTodos={setClassButtonTodos}
                    setClassButtonEntradas={setClassButtonEntradas}
                    setClassButtonDespesas={setClassButtonDespesas}
                    setFilterSelect={setFilterSelect}
                  />
                  <Button
                    text="Entradas"
                    color={classButtonEntradas}
                    setClassButtonTodos={setClassButtonTodos}
                    setClassButtonEntradas={setClassButtonEntradas}
                    setClassButtonDespesas={setClassButtonDespesas}
                    setFilterSelect={setFilterSelect}
                  />
                  <Button
                    text="Despesas"
                    color={classButtonDespesas}
                    setClassButtonTodos={setClassButtonTodos}
                    setClassButtonEntradas={setClassButtonEntradas}
                    setClassButtonDespesas={setClassButtonDespesas}
                    setFilterSelect={setFilterSelect}
                  />
                </div>
              </div>
              <List filterActive={filterActive} listTransactions={listTransactions} setListTransactions={setListTransactions}/>
            </section>
          </main>
        </div>
      )}
    </div>
  );
}

export default App;
