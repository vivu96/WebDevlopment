// desendants

// $(document).ready(function () {
//     $("div").find("p").css((
//         {
//             "color": "red",
//             "border":"2px solid red"
//         }
//     ))
// });
//  $(document).ready(function () {
//     $("p").children().css(
//         {
//             "color":"pink",
//         "border": "2px solid blue"        
//         })
//  });
//  $(document).ready(function () {
//     $("span").parentsUntil().css(
//         {
//             "color":"red",
//             "border": "2px sokid orange"
//         }
//     )
//  });

// siblings
$(document).ready(function () {
    $("h2").siblings().css({
        "color":"red",
        "border": "2px solid red"
    })
});