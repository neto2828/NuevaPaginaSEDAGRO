document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'interaction', 'dayGrid' ],
      header: {
        left: 'prevYear,prev,next,nextYear today',
        center: 'title',
        right: 'dayGridMonth,dayGridWeek,dayGridDay'
      },
      defaultDate: '2023-02-01',
      locale: 'es',
      navLinks: true, // can click day/week names to navigate views
      editable: false,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'Sin Eventos',
          id: '',
          url: '',
          start: '2023-01-06'
        },
        {
          title: 'Sin Eventos',
          id: '',
          url: '',
          start: '2023-01-13'
        },
        {
          title: 'Sin Eventos',
          id: '',
          url: '',
          start: '2023-01-20'
        },
        {
          title: 'Audiencias públicas',
          id: 'Pachuca de Soto',
          url: '<iframe src="https://www.facebook.com/plugins/video.php?height=424&href=https%3A%2F%2Fwww.facebook.com%2FHIDALGO.SEDAGRO%2Fvideos%2F1419303275477461%2F&show_text=true&width=560&t=0" width="100%" height="650" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>',
          start: '2023-02-08'
        },
        {
          title: 'Mesas de trabajo en Actopan',
          id: 'Actopan',
          url: '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FHIDALGO.SEDAGRO%2Fposts%2Fpfbid02JSGoErQhvxpCeR9TEoUYBo29cyua9E9TyJvT1fbh5mmS2eFz1JemTWdfxeVALH3kl&width=500&show_text=true&height=793&appId" width="500" height="793" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>',
          start: '2023-02-05'
        }
      ],
      eventClick: function(item){
        $("#url").empty();
        item.jsEvent.preventDefault();
        console.log(item);
        $("#agendamodal").modal("show");
        $("#titulo").text(item.event.title);
        $("#lugar").text(item.event.id);  
        $("#url").append(item.event.url);   
      }
      
    });
    calendar.render();
  });
