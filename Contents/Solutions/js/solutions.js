//-----------------------------------------------------
//Redirects to homepage after 1 minute of not interaction
//-----------------------------------------------------

/*function redirect(){
    window.location.href = "../../maincontents.htm";
}
var initial=setTimeout(redirect,60000);

$(document).click(function(event) {
    clearTimeout( initial );
    initial=setTimeout(redirect,60000);
});*/
//-----------------------------------------------------


function FC_ContentsCall(strContentsName, strLanguage)
{
   // alert(strContentsName);
    
    switch (strContentsName)
    {
      case "Home":
           location.href = "../../maincontents.htm";
           break;
      case "Back":
        location.href = "../index.html";    
        break;
       
        case "Growth":
            location.href = "Secondary/Growth.html";
            //PlaySpeech(speak[0]);
            break;
        case "Lending":
            location.href = "Growth-Lending.html";
            break;


        case "Experience":
            location.href = "Secondary/Experience.html";
            break;
        case "Digital-Banking":
            location.href = "Experience-Digital-Banking.html";
            break; 
        case "Online-Card":
            location.href = "Experience-Online-Card.html";
            break;


        case "Security":
            location.href = "Secondary/Security.html";
            break;
        
        case "Service":
            location.href = "Secondary/Service.html";
            break;
        case "Service-DM":
            location.href = "Service-DM.html";
            break;

        
        
        default:
            break;
    } // end switch(strContentsName)
}



$(document).ready(function(){

  $('a.btn-ok, #dialog-overlay, #dialog-box').click(function () {  
      var video = document.getElementById("myVideo");  
      video.pause(); 
      $('#dialog-overlay1, #dialog-box1').hide();   
      return false;
    });
});
function vidplay() {
       var video = document.getElementById("myVideo");
       var button = document.getElementById("playPause");
       if (video.paused) {
          video.play();
          //button.textContent = "||";
          button.src="assets/pause.png";
       } else {
          video.pause();
          //button.textContent = ">";
          button.src="assets/play.png";
       }
    }
function ShowPopup(src){

// get the screen height and width  
  var maskHeight = $(document).height();  
  var maskWidth = $(window).width();
  
  // calculate the values for center alignment
  var dialogTop =  '30%';//(maskHeight/3) - ($('#dialog-box').height());  
  var dialogLeft = (maskWidth/2) - ($('#dialog-box1').width()/2); 
  
  // assign values to the overlay and dialog box
  $('#dialog-overlay1').css({height:maskHeight, width:maskWidth}).show();
  $('#dialog-box1').css({top:dialogTop, left:dialogLeft}).show();
  $('#playPause').attr('src','assets/play.png');
  document.getElementById('myVideo').setAttribute('src', src);
    
    //document.getElementById('dialog-content1').innerHTML = '';
  
  }

function ShowPopupARS(src){

// get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();

    // calculate the values for center alignment
    var dialogTop =  '30%';//(maskHeight/3) - ($('#dialog-box').height());
    var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2);

    // assign values to the overlay and dialog box
    $('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
    $('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();

    document.getElementById('dialog-box').innerHTML = '<a href="#" class="button">Close</a><div class="dialog-content"><div id="dialog-message"><img width="800" src="'+ src +'"/></div></div>';
}
window.addEventListener('message', function(event) {
    if(event.data="true"){
      dance();
    } 
}); 
function dance(){
  $('#player').get(0).play();
    setTimeout(function () {
        $('#player').get(0).load();
    },10000);
}