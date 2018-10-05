const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const logger = require("./logger.js");
const config = require("../config.js");

module.exports = (app) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(cors());
    app.use(cookieParser(config.getSecrets().cookieSecret, {
        httpOnly: true,
        maxAge: 7200
    }));
    app.use(morgan("dev"));
    mongoose.connection.openUri(config.getSecrets().db, {
            useNewUrlParser: true
        })
        .once("open", () => {
            console.log("DB Connection OPEN.");
        }).on("error", e => {
            console.log("ERR with DB CONN");
            logger.error(`MONGODB ERROR: ${e}`);
        });
};