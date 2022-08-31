
/*<ul>
	<li type = 'circle'>Presentar solicitud de apoyo dirigida al Secretario de Desarrollo Agropecuario del Estado de Hidalgo.</li>
	<li type = 'circle'>Mediante Acta de Asamblea, integrar un grupo de productores y/o beneficiarios, y con ellos, un Comité Pro proyecto, designando un presidente, un secretario y un tesorero y dos miembros de la contraloría social, entre los cuales esté representada la autoridad local según el tipo de tenencia del terreno que involucre el proyecto.</li>
	<li type = 'circle'>Copia de Identificación Oficial vigente (INE, IFE o Pasaporte).</li>
	<li type = 'circle'>Copia de Comprobante de domicilio vigente (No mayor a 3 meses).</li>
	<li type = 'circle'>Copia de Clave Única de Registro de Población (CURP).</li>
	<li type = 'circle'>Acreditación de la propiedad donde se realizará el proyecto.</li>
	<li type = 'circle'>Constancia que lo acredite como productor, expedida por la Presidencia Municipal.</li>
	<li type = 'circle'>Carta compromiso de aportar el 5% del costo total de la obra, (material de la región y mano de obra).</li>
	<li type = 'circle'>Carta bajo protesta de decir verdad, de no estar recibiendo apoyos iguales o similares.</li>
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
/*************************************************************Creditos**************************************************************************************/
const maquinaria = [
	{
		  "NombrePrograma":"Infraestructura para el Uso Colectivo, Almacenamiento y Aprovechamiento de Agua (ICAAA)",
	    "DescripcionPrograma":"Tiene por objetivo construir obras de infraestructura para captar y almacenar agua de lluvia, para mejorar el nivel socioeconómico de los habitantes del estado, promoviendo el uso sustentable de los recursos naturales como suelo, agua y vegetación en las actividades agrícolas, pecuarias y acuícolas.",
	    "TipoApoyo":"",
			"RequisitoBeneficiario":"<ul><li type = 'circle'>Presentar solicitud de apoyo dirigida al Secretario de Desarrollo Agropecuario del Estado de Hidalgo.</li><li type = 'circle'>Mediante Acta de Asamblea, integrar un grupo de productores y/o beneficiarios, y con ellos, un Comité Pro proyecto, designando un presidente, un secretario y un tesorero y dos miembros de la contraloría social, entre los cuales esté representada la autoridad local según el tipo de tenencia del terreno que involucre el proyecto.</li><li type = 'circle'>Copia de Identificación Oficial vigente (INE, IFE o Pasaporte).</li><li type = 'circle'>Copia de Comprobante de domicilio vigente (No mayor a 3 meses).</li><li type = 'circle'>Copia de Clave Única de Registro de Población (CURP).</li><li type = 'circle'>Acreditación de la propiedad donde se realizará el proyecto.</li><li type = 'circle'>Constancia que lo acredite como productor, expedida por la Presidencia Municipal.</li><li type = 'circle'>Carta compromiso de aportar el 5% del costo total de la obra, (material de la región y mano de obra).</li><li type = 'circle'>Carta bajo protesta de decir verdad, de no estar recibiendo apoyos iguales o similares.</li></ul>",
			"RequisitoBeneficio":"",
			"ResponsablePrograma":"C. Eliseo Chávez Zamora",
			"PuestoResponsable":"Director General para el Desarrollo Agropecuario y Maquinaria",
			"Telefono":"71-7 80-00 Ext. 8434",
			"Correo":"eliseo.chavez@hidalgo.gob.mx",
			"Enlace":"",
			"AvisoPrivacidad":"",
			"ReglasOperacion":"../../Reglas_Operacion/ICAAA.pdf"
	}


]

class Maquinaria {
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
			<tr><td><b>Descripción del programa: </b></td><td>`+ this._DescripcionPrograma +`</td><td rowspan="4"><b>Responsable del Programa: </b><br>`+ this._ResponsablePrograma +`<br><br>`+ this._PuestoResponsable +`<br><center>`+ this._Telefono +`<center><br><a href="mailto: `+ this._Correo +`">`+ this._Correo +`</a><br><br><center><a href="`+ this._AvisoPrivacidad +`" target="_blank"><span class="btn btn-info">Aviso de Privacidad</span></a></center></td></tr>
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

function renderMaquinaria(){
  maquinaria.forEach(function(_app_, i){
    const newMaquinaria = new Maquinaria(_app_, i);
     $(".rubrosDeskMaquinaria").append(newMaquinaria.getHTML());
  });
}

class MaquinariaMob {
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
			<tr><td><br><center>`+ this._ResponsablePrograma +`<center><br>`+ this._PuestoResponsable +` <br><center>`+ this._Telefono +`<center><br><a href="mailto: `+ this._Correo +`">`+ this._Correo +`</a><br><br><center><a href="`+ this._AvisoPrivacidad +`" target="_blank"><span class="btn btn-info">Aviso de Privacidad</span></a></center></td></tr>
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

function renderMaquinariaMob(){
  maquinaria.forEach(function(_app_, i){
    const newMaquinariaMob = new MaquinariaMob(_app_, i);
     $("#rmMaquinaria").append(newMaquinariaMob.getHTML());
  });
}
