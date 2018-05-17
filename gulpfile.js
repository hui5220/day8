var gulp = require("gulp");
var server = require("gulp-webserver");
var data = require("./src/data/data.json");

gulp.task("server", function() {
    gulp.src("src")
        .pipe(server({
            port: 8888,
            middleware: function(req, res, next) {
                if (req.url === '/api/data') {
                    res.end(JSON.stringify(data));
                }
                next();
            }
        }))
});