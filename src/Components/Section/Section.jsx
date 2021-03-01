import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';

const Section = ({
  onEddStatistic,
  good,
  neutral,
  bad,
  onCountTotalFeedback,
  onCountPositiveFeedbackPercentage,
}) => (
  <div>
    <h1>Please leave feedback</h1>
    <FeedbackOptions onEddStatistic={onEddStatistic} />
    <h2>Statistics</h2>
    {onCountTotalFeedback === 0 ? (
      <Notification />
    ) : (
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        onCountTotalFeedback={onCountTotalFeedback}
        onCountPositiveFeedbackPercentage={onCountPositiveFeedbackPercentage}
      />
    )}
  </div>
);

export default Section;
