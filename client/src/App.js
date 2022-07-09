import { useState } from "react";
import useGenerateRandomColor from "./hooks/useGenerateRandomColor";
import usePostData from "./hooks/usePostData";
import styles from "./styles";

function App() {
  const { color, generateColor } = useGenerateRandomColor();
  const [value, setValue] = useState(1);
  const [arr, setArr] = useState([]);

  usePostData(arr);

  const addItem = () => {
    setArr([
      ...arr,
      {
        input: { color },
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

  return (
    <div className="App">
      <div className="bg-color" style={bgColor}>
        <div className="container">
          <div className="test-area">
            <h2 style={styles.blackColorText}>This is the black text</h2>
            <h2 style={styles.whiteColorText}>This is the white text</h2>
          </div>
          <div className="button-area" style={styles.buttonArea}>
            <button onClick={() => chooseColor(0)} style={styles.button}>
              White
            </button>
            <button onClick={() => chooseColor(1)} style={styles.button}>
              Black
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
