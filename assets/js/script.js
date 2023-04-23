$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if(window.scrollY>60){
            document.querySelector('#scroll-top').classList.add('active');
        }else{
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function(){
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if(top>offset && top<offset+height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop : $($(this).attr('href')).offset().top,
        },500, 'linear')
    })
});

// <!-- tilt js effect starts -->
      VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
      });


/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

// async function fetchData() {   
// }



/* SCROLL HOME */
srtop.reveal('.home .content h3',{delay: 200}); 
srtop.reveal('.home .content p',{delay: 200}); 
srtop.reveal('.home .content .btn',{delay: 200}); 

srtop.reveal('.home .image',{delay: 400}); 
srtop.reveal('.home .linkedin',{interval: 600}); 
srtop.reveal('.home .github',{interval: 800}); 
srtop.reveal('.home .twitter',{interval: 1000});
srtop.reveal('.home .telegram',{interval: 600}); 
srtop.reveal('.home .instagram',{interval: 600}); 

srtop.reveal('.projects',{interval: 200}); 

/* SCROLL app1 */
srtop.reveal('.app1 h2',{delay: 300});
srtop.reveal('.app1 .container .description-box',{delay: 300}); 
srtop.reveal('.app1 .container .store-icons',{delay: 300}); 
srtop.reveal('.app1 .icon-box',{delay: 300}); 
srtop.reveal('.app1 .content .resumebtn',{delay: 300}); 

/* SCROLL 2 */
srtop.reveal('.app2 h2',{delay: 300});
srtop.reveal('.app2 .container .description-box',{delay: 300}); 
srtop.reveal('.app2 .container .store-icons',{delay: 300}); 
srtop.reveal('.app2 .icon-box',{delay: 300}); 
srtop.reveal('.app2 .content .resumebtn',{delay: 300}); 

/* SCROLL about */
srtop.reveal('.about h2',{interval: 200}); 
srtop.reveal('.about p',{interval: 200}); 

/* SCROLL CONTACT */
srtop.reveal('.contact h2',{delay: 400});
srtop.reveal('.contact .container',{delay: 300});

/* SCROLL privacy */
srtop.reveal('.privacy .heading',{interval: 200}); 
srtop.reveal('.privacy div',{interval: 400}); 

/* SCROLL terms */
srtop.reveal('.terms .heading',{interval: 200}); 
srtop.reveal('.terms div',{interval: 400}); 