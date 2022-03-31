import { Header } from "../components/Header";

import styles from "../styles/pages/Question.module.css";
import "react-toastify/dist/ReactToastify.css";

import { questions, alternatives } from "../db";
import { Button } from "../components/Button";
import { useEffect, useState } from "react";
import { Pedido } from "../components/Pedido";
import { toast, ToastContainer } from "react-toastify";

export default function Questions() {
  const [selectedOption, setSelectedOption] = useState(0);
  const [actualQuestion, setActualQuestion] = useState(1);

  const [question, setQuestion] = useState(questions[actualQuestion - 1]);

  const [hasFinished, setHasFinished] = useState(false);

  const [enableResult, setEnableResult] = useState(false);

  const [inputContent, setInputContent] = useState("");

  const notify = () =>
    toast.warn(
      "A resposta correta deve ser preenchida para validar os acertos!"
    );

  useEffect(() => {
    if (actualQuestion <= questions.length) {
      setQuestion(questions[actualQuestion - 1]);
      setSelectedOption(0);
    } else {
      setHasFinished(true);
    }
  }, [actualQuestion]);

  return (
    <div>
      <ToastContainer />
      <Header />

      {!hasFinished ? (
        <section>
          <header className={styles.header}>
            <section className={styles.questionNumber}>
              <div>{actualQuestion}</div>
            </section>
            <section className={styles.question}>
              <h3>{question.value}</h3>
              {question.description && <h6>{question.description}</h6>}
            </section>
          </header>
          <main className={styles.main}>
            <section>
              {question.answers.map((answer, i) => {
                const data = alternatives.find(
                  (alternative) => alternative.number === i
                );

                return (
                  <button
                    key={answer}
                    style={{
                      border:
                        selectedOption === i + 1 ? "2px solid #da4453" : 0,
                    }}
                    onClick={() => setSelectedOption(i + 1)}
                  >
                    <span>{data?.letter}</span>
                    <span style={{ marginLeft: "2rem" }}>{answer}</span>
                  </button>
                );
              })}
            </section>
            <div>
              <label htmlFor="resposta">
                <span>Digite a alternativa correta: </span>
                <input
                  key={inputContent}
                  defaultValue={inputContent}
                  onChange={(e: any) => setInputContent(e.target.value)}
                  style={{
                    marginTop: "2rem",
                    padding: ".5rem",
                    marginLeft: "1rem",
                  }}
                  type="password"
                  name="resposta"
                  id="resposta"
                />
              </label>
              <Button
                bg="#da4453"
                color="#fff"
                style={{ float: "right" }}
                onClick={() => {
                  if (inputContent !== "") {
                    setActualQuestion(actualQuestion + 1);
                    setInputContent("");
                  } else {
                    notify();
                  }
                }}
                disabled={selectedOption === 0}
              >
                Próxima
              </Button>
            </div>
          </main>
        </section>
      ) : (
        <>
          {!enableResult ? (
            <section className={styles.finish}>
              <h3>Você finalizou o quiz!</h3>
              <button onClick={() => setEnableResult(true)}>
                Clique aqui para visualizar os resultados
              </button>
            </section>
          ) : (
            <Pedido />
          )}
        </>
      )}
    </div>
  );
}
