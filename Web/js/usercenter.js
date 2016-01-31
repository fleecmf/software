/**
 * Created by hp on 2015/11/13.
 */


$(document).ready(function () {

    checkCookie()

});
function checkCookie() {
    var proeare = getposition();
    $("#cityname").attr("value", proeare[1]);
    $("#cityname").attr("data-cityname", proeare[0]);
    loadname();
    //商品搜索
    $("#searchitem").mysearch();
    //顶部地址改变
    $().otherpageapos();
    $().poschange();
    $().proclick();
    $().cityclick();
    $().countyclick();
    $().villclick();
    $().toptabClick()
    $.Menulist();
    //请求商品列表
    eg.loadOrder(1, -1);
    orderSelect();
    eg.collapse();
    eg.eliminate();
    eg.changePwd();
    eg.modifyPwd();
    return;
}

var eg = {};

//解决左侧菜单无法重复点击问题
eg.eliminate = function () {
    $("#order ul li").click(function () {
        $("#order ul li").removeClass('active');
        $("#order ul li").tab('hide');
        $(this).addClass('active');
        $(this).tab('show');
    });
}
eg.hoverChange = function () {
    $(".order_tcontent").on("mouseenter", ".order_table", function () {
        $(this).css("border", "1px solid #A4A4A4");
    });
    $(".order_tcontent").on("mouseleave", ".order_table", function () {
        $(this).css("border", "1px solid #eee");
    });
}

/****************菜单折叠********************/
eg.collapse = function () {
    var icon1 = "glyphicon glyphicon-chevron-up";
    var icon2 = "glyphicon glyphicon-chevron-down";
    $("#order>li").click(function () {
        var issue = $(this).children("span");
        if (issue.hasClass(icon1)) {
            issue.removeClass(icon1);
            issue.addClass(icon2);
        } else {
            issue.removeClass(icon2);
            issue.addClass(icon1);
        }
    });
}
/***********************************我的订单***************************************/
//订单内容
function orderContent(json) {
    var html = '';
    var rep = json.orderPage;
    var len = rep.list.length;
    for (var i = 0; i < len; i++) {
        var temp = rep.list[i];
        html += '<table class="order_table" ><tbody>';
        //尝试修改
        html += '<tr class="order_table_header"><td colspan="7"><div class="order_info"><span class="no">';
        html += '订单编号：' + temp.orderInfo.orderNo;
        html += '<span class="deal_time">成交时间：';
        html += temp.orderInfo.createDateString + '</span></span></div></td></tr>';
        var num = temp.itemList.length;
        for (var j = 0; j < num; j++) {
            html += '<tr class="order_table_item last"><td class="goods">';
            html += '<a href="itemDetial.html" target="_blank"><img src="' + temp.itemList[j].item.url + '"' + 'alt="商品详情"></a>';//跳转至商品详情页面
            html += '<div class="desc"><p>';
            html += '<a href="itemDetial.html" target="_blank">' + temp.itemList[j].item.itemName + '</p>';
            html += '</div></td>';
            html += '<td class="sprice"><span>' + temp.itemList[j].realPrice + '</span></td>';
            html += '<td class="quantity">' + temp.orderInfo.itemNum + '</td>';
            html += '<td class="aftersale"><ul><><a href="#">退款/</a><a href="#">退货</a></li><li><a href="#">申请维权</a></li></ul></td>';
            if(j==0){

                html += '<td class="rtotal" rowspan="' + num;
                html += '"><span class="total_price">' + temp.orderInfo.totalAmt + '</span>';
                html += '<p><span>' + '</span></p></td>';
                html += '<td class="status" rowspan="' + num + '"><p>';
                var s = temp.orderInfo.orderStatu;
                //判断状态
                if (s == 0) {
                    html += "待 付 款";
                } else if (s == 1) {
                    html += '待 发 货';
                } else if (s == 2) {
                    html += "待 评价";
                } else if (s == 4) {
                    html += "确认收货";
                } else if (s == 6) {
                    html += "待 评 价";
                } else if (s == 7) {
                    html += '已 完 成';
                } else if (s == 5) {
                    html += '待 退 款';
                } else if (s == 3) {
                    html += '已 取 消';
                }
                html +='</p></td>'
                html += '<td class="other" rowspan="' + num + '">';
                if (s == 6) {
                    html += '<p><span>追加评价</span></p>';
                }
                //判断状态
                if (s == 0) {
                    html += '<p><a data-id="'+temp.orderInfo.orderNo+'" class="cancleOrder" href="javaScript:void(0);">取消订单</a></p>';
                } else if (s == 1) {

                }
                else if (s == 2) {

                } else if (s == 4) {

                } else if (s == 3) {
                    html += '<p><a data-id="'+temp.orderInfo.orderNo+'"  class="deleteOrder" href="javaScript:void(0);">删除订单</a></p>';
                } else if (s == 7) {
                    html += '<p ><a data-id="'+temp.orderInfo.orderNo+'"  class="deleteOrder"href="javaScript:void(0);">删除订单</a></p>';
                } else if (s == 5) {

                } else if (s == 3) {
                    html += '<p><a data-id="'+temp.orderInfo.orderNo+'"  class="deleteOrder" href="javaScript:void(0);">删除订单</a></p>';
                }
                html += '</td></tr>';
            }

        }
    }
    html+='</tbody>';
    return html;
}
//取消和删除订单
function cancelanddelete(){
    $(".cancleOrder").on("click",function(){
        var t=$(this);
        var orderNo=$(this).attr("data-id");
        if(orderNo!=null){
            var x={"orderNo":orderNo};
            $.ajax({
                data:JSON.stringify(x),
                dataType:"json",
                url:"http://192.168.199.242:8080/BSMD/order/cancel.do",
                type:"post",
                header: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                success: function (data) {
                    console.log(data);
                    if(data.message=="success"){
                      $(t).text("删除订单");
                        $(t).removeClass("cancleOrder");
                        $(t).addClass("deleteOrder");
                        var oj=$(t).parents("td").prev().children();
                        $(oj[0]).text("交易关闭");
                    }
                }
            })
        }
    })
    $(".deleteOrder").on("click",function(){
        var t=$(this);
        var orderNo=$(this).attr("data-id");
        if(orderNo!=null){
            var x={"orderNo":orderNo};
            $.ajax({
                data:JSON.stringify(x),
                dataType:"json",
                url:"http://192.168.199.242:8080/BSMD/order/delete.do",
                type:"post",
                header: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                success: function (data) {
                    console.log(data);
                   var oj= $(t).parents("tbody");
                    $(oj).remove()
                }
            })
        }
    })
}
//没有订单
function noOrder() {
    var html = '';
    $(".order_title").html(html);
    html += '<div class="oblii"><img src="images/dotted.png"></div>';
    html += ' <div class="oblic"><h3>此状态下没有对应的订单~~</h3></div>';
    return html;
}
//加载订单
eg.loadOrder = function (pageIndex, status) {
    var custno=isload();
    if(custno!=null&&custno!=""){

        var info = {"No":custno, "pageIndex": pageIndex, "pageCount": 6, "orderStatu": status};
        $.ajax({
            type: "post",
            url: "http://192.168.199.242:8080/BSMD/order/select/list",
            data: JSON.stringify(info),
            dataType: "json",
            header: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            success: function (data) {

                var json = data;
                console.log(json);
                var html = '';
                $(".order_tcontent").html("");
                if (json.orderPage.dataCount == 0) {
                    html = noOrder();                 //没有订单
                    $(".order_tcontent").html(html);
                } else {
                    html = orderContent(json);      //有订单
                    $(".order_tcontent").html(html);
                    cancelanddelete();
                    eg.hoverChange();
                    $.breakPage(json.orderPage.pageSize, json.orderPage.pageIndex);  //分页数字
                    $.orderPage(status);    //请求某一页
                }

            }
        });
    }
}

