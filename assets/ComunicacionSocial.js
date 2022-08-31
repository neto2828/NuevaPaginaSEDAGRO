const Noticias = ({ title, descripcion, id, content, icon, date, secretaria }, img) => {

  const ElementsImages = [];

  const Images = (i) => {
    return `<div class="image-` + img.length + `" style="background-image: url(` + i + `);"></div>`;
  };
  img.forEach((j) => {
    ElementsImages.push(Images(j));
  });

  return `
    <div class="slide-box">
      <a class="noticiasLink"  href="http://comunicacion-a.hidalgo.gob.mx/detalles/`+ id + `" target="_blank">
        <div class="descripcion-nota">
          <img class="sec-nota" src="` + icon + `">
          <div class="titles">
          <h5>` + secretaria + `</h5>
          <p>` + (new Date(date)).toLocaleString() + `</p>
          </div>
          <div class="desc-nota">` + title + `</div>
        </div>
        <div class="images">` + ElementsImages.join("") + `</div>
      </a>
    </div>
  `;
}

$(() => {
  $.ajax({
    type: "POST",
    url: "https://comunicacion-a.hidalgo.gob.mx/traer/notas",
    data: {},
    success: function(res){
      res.success.notas.forEach( function(notice, index) {

        let img = [];
        notice.content.forEach(function({type,urls},index){
          if(type==="Gallery" && urls.length > 0){
            img = img.concat(urls);
          }
        });


        img = img.splice(0, 3);
        console.log(img);

        const element = Noticias(notice, img);
        $("#contenthtml").append($(element));
      });
    },
    dataType: 'json'
  });
});
