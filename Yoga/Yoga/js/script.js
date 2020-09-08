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
        closeBtn = document.querySelector('.popup-close'),
        popup = document.querySelector('.popup');

    // Obrabativayu sobitie click

    more.addEventListener('click', function(){

        overlay.classList.remove('slide-out');
        overlay.classList.add('slide-in');
        popup.style.top = 150 + 'px';
        document.body.style.overflow = 'hidden';
    })

    overlay.addEventListener('click', function(e){

        if(e.target.classList.contains('popup-close') || e.target.classList.contains('overlay')){
            this.classList.add('slide-out');
            this.classList.remove('slide-in');
            document.body.style.overflow = '';
        }else{

            this.classList.remove('slide-out');
            this.classList.add('slide-in');
             
        }
           
    })
    
// Create calculation of price


let selected = document.querySelector('.fake-select__selected'),
fakeSelectList = document.querySelector('.fake-select__list'),
fakeSelectItem = document.querySelectorAll('.item'),

option = document.querySelectorAll('option');

    let calculatePrice = {

        countOfPeople: 0,
        countOfDay: 0,
        defaultPrice: 25

    };

  fakeSelectList.addEventListener('click', function(e){

        if(e.target.classList.contains('item')){

            calculatePrice.defaultPrice = +e.target.dataset.value;
            total.textContent = (calculatePrice.defaultPrice * calculatePrice.countOfPeople * calculatePrice.countOfDay).toFixed(2) + '$';
        }
  });


    for(let i = 0; i < inputs.length; i++){

        inputs[i].addEventListener('input', function(e){
        let regExp = /\D/g;
  
        if(this.value.split('')[0] === '0'){

            this.value = this.value.substr(1);
        }
              this.value = this.value.replace(regExp, '');
        calculatePrice.countOfDay = +countDay.value;
        calculatePrice.countOfPeople = +counterPeople.value;
        total.textContent = (calculatePrice.defaultPrice * calculatePrice.countOfPeople * calculatePrice.countOfDay).toFixed(2) + '$';

        });
    };

    // Svyazka realnogo selecta s feykovim

    
   // Functions

function hided(className){

	className.classList.remove('active');
	
};

function showed(className){

	className.classList.add('active');

};

// Events

selected.addEventListener('click', function(e){

	if(fakeSelectList.classList.contains('active')){

		hided(fakeSelectList);

	} else{

		showed(fakeSelectList);
		
	}
});

fakeSelectList.addEventListener('click', function(e){


	if(e.target.classList.contains('item')){

		selected.textContent = e.target.textContent;
		fakeSelectList.classList.add('active');
		let setValue = +e.target.dataset.value;

		for(let i = 0; i < option.length; i++){

			if(setValue == option[i].value)

				select.value = setValue;
		}
	}

});


document.addEventListener('click', function(e){

	if (e.target.className !== 'fake-select__selected') {

		hided(fakeSelectList);
	}
});

});

    