import marcaMangueSpace from "../images/marca-manguespace.png";
import styles from "../components/logo.module.css";

function Logo() {
  return (
    <div>
      <div className={styles.logoContainer}>
        <img src={marcaMangueSpace} alt="logoCoworking"></img>
      </div>
    </div>
  );
}

export default Logo;