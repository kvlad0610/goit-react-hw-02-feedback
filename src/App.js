import { Component } from 'react';
// import Feedback from './Components/Feedback/Feedback';
import Section from './Components/Section/Section';
import './App.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  eddGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  eddNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  eddBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { eddGood, eddNeutral, eddBad } = this;

    const countTotalFeedback = good + neutral + bad;

    const countPositiveFeedbackPercentage = (countTotalFeedback === 0
      ? 0
      : (good * 100) / countTotalFeedback
    ).toFixed();

    return (
      <Section
        good={good}
        neutral={neutral}
        bad={bad}
        onEddGood={eddGood}
        onEddNeutral={eddNeutral}
        onEddBad={eddBad}
        onCountTotalFeedback={countTotalFeedback}
        onCountPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
      />
    );
  }
}

export default App;
