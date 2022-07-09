import fileHandler from "../utils/fileHandler.js";

export const postData = async (req, res) => {
  try {
    fileHandler("w");
    const { data } = req.body;
    let csvData;

    for (let i = 0; i < data.length; i++) {
      const RInputData = data[i].input.color.r;
      const GInputData = data[i].input.color.g;
      const BInputData = data[i].input.color.b;
      const outputData = data[i].output;
      csvData = `${RInputData},${GInputData},${BInputData},${outputData}\n`;
      fileHandler("a", csvData);
    }
    res.send("Successfully");
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `${error.name}: ${error.message}`,
    });
  }
};
