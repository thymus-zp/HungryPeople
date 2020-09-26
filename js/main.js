$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true
    });

//Smooth scrolling
    $('.menu').on('click','a', function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('html').animate({scrollTop: top}, 1000);
    });


//Burger menu
    $('.burger-btn, .menu__list-link').click(function(){
        $('.burger-btn, .menu').toggleClass('active');
    });



//Creating a position of the menu    
    var menuPosition = $('<div class=\"food__menu-position\"></div>');

    var positionName = $('<p class=\"food-name\">PIZZA QUATRO STAGIONI . . . . 55,68 USD</p>');
    positionName.appendTo(menuPosition);

    var positionDescription = $('<p class=\"food-description\">Integer ullamcorper neque eu purus euismod</p>');
    positionDescription.appendTo(menuPosition);


//Creating a container of the positions
    var positionContainer = $('<div class=\"food__menu-container\"></div>');

    for (let i = 0; i < 21; i++){
        menuPosition.clone().appendTo(positionContainer);
    }

    console.log(positionContainer);


//Adding the position to the menu  
    $('.tabs__item-content').append(positionContainer);

});