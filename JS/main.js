$(document).ready(function(){
    $('.navbar__menu__mobile').click(function(){
        var check__visibility = $('.main__container').is(':visible');

        if(check__visibility)
        {
            $('.main__container').fadeOut(50);
            $('.mobile__navigation__page').fadeIn(200);
            $('.mobile__navigation__page').css('display', 'flex');
            return false;
        }
        else 
        {
            $('.mobile__navigation__page').fadeOut(200);
            $('.main__container').fadeIn(200);
            return false;
        }
    });
});