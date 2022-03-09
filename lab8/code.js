






function get_movie_fn(data) {
    // alert()
    // console.log(data);
    for (i=0; i <data.results.length; i++){
    $("#results_").append(data.results[i].original_title +"<br>")
    $("#results_").append(data.results[i].overview +"<br>")
    x = data.results[i].poster_path
    img_html =`<img src='https://image.tmdb.org/t/p/w500${x}' width=100px;>`
    
    $("#results_").append(img_html + "<br>")

    k = `<button class='backdrop_button' id='${data.results[i].backdrop_path}'> show backdrop!</button>`
    $("#results_").append(k + "<br>")
    $("#results_").append("<hr>")


    }
}
//     $('#temp').html(data.main.temp)
//     // console.log(data.weather[0].description);
//     // console.log(data.weather[0].icon);
//     // // //dom 뒤집기 전에 이렇게 해서 함 보자 도나.
//     $('#p2').html(data.weather[0].description);
//     x= data.weather[0].icon; //string interpolatoin standby
//     // $('#img1').attr("src", console.log(data.weather[0].icon));
//     $('#img1').attr("src", 'http://openweathermap.org/img/wn/${x}@2x.png');



function call_ajax(){
    movie_name = $('#movie_name_').val()
    $.ajax( 
        {
            "url":`https://api.themoviedb.org/3/search/movie?api_key=4ff6dae1c8fff59566fceeb1e3e3eb55&query=${movie_name}`, // 요 주소 접속하면 json얻어옴ㅋㅋ
            "type": "get",    
            "success": get_movie_fn
        })  
}



function setup (){
    $('#get_movie').click(call_ajax);
    $('#body').
}

$(document).ready(setup);