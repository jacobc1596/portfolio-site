// $("h1").hide();
// $(".avatar").hide();
$(".purgatory").hide();
// $("h1").fadeIn(3000);
// $(".avatar").slideDown(3000);

$("h1").slideDown(3000);
$(".avatar").slideDown(3000);


function showImage(){
    $(".purgatory").show(0);
    $("#nav2").css({transition:"0.5s"});
    $("#nav2").css({transform:"translate(-200px, 700px) rotate(60deg)"});
    $(".avatar").css({visibility:"hidden"});
    $(".avatar-hover").css({visibility:"visible"});
    $(".avatar-hover").css({transform:"rotate(20deg) translate(0px, 200px)"});
    $(".title").css({transform:"rotate(20deg) translate(0px, 200px)"});
    setTimeout(function(){
        hideImage();   
    },500);
}

function hideImage(){
    $("nav a").css({transform:"translate(0px,0px)"});

    $(".avatar-hover").css({transform:"rotate(0deg)"});
    $(".title").css({transform:"rotate(0deg)"});
    $(".avatar-hover").css({visibility:"hidden"});
    $(".avatar").css({visibility:"visible"});
}

