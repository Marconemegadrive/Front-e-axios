import styles from "./lembrar.module.css";

function Lembrar() {
  return (
    <div className={styles.lembrarContainer}>
      <input type="checkbox" id="rememberMe" />
      <label htmlFor="rememberMe">Lembrar-me</label>
    </div>
  );
}

export default Lembrar;