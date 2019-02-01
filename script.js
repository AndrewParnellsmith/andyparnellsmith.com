function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  window.addEventListener('scroll', function(e) {
    document.getElementById("margin").style.background = "#383838"
    document.getElementById("margin").style.boxShadow = "0 0px 20px 0 #111"
  })