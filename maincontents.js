﻿conf_count = 0;
        var jokes = new Array( );
        jokes[1]="Why do I get so angry? Because people keep pushing my buttons!";
        jokes[2]="What is my favorite type of music? Heavy metal";
        jokes[3]="Why was I feeling bad? I had a virus";
        jokes[4]="Why did I go to the mall? Because I had hardware and software but needed underwear";
        jokes[5]="Why was I so tired when I got here? I had a hard drive";
        jokes[6]="Why did I cross the road? I was programmed by a chicken";
        jokes[7]="Why can’t bad programmers drive well? They can’t C sharp";
        jokes[8]="Want to know my favorite drink? It’s a screwdriver";
        jokes[9]="Want to know my favorite dance? It’s the robot";

        var speak = new Array( );
        speak[0] = "Scroll through my agenda to see what great events I have going on";
        speak[1] = "";
        speak[2] = "";
        speak[3] = "Pick a song and let's boogie.";
        speak[4] = "Become a robot.";
        speak[5] = "Take a picture with me.";

//window.external.ChangeLanguage("en-us");
function FC_ContentsCall(strContentsName, strLanguage)
{
   // alert(strContentsName);
    
    switch (strContentsName)
    {
        case "Welcome":
            PlaySpeech("Hi, I’m Tracey, welcome to the Novartis booth. Please click around on my screen and then speak to my smart human friends in the booth.");
            break;
        case "Home":
            //writeCookie("NavigationState", true, 30);
           location.href = "../../maincontents.htm";
           break;
        case "Agenda":
            location.href = "Contents/Agenda/index.html";
            PlaySpeech(speak[0]);
            break;
        case "Solutions":
            //PlaySpeech(speak[2]);
            location.href = "Contents/Solutions/index.html";
            break;
        case "MatchGame":
            //PlaySpeech(speak[2]);
            location.href = "Contents/MatchGame/index.html";
            break;
        
        case "Dance":
            location.href = "Contents/Dance/index.html";
            PlaySpeech(speak[3]);
            break;
        case "Avatar":
            location.href = "Contents/RobotAvatar/index.htm";
            PlaySpeech(speak[4]);
            break;
        case "Selfie":
            location.href = "Contents/Selfie/index.html";
            PlaySpeech(speak[5]);
            break;
        
        
            
        case "Config":
            if(conf_count === 5)
            {
                conf_count = 0;
                location.href = "Config/Config.htm";
            }
            else
            {
                conf_count++;
            }

            break;
        default:
            break;
    } // end switch(strContentsName)
} // end FC_ContentsCall



function OnUserApproached()
{
    //PlaySpeech("Hello, welcome to the BWl Airport. Please press a button on my screen to begin.");
}


function ShowPopup(){

// get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    // calculate the values for center alignment
    var dialogTop =  '30%';//(maskHeight/3) - ($('#dialog-box').height());
    var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2);
    // assign values to the overlay and dialog box
    $('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
    $('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();
    document.getElementById('dialog-box').innerHTML = '<a href="#" class="button">Close</a><div class="dialog-content"><div id="dialog-message"><img width="800" src="assets/contact.png"/></div></div>';
}
function ShowPopupForm(){

// get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    // calculate the values for center alignment
    var dialogTop =  '30%';//(maskHeight/3) - ($('#dialog-box').height());
    var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2);
    // assign values to the overlay and dialog box
    $('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
    $('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();
    document.getElementById('dialog-box').style.display = "block";
    //document.getElementById('dialog-box').innerHTML = '<a href="#" class="button">Close</a><div class="dialog-content"><div id="dialog-message"><img width="800" src="assets/contact.png"/></div></div>';
}



$(document).ready(function(){

    //$('.navigation').hide();
    /*$('.get-started').click(function(){
        $('.welcome-text, .get-started, footer').hide();
        $('.navigation').show();
        
    });
    if (readCookie("NavigationState")) {
        $('.welcome-text, .get-started, footer').hide();
        $('.navigation').show();
    }
    $('.close-menu').click(function(){
        $('.navigation').hide();
        $('.welcome-text, .get-started, footer').show();
        writeCookie("NavigationState", false, 30);
    });*/
  
    $('body').css('opacity',0).stop().animate({"opacity": 1},1000);


    $('a.close').click(function () {
        $('#dialog-overlay, #dialog-box').hide();
        return false;
    });
})


function OnJoystickControlled(strPara){
    var btn_info = strPara.split(',')[4];


    if(btn_info[0] == '1'){
           // window.external.ChangeLanguage("en-us");
            SetVolume(1);
            window.external.PlaySpeech("Take a picture with me");     
    }

    if(btn_info[1] == '1'){
        //window.external.ChangeLanguage("en-us");
        SetVolume(1);
        window.external.PlaySpeech("Welcome to the CPCA Annual Conference");
        
    }
    if(btn_info[2] == '1'){
        //window.external.ChangeLanguage("en-us");
            SetVolume(1);
            window.external.PlaySpeech("Would you like to see me dance?");
    }
    if(btn_info[3] == '1'){
        //window.external.ChangeLanguage("en-us");
        SetVolume(1);
       window.external.PlaySpeech("Want to become a robot?");
        
    }
    if(btn_info[4] == '1'){
        FC_ContentsCall('Config');       
    }
}