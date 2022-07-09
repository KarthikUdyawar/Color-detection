import axios from "axios";

const useGetData = async () => {
  await axios({
    url: "http://localhost:4000/api/v1/download",
    method: "GET",
    responseType: "blob",
  })
    .then((res) => {
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "ColorData.csv"); 
      document.body.appendChild(link);
      link.click();
      console.log("Downloaded successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default useGetData;
