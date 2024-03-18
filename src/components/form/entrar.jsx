import styles from './entrar.module.css';

const entrar = ({ text }) => {
  return (
    <div>
      <button className={styles.btnEntrar}>{text}</button>
    </div>
  )
}

export default entrar
