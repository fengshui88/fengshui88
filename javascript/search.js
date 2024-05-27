$(document).ready(function($) {
    
    $('.listSearch li').each(function() {
        $(this).attr('searchData', $(this).text().toLowerCase());
    });
    $('.boxSearch').on('keyup', function() {
        var dataList = $(this).val().toLowerCase();
        $('.listSearch li').each(function() {
            if ($(this).filter('[searchData *= ' + dataList + ']').length > 0 || dataList.length < 1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

});

$(document).ready(function() {
    container: document.getElementsByClassName('horizontal-list-wrapper')
});

function gameSearch(data) {
    var filter, listGames, a, i;
    filter = data.value.toUpperCase();

    //console.log(filter);
    listGames = document.getElementsByClassName('game-one-half-slot slots-games');

    for (i = 0; i < listGames.length; i++) {
        a = listGames[i].getElementsByTagName("b")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            listGames[i].style.display = "";
        } else {
            listGames[i].style.display = "none";
        }
    }
}
$("img.lazyload").lazyload();