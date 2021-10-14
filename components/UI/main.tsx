import React from "react";
import styles from "./main.module.css";

const Main: React.FC = (props) => {
  return <div className={styles.main}>{props.children}</div>;
};

export default Main;
