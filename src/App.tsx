import { Button } from "./components/Button";
import { Header } from "./components/Header";

import styles from "./styles/App.module.css";

import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const routeChange = (path: string) => {
    navigate(path);
  };

  return (
    <div>
      <Header />

      <section>
        <main className={styles.main}>
          <div className={styles.info}>
            <span>
              <h1>Será que você conhece bem seu par?</h1>
              <p>Inicie o quiz e vamos descobrir!</p>
            </span>

            <Button
              bg="#da4453"
              color="white"
              onClick={() => routeChange("questions")}
            >
              Iniciar
            </Button>
          </div>
          <img width={800} src="/question.svg" alt="Question" />
        </main>
      </section>
    </div>
  );
}

export default App;
