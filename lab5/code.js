function calculate_area() {
    alert(jQuery("body").html());
    alert(jQuery("#x").val());  //커멘트 풀고 꼭 해보셈

    r = parseInt(jQuery("#x").val());
    //console.log (r * r  * 22/7) 아님 아래 같이 해보든가
    jQuery("#p1").html(r * r * 22/7)
  
}

function setup() {
    jQuery("#calc").click(calculate_area);
}
jQuery(document).ready(setup);

//jquery아님 jQuery