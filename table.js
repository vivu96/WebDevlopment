// $(document).ready(function () {
//     $("tr:even").addClass("tb")
//     $("tr:odd").addClass("demo")
//     $("tr").click(function () { 
//         $(this).toggleClass("tb demo");

//     });
// }); 



$(document).ready(function () {
    $("tr:even").addClass("tb");
    $("tr:odd").addClass("demo");
    var i=5;
    $('.btn').click(function () {
        // $(".table").last().after(
        $(".table").append(
            '<tr>' +
            '<td>'+ i++ +'</td>' +
            '<td>null   </td>' +
            '<td>CIVIL ENGG</td>' +
            '<td>B.TCH</td>' +
            '<th><button id="btn">remove</button></th>' +
            '</tr>'
        );
        $("tr:even").addClass("tb");
        $("tr:odd").addClass("demo");
    });
    $(document).on('click', '#btn', function () {
        $(this).parents('tr').remove();
    });
    

});
$(document).on('click', 'tr', function () {
        $(this).toggleClass("tb demo");   
   
});

 // var x = $(this).hasClass('demo');
    // console.log(x)
    // if (x == true) {
    //     $(this).removeClass('demo');
    //     $(this).addClass('tb');
    // }
    // else {
    //     $(this).removeClass('tb');
    //     $(this).addClass('demo');

    // }
    
// $(document).on('click', '#btn', function () {
//     $(this).parents('tr').remove();
// });







