// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};


Alloy.Globals.loading = Alloy.createWidget("nl.fokkezb.loading");
Alloy.Globals.applicarte = require('applicarte_REST_client');


    

if(OS_ANDROID){
    Alloy.Globals.tts = require("jp.isisredirect.tts");
    Alloy.Globals.tts.addEventListener(Alloy.Globals.tts.TTS_INITOK, function(e){
       //Alloy.Globals.tts.speak("Arrancando applicarte");
    });
    Alloy.Globals.tts.addEventListener(Alloy.Globals.tts.TTS_UTTERANCE_COMPLETE, function(e){});
    Alloy.Globals.tts.initTTS();
    
    // allowBackground: true on Android allows the 
    // player to keep playing when the app is in the 
    // background.

}
else if(OS_IOS){
    /*
    Alloy.Globals.tts = require('bencoding.utterance');
    var speech = Alloy.Globals.tts.createSpeech();
    speech.startSpeaking({text:"Arrancando applicarte"});    
*/
}
