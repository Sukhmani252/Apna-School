// Automatically collapse the dropdown when the user hovers over it
const dropdownToggle = document.querySelector('.nav-item.dropdown .dropdown-toggle');
dropdownToggle.addEventListener('mouseenter', function() {
  if (window.innerWidth > 991) {
    const dropdownMenu = this.nextElementSibling;
    if (!dropdownMenu.classList.contains('show')) {
      this.click();
    }
  }
});
