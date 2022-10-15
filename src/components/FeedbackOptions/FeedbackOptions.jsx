import React from 'react';

export const FeedbackOptions = ({
  onGoodIncrement,
  onNeutralIncrement,
  onBadIncrement,
}) => {
  return (
    <div className="feedback_options">
      <button type="button" onClick={onGoodIncrement}>
        Good
      </button>
      <button type="button" onClick={onNeutralIncrement}>
        Neutral
      </button>

      <button type="button" onClick={onBadIncrement}>
        Bad
      </button>
    </div>
  );
};
