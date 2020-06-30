import React from 'react';
import Loader from '../Loader/Loader';

const RandomPicture = ({ picture, loading }) => {
  return (
    <div style={{ padding: 8, height: 500, width: 500 }}>
      {loading && <Loader />}
      {!loading && picture && <img alt="" src={picture} />}
    </div>
  );
};

export default RandomPicture;
