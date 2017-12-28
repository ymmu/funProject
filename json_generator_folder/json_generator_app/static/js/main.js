var rowCount = 1;
$(function(){
    console.log('ok');
    this.rowCount = 1;
    $('#rowCount').attr('value',this.rowCount);
    console.log($('#rowCount').val());
    //header
    $('#table').append('<thead>'
                       +'<th>name</th><th>type</th><th>add</th><th>delete</th>'
                       +'</thead>');
        $('#table').append('<tr>'
                       +'<td colspan=2 style="text-align:right"><b>Total:</b></td><td colspan=2><input type="text" name="total" value="20"></td>'
                       +'</tr>');
    $('#table').append('<tbody id="tbody"></tbody>');
    
    
    addRow();
  });

var addRow= function(){

   
    var str = '<tr>'
       +'<td><input type="text" name="name" value="'+rowCount+'"></td>'
       +'<td><input type="text" name="type" value="String"></td>'
       +'<td><button id="pmbutton" name="add" onclick="addRow()">+</button></td>'
       +'<td><button id="pmbutton" name="delete'+rowCount+'" id="delete'+rowCount+'" onclick="deleteRow('+rowCount+')">-</button></td>'
       +'</tr>';

    console.log('add: '+rowCount);
    $('#tbody').append(str);
    rowCount++;     
        
};

var deleteRow= function(rowCount){

    //block deleting first row
    if(rowCount!=1){
        console.log('rowCount:'+rowCount)
        var rowIndex = $('#delete'+rowCount).parent().parent().index();
        console.log($('tr')[rowIndex+2]);
        console.log('rowIndex:'+rowIndex);
        console.log($('#delete'+rowCount).parent().parent());
        $('tr')[rowIndex+2].remove();
    }


   

};


var submitB = function(){
    
    //var rowNum = $('tr').length -1;
    var data =[];
    var pack = {'num':0, 'total':10};
    $('tr').each(function(i){ 
        $('td', this).each(function(j){

            if(i==1 && j==1){
                pack.total=$(this).find('input')[0].value;
            }else if(i>1){
                if(j==0){
                    
                    pack["name"+(i-2)]=$(this).find('input')[0].value;
                    console.log($(this).find('input')[0].value);
                }else if(j==1){
                    
                    pack["type"+(i-2)]=$(this).find('input')[0].value;
                    console.log($(this).find('input')[0].value);
                    //data.push(pack);
                }
                
            }

        });
        
        pack.num = i-1;
    });//tr loop end
    
    console.log(pack);
    $.ajax({
        type: "GET", // 데이터를 전송하는 방법을 지정
        url: "makeJsonList", // 통신할 url을 지정
        //contentType: 'application/json; charset=utf-8',
        data: pack
        
        /*{
            "user_id":"0",
            "age": "2", 
            "gender": "1"
	
        }*/, // 서버로 데이터 전송시 옵션
        //dataType: "json",
        beforeSend: function (xhr) {    
            xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
        }
        ,
        success: function(data){
            console.log('seccess:'+window.location.href+data.download_url);
            window.location.href += data.download_url;
        
            $('.sample').empty();
            $('.sample').append(data.sample);
            
        },
        error: function(request,status,error){
            alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
       }

    });

};
    

// using jQuery
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            console.log(cookie);
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}