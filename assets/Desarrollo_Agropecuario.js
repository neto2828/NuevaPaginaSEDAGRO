const rubros = [
	{
			"url":"",
	    "foto":"../img/Areas/Carlos.jpg",
	    "nombre":"Carlos Muñiz Rodríguez",
			"puesto":"Secretario de Desarrollo<BR>Agropecuario",
			"facebook":"https://www.facebook.com/pg/carlosmunizrodriguez1/",
			"twitter":"https://twitter.com/Car_Muniz"
	},
	{
			"url":"",
			"foto":"../img/Areas/Arturo.jpg",
			"nombre":"Arturo Avila Brianza",
			"puesto":"Subsecretario de Administración<br>y Gestión social",
			"facebook":"https://www.facebook.com/arturo.avilabrianza",
			"twitter":"https://twitter.com/arturoab"
	},
	{
			"url":"../pag/areas/Desarrollo_Agropecuario.html",
			"foto":"../img/Areas/Jose.jpg",
			"nombre":"José Luis	González León",
			"puesto":"Subsecretario de Desarrollo<br>Agropecuario",
			"facebook":"https://www.facebook.com/luisglezleon/",
			"twitter":"https://twitter.com/JoseLuiSedagro"
	},
	{
			"url":"",
			"foto":"../img/Areas/Cesar.jpg",
			"nombre":"Edgar Cesar Arizpe Fernández",
			"puesto":"Subsecretario de Desarrollo<br>Rural",
			"facebook":"https://www.facebook.com/ecarizpe/",
			"twitter":"https://twitter.com/ecarizpe"
	},
	{
			"url":"",
			"foto":"../img/Areas/Reyna.jpg",
			"nombre":"Reyna Juana Monroy Barrera",
			"puesto":"Subsecretaria de Planeación<br>y Evaluación Sectorial",
			"facebook":"https://www.facebook.com/ReynaMonroyB/",
			"twitter":"https://twitter.com/REYNAMB"
	},
	{
			"url":"",
			"foto":"../img/Areas/Juan.jpg",
			"nombre":"José Juan	Viggiano Austria",
			"puesto":"Subsecretario de Agronegocios",
			"facebook":"https://www.facebook.com/IngJoseJuanviggianoaustria/",
			"twitter":"https://twitter.com/JoseJuanVA"
	}
]

class Rubros {
	constructor(data, i){
    this._url = data.url;
    this._foto = data.foto;
    this._nombre = data.nombre;
		this._puesto = data.puesto;
		this._facebook = data.facebook;
		this._twitter = data.twitter;
    this._base = `

		<div style="display: inline-block; margin: 1% 4%;">
			<div class="card">
				<a href="` + this._url + `">
					<div class="card-img-top">
					</div>
					<div class="card-body">
						<img src="` + this._foto + `" width="220" height="250">
						<h6 style="padding-top: 2%; margin: 0px 0px 8px;"><b>` + this._nombre + `</b></h6>
						<div class="secretario">` + this._puesto + `</div>
					</div>
				</a>
				<div class="botones" align="center">
					<button class="btn btn-primary custom-btn" onclick="window.open('` + this._facebook + `','_blank');"><i class="fab fa-facebook-square"></i></button>
					<button class="btn btn-secondary custom-btn" onclick="window.open('` + this._twitter + `','_blank');"><i class="fab fa-twitter"></i></button>
					<button class="btn btn-dark" onclick="window.open('` + this._url + `')"><i class="fas fa-globe"></i></button>
			</div><br>
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
    this._foto = data.foto;
    this._nombre = data.nombre;
		this._puesto = data.puesto;
		this._facebook = data.facebook;
		this._twitter = data.twitter;
    this._base = `

		<div style="display: inline-block; margin: 1% 4%;">
			<div class="card">
				<a href="` + this._url + `">
					<div class="card-img-top">
					</div>
					<div class="card-body">
						<img src="` + this._foto + `" width="220" height="250">
						<h6 style="padding-top: 2%; margin: 0px 0px 8px;"><b>` + this._nombre + `</b></h6>
						<div class="secretario">` + this._puesto + `</div>
					</div>
				</a>
				<div class="botones" align="center">
					<button class="btn btn-primary custom-btn" onclick="window.open('` + this._facebook + `','_blank');"><i class="fab fa-facebook-square"></i></button>
					<button class="btn btn-secondary custom-btn" onclick="window.open('` + this._twitter + `','_blank');"><i class="fab fa-twitter"></i></button>
					<button class="btn btn-dark" onclick="window.open('` + this._url + `')"><i class="fas fa-globe"></i></button>
			</div><br>
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
