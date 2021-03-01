import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onEddStatistic }) => (
  <div>
    <button onClick={onEddStatistic} name="good" className={styles.button}>
      Good
    </button>
    <button onClick={onEddStatistic} name="neutral" className={styles.button}>
      Neutral
    </button>
    <button onClick={onEddStatistic} name="bad" className={styles.button}>
      Bed
    </button>
  </div>
);

export default FeedbackOptions;
