import React from "react";

import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <div>
        <img width={50} src="/wedding-ring.png" alt="Anéis" />
        <span>Love Quiz</span>
      </div>
    </header>
  );
};

export { Header };
