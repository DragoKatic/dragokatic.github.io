
  (function ($) {
  
  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });

    // CUSTOM LINK
    $('.custom-link').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height() + 10;

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);
  }
});
 })(window.jQuery);

//Year in the footer
var thisYear = new Date().getFullYear();
document.getElementById("year").innerHTML = thisYear;

/*
//History in browser
var index = document.location.lastIndexOf("/");
var filename = document.location.substr(index);
if(filename.indexOf("index.html")>-1){
   window.history.pushState('Drago Katić', 'Portfolio', 'https://dragokatic.github.io/');
}
if(filename.indexOf("papers.html")>-1){
   window.history.pushState('Drago Katić', 'Papers', 'https://dragokatic.github.io/papers.html');
}
if(filename.indexOf("ecommerce.html")>-1){
   window.history.pushState('Drago Katić', 'eCommerce', 'https://dragokatic.github.io/ecommerce.html');
}
if(filename.indexOf("seo.html")>-1){
   window.history.pushState('Drago Katić', 'SEO', 'https://dragokatic.github.io/seo.html');
}
if(filename.indexOf("websites.html")>-1){
   window.history.pushState('Drago Katić', 'Websites', 'https://dragokatic.github.io/websites.html');
}
*/