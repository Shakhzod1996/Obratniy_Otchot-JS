// ustanavlivaem vremya dlya obratnogo otchota
let countDownDate = new Date('Nov 2, 2021 00:00:00').getTime();

// Obnavlyaem taymer kajduyu sekundu

let countDownFunction = setInterval(function () {
    
    // Vremya na danniy moment
    let now = new Date().getTime();

    // Vichislyaem promejutok vremeni mejdu ustanovlennim vremenim i dannim

    let distance = countDownDate - now;

    // Vichislyayem vremya dla dney, chasov, minut, sekund
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) /(1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Vidayom Resultat
    document.querySelector('#timer').innerHTML =
    days + 'д ' + hours + 'ч' + minutes + 'м' + seconds + 'с';

    // Chto delat kogda otchot budet raven 0

    if (distance < 0) {
        clearInterval(countDownFunction);
        document.querySelector('#timer').innerHTML = 'Время истекло'
    }

}, 1000)