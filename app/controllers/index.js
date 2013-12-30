var info;


var resources = require ('aux_UI');


var audioPlayer = Ti.Media.createAudioPlayer({ 
    url: '/music/background.mp3',
    allowBackground: true
});  

audioPlayer.start();

$.index.open();

$.index.addEventListener("open", function(){    
    getImageData();
}
);

$.info_content_tts.addEventListener("click", function(){    
   if(Alloy.Globals.tts.isSpeaking()){
       
        Alloy.Globals.tts.stopSpeaking();  
        audioPlayer.volume = 1;  
   }
   else{
        audioPlayer.volume = 0.2;
        Alloy.Globals.tts.speak(info.metadata_image.title +"."+info.metadata_painting.big_description); 
   }  
});

$.info_icon.addEventListener("click", function(){    
   $.content_scrollable.scrollToView(0);   
   icon_activate(0);  
});

$.videos_icon.addEventListener("click", function(){    
   $.content_scrollable.scrollToView(1);   
   icon_activate(1); 
});
$.audios_icon.addEventListener("click", function(){    
   $.content_scrollable.scrollToView(2);   
   icon_activate(2);  
});

$.images.addEventListener("click", function(){    
   $.content_scrollable.scrollToView(3); 
   icon_activate(3);  
});

$.content_scrollable.addEventListener("scrollend", function(e){  
    icon_activate(e.currentPage);
});

var icon_activate = function(id){    
   $.info_icon.backgroundImage= "/images/info.png";
   $.videos_icon.backgroundImage= "/images/videos.png";
   $.audios_icon.backgroundImage= "/images/audios.png";
   $.images_icon.backgroundImage= "/images/images.png";    
   if(id==0) $.info_icon.backgroundImage= "/images/info_on.png";
   else if(id==1) $.videos_icon.backgroundImage= "/images/videos_on.png";
   else if(id==2) $.audios_icon.backgroundImage= "/images/audios_on.png";   
   else if(id==3) $.images_icon.backgroundImage= "/images/images_on.png";         
}



function getImageData() {
    Alloy.Globals.loading.show('Loading image data...', true);    
    Alloy.Globals.applicarte.getPaintingDetails(function(e){        
        info = e;
        Ti.API.debug(JSON.stringify(e));
        
        $.starwidget.init();
        
        $.drawer.init({
            mainWindow: $.index,
            buttons: [
                { id: 'One', title: 'One', click: function (e) { alert("One"); } },
                { id: 'Two', title: 'Two',  click: function (e) { alert("Two"); } },    
                { id: 'Three', title: 'Three',  click: function (e) { alert("Three"); } }    
            ],
            autoClose: true,
            gutter: 5,
            overrideMenu: false
        });
        
        $.header.backgroundImage="http://hackaton.applicarte.es" + e.image_file_url;
        $.title.text=e.metadata_image.title;
        $.author.text=e.metadata_image.author;
        $.technique.text=e.metadata_painting.technique;
        $.year.text=e.metadata_image.year_of_creation;
        
        $.info_content_title.text = e.metadata_image.title;
        $.info_content_text.text = e.metadata_painting.big_description;      
        
        var listIM = resources.getResources(e, 'IM');
        var listVI = resources.getResources(e, 'VI');
        var listAU = resources.getResources(e, 'AU');
        
        $.videos_content.add(listVI);
        $.audios_content.add(listAU);
        $.images_content.add(listIM);
        
        Ti.API.debug(e.image_file);
        Alloy.Globals.loading.hide();        
       
    });
}