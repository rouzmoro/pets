/*time*/

function updateTime() {

    let currentDate = new Date();
    let timeString = document.querySelector("#time");
    let dateString = document.querySelector("#date");

    timeString.textContent = currentDate.toLocaleTimeString();
    timeString.setAttribute('datetime', currentDate.toISOString().slice(0, -8));

    dateString.textContent = currentDate.toLocaleDateString();
    dateString.setAttribute('datetime', currentDate.toISOString().slice(0, 10));

    setTimeout(updateTime, 1000);
    
}

updateTime();

/*time end*/

/*swiper*/

let chat = new Swiper(".blog", {
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

let gallery = new Swiper(".gallery", {
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

let cover = new Swiper(".cover__wrapper", {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const breakpoint = window.matchMedia("(max-width: 767px)");

const breakpointChecker = () => {
    let compact = undefined;

    if (breakpoint.matches) {
        let compact = new Swiper(".compact", {
            slidesPerView: 'auto',
            spaceBetween: 15,
        });
    } else if (compact != undefined) {
        compact.destroy();
        
    }
};

breakpoint.addEventListener("change", breakpointChecker);
breakpointChecker();

/*swiper end*/