function calc(operator) {
    op1 = jQuery('#op1').val()
    op2 = jQuery('#op2').val()
    op1_int = parseInt(op1)
    op2_int = parseInt(op2)
    button_text = "<button class='hide_1'> remove this </button>"


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




function hide_() {
    // $(this).remove();
    $(this).parent().remove();
}
function setup() {
    // alert();
    jQuery('.button_').click(calc);

    $('.button_').click(function () { // anonymous fn notation.. don't get any input.
        calc(this.id);
    });

    $('body').on("click", '.hide_1', hide_) 

}

jQuery(document).ready(setup); 