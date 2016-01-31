/**
 * Created by lenovo on 2016-01-29.
 */
$(document).ready(function () {
    //加载所有订单
    var x={auditState:""};
    $.ajax({
        type: "post",
        url: "http://192.168.199.241:8080/BSMD/Administrator/searchOrders.do",
        dataType: "json",
        data: JSON.stringify(x),
        header: {"Content-Type": "application/json", "Accept": "application/json"},
        success: function (data) {
            console.log(data);
            var json=data;
            $().orderList(json);

        }
    })
    unProcessOrder();

})

function unProcessOrder() {
    $("#unprocessed").on("click", "a",function () {
        var x = {auditState:0};
        $.ajax({
            type: "post",
            url: "http://192.168.199.241:8080/BSMD/Administrator/searchOrders.do",
            dataType: "json",
            data: JSON.stringify(x),
            header: {"Content-Type": "application/json", "Accept": "application/json"},
            success: function (data) {
               console.log(data);
                var json=data;

                $().orderList(json);
            }
        })

        })
    $("#haveProcessed").on("click","a", function () {
        var x = {auditState:1};
        $.ajax({
            type: "post",
            url: "http://192.168.199.241:8080/BSMD/Administrator/searchOrders.do",
            dataType: "json",
            data: JSON.stringify(x),
            header: {"Content-Type": "application/json", "Accept": "application/json"},
            success: function (data) {
                console.log(data);
                var json=data;

                $().orderList(json);
            }
        })
    })

}


//订单列表的拼接
$.fn.orderList= function (json){


    var html='';
    var k=0,t=0;
    //console.log($("#beginTime").val());//输出下单时间
    for(var i=0;i<json.orderList.length;i++)
    {
        html+='<div class="panel panel-default"><div class="panel-heading">';
        html+='<span class="label label-primary">'+i+'</span>'
        html+='<span class="total" >订单总额：'+json.orderList[i].totalAmt+'元</span>';
        if(json.orderList[i].auditState==1){

            html+='<span class="label label-primary" >已处理</span></div>';//需修改，判断状态
            t++;
        }
        else
        {
            html+='<button type="submit" class="btn btn-primary " style="width: 82px;float: right">修改</button>';
            html+='<button type="submit" class="btn btn-primary " style="width: 82px;float: right;margin-right: 10px">审核通过</button>';
            html+='<span class="label label-primary" >待处理</span></div>';//需修改，判断状态
            k++;
        }

        html+='<div class="panel-body">';
        html+='<span style="display: block">店铺：'+json.orderList[i].shopName+'</span>';
        html+='<span style="float: right">收货人：'+json.orderList[i].userName+'</span>';
        html+='<span  style="float: right">联系方式：'+json.orderList[i].tel+'</span>';
        html+='<span class="glyphicon glyphicon-time"> </span><span class="time">送达时间：'+json.orderList[i].arriveTime+'</span><br>';

        html+='<span class="glyphicon glyphicon-map-marker"> </span><span class="user-address">送达地址：'+json.orderList[i].address+'</span>';


        html+='<table class="table " style="margin-top: 20px"><thead class="itemlist"><tr>';
        html+='<th>商品名称</th><th>数量</th><th>规格</th><th>折扣</th><th>价格(元)</th></tr></thead>';
        for(var j=0;j<json.orderList[i].orderDetailCust.length;j++)
        {
            html+='<tbody><tr><td class="goods"><div class="desc"><span target="_blank">'+json.orderList[i].orderDetailCust[j].itemName+'</span></div></td>';
            html+='<td style="width: 12%"><span>'+json.orderList[i].orderDetailCust[j].subQty+'</span></td>';
            html+='<td style="width: 12%"><span>'+json.orderList[i].orderDetailCust[j].itemSize+'</span></td>';
            html+='<td style="width: 12%"><span>'+json.orderList[i].orderDetailCust[j].discount+'</span></td>';
            html+='<td class="sprice"><span>'+json.orderList[i].orderDetailCust[j].realPrice+'</span></td></tr>';
        }

        html+='</tbody></table></div>';
        html+='<div class="panel-footer">';
        html+='<span>订单编号：'+json.orderList[i].orderNo+'</span>';
        html+='<span>下单时间：'+json.orderList[i].createDate+'</span>';
        html+='</div></div>';

    }
    $("#orderList").html("");
    $("#orderList").append(html);
    //已处理待处理个数加载
    if(k!=0&&t!=0){
        var html1='';
        html1+='<a href="#">'+k+'</a>';
        $("#unprocessed").html("");
        $("#unprocessed").append(html1);
        var html2='';
        html2+='<a href="#">'+t+'</a>';
        $("#haveProcessed").html("");
        $("#haveProcessed").append(html2);
    }
}
