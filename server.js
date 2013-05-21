var connect = require('connect');
connect.createServer(
    connect.static(__dirname)
).listen(5000);


logger.info("Listening on localhost:5000");
