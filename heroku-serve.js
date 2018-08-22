var liveServer = require("live-server");
const port = process.env.PORT || 8080;
const host = process.env.IP || "127.0.0.1";

var params = {
    port: port, // Set the server port. Defaults to 8080.
    host: host, // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
    root: "/www", // Set root directory that's being served. Defaults to cwd.
    open: false, // When false, it won't load your browser by default.
//    ignore: 'scss,my/templates', // comma-separated string for paths to ignore
    file: "index.html", // When set, serve this file for every 404 (useful for single-page applications)
    wait: 0, // Waits for all changes, before reloading. Defaults to 0 sec.
    mount: [['/', './www']], // Mount a directory to a route.
    logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
    middleware: [function(req, res, next) { next(); }] // Takes an array of Connect-compatible middleware that are injected into the server middleware stack
};
liveServer.start(params);