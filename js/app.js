$(document).ready(function(){
// HERO SLIDER

$('#hero-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    items:1,
    smartSpeed: 1000,
    dots:false,
    navText:['PREV', 'NEXT'],
    responsive:{
        0:{
        nav:false,
        },
        768:{
            nav:true,
        }
    }
})
});

$(document).ready(function(){
    // PROJECT SLIDER
    
    $('#project-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        smartSpeed: 1000,
        dots:false,
        margin:24,
        responsive:{
            0:{
            nav:false,
            },
            768:{
               
            },
            1140:{
             items:2,
            }
        }
    })
    });