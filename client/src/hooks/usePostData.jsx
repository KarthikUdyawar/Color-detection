import axios from "axios";

const usePostData = async (arr) => {
  await axios({
    url: "http://localhost:4000/api/v1/postData",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: JSON.stringify({ data: arr }),
  })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default usePostData;
