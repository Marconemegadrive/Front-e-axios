/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import styles from "./botao01.module.css";

function Botao01(props) {
  return (
    <>
      <button className={styles.Bt01}>{props.name}</button>
    </>
  );
}

export default Botao01;
