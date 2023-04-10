$(document).ready(function() {
	// $(".active").show();
 $("#next").click(function () {
 var x=$(".active");
 console.log(x.next())
    x.next().addClass("active");
    x.removeClass("active");
   
});

$("#prev").click(function () {
    var y=$(".active");
       y.prev().addClass("active");
       y.removeClass("active");

   });
   

    // $("#next").click(function () {
        
    //     $("#img1").hide(2000);
    //     $("#img2").show(2000);
    // });
    // $("#prev").click(function(){
    //     $("#img2").hide(2000);
    //     $("#img1").show(2000);

    // })
    
    //  $("img.active").hide();
    // $("img.active").removeClass("active");
    // nav.addClass("active");
    // nav.fadeIn(3000)

    // if (x==prev) {
    //     if (("#img1").is(":visible")) {
    //         $("#img2 #img3 #img4").hide();
    //     }
    //     else if (("#img2").is(":visible")) {
    //         $("#img3 #img4 #img1").hide();
    //     }
    //     else if(("#img3").is(":visible")){
    //         $("#img2 #img4 #img1").hide();
    //     }
    //     else{
    //         $("#img2 #img3 #img1").hide();

    //     }
    // }   
    //     var x = $(this).attr('id')
    // console.log(x);
    // if (x==".prev") {
       
    // }
    
    // if(x=="prev") {
    //     nav = $("img.active").prev('img');
    //     if(nav.length == 0) nav = $("img").last();
    // } else if(x=="next") {
    //     nav = $("img.active").next('img');
    //     if(nav.length == 0) nav = $("img").first();
    // }
    // $("img.active").hide();
    // $("img.active").removeClass("active");
    // nav.addClass("active");
    // nav.fadeIn(3000);
    // if (x==prev) {
    //     if (("#img1").is(":visible")) {
    //         $("#img2 #img3 #img4").hide();
    //     }
    //     else if (("#img2").is(":visible")) {
    //         $("#img3 #img4 #img1").hide();
    //     }
    //     else if(("#img3").is(":visible")){
    //         $("#img2 #img4 #img1").hide();
    //     }
    //     else{
    //         $("#img2 #img3 #img1").hide();

    //     }
    // }   
    
  
});









