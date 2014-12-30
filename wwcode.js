$(document).ready(function() {
  var eventTemplate = Handlebars.compile($("#event-template").html());

  getMeetupStuff('events', { status: "upcoming,past" }, function(data) {
    var eventsHTML = "";
    var events = data.results;
    events.reverse();

    events.forEach(function(event) {
      var name = event.name.toLowerCase();
      if (name.indexOf("python") == -1
          && name.indexOf("ruby") == -1
          && name.indexOf("rails") == -1
          && name.indexOf("javascript") == -1
          && name.indexOf("study") == -1) {
        eventsHTML += (eventTemplate(event));
      }
    })
    $("#events").html(eventsHTML);
  });
})

function getMeetupStuff(method, params, callback) {
  var url = "http://api.meetup.com/2/" + method + "/?callback=?";
  params = $.extend({
    key: "29363e123f3a52532a7b306b95b4d",
    group_urlname: "Women-Who-Code-SF",
    time: '-1m,1m'
  }, params);

  $.getJSON(url, params, callback);
}

Handlebars.registerHelper('date', function(time) {
   var date = new Date(time);
   return (date.getMonth() + 1) + "/" + date.getDate();
});

Handlebars.registerHelper('timeago', function(time) {
   time = time.replace(/.*, /, "");
   return $.timeago(time);
});

