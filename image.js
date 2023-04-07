$(document).ready(function () {
    $('#right').click(function (e) { 
        if (('.img1').is(':visible')) {
            ('.img2').hide(3000);
        }
        else
        {
            ('.img3').hide(3000);
        }
        
        $('#left').click(function () { 
            if(($(".img1").not(":visible")) && ($(".img2").is(":visible"))){
                $(".img2").show(3000);
            }else if(($(".img1").not(":visible")) && ($(".img2").not(":visible"))){
                $(".img3").show(3000);
            }
            
        });
    });
});