//点击选择订单类型
function orderSelect() {
    $("#myOrder li").on("click", function () {
        var named = $(this).text();
        var status = -1;
        if (named == "待付款") {
            status = 0;
        } else if (named == "待收货") {
            status = 2;
        } else if (named == "待评价") {
            status = 3;
        }
        //    加载订单
        eg.loadOrder(1, status);
    });
}
//分页
$.breakPage = function (pageSize, pageIndex) {
    pageIndex = Number(pageIndex);
    pageSize = Number(pageSize);
    var html = '<li><a class="forward" href="javascript:void(0);">&laquo;</a></li>';
    if (pageSize <= 6) {
        for (var i = 1; i <= pageSize; i++) {
            if (i == pageIndex) {
                html += '<li><a class="active" href="javascript:void(0);">' + i + '</a></li>';
            }
            else {
                html += '<li><a href="javascript:void(0);">' + i + '</a></li>';
            }
        }
    }
    else {
        if (pageIndex <= 4) {
            for (var i = 1; i <= 5; i++) {
                if (i == pageIndex) {
                    html += '<li><a class="active" href="javascript:void(0);" >' + i + '</a></li>';
                } else {
                    html += '<li><a href="javascript:void(0);">' + i + '</a></li>';
                }
            }
            html += '<li><a href="javascript:void(0);">…</a></li>';
            html += '<li><a href="javascript:void(0);">' + pageSize + '</a></li>';
            console.log("pageSize" + pageSize);
        } else if (pageIndex >= pageSize - 4) {
            html += '<li><a href="javascript:void(0);" >1</a></li><li><a href="javascript:void(0);">…</a></li>';
            for (var i = 4; i >= 0; i--) {
                var p = pageSize - i;
                console.log("p" + p);
                if (p == pageIndex) {
                    html += '<li><a class="active" href="javascript:void(0);" >' + p + '</a></li>';
                } else {
                    html += '<li><a href="javascript:void(0);" >' + p + '</a></li>';
                }
            }
        } else {
            html += '<li><a href="javascript:void(0);">1</a></li><li><a href="javascript:void(0);">…</a></li>';
            html += '<li><a href="javascript:void(0);">' + (pageIndex - 2) + '</a></li>';
            html += '<li><a href="javascript:void(0);">' + (pageIndex - 1) + '</a></li>';
            html += '<li><a class="active" href="javascript:void(0);">' + pageIndex + '</a></li>';
            html += '<li><a href="javascript:void(0);">' + (pageIndex + 1) + '</a></li>';
            html += '<li><a href="javascript:void(0);">' + (pageIndex + 2) + '</a></li>';
            html += '<li><a href="javascript:void(0);">…</a></li>';
            html += '<li><a href="javascript:void(0);">' + pageSize + '</a></li>';
        }
    }
    html += '<li><a class="next" href="javascript:void(0);">&raquo;</a></li>';
    $(".pagination").html("");
    $(".pagination").html(html);
}
$.orderPage = function (status) {
    $(".order_page .pagination").on("click", "a", function () {

        var no = isload();
        if(no!=""&no!=null){
            var pageCount = 6;
            if ($(this).html() == "…") {
                return;
            } else if ($(this).hasClass("active")) {
                return;
            } else if ($(this).hasClass("next")) {
                var page = $(".pagination").find(".active");
                var pageIndex = Number($($(page)[0]).text());
                if ($(this).prev().hasClass("forward")) {
                    return;
                }
                orderAjax(no, pageIndex + 1, pageCount, status);

            } else if ($(this).hasClass("forward")) {
                var page = $(".pagination").find(".active");
                var pageIndex = Number($($(page)[0]).text());
                if (pageIndex == 1) {
                    return;
                }
                orderAjax(no, pageIndex - 1, pageCount, status);
            }
            else {
                var pageIndex = Number($(this).html());
                orderAjax(no, pageIndex, pageCount, status);
            }
        }

    });
}
//ajax请求
function orderAjax(no, pageIndex, pageCount, status) {
    var info = {"No": no, "pageIndex": pageIndex, "pageCount": pageCount, "status": status};
    $.ajax({
        type: "post",
        url: "http://192.168.199.242:8080/BSMD/order/select/list",
        data: JSON.stringify(info),
        dataType: "json",
        success: function (data) {
            var json = data;
            $(".order_tcontent").html("");
            var html = orderContent(json);
            $(".order_tcontent").append(html);
            $.breakPage(json.orderPage.pageSize, pageIndex);
        }
    })
}
/***********************************安全设置***************************************/

