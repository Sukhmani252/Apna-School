$(document).ready(function() {
    $('#calendar').evoCalendar({
      theme:"Midnight blue",
      calendarEvents: [
      {
        id: 'bHay68s', // Event's ID (required)
        name: "New Year", // Event name (required)
        date: "January/1/2020", // Event date (required)
        type: "holiday", // Event type (required)
        everyYear: true // Same event every year (optional)
      },
      {
        name: "Vacation Leave",
        badge: "02/13 - 02/15", // Event badge (optional)
        date: ["February/13/2020", "February/15/2020"], // Date range
        description: "Vacation leave for 3 days.", // Event description (optional)
        type: "event",
        color: "#63d867" // Event custom color (optional)
      }
    ]
    })
})


//Javascript code for footer
function initMap() {
  // Specify the coordinates of your location
  var myLatLng = {lat: 24.24166364346895, lng: 86.159596114646};

  // Create a map object and specify the DOM element for display
  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 12
  });

  // Create a marker and set its position
  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    title: 'Apna School'
  });
}
var currentYear = new Date().getFullYear();
  document.getElementById("year").innerHTML = currentYear;
