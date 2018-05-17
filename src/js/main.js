require.config({
    paths: {
        "jquery": "util/jquery-1.8.3.min",
        "handlebars": "util/handlebars",
        "index": "app/index",
        "render": "app/render"
    }
});

require(["index"]);