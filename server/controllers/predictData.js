import child_process from "child_process";

export const predictData = async (req, res) => {
  try {
    let spawn = child_process.spawn;
    let pyPro = spawn(
      "python",
      [
        "D:/Code/JavaScript/AI/Color-detection/server/database/predictData.py",
        req.query.r,
        req.query.g,
        req.query.b,
      ],
      {
        detached: true,
      }
    );
    pyPro.stdout.on("data", (data) => {
      res.status(200).json({ output: parseInt(data.toString()[0]) });
    });
    pyPro.stderr.on("data", (err) => {
      console.log(String(err));
    });
    pyPro.on("close", (code, signal) => {
      console.log(
        `child process closed with code ${code} and signal ${signal}`
      );
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `${error.name}: ${error.message}`,
    });
  }
};
