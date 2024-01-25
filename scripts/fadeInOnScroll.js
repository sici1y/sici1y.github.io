$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".tag");
    var imgs = $(".tagIMG")
  
    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i];
  
      if ($(tag).position().top < pageBottom) {
        $(tag).addClass("visible");
      } else {
        $(tag).removeClass("visible");
      }
    }

    for (var j = 0; j < imgs.length; j++) {
      var img = imgs[j];
  
      if ($(img).position().top < pageBottom) {
        $(img).addClass("visible");
      } else {
        $(img).removeClass("visible");
      }
    }
  });
  