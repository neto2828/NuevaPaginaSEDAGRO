const comunicados = [
  {
    "image":"https://cdn.hidalgo.gob.mx/transicion/fondotransicion.png",
    "titulo":"Tómate un Café de Hidalgo",
    "descripcion":"Conoce a los productores de café del Estado",
    "link":"",
    "tipo":"fas fa-quote-left",
    "color":"#FFF",
    "size":"80%",
    "position":"center"
  },
  {
    "image":"https://cdn.hidalgo.gob.mx/transicion/fondotransicion.png",
    "titulo":"Sanción por Incumplimiento de la Ley de Desarrollo Pecuario",
    "descripcion":"Sanciones impuestas debido al Incumplimiento de los requisitos para la movilización pecuaria",
    "link":"https://sedagro.hidalgo.gob.mx/descargas/Sanciones_Pecuarias.pdf",
    "tipo":"fas fa-quote-left",
    "color":"#FFF",
    "size":"80%",
    "position":"center"
  },

  {
    "image":"https://cdn.hidalgo.gob.mx/transicion/fondotransicion.png",
    "titulo":"Ventanilla SEDAGROH",
    "descripcion":"Ventanilla de Programas Sociales, Servicios y Trámites ofrecidos por la SEDAGROH",
    "link":"https://sedagro.hidalgo.gob.mx/ventanilla.html",
    "tipo":"fas fa-quote-left",
    "color":"#FFF",
    "size":"80%",
    "position":"center"
  },

  {
    "image":"https://cdn.hidalgo.gob.mx/transicion/fondotransicion.png",
    "titulo":"Tianguis SEDAGROH",
    "descripcion":"Tianguis SEDAGROH",
    "link":"http://tianguis.sedagrohidalgo.site/",
    "tipo":"fas fa-quote-left",
    "color":"#FFF",
    "size":"80%",
    "position":"center"
  },
  {
    "image":"https://cdn.hidalgo.gob.mx/transicion/fondotransicion.png",
    //"image":"https://cdn.hidalgo.gob.mx/escudo-titular.png",
    "titulo":"Reportes Agroclimáticos",
    "descripcion":"Reportes Agroclimáticos del Estado de Hidalgo",
    "link":"https://sedagro.hidalgo.gob.mx/pag/agroclima.html",
    "tipo":"fas fa-quote-left",
    "color":"#FFF",
    "size":"80%",
    "position":"center"
  }
];
class comunicadosB {

  constructor(data, i){
    this._image = data.image;
    this._titulo = data.titulo;
    this._descripcion = data.descripcion;
    this._link = data.link;
    this._activ = (i == 0 ? "active" : "");
    this._base = `
      <div class="carousel-item ` + this._activ + `">
          <div style="min-height: 500px">
              <div class="noticiasBanner" style="
                  background-image: url('` + this._image + `');
                  background-size: cover;
                  background-repeat: no-repeat;
                  max-height: 500px;
                  min-height: 500px;
                  width: 100%;
                  background-color: #092432 ;
                  background-position: center;"
              >
                  <div class="informacionNoticia">
                    <h5>` + this._titulo + `</h5>
                    <hr class="hr-com">
                    <p>` + this._descripcion + `</p>
                    <div class="button-com"><a class="noticiasLink" href="` + this._link + `" target="_blank"><button type="button" class="btn btn-gob-transparent">VER MÁS</button></a></div>
                    <ol class="carousel-indicators" id="indicators-comunicados">
                      <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                      <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                      <li data-target="#carouselExampleControls" data-slide-to="2"></li>
                      <li data-target="#carouselExampleControls" data-slide-to="3"></li>
                      <li data-target="#carouselExampleControls" data-slide-to="4"></li>
                    </ol>
                  </div>
              </div>
          </div>
      </div>
    `;
  }

  getHTML(){
    return this._base;
  }
}

function ComunicadosBanner(){

  comunicados.forEach(function(_app_, i){
    const newcomunicadosB = new comunicadosB(_app_, i);
    $(".controls-com").append(newcomunicadosB.getHTML());
  });
}
