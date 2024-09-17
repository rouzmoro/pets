var swiper = undefined;
const breakpoint = window.matchMedia("(max-width: 767px)");

const breakpointChecker = () => {

    if (breakpoint.matches) {
        swiper = new Swiper(".pets-menu", {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 20,
        });
    } else if (swiper != undefined) {
        swiper.destroy();
    }
};

breakpoint.addEventListener("change", breakpointChecker);
breakpointChecker();