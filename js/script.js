
$(document).ready(function(){


   $('.header .bars').click(function(){
    $('.the-after').fadeIn(500);
  });

  $('.sidenav .closebtn').click(function(){
   $('.the-after').fadeOut(500);
  });


});

function openNav() {
  document.getElementById("mySidenav").style.width = "400px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0%";
}


$('.the-slider').owlCarousel({
    loop: false,
    margin: 20,
    nav: false,
    rtl: true,
    autoplay: true,
    pagination: true,
    autoplayTimeout: 2000,
    smartSpeed: 2200,
    dragEndSpeed: 1000,
    animate: false,
    //animateOut: 'fadeOut',
    //animateIn: 'slideInDown',
        navText: [
            "<i class='fa fa-angle-right'></i> ",
            "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

$('.album-slider').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    rtl: true,
    autoplay: true,
    pagination: true,
    autoplayTimeout: 6500,
    smartSpeed: 2000,
    dragEndSpeed: 2000,
    animate: false,
    navText: [
        "<i class='fa fa-angle-double-right'></i> ",
        "<i class='fa fa-angle-double-left'></i>"
    ],
    responsive: {
        0: {
            items:2
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});


    $('.important-slider').owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      rtl: true,
      autoplay: true,
      pagination: true,
      autoplayTimeout: 6500,
      smartSpeed: 2000,
      dragEndSpeed: 2000,
      animateOut: 'fadeOut',
      animateIn: 'fadeInDown',
      animate: true,
      navText: [
          "<i class='fa fa-angle-right'></i> ",
          "<i class='fa fa-angle-left'></i>"
      ],
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 1
          },
          1000: {
              items: 1
          }
      }
  });


     setTimeout(function(){
    $('.contain').fadeOut(700);
  }, 900);



  var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}