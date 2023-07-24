const crypto = require('crypto');

const sha1 = (str) => {
  const strConcated = "$spotify{" + str + "}copy$";
  const encoder = new TextEncoder();
  const data = encoder.encode(strConcated);

  try {
    return crypto.subtle.digest('SHA-1', data).then(buffer => {
      const hexCodes = [];
      const view = new DataView(buffer);
  
      for (let i = 0; i < view.byteLength; i += 4) {
        const value = view.getUint32(i);
        const stringValue = value.toString(16);
        const paddedValue = stringValue.padStart(8, '0');
        hexCodes.push(paddedValue);
      }
  
      return hexCodes.join('');
    }); 
  } catch (error) {
    console.log(error);
  }
}
  
module.exports = {
    sha1
}