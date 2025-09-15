let btn = document.querySelector(".btn");

btn.addEventListener("click", clickevent);
btn.addEventListener("click", function () {
    alert("버튼 클릭함22");
});

function clickevent() {
    alert("버튼 클릭함");
}

// removeEventListener 이벤트 제거 방법
btn.removeEventListener("click", clickevent);



// =====================================

// 마우스 이벤트 종류

// mousedown
// mouseup
// mouseenter
// mouseleave
// mousemove

let box1 = document.querySelector(".box1");

// box1.addEventListener("mousedown", function () {
//     console.log("마우스 클릭이 눌렸을 때");
// });

// box1.addEventListener("mouseup", function () {
//     console.log("마우스 클릭이 떼졌을 때");
//     box1.style.backgroundColor = "blue";
// });

// box1.addEventListener("mouseenter", function () {
//     console.log("해당 요소에 진입시 발생하는 이벤트");
//     box1.style.backgroundColor = "blue";
// });

// box1.addEventListener("mouseleave", function () {
//     console.log("요소에서 벗어났을 때 발생");
//     box1.style.backgroundColor = "blue";
// });

// box1.addEventListener("mouseover", function () {
//     console.log("요소 안에 진입 시 발생(자식요소 폼함)");
//     box1.style.backgroundColor = "blue";
// });

// box1.addEventListener("mouseout", function () {
//     console.log("요소에서 벗어났을 때 발생(자식요소 포함)");
// });

// box1.addEventListener("mousemove", function () {
//     console.log("마우스 포인터가 요소 위에 움직였을 때 발생하는 이벤트");
// });



// 키보드 이벤트

let inputBox = document.querySelector(".input-box");

// 키보드 눌렸을 때 발생하는 이벤트 keypress, keydown
// inputBox.addEventListener("keypress", function () {
//     console.log("특수 키(shift, alt, ctrl, 방향키 등등)는 안먹힘");
// });

// inputBox.addEventListener("keydown", function () {
//     console.log("모든 키에서 발생");
// });

// inputBox.addEventListener("keyup", function () {
//     console.log("키보드를 눌렀다가 뗐을 때 발생하는 이벤트");
// });



// 포커스 이벤트

// inputBox.addEventListener("focus", function () {
//     console.log("focus");
// });

// inputBox.addEventListener("blur", function () {
//     console.log("요소가 포커스를 잃을 때. 다른 곳을 클릭하거나 Tab으로 이동하면 발생함");
// });

// inputBox.addEventListener("change", function () {
//     console.log("값이 변경되고 포커스를 잃었을 때 이벤트 발생");
// });