$(function(){
  
    $('img').error(function(){
        $('img').attr("src",'img/dog.png');
    });


/*
$('img').error(function(){
    
    var imagem = $(this).attr("src");
    alert('Imagem Indisponivel !!');
    $('img').attr("src","img/error.jpg");

});
*/

});
 

