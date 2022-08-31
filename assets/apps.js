const APPS = [
  {
    nombre:"Llamada Segura Hidalgo",
    image: "https://cdn.hidalgo.gob.mx/www/apps/hidalgoseguro.png",
    desc: "La aplicación Llamada Segura Hidalgo, surge con la finalidad de ayudar a la ciudadanía para detectar los números utilizados en las extorsiones vía telefónica.<br><br>Al momento de la llamada y cuando el número coincida con la base de datos, inmediatamente aparecerá en la pantalla del dispositivo un aviso señalando que el teléfono del cual están intentando comunicarse, ha sido reportado y es probable se trate de un intento de extorsión.",
    urlas: "#",
    urlps:"https://play.google.com/store/apps/details?id=mx.gob.hidalgo.nomasextorsion"
  },
  {
    nombre:"Cartelera Cultural de Hidalgo",
    image: "https://cdn.hidalgo.gob.mx/www/apps/carteleracultural.png",
    desc: "Cartelera Cultural Hidalgo es una aplicación desarrollada por el Gobierno del Estado de Hidalgo en donde podrás enterarte de diversas actividades culturales (la mayoría gratuitas) como: cine, teatro, danza, literatura, música, artes visuales y gastronomía; organizadas por agrupaciones independientes, industrias creativas y la Secretaría de Cultura.<br><br>En esta aplicación podrás realizar filtros por categoría o infraestructura y conocer más detalles de las actividades como sinopsis, fechas, horarios, costos y enlaces a los sitios oficiales de los eventos.",
    urlas: "https://apps.apple.com/mx/app/cartelera-cultural-de-hidalgo/id1271523922",
    urlps:"https://play.google.com/store/apps/details?id=cic.carteleradigital"
  },
  {
    nombre:"Rutas Culturales",
    image: "https://cdn.hidalgo.gob.mx/www/apps/rutacultural.png",
    desc: "México cuenta con una gran diversidad de climas, flora y fauna delinean paisajes en los cuales se aprecia una multiplicidad de escenarios como cuencas, serranías, valles y planicies. Hidalgo por su parte, como todo el país, tiene una variada diversidad natural y cultural, en conjunto con su rica historia.  <br><br>Rutas Culturales de Hidalgo, es una app mediante la cual podrás consultar regiones y lugares de interés que comparten elementos históricos, lingüísticos y económicos, entre otras características, para conocer, reconocer y valorar la riqueza cultural de nuestro Estado, permitiéndote además, seleccionar tus puntos de interés para construir tus propios recorridos culturales, apoyar tu actividad académica o simplemente, explorar, promover y difundir nuestro patrimonio.",
    urlas: "#",
    urlps:"https://play.google.com/store/apps/details?id=hidalgo.cultura.rutasculturales"
  },
  {
    nombre:"CiEnArtes",
    image: "https://cdn.hidalgo.gob.mx/www/apps/cienartes.png",
    desc: "Te presentamos CiEnArtes, la aplicación que te permite revisar de forma rápida e intuitiva, la cartelera del Séptimo Festival Nacional del Conocimiento y los 100 Encuentros de Artes, Ciencias y Humanidades en Hidalgo.<br><br>Al descargar y registrarte podrás disfrutar de una serie de beneficios:<br>1. Consultar la información de todos los eventos del festival.<br>2. Asegurar tu lugar en las actividades que más te interesen.<br>3. Otorgarte una constancia electrónica de asistencia al festival.<br>4. Acceso a un mapa interactivo que te permite localizar los espacios más relevantes de los municipios participantes.",
    urlas: "https://apps.apple.com/mx/app/cienartes/id1441333174",
    urlps:"https://play.google.com/store/apps/details?id=io.planeacion.cienartes"
  },
  {
    nombre:"Contraloría Hgo",
    image: "https://cdn.hidalgo.gob.mx/www/apps/app.png",
    desc: "Valida la información de contratistas y/o proveedores registrados en DIRECCIÓN GENERAL DE PADRONES Y PROCEDIMIENTOS DE CONTRATACIÓN DEL GOBIERNO DEL ESTADO DE HIDALGO<br><br>Mediante el lector QR podrás validar en todo momento el status del licitante para verificar si cumple con los lineamientos en normatividad gubernamental.",
    urlas: "https://apps.apple.com/mx/app/contraloria-hgo/id1321244009",
    urlps:"https://play.google.com/store/apps/details?id=com.contraloria"
  },

];

class Card {

  constructor(data, i){
    this._nombre = data.nombre;
    this._url = data.url;
    this._url_image = data.image;
    this._base = `
       <div class="col-lg-2 col-md-3 col-sm-6 cards">
        <a href="" onclick="modalinfo(` + i + `);" data-toggle="modal" data-target="#modal-apps">
          <div class="apps">
            <img src="` + this._url_image + `">
            <h5>` + this._nombre + `</h5>
            <div class=" btn-app">
              <button type="button" class="btn btn-gobpink">Ver App</button>
            <div>
          </div>
        </a>
        </div>
    `;
  }

  getHTML(){
    return this._base;
  }
}
  function CardsP(){
      APPS.forEach(function(_app_, i){
        const newCard = new Card(_app_, i);
        $(".row-apps").append(newCard.getHTML());
      });
      if($(window).width() < 998){
        $("#cards").addClass("collapse");
      };
};
 function modalinfo(position){
  console.log(position);
  $("#NombreApp").text(APPS[position].nombre);
  $("#DescApp").html(APPS[position].desc);
  $("#appstore").attr("href",APPS[position].urlas);
  $("#playstore").attr("href",APPS[position].urlps);
  $("#modal-apps").modal("show");

  if($("#appstore").attr("href") == "#"){
    $("#appstore").css("display", "none");
  }else{
    $("#appstore").css("display", "flex");
  };
  if($("#playstore").attr("href") == "#"){
    $("#playstore").css("display", "none");
  }else{
    $("#playstore").css("display", "flex");
  };

};
