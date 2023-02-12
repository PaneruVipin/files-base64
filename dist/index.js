const fileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const base64ToFile = async (url, fileName = "my file") => {
  const extName = url?.split(";base64")?.[0]?.split(":")?.[1];
  const res = await fetch(url);
  const blob = await res.blob();
  return new File([blob], fileName, { type: extName });
};

exports.fileToBase64 = fileToBase64;
exports.base64ToFile = base64ToFile;
module.exports = {
  fileToBase64,
  base64ToFile,
};

