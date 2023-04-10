$(document).ready(function(){
$(".left").click(function () { 

    var a="#box4";
    if (a==true) {
    console.log("true")        
    }
    else {
        console.log("false")
    }
    if(("#box1").is(":visible"))
    {
        ("#box2 #box3 #box4").hide();
    }
    else if (("#box2").is(":visible")) {
        ("#box1 #box3 #box4").hide();
    }
    else if(("#box3").is(":visible"))
    {
        ("#box1 #box2 #box4").hide();
    }
    else {
        ("#box1 #box2 #box3").hide();
    }
    
});

});