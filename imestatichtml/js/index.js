/*
* @Author: anchen
* @Date:   2016-11-17 12:07:34
* @Last Modified by:   anchen
* @Last Modified time: 2016-11-24 15:25:37
*/
var yun={
    banner:{},
    solution:{}
}

yun.banner.banners=(function(){
    var bannersdiv=$("#banner div.banners");
    var imgnum=bannersdiv.find("img");
    var len=imgnum.length;
    var t;
    if(len<2) return;
    var controls=$("<div class='controls'></div>").appendTo(bannersdiv);
    for(var i=0;i<len;i++){
        var span= $("<span></span>");
        if(i==0){
            imgnum.eq(i).css("z-index",100);
            span.attr("class","current");
        }
        span.appendTo(controls);
    }
    function changeimg(index,next){
        imgnum.css("z-index","0");
        imgnum.eq(index).css("z-index","100");
        imgnum.eq(next).css("z-index","99");
        imgnum.eq(index).fadeOut("1000",function(){
        imgnum.css("display","block")
        imgnum.eq(index).css("z-index","0")
        });


    }
    function step(){
        var cur=bannersdiv.find("span.current");
        var index=cur.index();
        var next=index+1;
        if(next==len){
            next=0;
        }
        cur.removeAttr("class");
        cur=bannersdiv.find("span").eq(next);
        cur.attr("class","current");
        changeimg(index,next)

    }
    function auto(){
        t=setInterval(step,2000);
    }

    auto();

    var spans=controls.find("span");
    spans.on("click1",function(i){

       clearInterval(t);
       var cur=bannersdiv.find("span.current");
       var index=cur.index();
       spans.removeAttr("class");
       $(this).attr("class","current");
       changeimg(index,i);

    })

})()


yun.banner.sidebar=(function(){
    var icons=$("#banner div.sidebar div.icon");
    var tooltips=$("#banner div.sidebar div.tooltip");
    icons.hover(function(){
        var data=$(this).data("for");
        tooltips.filter("."+data).css("display","block");
    },function(){
        var data=$(this).data("for");
        tooltips.filter("."+data).css("display","none");
    })
})()

yun.solution.solution_item=(function(){
    var solution_items=$("#solution div.items>div.solution-item>div>div.mask");
    solution_items.hover(function(){
        $(this).stop(true,true).css("backgroundColor","red").animate({opacity:'.7'},'fast');
        //$(this).stop(true,true).css("backgroundColor","rgba(244,230,0,1)").animate({opacity:'0.9'},'fast');
        //$(this).stop(true,true).css("backgroundColor","rgba(0,0,0,.7)").animate({opacity:'0.9'},'fast');
        //$(this).stop(true,true).css("backgroundColor","rgba(246,173,5,1)").animate({opacity:'0.9'},'fast');
    },function(){
        $(this).animate({opacity:'0.0'},'slow');
    })

})()