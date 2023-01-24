document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'interaction', 'dayGrid' ],
      header: {
        left: 'prevYear,prev,next,nextYear today',
        center: 'title',
        right: 'dayGridMonth,dayGridWeek,dayGridDay'
      },
      defaultDate: '2023-01-01',
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
