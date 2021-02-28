const Statistics = ({
  good,
  neutral,
  bad,
  onCountTotalFeedback,
  onCountPositiveFeedbackPercentage,
}) => (
  <div>
    <p>Good:{good}</p>
    <p>Neutral:{neutral}</p>
    <p>Bed:{bad}</p>
    <p>Total:{onCountTotalFeedback}</p>
    <p>Positive Feedback:{onCountPositiveFeedbackPercentage}%</p>
  </div>
);

export default Statistics;
