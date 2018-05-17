require(["jquery", "handlebars", "render"], function($, handlebars, render) {
    $.ajax({
        url: "/api/data",
        dataType: "json",
        success: function(res) {
            console.log(res);
            render(res, $("#nav-tpl"), $(".nav ul"));
        },
        error: function(error) {
            console.log(error);
        }
    })
});