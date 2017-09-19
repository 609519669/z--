var PDF={
    PDF_content:{}
};
PDF.PDF_content.content_left=(function(){
    var lis=$("#PDF-content .content-left ul.box>li>a.box-header");
    lis.on("click",function(){
       $(this).toggleClass("active").next().slideToggle("fast");
    })

    var spancaret=$("#PDF-content .content-left ul.box>li.first");
    var span=spancaret.children("span");
    spancaret.on("click",function(){
        var current=span.toggleClass('dropup caret').attr("class");
        if(current==="caret"){
            lis.addClass("active").next("ul").slideUp("fast")
        }
        if(current==="dropup"){
            lis.removeClass("active").next("ul").slideDown("fast")
        }

    })
})()


PDF.PDF_content.content_right=(function(){
    var images=$("#PDF-content .content-right div.howtodo>img");
    images.each(function(i){
        var index=i+1;
        $(this).attr("src",function(){
            return "./images/PDF/"+index+".jpg";
        })
    })
})()