const loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', () => {
  const username = prompt('Enter username:');
  const password = prompt('Enter password:');

  // Send a request to the server for authentication
  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        // Authentication successful, show the interface to add notices
        showNoticeInterface();
      } else {
        alert('Login failed. Please try again.');
      }
    })
    .catch((error) => {
      console.error('Error during login:', error);
      alert('An error occurred during login. Please try again later.');
    });
});

function showNoticeInterface() {
  document.getElementById('noticeInterface').style.display = 'block';
}

const noticeForm = document.getElementById('noticeForm');
noticeForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const content = noticeForm.elements.content.value;
  const date = noticeForm.elements.date.value;

  // Send a request to the server to add the notice
  fetch('/notices', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ content, date }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert('Notice added successfully!');
        // Optionally, clear the form after successful submission
        noticeForm.reset();
      } else {
        alert('Failed to add notice. Please try again.');
      }
    })
    .catch((error) => {
      console.error('Error during notice submission:', error);
      alert('An error occurred during notice submission. Please try again later.');
    });
});
