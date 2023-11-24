const express = require("express");
const app = express();
const cors = require("cors");
const { specs, swaggerUi } = require("./swagger");
const tagRoutes = require("./routes/tagRoutes");

app.use(express.json());
app.use(cors());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use("/api", tagRoutes);

app.listen(4000, () => {
  console.log("server is running on port 4000");
});
