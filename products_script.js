$(function(){
    start();
    var imgs=2;
    var now=0;
    function start(){
        $('#banner img').eq(0).siblings().fadeOut(5000);
        setInterval(function(){slide()},6000);

    };
    function slide(){
        now=now==imgs?0:now+=1;
        $("#banner img").eq(now-1).fadeOut(0);
        $("#banner img").eq(now).fadeIn(0);   
    };
});