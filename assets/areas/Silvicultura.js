
/*<ul>
	<li type = 'circle'>Presentar solicitud que especifique la cantidad de plantas y especies, nombre completo y teléfono del solicitante,número de beneficiarios, municipio y localidad donde se establecerá la plantación.</li>
	<li type = 'circle'>Identificación Oficial.</li>
	<li type = 'circle'>CURP.</li>
	<li type = 'circle'>Comprobante de domicilio.</li>
	<li type = 'circle'>Acreditación de la propiedad o posesión del lugar donde se llevará a cabo el proyecto.</li>
	<li type = 'circle'>Indispensable contar con agua en el predio minimo 0.5 has. (No maguey).</li>
	</ul>

"NombrePrograma":"",
"DescripcionPrograma":"",
"TipoApoyo":"",
"RequisitoBeneficiario":"",
"RequisitoBeneficio":"",
"ResponsablePrograma":"",
"PuestoResponsable":"",
"Telefono":"",
"Correo":"",
"Enlace":"",
"AvisoPrivacidad":"",
"ReglasOperacion":""
*/
/*************************************************************Silvicultura**************************************************************************************/
const silvicultura = [
	{
		  "NombrePrograma":"Entrega de crías de peces",
	    "DescripcionPrograma":"Contribuir a la seguridad alimentaria mediante el incentivo a la producción y siembra masiva de crías de peces de tilapia, trucha, carpa y bagre en cuerpos de agua del Estado.",
	    "TipoApoyo":"<ul><li type = 'circle'>Mojarra</li><li type = 'circle'>Tilapia</li><li type = 'circle'>Carpa</li><li type = 'circle'>Bagre</li></ul>",
			"RequisitoBeneficiario":"<ul><li type = 'circle'>Presentar la solicitud de apoyo y cumplir los requisitos generales y específicos que correspondan al apoyo solicitado.</li><li type = 'circle'>No estén recibiendo apoyo para el mismo concepto de algún programa federal o estatal que duplique apoyos.</li><li type = 'circle'>Identificación Oficial.</li><li type = 'circle'>CURP.</li><li type = 'circle'>RFC.</li><li type = 'circle'>Comprobante de domicilio.</li><li type = 'circle'>Presentar registro Estatal de pesca y acuacultura (REPA).</li><li type = 'circle'>Entregar aviso de cosecha del ciclo de producción anterior.</li></ul>",
			"RequisitoBeneficio":"<ul><li type = 'circle'>Identificación oficial.</li><li type = 'circle'>Oficio de autorización.</li><li type = 'circle'>Folio del solicitante.</li></ul>",
			"ResponsablePrograma":"",
			"PuestoResponsable":"",
			"Telefono":"",
			"Correo":"",
			"Enlace":"",
			"AvisoPrivacidad":"",
			"ReglasOperacion":""
	},
	{
			"NombrePrograma":"Entrega de Árboles frutales y maguey",
			"DescripcionPrograma":"Fomentar el establecimiento de árboles frutales de alta demanda en el mercado, para mejorar los ingresos económicos de los productores e incidir en la estrategia de seguridad alimentaria.",
			"TipoApoyo":"<ul><li type = 'circle'>Desde 75 hasta 400 árboles frutales por productor por hectárea con un máximo de 2 hectáreas.</li><li type = 'circle'>Manzana, Higo, Granda y Guayaba</li><ul>",
			"RequisitoBeneficiario":"<ul><li type = 'circle'>Presentar solicitud que especifique la cantidad de plantas y especies, nombre completo y teléfono del solicitante,número de beneficiarios, municipio y localidad donde se establecerá la plantación.</li><li type = 'circle'>Identificación Oficial.</li><li type = 'circle'>CURP.</li><li type = 'circle'>Comprobante de domicilio.</li><li type = 'circle'>Acreditación de la propiedad o posesión del lugar donde se llevará a cabo el proyecto.</li><li type = 'circle'>Indispensable contar con agua en el predio minimo 0.5 has. (No maguey).</li></ul>",
			"RequisitoBeneficio":"<ul><li type = 'circle'>Identificación oficial.</li><li type = 'circle'>Oficio de autorización.</li><li type = 'circle'>Folio del solicitante.</li></ul>",
			"ResponsablePrograma":"",
			"PuestoResponsable":"",
			"Telefono":"",
			"Correo":"",
			"Enlace":"",
			"AvisoPrivacidad":"",
			"ReglasOperacion":""

	}


]

