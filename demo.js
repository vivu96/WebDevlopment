// stop function
$(document).ready(function () {
    $('#flip').click(function () { 
        $('#penal').slideDown(5000);      
    });
});
$(document).ready(function () {
    $('#btn1').click(function () { 
$('#penal').stop();
    });
});
// jQurey with html
$(document).ready(function () {
    $('#btn2').click(function () { 
        alert("text : " + $("#test").text());  
    });
    $("#btn3").click(function () { 
    alert(" text: " + $('#test').html());        
    });
});
$(document).ready(function () {
    $("#btn4").click(function () { 
    alert("text: " + $('#test1').val());        
    });
});

// set html

$(document).ready(function () {
    $('#btn5').click(function () { 
    $('#test2').text("hello world");
    $('#btn6').click(function () { 
    $('#test3').html("<b> hello there</b>");
    $('#btn7').click(function () { 
    $('#test4').val("vivek sharma");    
    });        
    });        
    });
});

$(document).ready(function () {
    $('#btn8').click(function () { 
    $('#w3').attr({
        "href": "https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_dom_attr_set",
        "title": "example"
    
    });        

    });
});
$(document).ready(function () {
    $('#btn9').click(function () { 
        $('#test5').append(" <b>vivek</b>");        
    });
});
$(document).ready(function () {
    $('#btn10').click(function () { 
    $('#list').append(" item <br>");
    });
});

$(document).ready(function () {
    $('#btn11').click(function () { 
        $('#test6').prepend(" vivek sharma ");        
    });
});
$(document).ready(function () {
    $('#btn12').click(function () { 
        $('#list1').prepend("list <br>");
    });
});
 $(document).ready(function () {
    $('#btn13').click(function () { 
        $('#list1').remove();
        
    });
 });
 $(document).ready(function () {
    $('#btn14').click(function () { 
        $('#list1').empty();
        
    });
 });
 $(document).ready(function () {
    $(window).scroll(function () { 
       $('#box').html("");
       $('#box').append($(window).scrollTop());
    console.log($(window).scrollLeft());        
    });
 });