current_page_id = null; //이렇게 글로벌 변수를 만들자. 함수끼리 share할 수 있게..
results_array = null;
page_size = null;

function paginate_menu() {
    // alert()
    $('#numbered_buttons_group_').empty()
    last_page = Math.ceil(results_array.results.length / page_size);

    for (i = 1; i <= last_page; i++) //1에서 나머지까지 1부터 시작하니 <=
    {
        x = `<button id="${i}" class="numbered_buttons"> ${i}</button>`;
        $('#numbered_buttons_group_').append(x);
    }
}

function display_results(current_page_id, page_size) {
    starting_index = page_size * (current_page_id - 1)
    ending_index = starting_index + page_size

    $('#results_').empty();
    for (i = starting_index; i < ending_index; i++) {
        $("#results_").append("Movie #"+ (i + 1) + "<br>");
        $("#results_").append(results_array.results[i].original_title + "<br>")
        $("#results_").append(results_array.results[i].overview + "<br>")

        x = results_array.results[i].poster_path
        img_html = `<img src='https://image.tmdb.org/t/p/w500${x}' width=100px;>`
        $("#results_").append(img_html + "<br>")


        k = `<button class='backdrop_button' id='${results_array.results[i].backdrop_path}'> show backdrop!</button>`
        $("#results_").append(k + "<br>")
        $("#results_").append("<hr>")
    }

}

function get_movie_data(data) {
    // alert()
    // console.log(data);
    results_array = data;    
    page_size = Number($('#page_size_ option:selected').val())
    paginate_menu();
    display_results(1, page_size);
}


function call_ajax() {
    movie_name = $('#movie_name_').val()
    $.ajax({
        "url": `https://api.themoviedb.org/3/search/movie?api_key=4ff6dae1c8fff59566fceeb1e3e3eb55&query=${movie_name}`, // 요 주소 접속하면 json얻어옴ㅋㅋ
        "type": "get",
        "success": get_movie_data
    })


    $('#all_page_buttons').show(); //이렇게 숨기자 ㅋㅋ
    $('#prev').hide();
    $('#next').hide();
}



function show_numbered_page_result() {
    w = $(this).attr("id");
    current_page_id = Number(w)
    // $("#results_").html(`<h1> Display: (${current_page_id}, Page size) </h1>`)
    display_results(current_page_id, page_size)

    $('#prev').show();
    $('#next').show();

}

function first() {
    $('#prev').show();
    $('#next').show();
    // $("#results_").html(`<h1> Display: ${current_page_id}, Page size </h1>`)
    display_results(1, page_size)
}

function last() {
    $("#results_").html(`<h1> Display: 7, Page size </h1>`)
    $('#prev').show();
    $('#next').show();
    display_results(last_page, page_size)
}

function prev() {
    if (current_page_id > 1) {
        current_page_id--;
        display_results(current_page_id, page_size)
    }
}

function next() {
    if (current_page_id < 7) {
        current_page_id++;
        display_results(current_page_id, page_size)
    }
}


function display_backdrop() {
    // alert()
    w = $(this).attr("id") // k에서 우리가 id를 잘해놔서 편할걸)ㅋㅋ
    $("#right_div").html(`<img src='https://image.tmdb.org/t/p/w500${w}' width="100%">`)

}

function drop_down_change() {
    z = $(this).val();
    page_size = Number(z);
    paginate_menu();
    display_results(current_page_id, page_size);

}

function setup() {
    $('#search_button').click(call_ajax);
    $('body').on("click", ".backdrop_button", display_backdrop);
    // $('header button').click(header_button);   //index draft 기준 근데 이럼 아래 셀렉터들이랑 중복이라 충돌하니 다음 같이 버튼 1~7은 클래스 주자.
    $('body').on("click", ".numbered_buttons", show_numbered_page_result); // 이건 온으로 해줘야 ㅋㅋ
    $('#first').click(first);
    $('#last').click(last);

    $('#prev').click(prev);
    $('#next').click(next);

    // $('#prev').hide();
    // $('#next').hide();

    $('#all_page_buttons').hide();

    $("select").change(drop_down_change);


}

$(document).ready(setup);