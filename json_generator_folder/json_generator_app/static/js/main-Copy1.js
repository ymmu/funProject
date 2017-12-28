var rowCount = 1;
$(function(){
    console.log('ok');
    this.rowCount = 1;
    $('#rowCount').attr('value',this.rowCount);
    console.log($('#rowCount').val());
    //header
    $('#table').append('<thead>'
                       +'<th>name</th><th>add</th><th>delete</th>'
                       +'</thead>');
        $('#table').append('<tr>'
                       +'<td colspan=3><b>Total:</b><input type="text" name="total" value="20"></td>'
                       +'</tr>');
    $('#table').append('<tbody id="tbody"></tbody>');
    
    
    addRow();
  });

var addRow= function(){

   
    var str = '<tr>'
        +'<td><select id="select_custom">'
        +'<option value="ID">ID</option>'
        +'<option value="Name">Name</option>'
        +'<option value="Email">Email</option>'
        +'<option value="Password">Password</option>'
        +'<option value="Sex">Sex</option>'
        +'<option value="TEL">TEL</option>'
        +'<option value="Country">Country</option>'
        +'<option value="ISO2">ISO2</option>'
        +'</select></td>'
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

<<<<<<< HEAD
            if(i==1 && j==1){
=======
            if(i==1 && j==0){
>>>>>>> 3e5d6afed9153a9b1f835c47c1e73c315eb2e57a
                pack.total=$(this).find('input')[0].value;
            }else if(i>1){
                if(j==0){
                    
                    pack["type"+(i-2)]=$(this).find('#select_custom').find(":selected").text();
                    console.log($(this).find('#select_custom').find(":selected").text());
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
            var sample = data.sample;
            var sample_chunk = sample.split(',');
            
            for(var i=0; i<sample_chunk.length; i++){
                console.log(sample_chunk[i]);
                
                if(i==0){
                    var first_chunk =sample_chunk[0].split('{');
                    
                    $('.sample').append('{</n><pre>'+first_chunk[1]+'</pre></n>');
                   
<<<<<<< HEAD
                    /*$('.sample').append('<pre>'+first_chunck[0]+'</pre><br/>');
                    */
=======
>>>>>>> 3e5d6afed9153a9b1f835c47c1e73c315eb2e57a
                }else if(i<sample_chunk.length-1){
                    $('.sample').append('<pre>'+sample_chunk[i]+'</pre></n>');
        
                }else{
                    var last_chunk =sample_chunk[sample_chunk.length-1].split('}');
                    
                    $('.sample').append('<pre>'+last_chunk[0]+'</n>');
                    $('.sample').append('}');
                    
                }
                
            }
            
            
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