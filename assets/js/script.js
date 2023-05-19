(function(t) {
    function initTyped() {
      new Typed("#typed", {
        stringsElement: "#typed-strings",
        typeSpeed: 100,
        backSpeed: 20,
        loop: true,
        loopCount: Infinity,
      });
    }
  
    function setActiveNavItem() {
      t('nav li a[href="' + location.pathname + '"]').addClass("active");
      if (location.pathname === "/") {
        t('nav li a[href="./index.html"]').addClass("active");
      }
    }
  
    function handleHeroFullContainer() {
      var heroFullContainer = document.querySelector(".hero-full-container");
      // Your code for handling the hero full container goes here
    }
  
    // Call the functions
    initTyped();
    setActiveNavItem();
    handleHeroFullContainer();
  })(jQuery);
  