import axios from 'axios';

export const getImage = async seed => {
  const response = await axios.get(
    `https://picsum.photos/seed/${seed}/500`,
    { responseType: 'arraybuffer' },
  );
  return `data:;base64,${btoa(
    new Uint8Array(response.data).reduce(
      (data, byte) => `${data}${String.fromCharCode(byte)}`,
      ''
    )
  )}`;
  };
