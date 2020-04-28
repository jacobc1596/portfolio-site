$("h1").hide();
$(".avatar").hide();
$(".purgatory").hide();
$("h1").fadeIn(3000);
$(".avatar").slideDown(3000);

$("h1").slideDown(3000);
$(".avatar").slideDown(3000);


// function showImage(){
//     $(".button").hide(0);
//     $(".purgatory").show(500);
//     $(".avatar").css({visibility:"hidden"});
//     $(".avatar-hover").css({visibility:"visible"});
//     $(".avatar-hover").css({transform:"translate(0px, 110vh)"});
//     setTimeout(function(){
//         hideImage();   
//     },1000);
// }

// function hideImage(){
//     $(".avatar-hover").css({visibility:"hidden"});
//     $(".avatar-funeral").css({visibility:"visible"});
    
// }

 $(".button").click(function(){
    $(".button").hide(0);
    $(".avatar").css({visibility:"hidden"});
    $(".avatar-hover").css({visibility:"visible"});
    $(".purgatory").show(500);
    $(".avatar-hover").animate({
        top:'110vh'
    });
    $('html, body').animate({
        scrollTop: $("#1").offset().top}, 800);
    setTimeout(function(){
        hideImage();
    },1200)
 });

 function hideImage(){
    $(".avatar-hover").css({visibility:"hidden"});
    $(".avatar-funeral").css({visibility:"visible"});
 }