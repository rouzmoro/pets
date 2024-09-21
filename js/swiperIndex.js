var swiper = new Swiper(".chat", {
    slidesPerView: 'auto',
    spaceBetween: 15,
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 'auto',
            loop: false,
            centeredSlides: false,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: 'auto',
            loop: false,
            centeredSlides: false,
            spaceBetween: 20,
        },
        1920: {
            slidesPerView: 4,
            loop: false,
            centeredSlides: false,
            spaceBetween: 40,
        },
    },
});
var swiper = new Swiper(".gallery", {
    slidesPerView: 'auto',
    spaceBetween: 15,
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 'auto',
            loop: false,
            centeredSlides: false,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: 'auto',
            loop: false,
            centeredSlides: false,
            spaceBetween: 20,
        },
        1920: {
            slidesPerView: 2,
            loop: false,
            centeredSlides: false,
            spaceBetween: 40,
        },
    },
});
var swiper = new Swiper(".cover", {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


/*var swiper = undefined;
const breakpoint = window.matchMedia("(max-width: 767px)");

const breakpointChecker = () => {

    if (breakpoint.matches) {
        var swiper = new Swiper(".useful", {
            slidesPerView: 'auto',
            spaceBetween: 15,
        });
    } else if (swiper != undefined) {
        swiper.destroy();
    }
};

breakpoint.addEventListener("change", breakpointChecker);
breakpointChecker();*/