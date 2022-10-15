import React from 'react';
import css from '../FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.feedback_options}>
      <button type="button" className={css.button} onClick={onLeaveFeedback}>
        good
      </button>
      <button type="button" className={css.button} onClick={onLeaveFeedback}>
        neutral
      </button>
      <button type="button" className={css.button} onClick={onLeaveFeedback}>
        bad
      </button>
    </div>
  );
};
