/*<ul>
	<li type = 'circle'>Presentar la solicitud de apoyo y cumplir los requisitos generales y específicos que correspondan al apoyo solicitado.</li>
	<li type = 'circle'>Identificación Oficial.</li>
	<li type = 'circle'>CURP.</li>
	<li type = 'circle'>Comprobante de domicilio.</li>
	<li type = 'circle'>Acreditación de superficie cultivable propia.</li>
	<li type = 'circle'>Demostrar que las tierras que se sembrarán son de riego (vales, concesión o recibo).</li>
	<li type = 'circle'>Contrato de arrendamiento validado por autoridades competentes.</li>
	<li type = 'circle'>Georeferencia del predio donde se va a sembrar.</li>
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
/*************************************************************Ganaderia**************************************************************************************/
const leche = [
  {
    "NombrePrograma": "Inseminación Artificial en Bovinos Leche",
    "DescripcionPrograma": "Lograr alta calidad genética de los rebaños, así como una mayor producción de leche bovina.",
    "TipoApoyo": "Del 100% consistente en tratamientos hormonales, dosis de semen (sexado o no sexado) y asistencia técnica especializada.",
    "RequisitoBeneficiario": "<ul><li type = 'circle'>Presentar solicitud de apoyo dirigida a la persona titular de la Secretaría, por conducto de la Unidad Administrativa correspondiente.</li><li type = 'circle'>Identificación Oficial vigente (INE o IFE).</li><li type = 'circle'>Registro Único de Población (CURP).</li><li type = 'circle'>Comprobante de domicilio (No mayor a tres meses).</li><li type = 'circle'>Documento que acredita su incorporación en el Padrón Ganadero Nacional (UPP), expedido por el Sistema Nacional de Identificación Individual de Ganado (SINIIGA).</li></ul>",
    "RequisitoBeneficio": "<ul><li type = 'circle'>Identificación oficial.</li><li type = 'circle'>Oficio de autorización.</li><li type = 'circle'>Folio del solicitante.</li></ul>",
    "ResponsablePrograma": "Leonardo Olguín Prado",
    "PuestoResponsable": "Director General de Fomento Lechero",
    "Telefono": "+52 (771) 71 78000 Ext. 8610",
    "Correo": "leonardo.olguin@hidalgo.gob.mx",
    "Enlace": "",
    "AvisoPrivacidad": "",
    "ReglasOperacion": "http://sedagro.hidalgo.gob.mx/descargas/CONVOCATORIA%20SEDAGROH%202020.pdf"
  },
  {
    "NombrePrograma": "Entrega de Refractómetros",
    "DescripcionPrograma": "Dotar con refractómetros a los Centros de Acopio de Leche, establecidos para apoyar a los productores lecheros en sus actividades.",
    "TipoApoyo": "1 refractómetro por centro de acopio de leche.",
    "RequisitoBeneficiario": "<ul><li type = 'circle'>Presentar solicitud de apoyo dirigida a la persona titular de la Secretaría, por conducto de la Unidad Administrativa correspondiente.</li><li type = 'circle'>Acta Constitutiva del Centro de Acopio.</li><li type = 'circle'>Identificación Oficial vigente (INE o IFE) del Representante Legal.</li><li type = 'circle'>Registro Único de Población (CURP) del Representante Legal.</li><li type = 'circle'>Comprobante de domicilio (No mayor a tres meses) de las oficinas del Centro de Acopio.</li></ul>",
    "RequisitoBeneficio": "<ul><li type = 'circle'>Identificación oficial.</li><li type = 'circle'>Oficio de autorización.</li><li type = 'circle'>Folio del solicitante.</li></ul>",
    "ResponsablePrograma": "Leonardo Olguín Prado",
    "PuestoResponsable": "Director General de Fomento Lechero",
    "Telefono": "+52 (771) 71 78000 Ext. 8610",
    "Correo": "leonardo.olguin@hidalgo.gob.mx",
    "Enlace": "",
    "AvisoPrivacidad": "",
    "ReglasOperacion": "http://sedagro.hidalgo.gob.mx/descargas/CONVOCATORIA%20SEDAGROH%202020.pdf"
  }


]

