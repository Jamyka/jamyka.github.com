function myFunction() {
    const navbar = document.getElementById("mynavbar");
    if (navbar.className === "navbar") {
      navbar.className += " responsive";
    } else {
      navbar.className = "navbar";
    }
  }

  function activeClass(){
      const links = document.getElementsByClassName("act");
      for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function() {
          var currentActive = document.getElementsByClassName("active");
          currentActive[0].className = currentActive[0].className.replace(" active", "");
          this.className += " active";
        });
      }
  }
  activeClass();