/*更换手机号step1*/
eg.changePnumber1 = function () {
    $(".info_number>.setting").click(function () {
        if ($(".info_number>.setting").text() == "设置") {
            $(".error1").css("display", "none");
            $("#telephone").val("");
            $(".pnumber").css("display", "block");
            $(this).text("收起");
        } else {
            $(".pnumber").css("display", "none");
            $(".new_pnumber").css("display", "none");
            $(".new_check").css("display", "none");
            $(".new_result").css("display", "none");
            $(this).text("设置");
        }
    });
}
/*--更换手机号step2--*/
eg.changePnumber2 = function () {
    $(".pnumber").css("display", "none");
    $(".new_pnumber").css("display", "block");
}

/*--更换手机号step3--*/
eg.changePnumber3 = function () {
    var pnumber = $("#telephone").val();
    if (!/^1[358]\d{9}$/.test(pnumber)) {
        $(".error1").css("display", "inline");
    } else {
        $(".new_pnumber").css("display", "none");
        $(".new_result").css("display", "block");
        var phonenum = {"username": "001", "tel": pnumber};
        $.ajax({
                type: "post",
                url: "http://192.168.199.242:8080/BSMD/",
                data: JSON.stringify(phonenum),
                dataType: "json",
                header: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                success: function () {
                    $(".info_number .info").text(eg.md(pnumber));
                    $(".pnumber span").text(eg.md(pnumber));
                    $(".new_pnumber .phone_number").text(eg.md(pnumber));
                }
            }
        );
    }
}

/*--更换手机号step4--*/
eg.changePnumber4 = function () {
    $(".new_result").css("display", "none");
    $(".info_number>.setting").text("设置");
}


