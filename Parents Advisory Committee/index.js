// Automatically collapse the dropdown when the user hovers over it
const dropdownToggle = document.querySelectorAll('.nav-item.dropdown .dropdown-toggle');
for (var i = 0; i < dropdownToggle.length; i++) {
  dropdownToggle[i].addEventListener('mouseenter', function() {
    if (window.innerWidth > 991) {
      const dropdownMenu = this.nextElementSibling;
      if (!dropdownMenu.classList.contains('show')) {
        this.click();
      }
    }
  });
}

// Function to filter meetings based on year
function filterMeetings(year) {
  var meetingTableBody = document.getElementById('meeting-table-body');
  meetingTableBody.innerHTML = '';

  // Mock data for meetings (replace with your own data)
  if(year=='2021')
  {
    var meetings = [
      { schedule: 'Meeting 1', venue: 'Venue 1', notes: 'Link to PDF 1' }


    ];
  }
  else if(year=='2022')
  {
    var meetings = [
      { schedule: 'Meeting 1', venue: 'Venue 1', notes: 'Link to PDF 1' },
      { schedule: 'Meeting 2', venue: 'Venue 2', notes: 'Link to PDF 2' }

    ];
  }
  else if(year=='2023')
  {
    var meetings = [
      { schedule: 'Meeting 1', venue: 'Venue 1', notes: 'Link to PDF 1' },
      { schedule: 'Meeting 2', venue: 'Venue 2', notes: 'Link to PDF 2' },
      { schedule: 'Meeting 3', venue: 'Venue 3', notes: 'Link to PDF 3' }
    ];
  }


  meetings.forEach(function (meeting) {
    var row = document.createElement('tr');
    var meetingCell = document.createElement('td');
    meetingCell.textContent = meeting.schedule + ' - ' + meeting.venue;
    var notesCell = document.createElement('td');
    var downloadLink = document.createElement('a');
    downloadLink.href = meeting.notes + '.pdf';
    downloadLink.textContent = 'Download';
    notesCell.appendChild(downloadLink);

    row.appendChild(meetingCell);
    row.appendChild(notesCell);

    meetingTableBody.appendChild(row);
  });
}

// Event listener for year filter buttons
var yearButtons = document.getElementsByClassName('year-btn');
for (var i = 0; i < yearButtons.length; i++) {
  yearButtons[i].addEventListener('click', function () {
    var year = this.getAttribute('data-year');
    filterMeetings(year);
  });
}

// Filter meetings for the initial year
filterMeetings('2023');




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
