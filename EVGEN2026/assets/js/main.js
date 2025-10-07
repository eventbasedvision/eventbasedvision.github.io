(function () {
    //===== Preloader

    window.onload = function () {
        window.setTimeout(fadeout, 500);
    }

    function fadeout() {
        document.querySelector('.preloader').style.opacity = '0';
        document.querySelector('.preloader').style.display = 'none';
    }


    /*=====================================
    Sticky
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;
        if (window.pageYOffset > sticky) {
            header_navbar.classList.add("sticky");
        } else {
            header_navbar.classList.remove("sticky");
        }
        var backToTo = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }
    };

    // WOW active
    new WOW().init();

    //===== mobile-menu-btn
    let navbarToggler = document.querySelector(".mobile-menu-btn");
    navbarToggler.addEventListener('click', function () {
        navbarToggler.classList.toggle("active");
    });


})();

//====== Managing navigation logic
const MainNav = {
    Home: "home-nav",
    Speakers: "speakers-nav",
    Challenge: "challenge-nav",
    Organizers: "organizers-nav",
    Schedule: "schedule-nav",
    Submission: "submission-nav",
    Dates: "dates-nav"
}
ACTIVE_NAV = MainNav.Home

function switch_nav(nav) {
    document.getElementById(ACTIVE_NAV).classList.remove("active")
    ACTIVE_NAV = nav
    document.getElementById(ACTIVE_NAV).classList.add("active")
}

// Initialize Image Slider
if (document.querySelector('.tiny-slider-inner')) {
    var slider = tns({
        container: '.tiny-slider-inner',
        items: 1,
        slideBy: 'page',
        autoplay: true,
        autoplayButtonOutput: false,
        mouseDrag: true,
        controls: false,
        nav: true,
        speed: 1000,
        autoplayTimeout: 5000,
        responsive: {
            640: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            }
        }
    });
}
