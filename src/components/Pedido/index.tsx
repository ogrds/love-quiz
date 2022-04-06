import { createElement, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import styles from "./Pedido.module.css";

import "react-loading-skeleton/dist/skeleton.css";
import { contentPedido } from "../../db";

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
          {contentPedido.map(pedido => {
            return createElement(
              pedido.tag,
              {},
              pedido.content
            )
          })}

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
