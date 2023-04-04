$(document).ready(function () {
    $(document).keydown(function (e) {
        switch (e.which) {
            case 37:
                $("#animated-box").finish().animate({
                    left: "-=20px"
                })
                break;
            case 38:
                $("#animated-box").finish().animate({
                    top: "-=20px"
                })
                break;
            case 39:
                $("#animated-box").finish().animate({
                    left: "+=20px"
                })
                break;
            case 40:
                $("#animated-box").finish().animate({
                    top: "+=20px"
                })
                break;
        }
    });
})








// $(document).ready(function(){
// $('#fadeInBtn').click(function(){
//     $('#box').fadeIn(1000,function()
//     {
//         console.log('now it is showing')
//     });
//     $('#fadeOutbtn').click(function()
//     {
//     $('#box').fadeOut(1000, function(){
//         console.log('now it is not showing')


//     });
//     })
// })
// $('#fadeToggleBtn').click(function () { 
//     $('#box').fadeToggle(1000,function()
//     {
//         console.log('it is slow')
//     });
    
// });
// })