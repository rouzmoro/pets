function showAnimals(animals, element) {
    if (element.classList.toggle('active')) {
        for (let animal of animals) {
            animal.classList.remove('hide');
        }
    } else {
        for (let animal of animals) {
            animal.classList.add('hide');
        }
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