import Logo from "./logo";
import styles from "../components/cadastroTela.module.css";

function Cadastro() {
  return (
    <div>
      <div className={styles.cadastroTelaContainer}>
        <Logo />;
      </div>
    </div>
  );
}

export default Cadastro;