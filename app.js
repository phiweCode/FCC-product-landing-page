const menu = document.querySelector(".menu-btn");
const menuDropDown = document.getElementById("header");
const menuAnimate = document.getElementById("dropdownlinks");

menu.addEventListener("click", () => {
  menu.classList.toggle("open");
  menuDropDown.classList.toggle("open");
  menuAnimate.classList.toggle("ddlinks2");
});

$(".rev-comp2").owlCarousel(
    {
        margin:10,
        loop:true,
        autoplay:true,
        autoplayTimeout:5000,
        responsive:
        { 
             0:
             {
                 items:1,
                 nav:false
             },
             600:
             {
                 items:2,
                 nav:false
             },
             900:
             {
                 items:3,
                 nav:false
             }
        }

    }
); 

$(".packages-sec").owlCarousel(
    {
        responsive:
        { 
             0:
             {  
                 items:1,
                 nav:false
             },
             600:
             {
                 items:2,
                 nav:false
             },
             900:
             {
                 items:3,
                 nav:false
             }
        }

    }
); 

$('a').click(function (e) {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 1000);
});