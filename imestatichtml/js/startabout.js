var startabout={
    startabout_content:{}
};
startabout.startabout_content.content_left=(function(){
    var lis=$("#startabout-content .content-left ul.box>li>a.box-header");
    lis.on("click",function(){
       lis.addClass("active").next("ul").slideUp("fast")
       $(this).toggleClass("active").next().slideToggle("fast");
    })

    //var spancaret=$("#startabout-content .content-left ul.box>li.first");
    //var span=spancaret.children("span");
    // spancaret.on("click",function(){
    //     var current=span.toggleClass('dropup caret').attr("class");
    //     if(current==="caret"){
    //         lis.addClass("active").next("ul").slideUp("fast")
    //     }
    //     if(current==="dropup"){
    //         lis.removeClass("active").next("ul").slideDown("fast")
    //     }

    // })
})()

$(document).ready(function(){
    $("#startabout-content .content-left ul.box>li>a.box-header").eq(0).trigger("click");
});

startabout.startabout_content.content_right=(function(){
    var images=$("#startabout-content .content-right div.howtodo>img");
    var index=1

    images.each(function(){
        var datan=$(this).data("n");
        if(!datan){
             $(this).attr("src","./images/startabout/"+index+".jpg");
             index++;
        }
        else{
            $(this).attr("src","./images/startabout/"+ datan +".jpg");
        }
    })
})()