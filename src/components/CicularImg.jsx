import styles from './components/CircularImg.css';

const CicularImg = () => {
  return (
    <div className={styles.containerCircularimages}>
      <div className={styles.contentCircularimagetop}>
        <img src="https://via.placeholder.com/150" alt="Circle 1" />
      </div>
      <div className={styles.contentCircularimagebottom}>
        <img src="https://via.placeholder.com/150" alt="Circle 2" />
      </div>
    </div>
  )
}

export default CicularImg;
