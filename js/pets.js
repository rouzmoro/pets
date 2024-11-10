/*swiper*/

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

/*swiper end*/

/*buttons*/

function showAnimals(animals, element) {
    if ( element.classList.contains('pets-menu-item-active') ) {
        for (let animal of animals) {
            animal.style.display = "none";
        }
        element.classList.remove('pets-menu-item-active');

    } else {
        for (let animal of animals) {
            animal.style.display = "block";
        }
        element.classList.add('pets-menu-item-active');
    }
}

cats.addEventListener("click", function() {
    let animals = document.querySelectorAll('.cat');
    showAnimals(animals, this);
})

dogs.addEventListener("click", function() {
    let animals = document.querySelectorAll('.dog');
    showAnimals(animals, this);
})

birds.addEventListener("click", function() {
    let animals = document.querySelectorAll('.bird');
    showAnimals(animals, this);
})

hares.addEventListener("click", function() {
    let animals = document.querySelectorAll('.hare');
    showAnimals(animals, this);
})

mice.addEventListener("click", function() {
    let animals = document.querySelectorAll('.mouse');
    showAnimals(animals, this);
})

others.addEventListener("click", function() {
    let animals = document.querySelectorAll('.other');
    showAnimals(animals, this);
})

/*buttons end*/