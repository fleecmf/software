var load=false;
$(document).ready(function(){
	if(!load){
		loadname();
	    $().newaddess();
	    $().getaddress();
	    $().foritem();
	    $().otherpageapos();
	    $("#cartsurbtn").cartsurbtn();
	    noinvoice();
	    load=true;
	}
    
})
//获取地址信息
$.fn.getaddress= function () {

  var  name=isload();
    var x={"custno":name};
    $.ajax({
        type:"post",
        datatype:'json',
        url:"http://192.168.199.242:8080/BSMD/getUserAddress.do",
        data:JSON.stringify(x),
        header: {"Content-type": "application/json", "Accept": "application/json"},
        success: function (data) {
            console.log(data);
            //默认地址
            html1='';
            //其余地址
            html='';
            if(data.status=="success"){
                if(data.userAddressList.length==0){
                    $("#cartAddress").children(0).show();
                    var x=  $("#cityname").attr("data-cityname");
                    $(".form-mile.address-select input").val(x);
                    return;
                }
                var y;
                for(var i=0; i<data.userAddressList.length;i++){
                    y=data.userAddressList[i];
                    if(y.status==1){
                        html1+='<li data-aid="'+ y.addrNo+'" class="cart-address-card-choose"> <a class="cart-address-card " data-aid="'+ y.addrNo+'" href="javascript:;">';
                        html1+='<span class="cart-address-default"> 默认地址</span> <h5 class="cart-address-tit">'+ y.name+'</h5> <hr class="cart-hr" style="width: 160px;  border: 1px solid #eee;" noshade>';
                        html1+='<p class="cart-address-strert">'+ y.address+'</p>';
                        html1+='<p class="cart-address-zipinf" data-area="'+ y.areaName+'"data-city="'+y.city+'" data-county="'+ y.county+'">福建省'+y.city+y.county+y.areaName+'</p>';
                        html1+='<p class="cart-address-phone">'+ y.tel+'</p> <i class="cart-address-edit" style="display: none">编辑</i></a> </li>';
                    }else{
                        html+='<li data-aid="'+ y.addrNo+'"> <a class="cart-address-card " data-aid="'+ y.addrNo+'" href="javascript:;">';
                        html+='<span class="cart-address-default _none"> 默认地址</span> <h5 class="cart-address-tit">'+ y.name+'</h5> <hr class="cart-hr" style="width: 160px;  border: 1px solid #eee;" noshade>';
                        html+='<p class="cart-address-strert">'+ y.address+'</p>';
                        html+='<p class="cart-address-zipinf" data-eare="'+ y.areaName+'"data-city="'+y.city+'" data-county="'+ y.county+'">福建省'+y.city+y.county+y.areaName+'</p>';
                        html+='<p class="cart-address-phone">'+ y.tel+'</p> <i class="cart-address-edit" style="display: none">编辑</i></a> </li>';
                    }
                }
                html=html1+html;
                $("#cartaddresslist").html(html);
            }

        }
    })
}


