function get_movie_fn(data) {
    // alert()
    // console.log(data);
    for (i = 0; i < data.results.length; i++) {
        $("#results_").append(data.results[i].original_title + "<br>")
        $("#results_").append(data.results[i].overview + "<br>")

        x = data.results[i].poster_path
        img_html = `<img src='https://image.tmdb.org/t/p/w500${x}' width=100px;>`
        $("#results_").append(img_html + "<br>")


        k = `<button class='backdrop_button' id='${data.results[i].backdrop_path}'> show backdrop!</button>`
        $("#results_").append(k + "<br>")
        $("#results_").append("<hr>")
    }
}


function call_ajax() {
    movie_name = $('#movie_name_').val()
    $.ajax({
        "url": `https://api.themoviedb.org/3/search/movie?api_key=4ff6dae1c8fff59566fceeb1e3e3eb55&query=${movie_name}`, // 요 주소 접속하면 json얻어옴ㅋㅋ
        "type": "get",
        "success": get_movie_fn
    })
}


function newfunc_() {
    // alert()
    w = $(this).attr("id") // k에서 우리가 id를 잘해놔서 편할걸)ㅋㅋ
    $("#right_div").html(`<img src='https://image.tmdb.org/t/p/w500${w}' width="100%">`)

}


function setup() {
    $('#get_movie').click(call_ajax);
    // $('body').on("click", ".backdrop_button", ( () => {console.log('hi')}));     //제발 여기서 다이렉트로 console.log()콜하지 마..
    $('body').on("click", ".backdrop_button", newfunc_);
}

$(document).ready(setup);