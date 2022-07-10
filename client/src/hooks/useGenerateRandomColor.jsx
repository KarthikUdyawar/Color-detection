import { useState } from "react";

const useGenerateRandomColor = () => {
  const [color, setColor] = useState({
    r: 1,
    g: 1,
    b: 1,
  });
  const generateColor = () => {
    let colorValue = {
      r: Math.random(),
      g: Math.random(),
      b: Math.random(),
    };
    setColor(colorValue);
  };
  return { color, generateColor };
};

export default useGenerateRandomColor;
