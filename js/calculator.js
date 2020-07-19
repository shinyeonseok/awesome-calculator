'use strict';

// 전역 변수
let display = document.getElementById('display');
let result = document.getElementById('result');
let numberClicked = false; 

function add(char) {
    if(numberClicked == false){
        if(isNaN(char) == true){
            console.log('연산 기호는 두번 연달아 사용할 수 없습니다.');
        } else {
            display.value += char;
        }
    } else {
        display.value += char;
    }

    if(isNaN(char) == true) {
        numberClicked = false;
    } else {
        numberClicked = true;
    }
}

// 지우기 기능
function del() {
    display.value = display.value.substring(0, display.value.length - 1);
}

// 결과 계산
function calculate() {
    let resultValue = eval(display.value);
    let displayValue = display.value;
    // 인풋 1자 이상만 결과계산 실행
    if(displayValue.length >= 1){
        result.value = resultValue;
    } else{
        reset();
    }
}

// 초기화
function reset() {
    display.value = "";
    result.value = "";
}

// 계산 엔터키 눌렀을 때 실행
function enterkey() {
    let displayValue = display.value;
    if (window.event.keyCode == 13) {
        if(displayValue.length >= 1){
            calculate();
        } else{
            reset();
        }
    }
}

