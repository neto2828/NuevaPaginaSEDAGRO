
/*<ul>
	<li type = 'circle'>Proyecto de Inversión.</li>
	<li type = 'circle'>Flujos de Efectivo.</li>
	<li type = 'circle'>Relación Patrimonial o Balance General.</li>
	<li type = 'circle'>Estado de Ingresos y Egresos o Estado de Resultados.</li>
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
const credito = [
	{
		  "NombrePrograma":"Crédito a Pequeños Productores",
	    "DescripcionPrograma":"",
	    "TipoApoyo":"",
			"RequisitoBeneficiario":"<ul><li type = 'circle'>Proyecto de Inversión.</li><li type = 'circle'>Flujos de Efectivo.</li><li type = 'circle'>Relación Patrimonial o Balance General.</li><li type = 'circle'>Estado de Ingresos y Egresos o Estado de Resultados.</li></ul>",
			"RequisitoBeneficio":"",
			"ResponsablePrograma":"Lic. José Antonio León Cruz",
			"PuestoResponsable":"Director General de Fomento al Crédito",
			"Telefono":"71-7 80-00 Ext. 8152",
			"Correo":"fomento.credito@hidalgo.gob.mx",
			"Enlace":"",
			"AvisoPrivacidad":"",
			"ReglasOperacion":"../../Reglas_Operacion/Credito.pdf"
	}


]

class Credito {
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

function renderCredito(){
  credito.forEach(function(_app_, i){
    const newCredito = new Credito(_app_, i);
     $(".rubrosDeskCredito").append(newCredito.getHTML());
  });
}

class CreditoMob {
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

function renderCreditoMob(){
  credito.forEach(function(_app_, i){
    const newCreditoMob = new CreditoMob(_app_, i);
     $("#rmCredito").append(newCreditoMob.getHTML());
  });
}
