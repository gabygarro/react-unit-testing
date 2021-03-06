import React, { useState, useEffect } from 'react';
import RandomPicture from '../RandomPicture/RandomPicture';
import Controls from '../Controls/Controls';
import { getImage } from '../../utils';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [seedHistory, setSeedHistory] = useState([]);
  const [picture, setPicture] = useState(null);
  const [loading, setLoading] = useState(true);

  const generatePicture = async seed => {
    try {
      setLoading(true);
      const pictureSource = await getImage(seed);
      setPicture(pictureSource);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const renderNewPicture = () => {
    const newSeed = Date.now();
    setSeedHistory([...seedHistory, newSeed]);
    setCurrentIndex(seedHistory.length);
  };

  const renderLastPicture = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const renderNextPicture = () => {
    setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    if (seedHistory[currentIndex]) generatePicture(seedHistory[currentIndex]);
  }, [currentIndex, seedHistory]);

  useEffect(() => {
    renderNewPicture();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>Random picture generator</h1>
      <RandomPicture picture={picture} loading={loading} />
      <Controls
        renderNewPicture={renderNewPicture}
        renderLastPicture={renderLastPicture}
        renderNextPicture={renderNextPicture}
        loading={loading}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        seedsLength={seedHistory.length}
      />
    </div>
  );
};

export default Gallery;
