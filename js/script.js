var rows = 150;
var columns = 150;
var $row = $("<div />", {class: 'row'});
var $square = $("<div />", {class: 'square'});

$(document).ready(function () {
    //add columns to the the temp row object
    for (var i = 0; i < columns; i++) {
        $row.append($square.clone());
    }
    //clone the temp row object with the columns to the wrapper
    for (var i = 0; i < rows; i++) {
        $("#container").append($row.clone());
    }
});

$(".square").hover(function() {
    $(this).addClass("hover");
});

$("#reset").click(function() {
    $(".square").removeClass("hover");
});
