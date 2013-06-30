this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["awesome-widget/awesome"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1>Hello Aura !</h1>";
  });

this["Handlebars"]["templates"]["awesome-widget/detail"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<!--<script type=\"text/template\" id=\"forecast-detail-template\">-->\n    <div class=\"modal hide fade\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h3><%= city %>, <%= state %></h3>\n      </div>\n      <div class=\"modal-body\">           \n        <div class=\"form-horizontal\">\n          <div class=\"control-group\">\n            <label class=\"control-label\">Temperature</label>\n            <div class=\"controls\"><%= temperature %>°F</div>\n          </div>\n          <div class=\"control-group\">\n            <label class=\"control-label\">Feels Like</label>\n            <div class=\"controls\"><%= feelslike %>°F</div>\n          </div>\n          <div class=\"control-group\">\n             <label class=\"control-label\">Wind</label>\n             <div class=\"controls\"><%= wind %> MPH</div>\n          </div>\n        </div>          \n      </div>\n    </div>\n<!--</script>-->";
  });

this["Handlebars"]["templates"]["awesome-widget/forecast"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<!--<script type=\"text/template\" id=\"forcast-template\">-->\n    <td><a class=\"route\" href=\"/detail/<%= zip %>\"><i class=\"detail icon-search\"></i></a></td>\n    <td><img src=\"<%= url %>\" /></td>\n    <td><%= city %></td>\n    <td><%= state %></td>\n    <td><%= zip %></td>\n    <td><%= temperature %>°F</a></td>\n    <td><a href=\"#\"><i class=\"delete icon-trash\"></i></td>\n<!--</script>-->";
  });

this["Handlebars"]["templates"]["awesome-widget/index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"navbar navbar-inverse\">\n  <div class=\"navbar-inner\">\n    <div class=\"container\">\n      <div class=\"brand\">Weather</div>\n    </div>\n  </div>\n</div>\n\n<form id=\"weather\" class=\"form-search\">\n    <input type=\"text\" id=\"zip\" placeholder=\"Enter a zip code…\" class=\"input-medium search-query\">\n    <button id=\"search\" type=\"submit\" class=\"btn\">Search</button>\n    <div class=\"alert alert-error\"></div>\n</form>\n    \n<table id=\"output\" class=\"table table-striped\">\n    <caption>Forecast Results</caption>\n    <thead>\n        <tr>\n            <th></th><th></th>\n            <th>City</th>\n            <th>State</th>\n            <th>Zip</th>\n            <th>Temperature</th>\n            <th></th>\n        </tr>\n    </thead>\n    <tbody>\n    </tbody>\n</table>";
  });