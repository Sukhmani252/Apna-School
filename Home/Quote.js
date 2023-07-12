document.addEventListener("DOMContentLoaded", function() {
  // Array of quotes
  var quotes = [
    "Education is the most powerful weapon which you can use to change the world. - Nelson Mandela",
    "The function of education is to teach one to think intensively and to think critically. Intelligence plus character - that is the goal of true education. - Martin Luther King, Jr.",
    "Education is not the filling of a pail, but the lighting of a fire. - William Butler Yeats",
    "The more that you read, the more things you will know. The more that you learn, the more places you'll go. - Dr. Seuss",
    "Education is not preparation for life; education is life itself. - John Dewey"
    // Add more quotes here
  ];

  // Generate a random quote
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  // Display the quote
  var quoteElement = document.getElementById("quote");
  quoteElement.innerHTML = randomQuote;
});

  // Array of sample notices
  var notices = [
    {
      content: "School closed on June 1st due to public holiday.",
      date: "May 30, 2023"
    },
    {
      content: "Parent-Teacher meeting scheduled on June 5th at 4 PM.",
      date: "May 29, 2023"
    },
    {
      content: "Sports day event will now be held from 15th June tentatively.",
      date: "May 29, 2023"
    },
    {
      content: "Sports day event postponed to June 10th due to rain.",
      date: "May 28, 2023"
    }
  ];
  
  // Function to generate dynamic notices
  function generateNotices() {
    var noticeContainer = document.getElementById("dynamic-notice");
  
    // Clear the existing content
    noticeContainer.innerHTML = "";
  
    // Generate HTML for each notice
    notices.forEach(function (notice) {
      var noticeElement = document.createElement("div");
      noticeElement.classList.add("notice");
  
      var noticeContent = document.createElement("p");
      noticeContent.textContent = notice.content;
  
      var noticeDate = document.createElement("p");
      noticeDate.classList.add("notice-date");
      noticeDate.textContent = notice.date;
  
      noticeElement.appendChild(noticeContent);
      noticeElement.appendChild(noticeDate);
      noticeContainer.appendChild(noticeElement);
    });
  }
  
  // Call the function to generate notices on page load
  window.onload = generateNotices;
  

