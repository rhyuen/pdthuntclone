const express = require("express");
const logger = require("./common/logger.js");
const wrapAsync = require("./common/util.js");
const middleware = require("./common/middleware.js");
const unauthedRoutes = require("./routes/unauthedRoutes.js");
const productRoutes = require("./routes/productRoutes.js");
const app = express();

middleware(app);
app.use("/product", productRoutes);
app.use("/", unauthedRoutes);


app.use((err, req, res, next) => {
    logger.error(`[${new Date().toLocaleString()}]: ${err}`);
    res.status(500).json({
        message: "Something went wrong.",
        error: err.message,
        code: err.httpStatusCode
    });
});

module.exports = app;