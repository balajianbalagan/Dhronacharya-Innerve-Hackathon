require("dotenv-flow").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const logger = require("./utils/logger")(module);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(helmet());
app.disable("x-powered-by");

// Put routes here
app.use("/api/auth", require("./routes/auth"));
app.use("/api/course-list",require("./routes/course"));
app.use("/api/enroll",require("./routes/enroll"));
app.use((_req, res) => {
	return res.status(200).send("Back-end for");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
	logger.info(`App Listening on port ${port}`);
});
