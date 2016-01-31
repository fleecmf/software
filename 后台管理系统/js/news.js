/**
 * Created by lenovo on 2016-01-30.
 */
$(document).ready(function () {
    //加载公告记录
    $.ajax({
        type: "post",
        url: "http://192.168.199.241:8080/BSMD/Administrator/searchAnnounce.do",
        dataType: "json",
        //data: JSON.stringify(x),
        header: {"Content-Type": "application/json", "Accept": "application/json"},
        success: function (data) {
            console.log(data);
            var json=data;
            var html='';
            html+='<tr> <td style="width: 15%"><input type="checkbox" class="cart-checkbox cart-checkbox-checked" checked="yes" value="" ><span style="display: inline">全选</span>';
            html+='<button type="submit" class="btn btn-primary " style="width: 82px;">批量删除</button></td></tr>';
            for(var i=0;i<json.list.length;i++) {
                html += '<tr data-no="'+json.list[i].announceNo+'"><td class="item_all"> <input type="checkbox" class="cart-checkbox cart-checkbox-checked" checked="yes" value=""></td>';
                html += '<td style="width: 15%"> <span>'+json.list[i].announce.releasTime+'</span></td>';
                html += '<td style="width: 15%"><span>'+json.list[i].username+'</span></td>';
                html += '<td style="width: 15%"><span>'+json.list[i].announce.announceTitle+'</span></td>';
                html += '<td><span>'+json.list[i].announce.announceContent+'</span></td>';
                html += '<td><a href="#" id="deleteNews">删除</a></td></tr>';
            }


            $("#newsContent").html("");
            $("#newsContent").append(html);
    }
    })
    publish();
    deleteNews();



})
//点击发布
function publish() {
    $("#publishnews").on("click", function () {


        var title=$("#Title").val();
        var cont=$("#content").val();

        var x = {Username: "张三","announceTitle":title,"announceContent":cont};
        console.log(x);
        $.ajax({
            type: "post",
            url: "http://192.168.199.241:8080/BSMD/Administrator/releaseAnnounce.do",
            dataType: "json",
            data: JSON.stringify(x),
            header: {"Content-Type": "application/json", "Accept": "application/json"},
            success: function (data) {
                console.log(data);
            }
        })
    })
}
//删除某条公告记录
function deleteNews(){
    $("tbody#newsContent").on("click", "tr td a#deleteNews",function () {
        var No=$(this).parent().parent().attr("data-no");
        var  x={announceNo:No};
        $.ajax({
            type: "post",
            url: "http://192.168.199.241:8080/BSMD/Administrator/deleteAnnounce.do",
            dataType: "json",
            data: JSON.stringify(x),
            header: {"Content-Type": "application/json", "Accept": "application/json"},
            success: function (data) {
                console.log(data);

            }
        })
        $(this).parent().parent().remove();





    })


}
