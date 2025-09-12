// creatElement() : 요소 생성
// appentChild() : 자식 요소 추가. 맨 마지막에 추가됨
// insetBefore()
// remove()
// parentNode

// 변수 선언
let btn = document.querySelector(".btn");
let input = document.querySelector(".input");
let frontBtn = document.querySelector(".front-btn");
let firstItem = document.querySelector(".first-item");
// console.log(input.value);
// console.log(firstItem);
let targetRemove = document.querySelector(".target-remove");
let removeBtn = document.querySelector(".remove-btn");




// 버튼 클릭 이벤트
btn.addEventListener('click', function () {
    // console.log('추가 버튼 클릭함');
    let list = document.createElement("li");
    let ul = document.querySelector(".list");
    // list.textContent = "오뎅";
    list.textContent = input.value;

    let button = document.createElement("button");
    button.textContent = "X"
    list.appendChild(button);
    button.classList.add("remove-btn")

    button.addEventListener('click', removeParentNode);

    ul.appendChild(list);
    input.value = '';
});


// 앞에 추가 버튼 클릭 이벤트
frontBtn.addEventListener('click', function () {
    // alert("앞에 추가 버튼 클릭함");
    let list = document.createElement("li");
    let ul = document.querySelector(".list");
    list.textContent = input.value;

    // ul.appendChild(list);
    ul.insertBefore(list, firstItem);
    input.value = '';

    let button = document.createElement("button");
    button.textContent = "X"
    list.appendChild(button);

    button.addEventListener('click', function (event) {
        // console.log(event.target.parentNode);
        event.target.parentNode.remove();
    });
});

targetRemove.addEventListener('click', function () {
    firstItem.remove();
});

removeBtn.addEventListener('click', removeParentNode);


function removeParentNode(event) {
    event.target.parentNode.remove();
};