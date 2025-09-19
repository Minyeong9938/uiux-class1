// show, hide, toggle

$(function () {
    // show()
    $(".show-btn").click(function () {
        $(".image").show(3000);
        // 또는 "slow", "fast"로 시간 제어
    });

    // hide()
    $(".hide-btn").click(function () {
        $(".image").hide(2000, function () {
            // 콜백 함수. 이미지 숨기는 동작이 완료된 후 실행됨.
            alert("이미지 숨겨짐");
        });
    });

    // toggle()
    $(".toggle-btn").click(function () {
        $(".image").toggle(1000, function () {
            alert("이미지 토글");
        });
    });
});

$(function () {
    $(".fade-in-btn").on("click", function () {
        $(".box1").fadeIn();
        $(".box2").fadeIn("fast");
        $(".box3").fadeIn(2000);
    });

    $(".fade-out-btn").on("click", function () {
        $(".box1").fadeOut();
        $(".box2").fadeOut("slow");
        $(".box3").fadeOut(2000);
    })

    $(".fade-toggle-btn").on("click", function () {
        $(".box1").fadeToggle(1000);
        $(".box2").fadeToggle(2000);
        $(".box3").fadeToggle(3000);
    })


    $(".fade-to-btn").on("click", function () {
        $(".box1").fadeTo(1000, 0);
    });
});