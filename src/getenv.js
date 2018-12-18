const urls = {
    dev: {
        server: "http://localhost:9873"
    },
    prod: {
        server: "https://rypdtsapi.now.sh"
    }
};
export default () => {
    return process.env.NODE_ENV === "development" ? urls.dev.server : urls.prod.server;
}