class Silvicultura {
	constructor(data, i){
		this._NombrePrograma = data.NombrePrograma;
    this._DescripcionPrograma = data.DescripcionPrograma;
    this._TipoApoyo = data.TipoApoyo;
		this._RequisitoBeneficiario = data.RequisitoBeneficiario;
		this._RequisitoBeneficio = data.RequisitoBeneficio;
		this._ResponsablePrograma = data.ResponsablePrograma;
		this._PuestoResponsable = data.PuestoResponsable;
		this._Telefono = data.Telefono;
		this._Correo = data.Correo;
		this._Enlace = data.Enlace;
		this._AvisoPrivacidad = data.AvisoPrivacidad;
		this._ReglasOperacion = data.ReglasOperacion;
		this._base = `
		<table width="100%" border="1">
			<tr><td bgcolor="#092432"colspan="3"><center><h5><font color ="#ffffff"<b>`+ this._NombrePrograma +`</b></font></h5></center></td></tr>
			<tr><td><b>Descripción del programa: </b></td><td>`+ this._DescripcionPrograma +`</td><td rowspan="4"><b>Responsable del Programa: </b><br>`+ this._ResponsablePrograma +`<br><br>`+ this._PuestoResponsable +`<br><center>`+ this._Telefono +`<center><br><a href="mailto: `+ this._Correo +`">`+ this._Correo +`</a><br><br><center><a href="" target="_blank"><span class="btn btn-info">Ingresar Solicitud</span></a></center><br><center><a href="`+ this._AvisoPrivacidad +`" data-toggle="modal" >Aviso de Privacidad</a></center></td></tr>
			<tr><td bgcolor="#ccc"><b>Tipo de apoyo: </b></td><td bgcolor="#ccc">`+ this._TipoApoyo +`</td></tr>
			<tr><td><b>Requisitos para ser beneficiario: </b></td><td> `+ this._RequisitoBeneficiario +`</td></tr>
			<tr><td bgcolor="#ccc"><b>Requisito para recoger beneficio: </b></td><td bgcolor="#ccc"> `+ this._RequisitoBeneficio +`</td></tr>
			<tr><td bgcolor="#ccc" colspan="3"><center><b>Información Adicional</b></center></td></tr>
			<tr><td colspan="3"><div class="ligas-minicards"><a href="`+ this._ReglasOperacion +`" target="_blank"><img src="../../img/iconos/pdf.svg"><p>Reglas de Operación</p></a></div></td></tr>
			</table>
			<table border = "0">
			<tr><td colspan="3"><br></td></tr>
			</table>
		`;
  }

  getHTML(){
    return this._base;
  }

}

function renderSilvicultura(){
  silvicultura.forEach(function(_app_, i){
    const newSilvicultura = new Silvicultura(_app_, i);
     $(".rubrosDeskSilvicultura").append(newSilvicultura.getHTML());
  });
}

class SilviculturaMob {
	constructor(data, i){
		this._NombrePrograma = data.NombrePrograma;
    this._DescripcionPrograma = data.DescripcionPrograma;
    this._TipoApoyo = data.TipoApoyo;
		this._RequisitoBeneficiario = data.RequisitoBeneficiario;
		this._RequisitoBeneficio = data.RequisitoBeneficio;
		this._ResponsablePrograma = data.ResponsablePrograma;
		this._PuestoResponsable = data.PuestoResponsable;
		this._Telefono = data.Telefono;
		this._Correo = data.Correo;
		this._Enlace = data.Enlace;
		this._AvisoPrivacidad = data.AvisoPrivacidad;
		this._ReglasOperacion = data.ReglasOperacion;
    this._base = `
		<table width="100%" border="1">
			<tr><td bgcolor="#092432"><center><h5><font color="#ffffff" <b>`+ this._NombrePrograma +`</b></font></h5></center></td></tr>
			<tr><td bgcolor="#ccc"><b><center>Descripción del programa:</center></b></td></tr>
			<tr><td>`+ this._DescripcionPrograma +`</td></tr>
			<tr><td bgcolor="#ccc"><b><center>Tipo de apoyo:</center></b></td></tr>
			<tr><td>`+ this._TipoApoyo +`</td></tr>
			<tr><td bgcolor="#ccc"><b><center>Requisitos para ser beneficiario:</center></b></td></tr>
			<tr><td>`+ this._RequisitoBeneficiario +`</td></tr>
			<tr><td bgcolor="#ccc"><b><center>Requisito para recoger beneficio:</center></b></td></tr>
			<tr><td>`+ this._RequisitoBeneficio +`</td></tr>
			<tr><td bgcolor="#ccc"><b><center>Responsable del Programa:</center></b></td></tr>
			<tr><td><br><center>`+ this._ResponsablePrograma +`<center><br>`+ this._PuestoResponsable +` <br><center>`+ this._Telefono +`<center><br><a href="mailto: `+ this._Correo +`">`+ this._Correo +`</a><br><br><center><a href="`+ this._Enlace +`" target="_blank"><span class="btn btn-info">Ingresar Solicitud</span></a></center><br><center><a href="`+ this._AvisoPrivacidad +`" data-toggle="modal">Aviso de Privacidad</a></center></td></tr>
			<tr><td bgcolor="#ccc" colspan="3">	<center><b>Información Adicional</b></center></td></tr>
			<tr><td colspan="3"><div class="ligas-minicards"><a href="`+ this._ReglasOperacion +`" target="_blank"><img src="../../img/iconos/pdf.svg"><p>Reglas de Operación</p></a></div></td></tr>
			</table>
			<table border = "0">
			<tr><td colspan="3"><br></td></tr>
			</table>
    `;
  }

  getHTML(){
    return this._base;
  }

}

function renderSilviculturaMob(){
  silvicultura.forEach(function(_app_, i){
    const newSilviculturaMob = new SilviculturaMob(_app_, i);
     $("#rmSilvicultura").append(newSilviculturaMob.getHTML());
  });
}
