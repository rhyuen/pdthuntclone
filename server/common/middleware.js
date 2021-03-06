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

    //config.getSecrets().cookieSecret,
    app.use(cookieParser({
        httpOnly: true,
        maxAge: 1000 * 60 * 15
    }));

    const originWhiteList = (process.env.NODE_ENV === "dev") ? ["http://localhost:8081", "http://localhost:8080"] : ["https://rypdtfed.now.sh"];
    const corsOptions = {
        allowedHeaders: ["Content-Type"],
        credentials: true,
        origin: (address, cb) => {
            if (originWhiteList.includes(address)) {
                cb(null, true);
            } else {
                cb(new Error(`${address} not allowed by CORS.`));
            }
        }
    }

    app.use(cors(corsOptions));

    app.use(morgan("dev"));
    mongoose.connection.openUri(config.getSecrets().db, {
            useNewUrlParser: true,
            reconnectInterval: 1000,
            reconnectTries: 20
        })
        .once("open", () => {
            logger.info("DB Connection OPEN.");
        }).on("error", e => {
            logger.error(`[MONGODB ERROR]: ${e}`);
        });
};