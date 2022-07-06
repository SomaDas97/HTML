$(document).ready(function(){
    $("#a").hover(function(){
        $("#a").css("background-color", "pink");
    },
    // function(){
    //     $(this).css("background-color", "white");
    // }
    );
    $("#a").click(function(){
        $("#a").css("background-color", "blue");
    });

});