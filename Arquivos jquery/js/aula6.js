$(function(){
    var ex = $('.ex1')

$('.ev1').click(function(){
    $(this).css("background","#ccc");
    ex.text("Voce clicou !!!!");
});



$('.ev2').dblclick(function(){
    $(this).css("background","#ccc");
    ex.text("Voce clicou duas vezes !!!!");
});

$('.ev3').focusin(function(){
    $(this).css("background","#ccc");
    ex.text("Voce deu foco !!!");
}).focusout(function(){
    $(this).css("background","#000");
    ex.text("Voce deu foco !!!");

});

$('.ev4').hover(function(){
    $(this).css("background","#ccc");
    ex.text("Voce passou o mouse !!!");

});

$('.ev5').mousedown(function(){
    $(this).css("background","#ccc");
    ex.text("Voce apertou o botao do mouse !!!");

}).mouseup(function(){
    $(this).css("background","#000");
    ex.text("Voce soltou o botao do mouse !!!");
});

var a = 0;
$(".ev6").mouseenter(function(){
    a+= 1;
    ex.text("Entradas do Mouse:"+ a);
}).mouseout(function(){
    ex.text("saida do Mouse:"+ a);

});







});

