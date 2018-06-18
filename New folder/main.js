$(function(){
    let nextPage = null;
    
    $("#search").submit(function(e){
        e.preventDefault();
        let USER_QUERY = $("#keyword").val();
        $.ajax({
            url: `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&maxResults=25&q=${USER_QUERY}&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw`,
            type: 'GET',
            
            success: function(res){
                let videos = res.items;
                
                $.each(videos, function(index,video){
                    $("#result-list").append(
                        `<a class="result col-md-12" href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank">
                            <img src="${video.snippet.thumbnails.high.url}" alt="">
                            <div class="video-info">
                                <h2 class="title">${video.snippet.title}</h2>
                                <p class="description">${video.snippet.description}</p>
                                <span>View >></span>
                            </div>
                        </a>`
                    )
                        
                })

                nextPage = res.nextPageToken ? res.nextPageToken : null;

                // $("#result-list").html(videos.join(""));
                
            },
            error: function(err){
                alert(err);
            }
        })

        $("#result-list").empty();
    })

    $(window).on("scroll", function(){
        if($(window).scrollTop() + $(window).height() >= $(document).height() - 100){
            if(nextPage){
                let USER_QUERY = $("#keyword").val();
                $.ajax({
                    url: `https://www.googleapis.com/youtube/v3/search?pageToken=${nextPage}type=video&part=snippet&maxResults=25&q=${USER_QUERY}&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw`,
                    type: 'GET',
                    
                    success: function(res){
                        let videos = res.items;
                        $.each(videos, function(index,video){
                            $("#result-list").append(
                                `<a class="result col-md-12" href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank">
                                    <img src="${video.snippet.thumbnails.high.url}" alt="">
                                    <div class="video-info">
                                        <h2 class="title">${video.snippet.title}</h2>
                                        <p class="description">${video.snippet.description}</p>
                                        <span>View >></span>
                                    </div>
                                </a>`
                            )
                                
                        })

                        // $("#result-list").append(videos.join(""));
                    }
                })
            } else{
                $("#result-list").append("<h2>Nothing more to show</h2>");
            }
        }
    })
})