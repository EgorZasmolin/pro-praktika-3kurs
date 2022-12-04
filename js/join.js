$("#signaup").click(function(){
    $(".author").css("transform","translateX(80%)");
    $(".signin").addClass("nodisplay");
    $(".signup").removeClass("nodisplay")
});

$("#signin").click(function(){
    $(".author").css("transform","translateX(80%)");
    $(".signup").addClass("nodisplay");
    $(".signin").removeClass("nodisplay")
})