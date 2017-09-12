$(document).ready(function(){

    $(".fun").click(function () {
        $(".basketball").slideToggle();

    });
    $(".fun1").click(function () {
        $(".movie").slideToggle();

    });
    $(".fun2").click(function () {
        $(".book").slideToggle();
    });
    $(".fun3").click(function () {
        $(".military").slideToggle();
    });
    $(".fun4").click(function () {
        $(".cat").slideToggle();
    });

    $(".fun").click(function () {

        $(this).children(".more11").toggleClass('hidden');

        $(this).children(".more1").toggleClass('hidden');
    });
    $(".fun1").click(function () {

        $(this).children(".more11").toggleClass('hidden');

        $(this).children(".more1").toggleClass('hidden');
    });
    $(".fun2").click(function () {

        $(this).children(".more11").toggleClass('hidden');

        $(this).children(".more1").toggleClass('hidden');
    });
    $(".fun3").click(function () {

        $(this).children(".more11").toggleClass('hidden');

        $(this).children(".more1").toggleClass('hidden');
    });
    $(".fun4").click(function () {
        $(this).children(".more11").toggleClass('hidden');

        $(this).children(".more1").toggleClass('hidden');
    });


});

