// function history(result) {
//     old = jQuery('#history').html()

// }

function adding() {
    op1 = jQuery('#op1').val()
    op2 = jQuery('#op2').val()
    operator = "+"
    result = op1 + operator + op2 + "=" + (parseInt(op1) + parseInt(op2))
    // old_history =jQuery('#history').html()
    // new_history =jQuery('#history').append("<div class='add'>" + result + "</div>")
    
    jQuery('#result').html(result)
    jQuery('#history').append("<div class='add'>" + result + "</div>")
    // jQuery('#result').html(old + "<br>" + new);
    // jQuery('#history').html(old_history + result);

}

function subtracting() {
    op1 = jQuery('#op1').val()
    op2 = jQuery('#op2').val()
    operator = "-"
    result = op1 + operator + op2 + "=" + (parseInt(op1) - parseInt(op2))
    
    jQuery('#result').html
    $('#history').append("<div class='subtraction'>" + result + "</div>")
}

function multiplying() {
    op1 = jQuery('#op1').val()
    op2 = jQuery('#op2').val()
    operator = "*"
    result = op1 + operator + op2 + "=" + (parseInt(op1) * parseInt(op2))
    $('#result').html(result)
    $('#history').append("<div class='multiplication'>" + result + "</div>")
}

function dividing() {
    op1 = jQuery('#op1').val()
    op2 = jQuery('#op2').val()
    operator = "/"
    result = op1 + operator + op2 + "=" + (parseInt(op1) / parseInt(op2))
    $('#result').html(result)
    $('#history').append("<div class='division'>" + result + "</div>")
}

function increase_font_size() {
    size = $('#history').css("font-size")
    $('#history').css("font-size", parseInt(size) + parseInt("10"))
}

function decrease_font_size() {
    size = $('#history').css("font-size")
    $('#history').css("font-size", parseInt(size) - parseInt("10"))
}

function setup() {
    // alert();
    jQuery('#plus').click(adding);
    jQuery('#minus').click(subtracting);
    jQuery('#times').click(multiplying);
    jQuery('#divide').click(dividing);
    $('#increase_font').click(increase_font_size);
    $('#decrease_font').click(decrease_font_size);
}

jQuery(document).ready(setup);