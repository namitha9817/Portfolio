var x = document.getElementById("home-all");
var y = document.getElementById("edu");
var a = document.getElementById("work");
var b = document.getElementById("vol");
var all = document.getElementsByClassName("all");

var main = document.getElementById("main");
var about = document.getElementById("about");
var portfolio = document.getElementById("portfolio");
var contact = document.getElementById("contact");

var main_home = document.getElementById("main-home");
var about_home = document.getElementById("main-about");
var portfolio_home = document.getElementById("main-portfolio");
var contact_home = document.getElementById("main-contact");

var me_about = document.getElementById("me");
var interests_about = document.getElementById("interests");
var testimonial_about = document.getElementById("testimonials");

var me_nav = document.getElementById("nav-me");
var interests_nav = document.getElementById("nav-int");
var testimonial_nav = document.getElementById("nav-test");

var all_nav = document.getElementById("nav-all");
var all_react = document.getElementById("nav-react");
var all_php = document.getElementById("nav-php");
var all_mini = document.getElementById("nav-mini");

var port_all = document.getElementById("port-all");
var port_react = document.getElementById("port-react");
var port_php = document.getElementById("port-php");
var port_mini = document.getElementById("port-mini");

function allpage() {
    x.style.display = "inherit";
    y.style.display = "none";
    a.style.display = "none";
    b.style.display = "none";

    // Remove the 'active' class from all list items
    var listItems = document.querySelectorAll('#menu li');
    listItems.forEach(function(listItem) {
        listItem.classList.remove('active');
    });

    // Add the 'active' class to the clicked list item
    document.getElementById('1').classList.add('active');
}

function education() {
    x.style.display = "none";
    y.style.display = "inherit";
    a.style.display = "none";
    b.style.display = "none";

    // Remove the 'active' class from all list items
    var listItems = document.querySelectorAll('#menu li');
    listItems.forEach(function(listItem) {
        listItem.classList.remove('active');
    });

    // Add the 'active' class to the clicked list item
    document.getElementById('2').classList.add('active');
}

function work() {
    x.style.display = "none";
    y.style.display = "none";
    a.style.display = "inherit";
    b.style.display = "none";

    // Remove the 'active' class from all list items
    var listItems = document.querySelectorAll('#menu li');
    listItems.forEach(function(listItem) {
        listItem.classList.remove('active');
    });

    // Add the 'active' class to the clicked list item
    document.getElementById('3').classList.add('active');
}

function vol() {
    x.style.display = "none";
    y.style.display = "none";
    a.style.display = "none";
    b.style.display = "flex";

    // Remove the 'active' class from all list items
    var listItems = document.querySelectorAll('#menu li');
    listItems.forEach(function(listItem) {
        listItem.classList.remove('active');
    });

    // Add the 'active' class to the clicked list item
    document.getElementById('4').classList.add('active');
}

function main1(){
    main.style.display = "inherit";
    about.style.display = "none";
    portfolio.style.display = "none";
    contact.style.display = "none";

    main_home.classList.add("active");
    about_home.classList.remove("active");
    portfolio_home.classList.remove("active");
    contact_home.classList.remove("active");
}

function about1(){
    main.style.display = "none";
    about.style.display = "grid";
    portfolio.style.display = "none";
    contact.style.display = "none";

    main_home.classList.remove("active");
    about_home.classList.add("active");
    portfolio_home.classList.remove("active");
    contact_home.classList.remove("active");
}

function portfolio1(){
    main.style.display = "none";
    about.style.display = "none";
    portfolio.style.display = "grid";
    contact.style.display = "none";

    main_home.classList.remove("active");
    about_home.classList.remove("active");
    portfolio_home.classList.add("active");
    contact_home.classList.remove("active");
}

function contact1(){
    main.style.display = "none";
    about.style.display = "none";
    portfolio.style.display = "none";
    contact.style.display = "grid";

    main_home.classList.remove("active");
    about_home.classList.remove("active");
    portfolio_home.classList.remove("active");
    contact_home.classList.add("active");
}

