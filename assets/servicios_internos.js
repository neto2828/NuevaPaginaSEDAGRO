const rubros = [
	{
		"url":"http://indicadores.sedagrohidalgo.site/",
	    "icono":"",
	    "nombre":"Plataforma para ingresar al Sistema Único de Información Rural."
	},

	{
		"url":"http://indicadores.sedagrohidalgo.site/",
			"icono":"",
			"nombre":"Sistema para captura de indicadores internos."
	},

	{
		"url":"indpo.html",
			"icono":"",
			"nombre":"Sistema para captura de indicadores de politica interna."
	},
	{
		"url":"http://ventanilla.sedagrohidalgo.site/",
			"icono":"",
			"nombre":"Sistema de Ventanilla Única de la SEDAGROH."
	},
	{
		"url":"riesgos.html",
			"icono":"",
			"nombre":"Formulario de Seguimiento de Riesgos."
	},
]

class Rubros {
	constructor(data, i){
    this._url = data.url;
    this._icono = data.icono;
    this._nombre = data.nombre;
    this._base = `

				<div class="col-md-2 col-6 ligas-minicards">
	<a href="` + this._url + `" target="_blank">
		<img src="` + this._icono + `">
		<p>` + this._nombre + `</p>
	</a>
</div>
    `;
  }

  getHTML(){
    return this._base;
  }

}

function renderRubros(){
  rubros.forEach(function(_app_, i){
    const newRubros = new Rubros(_app_, i);
     $(".rubrosDesk").append(newRubros.getHTML());
  });
}

class RubrosMob {
	constructor(data, i){
    this._url = data.url;
    this._icono = data.icono;
    this._nombre = data.nombre;
    this._base = `
		<div class="col-md-2 col-6 ligas-minicards">
<a href="` + this._url + `" target="_blank">
<img src="` + this._icono + `">
<p>` + this._nombre + `</p>
</a>
</div>
    `;
  }

  getHTML(){
    return this._base;
  }

}

function renderRubrosMob(){
  rubros.forEach(function(_app_, i){
    const newRubrosMob = new RubrosMob(_app_, i);
     $("#rm").append(newRubrosMob.getHTML());
  });
}
