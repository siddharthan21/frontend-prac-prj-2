$(".head").click(function (e) { 
    if($(".list").css("display")==="flex"){
        $(".list").css("display","none").FadeOut;
    }else{
    $(".list").css("display","flex");
    }
});

$(".cat").click(function (e) { 
    if($(".cat-list").css("display")==="flex"){
        $(".cat-list").css("display","none").FadeOut;
    }else{
    $(".cat-list").css("display","flex");
    }
});

$(".hide-head").click(function(e){
    // var lists = 
    // alert(lists)
    if($(".hide-list").css("display") === "flex"){
        $(".hide-list").css("display","none")
    }
    else{
        $(".hide-list").css("display","flex")
    }
});

$(".menu").click(function(e){
    if($(".menu-2").css("display") === "flex"){
        $(".menu-2").css("display","none")
    }
    else{
        $(".menu-2").css("display","flex")
    }
});