define([
    'jquery',
    'handlebars'
], function($, handlebars) {
    function render(data, tpl, target) {
        var source = tpl.html(); //获取模板
        var template = handlebars.compile(source);
        var html = template(data);
        target.html(html);
    }
    return render;
});