function me(){
    me_about.style.display = "inherit";
    interests_about.style.display = "none";
    testimonial_about.style.display = "none";
    

    me_nav.classList.add("active");
    interests_nav.classList.remove("active");
    testimonial_nav.classList.remove("active");
    
}

function interest(){
    me_about.style.display = "none";
    interests_about.style.display = "grid";
    testimonial_about.style.display = "none";

    me_nav.classList.remove("active");
    interests_nav.classList.add("active");
    testimonial_nav.classList.remove("active");
    
}

function testimonial(){
    me_about.style.display = "none";
    interests_about.style.display = "none";
    testimonial_about.style.display = "grid";

    me_nav.classList.remove("active");
    interests_nav.classList.remove("active");
    testimonial_nav.classList.add("active");
    
}

function all_port(){
    port_all.style.display = "grid";
    port_react.style.display = "none";
    port_php.style.display = "none";
    port_mini.style.display = "none";

    all_nav.classList.add("active");
    all_react.classList.remove("active");
    all_php.classList.remove("active");
    all_mini.classList.remove("active");
}

function react(){
    port_all.style.display = "none";
    port_react.style.display = "grid";
    port_php.style.display = "none";
    port_mini.style.display = "none";

    all_nav.classList.remove("active");
    all_react.classList.add("active");
    all_php.classList.remove("active");
    all_mini.classList.remove("active");
}

function php(){
    port_all.style.display = "none";
    port_react.style.display = "none";
    port_php.style.display = "grid";
    port_mini.style.display = "none";

    all_nav.classList.remove("active");
    all_react.classList.remove("active");
    all_php.classList.add("active");
    all_mini.classList.remove("active");
}

function mini(){
    port_all.style.display = "none";
    port_react.style.display = "none";
    port_php.style.display = "none";
    port_mini.style.display = "grid";

    all_nav.classList.remove("active");
    all_react.classList.remove("active");
    all_php.classList.remove("active");
    all_mini.classList.add("active");
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

function initializeModal() {
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "flex";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

// Call the function to initialize the modal
initializeModal();


function bridgef() {
  // Get the modal
  var modal1 = document.getElementById("myModal1");

  // Get the button that opens the modal
  var btn1 = document.getElementById("myBtn1");

  // Get the <span> element that closes the modal
  var span1 = document.getElementsByClassName("close1")[0];

  // When the user clicks the button, open the modal 
  btn1.onclick = function() {
    modal1.style.display = "flex";
  }

  // When the user clicks on <span> (x), close the modal
  span1.onclick = function() {
    modal1.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
  }
}

// Call the function to initialize the modal
bridgef();


function lock() {
  // Get the modal
  var modal3 = document.getElementById("myModal3");

  // Get the button that opens the modal
  var btn3 = document.getElementById("myBtn3");

  // Get the <span> element that closes the modal
  var span3 = document.getElementsByClassName("close3")[0];

  // When the user clicks the button, open the modal 
  btn3.onclick = function() {
    modal3.style.display = "flex";
  }

  // When the user clicks on <span> (x), close the modal
  span3.onclick = function() {
    modal3.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal3) {
      modal3.style.display = "none";
    }
  }
}

// Call the function to initialize the modal
lock();

function kings() {
  // Get the modal
  var modal4 = document.getElementById("myModal4");

  // Get the button that opens the modal
  var btn4 = document.getElementById("myBtn4");

  // Get the <span> element that closes the modal
  var span4 = document.getElementsByClassName("close4")[0];

  // When the user clicks the button, open the modal 
  btn4.onclick = function() {
    modal4.style.display = "flex";
  }

  // When the user clicks on <span> (x), close the modal
  span4.onclick = function() {
    modal4.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal4) {
      modal4.style.display = "none";
    }
  }
}

// Call the function to initialize the modal
kings();

