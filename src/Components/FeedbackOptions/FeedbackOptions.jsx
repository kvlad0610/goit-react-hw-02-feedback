import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onEddGood, onEddNeutral, onEddBad }) => (
  <div>
    <button onClick={onEddGood} className={styles.button}>
      Good
    </button>
    <button onClick={onEddNeutral} className={styles.button}>
      Neutral
    </button>
    <button onClick={onEddBad} className={styles.button}>
      Bed
    </button>
  </div>
);

export default FeedbackOptions;
