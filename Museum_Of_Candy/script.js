

$(function(){
    $(document).scroll(function(){
       const $nav = $("#mainNavbar");
       

        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
        console.log(this);
        

    });
});



