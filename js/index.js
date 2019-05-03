$(document).ready(function(){
    $(".drop").click(function(){
        $(this).css("display","none");
        $(this).parent().find(".pack").css("display","block");
        $(this).parent().parent().find(".list_main").css("display","none");
    });

    $(".pack").click(function(){
        $(this).css("display","none");
        $(this).parent().find(".drop").css("display","block");
        $(this).parent().parent().find(".list_main").css("display","block");
    });
});