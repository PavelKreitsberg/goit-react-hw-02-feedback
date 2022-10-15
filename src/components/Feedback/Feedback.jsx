import React from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
// import css from '../Feedback/Feedback.module.css';

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increaseGoodReviewsNumber = event => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  increaseNeutralReviewsNumber = event => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  increaseBadReviewsNumber = event => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () => {
    if (this.state.good === 0) {
      return 0;
    }
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onBadIncrement={this.increaseBadReviewsNumber}
            onGoodIncrement={this.increaseGoodReviewsNumber}
            onNeutralIncrement={this.increaseNeutralReviewsNumber}
          />
        </Section>

        <Section title="Statistics">
          {this.countPositiveFeedbackPercentage() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}
