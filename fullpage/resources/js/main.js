$(function(){
     $('.btn_more').on('click', function(){
                $(this).addClass('on');
                $('.home ._more').addClass('loaded');
                
    });
            
    $('.btn_play').on('click', function(){
        $('.video-wrap').addClass('on').css({'display':'block'});
    });

    $('.btn_close').on('click', function(){
        $('.video-wrap').removeClass('on').css({'display':'none'});
        stopVideo();
    });
            
    
    
    
    
         
      /*<iframe width="1020" height="630" src="https://www.youtube.com/embed/N9qRlMrcwjw" frameborder="0" allowfullscreen></iframe>*/
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {  //1) 플레이어 API 코드가 다운로드 되는 즉시 실행.
        console.log('1. onYouTubeIframeAPIReady');   
        player = new YT.Player('player', {
          height: '630',
          width: '1020',
          videoId: 'N9qRlMrcwjw',
          playerVars: { 'autoplay': 1, 'controls': 1 },
          events: {
            'onReady': onPlayerReady  //2)onReady가 되면 onPlayerReady 함수 호출.
            //'onStateChange': onPlayerStateChange  6초뒤 재생중지
          },
            start:'0'
        });
      }

      function onPlayerReady(event) {
        console.log('2. onPlayerReady');
        event.target.playVideo();
      }
        
      var done = false;
      
        function stopVideo() {  //재생중지 
            player.stopVideo();
        }

        
    
        
        /* 인스타그램*/
        var galleryFeed = new Instafeed({
              get: "user",
              userId: 5444233121,
              accessToken: "5444233121.6219099.c1988e8466064ab996cc2d1469df3a14",
              resolution: "low_resolution",
              useHttp: "true",
              limit: 8,
              template: '<div class="col-md-4"><a href="{{link}}"><div class="img-featured-container"><div class="img-backdrop"></div><div class="description-container"><div class="icon-wrap"><img src="resources/images/main/icon_heart.png" class="icon icon-heart"><span class="likes"> {{likes}}개</span><img src="resources/images/main/icon_balloon.png" class="icon icon-balloon"><span class="comments"> {{comments}}개</span></div></div><img src="{{image}}" class="img-responsive"></div></a></div>',
              target: "instafeed-gallery-feed",
              after: function(response) {
                // disable button if no more results to load
                console.log(response);

                if (!this.hasNext()) {
                  btnInstafeedLoad.setAttribute('disabled', 'disabled');
                }
              },
            });
            galleryFeed.run();

        var btnInstafeedLoad = document.getElementById("btn-instafeed-load");
        btnInstafeedLoad.addEventListener("click", function() {
          galleryFeed.next()
        });
        
})