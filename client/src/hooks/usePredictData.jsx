import axios from "axios";
import { useState } from "react";
import { trackPromise } from "react-promise-tracker";

const usePredictData = () => {
  const [result, setResult] = useState(1);

  const predictData = (R, G, B) => {
    trackPromise(
      axios({
        url: "http://localhost:4000/api/v1/predictData",
        method: "GET",
        params: { r: `${R}`, g: `${G}`, b: `${B}` },
      })
        .then((res) => {
          console.log(res.data);
          setResult(res.data.info.output);
        })
        .catch((err) => {
          console.log(err);
        })
    );
  };
  return { result, predictData };
};

export default usePredictData;
