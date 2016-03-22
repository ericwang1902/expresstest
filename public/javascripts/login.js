   //登录
        function loginClick(){
            var user = $("#username").val();
            var pwd = $("#pwd").val();
            $.post("/login", {"user": user,"pwd":pwd}, function(data, status){
                
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