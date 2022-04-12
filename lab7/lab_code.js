function calc(operator) {
    op1 = jQuery('#op1').val()
    op2 = jQuery('#op2').val()
    op1_int = parseInt(op1)
    op2_int = parseInt(op2)
    button_text = "<button class='hide_1'> remove this </button>"
    // operator = "+"

    switch (operator) {
        case "plus":
            calculation = op1_int + op2_int
            result = op1 + "+" + op2 + "=" + (parseInt(op1) + parseInt(op2))
            jQuery('#result').html(result)
            jQuery('#history').append("<div class='add'>" + result + button_text + "</div>")
            break;

        case "minus":
            result = op1 + "-" + op2 + "=" + (parseInt(op1) - parseInt(op2))
            jQuery('#result').html
            $('#history').append("<div class='subtraction'>" + result + button_text + "</div>")
            break;

        case "times":
            result = op1 + "*" + op2 + "=" + (parseInt(op1) * parseInt(op2))
            $('#result').html(result)
            $('#history').append("<div class='multiplication'>" + result + button_text + "</div>")
            break;

        case "divide":
            result = op1 + "/" + op2 + "=" + (parseInt(op1) / parseInt(op2))
            $('#result').html(result)
            $('#history').append("<div class='division'>" + result + button_text + "</div>")
    }
}


// function tmp() {
//     calc(thisid);
// }


function hide_() {
    // $(this).remove();
    $(this).parent().remove();
} // 이게콜이 안됐단 건.. .hide 줄이 안 돌았따ㅡㄴ건데 클래스가 잘못됐ㅆ거나.. 여기선 이 버튼 이 클래스가 이미 웹 구현되소 DOM..

//셋업펑션이 저 .hide 버튼의 조재를 몰라서 click과 바운딩이 안됨..

//.hide가 그 당시에 업던거야..  그럼 어케 했어 옜날에 bind함수를 썼어 jquery는
//요새는 .on이란 메서드를 씀. 2개의 인자 
//.on("click", hide_)  이벤트랑 ,,를 받음.
//디코에 캡쳐된 슬라이드 보면 어떤 이벤트..든 간에 저 ㅋㄹ릭,키터치 등등 다.. .on이벤트로 핸들링 가능. 첫 인자가 이벤트의 타입이어야 함. 둘은 같은 거임
// .click이랑 .on 슬라이드

//그래서 만약 이벤트가 추가된 게 after creation webpage, .on은 여전히 작동함.
function setup() {
    // alert();
    jQuery('.button_').click(calc);

    $('.button_').click(function () { // anonymous fn notation.. don't get any input.
        calc(this.id); //referring object hat i'm clicking on.. by .button_ 나빌은  바디를 버튼 클래스로 했네..
    });

    // $('.hide').click(hide_) // 안돼! 이제 on으로쓰자!ㅋㅋ
    // $('.hide').on(hide_) // ㅇㅋ on. 근데 이것도 dom이 구현이 안됐어
    $('body').on("click", '.hide_1', hide_) // 그르ㅐ서 인자가 3개여야 함. 2번쨰가 ht런츠면 오키ml elem. page creation 당시 body는 있었으니까!! 콜 가능한 거 ㅎㅎ 바디 아니어도 첨에 콜되는 패
            //setup에서 $(document). 자체가 이미 html을 다 구현하고 div랑 html 배치를 다 끝낸 뒤에 setup 콜하는 거임..
            //.hide는 이 js 안에서 구현된 클래스

}

jQuery(document).ready(setup); //setup이 callback fn임 인자인 동시에 불러질 함수지.  

//debugging tip으로 html에 op1,2는  상수 박아서 해도 좋을듯



// $('body').on("click", '.hide', function () {
//     $(this).parent().remove();)
// }  you can do that.. but not that modular.... don't make stair case like this.... we can see '*promise* later..'