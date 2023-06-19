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