function bridging() {
  // Get the modal
  var modal5 = document.getElementById("myModal5");

  // Get the button that opens the modal
  var btn5 = document.getElementById("myBtn5");

  // Get the <span> element that closes the modal
  var span5 = document.getElementsByClassName("close5")[0];

  // When the user clicks the button, open the modal 
  btn5.onclick = function() {
    modal5.style.display = "flex";
  }

  // When the user clicks on <span> (x), close the modal
  span5.onclick = function() {
    modal5.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal5) {
      modal5.style.display = "none";
    }
  }
}

// Call the function to initialize the modal
bridging();

function lock1() {
  // Get the modal
  var modal6 = document.getElementById("myModal6");

  // Get the button that opens the modal
  var btn6 = document.getElementById("myBtn6");

  // Get the <span> element that closes the modal
  var span6 = document.getElementsByClassName("close6")[0];

  // When the user clicks the button, open the modal 
  btn6.onclick = function() {
    modal6.style.display = "flex";
  }

  // When the user clicks on <span> (x), close the modal
  span6.onclick = function() {
    modal6.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal6) {
      modal6.style.display = "none";
    }
  }
}

// Call the function to initialize the modal
lock1();


function ngo() {
  // Get the modal
  var modal7 = document.getElementById("myModal7");

  // Get the button that opens the modal
  var btn7 = document.getElementById("myBtn7");

  // Get the <span> element that closes the modal
  var span7 = document.getElementsByClassName("close7")[0];

  // When the user clicks the button, open the modal 
  btn7.onclick = function() {
    modal7.style.display = "flex";
  }

  // When the user clicks on <span> (x), close the modal
  span7.onclick = function() {
    modal7.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal7) {
      modal7.style.display = "none";
    }
  }
}

// Call the function to initialize the modal
ngo();


function mern() {
  // Get the modal
  var modal8 = document.getElementById("myModal8");

  // Get the button that opens the modal
  var btn8 = document.getElementById("myBtn8");

  // Get the <span> element that closes the modal
  var span8 = document.getElementsByClassName("close8")[0];

  // When the user clicks the button, open the modal 
  btn8.onclick = function() {
    modal8.style.display = "flex";
  }

  // When the user clicks on <span> (x), close the modal
  span8.onclick = function() {
    modal8.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal8) {
      modal8.style.display = "none";
    }
  }
}

// Call the function to initialize the modal
mern();


function mern1() {
  // Get the modal
  var modal9 = document.getElementById("myModal9");

  // Get the button that opens the modal
  var btn9 = document.getElementById("myBtn9");

  // Get the <span> element that closes the modal
  var span9 = document.getElementsByClassName("close9")[0];

  // When the user clicks the button, open the modal 
  btn9.onclick = function() {
    modal9.style.display = "flex";
  }

  // When the user clicks on <span> (x), close the modal
  span9.onclick = function() {
    modal9.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal9) {
      modal9.style.display = "none";
    }
  }
}

// Call the function to initialize the modal
mern1();


function eclips() {
  // Get the modal
  var modal10 = document.getElementById("myModal10");

  // Get the button that opens the modal
  var btn10 = document.getElementById("myBtn10");

  // Get the <span> element that closes the modal
  var span10 = document.getElementsByClassName("close10")[0];

  // When the user clicks the button, open the modal 
  btn10.onclick = function() {
    modal10.style.display = "flex";
  }

  // When the user clicks on <span> (x), close the modal
  span10.onclick = function() {
    modal10.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal10) {
      modal10.style.display = "none";
    }
  }
}

// Call the function to initialize the modal
eclips();


function eclips1() {
  // Get the modal
  var modal11 = document.getElementById("myModal11");

  // Get the button that opens the modal
  var btn11 = document.getElementById("myBtn11");

  // Get the <span> element that closes the modal
  var span11 = document.getElementsByClassName("close11")[0];

  // When the user clicks the button, open the modal 
  btn11.onclick = function() {
    modal11.style.display = "flex";
  }

  // When the user clicks on <span> (x), close the modal
  span11.onclick = function() {
    modal11.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal11) {
      modal11.style.display = "none";
    }
  }
}

// Call the function to initialize the modal
eclips1();

