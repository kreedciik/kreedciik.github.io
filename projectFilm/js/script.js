'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."  
        ]
    };
    
    let adv = document.querySelectorAll('.promo__adv img'),
        moviesList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = document.querySelector('.adding__input'),
        checkBox = addForm.querySelector('[type="checkbox"]');
        
    // Functions
    
    const removeAdv = ( array ) => {
    
        array.forEach(item => {
            
            item.remove();
        });
    };
    
    const changeMaker = () => {
        
        document.querySelector('.promo__bg').style.background = 'url(img/bg.jpg)';
        document.querySelector('.promo__genre').textContent = 'Драма';
    
    };
    
    const sortArr = ( movies ) =>{
    
        movies.sort();
    };
    
    const createMovies = ( films, parent ) =>{
    
        sortArr( movieDB.movies );
        parent.innerHTML = "";
        films.forEach( ( item, index ) => {
        parent.innerHTML += `<li class="promo__interactive-item">${index + 1}. ${item}
        <div class="delete"></div></li>`;
    
    });

    document.querySelectorAll('.delete').forEach( (btn, i) => {

        btn.addEventListener('click', () => {

            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);
            createMovies( movieDB.movies, moviesList );
        })
    })
    };
    
    function checkInput(){
    
        if( addInput.value !== '' && addInput.value !== ' ' ){
    
            if( addInput.value.length > 21 )
            addInput.value = addInput.value.slice(0, 5) + '...';
            movieDB.movies.push(addInput.value);
            sortArr( movieDB.movies );
    
        } else{
    
            alert('Поле ввода не должно быть пустой!');
        }
    };
    
    addForm.addEventListener('submit', e => {
    
        e.preventDefault();
        const favorite = checkBox.checked;
        checkInput();
        createMovies( movieDB.movies, moviesList );
        const checked = checkBox.checked;   
        addForm.reset();
        if(checked){

            alert('Добавили любимый фильм');
            
        }
    });
    
    removeAdv( adv );
    changeMaker();
    createMovies( movieDB.movies, moviesList );
    
});
