

const color = function () {
    setTimeout(function () {
        $("body").css("background-color", "rgb(255,0,0)");
        
    }, 50);
    setTimeout(function () {
        $("body").css("background-color", "rgb(0,255,0)");
    }, 100);
    setTimeout(function () {
        $("body").css("background-color", "rgb(0,0,255)");
    }, 150);
};

$(document).ready(function () {
    
    $("#party").click(function () {
        $("#party").hide();   
        setInterval(color, 150);
    });
});