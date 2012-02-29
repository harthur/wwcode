function getMeetupStuff(method, params, callback) {
  var url = "http://api.meetup.com/2/" + method + "/?callback=?";
  params = $.extend({
    key: "29363e123f3a52532a7b306b95b4d",
    group_urlname: "Women-Who-Code-SF"
  }, params);

  $.getJSON(url, params, callback);
}

function searchTwitter(term, callback) {
  var url = "http://search.twitter.com/search.json?callback=?";
  var params = {
    q: term,
    rpp: 7,
    result_type: "recent"
  };

  $.getJSON(url, params, callback);
}