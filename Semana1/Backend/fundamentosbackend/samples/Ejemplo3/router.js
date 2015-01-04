//router.js
function route(handler, pathname, response, postData) {
    console.log("Routing a new petition for" + pathname);
    if (typeof handler[pathname] === 'function') {
        handler[pathname](response, postData);
    } else {
        console.log("No request handler for " + pathname + " skipping");
        response.writeHead(404, {"Content-Type": "text/html"});
        response.write("404 Not Found");
        response.end();
    }
}

exports.route = route;
