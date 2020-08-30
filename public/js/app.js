//faq show div
$(".inner").click(function(e){
    $(this).parent().children("div.ans").slideToggle("slow");
    $(this).children("div.drpdn").toggleClass("drp-rot"); });