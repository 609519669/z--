var contactus={
    sendmessage:{}
};



contactus.sendmessage=(function(){
    var submit=$("div#email form button");
    var p=$("#attention p");
    var attentiontext=$("#attention p span");
    var attentionicon=$("#attention p i");

    function setempty(){
        var username=$("#mail_username");
         var email=$("#mail_email")
         var content=$("#mail_content");

        username.attr("placeholder","姓名");
        email.attr("placeholder","邮箱");
        content.attr("placeholder","留言");

        $("#mail_username").val("");
        $("#mail_email").val("");
        $("#mail_content").val("");

    }

    function isempty(){
         var username=$("#mail_username");
         var email=$("#mail_email")
         var content=$("#mail_content");
         switch(""){
            case username.val():
            username.attr("placeholder","* 姓名为必填项");
            case email.val():
            email.attr("placeholder","* 邮箱为必填项");
            case content.val():
            content.attr("placeholder","* 留言为必填项");
            return true;
         }

         var re =/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
         if(!re.test(email.val())){
            email.val("")
            email.attr("placeholder","* 请正确输入您的邮箱地址！");
            return true;
         }

         return false
    }

     function sendMail(){
        Ext.Ajax.request({
            url: "/imeWeb/jsp/principal/contactusSendMail.jsp",
            method : 'POST',
            async: true,
            params : {
                "username": document.getElementById('mail_username').value,
                "email": document.getElementById('mail_email').value,
                "content": document.getElementById('mail_content').value
            },
            success: function(resp,opts) {
                var data= parseInt(resp.responseText);
                if(data){

                   attentiontext.html("邮件发送成功！")
                   attentionicon.addClass("icon-circularemail1")
                   p.addClass("info");
                    setempty();

                }
                else{
                 attentiontext.html("发送失败！")
                 attentionicon.addClass("icon-fail")
                 p.addClass("fail");
                }

            },
            failure: function(resp,opts) {
                attentiontext.html("发送失败！")
                attentionicon.addClass("icon-fail")
                p.addClass("fail");
            }

        });
    }


    submit.on("click",function(e){
        e.preventDefault();
        if(isempty()) return;
         attentiontext.html("邮件发送中.....")

         sendMail();

       /*$.ajax({
            type:"post",
            url:"http://127.0.0.1:8081/",
            data:{
                "username":$("#mail_username").val(),
                "email":$("#mail_email").val(),
                "content":$("#mail_content").val()
            }
        }).done(function(res){
                attentiontext.html("邮件发送成功！")
                attentionicon.addClass("icon-circularemail1")
                p.addClass("info");
                setempty();

        }).fail(function(){
            attentiontext.html("发送失败！")
            attentionicon.addClass("icon-fail")
            p.addClass("fail");
        })*/
    })

})()
