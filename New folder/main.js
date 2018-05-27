$(function(){
    let USER_QUERY = $("#keyword").val();
    $(".btn-primary").click(function(){
        $.ajax({
            url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${USER_QUERY}&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw`,
            type: 'GET',
            
            success: function(res){
                console.log('success',res);
            },
            error: function(err){
                alert(err);
            }
        })
    })
})