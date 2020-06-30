import React from 'react';
import './Controls.css';

const Controls = ({
  renderNewPicture,
  renderLastPicture,
  renderNextPicture,
  loading,
  currentIndex,
  setCurrentIndex,
  seedsLength,
}) => {
  const handleIndexChange = ({ target: { value } }) => {
    if (value > 0 && value <= seedsLength) setCurrentIndex(value - 1);
  };

  return (
    <div className="root">
      <input
        data-testid="indexInput"
        type="text"
        value={currentIndex + 1}
        onChange={handleIndexChange}
      />
      <div>
        <button
          data-testid="previousButton"
          onClick={renderLastPicture}
          disabled={loading || currentIndex === 0}
        >{`< previous`}</button>
        <button
          data-testid="nextButton"
          onClick={renderNextPicture}
          disabled={loading || currentIndex === seedsLength - 1}
        >{`next >`}</button>
        <button
          data-testid="newButton"
          onClick={renderNewPicture}
          disabled={loading}
        >{`+ new`}</button>
      </div>
    </div>
  );
};

export default Controls;
