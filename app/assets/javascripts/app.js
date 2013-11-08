var app = app || {}

$(document).ready(function() {
  app.eventListeners()
  app.makeMap()
});

app.eventListeners = function() {
  $("#submit").on("click", app.createUser);
};

app.createUser = function() {
  var name = $('#name')[0].value;
  var email = $('#email')[0].value;
  newUser = {user: {name: name, email: email}};
    $.ajax({
      type:"POST",
      url: "/users.json",
      data: newUser
    }).done(app.displayNotice); //new user posts but there's an internal server error 500
  }

app.displayNotice = function() {
  $("#notice").text("Created User")
}

app.makeMap = function() {
  var mapOptions = {
    center: new google.maps.LatLng(-34.397, 150.644),
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

  $("#drop-pin").on("click", function() {
    var myLatlng = new google.maps.LatLng(-25.363882,131.044922);

    var marker = new google.maps.Marker({
      position: myLatlng,
      title:"Hello World!"
    });
    marker.setMap(map);
  })
};
