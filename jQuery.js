$(document).ready(function(){

    alert('hello world')
    $("button").click(function()
    {
        $("#vivek").hide();
        $("ul li:first").hide();
        $("ul li:first-child").hide();
        // $("h1").hide();
        // $("[href]").hide();   for all link hiding
        // $("a[target='_blank'] ").hide();  for all target with name_blank
        $("a[target!='_blank'] ").hide(); 
        // $(":button").hide();   //for button hiding
 

    })
})
$(document).ready(function()
{
    $("tr:even").css("background-color" ," yellow")
    $("tr:odd").css("background-color" ,"pink")
    
})
// mouse event
$(document).ready(function()
{
    $('#box').click(function()
    {
        $('#box').css('background-color' ,'green');
        $('#box').css('color' ,'white');
        $('#box').css('border' ,'5px dotted pink');
             
    }) 
    $('#box').dblclick(function()
    {
        $('#box').css('background-color' ,'yellow');
        $('#box').css('color' ,'black');
        $('#box').css('border' ,'1px solid pink');
             
    })
    $('#box').contextmenu(function()
    {
        $('#box').css('background-color' ,'blue');
        $('#box').css('color' ,'white');
        $('#box').css('border' ,'1px solid white');
             
    })
    $('#box').mouseleave(function () { 
    
        $('#box').css('background-color' ,'tan');
        $('#box').css('color' ,'white');
        $('#box').css('border' ,'1px solid blue');
             
    })
     $('#box').mouseenter(function () { 
    
        $('#box').css('background-color' ,'black');
        // alert('you enter this paragraph and now will be black'),
        // alert('bye you going from this paregraph now colore will change')
        $('#box').css('color' ,'white');
        $('#box').css('border' ,'1px solid blue');
             
    })
    $('#box').hover(function () { 
    
        $('#box').css('background-color' ,'black');
        // alert('you enter this paragraph and now will be black')
    },
        function(){
        // alert('bye you going from this paregraph now colore will change')
        $('#box').css('color' ,'white');
        $('#box').css('border' ,'1px solid blue');
             
    })
})
$(document).ready(function(){
    $("p").click(function(){
      $(this).hide();
    });
  });

  $(document).ready(function(){
    $("input").focus(function(){
      $(this).css("background-color", "yellow");
    });
    $("input").blur(function(){
      $(this).css("background-color", "green");
    });
  });

$(document).ready(function()
{
    // $('#hide').click(function()
    // {
    //     $('.1').hide(2000);
    // })
    $('#show').click(function()
    {
        $('.1').toggle(2000);
    })
})

$(document).ready(function () {
    $('#btn').click(function () { 
        $('#div1').fadeTo(3000, 0.15);
        $('#div2').fadeTo(3000, 0.50);
        $('#div3').fadeTo(3000, 0.75);
        
    });
});

// $(document).ready(function () {
//     $('#flip').click(function () { 
//         $('#penal').slideDown("slow");        
//     });
// });
    $(document).ready(function () {
        $('#flip').click(function() { 
            $('#penal').slideToggle("slow");
            
        });
    });



    $(document).ready(function () {
        $('#cont').click(function () { 
            $('#box3').animate(
                {
                    left : '500px',
                    width : '=+ 100 px',
                    fontSize : '40px',
                    border : '5px solid black', 
                    boderRadius : '=+15px'  
                },1000
            )
    $('#box3').animate(
                {
            top : '500px',},1000)
            $('#box3').animate(
                {
            left : '0px',},1000)
            $('#box3').animate(
                {
            top : '0px',},1000)
            
        });
    });
    
$(document).ready(function () {
    $('#cont1').click(function () { 
        $('#box4').animate({
            width : '+=150px',
            height : '+=150px',
            fontSize: '+=35px',
            textAlign : 'center'
        },5000
        )
            
    });
});
$(document).ready(function () {
    $('stopBtn').click(function(){
        $('box4').stop();
    })
});

// $(document).ready(function () {
//     $('#box5').click(function () { 
//         $('#box6').slideDown(5000)
        
//     });
// });
// $(document).ready(function () {
//     $('#srcoll').click(function () { 
// $('#box5').stop();
        
//     });
// });

$(document).ready(function () {
    $('#btnn').click(function () { 
    $('h5').hide(6000,function () {
        alert("This peragraph now hidden ")
    });        
    });
});

























// $(document).ready(function()
// {
//     $("button").click(function()
//     {
//         $("p").hide();
//     })
// }
// )

// $(document).ready(function()
// {
    
// }