const rubros = [
	{
		"url":"https://ruts.hidalgo.gob.mx/ver/8860",
	    "icono":"",
	    "nombre":"Asesoría para el Desarrollo de Productos y la Comercialización."
	},
	{
		"url":"https://ruts.hidalgo.gob.mx/ver/8865",
	    "icono":"",
	    "nombre":"Asistencia Técnica y Capacitación Pecuaria"
	},
	{
		"url":"https://ruts.hidalgo.gob.mx/ver/603",
			"icono":"",
			"nombre":"Banco de semen e Inseminación Artificial en Ovinos."
	},
	{
		"url":"https://ruts.hidalgo.gob.mx/ver/674",
			"icono":"",
			"nombre":"Capacitación Acuícola y Pesquera"
	},
	{
		"url":"https://ruts.hidalgo.gob.mx/ver/1575",
			"icono":"",
			"nombre":"Capacitación en Elaboración de Quesos y Derivados Lácteos"
	},
	{
		"url":"https://ruts.hidalgo.gob.mx/ver/1573",
			"icono":"",
			"nombre":"Capacitación en Nutrición y Manejo de Ganado Lechero."
	},
	{
		"url":"https://ruts.hidalgo.gob.mx/ver/1574",
			"icono":"",
			"nombre":"Capacitación en Inseminación Artificial en Bovinos Leche"
	},
	{
		"url":"https://ruts.hidalgo.gob.mx/ver/1781",
			"icono":"",
			"nombre":"Captación de leche en Centros de Acopio."
	},
	{
		"url":"https://ruts.hidalgo.gob.mx/ver/8863",
			"icono":"",
			"nombre":"Constitución de Sociedades."
	},
	{
		"url":"https://ruts.hidalgo.gob.mx/ver/1572",
			"icono":"",
			"nombre":"Constitución de grupos de productores de leche."
	},
	{
		"url":"https://ruts.hidalgo.gob.mx/ver/1780",
			"icono":"",
			"nombre":"Laboratorio de constatación de leche."
	},
	{
		"url":"https://ruts.hidalgo.gob.mx/ver/8867",
			"icono":"",
			"nombre":"Siembra de Crías de Peces"
	},
	{
		"url":"https://ruts.hidalgo.gob.mx/ver/8862",
			"icono":"",
			"nombre":"Asesoría para el Trámite de la Membresía GS1 para la Trazabilidad en Productos Agropecuarios"
	},
	{
		"url":"https://ruts.hidalgo.gob.mx/ver/609",
			"icono":"",
			"nombre":"Entrega de Paquetes de Conejos"
	},
	{
		"url":"https://ruts.hidalgo.gob.mx/ver/7629",
			"icono":"",
			"nombre":"Componente Equipamiento de Distritos de Riego."
	},
	{
		"url":"https://ruts.hidalgo.gob.mx/ver/7628",
			"icono":"",
			"nombre":"Componente Rehabilitación, Modernización y Tecnificación de Distritos de Riego."
	},
	{
		"url":"https://ruts.hidalgo.gob.mx/ver/7632",
			"icono":"",
			"nombre":"Componente Rehabilitación, Modernización, Tecnificación, Equipamiento de Unidades de Riego y Proyectos Productivos en Zonas de Atención Prioritaria."
	},
	{
		"url":"../pag/servint.html",
			"icono":"",
			"nombre":"Servicios internos."
	}
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
