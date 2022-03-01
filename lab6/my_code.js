// function history(result) {
//     old = jQuery('#history').html()
//     // new_history = old + "\r\n" + result
//     // jQuery('#history').html(new_history)
//}

function add() {
    op1 = jQuery('#op1').val()
    op2 = jQuery('#op2').val()
    operator = "+"
    calculation_result = (op1 + operator + op2 + "=" + (parseInt(op1) + parseInt(op2))).css("background-color", "red")

    jQuery('#result').html(calculation_result)
    old = jQuery('#history').html()
    jQuery('#history').html(old + "<br>" + calculation_result)
    

    // jQuery('#result').html(calculation_result)
    // old = jQuery('#history').html()
    // jQuery('#history').html($('#result').css("background-color", "red"))
    // 이러면 result엔 암것도 안 나오고 #history에만 적용되서 다 먹어버림..

    // jQuery('#result').html(calculation_result)
    // old = jQuery('#history').html()
    // new_result = $('#result').css("background-color", "red")
    // jQuery('#history').html("<br>" + new_result)
    
    // 이러면 #result에 다 물려서 나옴..



    /*나빌:

    css class= blue'
    .blue { 
        background-color: blue;
    }

    
    html 메서드에서 html 코드를 이 JS 코드에 inject하는거야 이렇게 ''나 ""f로 ㅋㅋ
    왜 class 'blue'라 했냐면 "div"에서 이미 더블코테이션 썼으니까..
    안 그럼 브라우저가 헷갈림
    서로 구분 가능학 ㅔ그렇게 해 ㅎㅎ
    'br'은 옵셔널임. 어펜드 썼다고 해도 span "<br>"필요했을 것.
    상관 엇ㅂ는데 저렇게 줄로 하려면 div보다 span이 좀 더 이쁘지 않을까?
    ^ div, width: fit-content 하면 괜춘ㅋㅋㅋ */
}

function subtract() {
    op1 = jQuery('#op1').val()
    op2 = jQuery('#op2').val()
    operator = "-"
    calculation_result = op1 + operator + op2 + "=" + (parseInt(op1) - parseInt(op2))

    jQuery('#result').html(calculation_result)
    old = jQuery('#history').html()
    jQuery('#history').html(old + "<br>" + $('#result').css("background-color", "yellow"))
}

function multiply() {
    op1 = jQuery('#op1').val()
    op2 = jQuery('#op2').val()
    operator = "*"
    calculation_result = op1 + operator + op2 + "=" + (parseInt(op1) * parseInt(op2))

    jQuery('#result').html(calculation_result)
    old = jQuery('#history').html()
    jQuery('#history').html(old + "<br>" + result)
}

function divide() {
    op1 = jQuery('#op1').val()
    op2 = jQuery('#op2').val()
    operator = "/"
    calculation_result = op1 + operator + op2 + "=" + (parseInt(op1) / parseInt(op2))

    jQuery('#result').html(calculation_result)
    old = jQuery('#history').html()
    jQuery('#history').html(old + "<br>" + result)
}

function setup() {
    // alert();
    jQuery('#plus').click(add);
    jQuery('#minus').click(subtract);
    jQuery('#times').click(multiply);
    jQuery('#divides').click(divide);
}

jQuery(document).ready(setup);