class Leche {
  constructor(data, i) {
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
			<tr><td bgcolor="#092432"colspan="3"><center><h5><font color ="#ffffff"<b>` + this._NombrePrograma + `</b></font></h5></center></td></tr>
			<tr><td><b>Descripción del programa: </b></td><td>` + this._DescripcionPrograma + `</td><td rowspan="4"><b>Responsable del Programa: </b><br>` + this._ResponsablePrograma + `<br><br>` + this._PuestoResponsable + `<br><center>` + this._Telefono + `<center><br><a href="mailto: ` + this._Correo + `">` + this._Correo + `</a><br><br><center><a href="` + this._AvisoPrivacidad + `" target="_blank"><span class="btn btn-info">Aviso de Privacidad</span></a></center></td></tr>
			<tr><td bgcolor="#ccc"><b>Tipo de apoyo: </b></td><td bgcolor="#ccc">` + this._TipoApoyo + `</td></tr>
			<tr><td><b>Requisitos para ser beneficiario: </b></td><td> ` + this._RequisitoBeneficiario + `</td></tr>
			<tr><td bgcolor="#ccc"><b>Requisito para recoger beneficio: </b></td><td bgcolor="#ccc"> ` + this._RequisitoBeneficio + `</td></tr>
			<tr><td bgcolor="#ccc" colspan="3"><center><b>Información Adicional</b></center></td></tr>
			<tr><td colspan="3"><div class="ligas-minicards"><a href="` + this._ReglasOperacion + `" target="_blank"><img src="../../img/iconos/pdf.svg"><p>Reglas de Operación</p></a></div></td></tr>
			</table>
			<table border = "0">
			<tr><td colspan="3"><br></td></tr>
			</table>
		`;
  }

  getHTML() {
    return this._base;
  }

}

function renderLeche() {
  leche.forEach(function(_app_, i) {
    const newLeche = new Leche(_app_, i);
    $(".rubrosDeskLeche").append(newLeche.getHTML());
  });
}

class LecheMob {
  constructor(data, i) {
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
			<tr><td bgcolor="#092432"><center><h5><font color="#ffffff" <b>` + this._NombrePrograma + `</b></font></h5></center></td></tr>
			<tr><td bgcolor="#ccc"><b><center>Descripción del programa:</center></b></td></tr>
			<tr><td>` + this._DescripcionPrograma + `</td></tr>
			<tr><td bgcolor="#ccc"><b><center>Tipo de apoyo:</center></b></td></tr>
			<tr><td>` + this._TipoApoyo + `</td></tr>
			<tr><td bgcolor="#ccc"><b><center>Requisitos para ser beneficiario:</center></b></td></tr>
			<tr><td>` + this._RequisitoBeneficiario + `</td></tr>
			<tr><td bgcolor="#ccc"><b><center>Requisito para recoger beneficio:</center></b></td></tr>
			<tr><td>` + this._RequisitoBeneficio + `</td></tr>
			<tr><td bgcolor="#ccc"><b><center>Responsable del Programa:</center></b></td></tr>
			<tr><td><br><center>` + this._ResponsablePrograma + `<center><br>` + this._PuestoResponsable + ` <br><center>` + this._Telefono + `<center><br><a href="mailto: ` + this._Correo + `">` + this._Correo + `</a><br><br><center><a href="` + this._AvisoPrivacidad + `" target="_blank"><span class="btn btn-info">Aviso de Privacidad</span></a></center></td></tr>
			<tr><td bgcolor="#ccc" colspan="3">	<center><b>Información Adicional</b></center></td></tr>
			<tr><td colspan="3"><div class="ligas-minicards"><a href="` + this._ReglasOperacion + `" target="_blank"><img src="../../img/iconos/pdf.svg"><p>Reglas de Operación</p></a></div></td></tr>
			</table>
			<table border = "0">
			<tr><td colspan="3"><br></td></tr>
			</table>
    `;
  }

  getHTML() {
    return this._base;
  }

}

function renderLecheMob() {
  leche.forEach(function(_app_, i) {
    const newLecheMob = new LecheMob(_app_, i);
    $("#rmLeche").append(newLecheMob.getHTML());
  });
}
