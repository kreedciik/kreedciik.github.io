window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    // Poluchaem nujnie elementi s DOM dereva
    
    let tabContent = document.querySelectorAll('.info-tabcontent'),
        headerTab = document.querySelector('.info-header'),
        tab = document.querySelectorAll('.info-header-tab'),
        counterPeople = document.querySelector('#count-people'),
        countDay = document.querySelector('#count-day'),
        select = document.querySelector('select'),
        total = document.querySelector('#total'),
        inputs = document.querySelectorAll('.counter-block-input');

    // Sozdayem funksiyu kotoraya skrivaet content taba
    function hide(a){

        for(let i = a; i < tabContent.length; i++){

            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    // hide(1) potomuchto mi doljni pokazat perviy content taba

    hide(1);

    // Funksiya kotoraya pokazivaet content taba

    function show(b){

        if(tabContent[b].classList.contains('hide')){

            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
        
    }

    // Cherez delegirovanie mi otlavlivaem sobitiie imenno v tabax
    
        headerTab.addEventListener('click', function(e){

            let target = e.target;
            if(target && target.classList.contains('info-header-tab')){

                for(let i = 0; i < tab.length; i++){

                    if(target === tab[i]){

                        hide(0);
                        show(i);
                        break;
                        
                    }
                }
            }
        });

    // Plavniy perexod po yakoryu
    // Poluchenie elemntov s DOM dereva

    let navbar = document.querySelector('nav ul'),
        navLink = document.querySelectorAll('nav ul li'),
        info = document.querySelector('.info'),
        photo = document.querySelector('.slider'),
        price = document.querySelector('.counter'),
        contact = document.querySelector('.contact');

    // Funksiya dlya plavnogo perexoda

    function slowScroll(end){

        
    }
    
    // Modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        closeBtn = document.querySelector('.popup-close');

    // Obrabativayu sobitie click

    more.addEventListener('click', function(){

        overlay.classList.remove('slide-out');
        overlay.classList.add('slide-in');
        document.body.style.overflow = 'hidden';
    })

    // Obrabativayu sobitie click na closeBtn

    closeBtn.addEventListener('click', function(){

        overlay.classList.remove('slide-in');
        overlay.classList.add('slide-out');
        document.body.style.overflow = '';

    });
    
// Create calculation of price

    let calculatePrice = {

        countOfPeople: 0,
        countOfDay: 0,
        defaultPrice: 25

    };

        select.addEventListener('change', function(e){
        calculatePrice.countOfPeople = +counterPeople.value,
        calculatePrice.countOfDay = +countDay.value,
        calculatePrice.defaultPrice = +e.target.value;
        total.textContent = (calculatePrice.defaultPrice * calculatePrice.countOfPeople * calculatePrice.countOfDay).toFixed(2) + '$';
        
    });

    for(let i = 0; i < inputs.length; i++){

        inputs[i].addEventListener('keyup', function(e){
        calculatePrice.countOfPeople = +counterPeople.value;
        calculatePrice.countOfDay = +countDay.value;
        total.textContent = (calculatePrice.defaultPrice * calculatePrice.countOfPeople * calculatePrice.countOfDay).toFixed(2) + '$';
        })
    };

    });

    