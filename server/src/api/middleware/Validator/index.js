const isFloat = (num) => {
  return num >= 0 && num <= 1;
};

const postDataValidation = (data) => {
  if (!data) return false;
  const outputData = JSON.stringify(data.output);
  if (outputData != 0 && outputData != 1) return false;
  if (!data.input) return false;
  const inputDataR = JSON.stringify(data.input.r);
  const inputDataG = JSON.stringify(data.input.g);
  const inputDataB = JSON.stringify(data.input.b);
  if (!(isFloat(inputDataR) && isFloat(inputDataG) && isFloat(inputDataB)))
    return false;
  return true;
};

const predictDataValidation = (r, g, b) => {
  if (!(isFloat(r) && isFloat(g) && isFloat(b))) return false;
  return true;
};

export { postDataValidation, predictDataValidation };
