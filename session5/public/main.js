$(function(){
    console.log("Loaded");

    $("#question").on("input", function(){
        let remainCharacter = 200 - $("#question").val().length;
        $("#remainCharacter").text(remainCharacter);
    });

    $(".nav-item").click(function(){
        $(".nav-link").addClass("active");
    })

    
})