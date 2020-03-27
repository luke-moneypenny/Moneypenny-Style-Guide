window.onload = function() {
  var hbColoursTemplate = document.getElementById('hbColoursTemplate').innerHTML;
  var compiled_hbColoursTemplate = Handlebars.compile(hbColoursTemplate);
  var rendered_hbColoursTemplate = compiled_hbColoursTemplate({

  	colour: [
 		{ var: "$white", hex: "#FFFFFF" },
 		{ var: "$black", hex: "#000000" },
 		{ var: "$blue", hex: "#509bf4" },
 		{ var: "$orange", hex: "#FF5039" },
 	]

  });
  document.getElementById('HBcolours').innerHTML = rendered_hbColoursTemplate;
}