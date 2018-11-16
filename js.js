$(document).ready(function(){

    

});

//detect mouse enter event
$(document).on("mouseenter","#sideImage",function(){

    //remove blue border from previously mouse entered images
    $(".image-border").removeClass("image-border");

    //add blue border to the mouse entered images
    $(this).closest(".side-image-div").addClass("image-border");

    //get src of current mouse entered image
    var image = $(this).attr("src");
    //change the src of main image
    $("#mainImage").attr("src",image);
});