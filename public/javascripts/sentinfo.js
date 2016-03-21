   //登录
        function createsentinfo(){
            var sentname = $("#sentname").val();
            var sentnumber = $("#sentnumber").val();

            $.post("/sentinfo", {"sentname": sentname,"sentnumber":sentnumber}, function(data, status){    
                data = $.parseJSON(data);
                console.info(data);   
                // if(status){
                //     if(data.login){
                //         $("#login_success").show().html("welcom " + user);
                //         $("#login_fm").hide();
                //         setCookie("user", user);
                //     }else{
                //         alert("用户名或密码错误！");
                //     }
                // }else{
                //     alert("登录失败！");
                // }

            });
        }