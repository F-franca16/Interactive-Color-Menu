// Defines standart color when page is loaded
$("body , #area-1").addClass("color1");
let windowWidth = $(window).width();
let botaoAtual;

// Defines the position of animated object related to button clicked when windows width change
$(window).resize(function(){
    windowWidth = $(window).width();    
    if(windowWidth <= 600){
        $(".animated-object").css("left",-15);
            if (botaoAtual === "1"){
                $(".animated-object").css("top", 5);
            }else if (botaoAtual === "2"){
                $(".animated-object").css("top", 115);
            }else if (botaoAtual === "3"){
                $(".animated-object").css("top", 225); 
            }
    }else{
        $(".animated-object").css("top",15);
            if (botaoAtual === "1"){
                $(".animated-object").css("left", 35);
            }else if (botaoAtual === "2"){
                $(".animated-object").css("left", 209);
            }else if (botaoAtual === "3"){
                $(".animated-object").css("left", 383); 
            }
    }
})

$("button").on("click",function(e){
// Identifies current button by id
    botaoAtual = e.currentTarget.id;

// responsive animation
    if(windowWidth > 600){
    switch (botaoAtual) {
        case "1":
                $(".animated-object").animate({ left: "35px" },800,"linear");
            break;
        case "2":
                $(".animated-object").animate({ left: "209px" },800,"linear");
            break;
        case "3":
                $(".animated-object").animate({ left: "383px" },800,"linear");
            break;
        default:
            break;
        }
    }else{
     switch (botaoAtual) {
        case "1":
                 $(".animated-object").animate({ top: "5px" },800);
            break;
        case "2":
                $(".animated-object").animate({ top: "115px" },800);
            break;
        case "3":
                $(".animated-object").animate({ top: "225px"},800);
            break;
        default:
            break;
    }
    }
    
    // Remove button style, so only one is applied
    $("body , div").removeClass(["color1", "color2", "color3"]);
    
    //add button style based on id
    $("body , #area-" + botaoAtual).addClass("color" + botaoAtual);
})