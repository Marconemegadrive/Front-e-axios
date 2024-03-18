import styles from "./formLogin.module.css";
import Input from "./form/input.jsx";
import Entrar from "./form/entrar.jsx";
import Lembrar from "./form/lembrar.jsx";
import { Link } from "react-router-dom";

function Form() {
  

  return (
    <form className={styles.form}>
      <Input text="Usuário" type="text" placeholder="E-mail" name="usuario" />
      <Input
        text="Senha"
        type="password"
        placeholder="Insira sua senha"
        name="password"
      />
      <Lembrar />
      <Entrar text="Entrar" />
      <p>
        Não possui uma conta? <Link to="#">Inscreva-se </Link>
      </p>
    </form>
  );
}

export default Form;