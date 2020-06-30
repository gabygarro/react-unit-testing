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
    if (value >= 0 && value < seedsLength) setCurrentIndex(value);
  };

  return (
    <div className="root">
      <input type="text" value={currentIndex} onChange={handleIndexChange} />
      <div>
        <button
          onClick={renderLastPicture}
          disabled={loading || currentIndex === 0}
        >{`< previous`}</button>
        <button
          onClick={renderNextPicture}
          disabled={loading || currentIndex === seedsLength - 1}
        >{`next >`}</button>
        <button onClick={renderNewPicture} disabled={loading}>{`+ new`}</button>
      </div>
    </div>
  );
};

export default Controls;
