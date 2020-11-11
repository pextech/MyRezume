$(document).ready(function(){
   
    $("a.mobile").click(function(){
        $(".sidebar").slideToggle('slow');
    });

    window.onresize = function(event){
        if ($(window).width() > 857 ){
            $(".sidebar").show();
        }
    }
    
});



$(document).ready(function(){

    $('#createPost').click(function(){
        $("#addPage").slideToggle("slow");
    });
    $("#close").click(function(){
        $("#addPage").slideToggle("slow");
    });
    $("#closeModal").click(function(){
        $("#addPage").slideToggle("slow");
    });

    
});

$(document).ready(function(){

    $('#createUser').click(function(){
        $("#addUser").slideToggle("slow");
    });
    $("#close").click(function(){
        $("#addUser").slideToggle("slow");
    });
    $("#closeModal").click(function(){
        $("#addUser").slideToggle("slow");
    });

    
});
function validateForm() {
    
   

var phone=document.getElementById('phoneAuth');
    var email=document.getElementById("emailAuth");
    var name=document.getElementById("phoneAuth"); 
    var message=document.getElementById("messageAuth");
var alert=document.getElementById("alert");

    if ( phone.value == "" || email.value == " " || 
    message.value == " " ||   name.value == " ") {
      alert.style.display="block";
        return false;
    }
    else{
        alert.style.display="none";
        return true;  
    }
      

}

function validateForm2() {
    
   var reply=document.getElementById('replyAuth');
var subject=document.getElementById('subAuth');
        var email=document.getElementById("emailAuth");
        var name=document.getElementById("phoneAuth");
       
    var alert=document.getElementById("alert");
    
        if ( subject.value == "" || name.value == " " || 
        reply.value == " " ||   email.value == " ") {
          alert.style.display="block";
            return false;
        }
        else{
            alert.style.display="none";
            return true;  
        }
          
    
    }
    


    function validateForm3() {
    
       
             var email=document.getElementById("emailAuth");
           
             var password=document.getElementById("passAuth");
            
         
         var alert=document.getElementById("alert");
    
         
             if ( email.value == "" || password.value == " "   ) {
               alert.style.display="block";
                 return false;
             }
             else{
                 alert.style.display="none";
                 return true;  
             }
               
         
         }
         function validateForm4() {
    
            var reply=document.getElementById('replyAuth');
         var subject=document.getElementById('subAuth');
                 var email=document.getElementById("emailAuth");
                 var name=document.getElementById("phoneAuth");
                 var fname=document.getElementById("fNameAuth");
                 var sname=document.getElementById("sNameAuth");
                 var message=document.getElementById("messageAuth");
                 var password=document.getElementById("passAuth");
                 var repassword=document.getElementById("passConfAuth");
             
             var alert=document.getElementById("alert");
                 var send=document.getElementById('send');
             
                 if ( fname.value == "" || sname.value == " " || password.value == " " || email.value || repassword.value == "" 
                 && password !== repassword  ) {
                   alert.style.display="block";
                     return false;
                 }
                 else{
                     alert.style.display="none";
                     return true;  
                 }
                   
             
             }