//添加新地址
$.fn.newaddess=function(){
    $(".assotheraddress").on("click",function(){
        $(".address_management").slideToggle(1000);
        var x=  $("#cityname").attr("data-cityname");
        $(".form-mile.address-select input").val(x);
    })
    $("#cartaddresslist").on("click","li", function () {
        $(this).addClass("cart-address-card-choose");
        $(".cart-address-default").addClass("_none")
        $(this).siblings().removeClass("cart-address-card-choose");
    })
    //点击保存地址
    $("#address-save .address-btn").on("click", function () {
        // var username= $("#username").html();
        var name=$("#add_name").val();
        var t=$("#address-region input").val();
        t=t.split("-");
        var city=t[0];
        var county=t[1];
        var areaName=t[2];
        var address= $("#ueraddr").val();
        var tel=$("#usertel").val();
        var status=0;
        if($("#address-default").is(':checked')){
            status=1;
        }
        var custno=isload();
        var x={"custno":custno,"name":name,"city":city,"county":county,"areaName":areaName,"address":address,"tel":tel,"status":status}

        $.ajax({
            type:"post",
            datatype:'json',
            url:"http://192.168.199.242:8080/BSMD/insertUserAddress.do",
            data:JSON.stringify(x),
            header: {"Content-type": "application/json", "Accept": "application/json"},
            success: function (data) {
                console.log(data);

                if(data!=null){
                    var html='';
                    var y=data;
                    if(y.status==1){
                        html+='<li data-aid="'+ y.addrNo+'" class="cart-address-card-choose"> <a class="cart-address-card " data-aid="'+ y.addrNo+'" href="javascript:;">';
                        html+='<span class="cart-address-default"> 默认地址</span> <h5 class="cart-address-tit">'+ y.name+'</h5> <hr class="cart-hr" style="width: 160px;  border: 1px solid #eee;" noshade>';
                        html+='<p class="cart-address-strert">'+ y.address+'</p>';
                        html+='<p class="cart-address-zipinf" data-area="'+ areaName+'"data-city="'+city+'" data-county="'+ county+'">福建省'+city+county+areaName+'</p>';
                        html+='<p class="cart-address-phone">'+ y.tel+'</p> <i class="cart-address-edit" style="display: none">编辑</i></a> </li>';
                        $("#cartaddresslist li").removeClass("cart-address-card-choose");
                        $(".cart-address-default").addClass("_none")
                    }else{
                        html+='<li data-aid="'+ y.addrNo+'"> <a class="cart-address-card " data-aid="'+ y.addrNo+'" href="javascript:;">';
                        html+='<span class="cart-address-default _none"> 默认地址</span> <h5 class="cart-address-tit">'+ y.name+'</h5> <hr class="cart-hr" style="width: 160px;  border: 1px solid #eee;" noshade>';
                        html+='<p class="cart-address-strert">'+ y.address+'</p>';
                        html+='<p class="cart-address-zipinf" data-eare="'+ areaName+'"data-city="'+city+'" data-county="'+ county+'">福建省'+city+county+areaName+'</p>';
                        html+='<p class="cart-address-phone">'+ y.tel+'</p> <i class="cart-address-edit" style="display: none">编辑</i></a> </li>';
                    }

                }
                $("#cartaddresslist").append(html);
                $(".address_management").slideUp(1000);
            }
        })


    })
    //支付方式
    $("#input-payment").on("click","input[name=payment] ", function () {
        $(this).parent().addClass("on_click");
        $(this).parent().siblings().removeClass("on_click");
    })
}
//请求商品信息
$.fn.foritem=function(){
     x= JSON.parse($.cookie("cart"));
    console.log(x);
    if(x!=null){
        $.ajax({
            type:"post",
            data:JSON.stringify(x),
            dataType:"json",
            url:"http://192.168.199.242:8080/BSMD/car/settlement.do",
            header: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            success: function (data) {
                console.log(data);
                if(data!=null){
                    //店铺
                    var a='<span  >'+data.shopName+'</span>'
                    $("#store").append(a);
                    //总价
                    $(".cart-paybar-info").html(data.settleMoney.toFixed(2));
                    //商品中件数
                    var  totalNum=0;
                    var   html='';
                    for(var i=0;i<data.settleList.length;i++){
                        var x=data.settleList[i];
                        totalNum+=x.num;
                        html+='<tr id="'+ x.barcode+'" data-itemsize="'+ x.itemSize+'" data-number="'+ x.num+'" data-tol="'+ x.totalPrice+'">';
                        html+='<td class="col-lg-5">'+ x.brandName+' '+ x.itemName+'</td> <td class="col-lg-2">'+x.itemSize+'</td>';
                        html+='<td class=col-lg-1"">'+ x.itemSalePrice+'</td> <td class=col-lg-2"">'+ x.num+'</td><td class="col-lg-2">'+x.totalPrice+'</td>';

                    }
                    $(".goondsnum").html(totalNum);
                    $("#itemlist").html(html);
                }
            }
        })
        $("#store").attr("data-sid", x.shopNo)
    }

}
//发票
function noinvoice(){
    $("#invoiceModify").on("click",function(){
        $("#InvoiceEditDiv").slideToggle(1000);
        $("#noinvoice").css("color","#cccccc")
    })
}
$.fn.cartsurbtn=function(){
    $("#cartsurbtn").on("click",function(){
        var shopNo=Number($("#store").attr("data-sid"));
        var z=$(".cart-address-card-choose");
        var addNo=$(z[0]).attr("data-aid");
        if(addNo==null||addNo==""){
            $("#cartAddress").child().show();
            window.location.hash = "#cartAddress";
            return;
        }
        //总计
        var totalAmt=Number($("#cartpaybar .cart-paybar-info").html());
        var x=$("#itemlist>tr");
        //付款方式
        var payment=$("input[name=payment]:checked")
        var barcode=[];
        var subQty=[];

        for(var i=0;i< x.length;i++){
            barcode[i]= $(x[i]).attr("id");
            subQty[i]=$(x[i]).attr("data-number");
        }
        var t=[];
        for( var  i=0;i<barcode.length;i++){
            var json={};
            json.barcode=barcode[i];
            json.subQty=subQty[i];
            t.push(json);
        }
        var custno=isload();
        var x={"orderInfo":{"custNo":custno,"shopNo":shopNo,"addrNo":addNo,"totalAmt":totalAmt,"invoiceFlag":"0"},"itemList":t};

        $.ajax({
            type:"post",
            data:JSON.stringify(x),
            dataType:"json",
            url:"http://192.168.199.242:8080/BSMD/order/insert",
            header: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            success: function (data) {
                console.log(data);
                if(data.result){
                   var y=JSON.parse($.cookie("barcodes"));
                    $.ajax({
                        type:"post",
                        data:JSON.stringify(y),
                        dataType:"json",
                        url:"http://192.168.199.242:8080/BSMD/car/deletFromCar.do",
                        header: {
                            "Content-Type": "application/json",
                            "Accept": "application/json"
                        },
                        success: function (json) {
                            console.log(json);
                            if(json!=null){

                            }
                        }
                    })



                    location.href="cart-home.html?or="+data.orderNo;
                }
            }
        })

    })
}