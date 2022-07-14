import { usePromiseTracker } from "react-promise-tracker";

const LoadingIndicator = (props) => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    promiseInProgress && (
      <h4
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Loading...
      </h4>
    )
  );
};

export default LoadingIndicator;
