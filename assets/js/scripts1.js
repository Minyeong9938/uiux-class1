// $(document).ready(function () {
//     $("button").click(function () {
//         $(this).hide();
//     })
// });


// $(document).ready(function () {
//     $("button").click(function () {
//         // class 명 갖고올 때
//         // $(".title").hide();

//         // id값으로 갖고올 때
//         // $("#tit").hide();

//         // 태그로 갖고올 때
//         // $("h2").hide();

//         // $(".title.on").hide();

//         // $("[href]").hide();

//         $("[href='https://www.naver.com/']").hide();

//     })
// });



// 이벤트

// $(function () {
// click
// $(".btn").click(function () {
//     $(".title").css("background-color", "pink");
// })

// dblclick
// $(".btn").dblclick(function () {
//     $(".title").css("background-color", "pink");
// });

// mouseenter
// $(".title").mouseenter(function () {
//     $(this).css("background-color", "skyblue");
// });

// mouseleave
// $(".title").mouseleave(function () {
//     $(this).css("background-color", "pink");
// });

// hover
// $(".title").hover(function () {
//     $(this).css("color", "red");
// });

// mousedown
// $(".title").mousedown(function () {
//     $(this).css("background-color", "yellow");
// });

// mouseup
// $(".title").mouseup(function () {
//     $(this).css("background-color", "red");
// });
// })


// focus, blur, change
// $(function () {
// $(".input-box").focus(function () {
//     $(this).css("background-color", "yellow");
// });

// $("[type='text']").blur(function () {
//     $(this).css("background-color", "pink");
// });

// $(".input-box").change(function () {
//     $(this).css("background-color", "blue");
// });
// });

// on
$(function () {
    // $(".event").click(function () {
    //     $(this).css("color", "red");
    // });

    // $(".event").mouseenter(function () {
    //     $(this).css("background-color", "beige");
    // });

    // $(".event").mouseleave(function () {
    //     $(this).css("background-color", "aqua");
    // });


    // $(".event").on({
    //     // key: value
    //     click: function () {
    //         $(this).css("color", "red")
    //     },
    //     mouseenter: function () {
    //         $(this).css("background-color", "beige")
    //     },
    //     mouseleave: function () {
    //         $(this).css("background-color", "aqua")
    //     }
    // });

    $(".event").on("mouseenter mouseleave", function () {
        $(this).toggleClass("on");
    })
})