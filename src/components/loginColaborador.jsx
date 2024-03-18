/* eslint-disable no-unused-vars */
import Logo from "./logo.jsx";
import styles from "./loginColaborador.module.css";
import Sociais from "./sociais.jsx";
import Form from "./formLogin.jsx";

function LoginColab() {
  return (
    <div>
      <div className={styles.loginWrapper}>
        <Logo />
        <div className={styles.loginConteiner}>
          <h1>Colaborador</h1>
          <Form showInscricao={false} />
        </div>
      </div>
      <Sociais />
    </div>
  );
}

export default LoginColab;