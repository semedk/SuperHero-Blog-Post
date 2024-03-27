(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['404'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<main class=\"error-container\">\r\n    <h2>404</h2>\r\n    <h3>Woops!  We couldn't find that page.</h3>\r\n</main>";
},"useData":true});
templates['batPage'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"characterImage"),depth0,{"name":"characterImage","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!DOCTYPE html>\r\n<html>\r\n\r\n<head>\r\n    <title> Project 2 </title>\r\n    <link rel=\"stylesheet\" href=\"style.css\">\r\n    <script src=\"index.js\" charset=\"utf-8\" defer></script>\r\n</head>\r\n\r\n<body>\r\n    <br>\r\n    <div class=\"pages\">\r\n        <h3 id=\"home\"> <a href=\"http://localhost:5000\">Home </a> </h3>\r\n        <h3 id=\"rating\"><a href=\"http://localhost:5000/rating\">Rating </a></h3>\r\n    </div>\r\n\r\n    <div class=\"Heroes\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"batmanData") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":8},"end":{"line":20,"column":17}}})) != null ? stack1 : "")
    + "    </div>\r\n\r\n    <h1> Add a member </h1>\r\n\r\n    <label for=\"thename\" class=\"input\" id=\"nameinput\"> Name: </label>\r\n    <input type=\"text\" id=\"thename\"><br><br>\r\n\r\n    <label for=\"theimg\" class=\"input\" id=\"imginput\"> URL: </label>\r\n    <input type=\"text\" id=\"theimg\"><br><br>\r\n\r\n    <button type=\"button\" class=\"thebutton\">Submit</button><br><br>\r\n\r\n    <h1> Comment: </h1>\r\n    <textarea id=\"comments\" name=\"comments\" rows=\"4\" cols=\"50\"></textarea><br>\r\n\r\n    <button type=\"button\" class=\"thebutton2\">Submit</button><br><br>\r\n\r\n    <h1> Comment Section: </h1>\r\n</body>\r\n</html>";
},"usePartial":true,"useData":true});
templates['batRating'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <option value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":20,"column":23},"end":{"line":20,"column":31}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":20,"column":33},"end":{"line":20,"column":41}}}) : helper)))
    + "</option>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!DOCTYPE html>\r\n<html>\r\n\r\n<head>\r\n    <title> Assignment 2 </title>\r\n    <link rel=\"stylesheet\" href=\"style.css\">\r\n    <script src=\"index2.js\" charset=\"utf-8\" defer></script>\r\n</head>\r\n\r\n<body>\r\n    <div class=\"pages\">\r\n        <h3 id=\"home\"> <a href=\"http://localhost:5000\">Home </a> </h3>\r\n        <h3 id=\"rating\"><a href=\"http://localhost:5000/rating\">Rating </a></h3>\r\n    </div>\r\n\r\n    <h1> Pick a Hero </h1>\r\n\r\n    <select name=\"bat\" id=\"bat\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"batmanData") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":8},"end":{"line":21,"column":17}}})) != null ? stack1 : "")
    + "    </select>\r\n\r\n    <h1> Give it a scale from 1-10 </h1>\r\n\r\n    <input type=\"number\" id=\"scale\" name=\"scale\" min=\"1\" max=\"10\"/> <br><br>\r\n\r\n    <button type=\"button\" class=\"thebutton3\">Submit</button>\r\n\r\n</body>\r\n</html>";
},"useData":true});
templates['partials/characterImage'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":1,"column":9},"end":{"line":1,"column":17}}}) : helper)))
    + "\" class=\"Batfamily\">\r\n    <h2> "
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":2,"column":9},"end":{"line":2,"column":17}}}) : helper)))
    + " </h2>\r\n\r\n    <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"photourl") || (depth0 != null ? lookupProperty(depth0,"photourl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"photourl","hash":{},"data":data,"loc":{"start":{"line":4,"column":14},"end":{"line":4,"column":26}}}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":4,"column":33},"end":{"line":4,"column":41}}}) : helper)))
    + "\">\r\n</div>";
},"useData":true});
})();