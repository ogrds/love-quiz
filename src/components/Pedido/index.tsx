import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import styles from "./Pedido.module.css";

import "react-loading-skeleton/dist/skeleton.css";

export function Pedido() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 5000);
  }, []);

  return (
    <>
      {!show ? (
        <section className={styles.container}>
          <h4>
            <Skeleton />
          </h4>

          <p>
            <Skeleton count={2} />
          </p>

          <p>
            <Skeleton count={4} />
          </p>

          <p>
            <Skeleton count={4} />
          </p>

          <p>
            <Skeleton count={4} />
          </p>

          <p>
            <Skeleton count={2} />
          </p>

          <p>
            <Skeleton count={5} />
          </p>

          <h3>
            <Skeleton />
          </h3>
        </section>
      ) : (
        <section className={styles.container}>
          <h4>Tenho certeza que acertou tudo, mas o resultado é o de menos!</h4>

          <p>
            O que importa realmente é a parceria, amor e reciprocidade entre a
            gente, um sempre ao lado do outro pro que der e vier.
          </p>

          <p>
            Talvez não seja uma surpresa para você, eu também não sei se já
            esperava, mas vamos nessa kk. Pensei em várias formas para fazer
            isso, mas acho que a maneira mais autêntica seria usando alguma
            coisa que eu domino, que é codando kkk.
          </p>

          <p>
            Completamos hoje 5 anos juntos e só tenho a agradecer a Deus, pois
            todo momento do seu lado só me faz sentir o homem mais sortudo do
            mundo! Tantas momento que já passamos, tantas fases, evoluções e
            conquistas e nós lá sempre apoiando um ao outro.
          </p>

          <p>
            Tudo começou naquela van, um local diferente para se conhecer
            alguém, voltando tarde da noite, a maioria das vezes cansados e com
            sono, mas aconteceu, precisou de um empurrãozinho, mas deu certo.
            Fomos conversando, a coisa foi evoluindo e o amor foi crescendo.
          </p>

          <p>
            O tempo de faculdade acabou, mas o amor e o companheirismo só cresce
            desde então.
          </p>

          <p>
            Ah, uma curiosidade bacana kk. Sabe as flores que te faço com
            guardanapo sempre que vamos a uma lanchonete? Não sei se já te
            contei, mas passei horas treinando vendo vídeos no youtube só pra
            fazer o mais bonito possível, e valeu a pena, pois o sorriso que
            você me dá toda vez torna o meu dia perfeito 💓
          </p>

          <p>
            É legal ver o quanto amadurecemos. Não eramos muito de fazer planos,
            e olha como estamos agora.
          </p>

          <p>
            Sabe que te amo muito, mas nunca me canso de dizer, e quero passar o
            resto da minha vida com você, e dito isso, acho que é momento de dar
            um novo passo, então escreva aí pra mim:
          </p>

          <h3>ACEITA SE CASAR COMIGO?</h3>

          <input
            type="text"
            style={{
              padding: ".5rem",
            }}
          />
        </section>
      )}
    </>
  );
}