/*------------------------修改密码----------------*/
eg.changePwd = function () {
    $(".info_password>.setting").click(function () {
        if ($(".set_password").css("display") == "none") {
            $(".set_password").css("display", "block");
            $(".info_password>.setting").text("收起");
        }
        else {
            $(".set_password").css("display", "none");
            $(".info_password>.setting").text("设置");
        }
    });
}

eg.modifyPwd = function () {
    $("#check").on('click', function () {
        var oldpassword = $("#psw").val();
        if(oldpassword==null||oldpassword==""){
            $(".psw1msg").text("请输入原有密码");
            $(".psw1msg").removeClass("_none");
            return;
        }
        var tel= $.cookie("userphone");
        var x = {"username": tel, "password":oldpassword};
        if(tel!=null&&tel!=null){
            $.ajax({
                url: "http://192.168.199.242:8080/BSMD/loginMobile.do",
                datatype: "json",
                data:JSON.stringify(x),
                header: {"Content-type": "application/json", "Accept": "application/json"},
                success: function (data) {
                    console.log(data);
                    if (data.status=="success") {
                        $(".psw1msg").addClass("glyphicon glyphicon-ok oldps");
                        $(".psw1msg").removeClass("_none");
                        $(".change-grid").removeClass("_none");
                        $("#check").hide();
                        $("#modify").removeClass("_none");
                    } else if(data.status=="用户名或密码错误") {
                        $(".psw1msg").text("输入错误，请重新输入！");
                        $(".psw1msg").removeClass("_none");
                    }
                }
            });
        }
    })
    $("#checkbtn").bind("click",function(){
        var tel= $.cookie("userphone");
        if (dopsw() ) {
            var psw = strEnc($("#psw2").val(), "1", "2", "3");
            var x={"password":psw,"tel":tel};
            $.ajax({
                type: "post",
                data: JSON.stringify(x),
                dataType: "json",
                url: "http://192.168.199.242:8080/BSMD//validateAndSend.do",
                success: function (data) {
                    console.log(data);
                    if(data.message=="success"){
                        var k = strEnc(data.id, "1", "2", "3");
                        sessionStorage.setItem("id_it_id",k);
                    }
                }
            })
        }
        else{
            return false;
        }
    });
    $("#modify").on("click", function () {
        if (dopsw() &&docheck()) {
            var tel= $.cookie("userphone");
            var psw = strEnc($("#psw2").val(), "1", "2", "3");
            var id=strDec(sessionStorage.getItem("id_it_id"),"1", "2", "3");
            var code=$("#checknum").val();
            var x={"userInfo":{"password":psw,"tel":tel},"id":id,"validateCode":code};
            $.ajax({
                type: "post",
                data: JSON.stringify(x),
                dataType: "json",
                url: "http://192.168.199.242:8080/BSMD//register.do",
                success: function (data) {
                    console.log(data);
                    if (data.message =="success") {
                       //修改是否成功
                    }
                }
            })
        }
    })

}

function docheck(){
    var num=$("#checknum");
    var span=$(".checkmsg");
    if(num.val()==""){
        span.html("验证码不为空");
        return false;
    }else{
        span.html('<span class="glyphicon glyphicon-ok-circle" style="color: #26BC85"> </span>');
        span.removeClass("_none");
        return true;
    }

}
//密码验证==============================
function dopsw(){
    var t=$("#newpsw");
    var span=$(".pswmsg");
    if(/^\w*[a-zA-Z]+\w*$/.test(t.val())){
        span.html('<span class=" 	glyphicon glyphicon-ok-circle" style="color: #26BC85"></span>');
        span.removeClass("_none");
        return true;
    }
    else{
        span.html('密码6-16位');
        span.removeClass("_none");
        return false;
    }
}



//选择小区完成
$.fn.villclick = function () {
//t顶部
    $("#vil").on("click", "a", function () {
        //取得选择的小区
        var e = $(this).text();
        $("#topvil>a").text(e);
        $("#vil").attr("data-name", e);
        $(".hd-prochg").hide();
        //拼装写入cookie
        var pos = $("#cit").attr("data-name") + $("#ear").attr("data-name") + $("#vil").attr("data-name");
        var post = $("#cit").attr("data-name") + "-" + $("#ear").attr("data-name") + "-" + $("#vil").attr("data-name");
        $("#cityname").attr("data-positon", pos);
        $("#cityname").attr("data-cityname", post);
        $("#cityname").val(pos);
        //将修改的地址存入cookie
        x = [$("#cit").attr("data-name"), $("#ear").attr("data-name"), $("#vil").attr("data-name")];
        $.cookie("proeare", x, {expires: 7});
    })
}

