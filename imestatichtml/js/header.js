/**
 *
 * @authors Your Name (you@example.org)
 * @date    2016-11-13 16:31:43
 * @version $Id$
 */

var header={};

header.nav=(function(){
    var href=document.location.href;
    var splits=href.split("/");
    var len=splits.length;
    var current=splits[len-1];
    console.log(current)
     var lisparent=$("#header .nav>ul>li");
     lisparent.each(function(index){
        var that=this;
        var a_links=$(this).find("a");
        a_links.each(function(){
            var link=$(this).attr("href");
            if(link.indexOf(current)!==-1){
                lisparent.removeClass("current")
                $(that).addClass("current")
                return;
            }
        })

    })
    lisparent.on("mouseenter",function(){
        $(this).find("ul").css("display","block")

    })
    lisparent.on("mouseleave",function(){
        $(this).find("ul").css("display","none")

    })
})()

header.signin=(function(){
    var divparents=$("#header .signin>div.registerparent");
    divparents.on("click",function(){
        divparents.find("div.pannel").css("display","none");
        $(this).find("div.pannel").css("display","block");
        return false;

    });
    $(document).on("click",function(){
        $(this).find("div.pannel").css("display","none");
        //return false;

    });

//针对IE浏览器下input框自动失去焦点问题
    var  inputs=$("#header .signin form input:not(:last)");
    inputs.on("click",function(){
        window.event.keyCode=9;
        return false;
    })

})()

