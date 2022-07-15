import React, { useState, useEffect } from "react";
import useGenerateRandomColor from "./hooks/useGenerateRandomColor";
import useGetData from "./hooks/useGetData";
import usePostData from "./hooks/usePostData";
import styles from "./styles";
import usePredictData from "./hooks/usePredictData";
import LoadingIndicator from "./components/LoadingIndicator";

function App() {
  const { color, generateColor } = useGenerateRandomColor();
  const PostData = usePostData();
  const { result, predictData } = usePredictData();
  const [value, setValue] = useState(1);
  const [arr, setArr] = useState([
    {
      input: { r: color.r, g: color.g, b: color.b },
      output: value,
    },
  ]);

  useEffect(() => {
    predictData(color.r, color.g, color.b);
    PostData(arr);
  });

  const predictColor = (c) => {
    if (c === 1) return "#000";
    else return "#fff";
  };

  const addItem = () => {
    setArr([
      ...arr,
      {
        input: { r: color.r, g: color.g, b: color.b },
        output: value,
      },
    ]);
  };

  const chooseColor = (val) => {
    setValue(val);
    addItem();
    generateColor();
  };

  const bgColor = {
    height: "100vh",
    width: "100vw",
    backgroundColor: `rgba(${color.r * 255},${color.g * 255},${color.b * 255})`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const TextColor = {
    color: `${predictColor(result)}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "50px",
  };

  return (
    <div className="App">
      <div className="bg-color" style={bgColor}>
        <div className="container">
          <div className="test-area">
            <h2 style={styles.blackColorText}>This is the black text</h2>
            <h2 style={styles.whiteColorText}>This is the white text</h2>
            <div className="predict">
              <h2 style={TextColor}>This text is better</h2>
              <div className="loading">
                <LoadingIndicator />
              </div>
            </div>
          </div>
          <div className="button-area" style={styles.buttonArea}>
            <button onClick={() => chooseColor(0)} style={styles.button}>
              White
            </button>
            <button onClick={() => chooseColor(1)} style={styles.button}>
              Black
            </button>
            <button onClick={useGetData} style={styles.button}>
              Download .csv
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
