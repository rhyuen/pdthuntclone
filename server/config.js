const nconf = require("nconf");
nconf.file("./keys.json");

function getNodeEnv() {
    const envTypes = ["dev", "prod", "test"];
    const currentEnv = process.env.NODE_ENV;
    if (envTypes.includes(currentEnv) === -1) {
        throw new Error(`NODE_ENV value of '${process.env.NODE_ENV}' is not one of 'dev', 'prod' or 'test'.`);
    }
    console.log("NODE_ENV for config is '%s'.", currentEnv);
}
exports.getExternalServices = () => {
    const devSvcURLS = {
        auth: "http://localhost:5789",
        quotes: "http://localhost:9934",
        opendata: "http://localhost:9123",
        words: "http://localhost:9774"
    };

    const prodSvcURLS = {
        auth: "https://ryauth-alone.now.sh",
        quotes: "http://ryquotes.now.sh",
        opendata: "https://engadget.com",
        words: "https://rywords.now.sh"
    };

    return process.env.NODE_ENV === "dev" ? devSvcURLS : prodSvcURLS;
}

exports.getSecrets = () => {
    const envTypes = ["dev", "prod", "test"];
    const currentEnv = process.env.NODE_ENV;
    if (envTypes.includes(currentEnv) === -1) {
        throw new Error(`NODE_ENV value of '${process.env.NODE_ENV}' is not one of 'dev', 'prod' or 'test'.`);
    }
    console.log("NODE_ENV for config is '%s'.", currentEnv);

    return {
        "db": process.env.db || nconf.get(`${currentEnv}:db`),
        "jwtSecret": process.env.jwtSecret || nconf.get(`${currentEnv}:jwtSecret`),
        "cookieSecret": process.env.cookieSecret || nconf.get(`${currentEnv}:cookieSecret`)
    };
}