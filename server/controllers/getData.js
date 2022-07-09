import path from "path";

const __dirname = path.resolve();
const DIR_PATH = path.join(__dirname, "/database/ColorData.csv");

export const getData = async (req, res) => {
  try {
    res.download(DIR_PATH);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `${error.name}: ${error.message}`,
    });
  }
};
