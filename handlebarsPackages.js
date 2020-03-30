window.onload = function() {
  var compiled_hbColoursTemplate = Handlebars.compile(hbColoursTemplate);
  var rendered_hbColoursTemplate = compiled_hbColoursTemplate({

  	colour: [
 		{ var: "$orange", hex: "#FF5039" },
 		{ var: "$green", hex: "#38FE9E" },
 		{ var: "$blue", hex: "#8ABFFF" },
 		{ var: "$purple", hex: "#271833" },
 		{ var: "$white", hex: "#FFFFFF" },
 		{ var: "$black", hex: "#000000" },
 	]

  });
  document.getElementById('HBcolours').innerHTML = rendered_hbColoursTemplate;
}

/* Templates */

var hbColoursTemplate = '{{#each colour}}<div class="colourPod"><div class="colourPod__top" style="border-bottom: solid 5px {{this.hex}};"><h2>{{this.var}}</h2><p>{{this.hex}}</p></div><div class="colourPod__white"><p class="fnt-s" style="color:{{this.hex}};">Small font</p><p class="fnt-m" style="color:{{this.hex}};">Med font</p><p class="fnt-l" style="color:{{this.hex}};">Large font</p><p class="fnt-xl" style="color:{{this.hex}};">Extra large font</p></div><div class="colourPod__whitetext" style="background-color: {{this.hex}};"><p class="fnt-s">Small font</p><p class="fnt-m">Med font</p><p class="fnt-l">Large font</p><p class="fnt-xl">Extra large font</p></div><div class="colourPod__darktext" style="background-color: {{this.hex}};"><p class="fnt-s">Small font</p><p class="fnt-m">Med font</p><p class="fnt-l">Large font</p><p class="fnt-xl">Extra large font</p></div></div>{{/each}}';