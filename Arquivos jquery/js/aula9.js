$(function(){
    var ex = $('.ex1')

    $('.ev1').click(function(){
        ex.hide('slow');
        //ex.hide('fast');
        //ex.hide(5000)
    });


    $('.ev2').click(function(){
        ex.show('slow');
        //ex.hide('fast');
    });

    $('.ev3').click(function(){
        ex.toggle('slow');
        //ex.hide('fast');
    });


    $('.ev4').keyup(function(){
        var texto = $(this).val();

        if(texto == 'hide')
        {
            ex.hide('slow');
        }
        if(texto == 'show')
        {
            ex.show('slow');
        }
        if(texto == 'toggle')
        {
            ex.toggle('slow');
        }



    });



});

