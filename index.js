const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = 3000 || process.env.PORT;

// Apply CORS middleware to allow requests from any origin
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle the POST request
app.post("/", (req, res) => {
  const { timezone } = req.body;
  console.log(`Timezone: ${timezone}`); // Log the timezone for debugging

  if (timezone === "Asia/Tokyo") {
    res.sendFile(path.join(__dirname, "altmod.html"));
  } else {
    res.sendFile(path.join(__dirname, "index.html"));
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
