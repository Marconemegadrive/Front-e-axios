import gps from "../images/gps.png";
import email from "../images/email.png";
import phone from "../images/phone.png";
import styles from "./sociais.module.css";


function Sociais() {
  return (
    <div>
      <div className={styles.sociaisContainer}>
        <div className={styles.sociaisInfo}>
          <img className={styles.sociaisImg} src={email}></img>
          <p>manguespace@next.org.br</p>
        </div>
        <div className={styles.sociaisInfo}>
          <img className={styles.sociaisImg} src={phone}></img>
          <p>(81) 3224 4251 | (81) 9409 7538</p>
        </div>
        <div className={styles.sociaisInfo}>
          <img className={styles.sociaisImg} src={gps}></img>
          <p>
            R. Domingos Jose Martins, 75<br></br> ITBC Center - Recife - PE
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sociais;