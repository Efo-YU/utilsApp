import hash from 'object-hash';

const encryptText = text => {
  return hash(text);
};

export default encryptText;
