var templateScript = $("#sampleTemplate").html();

var template = Handlebars.compile(templateScript);

var exData = {name :[{firstName:"xyz",lastName:"abc"},{firstName:"pqr",lastName:"mpq"}]};

//$(document.body).append(template (exData)); //alternate way of display

$("#nameList").html(template(exData));
