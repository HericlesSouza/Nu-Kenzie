import { useState } from "react";
import "./index.css";
import "./App.css";
import Logo from "./assets/Nu Kenzie.png";
import LogoStart from "./assets/Nu Kenzie-start.svg";
import Illustration from "./assets/illustration.svg"
import { Form } from "./components/Form";
import { Button } from "./components/Button";
import { List } from "./components/List";
import { TotalMoney } from "./components/Total_Money";

function App() {
  const [listTransactions, setListTransactions] = useState([]);

  const [page, setPage] = useState("pageStart");
   console.log(listTransactions)
  return (
    <div className="App">
      {page === "pageStart" ? (
        <main className="main-start">
          <section>
            <img src={LogoStart} alt="Logo Kenzie" />
            <div>
              <h1>Centralize o controle das suas finanças</h1>
              <span>de forma rápida e segura</span>
            <button onClick={() => setPage("pageHome")}>Iniciar</button>
            </div>
          </section>
            <img src={Illustration} alt="illustration" />  
          <section>

          </section>
        </main>
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
              <Form listTransactions={listTransactions} setListTransactions={setListTransactions}/>
              {listTransactions.length !== 0 &&  <TotalMoney />}
            </section>
            <section>
              <div>
                <h3>Resumo financeiro</h3>
                <div className="div-buttons">
                  <Button text="Todos" color="primary" />
                  <Button text="Entradas" color="grey" />
                  <Button text="Despesas" color="grey" />
                </div>
              </div>
              <List listTransactions={listTransactions}/>
            </section>
          </main>
        </div>
      )}
    </div>
  );
}

export default App;
