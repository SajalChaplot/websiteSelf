
function initialize(){
    
$(window).scroll(function(){
    var scrolTop = $(this).scrollTop();
            //console.log(scrolTop);
    var workscrol = $('#work').scrollTop();
        
        if (scrolTop >= window.innerHeight/1.1) {
            $('.navbar').addClass('floatingNavBlack');
            $('#links ul a').css('color','#fff');
            document.getElementbyID('logo').innerHTML='<img src="img/logo_white.png" alt="logo">';
            myfunction();
    } 
    else {
        $('.navbar').removeClass('floatingNavBlack');
        $('#links ul a').css('color','#222');
        document.getElementbyID('logo').innerHTML='<img src="img/logo_black.png" alt="logo">';
        }  
        
        $('#cover-image').css('top', (10 -scrolTop/45) + '%');
        $('#description').css('top',(50 + scrolTop/50) + '%');
        
        
    
  
        
    });
    

    
    function sscrolp(){
       var interval = setInterval(smoothscroll,24);
        function smoothscroll(){window.scrollBy(0,40);
                                var Ypos = scrollY;
                              if(Ypos == 0)
                                  clearInterval(interval);
                              }   
        
    }

$(".tag").click(function(){
    $('this span').toggleClass('cross-hidden');
    $(this)
        .css('backgroundColor','#fff')
        .css('color','#222')
        .siblings()
        .css('backgroundColor','#222')
        .css('color','white');
     
        
})
    
$(".projectSelectors").click(function(){
    var id = $(this).attr("id",);
    $("#p_thumbnail img").attr("src", "img/p" + id + ".png");
    id = id -1;
    
    switch(id) {
  case 0:
    $("#p_description h3 strong").text("Crowdfunding");
    $("#p_description p").text("Designed a system to improve crowdfunding in India with a provision of corporate CSR donation");
    $("#projectview").attr("href", "project1.html");
            
    break;
  case 1:
    $("#p_description h3 strong").text("Share Next : A Rental Marketplace for Student Community");
    $("#p_description p").text("Designed a system to improve crowdfunding in India with a provision of corporate CSR donation");
    $("#projectview").attr("href", "project2.html");
    break;
            
    case 2:
    $("#p_description h3 strong").text("Techniche - Website Design");
    $("#p_description p").text("Designed a system to improve crowdfunding in India with a provision of corporate CSR donation");
    $("#projectview").attr("href", "project3.html");
    break;
    
    case 3:
    $("#p_description h3 strong").text("Next Learning Management System - Usability Testing");
    $("#p_description p").text("Designed a system to improve crowdfunding in India with a provision of corporate CSR donation");
    $("#projectview").attr("href", "project4.html");
    break;        
  default:
    break;
}
    
    
    console.log('22');
})
    
}

function sendVal(time){
    
    if (time=='v1'){
        
        vid_lw.currentTime = 67;
        
    }
    if (time=='v2'){
        
        vid_lw.currentTime = 256;
        
    }
    if (time=='v3'){
        
        vid_lw.currentTime = 340;
        
    }
    if (time=='v4'){
        
        vid_lw.currentTime = 628;
        
    }   
}

function disp_vid(){
    lw_img.css('display','none');
    vid.css('display','block');
    
}
