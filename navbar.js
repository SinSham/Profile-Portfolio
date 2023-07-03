document.addEventListener('DOMContentLoaded', function() {
    var navbarPlaceholder = document.getElementById('navbar-container');
    if (navbarPlaceholder) {
      fetch('navbar.html')
        .then(function(response) {
          return response.text();
        })
        .then(function(data) {
          navbarPlaceholder.innerHTML = data;
        });
    }

  });
  

  function openResume(){
    window.open("Shambhavi's Resume.pdf", '_blank')
  }